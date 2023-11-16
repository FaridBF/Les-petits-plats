import RecipesApi from '/scripts/api/Api.js';

// Fonction pour filtrer les options
function filterOptions(
  searchInputId,
  optionsContainerId,
  optionClass,
  mapFunction
) {
  const searchInput = document.getElementById(searchInputId);
  const optionsContainer = document.getElementById(optionsContainerId);

  const apiCall = new RecipesApi('../../data/recipes.json');

  // Fonction pour réinitialiser l'input au moment de l'ouverture du dropdown
  function resetInputOnDropdownOpen() {
    searchInput.value = ''; // Réinitialisez la valeur de l'input
  }

  // Écoutez l'événement qui ouvre le dropdown et appelez la fonction de réinitialisation
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
filterOptions('searchInputFilter', 'ingredientOptions', 'option', (recipe) =>
  recipe.ingredients.map((item) => item.ingredient.toLowerCase())
);

filterOptions(
  'searchInputFilterDevice',
  'applianceOptions',
  'option-device',
  (recipe) => recipe.appliance
);

filterOptions(
  'searchInputFilterUstensil',
  'ustensilOptions',
  'option-ustensil',
  (recipe) =>
    recipe.ustensils.map(
      (option) => option.charAt(0).toUpperCase() + option.slice(1)
    )
);
