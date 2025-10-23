document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const blogGrid = document.getElementById("blog-grid");
  const pagination = document.getElementById("pagination");
  const tags = document.querySelectorAll(".tag");
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");
  const searchModal = document.getElementById("search-modal");
  const closeBtn = document.querySelector(".close");
  const searchResults = document.getElementById("search-results");
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // State Management
  let allArticles = [
    { id: 1, title: "متاورس: آینده دنیای دیجیتال یا رؤیایی دست‌نیافتنی؟", category: "الکترونیک", badge: "popular", image: "/magale/img/metavers-img/intro-metaverse.png", excerpt: "دنیایی را تصور کنید که در فقط با یک عینک وارد دنیای جدیدی میشوید", date: "1403/07/1", readTime: "20 دقیقه", views: "10", author: "علی اشرفی", tags: ["هوش مصنوعی", "تکنولوژی", "متاورس"], customLink: "/magale/magale-section/metavers.html" },
    { id: 2, title: "آشنایی با React Hooks و کاربرد آن در توسعه وب مدرن", category: "برنامه‌نویسی", badge: "popular", image: "https://picsum.photos/400/250?random=2", excerpt: "آموزش کامل React Hooks و مزایای آن نسبت به کلاس‌های سنتی در توسعه وب مدرن", date: "1403/04/28", readTime: "12 دقیقه", views: "2.5K", author: "برنامه‌نویس", tags: ["React", "Hooks", "Frontend"], customLink: "https://example.com/article2" },
    { id: 3, title: "روش‌های بهینه‌سازی عملکرد سلول‌های خورشیدی", category: "برق خورشیدی", badge: "new", image: "https://picsum.photos/400/250?random=3", excerpt: "روش‌های بهینه‌سازی عملکرد سلول‌های خورشیدی و افزایش بازدهی سیستم‌های فتوولتائیک", date: "1403/04/12", readTime: "15 دقیقه", views: "1.8K", author: "مهندس انرژی", tags: ["سلول خورشیدی", "MPPT", "بهینه‌سازی"], customLink: "https://example.com/article3" },
    { id: 4, title: "مدارهای تقویت‌کننده عملیاتی", category: "الکترونیک", badge: "", image: "https://picsum.photos/400/250?random=4", excerpt: "تحلیل و طراحی مدارهای تقویت‌کننده عملیاتی در الکترونیک آنالوگ", date: "1403/04/28", readTime: "12 دقیقه", views: "2.5K", author: "مهندس الکترونیک", tags: ["Op-Amp", "آنالوگ", "تقویت‌کننده"], customLink: "https://example.com/article4" },
    { id: 5, title: "Vue.js Composition API", category: "برنامه‌نویسی", badge: "new", image: "https://picsum.photos/400/250?random=5", excerpt: "آشنایی با Composition API در Vue.js و مزایای آن نسبت به Options API", date: "1403/04/12", readTime: "10 دقیقه", views: "1.3K", author: "برنامه‌نویس", tags: ["Vue", "Composition API", "JavaScript"], customLink: "https://example.com/article5" },
    { id: 6, title: "سیستم‌های فتوولتائیک برای کاربردهای خانگی", category: "برق خورشیدی", badge: "popular", image: "https://picsum.photos/400/250?random=6", excerpt: "طراحی و پیاده‌سازی سیستم‌های فتوولتائیک برای کاربردهای خانگی", date: "1403/03/05", readTime: "18 دقیقه", views: "2.2K", author: "مهندس انرژی", tags: ["فتوولتائیک", "خانگی", "نصب"], customLink: "https://example.com/article6" },
    { id: 7, title: "طراحی مدارهای مجتمع", category: "الکترونیک", badge: "popular", image: "https://picsum.photos/400/250?random=7", excerpt: "آموزش طراحی مدارهای مجتمع با استفاده از نرم‌افزارهای حرفه‌ای", date: "1403/03/20", readTime: "15 دقیقه", views: "1.8K", author: "مهندس الکترونیک", tags: ["IC", "طراحی", "EDA"], customLink: "https://example.com/article7" },
    { id: 8, title: "برنامه‌نویسی با Python برای مهندسان الکترونیک", category: "برنامه‌نویسی", badge: "", image: "https://picsum.photos/400/250?random=8", excerpt: "آموزش برنامه‌نویسی با Python برای کاربردهای الکترونیک و اتوماسیون", date: "1403/02/15", readTime: "20 دقیقه", views: "3.1K", author: "برنامه‌نویس", tags: ["Python", "اتوماسیون", "مهندسی"], customLink: "https://example.com/article8" },
    { id: 9, title: "مدیریت انرژی در سیستم‌های هیبریدی خورشیدی", category: "برق خورشیدی", badge: "", image: "https://picsum.photos/400/250?random=9", excerpt: "آموزش مدیریت انرژی در سیستم‌های هیبریدی خورشیدی با باتری و دیزل ژنراتور", date: "1403/01/20", readTime: "22 دقیقه", views: "1.5K", author: "مهندس انرژی", tags: ["هیبریدی", "مدیریت انرژی", "باتری"], customLink: "https://example.com/article9" },
    { id: 10, title: "تحلیل مدارهای AC با استفاده از نرم‌افزارهای شبیه‌سازی", category: "الکترونیک", badge: "new", image: "https://picsum.photos/400/250?random=10", excerpt: "آموزش تحلیل مدارهای AC با استفاده از نرم‌افزارهای شبیه‌سازی پیشرفته", date: "1403/06/01", readTime: "14 دقیقه", views: "900", author: "مهندس الکترونیک", tags: ["AC", "شبیه‌سازی", "تحلیل"], customLink: "https://example.com/article10" },
    { id: 11, title: "React Native برای توسعه اپلیکیشن‌های موبایل", category: "برنامه‌نویسی", badge: "new", image: "https://picsum.photos/400/250?random=11", excerpt: "آموزش توسعه اپلیکیشن‌های موبایل با React Native برای اندروید و iOS", date: "1403/05/25", readTime: "16 دقیقه", views: "2.8K", author: "برنامه‌نویس", tags: ["React Native", "موبایل", "Cross-platform"], customLink: "https://example.com/article11" },
    { id: 12, title: "نصب و راه‌اندازی پنل‌های خورشیدی", category: "برق خورشیدی", badge: "new", image: "https://picsum.photos/400/250?random=12", excerpt: "راهنمای کامل نصب و راه‌اندازی پنل‌های خورشیدی برای کاربردهای خانگی", date: "1403/05/18", readTime: "25 دقیقه", views: "3.5K", author: "مهندس انرژی", tags: ["نصب", "راه‌اندازی", "پنل خورشیدی"], customLink: "https://example.com/article12" },
    { id: 13, title: "آموزش طراحی PCB با نرم‌افزار Altium Designer", category: "الکترونیک", badge: "popular", image: "https://picsum.photos/400/250?random=13", excerpt: "آموزش جامع طراحی مدارهای چاپی با استفاده از نرم‌افزار حرفه‌ای Altium Designer", date: "1403/05/10", readTime: "20 دقیقه", views: "2.1K", author: "مهندس الکترونیک", tags: ["PCB", "Altium", "طراحی"], customLink: "https://example.com/article13" },
    { id: 14, title: "الگوریتم‌های یادگیری ماشین در پردازش سیگنال", category: "برنامه‌نویسی", badge: "", image: "https://picsum.photos/400/250?random=14", excerpt: "کاربرد الگوریتم‌های یادگیری ماشین در تحلیل و پردازش سیگنال‌های الکترونیکی", date: "1403/04/22", readTime: "18 دقیقه", views: "1.9K", author: "برنامه‌نویس", tags: ["ML", "سیگنال", "DSP"], customLink: "https://example.com/article14" },
    { id: 15, title: "سیستم‌های ذخیره‌سازی انرژی با باتری لیتیوم", category: "برق خورشیدی", badge: "new", image: "https://picsum.photos/400/250?random=15", excerpt: "بررسی انواع باتری‌های لیتیوم و کاربرد آنها در سیستم‌های ذخیره‌سازی انرژی خورشیدی", date: "1403/04/05", readTime: "22 دقیقه", views: "2.7K", author: "مهندس انرژی", tags: ["باتری", "لیتیوم", "ذخیره‌سازی"], customLink: "https://example.com/article15" },
    { id: 16, title: "تحلیل مدارهای دیجیتال با استفاده از VHDL", category: "الکترونیک", badge: "", image: "https://picsum.photos/400/250?random=16", excerpt: "آموزش زبان VHDL برای طراحی و تحلیل مدارهای دیجیتال و FPGA", date: "1403/03/28", readTime: "16 دقیقه", views: "1.6K", author: "مهندس الکترونیک", tags: ["VHDL", "FPGA", "دیجیتال"], customLink: "https://example.com/article16" }
  ];

  // Configuration
  const articlesPerPage = 9;
  let currentPage = 1;
  let currentCategory = "all";
  let currentSearchQuery = "";
  let isLightTheme = true;

  // Utility Functions
  function getFilteredArticles() {
    let filtered = allArticles;
    
    // Filter by category
    if (currentCategory !== "all") {
      filtered = filtered.filter(article => article.category === currentCategory);
    }
    
    // Filter by search query
    if (currentSearchQuery) {
      const query = currentSearchQuery.toLowerCase();
      filtered = filtered.filter(article => 
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.tags.some(tag => tag.toLowerCase().includes(query)) ||
        article.author.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }

  function formatViews(views) {
    if (typeof views === 'number') {
      if (views >= 1000) {
        return (views / 1000).toFixed(1) + 'K';
      }
      return views.toString();
    }
    return views;
  }

  function getCategoryClass(category) {
    switch(category) {
      case 'الکترونیک': return 'electronic';
      case 'برنامه‌نویسی': return 'programming';
      case 'برق خورشیدی': return 'solar';
      default: return '';
    }
  }

  // Render Functions
  function renderArticles() {
    const filtered = getFilteredArticles();
    const start = (currentPage - 1) * articlesPerPage;
    const end = start + articlesPerPage;
    const articlesToShow = filtered.slice(start, end);

    blogGrid.innerHTML = articlesToShow.map(article => `
      <article class="blog-card" data-id="${article.id}">
        <div class="card-image">
          <img src="${article.image}" alt="${article.title}" loading="lazy">
          <span class="card-category tag ${getCategoryClass(article.category)}">
            ${article.category}
          </span>
          ${article.badge ? `<div class="card-overlay"><span class="badge ${article.badge}">${article.badge === 'new' ? 'جدید' : 'پربازدید'}</span></div>` : ''}
        </div>
        <div class="card-content">
          <h2 class="card-title">${article.title}</h2>
          <p class="card-excerpt">${article.excerpt}</p>
          <div class="card-meta">
            <span class="meta-item"><i class="far fa-user"></i> ${article.author}</span>
            <span class="meta-item"><i class="far fa-calendar"></i> ${article.date}</span>
            <span class="meta-item"><i class="far fa-clock"></i> ${article.readTime}</span>
            <span class="meta-item"><i class="far fa-eye"></i> ${formatViews(article.views)}</span>
          </div>
          <div class="article-tags">
            ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
          <!-- ✅ فقط customLink رو نمایش بده -->
          ${article.customLink ? `
            <a href="${article.customLink}" class="read-more-link" ${article.customLink.startsWith('http') ? 'target="_blank"' : ''}>ادامه مطلب <i class="fas fa-arrow-left"></i></a>
          ` : ''}
        </div>
      </article>
    `).join('');

    // ❌ event listener کارت کامل حذف شد
  }

  function renderPagination() {
    const filtered = getFilteredArticles();
    const totalPages = Math.ceil(filtered.length / articlesPerPage);

    pagination.innerHTML = '';
    
    if (totalPages <= 1) return;

    // Previous button
    const prevBtn = document.createElement("div");
    prevBtn.className = `pagination-btn ${currentPage === 1 ? 'disabled' : ''}`;
    prevBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    prevBtn.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        renderArticles();
        renderPagination();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
    pagination.appendChild(prevBtn);

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("div");
      btn.className = `pagination-btn ${i === currentPage ? 'active' : ''}`;
      btn.textContent = i;
      btn.addEventListener("click", () => {
        currentPage = i;
        renderArticles();
        renderPagination();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      pagination.appendChild(btn);
    }

    // Next button
    const nextBtn = document.createElement("div");
    nextBtn.className = `pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`;
    nextBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    nextBtn.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        renderArticles();
        renderPagination();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
    pagination.appendChild(nextBtn);
  }

  function displaySearchResults(results) {
    if (results.length === 0) {
      searchResults.innerHTML = '<p style="text-align: center; padding: 2rem; color: var(--light-text-secondary);">مقاله‌ای یافت نشد.</p>';
      return;
    }

    searchResults.innerHTML = results.map(article => `
      <div class="search-result" data-id="${article.id}">
        <div style="display: flex; gap: 1rem; align-items: flex-start;">
          <img src="${article.image}" alt="${article.title}" style="width: 80px; height: 60px; object-fit: cover; border-radius: 8px;">
          <div>
            <h4 style="margin: 0 0 0.5rem 0; font-size: 1.1rem;">${article.title}</h4>
            <p style="margin: 0; font-size: 0.9rem; color: var(--light-text-secondary);">${article.excerpt.substring(0, 100)}...</p>
            <span class="tag ${getCategoryClass(article.category)}" style="margin-top: 0.5rem; display: inline-block;">${article.category}</span>
          </div>
        </div>
        <hr style="border: none; border-top: 1px solid var(--light-border); margin: 1rem 0;">
      </div>
    `).join('');

    // Add click event to search results
    document.querySelectorAll('.search-result').forEach(result => {
      result.addEventListener('click', () => {
        const articleId = result.dataset.id;
        window.location.href = `article.html?id=${articleId}`;
      });
    });
  }

  // Event Listeners
  tags.forEach(tag => {
    tag.addEventListener("click", () => {
      tags.forEach(t => t.classList.remove("active"));
      tag.classList.add("active");
      currentCategory = tag.dataset.category;
      currentSearchQuery = "";
      currentPage = 1;
      renderArticles();
      renderPagination();
    });
  });

  // Search functionality
  searchBtn.addEventListener('click', () => {
    searchModal.style.display = 'block';
    searchInput.focus();
  });

  closeBtn.addEventListener('click', () => {
    searchModal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === searchModal) {
      searchModal.style.display = 'none';
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchModal.style.display === 'block') {
      searchModal.style.display = 'none';
    }
  });

  searchInput.addEventListener('input', () => {
    currentSearchQuery = searchInput.value.trim();
    if (currentSearchQuery) {
      const filteredArticles = getFilteredArticles();
      displaySearchResults(filteredArticles);
    } else {
      searchResults.innerHTML = '';
    }
  });

  // Theme Toggle
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

  // Initial render
  renderArticles();
  renderPagination();
});

// Utility function to get article by ID (for article page)
function getArticleById(id) {
  return allArticles.find(article => article.id == id);
}

// Utility function to add new article
function addNewArticle(articleData) {
  const newId = Math.max(...allArticles.map(a => a.id)) + 1;
  const newArticle = {
    id: newId,
    title: articleData.title || "عنوان مقاله جدید",
    category: articleData.category || "الکترونیک",
    badge: articleData.badge || "",
    image: articleData.image || "https://picsum.photos/400/250?random=" + newId,
    excerpt: articleData.excerpt || "توضیحات کوتاه مقاله...",
    date: articleData.date || new Date().toLocaleDateString('fa-IR'),
    readTime: articleData.readTime || "10 دقیقه",
    views: articleData.views || "0",
    author: articleData.author || "نویسنده",
    tags: articleData.tags || [],
    customLink: articleData.customLink || ""
  };
  
  allArticles.unshift(newArticle); // Add to beginning
  return newArticle;
}

// Utility function to update article views
function updateArticleViews(articleId) {
  const article = allArticles.find(a => a.id == articleId);
  if (article) {
    const currentViews = typeof article.views === 'string' ? 
      parseFloat(article.views.replace('K', '')) * (article.views.includes('K') ? 1000 : 1) : 
      article.views;
    article.views = currentViews + 1;
  }
}
