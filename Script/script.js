
window.addEventListener('DOMContentLoaded', function(){
	'use strict';

	//Timer
function countTimer(deadline){
	let timerHours = document.querySelector('#timer-hours'),
		timerMinutes = document.querySelector('#timer-minutes'),
		timerSeconds = document.querySelector('#timer-seconds');
		

		function getTimeRemaining(){
			let	dateStop = new Date(deadline).getTime(),
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

});