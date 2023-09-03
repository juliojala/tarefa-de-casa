const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds')
const gameOverImage = document.createElement('img');



const jump = () => {
    mario.classList.add('jump');
    
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    const cloudsPosition = clouds.offsetLeft;
    
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './fotos/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px'
         
        gameOverImage.src = './fotos/GameOver.png';
        gameOverImage.style.width = '550px';
        gameOverImage.style.position = 'fixed';
        gameOverImage.style.top = '39%';
        gameOverImage.style.left = '50%';
        gameOverImage.style.transform = 'translate(-50%, -50%)';morte.scr = ".png";
       

        clearInterval(loop);
    }
    

}, 10);
  

document.addEventListener('keydown', jump);
document.body.appendChild(gameOverImage);
