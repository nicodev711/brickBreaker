// let blocks = [
//     {
//         "x": 15,
//         "y": 66,
//         "width": 64,
//         "height": 32,
//         "color": "grey",
//         "isHit": false
//     },
//     {
//         "x": 81,
//         "y": 66,
//         "width": 64,
//         "height": 32,
//         "color": "grey",
//         "isHit": false
//     },
//     {
//         "x": 147,
//         "y": 66,
//         "width": 64,
//         "height": 32,
//         "color": "grey",
//         "isHit": false
//     },
//     {
//         "x": 213,
//         "y": 66,
//         "width": 64,
//         "height": 32,
//         "color": "grey",
//         "isHit": false
//     },
//     {
//         "x": 279,
//         "y": 66,
//         "width": 64,
//         "height": 32,
//         "color": "grey",
//         "isHit": false
//     },
//     {
//         "x": 345,
//         "y": 66,
//         "width": 64,
//         "height": 32,
//         "color": "grey",
//         "isHit": false
//     },
//     {
//         "x": 411,
//         "y": 66,
//         "width": 64,
//         "height": 32,
//         "color": "grey",
//         "isHit": false
//     },
//     {
//         "x": 477,
//         "y": 66,
//         "width": 64,
//         "height": 32,
//         "color": "grey",
//         "isHit": false
//     },
//     {
//         "x": 543,
//         "y": 66,
//         "width": 64,
//         "height": 32,
//         "color": "grey",
//         "isHit": false
//     },
//     {
//         "x": 609,
//         "y": 66,
//         "width": 64,
//         "height": 32,
//         "color": "grey",
//         "isHit": false
//     },
//     {
//         "x": 675,
//         "y": 66,
//         "width": 64,
//         "height": 32,
//         "color": "grey",
//         "isHit": false
//     },
//     {
//         "x": 741,
//         "y": 66,
//         "width": 64,
//         "height": 32,
//         "color": "grey",
//         "isHit": false
//     },
//     {
//         "x": 807,
//         "y": 66,
//         "width": 64,
//         "height": 32,
//         "color": "grey",
//         "isHit": false
//     },
//     {
//         "x": 873,
//         "y": 66,
//         "width": 64,
//         "height": 32,
//         "color": "grey",
//         "isHit": false
//     },
//     {
//         "x": 939,
//         "y": 66,
//         "width": 64,
//         "height": 32,
//         "color": "grey",
//         "isHit": false
//     }
// ];
let blocks = [];
let blocksHit = [];

let bX = -51;
let bY = 32;


for (let i=0; i<15; i++) {
    let block = {
        x: bX+=66,
        y: bY,
        width: 64,
        height:32,
        color:'grey',
        isHit:false
    }
    blocks.push(block);
}

function drawBlocks() {
    blocks.forEach((block, i) =>{
        ctx.fillStyle = block.color;
        ctx.fillRect(block.x, block.y, block.width, block.height);
    })
}


function blocksCollision() {
    blocksHit.forEach(block => {
        ctx.clearRect(block.x, block.y, block.width, block.height);
    })
    
}