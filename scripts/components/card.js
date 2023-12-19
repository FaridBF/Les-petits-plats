/**
 * Classe représentant une API pour récupérer des données de recettes.
 * @class
 */
import RecipesApi from '/scripts/api/Api.js';

const recipeApi = new RecipesApi('../../data/recipes.json');
// TODO initier liste vide des recettes à afficher
let recipes;

/**
 * Récupère les données de recettes, crée des cartes HTML et les ajoute au conteneur.
 * @method
 * @returns {Promise} - Les données de recettes
 */
recipeApi
  .getRecipes()
  .then((recipesData) => {
    clearRecipes();
    // TODO: de base, alimenter la liste vide avec recipesData
    recipes = recipesData;
    if (recipes.length > 0) {
      displayRecipes(recipes)
    }
  })
  .catch((error) => {
    console.error(
      "Une erreur s'est produite lors de la récupération des données de recettes :",
      error
    );
  });

// TODO : Fonction qui crée des cartes de recettes HTML et les ajoute au conteneur.
function displayRecipes(recipes) {
    const recipeCards = recipes.map((recipe) => {
      const filledTemplate = fillRecipeCardTemplate(recipeCardTemplate, recipe);
      const card = document.createElement('div');
      card.innerHTML = filledTemplate;
      return card;
    });
  
    // Ajoute les cartes au conteneur
    recipeCards.forEach((card) => {
      cardContainer.appendChild(card);
    });
}

function clearRecipes() {
  cardContainer.innerHTML = "";
}

/**
 * Sélectionne l'élément où la card est ajoutée
 * @type {HTMLElement}
 */
const cardContainer = document.querySelector('.card-recipes-bottom-main');

/**
 * Template HTML pour une carte de recette.
 * @type {string}
 */
const recipeCardTemplate = `
    <div class="card">
      <div class="container-top">
        <img class="img-recipes" src="assets/recipes/Recette{{id}}.jpg" alt="recipes" />
        <span class="duration-recipes">{{time}}min</span>
      </div>
      <div class="container-bottom">
        <h3 class="name-title-recipes">{{name}}</h3>
        <div>
          <h4 class="title-recipes">Recette</h4>
          <p class="instructions-recipes">{{description}}</p>
        </div>
        <div class="container-ingredients">
          <h5 class="title-ingredients">Ingrédients</h5>
          <div class="all-items-ingredients">
            {{ingredients}}
          </div>
        </div>
      </div>
    </div>
  `;

/**
 * Remplace les espaces réservés dans le modèle de carte de recette avec les données.
 * @param {string} template - Le modèle de carte de recette.
 * @param {object} data - Les données de la recette à insérer dans le modèle.
 * @returns {string} - Le modèle de carte rempli avec les données.
 */
function fillRecipeCardTemplate(template, data) {
  return template
    .replace('{{id}}', data.id)
    .replace('{{time}}', data.time)
    .replace('{{name}}', data.name)
    .replace('{{description}}', data.description)
    .replace('{{ingredients}}', fillIngredients(data.ingredients));
}

/**
 * Remplit la section des ingrédients dans la carte de recette.
 * @param {Array<object>} ingredients - Les ingrédients de la recette.
 * @returns {string} - La section des ingrédients remplie.
 */
function fillIngredients(ingredients) {
  //TODO: voir avec mentor si ingredient.ingredient n est pas choquant
  // Logique pour remplir la section des ingrédients
  return ingredients
    .map(
      (ingredient) => `
        <div class="container-left-item-ingredients">
          <p class="ingredient-name">${ingredient.ingredient}
          <span class="ingredient-quantity">${
            ingredient.quantity ? ingredient.quantity : ''
          }<span/>
          <span class="ingredient-unit">${
            ingredient.unit ? ingredient.unit : ''
          }<span/>
          </p>
        </div>
      `
    )
    .join('');
}

/**
 * Met en place un filtre pour la recherche des recettes.
 * @event
 */
// TODO. faut-il faire pareil pour la recherche ?, ne plus utiliser matchfound ?
document.querySelector('#inputNav').addEventListener('keyup', function () {
  // Logique pour filtrer les cartes de recettes en fonction du terme de recherche
  const searchTerm = this.value.toLowerCase();

  // Sélectionne toutes les cartes de recettes
  const recipeCards = document.querySelectorAll('.card');
  // Utilise un indicateur pour vérifier si une correspondance a été trouvée
  let anyMatchFound = false;
  let recipesMatching = [];
  // TODO : utiliser recipes.length

  recipes.map((recipe) => {
    // Vérifie si la valeur saisie correspond à un titre, à la description ou à un ingrédient de la carte
    if (recipe.name.toLowerCase().includes(searchTerm) || recipe.description.toLowerCase().includes(searchTerm)) {
      recipesMatching.push(recipe);
      anyMatchFound = true;
    } else {
      recipe.ingredients.forEach((ingredient) => {
        const ingredientNameFormatted = ingredient.ingredient.toLowerCase();
        if (ingredientNameFormatted.includes(searchTerm)) {
          recipesMatching.push(recipe);
          anyMatchFound = true;
        }
      });
    }

    clearRecipes();
    displayRecipes(recipesMatching)
  });

  // Affiche un message d'aucune correspondance avec le terme de recherche inclus
  const noMatchMessage = document.querySelector('.no-match-message');
  const searchTermElement = noMatchMessage.querySelector('#searchTerm');

  if (!anyMatchFound) {
    noMatchMessage.style.display = 'block';
    searchTermElement.textContent = searchTerm;
  } else {
    noMatchMessage.style.display = 'none';
    // Réinitialisez le terme de recherche si des correspondances ont été trouvées
    searchTermElement.textContent = '';
  }
});

/**
 * Filtrer les cartes en fonction de l'option sélectionnée dans le dropdown
 * @param {*} selectedValue TODO string[]
 */
// TODO: cumuler les tags
function filterByDropdownOption(selectedValue) {
  const recipeCards = document.querySelectorAll('.card');
  recipeCards.forEach((card) => {
    const ingredientNames = card.querySelectorAll('.ingredient-name');
    let matchFound = false;

    ingredientNames.forEach((ingredient) => {
      const ingredientNameFormatted = ingredient.textContent.toLowerCase();
      if (ingredientNameFormatted.includes(selectedValue)) {
        matchFound = true;
      }
    });

    if (matchFound || selectedValue === 'Tous') {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

/**
 * Obtenir la valeur sélectionnée du dropdown et déclencher le filtrage
 * TODO jsdoc à compléter
 * TODO voircomment alimenter une liste de tags
 * @param {*} options
 * @param {*} resultClass
 */
function getValueSelect(options, resultClass) {
  // Logique pour obtenir la valeur sélectionnée et déclencher le filtrage
  options.forEach((option) => {
    option.addEventListener('click', () => {
      const oneOption = document.querySelector(`.${resultClass}`);
      const selectedValue = oneOption.innerHTML.toLowerCase();
      filterByDropdownOption(selectedValue);
    });
  });
}

// Sélection des options pour chaque type
const ingredientsOptions = document.querySelectorAll('.container-option-ingredient');
const applianceOptions = document.querySelectorAll(
  '.container-option-appliance'
);
const ustensilOptions = document.querySelectorAll('.container-option-ustensil');

// Appel de la fonction pour chaque type d'option
getValueSelect(ingredientsOptions, 'selected-option-ingredient');
getValueSelect(applianceOptions, 'selected-option-appliance');
getValueSelect(ustensilOptions, 'selected-option-ustensil');

// const ustensillFilter = document.getElementById('dropdown-ustensil').value;
// console.log('ustensil choisi:', ustensillFilter)