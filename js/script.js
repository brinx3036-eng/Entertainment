const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.mobile-sidebar');
const closeBtn = document.querySelector('.close-btn');

hamburger.addEventListener('click', () => {
    sidebar.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
});
