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
		div.style.cssText = 'height: 400px; width: 400px; background: yellow; fontSize: 12px;';	  
		div.className = '.';
		div.innerHTML = '<div> ${insertSymbol} </div>';
		div.textContent = 'Выполнилось условие';
		document.body.appendChild(div); 	
			console.log(div);

	} else if (insertSymbol = #){
		let paragraph = document.createElement('p');
		paragraph.style.cssText = 'height: 400px; width: 400px; background: green; fontSize: 12px;';	  
		paragraph.className = 'p';
		paragraph.innerHTML = '<p> ${insertSymbol} </p>';
		paragraph.textContent = 'Выполнилось второе условие';
		let node = document.createTextNode("Вы ввели точку");
		document.body.appendChild(node);
	}
	

};


let newObject = new DomElement(40, 300, 'blue', 18);
newObject.textContent = 'Привет, я новый домЭлемент';
newObject.createElement();
console.log(newObject);




 
    



// Example Explained 
// This code creates a new <p> element:

// var para = document.createElement("p");
// To add text to the <p> element, you must create a text node first. This code creates a text node:

// var node = document.createTextNode("This is a new paragraph.");
// Then you must append the text node to the <p> element:

// para.appendChild(node);
// Finally you must append the new element to an existing element.

// This code finds an existing element:

// var element = document.getElementById("div1");
// This code appends the new element to the existing element:

// element.appendChild(para);