// Set current year and last modification date in the footer
document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    const lastModifiedDate = document.lastModified;
    document.getElementById("lastModified").textContent = `Last Modified: ${lastModifiedDate}`;
    
    // Contact Form Persistence using Local Storage
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    // Load saved data from local storage on page load
    if (localStorage.getItem("name")) nameInput.value = localStorage.getItem("name");
    if (localStorage.getItem("email")) emailInput.value = localStorage.getItem("email");
    if (localStorage.getItem("message")) messageInput.value = localStorage.getItem("message");

    // Save form data to local storage on change
    nameInput.addEventListener("input", () => localStorage.setItem("name", nameInput.value));
    emailInput.addEventListener("input", () => localStorage.setItem("email", emailInput.value));
    messageInput.addEventListener("input", () => localStorage.setItem("message", messageInput.value));
});

// Clear local storage on form submission and provide feedback
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault(); 

    // Clear local storage fields after submission
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("message");

    // Optional feedback alert
    alert("Thank you for reaching out! Your message has been submitted.");

});
