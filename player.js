// Create Player
let player = {
    x:(1024/2)-32 ,
    y:(576/3)*2,
    width:64,
    height:32,
    color:'navy',
}

function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}
//player moves
let moveLeft = false;
let moveRight = false;
let speed = 7;

function playerMove() {
    if (player.x >= canvas.width - 65) {
        player.x = canvas.width - 65;
        if (moveLeft) player.x -= speed;
    }
    if (player.x <= 1) {
        player.x = 1;
        if (moveRight) player.x += speed;
    }
    if (moveLeft) player.x -= speed;
    if (moveRight) player.x += speed;
}