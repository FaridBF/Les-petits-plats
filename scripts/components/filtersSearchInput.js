/**
 * *********************
 * Module qui gère la recherche autocomplete
 * pour chaque filtre (Ingrédient, appareil, ustensil)
 * *********************
 */

import { capitalizeFirstLetter } from '../utils/formatData.js';

/**
 * Autocomplete de chaque filtre via la recherche :
 * Parcours la liste des options et n'affiche que
 * les éléments qui correspondent à la requête de recherche
 * @param {string} inputId - ID utilisé comme sélecteur pour l'input
 * @param {string} filterItemsSelector - Sélecteur de chaque option de la liste du filtre
 */
function getSearchResultsForFilter(inputId, filterItemsSelector) {
  const filterItems = document.querySelectorAll(filterItemsSelector);
  const searchTextQuery = document.getElementById(inputId).value.toLowerCase();

  filterItems.forEach((item) => {
    const itemName = item.innerText.toLowerCase();
    const isVisible = itemName.includes(searchTextQuery);
    item.style.display = isVisible ? 'block' : 'none';
  });
}

/**
 * Ajoute l'écouteur d'évènement qui lance la recherche dans le filtre
 * @param {string} inputId
 * @param {string} filterItemsSelector
 */
function listenInputSearchFilter(inputId, filterItemsSelector) {
  const searchInput = document.getElementById(inputId);
  searchInput.addEventListener('keyup', () => {
    getSearchResultsForFilter(inputId, filterItemsSelector);
  });
}

/**
 * Réinitialise la valeur de l'input du dropdown
 * @param {'Ingredient' | 'Appliance' | 'Ustensil'} dropdownType - Type de dropdown concerné
 */
function resetInputOnDropdown(dropdownType) {
  const searchInput = document.querySelector(
    `#searchInputFilter${capitalizeFirstLetter(dropdownType)}`
  );
  searchInput.value = '';
}

export { resetInputOnDropdown, listenInputSearchFilter };
