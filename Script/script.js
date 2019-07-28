
window.addEventListener('DOMContentLoaded', function(){
	'use strict';

	//Timer
function countTimer(deadline){
	const 	timerHours = document.querySelector('#timer-hours'),
			timerMinutes = document.querySelector('#timer-minutes'),
			timerSeconds = document.querySelector('#timer-seconds');
		

		function getTimeRemaining(){
			const	dateStop = new Date(deadline).getTime(),
					dateNow = new Date().getTime(),
					timeRemaining = (dateStop - dateNow) / 1000,
					seconds = Math.floor(timeRemaining % 60),
					minutes = Math.floor((timeRemaining / 60) % 60),
					hours = Math.floor(timeRemaining / 60 / 60);
	
				return {timeRemaining, hours, minutes, seconds};
				
		};
		
		
		function updateClock(){
			let timer = getTimeRemaining();
			

			if(timer.timeRemaining > 0){

				timerHours.textContent = (`0` + timer.hours).slice(-2);
				timerMinutes.textContent = (`0` + timer.minutes).slice(-2); 
				timerSeconds.textContent = (`0` + timer.seconds).slice(-2); 
			 } else {
				timerHours.textContent = '00';
				timerMinutes.textContent = '00';
				timerSeconds.textContent = '00';
				
			 }
			 setInterval(updateClock, 1000);
		};


	updateClock();

	}

countTimer('29 july 2019');



// Menu
const toggleMenu = () => {
	
	const 	btnMenu = document.querySelector('.menu'),
			menu = document.querySelector('menu'),
			closeBtn = document.querySelector('.close-btn'),
			menuItems = menu.querySelectorAll('ul>li');

const handlerMenu = () => {


	menu.classList.toggle('active-menu');
};


		btnMenu.addEventListener('click', handlerMenu);
		closeBtn.addEventListener('click', handlerMenu);
		menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));

};

toggleMenu();



//popup
const togglePopUp = () =>{
	let popup = document.querySelector('.popup'),
		popupBtn = document.querySelectorAll('.popup-btn'),
		
		popupContent = document.querySelector('.popup-content'),
		count = 0,
		moveAnimation; 
		
	
		const popupAnimate = () => {
            moveAnimation = requestAnimationFrame(popupAnimate);
            if(count < 150) {
                count += 1;
                popupContent.style = `transform: translateYgit(-${count}px)`;
            } else {
                cancelAnimationFrame(moveAnimation);
            }
		};
	
	
		const setAnimation = () => {
			if(screen.width > 760) {
				popup.style = `display: block`;
				popupAnimate();
			} else {
				popup.style = `display: block`;
			}
		};
		
			popupBtn.forEach((item) => {
				item.addEventListener('click', () => {
					setAnimation();
				});
			});
	


			popup.addEventListener('click', (event) => {
				let target = event.target;

				if (target.classList.contains('popup-close')){
					popup.style = `display: none`;
					count = 0;
				} else {
					target = target.closest('.popup-content');
					
					if(!target){
						popup.style = `display: none`;
					}
				}

					
			});
	
	};
togglePopUp();


//табы
	const tabs = () => {
		const tabHeader = document.querySelector('.service-header'),
			 tab = tabHeader.querySelectorAll('.service-header-tab'),
			tabContent = document.querySelectorAll('.service-tab');


	const toggleTabContent = (index) => {
		for(let i = 0; i < tabContent.length; i++){
			tab[i].classList.add('active');
			if(index === i){
				tabContent[i].classList.remove('d-none');
			} else {
				tab[i].classList.remove('active');
				tabContent[i].classList.add('d-none');
			}
		}
	};


	tabHeader.addEventListener('click', (event) => {
		let target = event.target;
		target = target.closest('.service-header-tab');
		//while(target !==tabHeader){
		
			if(target){
				tab.forEach((item, i) => {
					if(item === target){
						toggleTabContent(i);
					}
				});
				//return;
			//}
			//target = target.parentNode;
		}

	});
	};
	tabs();


//слайдер
const newDot = () => {
	let portfolioDots = document.querySelector('.portfolio-dots'),
		portfolioItem = document.querySelectorAll('.portfolio-item');
		portfolioItem.forEach(() => {
			let li = document.createElement('li'); 
				li.className = 'dot';
				portfolioDots.appendChild(li); 	
		});
		
	};
	newDot();

	const slider = () => {
		const slide = document.querySelectorAll('.portfolio-item'),
			btn = document.querySelectorAll('.portfolio-btn'),
			dot = document.querySelectorAll('.dot'),
			slider = document.querySelector('.portfolio-content');
			
			

	let currentSlide = 0,
		interval;

	const prevSlide = (elem, index, strClass) => {
		elem[index].classList.remove(strClass);
	};

	const nextSlide = (elem, index, strClass) => {
		elem[index].classList.add(strClass);
	};


	 
			
		
	
		const autoPlaySlide = () => {
		prevSlide(slide, currentSlide, 'portfolio-item-active');
		prevSlide(dot, currentSlide, 'dot-active');
		currentSlide++;
		if (currentSlide >= slide.length){
			currentSlide = 0;
		}
		nextSlide(slide, currentSlide, 'portfolio-item-active');
		nextSlide(dot, currentSlide, 'dot-active');
	};


	const startSlide = (time = 1500) => {
		interval = setInterval(autoPlaySlide, time);
	};


	const stopSlide = () => {
		clearInterval(interval);
	};

	slider.addEventListener('click',(event) =>{
		event.preventDefault();

		let target = event.target;

		if (!target.matches('.portfolio-btn, .dot')){
			return;
		}



		prevSlide(slide, currentSlide, 'portfolio-item-active');
		prevSlide(dot, currentSlide, 'dot-active');

		if (target.matches('#arrow-right')){
			currentSlide++;
		} else if(target.matches('#arrow-left')){
			currentSlide--;
		} else if (target.matches('.dot')){
			dot.forEach((elem, index) =>{
				if (elem === target) {
					currentSlide = index;
				}
			});
		}

		if (currentSlide >= slide.length){
			currentSlide = 0;
		}

		if(currentSlide < 0){
			currentSlide = slide.length -1;
		}


		nextSlide(slide, currentSlide, 'portfolio-item-active');
		nextSlide(dot, currentSlide, 'dot-active');

	});

	slider.addEventListener('mouseover', (event) =>{
		if (event.target.matches('.portfolio-btn') ||
		event.target.matches('.dot')){
			stopSlide();
		}
	});

	slider.addEventListener('mouseout', (event) =>{
		if (event.target.matches('.portfolio-btn') ||
		event.target.matches('.dot')){
			startSlide();
		}
	});




	

	startSlide(1500);

};
slider();


//наша команда
const ourCommand = () => {

		const commandPhoto = document.querySelectorAll('.command .row img');
				
		commandPhoto .forEach(elem => {
        	let ourPhotos; 
	
			elem.addEventListener('mouseenter', (event) => {
				ourPhotos = event.target.src;  
				event.target.src = event.target.dataset.img;
			}); 

			elem.addEventListener('mouseleave', (event) => {
				event.target.src = ourPhotos;
			}); 
		
		 });
	};
	ourCommand();





//калькулятор
		const calc = (price = 100) => {
			const calcBlock = document.querySelector('.calc-block'),
				calcType = document.querySelector('.calc-type'),
				calcSquary = document.querySelector('.calc-square'),
				calcDay = document.querySelector('.calc-day'),
				calcCount = document.querySelector('.calc-count'),
				totalValue = document.getElementById('total');
				
				
				calcSquary.addEventListener('input', () => {
					calcSquary.value = calcSquary.value.replace(/\D/g, '');
				});
   
			   calcDay.addEventListener('input', () => {
				   calcDay.value = calcDay.value.replace(/\D/g, '');
			   });
   
			   calcCount.addEventListener('input', () => {
				   calcCount.value = calcCount.value.replace(/\D/g, '');
			   });
			

				 


			const countSum = () => {
				let total = 0,
				countValue = 1,
				dayValue = 1;
					   
				const typeValue = calcType.options[calcType.selectedIndex].value,
						 squareValue = +calcSquary.value;


				if(calcCount.value > 1){
					countValue += (calcCount.value - 1) /10;
				}


				if(calcDay.value && calcDay.value < 5) {
					dayValue *= 2;
				}else if (calcDay.value && calcDay.value < 10){
					dayValue *= 1.5;
				}	


						 
				if (typeValue && squareValue){
						total = price * typeValue * squareValue * countValue * dayValue;
				} 

				totalValue.textContent = total;
			};




			calcBlock.addEventListener('change', (event) => {
				const target = event.target;
				
				//варианты:
				// if(target.matches('.calc-type') || 
				// 	target.matches('.calc-square') ||
				// 	target.matches('.calc-day') ||
				// 	target.matches('.calc-count')){
				
				//или


				// 	}
				// if(target === calcType || target === calcSquary ||
				// 	target === calcDay || target === calcCount){

				// 	}
				
				//или

				if (target.matches('select') || target.matches('input')){
					countSum();
				}

			});

		};
		calc(100);






});