// Sélectionne l'élément input et la croix
const input = document.getElementById('inputNav');
const clearInput = document.getElementById('clearInputNav');

// Afficher la croix lorsque du texte est saisi
input.addEventListener('input', function () {
  if (input.value.trim() !== '') {
    clearInput.style.display = 'inline';
  } else {
    clearInput.style.display = 'none';
  }
});

// Effacer le contenu du champ d'entrée lorsque la croix est cliquée
clearInput.addEventListener('click', function () {
  input.value = '';
  clearInput.style.display = 'none';
});

// Sélectionne l'élément input et la croix
const inputFilter = document.getElementById('searchInputFilter');
const clearInputFilter = document.getElementById('clearInputFilter');

// Afficher la croix lorsque du texte est saisi
inputFilter.addEventListener('input', function () {
  if (inputFilter.value.trim() !== '') {
    clearInputFilter.style.display = 'inline';
  } else {
    clearInputFilter.style.display = 'none';
  }
});

// Effacer le contenu du champ d'entrée lorsque la croix est cliquée
clearInputFilter.addEventListener('click', function () {
  inputFilter.value = '';
  clearInputFilter.style.display = 'none';
});
