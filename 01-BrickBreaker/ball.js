//Create the ball
let ball = {
    x:1024/2,
    y:((576/3)*2)-15,
    radius:16,
    sAngle:0,
    eAngle:2*Math.PI,
    color: "navy",
    speed:3,
}

let vectorCoor = {}
function vector(degrees) {
    let radians = degrees / (180 * Math.PI);
    vectorCoor.x = Math.cos(radians);
    vectorCoor.y = Math.sin(radians)
}
// min 270, 1485
function getVector(min, max) {
    let degree = Math.random() * (max - min) + min;
    vector(degree)
}

getVector(270, 1485)

function ballDraw() {
    ctx.beginPath();
    ctx.fillStyle = ball.color;
    ctx.arc(ball.x, ball.y, ball.radius, ball.sAngle, ball.eAngle)
    ctx.fill()
}

let collideUp = false;
let collideX = false;

function ballMove(handle) {
    //collision with walls L, Up, R
    if (ball.y - 16 < 0) collideUp = true; //Collide top wall
    if (ball.x + 16 > canvas.width) collideX = !collideX;
    if (ball.x - 16 < 0)  collideX = !collideX;
    //Collision with player
    if (ball.x > player.x && ball.x < player.x+player.width && ball.y +16 > player.y && ball.y +16 < player.y+player.height) collideUp = false;
    //Collision with blocks
    blocks.forEach((block)=>{
        if (!block.isHit) {
            // Collide from the bottom
            if (ball.x > block.x && ball.x<block.x+block.width && ball.y-16 < block.y+block.height) {
                collideUp = true;
                block.isHit = true;
                blocksHit.push(block)
            }
            // collision right side block
            if (ball.y<block.y+block.height && ball.y > block.y && ball.x+16 > block.x && ball.x + 16 < block.x+block.width) {
                collideX = !collideX;
                block.isHit = true;
                blocksHit.push(block);
            }
            // collision right side block
            if (ball.y<block.y+block.height && ball.y > block.y && ball.x-16 < block.x+block.width && ball.x - 16 > block.x) {
                collideX = !collideX;
                block.isHit = true;
                blocksHit.push(block);
            }
            if (ball.y > block.y) {
                if (ball.x > block.x && ball.x<block.x+block.width && ball.y+16 > block.y && ball.y+16 < block.y+block.height) {
                    collideUp = !collideUp;
                    block.isHit = true;
                    blocksHit.push(block);
                }    
            }
        }
    })


    if (!collideUp) {
        ball.y -= vectorCoor.y* ball.speed;
    } else {
        ball.y += vectorCoor.y* ball.speed;
    }
    if (!collideX) {
        ball.x -= vectorCoor.x*ball.speed;
    } else {
        ball.x += vectorCoor.x*ball.speed;
    }
}