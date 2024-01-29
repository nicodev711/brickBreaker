// Set up the Game.
const canvas = document.getElementById('canvas');
canvas.width = 1024;
canvas.height = 576;
canvas.style.background = "lightblue";

// Implement Context 2D; Use to draw ONLY.
const ctx = canvas.getContext('2d');


// Run the Game
function gameLoop() {
    // Clear screen
    ctx.clearRect(0,0, canvas.width, canvas.height)
    // draw player on screen
    drawPlayer()
    //add player moves
    playerMove()
    //draw block
    drawBlocks()
    // add blocks collision
    blocksCollision()
    // draw ball on screen
    ballDraw()
    //add ball movements
    ballMove()
    
    // Request next frame
    const run = window.requestAnimationFrame(gameLoop);
    if (ball.y > canvas.height) {
        window.cancelAnimationFrame(run);
        setTimeout(() => {
            alert("You've lost");
        }, 20); // Adjust the delay time as needed
    } 
    if (blocks.length === blocksHit.length) {
        window.cancelAnimationFrame(run);
        setTimeout(() => {
            alert("You've won!");
        }, 20); // Adjust the delay time as needed
    }
}

// Start the game loop
gameLoop()
