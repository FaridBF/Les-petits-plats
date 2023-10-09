// Sélectionne l'élément input et la croix
const input = document.getElementById('name');
const clearInput = document.getElementById('clearInput');

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
