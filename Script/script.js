'use strict';
	let buttonId = document.getElementById('start'),
		buttonPlus = document.getElementsByTagName('button'),
		buttonPlusExpenses = buttonPlus[1],
		buttonPlusIncome = buttonPlus[0],
		checkbox = document.querySelector('#deposit-check'),
		additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
		resultTotalDudgetMonth = document.getElementsByClassName('.result-total budget_month-value'),
		resultTotalBudgetDay = document.getElementsByClassName('.result-total budget_day-value'),
		resultTotalExpensesMonth = document.getElementsByClassName('.result-total expenses_month-value'),
		resultTotalAdditionalIncome = document.getElementsByClassName('.result-total additional_income-value'),
		resultTotalAdditionalExpenses = document.getElementsByClassName('.result-total additional_expenses-value'),
		resultTotalIncomePeriod = document.getElementsByClassName('.result-total income_period-value'),
		resultTotalTargetMonth = document.getElementsByClassName('.result-total target_month-value'),
		salaryAmount = document.querySelector('salary-amount'),
		incomeTitle = document.querySelector('income-title'),
		cincomeAmount = document.querySelector('income-amount'),
		additionalExpensesItem = document.querySelector('additional_expenses-item'),
		expensesAmount = document.querySelector('.expenses-amount'),
		expensesTitle = document.querySelector('.expenses-title'),
		periodSelect = document.querySelector('.period-select');
		
		
		
		
	