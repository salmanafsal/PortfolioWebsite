// Set the current year in the footer
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
});

// Handle Learn More button
document.getElementById("learnMoreBtn").addEventListener("click", () => {
  alert("Thanks for your interest! More coming soon.");
});
