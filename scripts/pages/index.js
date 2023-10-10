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
function toggleMenuDisplay(e) {
  const dropdown = e.currentTarget.parentNode;
  const menu = dropdown.querySelector('.menu');
  const icon = dropdown.querySelector('.fa-angle-down'); // Mise à jour de la classe de l'icône

  toggleClass(menu, 'hide');
  toggleClass(icon, 'rotate-90');
  toggleClass(dropdown, 'active'); // Ajoute/Supprime la classe "active" sur le conteneur dropdown
}

//selectionne l'élément de l'input filter et le récupère dans la value input
document.querySelector('.container-option').addEventListener('click', (e) => {
  const optionLabel = e.target.textContent;
  const searchInput = document.querySelector('.input-searchInputFilter');
  console.dir(searchInput);
  searchInput.value = optionLabel;
});
