const sonic = document.querySelector('.sonic');
const spikes = document.querySelector('.spikes');

const jump = () => {
    sonic.classList.add('jump');

    setTimeout(() => {
        sonic.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const spikesPosition = spikes.offsetLeft;
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');

    if (spikesPosition <= 60 && spikesPosition > 0 && sonicPosition < 30 ) {
        
        spikes.style.animation = 'none';
        spikes.style.left = `${spikesPosition}px`;

        sonic.style.animation = 'none';
        sonic.style.bottom = `${sonicPosition}px`;

        sonic.src = './images/sonic-game-over.png';
        sonic.style.width = '75px';
        sonic.style.marginLeft = '20px';

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);