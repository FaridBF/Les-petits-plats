import RecipesApi from '/scripts/api/Api.js';
const recipeApi = new RecipesApi('../../data/recipes.json');

// Fonction pour filtrer les options d'ingrédients
function filterIngredientOptions() {
  const searchInputFilter = document.getElementById('searchInputFilter');
  const ingredientOptionsContainer =
    document.getElementById('ingredientOptions');

  const apiCall = new RecipesApi('../../data/recipes.json');

  apiCall
    .getRecipes()
    .then((recipesData) => {
      const allIngredients = recipesData.flatMap(
        (recipe) => recipe.ingredients
      );
      const uniqueIngredientsSet = new Set(
        allIngredients.map((item) => item.ingredient.toLowerCase())
      );
      const uniqueIngredients = [...uniqueIngredientsSet];

      uniqueIngredients.forEach((option) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        ingredientOptionsContainer.appendChild(optionElement);
      });

      console.log('Options ajoutées avec succès');

      // Filtrer les options d'ingrédients lors de la saisie
      searchInputFilter.addEventListener('input', function () {
        const searchText = this.value.toLowerCase();
        const ingredients =
          ingredientOptionsContainer.querySelectorAll('.option');

        ingredients.forEach((ingredient) => {
          const ingredientName = ingredient.textContent.toLowerCase();
          const isVisible = ingredientName.includes(searchText);
          ingredient.style.display = isVisible ? 'block' : 'none';
        });
      });
    })
    .catch((error) => {
      console.error(
        "Une erreur s'est produite lors de la récupération des données :",
        error
      );
    });
}

// Appel de la fonction pour filtrer les ingrédients
filterIngredientOptions();

function filterApplianceOptions() {
  const searchInputFilterAppliance = document.getElementById(
    'searchInputFilterDevice'
  );
  const applianceOptionsContainer = document.getElementById('applianceOptions');

  const apiCall = new RecipesApi('../../data/recipes.json');

  apiCall
    .getRecipes()
    .then((recipesData) => {
      const allAppliances = recipesData.flatMap((recipe) => recipe.appliance);
      const uniqueAppliancesSet = new Set(allAppliances);
      const uniqueAppliances = [...uniqueAppliancesSet];

      uniqueAppliances.forEach((option) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option-device');
        optionElement.textContent = option;
        applianceOptionsContainer.appendChild(optionElement);
      });

      console.log('Options appareils ajoutées avec succès');

      searchInputFilterAppliance.addEventListener('input', function () {
        const searchText = this.value.toLowerCase();
        const appliances =
          applianceOptionsContainer.querySelectorAll('.option-device');

        appliances.forEach((appliance) => {
          const applianceName = appliance.textContent.toLowerCase();
          const isVisible = applianceName.includes(searchText);
          appliance.style.display = isVisible ? 'block' : 'none';
        });
      });
    })
    .catch((error) => {
      console.error(
        "Une erreur s'est produite lors de la récupération des appareils :",
        error
      );
    });
}

// Appel de la fonction pour filtrer les appareils
filterApplianceOptions();

// Fonction pour filtrer les options d'ustensiles
function filterUstensilOptions() {
  const searchInputFilterUstensil = document.getElementById(
    'searchInputFilterUstensil'
  );
  const ustensilsOptionsContainer = document.getElementById('ustensilOptions');

  const apiCall = new RecipesApi('../../data/recipes.json');

  apiCall
    .getRecipes()
    .then((recipesData) => {
      const allUstensils = recipesData.flatMap((recipe) => recipe.ustensils);
      const uniqueUstensilsSet = new Set(allUstensils);
      const uniqueUstensils = [...uniqueUstensilsSet];

      uniqueUstensils.forEach((option) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option-ustensil');
        optionElement.textContent =
          option.charAt(0).toUpperCase() + option.slice(1);
        ustensilsOptionsContainer.appendChild(optionElement);
      });

      console.log('Options ustensiles ajoutées avec succès');

      searchInputFilterUstensil.addEventListener('input', function () {
        const searchText = this.value.toLowerCase();
        const ustensils =
          ustensilsOptionsContainer.querySelectorAll('.option-ustensil');

        ustensils.forEach((ustensil) => {
          const ustensilName = ustensil.textContent.toLowerCase();
          const isVisible = ustensilName.includes(searchText);
          ustensil.style.display = isVisible ? 'block' : 'none';
        });
      });
    })
    .catch((error) => {
      console.error(
        "Une erreur s'est produite lors de la récupération des ustensiles :",
        error
      );
    });
}

// Appel de la fonction pour filtrer les ustensiles
filterUstensilOptions();
