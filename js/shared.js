 /* Window Loading Scripts */

//Scripts here...

/* Plus Button Scripts */

const plusButton = document.getElementById('plus-button');

function plusButtonFun() {
	const links = document.getElementsByClassName('plus-button__item');
	var appearance = 0;

	if (appearance == 0) {

		links[0].style.display = 'block';
		links[1].style.display = 'block';
		links[2].style.display = 'block';

		plusButton.classList.remove('plus-button__animation');
		plusButton.style.transform = 'rotate(45deg)';

		appearance = 1;

	}	else if (appearance == 1) {
		links[0].style.display = 'none';
		links[1].style.display = 'none';
		links[2].style.display = 'none';

		plusButton.classList.add('plus-button__animation');
		plusButton.style.transform = 'rotate(0)';

		appearance = 0;
	};
};


/* Header Scripts */

const header = document.querySelector('#header');

document.addEventListener('scroll', function(evt){
	header.style.cssText = 'top: 0; box-shadow: 0 0 16px 0 #00000026;';
});



/*

Shirinov Fayozxon 2006
2021 | Copyright

*/