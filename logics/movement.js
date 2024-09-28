// Move the snake and update the body segments
function moveSnake() {
    // Copy the current head position to a new object
    let newHeadPosition = { x: characterPosition.x + direction.x * characterLength, y: characterPosition.y + direction.y * characterLength };

    // Check if the snake has collided with itself
    if (snakeBody.some(segment => segment.x === newHeadPosition.x && segment.y === newHeadPosition.y)) {
        gameOver();
        return;
    }

    // Ensure the snake doesn't move out of bounds
    if (newHeadPosition.x < 0 || newHeadPosition.x >= gameBounds.width || newHeadPosition.y < 0 || newHeadPosition.y >= gameBounds.height) {
        gameOver();
        return;
    }

    // Add the new head position to the front of the snake body
    snakeBody.unshift(newHeadPosition);

    // Remove the last segment of the body if the snake hasn't grown
    if (snakeBody.length > globalGameScore + 1) {
        snakeBody.pop();
    }

    // Update the character position (head of the snake)
    characterPosition = newHeadPosition;
    updateSnakeBody(); // Re-render the snake

    berryEating(); // Check if the snake has eaten a berry
}

// Set movement direction on arrow key press
addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowRight":
            if (direction.x === 0) { // Prevent moving in the opposite direction
                direction = { x: 1, y: 0 };
            }
            break;
        case "ArrowLeft":
            if (direction.x === 0) {
                direction = { x: -1, y: 0 };
            }
            break;
        case "ArrowUp":
            if (direction.y === 0) {
                direction = { x: 0, y: -1 };
            }
            break;
        case "ArrowDown":
            if (direction.y === 0) {
                direction = { x: 0, y: 1 };
            }
            break;
    }
});