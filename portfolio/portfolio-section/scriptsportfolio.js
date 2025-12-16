document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Typewriter Effect ---
    const textElement = document.getElementById('typewriter-text');
    const words = ["طراح سیستم‌های الکترونیک", "برنامه‌نویس Full-Stack", "متخصص اینترنت اشیاء (IoT)"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        if (!textElement) return;
        
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            textElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50; // سرعت پاک کردن بیشتر است
        } else {
            textElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100; // سرعت تایپ معمولی
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typeSpeed = 2000; // مکث بعد از تایپ کامل کلمه
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500; // مکث قبل از شروع کلمه جدید
        }

        setTimeout(type, typeSpeed);
    }
    
    // شروع تایپ
    type();


    // --- 2. 3D Tilt Effect (بدون کتابخانه) ---
    const card = document.getElementById('tilt-card');
    const container = document.querySelector('.smart-hero');

    if (card && container) {
        container.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25; // حساسیت حرکت افقی
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25; // حساسیت حرکت عمودی
            
            // اعمال چرخش به کارت
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        // بازگشت به حالت اولیه وقتی موس خارج شد
        container.addEventListener('mouseleave', () => {
            card.style.transform = `rotateY(0deg) rotateX(0deg)`;
            card.style.transition = "transform 0.5s ease"; // نرم برگردد
        });
        
        // حذف ترنزیشن هنگام حرکت موس برای روانی بیشتر
        container.addEventListener('mouseenter', () => {
            card.style.transition = "none";
        });
    }
});
