document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function (e) {
    if (e.keyCode == 123) { // F12
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { // Ctrl+Shift+I
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) { // Ctrl+Shift+C
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { // Ctrl+Shift+J
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { // Ctrl+U
        return false;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle');
    const themeIcon = themeBtn.querySelector('i');
    const searchTrigger = document.getElementById('search-trigger');
    const searchModal = document.getElementById('search-modal');
    const closeSearch = document.getElementById('close-spotlight');
    const searchInput = document.getElementById('spotlight-input');
    const searchResults = document.getElementById('spotlight-results');

    const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mainNav = document.getElementById('main-nav');
    const toolsTrigger = document.getElementById('tools-dropdown-trigger');

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        themeIcon.className = theme === 'dark' ? 'fa-regular fa-sun' : 'fa-regular fa-moon';
    }
    function initTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) { setTheme(savedTheme); }
        else {
            const h = new Date().getHours();
            setTheme((h >= 19 || h < 6) ? 'dark' : 'light');
        }
    }
    themeBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        setTheme(current === 'dark' ? 'light' : 'dark');
    });
    initTheme();

    function toggleSearch() {
        searchModal.classList.toggle('active');
        if (searchModal.classList.contains('active')) setTimeout(() => searchInput.focus(), 100);
    }
    searchTrigger.addEventListener('click', toggleSearch);
    closeSearch.addEventListener('click', toggleSearch);
    searchModal.addEventListener('click', (e) => { if (e.target === searchModal) toggleSearch(); });

    function toggleMobileMenu() {
        mainNav.classList.toggle('is-open');
        document.body.style.overflow = mainNav.classList.contains('is-open') ? 'hidden' : '';
    }

    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    closeMenuBtn.addEventListener('click', toggleMobileMenu);

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 992 && link.parentElement.classList.contains('has-dropdown')) {
                e.preventDefault();
                link.parentElement.classList.toggle('active');
            } else {
                if (mainNav.classList.contains('is-open')) toggleMobileMenu();
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (searchModal.classList.contains('active')) toggleSearch();
            if (mainNav.classList.contains('is-open')) toggleMobileMenu();
        }
    });



    const data = [
        { title: 'ماشین حساب خورشیدی هوشمند', cat: 'ابزار', link: '/tools/abzar/abzar-index.html' },

        { title: 'متاورس: آینده دنیای دیجیتال', cat: 'مقاله', link: '/magale/magale-section/metavers.html' },

        { title: 'پروژه الکترونیک قدرت (Power Electronics)', cat: 'نمونه‌کار', link: '/portfolio/portfolio/PowerElectronics.html' },

        { title: 'درباره من و تماس', cat: 'عمومی', link: '/about%20us/about-us-index.html' },
        { title: 'صفحه اصلی', cat: 'عمومی', link: '/index.html' },
    ];


    searchInput.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase().trim();
        searchResults.innerHTML = '';

        if (val.length === 0) {
            searchResults.innerHTML = '<div class="empty-state"><p>تایپ کنید...</p></div>';
            return;
        }

        const filtered = data.filter(i => i.title.toLowerCase().includes(val));

        if (filtered.length > 0) {
            filtered.forEach(item => {
                const d = document.createElement('div');
                d.className = 'result-row';
                d.innerHTML = `
                    <a href="${item.link}" style="display:flex; justify-content:space-between; width:100%; text-decoration:none; color:inherit; align-items:center;">
                        <span style="font-weight:500;">${item.title}</span>
                        <small style="opacity:0.6; font-size:0.8em; background:#eee; padding:2px 6px; border-radius:4px;">${item.cat}</small>
                    </a>
                `;
                searchResults.appendChild(d);
            });
        } else {
            searchResults.innerHTML = '<div class="empty-state"><p>نتیجه‌ای یافت نشد</p></div>';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {


    const heroSection = document.querySelector('.hero-section');
    const heroVisual = document.querySelector('.hero-visual');
    const heroContent = document.querySelector('.hero-content');

    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-count');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target + "+";
                }
            };
            updateCount();
        });
    };

    setTimeout(animateCounters, 1000);


    if (heroSection && window.innerWidth > 992) {
        heroSection.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageY * 2) / 100;

            if (heroVisual) heroVisual.style.transform = `translateX(${x}px) translateY(${y}px)`;
            if (heroContent) heroContent.style.transform = `translateX(${-x / 2}px) translateY(${-y / 2}px)`;
        });

        heroSection.addEventListener('mouseleave', () => {
            if (heroVisual) heroVisual.style.transform = `translateX(0) translateY(0)`;
            if (heroContent) heroContent.style.transform = `translateX(0) translateY(0)`;
        });
    }


    if (heroSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    heroSection.classList.add('is-visible');
                } else {
                    heroSection.classList.remove('is-visible');
                }
            });
        }, {
            threshold: 0.1
        });

        observer.observe(heroSection);
    }
});

const filterBtns = document.querySelectorAll('.filter-chip');
const articles = document.querySelectorAll('.article-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        articles.forEach(article => {
            const category = article.getAttribute('data-category');

            if (filterValue === 'all' || filterValue === category) {
                article.classList.remove('hidden');
                article.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
                article.classList.add('hidden');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            portfolioCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filterValue === 'all' || filterValue === category) {
                    card.classList.remove('hidden');
                    card.classList.add('show');

                    setTimeout(() => {
                        card.classList.remove('show');
                    }, 600);
                } else {
                    card.classList.add('hidden');
                    card.classList.remove('show');
                }
            });
        });
    });
});

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
