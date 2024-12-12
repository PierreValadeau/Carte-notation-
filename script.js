// Variables
const starsContainer = document.getElementById('rating-stars');
const submitButton = document.getElementById('submit-button');
const feedbackMessage = document.getElementById('feedback-message');
const resetButton = document.getElementById('reset-button');

// Create 5 stars
for (let i = 1; i <= 5; i++) {
  const star = document.createElement('span');
  star.textContent = '★';
  star.classList.add('star');
  star.dataset.value = i;
  starsContainer.appendChild(star);
}

// Handle star click events
let selectedRating = 0;
starsContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('star')) {
    const rating = parseInt(event.target.dataset.value);
    selectedRating = rating;

    // Update the appearance of selected stars
    updateStars(rating);

    // Enable the submit button
    submitButton.disabled = false;
  }
});

// Handle mouseover on stars
starsContainer.addEventListener('mouseover', (event) => {
  if (event.target.classList.contains('star')) {
    const hoverRating = parseInt(event.target.dataset.value);

    // Temporarily update stars based on hover
    updateStars(hoverRating);
  }
});

// Reset star appearance when the mouse leaves
starsContainer.addEventListener('mouseout', () => {
  // Restore the selected stars or clear all if no rating is selected
  updateStars(selectedRating);
});

// Handle click on the "Submit" button
submitButton.addEventListener('click', () => {
  feedbackMessage.textContent = `Merci pour votre évaluation de ${selectedRating} étoile(s) !`;
  feedbackMessage.classList.remove('hidden');
});

// Handle click on the "Reset" button
resetButton.addEventListener('click', () => {
  // Reset all stars
  updateStars(0);

  // Reset variables and states
  selectedRating = 0;
  submitButton.disabled = true;
  feedbackMessage.textContent = '';
  feedbackMessage.classList.add('hidden');
});

// Function to update star appearance
function updateStars(rating) {
  document.querySelectorAll('.star').forEach((star, index) => {
    star.classList.toggle('selected', index < rating);
  });
}
