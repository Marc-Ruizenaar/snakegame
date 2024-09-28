// Berry creation
function berryCreation() {
    const berry = document.createElement("div");
    berry.classList.add("berry");

    // Place berry randomly on the grid
    const berryX = Math.floor(Math.random() * (gameBounds.width / characterLength)) * characterLength;
    const berryY = Math.floor(Math.random() * (gameBounds.height / characterLength)) * characterLength;

    berry.style.left = `${berryX}px`;
    berry.style.top = `${berryY}px`;
    game.appendChild(berry);
}

// Berry eating logic
function berryEating() {
    const berries = document.querySelectorAll(".berry");

    berries.forEach((berry) => {
        const berryRect = berry.getBoundingClientRect();
        const characterRect = document.querySelector(".snake-body").getBoundingClientRect(); // Head of the snake

        if (
            characterRect.left === berryRect.left &&
            characterRect.top === berryRect.top
        ) {
            globalGameScore++;
            berry.remove();
            document.getElementById("score").innerText = globalGameScore;

            // Add new segment to the snake's body
            const newSegment = { ...snakeBody[snakeBody.length - 1] }; // Add a new segment at the end
            snakeBody.push(newSegment);
        }
    });
}