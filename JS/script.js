// script.js - نسخه بهبود یافته و پخته‌شده

// === DOM Elements ===
const themeToggle = document.getElementById('theme-toggle');
const searchBtn = document.getElementById('search-btn');
const modal = document.getElementById('search-modal');
const closeBtn = document.querySelector('.close');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const dropdowns = document.querySelectorAll('.dropdown');
const body = document.body;

// === Theme Management ===
let isLightTheme = true;

function setThemeBasedOnTime() {
    if (!body) return;
    
    const hour = new Date().getHours();
    const isNight = hour >= 18 || hour <= 6;

    if (isNight && !body.classList.contains('dark-theme')) {
        body.classList.add('dark-theme');
        if (themeToggle) {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
        isLightTheme = false;
    } else if (!isNight && body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        if (themeToggle) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
        isLightTheme = true;
    }
}

// اجرای اولیه و به‌روزرسانی دوره‌ای
setThemeBasedOnTime();
setInterval(setThemeBasedOnTime, 600000);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        isLightTheme = !isLightTheme;
        if (isLightTheme) {
            body.classList.remove('dark-theme');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            body.classList.add('dark-theme');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
}

// === Search Modal System ===
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        if (modal) {
            modal.style.display = 'block';
            if (searchInput) {
                searchInput.focus();
                // پاک کردن مقدار input و نتایج قبلی
                searchInput.value = '';
                if (searchResults) {
                    searchResults.innerHTML = '';
                }
            }
        }
    });
}

if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        // پاک کردن نتایج هنگام بستن مدال
        if (searchResults) {
            searchResults.innerHTML = '';
        }
        if (searchInput) {
            searchInput.value = '';
        }
    });
}

if (modal) {
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            // پاک کردن نتایج هنگام بستن مدال
            if (searchResults) {
                searchResults.innerHTML = '';
            }
            if (searchInput) {
                searchInput.value = '';
            }
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.style.display === 'block') {
        modal.style.display = 'none';
        // پاک کردن نتایج هنگام بستن مدال
        if (searchResults) {
            searchResults.innerHTML = '';
        }
        if (searchInput) {
            searchInput.value = '';
        }
    }
});

// === Advanced Search System ===
// داده‌های مقالات واقعی
const articles = [
    {
        id: 1,
        title: "متاورس: آینده دنیای دیجیتال یا رؤیایی دست‌نیافتنی؟",
        category: "الکترونیک",
        badge: "popular",
        excerpt: "دنیایی را تصور کنید که در فقط با یک عینک وارد دنیای جدیدی میشوید",
        date: "1403/07/1",
        readTime: "20 دقیقه",
        views: "10",
        author: "علی اشرفی",
        tags: ["هوش مصنوعی", "تکنولوژی", "متاورس"],
        customLink: "/magale/magale-section/metavers.html"
    },
    {
        id: 2,
        title: "آشنایی با React Hooks و کاربرد آن در توسعه وب مدرن",
        category: "برنامه‌نویسی",
        badge: "popular",
        excerpt: "آموزش کامل React Hooks و مزایای آن نسبت به کلاس‌های سنتی در توسعه وب مدرن",
        date: "1403/04/28",
        readTime: "12 دقیقه",
        views: "2.5K",
        author: "برنامه‌نویس",
        tags: ["React", "Hooks", "Frontend"],
        customLink: "https://example.com/article2"
    },
    {
        id: 3,
        title: "روش‌های بهینه‌سازی عملکرد سلول‌های خورشیدی",
        category: "برق خورشیدی",
        badge: "new",
        excerpt: "روش‌های بهینه‌سازی عملکرد سلول‌های خورشیدی و افزایش بازدهی سیستم‌های فتوولتائیک",
        date: "1403/04/12",
        readTime: "15 دقیقه",
        views: "1.8K",
        author: "مهندس انرژی",
        tags: ["سلول خورشیدی", "MPPT", "بهینه‌سازی"],
        customLink: "https://example.com/article3"
    },
    {
        id: 4,
        title: "مدارهای تقویت‌کننده عملیاتی",
        category: "الکترونیک",
        badge: "",
        excerpt: "تحلیل و طراحی مدارهای تقویت‌کننده عملیاتی در الکترونیک آنالوگ",
        date: "1403/04/28",
        readTime: "12 دقیقه",
        views: "2.5K",
        author: "مهندس الکترونیک",
        tags: ["Op-Amp", "آنالوگ", "تقویت‌کننده"],
        customLink: "https://example.com/article4"
    },
    {
        id: 5,
        title: "Vue.js Composition API",
        category: "برنامه‌نویسی",
        badge: "new",
        excerpt: "آشنایی با Composition API در Vue.js و مزایای آن نسبت به Options API",
        date: "1403/04/12",
        readTime: "10 دقیقه",
        views: "1.3K",
        author: "برنامه‌نویس",
        tags: ["Vue", "Composition API", "JavaScript"],
        customLink: "https://example.com/article5"
    },
    {
        id: 6,
        title: "سیستم‌های فتوولتائیک برای کاربردهای خانگی",
        category: "برق خورشیدی",
        badge: "popular",
        excerpt: "طراحی و پیاده‌سازی سیستم‌های فتوولتائیک برای کاربردهای خانگی",
        date: "1403/03/05",
        readTime: "18 دقیقه",
        views: "2.2K",
        author: "مهندس انرژی",
        tags: ["فتوولتائیک", "خانگی", "نصب"],
        customLink: "https://example.com/article6"
    },
    {
        id: 7,
        title: "طراحی مدارهای مجتمع",
        category: "الکترونیک",
        badge: "popular",
        excerpt: "آموزش طراحی مدارهای مجتمع با استفاده از نرم‌افزارهای حرفه‌ای",
        date: "1403/03/20",
        readTime: "15 دقیقه",
        views: "1.8K",
        author: "مهندس الکترونیک",
        tags: ["IC", "طراحی", "EDA"],
        customLink: "https://example.com/article7"
    },
    {
        id: 8,
        title: "برنامه‌نویسی با Python برای مهندسان الکترونیک",
        category: "برنامه‌نویسی",
        badge: "",
        excerpt: "آموزش برنامه‌نویسی با Python برای کاربردهای الکترونیک و اتوماسیون",
        date: "1403/02/15",
        readTime: "20 دقیقه",
        views: "3.1K",
        author: "برنامه‌نویس",
        tags: ["Python", "اتوماسیون", "مهندسی"],
        customLink: "https://example.com/article8"
    },
    {
        id: 9,
        title: "مدیریت انرژی در سیستم‌های هیبریدی خورشیدی",
        category: "برق خورشیدی",
        badge: "",
        excerpt: "آموزش مدیریت انرژی در سیستم‌های هیبریدی خورشیدی با باتری و دیزل ژنراتور",
        date: "1403/01/20",
        readTime: "22 دقیقه",
        views: "1.5K",
        author: "مهندس انرژی",
        tags: ["هیبریدی", "مدیریت انرژی", "باتری"],
        customLink: "https://example.com/article9"
    },
    {
        id: 10,
        title: "تحلیل مدارهای AC با استفاده از نرم‌افزارهای شبیه‌سازی",
        category: "الکترونیک",
        badge: "new",
        excerpt: "آموزش تحلیل مدارهای AC با استفاده از نرم‌افزارهای شبیه‌سازی پیشرفته",
        date: "1403/06/01",
        readTime: "14 دقیقه",
        views: "900",
        author: "مهندس الکترونیک",
        tags: ["AC", "شبیه‌سازی", "تحلیل"],
        customLink: "https://example.com/article10"
    },
    {
        id: 11,
        title: "React Native برای توسعه اپلیکیشن‌های موبایل",
        category: "برنامه‌نویسی",
        badge: "new",
        excerpt: "آموزش توسعه اپلیکیشن‌های موبایل با React Native برای اندروید و iOS",
        date: "1403/05/25",
        readTime: "16 دقیقه",
        views: "2.8K",
        author: "برنامه‌نویس",
        tags: ["React Native", "موبایل", "Cross-platform"],
        customLink: "https://example.com/article11"
    },
    {
        id: 12,
        title: "نصب و راه‌اندازی پنل‌های خورشیدی",
        category: "برق خورشیدی",
        badge: "new",
        excerpt: "راهنمای کامل نصب و راه‌اندازی پنل‌های خورشیدی برای کاربردهای خانگی",
        date: "1403/05/18",
        readTime: "25 دقیقه",
        views: "3.5K",
        author: "مهندس انرژی",
        tags: ["نصب", "راه‌اندازی", "پنل خورشیدی"],
        customLink: "https://example.com/article12"
    },
    {
        id: 13,
        title: "آموزش طراحی PCB با نرم‌افزار Altium Designer",
        category: "الکترونیک",
        badge: "popular",
        excerpt: "آموزش جامع طراحی مدارهای چاپی با استفاده از نرم‌افزار حرفه‌ای Altium Designer",
        date: "1403/05/10",
        readTime: "20 دقیقه",
        views: "2.1K",
        author: "مهندس الکترونیک",
        tags: ["PCB", "Altium", "طراحی"],
        customLink: "https://example.com/article13"
    },
    {
        id: 14,
        title: "الگوریتم‌های یادگیری ماشین در پردازش سیگنال",
        category: "برنامه‌نویسی",
        badge: "",
        excerpt: "کاربرد الگوریتم‌های یادگیری ماشین در تحلیل و پردازش سیگنال‌های الکترونیکی",
        date: "1403/04/22",
        readTime: "18 دقیقه",
        views: "1.9K",
        author: "برنامه‌نویس",
        tags: ["ML", "سیگنال", "DSP"],
        customLink: "https://example.com/article14"
    },
    {
        id: 15,
        title: "سیستم‌های ذخیره‌سازی انرژی با باتری لیتیوم",
        category: "برق خورشیدی",
        badge: "new",
        excerpt: "بررسی انواع باتری‌های لیتیوم و کاربرد آنها در سیستم‌های ذخیره‌سازی انرژی خورشیدی",
        date: "1403/04/05",
        readTime: "22 دقیقه",
        views: "2.7K",
        author: "مهندس انرژی",
        tags: ["باتری", "لیتیوم", "ذخیره‌سازی"],
        customLink: "https://example.com/article15"
    },
    {
        id: 16,
        title: "تحلیل مدارهای دیجیتال با استفاده از VHDL",
        category: "الکترونیک",
        badge: "",
        excerpt: "آموزش زبان VHDL برای طراحی و تحلیل مدارهای دیجیتال و FPGA",
        date: "1403/03/28",
        readTime: "16 دقیقه",
        views: "1.6K",
        author: "مهندس الکترونیک",
        tags: ["VHDL", "FPGA", "دیجیتال"],
        customLink: "https://example.com/article16"
    }
];

// Debounce function for search optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Advanced search function
function advancedSearch(query) {
    if (!query || query.length === 0) return [];
    
    const searchTerm = query.toLowerCase().trim();
    return articles.filter(article => 
        article.title.toLowerCase().includes(searchTerm) ||
        article.excerpt.toLowerCase().includes(searchTerm) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
        article.category.toLowerCase().includes(searchTerm) ||
        article.author.toLowerCase().includes(searchTerm)
    );
}

// Function to highlight search terms
function highlightText(text, searchTerm) {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// Function to get category class for styling
function getCategoryClass(category) {
    switch(category) {
        case 'الکترونیک': return 'electronic';
        case 'برنامه‌نویسی': return 'programming';
        case 'برق خورشیدی': return 'solar';
        default: return 'default';
    }
}

// Display search results
function displaySearchResults(results) {
    if (!searchResults) return;
    
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    
    if (results.length === 0) {
        searchResults.innerHTML = '<p style="text-align: center; padding: 1rem; color: var(--light-text-secondary);">مقاله‌ای یافت نشد.</p>';
        return;
    }

    searchResults.innerHTML = results.map(article => `
        <div class="search-result">
            <h4>${highlightText(article.title, searchTerm)}</h4>
            <p>${highlightText(article.excerpt, searchTerm)}</p>
            <div class="search-meta">
                <span class="tag ${getCategoryClass(article.category)}">
                    ${article.category}
                </span>
                <span class="search-date">${article.date}</span>
                <span class="search-read-time">${article.readTime}</span>
                <span class="search-views">${article.views} بازدید</span>
            </div>
            <a href="${article.customLink}" class="search-link">مشاهده مقاله</a>
        </div>
        <hr style="border: none; border-top: 1px solid var(--light-border); margin: 0.5rem 0;">
    `).join('');
}

// Debounced search function
const debouncedSearch = debounce(() => {
    if (!searchInput || !searchResults) return;
    
    const query = searchInput.value;
    if (query.length === 0) {
        searchResults.innerHTML = '';
        return;
    }
    
    const results = advancedSearch(query);
    displaySearchResults(results);
}, 300);

// Add event listener for search input
if (searchInput) {
    searchInput.addEventListener('input', debouncedSearch);
}

// === Mobile Menu System ===
if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileMenuToggle.querySelector('i');
        if (icon) {
            if (navMenu.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        }
    });
}

// Mobile Dropdown Toggle
if (dropdowns.length > 0) {
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        if (link) {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                    const arrow = link.querySelector('.arrow');
                    if (arrow) {
                        arrow.style.transform = dropdown.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
                    }
                }
            });
        }
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && navMenu && navMenu.classList.contains('active')) {
        if (!navMenu.contains(e.target) && mobileMenuToggle && !mobileMenuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            const icon = mobileMenuToggle.querySelector('i');
            if (icon) {
                icon.className = 'fas fa-bars';
            }
        }
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navMenu) {
        navMenu.classList.remove('active');
        const icon = mobileMenuToggle ? mobileMenuToggle.querySelector('i') : null;
        if (icon) {
            icon.className = 'fas fa-bars';
        }
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
            const arrow = dropdown.querySelector('.arrow');
            if (arrow) {
                arrow.style.transform = 'rotate(0deg)';
            }
        });
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// === Portfolio and Articles Filter System ===

// Filter articles function
function filterArticles(category) {
    const articleElements = document.querySelectorAll('.article-card');
    
    if (articleElements.length === 0) return;
    
    articleElements.forEach(article => {
        const articleCategory = article.querySelector('.article-category')?.textContent.trim();
        
        if (category === 'all') {
            article.style.display = 'block';
        } else if (articleCategory === category) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
}

// Filter portfolio function with animation
function filterPortfolio(category) {
    const portfolioElements = document.querySelectorAll('.portfolio-card');
    
    if (portfolioElements.length === 0) return;
    
    // اضافه کردن افکت انیمیشن
    portfolioElements.forEach(portfolio => {
        const portfolioCategory = portfolio.querySelector('.portfolio-category')?.textContent.trim();
        
        // اضافه کردن کلاس انیمیشن
        portfolio.style.opacity = '0';
        portfolio.style.transform = 'scale(0.95)';
        portfolio.style.transition = 'all 0.3s ease';
        
        setTimeout(() => {
            if (category === 'all') {
                portfolio.style.display = 'block';
            } else if (portfolioCategory === category) {
                portfolio.style.display = 'block';
            } else {
                portfolio.style.display = 'none';
            }
            
            // بازگرداندن انیمیشن
            if (portfolio.style.display === 'block') {
                setTimeout(() => {
                    portfolio.style.opacity = '1';
                    portfolio.style.transform = 'scale(1)';
                }, 10);
            }
        }, 150);
    });
}

// Add event listeners for filter buttons
document.addEventListener('DOMContentLoaded', () => {
    // Article filters
    const articleFilterBtns = document.querySelectorAll('.category-filters .filter-btn');
    if (articleFilterBtns.length > 0) {
        // Activate "all" button by default
        const allBtn = document.querySelector('.category-filters .filter-btn[data-filter="all"]');
        if (allBtn) {
            allBtn.classList.add('active');
        }
        
        articleFilterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                articleFilterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                const filter = btn.dataset.filter;
                filterArticles(filter);
            });
        });
    }
    
    // Portfolio filters
    const portfolioFilterBtns = document.querySelectorAll('.portfolio-controls .portfolio-filter');
    if (portfolioFilterBtns.length > 0) {
        // Activate "all" button by default
        const allBtn = document.querySelector('.portfolio-controls .portfolio-filter[data-filter="all"]');
        if (allBtn) {
            allBtn.classList.add('active');
        }
        
        portfolioFilterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                portfolioFilterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                const filter = btn.dataset.filter;
                filterPortfolio(filter);
            });
        });
    }
});
