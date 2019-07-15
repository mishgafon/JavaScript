'use strict';
	let buttonId = document.getElementById('start'),
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
					buttonId.setAttribute('start', 'disabled');
					return;
				}
				appData.budget = +salaryAmount.value;	

				appData.getExpenses();
				appData.getIncome();
				appData.getExpensesMonth();
				appData.getAddExpenses();
				appData.getAddIncome();
				appData.getBudget();
				appData.getBlockInput();

				appData.showResult();
				
			},
			
			showResult: function(){
				budgetMonthValue.value = appData.budgetMonth;
				budgetDayValue.value = appData.budgetDay;
				expensesMonthValue.value = appData.expensesMonth;
				additionalExpensesValue.value = appData.addExpenses.join(',');
				additionalIncomeValue.value = appData.addIncome.join(', ');
				targetMonthValue.value = Math.ceil(appData.getTargetMonth()); // срок достижения цели
				incomePeriodValue.value = appData.calcPeriod(); 
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
				expensesItems.forEach(function(item){
					let itemExpenses = item.querySelector('.expenses-title').value;
					let cashExpenses = item.querySelector('.expenses-amount').value;
					if(itemExpenses !== '' && cashExpenses !== ''){
						appData.expenses[itemExpenses] = cashExpenses;
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


			getIncome: function(){ //такие же действия, что и getExpenses
				incomeItem.forEach(function(item){
					let itemIncome = item.querySelector('.income-title').value;
					let cashIncome  = item.querySelector('.income-amount').value;
					if(itemIncome !== '' && cashIncome !== ''){
						appData.income[itemIncome] = cashIncome;
					}	
					 for (let key in appData.income){
					 appData.incomeMonth += +appData.income[key];
					 }
				});
			},


		getAddExpenses: function(){
			let addExpenses = additionalExpensesItem.value.split(',');
			addExpenses.forEach(function(item){
				item = item.trim();
				if (item !== ''){
					appData.addExpenses.push(item);
				}
			});
		},


		getAddIncome: function(){
			additionalIncomeItem.forEach(function(item){
				let itemValue = item.value.trim();
				if(itemValue !== ''){
					appData.addIncome.push();
				}
			});
		},
		
		
			getExpensesMonth: function() { //Cчитаем сумму всех расходов за месяц
				let sum = 0; 
		
				for (let key in appData.expenses){
					sum += +appData.expenses[key]; 
				}
				appData.expensesMonth = sum;
			},
		
			getBudget: function () { // budgetMonth и budgetDay
				appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth,
				appData.budgetDay = Math.floor(appData.budgetMonth / 30);
			}, 
		
			getTargetMonth: function() { // Цель
				return targetAmount.value / appData.budgetMonth; 
			},
		
			getStatusIncome: function() { //Статус
				if (appData.budgetDay <= 0) {
					return ('Что то пошло не так');
				} else if (appData.budgetDay > 0 && appData.budgetDay <= 300) {
					return ("Низкий уровень дохода");
				} else if (appData.budgetDay > 800) {
					return ("Высокий уровень дохода");
				} else if (appData.budgetDay > 300 && appData.budgetDay <= 800) {
					return (" Средний уровень дохода");
				} 
			},


			
			getRangeAmount: function(){
				return periodAmount.textContent = periodSelect.value;
				
			},

			calcPeriod: function(){ //Накопления за период
				return appData.budgetMonth * periodSelect.value;


			 },

			 getBlockInput: function(){
			 	document.querySelectorAll('.data input[type=text]').forEach(function(item){
			 		item.disable = true;
			 	});
				start.style.display = 'none';
			 	cancel.style.display = 'block';
			 }			
			


		}
	 
		
		start.addEventListener('click', appData.start);
		periodSelect.addEventListener('change', appData.getRangeAmount);
		//buttonId.addEventListener('click', appData.getBlockInput);

		expensesPlus.addEventListener('click', appData.addExpensesBlock);
		incomePlus.addEventListener('click', appData.addIncomeBlock);
		
		
		// console.log("Бюджет на день: " + appData.budgetDay);
		// //console.log("Расходы составят: " + appData.expensesMonth);
		
		// // console.log((appData.getTargetMonth() >= 0) ?
		// // 	'Срок достижения цели: ' + appData.getTargetMonth() + ' мес.' : 'Цель не будет достигнута'); 
		
		// //console.log(appData.getStatusIncome() );
		
		// for (let key in appData){
		// 	console.log('Наша программа включает в себя данные: ' + key + ', Значение:'  + appData[key]);
		// }	
		
	