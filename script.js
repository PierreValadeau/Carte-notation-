// Variables
const starsContainer = document.getElementById('rating-stars');
const submitButton = document.getElementById('submit-button');
const feedbackMessage = document.getElementById('feedback-message');
const resetButton = document.getElementById('reset-button');

// Créer 5 étoiles
for (let i = 1; i <= 5; i++) {
  const star = document.createElement('span');
  star.textContent = '★';
  star.classList.add('star');
  star.dataset.value = i;
  starsContainer.appendChild(star);
}

// Gestion des clics sur les étoiles
let selectedRating = 0;
starsContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('star')) {
    const rating = parseInt(event.target.dataset.value);
    selectedRating = rating;

    // Mettre à jour les étoiles sélectionnées
    updateStars(rating);

    // Activer le bouton
    submitButton.disabled = false;
  }
});

// Gestion du survol des étoiles
starsContainer.addEventListener('mouseover', (event) => {
  if (event.target.classList.contains('star')) {
    const hoverRating = parseInt(event.target.dataset.value);

    // Mettre à jour les étoiles en fonction du survol
    updateStars(hoverRating);
  }
});

// Réinitialiser l'effet au survol lorsque la souris quitte les étoiles
starsContainer.addEventListener('mouseout', () => {
  // Restaurer les étoiles sélectionnées ou tout désélectionner si aucune note
  updateStars(selectedRating);
});

// Gestion du clic sur le bouton "Soumettre"
submitButton.addEventListener('click', () => {
  feedbackMessage.textContent = `Merci pour votre évaluation de ${selectedRating} étoile(s) !`;
  feedbackMessage.classList.remove('hidden');
});

// Gestion du clic sur le bouton "Reset"
resetButton.addEventListener('click', () => {
  // Réinitialiser les étoiles
  updateStars(0);

  // Réinitialiser les variables et les états
  selectedRating = 0;
  submitButton.disabled = true;
  feedbackMessage.textContent = '';
  feedbackMessage.classList.add('hidden');
});

// Fonction pour mettre à jour l'affichage des étoiles
function updateStars(rating) {
  document.querySelectorAll('.star').forEach((star, index) => {
    star.classList.toggle('selected', index < rating);
  });
}
