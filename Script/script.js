'use strict'
let money = +prompt('Ваш месячный доход?', 10000),
    income = 'Фриланс',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'.split(',')),
    //addExpenses = 'Машина, Коммуналка, Продукты';
    deposit = !!confirm('Есть ли у вас депозит в банке?'),
    expenses = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Кредиты'),
    budget = +prompt('Во сколько это обойдется?', 2000),
    expensesRepeat = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Кварт.плата'),
    budgetRepeat = +prompt('Во сколько это обойдется?', 1000), 
    mission = 50000,
    budgetMonth = money - (budget + budgetRepeat),
    budgetDay = budgetMonth / 30, 
    period = mission / budgetMonth;
    //console.log('Доход за месяц: ', budgetMonth);
    
    let showTypeof = function(item){
        console.log(typeof item);
    } 
    showTypeof(money);
    showTypeof(income);
    showTypeof(deposit);

///console.log(addExpenses.toLowerCase().split(','));
//console.log('Цель: заработать ' + mission + ' рублей.' + ' Цель будет достигнута через ' + Math.ceil(period) + ' месяцев.' );
//console.log('Бюджет на день: ' + Math.floor(budgetDay));  

function getStatusIncome() {
if (budgetDay > 800){
    return('Высокий уровень дохода');
} else if (300 < budgetDay && budgetDay <= 800 ) {
    return('Средний уровень дохода');
} else  if (0 <= budgetDay && budgetDay <= 300 ) {
    return('Низкий уровень дохода');
} else  
    return('Что-то пошло не так');
}
console.log('Уровень дохода: ', getStatusIncome()); 

function getExpensesMonth(){
        return ( budget + budgetRepeat );
};
console.log('Сумма всех расходов за месяц: ', getExpensesMonth());
   

    let accumulatedMonth = function getAccumulatedMonth(){
        return ( budgetMonth - getExpensesMonth() );
};
console.log('Накопления за месяц: ', accumulatedMonth());

function rappData(){
    let appData = mission;
} 

    let TargetMonth = function getTargetMonth(){
            return  (rappData.mission / accumulatedMonth);
};
console.log('Период, за который будет достигнута цель(мес.): ', Math.floor(TargetMonth));
console.log('accumulatedMonth: ', accumulatedMonth());
console.log(typeof accumulatedMonth)
//console.log('mission: ', mission());



alert("ввод данных окончен!");

    



