const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.mobile-sidebar');
const closeBtn = document.querySelector('.close-btn');

if (hamburger && sidebar && closeBtn) {
    const closeSidebar = () => {
        sidebar.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
    };

    hamburger.addEventListener('click', () => {
        sidebar.classList.add('open');
        hamburger.setAttribute('aria-expanded', 'true');
    });

    closeBtn.addEventListener('click', closeSidebar);
    sidebar.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeSidebar));
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeSidebar();
    });
}
