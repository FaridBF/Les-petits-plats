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
