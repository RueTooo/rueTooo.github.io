document.addEventListener("DOMContentLoaded", function () {
    // Array of rune image filenames
    const runeImages = [
        "betrayal",
        "change",
        "despair",
        "destruction",
        "echo",
        "eclipse",
        "enigma",
        "fate",
        "hope",
        "hunt",
        "illusion",
        "loss",
        "love",
        "obscure",
        "power",
        "rebellion",
        "redemption",
        "renew",
        "secret",
        "serenity",
        "solitude",
        "vortex",
        "wealth",
        "wisdom",
        "zeal"
        // Add more filenames as needed
    ];

    // Get a random index from the array
    const randomIndex = Math.floor(Math.random() * runeImages.length);

    // Get the image element by its ID
    const randomImageElement = document.getElementById("randomImage");
    const filenameElement = document.getElementById("filename"); 
    //const filenameElement = document.getElementById("filename" + ".png");

    // Set the source attribute of the image to the randomly chosen filename
    randomImageElement.src = "Images/Runes/" + runeImages[randomIndex] + ".png";
    randomImageElement.style.width = "300px"; // Set a preferred width for the image (adjust as needed)
    randomImageElement.style.height = "300px"; // Set a preferred height for the image (adjust as needed)
     // Display the filename
     filenameElement.textContent = runeImages[randomIndex].toUpperCase();
});
