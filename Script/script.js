'use strict';
	let start = document.getElementById('start'),
		cancel = document.getElementById('cancel'),
		buttonPlus = document.getElementsByTagName('button'),
		expensesPlus = buttonPlus[1],
		incomePlus = buttonPlus[0],
		checkbox = document.querySelector('#deposit-check'),
		additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
		budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
		budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
		expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
		additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
		additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
		incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
		targetMonthValue = document.getElementsByClassName('target_month-value')[0],
		salaryAmount = document.querySelector('.salary-amount'),
		incomeTitle = document.querySelector('.income-title'),
		incomeAmount = document.querySelector('.income-amount'),
		expensesItems = document.querySelectorAll('.expenses-items'),
		expensesTitle = document.querySelector('.expenses-title'),
		periodSelect = document.querySelector('.period-select'),
		additionalExpensesItem = document.querySelector('.additional_expenses-item'),
		targetAmount = document.querySelector('.target-amount'),
		incomeItem = document.querySelectorAll('.income-items'),
		periodAmount = document.querySelector('.period-amount');

			let appData = {		
			income: {},
			addIncome: [],
			expenses: {},
			addExpenses: [],
			deposit: false,
			incomeMonth: 0, //доп.доход			
			budget: 0,
			budgetDay: 0, 
			budgetMonth: 0,
			expensesMonth: 0,
			start: function () {
				
				if (salaryAmount.value === ''){
					start.setAttribute('disabled', 'disabled');
					return;
				}
				this.budget = +salaryAmount.value;	

				this.getExpenses();
				this.getIncome();
				this.getExpensesMonth();
				this.getAddExpenses();
				this.getAddIncome();
				this.getBudget();
				this.getBlockInput();
				

				this.showResult();
				
			},
			
			showResult: function(){
				budgetMonthValue.value = this.budgetMonth;
				budgetDayValue.value = this.budgetDay;
				expensesMonthValue.value = this.expensesMonth;
				additionalExpensesValue.value = this.addExpenses.join(',');
				additionalIncomeValue.value = this.addIncome.join(', ');
				targetMonthValue.value = Math.ceil(this.getTargetMonth()); // срок достижения цели
				incomePeriodValue.value = this.calcPeriod(); 
				periodSelect.addEventListener('change', function(){
					incomePeriodValue.value = appData.calcPeriod();
				})
			},

			addExpensesBlock: function(){
				let cloneExpensesItem = expensesItems[0].cloneNode(true);
					expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
					expensesItems = document.querySelectorAll('.expenses-items');
					if(expensesItems.length === 3){

					expensesPlus.style.display = 'none';
				}
			},

			getExpenses: function(){
				const setContext = this; 
				expensesItems.forEach(function(item){
					let itemExpenses = item.querySelector('.expenses-title').value;
					let cashExpenses = item.querySelector('.expenses-amount').value;
					if(itemExpenses !== '' && cashExpenses !== ''){
						setContext.expenses[itemExpenses] = cashExpenses;
					}	
		
				});
		
				},

				addIncomeBlock: function(){
					let cloneIncomeItem = incomeItem[0].cloneNode(true);
						incomeItem[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
						incomeItem = document.querySelectorAll('.income-items');
						if(incomeItem.length === 3){
	
						incomePlus.style.display = 'none';
					}
				},


			getIncome: function(){
				const setContext = this; 
				incomeItem.forEach(function(item){
					let itemIncome = item.querySelector('.income-title').value;
					let cashIncome  = item.querySelector('.income-amount').value;
					if(itemIncome !== '' && cashIncome !== ''){
						setContext.income[itemIncome] = cashIncome;
					}	
					 for (let key in setContext.income){
						setContext.incomeMonth += +setContext.income[key];
					 }
				});
			},


		getAddExpenses: function(){
			const setContext = this;
			let addExpenses = additionalExpensesItem.value.split(',');
			addExpenses.forEach(function(item){
				item = item.trim();
				if (item !== ''){
					setContext.addExpenses.push(item);
				}
			});
		},


		getAddIncome: function(){
			const setContext = this;
			additionalIncomeItem.forEach(function(item){
				let itemValue = item.value.trim();
				if(itemValue !== ''){
					setContext.addIncome.push(itemValue);
				}
			});
		},
		
		
			getExpensesMonth: function() { //Cчитаем сумму всех расходов за месяц
				let sum = 0; 
		
				for (let key in this.expenses){
					sum += +this.expenses[key]; 
				}
				this.expensesMonth = sum;
			},
		
			getBudget: function () { // budgetMonth и budgetDay
				this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth,
				this.budgetDay = Math.floor(this.budgetMonth / 30);
			}, 
		
			getTargetMonth: function() { // Цель
				return targetAmount.value /this.budgetMonth; 
			},
		
			getStatusIncome: function() { //Статус
				if (this.budgetDay <= 0) {
					return ('Что то пошло не так');
				} else if (this.budgetDay > 0 && this.budgetDay <= 300) {
					return ("Низкий уровень дохода");
				} else if (this.budgetDay > 800) {
					return ("Высокий уровень дохода");
				} else if (this.budgetDay > 300 && this.budgetDay <= 800) {
					return (" Средний уровень дохода");
				} 
			},


			
			getRangeAmount: function(){
				return periodAmount.textContent = periodSelect.value;
				
			},

			calcPeriod: function(){ //Накопления за период
				return this.budgetMonth * periodSelect.value;


			 },

			 getBlockInput: function(){
			 	document.querySelectorAll('.data input[type=text]').forEach(function(item){
			 		item.disable = true;
			 	});
				start.style.display = 'none';
				 cancel.style.display = 'block';
				 
			 },
			 
			 getReset: function(){
				document.location.reload(true);
				
			 }
			


		}
	 
		
		start.addEventListener('click', appData.start.bind(appData));
		periodSelect.addEventListener('change', appData.getRangeAmount);
		cancel.addEventListener('click', appData.getReset);

		expensesPlus.addEventListener('click', appData.addExpensesBlock);
		incomePlus.addEventListener('click', appData.addIncomeBlock);
		
		
		