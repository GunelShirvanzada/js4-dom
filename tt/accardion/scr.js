const btn = document.querySelectorAll('.btn');
const item = document.querySelectorAll('.accardion1');

btn.forEach((button, i) => {
    button.addEventListener('click', () => {
        item[i].classList.toggle('active');
    });
});