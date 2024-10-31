const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

const lastModifiedDate = document.lastModified;

//document.getElementById("lastModified").textContent = `Last Modification: ${lastModifiedDate}`;


const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");

});

const row1 = [
    {
      templeName: "Title 1",
      location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
      imageUrl: "images/installation.jpeg"
    },
    {
        templeName: "Title 2",
        location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
        imageUrl: "images/installation2.jpeg"
    },
    {
        templeName: "Title 3",
        location: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.",
        imageUrl: "images/installation2.jpeg"
    }
];



displayRow(row1);




function displayRow(filteredRow) {
    const templeContainer = document.getElementById("container1");
    filteredRow.innerHTML = '';
    
    filteredRow.forEach(temple => {
        const card = document.createElement("div");
        card.className ="column";

        card.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            <div class='text'>
            <h2>${temple.templeName}</h2>
            <p>${temple.location}</p>
            </div>
        `;

        console.log(temple.title);

        templeContainer.appendChild(card);       
    });
}