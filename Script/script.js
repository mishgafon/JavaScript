'use strict'
let money = +prompt('Ваш месячный доход?'),
    income = 'Фриланс',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'.split(',')),
    //addExpenses = 'Машина, Коммуналка, Продукты';
    deposit = !!confirm('Есть ли у вас депозит в банке?'),
    expenses = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    budget = +prompt('Во сколько это обойдется?'),
    expensesRepeat = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    budgetRepeat = +prompt('Во сколько это обойдется?'), 
    mission = 50000,
    budgetMonth = money - (budget + budgetRepeat),
    budgetDay = budgetMonth / 30, 
    period = mission / budgetMonth;
    console.log('Доход за месяц: ', budgetMonth);
console.log(typeof money, typeof  income, typeof  deposit);
console.log(addExpenses.toLowerCase().split(','));
console.log('Цель: заработать ' + mission + ' рублей.' + ' Цель будет достигнута через ' + Math.ceil(period) + ' месяцев.' );
console.log('Бюджет на день: ' + Math.floor(budgetDay));  
//console.log('Цель: заработать ' + mission + ' рублей.' + ' Цель будет достигнута через ' + Math.ceil(period) + ' месяцев.' );
//console.log('Период ' + period + ' месяцев.' + ' Цель: заработать ' + mission + ' рублей');
if (budgetDay > 800){
    console.log('Высокий уровень дохода')
} else if (300 < budgetDay && budgetDay <= 800 ) {
    console.log('Средний уровень дохода')
} else  if (0 <= budgetDay && budgetDay <= 300 ) {
    console.log('Низкий уровень дохода') 
} else  
    console.log('Что-то пошло не так') 
alert("ввод данных окончен!");







