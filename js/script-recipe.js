$(document).ready(function() {
	console.log("El documento html esta listo");
	$(".js-menu").hide();
	$('a.js-show-recipe').on('click', (event) => {
		$('.page.recipe').removeClass('make');
	});	
	$('a.js-show-make').on('click', (event) => {
		$('.page.recipe').addClass('make');
	});	
});

