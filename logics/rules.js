const game = document.getElementById("game");
const gameBackground = document.querySelector(".background");
const characterLength = 35;
let gameStarted = false;

let globalGameScore = 0;
let characterPosition = { x: 0, y: 0 };
let direction = { x: 1, y: 0 }; 
let movementInterval;

// Game Over Logic
function gameOver() {

     // Stop movement on game over
    clearInterval(movementInterval);

    // Create a layover
    const layover = document.createElement("div");
    layover.id = "game-over";
    layover.innerHTML = `<h1>Game Over</h1><p>Score: ${globalGameScore}</p><button id="gameOverScreen" onclick="restartGame()">Restart</button>`;
    game.appendChild(layover);

    // Stop loading in berries in the background
    gameStarted = false;

    // Remove the berry
    const berries = document.querySelectorAll(".berry");
    berries.forEach(berry => berry.remove());
}

// Restart the game
function restartGame() {
    gameStarted = true;
    globalGameScore = 0;
    document.getElementById("score").innerText = globalGameScore;
    characterPosition = { x: 0, y: 0 };
    snakeBody = [{ x: 0, y: 0 }]; // Reset snake body
    direction = { x: 1, y: 0 }; // Reset direction
    updateSnakeBody(); // Re-render snake body

    const layover = document.querySelector("#game-over");
    if (layover) {
        layover.remove();
    }

    berryCreation();

    movementInterval = setInterval(moveSnake, 100); // Restart movement

    gameStarted = true;

}

function startGame() {
  if (gameStarted === true) {
    berryCreation(); // Pass the function reference
}
}

setInterval(startGame, 2000); // Pass the function reference
