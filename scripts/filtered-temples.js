let d = new Date();
// Set current year and last modified date
document.getElementById("currentYear").innerHTML = `&copy; ${d().getFullYear()}`;
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;
// Add event listener to a button (hamburger menu)
const hambutton = document.querySelector("#hambutton");
hambutton.addEventListener('click', () => {
});
// Function to toggle an active class
function toggleActive(element) {
    element.classList.toggle("active");
}
// Array of temple data (initially empty, populate it with real data)
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
      },
      {
        templeName: "Cordoba Argentina",
        location: "Cordoba, Argentina",
        dedicated: "2015, Mayo, 17",
        area: 34369,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cordoba-argentina/1280x800/cordoba-argentina-temples-buildings-1436934-wallpaper.jpg"
      },
      {
        templeName: "Jordan River Utah",
        location: "South Jordan, Utah, United States",
        dedicated: "1981, November, 16",
        area: 148236,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/jordan-river-utah/1280x800/jordan-river-temple-lds-941302-wallpaper.jpg"
      },
      {
        templeName: "Washington D.C.",
        location: "Washington D.C., United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/1280x800/washington_dc_temple-exterior-2.jpeg"
      }
    // Add more temple objects here...
];

createTempleCard(temples); // Call the function to create and display temple cards

// Insert the filtering logic here
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault();
      const filter = this.textContent.toLowerCase();  // Get the filter type from the clicked menu item

      let filteredTemples = temples;  // Default to showing all temples

      if (filter === 'old') {
          filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
      } else if (filter === 'new') {
          filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() >= 2000);
      } else if (filter === 'large') {
          filteredTemples = temples.filter(t => t.area > 90000);
      } else if (filter === 'small') {
          filteredTemples = temples.filter(t => t.area < 10000);
      }

      createTempleCard(filteredTemples);  // Recreate the cards with the filtered data
  });
});
function createTempleCard(filteredTemples) {
    document.querySelector(".rest-grid").innerHTML = ""; // Clear existing cards before creating new ones
    filteredTemples.forEach(temple => {
        // Create a new card (section) and elements inside
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        // Fill the elements with temple data
        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        // Append the elements to the card
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector("rest-grid").appendChild(card);
});


const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

const lastModifiedDate = document.lastModified;

document.getElementById("lastModified").textContent = `Last Modification: ${lastModifiedDate}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
})};
