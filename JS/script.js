document.addEventListener('DOMContentLoaded', () => {
    // --- عناصر تم و سرچ (کدهای قبلی) ---
    const themeBtn = document.getElementById('theme-toggle');
    const themeIcon = themeBtn.querySelector('i');
    const searchTrigger = document.getElementById('search-trigger');
    const searchModal = document.getElementById('search-modal');
    const closeSearch = document.getElementById('close-spotlight');
    const searchInput = document.getElementById('spotlight-input');
    const searchResults = document.getElementById('spotlight-results');
    
    // --- عناصر جدید موبایل ---
    const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mainNav = document.getElementById('main-nav');
    const toolsTrigger = document.getElementById('tools-dropdown-trigger');

    // 1. مدیریت تم (بدون تغییر)
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

    // 2. مدیریت سرچ (بدون تغییر)
    function toggleSearch() {
        searchModal.classList.toggle('active');
        if (searchModal.classList.contains('active')) setTimeout(() => searchInput.focus(), 100);
    }
    searchTrigger.addEventListener('click', toggleSearch);
    closeSearch.addEventListener('click', toggleSearch);
    searchModal.addEventListener('click', (e) => { if (e.target === searchModal) toggleSearch(); });

    // 3. --- مدیریت منوی موبایل (بخش جدید) ---
    
    function toggleMobileMenu() {
        mainNav.classList.toggle('is-open');
        // قفل کردن اسکرول بادی وقتی منو بازه
        document.body.style.overflow = mainNav.classList.contains('is-open') ? 'hidden' : '';
    }

    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    closeMenuBtn.addEventListener('click', toggleMobileMenu);

    // بستن منو اگر روی لینک کلیک شد (به جز ابزارها که دراپ داون داره)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            // اگر لینک دارای زیرمنو بود، منو رو نبند (فقط برای موبایل)
            if (window.innerWidth <= 992 && link.parentElement.classList.contains('has-dropdown')) {
                e.preventDefault(); // جلوگیری از رفرش یا پرش
                link.parentElement.classList.toggle('active'); // باز/بسته کردن آکاردئون
            } else {
                // برای لینک های معمولی منو رو ببند
                if (mainNav.classList.contains('is-open')) toggleMobileMenu();
            }
        });
    });

    // بستن منو با کلید ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (searchModal.classList.contains('active')) toggleSearch();
            if (mainNav.classList.contains('is-open')) toggleMobileMenu();
        }
    });
    
    // دیتای جستجوی فرضی (بدون تغییر)
    const data = [
        { title: 'ماشین حساب خورشیدی', cat: 'ابزار', link: '#' },
        { title: 'طراحی رابط کاربری', cat: 'نمونه کار', link: '#' },
        { title: 'تماس با من', cat: 'عمومی', link: '#' },
    ];

    searchInput.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase();
        searchResults.innerHTML = '';
        if (val.length === 0) { searchResults.innerHTML = '<div class="empty-state"><p>تایپ کنید...</p></div>'; return; }
        const filtered = data.filter(i => i.title.includes(val));
        filtered.forEach(item => {
            const d = document.createElement('div');
            d.className = 'result-row';
            d.innerHTML = `<span>${item.title}</span><small>${item.cat}</small>`;
            searchResults.appendChild(d);
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       HERO SECTION LOGIC
       ========================================= */

    const heroSection = document.querySelector('.hero-section');
    const heroVisual = document.querySelector('.hero-visual');
    const heroContent = document.querySelector('.hero-content');

    // --- 1. انیمیشن شمارنده اعداد (Counter Animation) ---
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; // سرعت شمارش

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
    
    // اجرای شمارنده با کمی تاخیر برای اطمینان
    setTimeout(animateCounters, 1000);


    // --- 2. افکت پارالکس سه بعدی (3D Parallax Effect) ---
    if(heroSection && window.innerWidth > 992) {
        heroSection.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageY * 2) / 100;

            if(heroVisual) heroVisual.style.transform = `translateX(${x}px) translateY(${y}px)`;
            if(heroContent) heroContent.style.transform = `translateX(${-x/2}px) translateY(${-y/2}px)`;
        });

        heroSection.addEventListener('mouseleave', () => {
            if(heroVisual) heroVisual.style.transform = `translateX(0) translateY(0)`;
            if(heroContent) heroContent.style.transform = `translateX(0) translateY(0)`;
        });
    }


    // --- 3. بهینه‌سازی پرفورمنس انیمیشن پس‌زمینه (Intersection Observer) ---
    // این بخش باعث می‌شود انیمیشن سنگین پس‌زمینه فقط وقتی اجرا شود که کاربر آن را می‌بیند
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
    /* =========================================
       ARTICLES FILTER LOGIC
       ========================================= */
    const filterBtns = document.querySelectorAll('.filter-chip');
    const articles = document.querySelectorAll('.article-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 1. Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // 2. Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            articles.forEach(article => {
                const category = article.getAttribute('data-category');

                // Logic: Show if 'all' is selected OR category matches
                if (filterValue === 'all' || filterValue === category) {
                    article.classList.remove('hidden');
                    // Add animation class if needed
                    article.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    article.classList.add('hidden');
                }
            });
        });
    });
/* =========================================
   NEW PORTFOLIO FILTER LOGIC
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // حذف کلاس فعال از همه دکمه‌ها
            filterBtns.forEach(b => b.classList.remove('active'));
            // فعال کردن دکمه کلیک شده
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            portfolioCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filterValue === 'all' || filterValue === category) {
                    card.classList.remove('hidden');
                    card.classList.add('show');
                    
                    // حذف انیمیشن بعد از اجرا تا تمیز بماند
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
/* =========================================
   Scroll To Top Button Logic
   ========================================= */
const scrollTopBtn = document.getElementById("scrollTopBtn");

// 1. نمایش/مخفی کردن دکمه هنگام اسکرول
window.addEventListener("scroll", () => {
    // اگر بیشتر از 300 پیکسل اسکرول شد، دکمه نمایش داده شود
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
});

// 2. اسکرول نرم به بالا هنگام کلیک
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // حرکت نرم
    });
});
