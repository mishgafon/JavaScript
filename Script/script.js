'use strict';
let body = document.querySelector('body'),
	books = document.querySelectorAll('.books'),
	book = document.querySelectorAll('.book'),
	adv = document.querySelectorAll('.adv'),
	ul = document.querySelectorAll('ul'), 
	li = document.querySelectorAll('li'),
	a = document.querySelectorAll('a'),
	chapter8 = document.createElement('li');

    console.log(body, books, book, a, ul, li);   
    
 
 
books[0].insertBefore(book[1], book[0]); // переставляем блоки с книгами
books[0].insertBefore(book[2], null);
books[0].insertBefore(book[4], book[3]);
adv[0].remove(); // удаление рекламы 
body.setAttribute('style', 'background-image: url(../image/you-dont-know-js.jpg)');
a[4].textContent = 'Книга 3. this и Прототипы Объектов';
ul[0].insertBefore(li[8], li[4]); 
ul[0].insertBefore(li[6], li[8]);
ul[0].insertBefore(li[2], li[10]); 
ul[5].insertBefore(li[48], li[52]);
ul[5].insertBefore(li[55], li[49]);  
ul[5].insertBefore(li[51], li[54]);
chapter8.textContent = 'Глава 8: За пределами ES6';
ul[2].appendChild(chapter8);
ul[2].insertBefore(li[26], null);










