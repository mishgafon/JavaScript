'use strict';

let money = +prompt( 'Ваш месячный доход?', 10000 ),
    addExpenses = prompt( 'Перечислите возможные расходы за ' +  
        'рассчитываемый период через запятую'.split(',') ),
    deposit = confirm( 'Есть ли у Вас депозит в банке?' ),
    income = 'фриланс',
    expenses = prompt( 'Какие обязательные ежемесячные расходы у вас есть?', 'Кредиты' ),
    budget = +prompt( 'Во сколько это обойдется?', 2000 ),
    expensesRepeat = prompt( 'Какие еще обязательные ежемесячные расходы у вас есть?', 'Квартплата' ),
    budgetRepeat = +prompt( 'Во сколько это обойдется?', 1000 ),
    mission = 50000,
    period = 12, 
    budgetMonth = money - ( budget + budgetRepeat ),
    budgetDay = Math.floor( budgetMonth / 30 );


let showTypeof = function( item ) {
    console.log( item, typeof item ); 
};
showTypeof( money );
showTypeof( income );
showTypeof( deposit );

console.log( 'Мой доход составляет: ' + money );
console.log( 'Мой бюджет на день составляет: ' + budgetDay + ' руб.' );
//проверяем значения

function getExpensesMonth() {
    return ( budget + budgetRepeat ); //складываем расходы
}
console.log( 'Общие расходы за месяц: ', getExpensesMonth() ); //вызываем функцию


function getAccumulatedMonth() {
    return ( money - getExpensesMonth() ); //аналогичные действия
}
let accumulatedMonth = getAccumulatedMonth();
console.log( 'Накопления за месяц: ', accumulatedMonth ); 




function getTargetMonth() {
    return (Math.floor(mission / accumulatedMonth));  
}
console.log('Цель будет достигнута через: ', getTargetMonth(), ' месяца(ев)');

function getStatusIncome(){
    if (budgetDay >= 0 && budgetDay < 300){
        return('Низкий');
    } else if (budgetDay >= 300 && budgetDay < 800){
        return('Средний');
    } else if (budgetDay >= 800){
        return('Высокий');
    } else {
        return('Что-то пошло не так'); 
    }
}
console.log('Статус дохода: ', getStatusIncome()); // вызываем функцию