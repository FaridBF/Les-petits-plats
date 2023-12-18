/**
 * --------------------------
 * TOUS CONTAINERS
 * --------------------------
 */

/**
 * Fonction pour ajouter ou supprimer une classe CSS sur un élément.
 * @param {HTMLElement} element - L'élément sur lequel la classe doit être ajoutée ou supprimée.
 * @param {string} className - Le nom de la classe à ajouter ou supprimer.
 */
function toggleClass(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
}

/**
 * --------------------------
 * CONTAINER FILTRE INGREDIENT
 * --------------------------
 */

/**
 * Fonction pour ouvrir ou fermer le menu en modifiant les classes CSS des éléments.
 * @param {MouseEvent} event - L'événement déclencheur de la fonction.
 */
function toggleMenuDisplayIngredient(event) {
  const dropdown = event.currentTarget.closest('.dropdown-ingredient');
  const menu = dropdown.querySelector('.menu');
  const icon = dropdown.querySelector('.fa-angle-down');

  toggleClass(menu, 'hide-ingredient');
  toggleClass(icon, 'rotate-90');
  toggleClass(dropdown, 'active');
}

/**
 * Fonction pour masquer un tag 'ingredient' sélectionné au lieu de le supprimer.
 */
function hideSelectedOptionIngredient() {
  const containerSelectedOptionIngrdient = document.querySelector(
    '.container-selected-option-ingredient'
  );
  containerSelectedOptionIngrdient.style.display = 'none';
}

/**
 * Fonction pour gérer le clic sur une option pour sélectionner un ingrédient
 * @param {MouseEvent} event - L'événement de clic déclencheur de la fonction.
 */
function handleOptionClickIngredient(event) {
  // Rétracte le menu lorsque je clique sur une option
  toggleMenuDisplayIngredient({
    currentTarget: document.querySelector('.dropdown-ingredient .title')
  });
  
  // Création du tag pour l'ingrédient sélectionné
  const optionLabelIngredient = event.target.textContent;
  const selectedOptionIngredient = document.querySelector('.selected-option-ingredient');
  selectedOptionIngredient.textContent = optionLabelIngredient;
  const containerSelectedOptionIngrdient = document.querySelector(
    '.container-selected-option-ingredient'
  );
  containerSelectedOptionIngrdient.style.display = 'block';
}

// Sélection des éléments du DOM
const dropdownTitle = document.querySelector('.dropdown-ingredient .title');
const clearOptionSelected = document.getElementById('clearSelectedOptionIngredient');

// Ajout des gestionnaires d'événements
if (dropdownTitle) {
  dropdownTitle.addEventListener('click', toggleMenuDisplayIngredient);
}

if (clearOptionSelected) {
  clearOptionSelected.addEventListener('click', hideSelectedOptionIngredient);
}

const containerOption = document.querySelector('.container-option-ingredient');
if (containerOption) {
  containerOption.addEventListener('click', handleOptionClickIngredient);
}

/**
 * --------------------------
 * CONTAINER FILTRE APPLIANCE
 * --------------------------
 */

/**
 * Fonction pour ouvrir/fermer le menu
 * @param {ToggleEvent} event 
 */
function toggleMenuDisplayAppliance(event) {
  const dropdownAppliance = event.currentTarget.closest('.dropdown-appliance');
  const menuAppliance = dropdownAppliance.querySelector('.menu-appliance');
  const iconAppliance = dropdownAppliance.querySelector('.fa-angle-down');

  toggleClass(menuAppliance, 'hide-appliance');
  toggleClass(iconAppliance, 'rotate-90');
  toggleClass(dropdownAppliance, 'active-appliance');
}

/**
 * Fonction pour masquer un tag 'appliance' sélectionné au lieu de le supprimer.
 */
function hideSelectedOptionAppliance() {
  const containerResultOptionAppliance = document.querySelector(
    '.container-selected-option-appliance'
  );
  containerResultOptionAppliance.style.display = 'none';
}

/**
 * Fonction pour gérer le clic sur une option pour sélectionner un appareil (appliance)
 * @param {MouseEvent} event 
 */
function handleOptionClickAppliance(event) {    
  // Rétracte le menu lorsque je clique sur une option
  toggleMenuDisplayAppliance({
    currentTarget: document.querySelector(
      '.dropdown-appliance .title-appliance'
      )
  });
      
  // Création du tag pour l'appareil (appliance) sélectionné
  const optionLabelAppliance = event.target.textContent;
  const selectedOptionAppliance = document.querySelector(
    '.selected-option-appliance'
  );
  selectedOptionAppliance.textContent = optionLabelAppliance;
  const containerResultOptionAppliance = document.querySelector(
    '.container-selected-option-appliance'
  );
  containerResultOptionAppliance.style.display = 'block';
}

// Sélection des éléments du DOM
const dropdownTitleAppliance = document.querySelector(
  '.dropdown-appliance .title-appliance'
);
const clearSelectedOptionAppliance = document.getElementById(
  'clearSelectedOptionAppliance'
);

// Ajout des gestionnaires d'événements
if (dropdownTitleAppliance) {
  dropdownTitleAppliance.addEventListener('click', toggleMenuDisplayAppliance);
}

if (clearSelectedOptionAppliance) {
  clearSelectedOptionAppliance.addEventListener(
    'click',
    hideSelectedOptionAppliance
  );
}

const containerOptionAppliance = document.querySelector(
  '.container-option-appliance'
);
if (containerOptionAppliance) {
  containerOptionAppliance.addEventListener(
    'click',
    handleOptionClickAppliance
  );
}

/**
 * --------------------------
 * CONTAINER FILTRE USTENSIL
 * --------------------------
 */

/**
 * Fonction pour ouvrir ou fermer le menu d'ustensils en modifiant les classes CSS des éléments.
 * @param {MouseEvent} event - L'événement déclencheur de la fonction.
 */
function toggleMenuDisplayUstensil(event) {
  const dropdownUstensil = event.currentTarget.closest('.dropdown-ustensil');
  const menuUstensil = dropdownUstensil.querySelector('.menu-ustensil');
  const iconUstensil = dropdownUstensil.querySelector('.fa-angle-down');

  toggleClass(menuUstensil, 'hide-ustensil');
  toggleClass(iconUstensil, 'rotate-90');
  toggleClass(dropdownUstensil, 'active-ustensil');
}

/**
 * Fonction pour masquer un tag 'ustensil' sélectionné au lieu de le supprimer.
 */
function hideSelectedOptionUstensil() {
  const containerResultOptionUstensil = document.querySelector(
    '.container-selected-option-ustensil'
  );
  containerResultOptionUstensil.style.display = 'none';
}

/**
 * Fonction pour gérer le clic sur une option pour sélectionner un unstensile (ustensil)
 * @param {MouseEvent} event - L'événement déclencheur de la fonction.
 */
function handleOptionClickUstensil(event) {
  // Rétracte le menu lorsque je clique sur une option
  toggleMenuDisplayUstensil({
    currentTarget: document.querySelector('.dropdown-ustensil .title-ustensil')
  });

  // Création du tag pour l'ustensile (ustensil) sélectionné
  const optionLabelUstensil = event.target.textContent;
  const selectedOptionUstensil = document.querySelector(
    '.selected-option-ustensil'
  );
  selectedOptionUstensil.textContent = optionLabelUstensil;
  const containerResultOptionUstensil = document.querySelector(
    '.container-selected-option-ustensil'
  );
  containerResultOptionUstensil.style.display = 'block';
}

// Sélection des éléments du DOM pour les options d'ustensils
const dropdownTitleUstensil = document.querySelector(
  '.dropdown-ustensil .title-ustensil'
);
const clearSelectedOptionUstensil = document.getElementById(
  'clearSelectedOptionUstensil'
);
const containerOptionUstensil = document.querySelector(
  '.container-option-ustensil'
);

// Ajout des gestionnaires d'événements pour les options d'ustensils
if (dropdownTitleUstensil) {
  dropdownTitleUstensil.addEventListener('click', toggleMenuDisplayUstensil);
}

if (clearSelectedOptionUstensil) {
  clearSelectedOptionUstensil.addEventListener('click', hideSelectedOptionUstensil);
}

if (containerOptionUstensil) {
  containerOptionUstensil.addEventListener('click', handleOptionClickUstensil);
}
