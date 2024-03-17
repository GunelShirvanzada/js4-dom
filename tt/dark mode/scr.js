const modeBtn = document.querySelector('.mode');
const body = document.querySelector('body');

modeBtn.addEventListener('click', () => {
    body.classList.toggle('dark_mode')
})
