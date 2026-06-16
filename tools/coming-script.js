document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('glassCard');
    const statusText = document.getElementById('status-text');
    
    // متون وضعیتی که به آرامی تغییر می‌کنند
    const statuses = [
        "در حال بارگذاری عکس ها...",
        "صیقل دادن رابط کاربری...",
        "رفع باگ‌های سیستم...",
        "در حال گرد کردن گوشه ها..."
    ];

    // 1. افکت پارالاکس نرم (Liquid Movement)
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 40; // حرکت خیلی نرم
        const y = (window.innerHeight / 2 - e.pageY) / 40;

        // کارت کمی خلاف جهت موس حرکت میکند (حس تعلیق)
        card.style.transform = `rotateY(${x}deg) rotateX(${y}deg) translateZ(20px)`;
    });

    // 2. تغییر متن وضعیت
    let index = 0;
    setInterval(() => {
        statusText.style.opacity = 0; // محو شدن
        setTimeout(() => {
            index = (index + 1) % statuses.length;
            statusText.innerText = statuses[index];
            statusText.style.opacity = 1; // ظاهر شدن
        }, 500);
    }, 4000);
    
    // تنظیم ترنزیشن برای متن
    statusText.style.transition = "opacity 0.5s ease";
});
