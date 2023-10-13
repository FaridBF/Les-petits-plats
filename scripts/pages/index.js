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
