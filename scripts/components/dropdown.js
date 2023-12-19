/**
 * Classe représentant une API pour récupérer des données de recettes.
 * @class
 */
import RecipesApi from '/scripts/api/Api.js';

/**
 * Fonction pour filtrer et afficher les options.
 * @param {string} searchInputId - L'ID de l'élément d'entrée de recherche.
 * @param {string} optionsContainerId - L'ID du conteneur des options à afficher.
 * @param {string} optionClass - La classe des options à manipuler.
 * @param {Function} mapFunction - La fonction de mapping pour extraire les options.
 */
function filterOptions(
  searchInputId,
  optionsContainerId,
  optionClass,
  mapFunction
) {
  const searchInput = document.getElementById(searchInputId);
  const optionsContainer = document.getElementById(optionsContainerId);

  const apiCall = new RecipesApi('../../data/recipes.json');

  /**
   * Réinitialise la valeur de l'input lorsque le dropdown est ouvert.
   */
  function resetInputOnDropdownOpen() {
    searchInput.value = ''; // Réinitialisez la valeur de l'input
  }

  // Écoute l'événement qui ouvre le dropdown et appelle la fonction de réinitialisation
  optionsContainer.parentElement.addEventListener(
    'click',
    resetInputOnDropdownOpen
  );

  apiCall
    .getRecipes()
    .then((recipesData) => {
      const allOptions = recipesData.flatMap(mapFunction);
      const uniqueOptionsSet = new Set(allOptions);
      const uniqueOptions = [...uniqueOptionsSet];

      uniqueOptions.forEach((option) => {
        const optionElement = document.createElement('div');
        // const optionElement = document.createElement('option');
        optionElement.classList.add(optionClass);
        optionElement.textContent = option;
        optionsContainer.appendChild(optionElement);
      });

      console.log(`Options pour ${optionClass} ajoutées avec succès`);

      searchInput.addEventListener('input', function () {
        const searchText = this.value.toLowerCase();
        const options = optionsContainer.querySelectorAll(`.${optionClass}`);

        options.forEach((item) => {
          const itemName = item.textContent.toLowerCase();
          const isVisible = itemName.includes(searchText);
          item.style.display = isVisible ? 'block' : 'none';
        });
      });
    })
    .catch((error) => {
      console.error(
        `Une erreur s'est produite lors de la récupération des ${optionClass} :`,
        error
      );
    });
}

// Appels pour filtrer les options d'ingrédients, d'appareils et d'ustensiles
/**
 * Filtre et affiche les options d'ingrédients.
 */
filterOptions('searchInputFilter', 'ingredientOptions', 'option', (recipe) =>
  recipe.ingredients.map((item) => item.ingredient.toLowerCase())
);

/**
 * Filtre et affiche les options d'appareils.
 */
filterOptions(
  'searchInputFilterAppliance',
  'applianceOptions',
  'option-appliance',
  (recipe) => recipe.appliance
);

/**
 * Filtre et affiche les options d'ustensiles.
 */
filterOptions(
  'searchInputFilterUstensil',
  'ustensilOptions',
  'option-ustensil',
  (recipe) =>
    recipe.ustensils.map(
      (option) => option.charAt(0).toUpperCase() + option.slice(1)
    )
);
