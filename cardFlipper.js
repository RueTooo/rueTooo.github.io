document.addEventListener("DOMContentLoaded", function () {
    // Array of card image filenames
    const cardImages = [
        "Aboleth",
        "Mermaid",
        "Hippocampus",
        "Centaur",
        "Wyvern",
        "Zelekhut",
        "Dryad",
        "Manticore",
        "Chuul",
        "Etin",
        "Minotaur",
        "Satyr"
        // Add more filenames as needed
    ];

    // Get a random index from the array
    const randomIndex = Math.floor(Math.random() * cardImages.length);

    // Get the image element by its ID
    const randomImageElement = document.getElementById("randomImage");
    const filenameElement = document.getElementById("filename"); 
    //const filenameElement = document.getElementById("filename" + ".png");

    // Set the source attribute of the image to the randomly chosen filename
    randomImageElement.src = "Images/ConstellationCards/" + cardImages[randomIndex] + ".png";
    randomImageElement.style.width = "340px"; // Set a preferred width for the image (adjust as needed)
    randomImageElement.style.height = "383px"; // Set a preferred height for the image (adjust as needed)
     // Display the filename
     filenameElement.textContent = cardImages[randomIndex].toUpperCase();
});