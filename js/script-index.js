$(document).ready(function () {

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray)

});

$(document).ready(function () {
	$(".js-back").hide();
});

function printNews() {
	$('#nuevas-recetas').html('NUEVAS RECETAS');
};

printNews();


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {

	recipesArray.forEach((recipe) => {
		if (recipe.highlighted) renderRecipe(recipe);
	});

	console.log('Recipes: ', recipesArray);

};


/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);

	var html = `
	<a class="item-recipe" href="#">
	<span class="attribution">
		<span class="title-recipe"> ${recipe.title} </span>
		<span class="metadata-recipe">
		<span class="author-recipe"> ${recipe.source.name} </span>
		<span class="bookmarks-recipe">
			<span class="icon-bookmark"></span> 
		</span>
		</span>
	</span>

	<img src="img/recipes/640x800/${recipe.name}.jpg" />
	</a>
	`;

	$('.list-recipes').append(html);

}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {

}


