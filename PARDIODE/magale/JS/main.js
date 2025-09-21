// اسکریپت اصلی سایت
class SiteManager {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupDarkMode();
        this.setupMobileMenu();
        this.setupScrollTop();
        this.setupDropdowns();
        this.setupProgressTracking();
        this.setupTOC();
        this.setupShareButtons();
    }
    
    // تنظیم حالت دارک/لایت
    setupDarkMode() {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            // بارگذاری تم ذخیره شده
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                document.body.classList.add('dark-theme');
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            }
            
            themeToggle.addEventListener('click', () => {
                document.body.classList.toggle('dark-theme');
                const isDark = document.body.classList.contains('dark-theme');
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
                themeToggle.innerHTML = isDark ? 
                    '<i class="fas fa-moon"></i>' : 
                    '<i class="fas fa-sun"></i>';
            });
        }
    }
    
    // تنظیم منوی موبایل
    setupMobileMenu() {
        const toggleBtn = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (toggleBtn && navMenu) {
            toggleBtn.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                const icon = toggleBtn.querySelector('i');
                if (navMenu.classList.contains('active')) {
                    icon.className = 'fas fa-times';
                } else {
                    icon.className = 'fas fa-bars';
                }
            });
        }
    }
    
    // تنظیم دکمه اسکرول به بالا
    setupScrollTop() {
        const scrollTopBtn = document.querySelector('.scroll-top-btn');
        
        if (scrollTopBtn) {
            // نمایش/پنهان کردن دکمه با اسکرول
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    scrollTopBtn.style.opacity = '1';
                    scrollTopBtn.style.transform = 'translateY(0)';
                } else {
                    scrollTopBtn.style.opacity = '0';
                    scrollTopBtn.style.transform = 'translateY(20px)';
                }
            });
            
            // کلیک برای اسکرول به بالا
            scrollTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }
    
    // تنظیم منوهای کشویی
    setupDropdowns() {
        const dropdowns = document.querySelectorAll('.dropdown');
        
        dropdowns.forEach(dropdown => {
            const link = dropdown.querySelector('a');
            const submenu = dropdown.querySelector('.submenu');
            
            if (link && submenu) {
                // برای موبایل: تاگل با کلیک
                if (window.innerWidth <= 768) {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        submenu.classList.toggle('active');
                    });
                }
            }
        });
    }
    
    // تنظیم پیگیری پیشرفت اسکرول
    setupProgressTracking() {
        const progressBar = document.querySelector('.progress-fill');
        
        if (progressBar) {
            window.addEventListener('scroll', () => {
                const scrollTop = window.pageYOffset;
                const docHeight = document.body.offsetHeight;
                const winHeight = window.innerHeight;
                const scrollPercent = scrollTop / (docHeight - winHeight);
                const scrollPercentRounded = Math.round(scrollPercent * 100);
                
                progressBar.style.width = `${scrollPercentRounded}%`;
            });
        }
    }
    
    // تنظیم فهرست مطالب
    setupTOC() {
        const tocLinks = document.querySelectorAll('.toc-link');
        const sections = document.querySelectorAll('.article-section');
        
        if (tocLinks.length > 0 && sections.length > 0) {
            // به‌روزرسانی فهرست مطالب با اسکرول
            window.addEventListener('scroll', () => {
                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop - 100;
                    if (pageYOffset >= sectionTop) {
                        const title = section.querySelector('h2');
                        if (title) {
                            current = title.textContent.trim();
                        }
                    }
                });
                
                tocLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.textContent.trim() === current) {
                        link.classList.add('active');
                    }
                });
            });
            
            // کلیک برای اسکرول به بخش
            tocLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetText = link.textContent.trim();
                    let targetSection = null;
                    
                    sections.forEach(section => {
                        const title = section.querySelector('h2');
                        if (title && title.textContent.trim() === targetText) {
                            targetSection = section;
                        }
                    });
                    
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
        }
    }
    
    // تنظیم دکمه‌های اشتراک‌گذاری
    setupShareButtons() {
        const shareButtons = document.querySelectorAll('.share-btn');
        
        shareButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const type = e.currentTarget.classList[1];
                this.shareContent(type);
            });
        });
    }
    
    // اشتراک‌گذاری محتوا
    shareContent(type) {
        const url = window.location.href;
        const title = document.title;
        
        switch(type) {
            case 'copy-link':
                navigator.clipboard.writeText(url).then(() => {
                    alert('لینک کپی شد!');
                }).catch(() => {
                    // fallback برای مرورگرهای قدیمی
                    const textArea = document.createElement('textarea');
                    textArea.value = url;
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                    alert('لینک کپی شد!');
                });
                break;
        }
    }
}

// شروع سایت وقتی صفحه بارگذاری شد
document.addEventListener('DOMContentLoaded', () => {
    new SiteManager();
});
