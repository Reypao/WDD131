const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

const lastModifiedDate = document.lastModified;

document.getElementById("lastModified").textContent = `Last Modification: ${lastModifiedDate}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");

});
function calculateWindChill(tempF, windSpeedMph) {
    if (tempF <= 50 && windSpeedMph > 3) {
        return (
            35.74 + 0.6215 * tempF - 35.75 * Math.pow(windSpeedMph, 0.16) + 
            0.4275 * tempF * Math.pow(windSpeedMph, 0.16)
        ).toFixed(2); // Wind Chill Formula in °F
    } else {
        return "N/A";
    }
}

// Static values
const temperature = 80; // Example static value
const windSpeed = 10; // Example static value

// Get wind chill element and display the result
const windChillElement = document.querySelector("#windChill");
windChillElement.textContent = calculateWindChill(temperature, windSpeed);
