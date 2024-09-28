
// Function to update the snake's body positions and render the body
function updateSnakeBody() {
    // Remove existing body segments from the DOM
    const existingSegments = document.querySelectorAll(".snake-body");
    existingSegments.forEach(segment => segment.remove());

    // Render each body segment
    snakeBody.forEach((segment, index) => {
        const segmentDiv = document.createElement("div");
        segmentDiv.classList.add("snake-body");
        segmentDiv.style.left = `${segment.x}px`;
        segmentDiv.style.top = `${segment.y}px`;
        segmentDiv.style.width = `${characterLength}px`;
        segmentDiv.style.height = `${characterLength}px`;

        // Different color for the snake head
        if (index === 0) {
            segmentDiv.style.backgroundColor = "green"; // Head color
        } else {
            segmentDiv.style.backgroundColor = "red"; // Body color
        }

        game.appendChild(segmentDiv);
    });
}
