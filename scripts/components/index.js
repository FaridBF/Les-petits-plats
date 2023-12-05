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
 * Fonction pour ouvrir ou fermer le menu en modifiant les classes CSS des éléments.
 * @param {MouseEvent} event - L'événement déclencheur de la fonction.
 */
function toggleMenuDisplay(event) {
  const dropdown = event.currentTarget.closest('.dropdown');
  const menu = dropdown.querySelector('.menu');
  const icon = dropdown.querySelector('.fa-angle-down');

  toggleClass(menu, 'hide');
  toggleClass(icon, 'rotate-90');
  toggleClass(dropdown, 'active');
}

/**
 * Fonction pour masquer une div au lieu de la supprimer.
 */
function hideResultOption() {
  const containerResultOption = document.querySelector(
    '.container-result-option'
  );
  containerResultOption.style.display = 'none';
}

/**
 * Fonction pour gérer le clic sur une option, met à jour les éléments HTML correspondants.
 * @param {MouseEvent} event - L'événement de clic déclencheur de la fonction.
 */
function handleOptionClick(event) {
  const optionLabel = event.target.textContent;
  const searchInput = document.querySelector('.input-searchInputFilter');
  searchInput.value = optionLabel;

  // Rétracte le menu lorsque je clique sur une option
  toggleMenuDisplay({
    currentTarget: document.querySelector('.dropdown .title')
  });

  const resultOption = document.querySelector('.result-option');
  resultOption.textContent = searchInput.value;
  const containerResultOption = document.querySelector(
    '.container-result-option'
  );
  containerResultOption.style.display = 'block';
}

// Sélection des éléments du DOM
const dropdownTitle = document.querySelector('.dropdown .title');
const clearInputOption = document.getElementById('clearInputOption');

// Ajout des gestionnaires d'événements
if (dropdownTitle) {
  dropdownTitle.addEventListener('click', toggleMenuDisplay);
}

if (clearInputOption) {
  clearInputOption.addEventListener('click', hideResultOption);
}

const containerOption = document.querySelector('.container-option');
if (containerOption) {
  containerOption.addEventListener('click', handleOptionClick);
}

// ---- container appliance ---- //

// Fonction pour ajouter ou supprimer une classe CSS
function toggleClassAppliance(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
}

// Fonction pour ouvrir/fermer le menu
function toggleMenuDisplayAppliance(event) {
  const dropdownAppliance = event.currentTarget.closest('.dropdown-appliance');
  const menuAppliance = dropdownAppliance.querySelector('.menu-appliance');
  const iconAppliance = dropdownAppliance.querySelector('.fa-angle-down');

  toggleClassAppliance(menuAppliance, 'hideAppliance');
  toggleClassAppliance(iconAppliance, 'rotate-90');
  toggleClassAppliance(dropdownAppliance, 'activeAppliance');
}

// Fonction pour masquer la div au lieu de la supprimer
function hideResultOptionAppliance() {
  const containerResultOptionAppliance = document.querySelector(
    '.container-result-option-appliance'
  );
  containerResultOptionAppliance.style.display = 'none';
}

// Fonction pour gérer le clic sur une option
function handleOptionClickAppliance(event) {
  const optionLabelAppliance = event.target.textContent;
  const searchInputAppliance = document.querySelector(
    '.input-searchInputFilterAppliance'
  );
  searchInputAppliance.value = optionLabelAppliance;

  // Rétracte le menu lorsque je clique sur une option
  toggleMenuDisplayAppliance({
    currentTarget: document.querySelector(
      '.dropdown-appliance .title-appliance'
    )
  });

  const resultOptionAppliance = document.querySelector(
    '.result-option-appliance'
  );
  resultOptionAppliance.textContent = searchInputAppliance.value;
  const containerResultOptionAppliance = document.querySelector(
    '.container-result-option-appliance'
  );
  containerResultOptionAppliance.style.display = 'block';
}

// Sélection des éléments du DOM
const dropdownTitleAppliance = document.querySelector(
  '.dropdown-appliance .title-appliance'
);
const clearInputOptionAppliance = document.getElementById(
  'clearInputOptionAppliance'
);

// Ajout des gestionnaires d'événements
if (dropdownTitleAppliance) {
  dropdownTitleAppliance.addEventListener('click', toggleMenuDisplayAppliance);
}

if (clearInputOptionAppliance) {
  clearInputOptionAppliance.addEventListener(
    'click',
    hideResultOptionAppliance
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
 * Fonction pour ajouter ou supprimer une classe CSS sur un élément.
 * @param {HTMLElement} element - L'élément sur lequel la classe doit être ajoutée ou supprimée.
 * @param {string} className - Le nom de la classe à ajouter ou supprimer.
 */
function toggleClassUstensil(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
}

/**
 * Fonction pour ouvrir ou fermer le menu d'ustensils en modifiant les classes CSS des éléments.
 * @param {MouseEvent} event - L'événement déclencheur de la fonction.
 */
function toggleMenuDisplayUstensil(event) {
  const dropdownUstensil = event.currentTarget.closest('.dropdown-ustensil');
  const menuUstensil = dropdownUstensil.querySelector('.menu-ustensil');
  const iconUstensil = dropdownUstensil.querySelector('.fa-angle-down');

  toggleClassUstensil(menuUstensil, 'hideUstensil');
  toggleClassUstensil(iconUstensil, 'rotate-90');
  toggleClassUstensil(dropdownUstensil, 'activeUstensil');
}

/**
 * Fonction pour masquer la div contenant les résultats d'options d'ustensils.
 */
function hideResultOptionUstensil() {
  const containerResultOptionUstensil = document.querySelector(
    '.container-result-option-ustensil'
  );
  containerResultOptionUstensil.style.display = 'none';
}

/**
 * Fonction pour gérer le clic sur une option d'ustensil, met à jour les éléments HTML correspondants.
 * @param {MouseEvent} event - L'événement déclencheur de la fonction.
 */
function handleOptionClickUstensil(event) {
  const optionLabelUstensil = event.target.textContent;
  const searchInputUstensil = document.querySelector(
    '.input-searchInputFilterUstensil'
  );
  searchInputUstensil.value = optionLabelUstensil;

  // Rétracte le menu lorsque je clique sur une option
  toggleMenuDisplayUstensil({
    currentTarget: document.querySelector('.dropdown-ustensil .title-ustensil')
  });

  const resultOptionUstensil = document.querySelector(
    '.result-option-ustensil'
  );
  resultOptionUstensil.textContent = searchInputUstensil.value;
  const containerResultOptionUstensil = document.querySelector(
    '.container-result-option-ustensil'
  );
  containerResultOptionUstensil.style.display = 'block';
}

// Sélection des éléments du DOM pour les options d'ustensils
const dropdownTitleUstensil = document.querySelector(
  '.dropdown-ustensil .title-ustensil'
);
const clearInputOptionUstensil = document.getElementById(
  'clearInputOptionUstensil'
);
const containerOptionUstensil = document.querySelector(
  '.container-option-ustensil'
);

// Ajout des gestionnaires d'événements pour les options d'ustensils
if (dropdownTitleUstensil) {
  dropdownTitleUstensil.addEventListener('click', toggleMenuDisplayUstensil);
}

if (clearInputOptionUstensil) {
  clearInputOptionUstensil.addEventListener('click', hideResultOptionUstensil);
}

if (containerOptionUstensil) {
  containerOptionUstensil.addEventListener('click', handleOptionClickUstensil);
}
