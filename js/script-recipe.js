$(document).ready(function() {
	console.log("El documento html esta listo");
	$(".js-menu").hide();
	$('a.js-show-recipe').on('click', (event) => {
		$('.page.recipe').removeClass('make');
		$('a.js-show-recipe').addClass('active');
		$('a.js-show-make').removeClass('active');
	});	
	$('a.js-show-make').on('click', (event) => {
		$('.page.recipe').addClass('make');
		$('a.js-show-make').addClass('active');
		$('a.js-show-recipe').removeClass('active');
	});	


	$('.js-back').click(function(){
		parent.history.back(); 
		return false;							   
	});
});

