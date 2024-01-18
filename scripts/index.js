import RecipeApi from './api/Api.js';
import { fillIngredients } from './ui/recipeCard.js';
import { fillFilters } from './components/filters.js';
/**
 * ------------
 * CONSTANTES
 * ------------
 */
const recipeApi = new RecipeApi('../../data/recipes.json');
let recipes = [];

/**
 * ------------
 * FONCTIONS
 * ------------
 */

/**
 * Conteneur de toutes les recettes
 */
const cardContainer = document.querySelector('.card-recipes-bottom-main');

/**
 * ------------
 * FONCTIONS
 * ------------
 */

/**
 * Crée des 'card HTML' pour chaque recette et les ajoute au conteneur
 * @param {Object[]} recipes - Liste des recettes à afficher
 */
function displayRecipes(recipes) {
  // Ajoute les cartes au conteneur
  recipes.forEach((recipe) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const containerTop = document.createElement('div');
    containerTop.classList.add('container-top');

    const img = document.createElement('img');
    img.classList.add('img-recipes');
    img.src = `assets/recipes/Recette${recipe.id}.jpg`;
    img.alt = 'recipes';

    const duration = document.createElement('span');
    duration.classList.add('duration-recipes');
    duration.textContent = `${recipe.time}min`;

    containerTop.appendChild(img);
    containerTop.appendChild(duration);

    const containerBottom = document.createElement('div');
    containerBottom.classList.add('container-bottom');

    const nameTitle = document.createElement('h3');
    nameTitle.classList.add('name-title-recipes');
    nameTitle.textContent = recipe.name;

    const recipeTitle = document.createElement('h4');
    recipeTitle.classList.add('title-recipes');
    recipeTitle.textContent = 'Recette';

    const instructions = document.createElement('p');
    instructions.classList.add('instructions-recipes');
    instructions.textContent = recipe.description;

    const containerIngredients = document.createElement('div');
    containerIngredients.classList.add('container-ingredients');

    const ingredientsTitle = document.createElement('h5');
    ingredientsTitle.classList.add('title-ingredients');
    ingredientsTitle.textContent = 'Ingrédients';

    const allItemsIngredients = document.createElement('div');
    allItemsIngredients.classList.add('all-items-ingredients');
    allItemsIngredients.innerHTML = fillIngredients(recipe.ingredients);

    containerIngredients.appendChild(ingredientsTitle);
    containerIngredients.appendChild(allItemsIngredients);

    containerBottom.appendChild(nameTitle);
    containerBottom.appendChild(recipeTitle);
    containerBottom.appendChild(instructions);
    containerBottom.appendChild(containerIngredients);

    card.appendChild(containerTop);
    card.appendChild(containerBottom);

    cardContainer.appendChild(card);
  });

  // Mettre à jour le nombre de recettes
  const numberOfRecipesDisplayed = document.querySelector('#numbersOfRecipes');
  numberOfRecipesDisplayed.textContent = recipes.length;
}

/**
 * Récupère les données de recettes, crée des cartes HTML et les ajoute au conteneur.
 * @method
 * @returns {Promise} - Les données de recettes
 */
recipeApi
  .getRecipes()
  .then((recipesData) => {
    recipes = recipesData;
    if (recipes.length > 0) {
      displayRecipes(recipes);
      fillFilters(recipes);
    }
  })
  .catch((error) => {
    console.error(
      "Une erreur s'est produite lors de la récupération des données de recettes :",
      error
    );
  });

export { cardContainer, displayRecipes, recipes };
