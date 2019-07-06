'use strict';

let money, 
   addExpenses = prompt( 'Перечислите возможные расходы за ' +  
        'рассчитываемый период через запятую'.split(',') ),
    deposit = confirm( 'Есть ли у Вас депозит в банке?' ),
    income = 'фриланс',
    mission = 50000,
    period = 12; 
 
    

let start = function(){
    do {
    money = prompt( 'Ваш месячный доход?' );
       }
      while (isNaN(money) || money == '' || money ==null)
};
console.log(money);
start();



    let showTypeof = function(item) {
        console.log(item, typeof item); 
    };
    
    showTypeof(money);
    showTypeof(income);
    showTypeof(deposit);
console.log( 'Мой доход составляет: ' + money );
//console.log( 'Мой бюджет на день составляет: ' + budgetDay + ' руб.' ); 
//проверяем значения




let expenses,
    expensesRepeat;

let expensesMonth = function() {
    let sum = 0;
      
    for (let i=0; i <2; i++){
        if (i === 0){
            expenses = prompt( 'Какие обязательные ежемесячные расходы у вас есть?', 'Кредиты' );
          } else if(i === 1){
            expensesRepeat = prompt( 'Какие еще обязательные ежемесячные расходы у вас есть?', 'Квартплата' );
          }
          let counter;
          do {
            counter = prompt( 'Во сколько это обойдется?' );
          } while (isNaN(counter) || counter == '' || counter ==null)
            sum += +counter;
                           
        }

    return sum;
    };
let expensesAmount = expensesMonth();
console.log('Расходы: ', expensesAmount);




function getAccumulatedMonth() {
    return ( money - expensesAmount ); //аналогичные действия
}
let accumulatedMonth = getAccumulatedMonth();
console.log( 'Накопления за месяц: ', accumulatedMonth ); 



//function getTargetMonth() {
//   return (Math.floor(mission / accumulatedMonth));  
//}
//console.log('Цель будет достигнута через: ', getTargetMonth(), ' месяца(ев)');
  


function getTargetMonth() {
        let targetMonth = +Math.floor(mission / accumulatedMonth);
       if(targetMonth < 0){
            return('Цель не будет достигнута');    
        } else{
            return('Цель будет достигнута через: ' + targetMonth + ' месяца(ев)');
    }
}
 console.log(getTargetMonth());


function getStatusIncome(){
    let budgetDay = Math.floor( accumulatedMonth /30 );
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