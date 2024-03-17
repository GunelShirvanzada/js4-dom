const btns = document.querySelectorAll('.box');
const modalEl = document.querySelector('.box_text');
const overlayEl = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        modalEl.classList.remove('hidden');
        overlayEl.classList.remove('hidden');
    });
});

const closeModal = () => {
    modalEl.classList.add('hidden');
    overlayEl.classList.add('hidden');
};

closeBtn.addEventListener('click', closeModal);
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});