/**
 * *********************
 * Module qui gère la partie affichage des cartes de recette
 * *********************
 */

/**
 * ------------
 * FONCTIONS
 * ------------
 */

/**
 * Remplit la section des ingrédients dans la carte de recette.
 * @param {Object[]} ingredients - Les ingrédients de la recette.
 * @returns {string} - La section des ingrédients remplie.
 */
function fillIngredients(ingredients) {
  // Logique pour remplir la section des ingrédients
  return ingredients
    .map(
      (ingredient) => `
          <div class="container-left-item-ingredients">
            <p class="ingredient-name">${ingredient.ingredient}
            <span class="ingredient-quantity">${
              ingredient.quantity ? ingredient.quantity : ''
            }</span>
            <span class="ingredient-unit">${
              ingredient.unit ? ingredient.unit : ''
            }</span>
            </p>
          </div>
        `
    )
    .join('');
}

/**
 * Remplace les espaces réservés dans le modèle de carte de recette avec les données.
 * @param {string} template - Le modèle de carte de recette.
 * @param {object} data - Les données de la recette à insérer dans le modèle.
 * @returns {string} - Le modèle de carte rempli avec les données.
 */
export function fillRecipeCardTemplate(template, data) {
  return template
    .replace('{{id}}', data.id)
    .replace('{{time}}', data.time)
    .replace('{{name}}', data.name)
    .replace('{{description}}', data.description)
    .replace('{{ingredients}}', fillIngredients(data.ingredients));
}

/**
 * Effacer toutes les recettes affichées
 */
function clearRecipes() {
  cardContainer.textContent = '';
}

export { fillIngredients, clearRecipes };
