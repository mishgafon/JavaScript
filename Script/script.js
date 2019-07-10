'use strict';

let books = document.querySelectorAll('.books'),
    book = document.querySelector('.book'),
    bookHead = document.querySelectorAll('a'),
    bookItem = document.querySelectorAll('li'),
    removeGoogle = document.querySelector('.adv'),
    
    body = document.querySelector('body');
    
    
    //main = document.querySelectorAll('div');

// console.log(books);
 console.log(book);
 console.log(bookItem);
// //console.log(body);
// console.log(body);
// console.log(bookItem);
//console.log(removeGoogle);
books[0].insertBefore(book[1], book[0]);
books[0].insertBefore(book[2], null);
books[0].insertBefore(book[4], book[3]);
body.setAttribute('style', 'background-image: url(../image/you-dont-know-js.jpg)');
bookHead[4].textContent = 'Книга 3. this и Прототипы Объектов';
removeGoogle.classList.remove('adv');
console.log(bookItem[6]);
console.log(book[0]);
book[2].insertBefore(bookItem[6], bookItem[4]);

//book[5]
