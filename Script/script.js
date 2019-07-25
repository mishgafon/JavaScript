
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

countTimer('25 july 2019');



// Menu
const toggleMenu = () => {
	
	const 	btnMenu = document.querySelector('.menu'),
			menu = document.querySelector('menu'),
			body = document.body,
			closeBtn = document.querySelector('.close-btn'),
			menuItems = menu.querySelectorAll('ul>li');
			

const handlerMenu = () => {


	menu.classList.toggle('active-menu');
};


		body.addEventListener('click', (event) => {
			let target = event.target; 

				if (target.classList.contains('close-btn')) {
					handlerMenu(); 
			} 
			
				target = target.closest('.menu');
					if (target) {
						handlerMenu(); 
				} else if (!target) { 
						menu.classList.remove('active-menu');
			}
		});
};

toggleMenu();



//popup
const togglePopUp = () =>{
	let popup = document.querySelector('.popup'),
		popupBtn = document.querySelectorAll('.popup-btn'),
		popupClose = document.querySelector('.popup-close'),
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
	
			popupClose.addEventListener('click', () => {
				popup.style = `display: none`;
				count = 0;
			});
	
	
	};

	

togglePopUp();


});