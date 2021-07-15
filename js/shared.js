//Scripts here...

/* Plus Button Scripts */

const plusButton = document.getElementById('plus-button');


function plusButtonFun() {
	const links = document.getElementsByClassName('plus-button__item');
	

	links[0].classList.toggle('active');
	links[1].classList.toggle('active');
	links[2].classList.toggle('active');

	plusButton.classList.toggle('plus-button__animation');
	plusButton.classList.toggle('active');
};


plusButton.addEventListener('click', plusButtonFun)

/* Header Scripts */

var header = document.querySelector('#header');

window.addEventListener('scroll', function(){
	header.classList.toggle('active', window.scrollY > 0);
});


/* Navigation Scripts */

var mainNav = document.querySelector('.main-nav');
var navToggler = document.querySelector('.main-header__nav-toggler');

navToggler.addEventListener('click', function(){
	mainNav.classList.toggle('active');
});

/* Body Scripts */

const navContactLink = document.querySelector('.main-nav__action');

navContactLink.addEventListener('click', function() {
	window.location = 'contact.html';
});
