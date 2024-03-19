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
    const stoneImages = [
        "Untitled_Artwork-1.png",
        "Untitled_Artwork-2.png",
        "Untitled_Artwork-3.png",
        "Untitled_Artwork-4.png",
        "Untitled_Artwork-5.png",
    ];
    // Get a random index from the array
    const randomRuneIndex = Math.floor(Math.random() * runeImages.length);
    const randomStoneIndex = Math.floor(Math.random() * stoneImages.length);
    // Get the image elements by their IDs
    const stoneElement = document.getElementById("stone");
    // Set the background image of the stone to the randomly chosen filename
    stoneElement.style.backgroundImage = "url('Images/Runestones/" + stoneImages[randomStoneIndex] + "')"; 
    const runeImageElement = new Image();
    runeImageElement.src = "Images/Runes/" + runeImages[randomRuneIndex] + ".png";
    runeImageElement.classList.add("rune-image");
    // Append the rune image to the stone div
    stoneElement.appendChild(runeImageElement);
    //Rune description text
    const filenameElement = document.getElementById("filename"); 
    filenameElement.textContent = runeImages[randomRuneIndex].toUpperCase();
});

