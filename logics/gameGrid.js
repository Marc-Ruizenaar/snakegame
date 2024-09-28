
// Ensure the game is a grid
const gameBounds = game.getBoundingClientRect();
game.style.gridTemplateColumns = `repeat(${gameBounds.width / characterLength}, ${characterLength}px)`;
game.style.gridTemplateRows = `repeat(${gameBounds.height / characterLength}, ${characterLength}px)`;

// Create grid background cells
for (let i = 0; i < (gameBounds.width / characterLength) * (gameBounds.height / characterLength); i++) {
    const createDiv = document.createElement("div");

    // Create a checkerboard pattern
    if ((Math.floor(i / (gameBounds.width / characterLength)) + i) % 2 === 0) {
        createDiv.classList.add("darkGreen");
    }
    gameBackground.appendChild(createDiv);
}
