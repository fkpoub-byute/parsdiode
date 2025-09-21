// portfolio.js - نسخه قطعی و ساده‌شده

// انتظار برای بارگذاری کامل صفحه
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio script loaded');
    
    // 1. همگام‌سازی تم
    function syncTheme() {
        const body = document.body;
        const portfolioMain = document.querySelector('.portfolio-main');
        
        if (portfolioMain) {
            if (body.classList.contains('dark-theme')) {
                portfolioMain.classList.add('dark-theme');
            } else {
                portfolioMain.classList.remove('dark-theme');
            }
        }
    }
    
    // اجرای اولیه همگام‌سازی
    syncTheme();
    
    // گوش دادن به تغییرات تم
    const body = document.body;
    const observer = new MutationObserver(syncTheme);
    observer.observe(body, {
        attributes: true,
        attributeFilter: ['class']
    });
    
    // 2. انیمیشن شمارنده
    const counters = document.querySelectorAll('.portfolio-stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        if (target) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        let current = 0;
                        const duration = 2000;
                        const increment = target / (duration / 16);
                        
                        const updateCounter = () => {
                            current += increment;
                            if (current < target) {
                                counter.textContent = Math.ceil(current);
                                requestAnimationFrame(updateCounter);
                            } else {
                                counter.textContent = target.toLocaleString('fa-IR');
                                observer.unobserve(counter);
                            }
                        };
                        
                        updateCounter();
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(counter);
        }
    });
    
    // 3. سیستم فیلتر
    const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
    const cards = document.querySelectorAll('.portfolio-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // فعال کردن دکمه
            filterBtns.forEach(b => b.classList.remove('portfolio-active'));
            this.classList.add('portfolio-active');
            
            const filter = this.getAttribute('data-filter');
            
            cards.forEach(card => {
                if (filter === 'all' || card.classList.contains(filter)) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // 4. انیمیشن کارت‌ها
    setTimeout(() => {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 100);
    
    // 5. افکت هاور تصاویر
    const images = document.querySelectorAll('.portfolio-card-image');
    images.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // 6. دکمه‌های تماس
    const contactBtns = document.querySelectorAll('.portfolio-contact-btn');
    contactBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const action = this.getAttribute('data-action');
            
            switch(action) {
                case 'whatsapp':
                    window.open('https://wa.me/989123456789', '_blank');
                    break;
                case 'email':
                    window.location.href = 'mailto:info@example.com';
                    break;
                case 'phone':
                    window.location.href = 'tel:+989123456789';
                    break;
            }
        });
    });
    
    console.log('All portfolio functions initialized');
});
