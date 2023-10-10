const cleanInput = (inputID, clearInputID) => {
  // Sélectionne l'élément input et la croix
  const input = document.getElementById(inputID);
  const clearInput = document.getElementById(clearInputID);

  // Afficher la croix lorsque du texte est saisi
  input.addEventListener('input', () => {
    if (input.value.trim() !== '') return (clearInput.style.display = 'inline');
    clearInput.style.display = 'none';
  });

  // Effacer le contenu du champ d'entrée lorsque la croix est cliquée
  clearInput.addEventListener('click', () => {
    input.value = '';
    clearInput.style.display = 'none';
  });
};

cleanInput('inputNav', 'clearInputNav');
cleanInput('searchInputFilter', 'clearInputFilter');
