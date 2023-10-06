function toggleClass(elem, className) {
  if (elem.className.indexOf(className) !== -1) {
    elem.className = elem.className.replace(className, '');
  } else {
    elem.className = elem.className.replace(/\s+/g, ' ') + ' ' + className;
  }

  return elem;
}

//get elements
const dropdownTitle = document.querySelector('.dropdown .title');
const dropdownOptions = document.querySelectorAll('.dropdown .option');

//bind listeners to these elements
dropdownTitle.addEventListener('click', toggleMenuDisplay);
dropdownOptions.forEach((option) =>
  option.addEventListener('click', handleOptionSelected)
);
document
  .querySelector('.dropdown .title')
  .addEventListener('change', handleTitleChange);

function toggleMenuDisplay(e) {
  const dropdown = e.currentTarget.parentNode;
  const menu = dropdown.querySelector('.menu');
  const icon = dropdown.querySelector('.fa-angle-down'); // Mise à jour de la classe de l'icône

  toggleClass(menu, 'hide');
  toggleClass(icon, 'rotate-90');
  toggleClass(dropdown, 'active'); // Ajoute/Supprime la classe "active" sur le conteneur dropdown
}
