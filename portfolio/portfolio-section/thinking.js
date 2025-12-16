// ==========================================
//  Smart Projects Engine
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. دیتابیس پروژه‌ها (اینجا می‌توانید پروژه‌های واقعی خود را وارد کنید)
    const projectsData = [
        {
            id: 1,
            title: "طراحی UPS هوشمند",
            category: "الکترونیک",
            image: "/portfolio/portfolio/NemooneIMG/1758720404849.jpg", // مسیر تصویر
            desc: "منبع تغذیه اضطراری برای مودم و پایانه‌های فروش با سوئیچینگ اتوماتیک",
            tags: ["UPS"],
            link: "/portfolio/portfolio/PowerElectronics.html"
        }
        // ,
        // {
        //     id: 2,
        //     title: "اپلیکیشن مدیریت وظایف",
        //     category: "برنامه‌نویسی",
        //     image: "https://vgdl.ir/wp-content/uploads/2025/02/WorldBox_God_Simulator.jpg",
        //     desc: "توسعه اپلیکیشن React با قابلیت Drag & Drop و همگام‌سازی ابری.",
        //     tags: ["React", "Node.js", "MongoDB"],
        //     link: "#"
        // },
        // {
        //     id: 3,
        //     title: "طراحی PCB کنترلر صنعتی",
        //     category: "الکترونیک",
        //     image: "https://vgdl.ir/wp-content/uploads/2025/02/WorldBox_God_Simulator.jpg",
        //     desc: "طراحی برد ۴ لایه با استاندارد EMC برای محیط‌های پرنویز.",
        //     tags: ["Altium", "PCB", "Hardware"],
        //     link: "#"
        // },
        // {
        //     id: 4,
        //     title: "وبسایت شخصی سایبرپانک",
        //     category: "برنامه‌نویسی",
        //     image: "https://vgdl.ir/wp-content/uploads/2025/02/WorldBox_God_Simulator.jpg",
        //     desc: "طراحی رابط کاربری مدرن با افکت‌های Glassmorphism.",
        //     tags: ["HTML/CSS", "JS", "UI/UX"],
        //     link: "#"
        // },
        // {
        //     id: 5,
        //     title: "اینورتر سینوسی خالص",
        //     category: "برق خورشیدی",
        //     image: "https://vgdl.ir/wp-content/uploads/2025/02/WorldBox_God_Simulator.jpg",
        //     desc: "ساخت اینورتر ۱۰۰۰ وات با بازدهی ۹۵٪ برای مصارف خانگی.",
        //     tags: ["Power", "Circuit", "Solar"],
        //     link: "#"
        // },
        // {
        //     id: 6,
        //     title: "ربات مسیر یاب پیشرفته",
        //     category: "الکترونیک",
        //     image: "https://vgdl.ir/wp-content/uploads/2025/02/WorldBox_God_Simulator.jpg",
        //     desc: "استفاده از الگوریتم PID برای کنترل حرکت دقیق ربات.",
        //     tags: ["C++", "AVR", "Robotics"],
        //     link: "#"
        // },
        // {
        //     id: 7,
        //     title: "پنل ادمین داشبورد",
        //     category: "برنامه‌نویسی",
        //     image: "https://vgdl.ir/wp-content/uploads/2025/02/WorldBox_God_Simulator.jpg",
        //     desc: "داشبورد مدیریتی با نمودارهای پویا و تحلیل داده.",
        //     tags: ["Vue.js", "Chart.js"],
        //     link: "#"
        // }
    ];

    // 2. تنظیمات اولیه
    const itemsPerPage = 6; // تعداد پروژه در هر صفحه
    let currentPage = 1;
    let currentCategory = 'all';

    // انتخابگرها
    const gridContainer = document.getElementById('projects-grid');
    const paginationContainer = document.getElementById('projects-pagination');
    const filterButtons = document.querySelectorAll('.filter-tag');

    // 3. تابع اصلی رندر کردن پروژه‌ها
    function renderProjects() {
        // الف: فیلتر کردن
        const filteredProjects = currentCategory === 'all' 
            ? projectsData 
            : projectsData.filter(p => p.category === currentCategory);

        // ب: صفحه‌بندی (اسلایس کردن آرایه)
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const projectsToShow = filteredProjects.slice(startIndex, endIndex);

        // ج: پاک کردن گرید و نمایش لودینگ یا خالی بودن
        gridContainer.innerHTML = '';
        
        if (projectsToShow.length === 0) {
            gridContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-search"></i>
                    <p>پروژه‌ای در این دسته‌بندی یافت نشد.</p>
                </div>`;
            renderPagination(0);
            return;
        }

        // د: تولید HTML کارت‌ها
        projectsToShow.forEach((project, index) => {
            const card = document.createElement('div');
            card.className = 'project-card';
            // افزودن انیمیشن با تاخیر (Staggered Animation)
            card.style.animationDelay = `${index * 100}ms`;

            card.innerHTML = `
                <div class="card-image-wrapper">
                    <img src="${project.image}" alt="${project.title}" loading="lazy">
                    <div class="card-overlay">
                        <a href="${project.link}" class="btn-view">
                            <i class="fas fa-external-link-alt"></i> مشاهده
                        </a>
                    </div>
                </div>
                <div class="card-content">
                    <div class="card-meta">
                        <span class="category-badge">${project.category}</span>
                    </div>
                    <h3 class="card-title">${project.title}</h3>
                    <p class="card-desc">${project.desc}</p>
                    <div class="card-tags">
                        ${project.tags.map(tag => `<span>#${tag}</span>`).join('')}
                    </div>
                </div>
            `;
            gridContainer.appendChild(card);
        });

        // ه: به‌روزرسانی صفحه‌بندی
        renderPagination(Math.ceil(filteredProjects.length / itemsPerPage));
    }

    // 4. تابع رندر کردن دکمه‌های صفحه‌بندی
    function renderPagination(totalPages) {
        paginationContainer.innerHTML = '';
        
        if (totalPages <= 1) return;

        // دکمه قبلی
        const prevBtn = document.createElement('button');
        prevBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        prevBtn.disabled = currentPage === 1;
        prevBtn.onclick = () => { if(currentPage > 1) { currentPage--; renderProjects(); scrollIfNeeded(); }};
        paginationContainer.appendChild(prevBtn);

        // دکمه‌های شماره
        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.textContent = i;
            if (i === currentPage) btn.classList.add('active');
            btn.onclick = () => { currentPage = i; renderProjects(); scrollIfNeeded(); };
            paginationContainer.appendChild(btn);
        }

        // دکمه بعدی
        const nextBtn = document.createElement('button');
        nextBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.onclick = () => { if(currentPage < totalPages) { currentPage++; renderProjects(); scrollIfNeeded(); }};
        paginationContainer.appendChild(nextBtn);
    }

    // 5. مدیریت رویداد کلیک روی فیلترها
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // تغییر کلاس active
            document.querySelector('.filter-tag.active').classList.remove('active');
            btn.classList.add('active');

            // اعمال منطق
            currentCategory = btn.getAttribute('data-category');
            currentPage = 1; // ریست به صفحه اول
            renderProjects();
        });
    });

    // اسکرول نرم به بالا هنگام تغییر صفحه
    function scrollIfNeeded() {
        const section = document.getElementById('projects-section');
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // اجرای اولیه
    renderProjects();
});
function scrollToProjects() {
    // پیدا کردن المان با کلاس مورد نظر
    const targetSection = document.querySelector('.projects-filter-section');
    
    if (targetSection) {
        // اسکرول نرم به آن بخش
        targetSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start' // شروع بخش در بالای صفحه قرار بگیرد
        });
    } else {
        console.warn('بخش مورد نظر (.projects-filter-section) در صفحه پیدا نشد!');
    }
}
