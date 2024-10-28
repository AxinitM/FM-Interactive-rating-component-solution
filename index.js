const warningMessage = document.getElementById("warning-message");
const iconStar = document.getElementById("icon-star");
const ratingSection = document.getElementById("rating-section");
const thanksSection = document.getElementById("thanks-section");
const mainContainer = document.getElementById("main-container");
const selectedVoteText = document
  .getElementById("selected-vote")
  .querySelector("span");

document
  .getElementById("submit-button")
  .addEventListener("click", function (e) {
    e.stopPropagation(); // Preventing the click event from bubbling up on submit

    const selectedVote = document.querySelector('input[name="vote"]:checked');
    if (selectedVote) {
      // Updating the selected rating in the "Thank You" section
      selectedVoteText.textContent = selectedVote.value;

      // Hiding the rating section and showing the "Thank You" section
      mainContainer.style.alignItems = "center";
      warningMessage.style.visibility = "hidden";
      iconStar.style.display = "none";
      ratingSection.style.display = "none";
      thanksSection.style.display = "block";

      // Adding an event to return to the initial screen on click
      document.addEventListener("click", resetToInitialState);
    } else {
      // Displaying a warning message if no rating is selected
      warningMessage.style.visibility = "visible";
    }
  });

// Removing the warning message when a radio button is selected
document.querySelectorAll(`input[name="vote"]`).forEach((radio) => {
  radio.addEventListener("change", () => {
    warningMessage.style.visibility = "hidden";
  });
});

function resetToInitialState() {
  // reset visibility main blocks
  mainContainer.style.alignItems = "flex-start";
  iconStar.style.display = "flex";
  ratingSection.style.display = "flex";
  thanksSection.style.display = "none";

  // reset radio buttons choice
  const selectedVote = document.querySelector('input[name="vote"]:checked');
  if (selectedVote) {
    selectedVote.checked = false;
  }

  // Removing the click handler for returning
  document.removeEventListener("click", resetToInitialState);
}
