// La fonction toggleClass reste inchangée
function toggleClass(elem, className) {
  if (elem.className.indexOf(className) !== -1) {
    elem.className = elem.className.replace(className, '');
  } else {
    elem.className = elem.className.replace(/\s+/g, ' ') + ' ' + className;
  }

  return elem;
}

// Sélection des éléments du DOM
const dropdownTitle = document.querySelector('.dropdown .title');
const dropdownOptions = document.querySelectorAll('.dropdown .option');
const clearInputOption = document.getElementById('clearInputOption'); // Ajout de la sélection de l'icône "fermer"

// Ajout d'un gestionnaire d'événements sur le titre pour ouvrir/fermer le menu
dropdownTitle.addEventListener('click', toggleMenuDisplay);

function toggleMenuDisplay(e) {
  const dropdown = e.currentTarget.parentNode;
  const menu = dropdown.querySelector('.menu');
  const icon = dropdown.querySelector('.fa-angle-down');

  toggleClass(menu, 'hide');
  toggleClass(icon, 'rotate-90');
  toggleClass(dropdown, 'active');
}

// Ajout d'un gestionnaire d'événements pour supprimer l'ingrédient au clic sur l'icône "fermer"
clearInputOption.addEventListener('click', () => {
  const containerResultOption = document.querySelector(
    '.container-result-option'
  );
  containerResultOption.style.display = 'none'; // Masquer la div au lieu de la supprimer
});

// Sélection de l'élément de l'input filter et gestion de l'événement de clic sur une option
document.querySelector('.container-option').addEventListener('click', (e) => {
  const optionLabel = e.target.textContent;
  const searchInput = document.querySelector('.input-searchInputFilter');
  searchInput.value = optionLabel;

  // Rétracte le menu lorsque je clique sur une option
  toggleMenuDisplay({
    currentTarget: document.querySelector('.dropdown .title')
  });

  const resultOption = document.querySelector('.result-option');
  resultOption.textContent = `${searchInput.value}`;
  const containerResultOption = document.querySelector(
    '.container-result-option'
  );
  containerResultOption.style.display = 'block';
});

// rechercher les recettes via les ingrédients dans l'input nav
document.querySelector('#inputNav').addEventListener('keyup', function () {
  console.log(this.value);
});
