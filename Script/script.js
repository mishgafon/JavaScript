'use strict';
class DomElement {
	constructor (selector, height, width, bg, fontSize) {
	this.height = height; 
  	this.width = width; 
  	this.bg = bg; 
  	this.fontSize = fontSize;
	}
}

DomElement.prototype.newElement = function(){
	let insertSymbol = prompt('Введите точку(.) или решетку(#)');
	
	if (insertSymbol == '.') {
		let div = document.createElement('div'); 
	} else {
		let paragraph = document.createElement('p');
	}
	

	 
}