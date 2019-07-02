let money = 100000;
    income = 'Фриланс';
    addExpenses = 'Машина, Коммуналка, Продукты';
    deposit = true;
    mission = 500000;
    period = 5;
    budgetDay = money / 30; 
console.log(typeof money, typeof  income, typeof  deposit, income.length);
console.log(addExpenses.toLowerCase().split(', '));
console.log('Период ' + period + ' месяцев.' + ' Цель: заработать ' + mission + ' рублей');
console.log('Бюджет на день: ' + budgetDay + '. Остаток: ' + money % 30);  

alert("ввод данных окончен!");

