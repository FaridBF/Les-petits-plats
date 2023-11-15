import RecipesApi from '/scripts/api/Api.js';

const recipeApi = new RecipesApi('../../data/recipes.json');

recipeApi
  .getRecipes()
  .then((recipesData) => {
    // Récupérez tous les ingrédients de chaque recette et aplatissez le tableau
    const allIngredients = recipesData.flatMap((recipe) => recipe.ingredients);
    // console.log('allIngredients', allIngredients);
    // Utilisez un ensemble pour éliminer les doublons
    const uniqueIngredientsSet = new Set(
      allIngredients.map((item) => item.ingredient)
    );
    // console.log('uniqueIngredientsSet', uniqueIngredientsSet);

    // Convertissez l'ensemble en tableau
    const uniqueIngredients = [...uniqueIngredientsSet];
    // console.log('uniqueIngredients', uniqueIngredients);

    // Sélectionnez le conteneur d'options
    const ingredientOptionsContainer =
      document.getElementById('ingredientOptions');

    // Ajoutez chaque option au conteneur ingrédients
    uniqueIngredients.forEach((option) => {
      const optionElement = document.createElement('div');
      optionElement.classList.add('option');
      optionElement.textContent = option;
      ingredientOptionsContainer.appendChild(optionElement);
    });

    console.log('Options ajoutées avec succès');
  })
  .catch((error) => {
    console.error(
      "Une erreur s'est produite lors de la récupération des données :",
      error
    );
  });

recipeApi
  .getRecipes()
  .then((recipesData) => {
    // Récupérez tous les appareils de chaque recette et aplatissez le tableau
    const allAppliances = recipesData.flatMap((recipe) => recipe.appliance);
    // console.log('allAppliances', allAppliances);
    // Utilisez un ensemble pour éliminer les doublons
    const uniqueAppliancesSet = new Set(allAppliances);
    // console.log('uniqueAppliancesSet', uniqueAppliancesSet);

    // Convertissez l'ensemble en tableau
    const uniqueAppliances = [...uniqueAppliancesSet];
    // console.log('uniqueAppliances', uniqueAppliances);

    // Sélectionnez le conteneur d'options
    const applianceOptionsContainer =
      document.getElementById('applianceOptions');

    // Ajoutez chaque option au conteneur appareils
    uniqueAppliances.forEach((option) => {
      const optionElement = document.createElement('div');
      optionElement.classList.add('option-device');
      optionElement.textContent = option;
      applianceOptionsContainer.appendChild(optionElement);
    });

    console.log('Options ajoutées avec succès');
  })
  .catch((error) => {
    console.error(
      "Une erreur s'est produite lors de la récupération des données :",
      error
    );
  });

recipeApi
  .getRecipes()
  .then((recipesData) => {
    // Récupérez tous les ustensiles de chaque recette et aplatissez le tableau
    const allUstensils = recipesData.flatMap((recipe) => recipe.ustensils);
    // console.log('allUstensils', allUstensils);
    // Utilisez un ensemble pour éliminer les doublons
    const uniqueUstensilsSet = new Set(allUstensils);
    // console.log('uniqueUstensilsSet', uniqueUstensilsSet);

    // Convertissez l'ensemble en tableau
    const uniqueUstensils = [...uniqueUstensilsSet];

    console.log('uniqueUstensils', uniqueUstensils);

    // Sélectionnez le conteneur d'options
    const ustensilsOptionsContainer =
      document.getElementById('ustensilOptions');

    // Ajoutez chaque option au conteneur ustensils
    uniqueUstensils.forEach((option) => {
      const optionElement = document.createElement('div');
      optionElement.classList.add('option-ustensil');
      optionElement.textContent =
        option.charAt(0).toUpperCase() + option.slice(1);

      // optionElement.textContent = option;
      ustensilsOptionsContainer.appendChild(optionElement);
    });

    console.log('Options ajoutées avec succès');
  })
  .catch((error) => {
    console.error(
      "Une erreur s'est produite lors de la récupération des données :",
      error
    );
  });
