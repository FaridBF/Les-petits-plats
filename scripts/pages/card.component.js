// Utilisez la classe RecipesApi pour récupérer les données de recettes
import RecipesApi from '/scripts/api/Api.js';

const recipeApi = new RecipesApi('../../data/recipes.json');

recipeApi
  .getRecipes()
  .then((recipesData) => {
    // Créez des cartes à partir des données de recettes
    const recipeCards = recipesData.map((recipe) => {
      const filledTemplate = fillRecipeCardTemplate(recipeCardTemplate, recipe);
      const card = document.createElement('div');
      card.innerHTML = filledTemplate;
      return card;
    });

    // Ajoutez les cartes au conteneur
    recipeCards.forEach((card) => {
      cardContainer.appendChild(card);
    });
  })
  .catch((error) => {
    console.error(
      "Une erreur s'est produite lors de la récupération des données de recettes :",
      error
    );
  });

// Sélectionnez l'élément où vous souhaitez ajouter la carte
const cardContainer = document.querySelector('.card-recipes-bottom-main');

// Modèle HTML pour une carte de recette
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

// Fonction pour remplacer les espaces réservés dans le modèle
function fillRecipeCardTemplate(template, data) {
  return template
    .replace('{{id}}', data.id)
    .replace('{{time}}', data.time)
    .replace('{{name}}', data.name)
    .replace('{{description}}', data.description)
    .replace('{{ingredients}}', fillIngredients(data.ingredients));
}

// Fonction pour remplir la section des ingrédients
function fillIngredients(ingredients) {
  return ingredients
    .map(
      (ingredient) => `
        <div class="container-left-item-ingredients">
          <p class="item-ingredients">${ingredient.ingredient}
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
