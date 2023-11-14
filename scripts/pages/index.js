// Fonction pour ajouter ou supprimer une classe CSS
function toggleClass(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
}

// Fonction pour ouvrir/fermer le menu
function toggleMenuDisplay(event) {
  const dropdown = event.currentTarget.closest('.dropdown');
  const menu = dropdown.querySelector('.menu');
  const icon = dropdown.querySelector('.fa-angle-down');

  toggleClass(menu, 'hide');
  toggleClass(icon, 'rotate-90');
  toggleClass(dropdown, 'active');
}

// Fonction pour masquer la div au lieu de la supprimer
function hideResultOption() {
  const containerResultOption = document.querySelector(
    '.container-result-option'
  );
  containerResultOption.style.display = 'none';
}

// Fonction pour gérer le clic sur une option
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

////////container devices

// Fonction pour ajouter ou supprimer une classe CSS
function toggleClassDevice(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
}

// Fonction pour ouvrir/fermer le menu
function toggleMenuDisplayDevice(event) {
  const dropdownDevice = event.currentTarget.closest('.dropdown-device');
  const menuDevice = dropdownDevice.querySelector('.menu-device');
  const iconDevice = dropdownDevice.querySelector('.fa-angle-down');

  toggleClassDevice(menuDevice, 'hideDevice');
  toggleClassDevice(iconDevice, 'rotate-90');
  toggleClassDevice(dropdownDevice, 'activeDevice');
}

// Fonction pour masquer la div au lieu de la supprimer
function hideResultOptionDevice() {
  const containerResultOptionDevice = document.querySelector(
    '.container-result-option-device'
  );
  containerResultOptionDevice.style.display = 'none';
}

// Fonction pour gérer le clic sur une option
function handleOptionClickDevice(event) {
  const optionLabelDevice = event.target.textContent;
  const searchInputDevice = document.querySelector(
    '.input-searchInputFilterDevice'
  );
  searchInputDevice.value = optionLabelDevice;

  // Rétracte le menu lorsque je clique sur une option
  toggleMenuDisplayDevice({
    currentTarget: document.querySelector('.dropdown-device .title-device')
  });

  const resultOptionDevice = document.querySelector('.result-option-device');
  resultOptionDevice.textContent = searchInputDevice.value;
  const containerResultOptionDevice = document.querySelector(
    '.container-result-option-device'
  );
  containerResultOptionDevice.style.display = 'block';
}

// Sélection des éléments du DOM
const dropdownTitleDevice = document.querySelector(
  '.dropdown-device .title-device'
);
const clearInputOptionDevice = document.getElementById(
  'clearInputOptionDevice'
);

// Ajout des gestionnaires d'événements
if (dropdownTitleDevice) {
  dropdownTitleDevice.addEventListener('click', toggleMenuDisplayDevice);
}

if (clearInputOptionDevice) {
  clearInputOptionDevice.addEventListener('click', hideResultOptionDevice);
}

const containerOptionDevice = document.querySelector(
  '.container-option-device'
);
if (containerOptionDevice) {
  containerOptionDevice.addEventListener('click', handleOptionClickDevice);
}

////////container ustensils

// Fonction pour ajouter ou supprimer une classe CSS
function toggleClassUstensil(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
}

// Fonction pour ouvrir/fermer le menu
function toggleMenuDisplayUstensil(event) {
  const dropdownUstensil = event.currentTarget.closest('.dropdown-ustensil');
  const menuUstensil = dropdownUstensil.querySelector('.menu-ustensil');
  const iconUstensil = dropdownUstensil.querySelector('.fa-angle-down');

  toggleClassUstensil(menuUstensil, 'hideUstensil');
  toggleClassUstensil(iconUstensil, 'rotate-90');
  toggleClassUstensil(dropdownUstensil, 'activeUstensil');
}

// Fonction pour masquer la div au lieu de la supprimer
function hideResultOptionUstensil() {
  const containerResultOptionUstensil = document.querySelector(
    '.container-result-option-ustensil'
  );
  containerResultOptionUstensil.style.display = 'none';
}

// Fonction pour gérer le clic sur une option
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

// Sélection des éléments du DOM
const dropdownTitleUstensil = document.querySelector(
  '.dropdown-ustensil .title-ustensil'
);
const clearInputOptionUstensil = document.getElementById(
  'clearInputOptionUstensil'
);

// Ajout des gestionnaires d'événements
if (dropdownTitleUstensil) {
  dropdownTitleUstensil.addEventListener('click', toggleMenuDisplayUstensil);
}

if (clearInputOptionUstensil) {
  clearInputOptionUstensil.addEventListener('click', hideResultOptionUstensil);
}

const containerOptionUstensil = document.querySelector(
  '.container-option-ustensil'
);
if (containerOptionUstensil) {
  containerOptionUstensil.addEventListener('click', handleOptionClickUstensil);
}
