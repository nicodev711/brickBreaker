window.addEventListener('keydown', (e)=>{
    if (e.key === 'd'||e.key === 'ArrowRight') {
        moveRight = true;
    }
    if (e.key === 'q'||e.key === 'a'||e.key === 'ArrowLeft') {
        moveLeft = true;
    }
})
window.addEventListener('keyup', (e)=>{
    if (e.key === 'd'||e.key === 'ArrowRight') {
        moveRight = false;
    }
    if (e.key === 'q'||e.key === 'a'||e.key === 'ArrowLeft') {
        moveLeft = false;
    }
})