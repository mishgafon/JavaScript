'use strict()';

let money,
    start = function () {
        do {
            money = prompt("Ваш доход за месяц ?", "50000");
        }
        while (isNaN(money) || money == '' || money == null);
    };

start();

let appData = {

    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    budget: money,
    budgetDay: 0, 
    budgetMonth: 0,
    expensesMonth: 0,

    asking: function() { //вопросы

        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?', 
        'а, б, в'); //дважды использовал split();
            appData.addExpenses = addExpenses.toLowerCase().split(',');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');

            for (let i = 0; i < 2; i++) {

                let itemExpenses,
                    cashExpenses;
    
                do {
                    itemExpenses = prompt('Какие обязательные ежемесячные расходы у вас есть?');
                }
                while (Number(itemExpenses) || itemExpenses === '' || itemExpenses === null);
    
                do {
                    cashExpenses = prompt('Во сколько это обойдется?');
                }
                while (isNaN(cashExpenses) || cashExpenses === '' || cashExpenses === null);
    
                appData.expenses[itemExpenses] = cashExpenses;
            } 
    },

    getExpensesMonth: function() { //Cчитаем сумму всех расходов за месяц
        let sum = 0; 

        for (let key in appData.expenses){
            sum += +appData.expenses[key]; 
        }
        appData.expensesMonth = sum;
    },

    getBudget: function () { // budgetMonth и budgetDay
        appData.budgetMonth = appData.budget - appData.expensesMonth,
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    }, 

    getTargetMonth: function() { // Цель
        return Math.ceil(appData.mission / appData.budgetMonth); 
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
    }
}; 

appData.asking();
appData.getExpensesMonth();
appData.getBudget();


console.log("Бюджет на день: " + appData.budgetDay);
console.log("Расходы составят: " + appData.expensesMonth);

console.log((appData.getTargetMonth() >= 0) ?
    'Срок достижения цели: ' + appData.getTargetMonth() + ' мес.' : 'Цель не будет достигнута'); 

console.log(appData.getStatusIncome() );

for (let key in appData){
    console.log('Наша программа включает в себя данные: ' + key + ', Значение:'  + appData[key]);
}