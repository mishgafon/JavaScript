'use strict';
	let start = document.getElementById('start'),
		cancel = document.getElementById('cancel'),
		buttonPlus = document.getElementsByTagName('button'),
		expensesPlus = buttonPlus[1],
		incomePlus = buttonPlus[0],
		budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
		budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
		expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
		additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
		additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
		incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
		targetMonthValue = document.getElementsByClassName('target_month-value')[0],
		expensesItems = document.querySelectorAll('.expenses-items'),
		incomeItems = document.querySelectorAll('.income-items'),
		periodSelect = document.querySelector('.period-select'),
		periodAmount = document.querySelector('.period-amount'),
		depositCheck = document.querySelector('#deposit-check'),
		depositBank = document.querySelector('.deposit-bank'),
		depositAmount = document.querySelector('.deposit-amount'),
		depositPercent = document.querySelector('.deposit-percent');
	
	const
	 salaryAmount = document.querySelector('.salary-amount'),
	 incomeTitle = document.querySelector('.income-title'),
	 incomeAmount = document.querySelector('.income-amount'),
	 additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
	 expensesTitle = document.querySelector('.expenses-title'),
	 additionalExpensesItem = document.querySelector('.additional_expenses-item'),
	 targetAmount = document.querySelector('.target-amount');

	

const AppData = function(){
	this.income = {};
	this.addIncome = [];
	this.expenses = {};
	this.addExpenses = [];
	this.deposit = false;
	this.incomeMonth = 0; //доп.доход			
	this.budget = 0;
	this.budgetDay = 0; 
	this.budgetMonth = 0;
	this.expensesMonth = 0;
	this.percentDeposit = 0;
	this.moneyDeposit = 0;
};


AppData.prototype.start = function () {
				
	if (salaryAmount.value === ''){
		start.setAttribute('disabled', 'disabled');
		return;
	}
	this.budget = +salaryAmount.value;	
	this.getExpenses();
	this.getIncome();
	this.getExpensesMonth();
	this.getIncomeMonth();
	this.getNewAdd();
	this.getInfoDeposit();
	this.getBudget();
	this.getBlockInput();
	this.showResult();
};


AppData.prototype.showResult = function(){
	budgetMonthValue.value = this.budgetMonth;
	budgetDayValue.value = this.budgetDay;
	expensesMonthValue.value = this.expensesMonth;
	additionalExpensesValue.value = this.addExpenses.join(',');
	additionalIncomeValue.value = this.addIncome.join(', ');
	targetMonthValue.value = Math.ceil(this.getTargetMonth()); // срок достижения цели
	incomePeriodValue.value = this.calcPeriod(); 
};


AppData.prototype.addBlocks = function (buttonPlus, nodeList) {
	let cloneItem = nodeList[0].cloneNode(true); //получение первого эл-та для работы с инпутами
		cloneItem.querySelectorAll('input').forEach((item) => item.value = ''); //запрет копирования содержимого инпута
		nodeList[0].parentNode.insertBefore(cloneItem, buttonPlus); //добавление нового инпута
		cloneItem.children[0].addEventListener('input', this); //копирование потомков в блок
		cloneItem.children[1].addEventListener('input', this);

	if (nodeList.length === 3) {
		buttonPlus.style.display = 'none';  //удаляем кнопку добавления
	}

};


AppData.prototype.getExpenses = function(){
	const setContext = this; 
		expensesItems.forEach(function(item){
		let itemExpenses = item.querySelector('.expenses-title').value;
		let cashExpenses = item.querySelector('.expenses-amount').value;
			if(itemExpenses !== '' && cashExpenses !== ''){
				setContext.expenses[itemExpenses] = cashExpenses;
			}	

		});

};


AppData.prototype.getIncome = function () {

	const setContext = this;

	incomeItems.forEach(function (item) {

		let itemIncome = item.querySelector('.income-title').value,
			cashIncome = item.querySelector('.income-amount').value;

		if (itemIncome !== '' && cashIncome !== '') {
			setContext.income[itemIncome] = cashIncome;
		}
	});
};


AppData.prototype.getInfoDeposit = function(){
	if (this.deposit) {
		this.percentDeposit = depositPercent.value;
		this.moneyDeposit = depositAmount.value;
	}
};


AppData.prototype.getNewAdd = function(){
	const setContext = this;
	let addExpenses = additionalExpensesItem.value.split(',');
	addExpenses.forEach(function(item){
		item = item.trim();
		if (item !== ''){
			setContext.addExpenses.push(item);
		}
	});

	
	additionalIncomeItem.forEach(function(item){
		let itemValue = item.value.trim();
		if(itemValue !== ''){
			setContext.addIncome.push(itemValue);
		}
	});
};


AppData.prototype.getExpensesMonth = function() { //Cчитаем сумму всех расходов за месяц
	let sum = 0; 

	for (let key in this.expenses) {
		sum += +this.expenses[key]; 
	}
	this.expensesMonth = sum;
};


AppData.prototype.getIncomeMonth = function () {

	for (let key in this.income) {
		this.incomeMonth += +this.income[key]
	}

};


AppData.prototype.getBudget = function () { // budgetMonth и budgetDay
	this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit)/12;
	this.budgetDay = Math.floor(this.budgetMonth / 30);
};


AppData.prototype.getTargetMonth = function() { // Цель
	return targetAmount.value / this.budgetMonth; 
};


AppData.prototype.getRangeAmount = function() {
	return periodAmount.textContent = periodSelect.value;
};


AppData.prototype.calcPeriod = function() { //Накопления за период
	return this.budgetMonth * periodSelect.value;
};


AppData.prototype.getBlockInput = function() {

	document.querySelectorAll('.data input[type=text]').forEach(function(item){
		item.disabled = true;
	});

   	start.style.display = 'none';
	cancel.style.display = 'block';
	
};


AppData.prototype.getReset = function() {
	document.location.reload(true);
	
};


AppData.prototype.addEventListener = function(){
	start.addEventListener('click', this.start.bind(appData));
		periodSelect.addEventListener('change', this.getRangeAmount);
		cancel.addEventListener('click', this.getReset);
	
		incomePlus.addEventListener('click', () => {
			this.addBlocks(incomeItems, incomePlus);
			incomeItems = document.querySelectorAll('.income-items');
		}); // доходs

		expensesPlus.addEventListener('click', () => {
			this.addBlocks(expensesItems, expensesPlus);
			expensesItems = document/querySelectorAll('.expenses-items');
		});// расходs


		periodSelect.addEventListener('change', function (){
			incomePeriodValue.value = appData.calcPeriod();
		});
			
			depositCheck.addEventListener('change', function(){
				if(depositCheck.checked){
					depositBank.style.display = 'inline-block';
					depositAmount.style.display = 'inline-block';
					appData.deposit = 'true';
					depositBank.addEventListener('change', function(){
					let  selectIndex = this.options[this.selectedIndex].value;
					if(selectIndex === 'other'){
						depositPercent.disabled = false;
						depositPercent.style.display = 'inline-block';
						depositPercent.value = '';
					} else {
						depositPercent.style.display = 'none';
						depositPercent.value = selectIndex;
					}
					});
				} else {
					depositBank.style.display = 'none';
					depositAmount.style.display = 'none';
					depositAmount.value = '';
					appData.deposit = 'false';
				}
			});
		
};


const appData = new AppData();
AppData.prototype.addEventListener();