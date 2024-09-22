// Get the current year and set it dynamically in the footer
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Get the last modified date and display it in the footer
const lastModification = document.lastModification;
document.getElementById('lastModification').textContent = `Last Modification: ${lastModification}`;
