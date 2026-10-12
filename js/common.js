const header = document.querySelector('header');
const footer = document.querySelector('footer');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');

header.innerHTML = `
    <div class="navbar">
        <div class="side-item">
            <div class="logo-left">
                <div class="red-dot"></div>
                <span>OBSIDIAN</span>
            </div>
            <h3>OBSIDIAN</h3>
        </div>
        <div class="nav-item">
            <a href="index.html">HOME</a>
            <a href="movies.html">MOVIES & TV</a>
            <a href="music.html">MUSIC</a>
            <a href="news.html">NEWS</a>
        </div>
        <div class="nav-icon">
            <div class="search-box">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
                <input type="search" placeholder="SEARCH">
            </div>
            <div class="bookmark">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">  <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" /></svg>
            </div>
            <img src="">
            <div class="arrow-down">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
            </div>
        </div>
        <button class="hamburger">=</button>
    </div>       
`;

footer.innerHTML = `
        <div class="footer-container">  
            <div class="footer-content">
                <div class="footer-brand">
                    <h2>OBSIDIAN</h2>
                    <p>
                        The curated intersection of cinema, sound, and culture.
                        Archival depth meets contemporary moving image arts.
                    </p>
                    <span>ISSN 2831-904X</span>
                    <span>•</span>
                    <span>FESTIVAL NETWORK</span>
                </div>
                <div class="footer-column">
                    <h3>EXPLORE</h3>
                    <a href="#">Movies & TV</a>
                    <a href="#">Music</a>
                    <a href="#">Editorial Stories</a>
                    <a href="#">Collections</a>
                    <a href="#">Awards Season</a>
                    <a href="#">Festivals</a>
                </div>
                <div class="footer-column">
                    <h3>INSTITUTION</h3>
                    <a href="#">Editorial Staff</a>
                    <a href="#">Submissions</a>
                    <a href="#">Press Relations</a>
                    <a href="#">Film Society</a>
                    <a href="#">Careers</a>
                </div>
                <div class="footer-column">
                    <h3>ARCHIVE & LAW</h3>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Cookie Preferences</a>
                    <a href="#">Content Ratings</a>
                    <a href="#">Accessibility</a>
                </div>
                <div class="footer-column">
                    <h3>THE DISPATCH</h3>
                    <p>
                        Weekly curated cinema and delivered to your terminal.
                    </p>
                    <div class="email-box">
                        <input type="email" placeholder="Your email">
                        <button>Join</button>
                    </div>
                    <strong>Unsubscribe at any time</strong>
                </div>
            </div>
            <div class="footer-bottom">
                <span>© 2026 OBSIDIAN MEDIA GROUP. ALL RIGHTS RESERVED.</span>
                <h4>CURATED IN GENEVA % TOKYO</h4>
            </div>
        </div>
    </div>
`;

sidebarWrapper.innerHTML = `
    <div class="mobile-sidebar">
        <div class="menu-item">
            <div class="close-btn">X</div>
            <a href="index.html">HOME</a>
            <a href="movies.html">MOVIES & TV</a>
            <a href="music.html">MUSIC</a>
            <a href="news.html">NEWS</a>
        </div>
    </div>
`;