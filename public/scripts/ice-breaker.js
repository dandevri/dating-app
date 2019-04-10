(function () {
	'use strict';

	const body = document.body;

	// run code
	enableJS();

	// functions declarations  
	function enableJS() {
		body.classList.replace('no-js', 'js-enabled');
	}
	function $(element) {
		return document.querySelector(element);
	}
	function $$(elements) {
		return document.querySelectorAll(elements);
	}

	// Ice-breaker
	$$('.icebreaker .ice-q').forEach(i => i.addEventListener('click', nextQuestion, false));
	const sets = $$('fieldset');
	let current = 0;
	let currentSet = sets[current];


	// Show next set
	// function nextQuestion() {
	// 	current++;
	// 	if (current < sets.length) {
	// 		currentSet.classList.remove('active');
	// 		currentSet = sets[current];
	// 		currentSet.classList.add('active');
	// 	}
	// 	console.log(current + 1, sets.length);
	// 	if (current + 1 >= sets.length) {
	// 		console.log('a');
	// 		$('.icebreaker .ice-sub').remove();
	// 		$('.icebreaker-option').remove();
	// 		$('.icebreaker h2').textContent = '🎉 Ice-breaker';
	// 	}
	// 	// let currentProgress = $('progress').value;
	// 	$('progress').value = $('progress').value + 16.6;
	// }

	let translate = 0;
	function nextQuestion() {
		current++;
		translate = translate - 310;
		console.log(translate);
		if (current < sets.length) {
			$('.icebreaker-sets').style.transform = `translateX(${translate}px)`;
			// currentSet.classList.remove('active');
			// currentSet = sets[current];
			// currentSet.classList.add('active');
		}
		console.log(current + 1, sets.length);
		if (current + 1 >= sets.length) {
			console.log('a');
			$('.icebreaker .ice-sub').remove();
			$('.icebreaker-option').remove();
			$('.icebreaker h2').textContent = '🎉 Ice-breaker';
		}
		// let currentProgress = $('progress').value;
		$('progress').value = $('progress').value + 16.6;
	}

	// Close icebreaker
	$$('.icebreaker__close').forEach(i => i.addEventListener('click', closeBreaker, false));
	function closeBreaker() {
		body.classList.remove('is-icebreaker-active');
		body.classList.remove('is-icebreaker-r-active');
		body.classList.remove('is-edit-open');
	}


	$$('.icebreaker__open').forEach(i => i.addEventListener('click', openBreaker, false));
	function openBreaker() {
		body.classList.add('is-icebreaker-active');
	}


	// Icebreaker-result
	if ($('.ice-breaker--msg')) {
		$('.ice-breaker--msg').addEventListener('click', iceBreakerOpen, false);
	}

	function iceBreakerOpen() {
		$('body').classList.add('is-icebreaker-r-active');
	}

	$('.open-edit').addEventListener('click', editOpen, false);

	function editOpen() {
		$('body').classList.add('is-edit-open');
	}


	$('.start-convers').addEventListener('click', startConvers, false);

	function startConvers() {
		$('.before-conv').style.display = 'none';
		$('.during-conv').style.display = 'block';
		$('.conv__item--left').classList.add('fade-in');
		$('.conv__item--resp').classList.add('fade-in-2');
		$('.icebreaker-r button').textContent = 'Send friend request';
	}

})();
