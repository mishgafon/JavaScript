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
    addExpenses: [], //Возможные расходы
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 3,
    budget: money,
    budgetDay: 0, 
    budgetMonth: 0,
    expensesMonth: 0,

    asking: function() { //вопросы

        if(confirm ('Есть ли у вас дополнительный источник заработка?')){

            let itemIncome,
                cashIncome;

            do {
                itemIncome = prompt ('Какой у вас дополнительный заработок?', 'Таксую');
            }
            while (Number(itemIncome) || itemIncome === '' || itemIncome === null);

            do {
                cashIncome = prompt ('Сколько в месяц вы на этом зарабатываете?', 10000);
            }
            while (isNaN(cashIncome) || cashIncome === '' || cashIncome === null);
            
            appData.income[itemIncome] = cashIncome;
        }

        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?', 
        'Кредит,машина,квартира'); 
            appData.addExpenses = addExpenses.split(',');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');

            for (let word of appData.addExpenses) {
                word = word[0].toUpperCase() + word.substr(1);
                console.log(word);
            }


            for (let i = 0; i < 2; i++) {

                let itemExpenses,
                    cashExpenses;
    
                do {
                    itemExpenses = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Кредиты');
                }
                while (Number(itemExpenses) || itemExpenses === '' || itemExpenses === null);
    
                do {
                    cashExpenses = prompt('Во сколько это обойдется?', 1000);
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
    },

    getInfoDeposit: function(){
        if(appData.deposit){
           
            do {
                appData.percentDeposit = prompt('Какой годовой процент?', '10');
            }
            while (Number(appData.percentDeposit) || appData.percentDeposit === '' || appData.percentDeposit === null);
            
            do {
                appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            }
            while (isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null);
            
         }
    },

    calcSavedMoney: function(){

        return appData.budgetMonth * appData.period;
    },


              
    

} 

appData.asking();
appData.getExpensesMonth();
appData.getBudget();


console.log("Бюджет на день: " + appData.budgetDay);
console.log("Расходы составят: " + appData.expensesMonth);


console.log((appData.getTargetMonth() >= 0) ?
    'Срок достижения цели: ' + appData.getTargetMonth() + ' мес.' : 'Цель не будет достигнута'); 

console.log(appData.getStatusIncome());


for (let key in appData){
    console.log('Наша программа включает в себя данные: ' + key + ', Значение:'  + appData[key]);
};

for (let key in appData.addExpenses){
    console.log(appData.addExpenses[key][0].toUpperCase() + appData.addExpenses[key].substr(1));
 } 

