/**
 * =========================================
 * BLOG ARTICLES MODULE
 * Manual Data – RTL – Scalable – Production
 * Author: Ali ✅
 * =========================================
 */

document.addEventListener("DOMContentLoaded", () => {

  /* --------------------------------------------------
   * 1️⃣ CONFIGURATION
   * -------------------------------------------------- */

  const CONFIG = {
    BATCH_SIZE: 6,
    ANIMATION_DELAY: 120,
    DEBUG: false
  };

  /* --------------------------------------------------
   * 2️⃣ DOM CACHE
   * -------------------------------------------------- */

  const DOM = {
    grid: document.getElementById("articlesGrid"),
    loadMoreBtn: document.getElementById("loadMoreBtn")
  };

  if (!DOM.grid || !DOM.loadMoreBtn) {
    console.warn("❌ Blog DOM elements not found");
    return;
  }

  /* --------------------------------------------------
   * 3️⃣ STATE MANAGEMENT
   * -------------------------------------------------- */

  const state = {
    cursor: 0,
    loading: false,
    finished: false
  };

  /* --------------------------------------------------
   * 4️⃣ DATA LAYER – MANUAL ARTICLES ✅
   * فقط این بخش را ویرایش می‌کنی
   * -------------------------------------------------- */

  const ArticleService = {

    fetchArticles() {
      return [
        {
          id: 1,
          title: "متاورس: تکامل اینترنت یا رویایی دست‌نیافتنی؟",
          excerpt:
            " متاورس شبکه‌ای از جهان‌های مجازی سه‌بعدی، پایدار و آنلاین است که از واقعیت مجازی (VR) و واقعیت افزوده (AR) بهره می‌برد. برخلاف اینترنت امروزی که ما فقط بیننده آن هستیم، در متاورس ما بخشی از آن خواهیم بود و می‌توانیم با هویت دیجیتال خود در آن زندگی کنیم.",
          category: "برنامه‌نویسی",
          publishedAt: "1404/09/22",
          image: "https://www.csm.tech/storage/uploads/news/62c6ba5c839351657191004Thumb.jpg",
          url: "/magale/magale-section/metavers.html"
        }
        // ,

        // {
        //   id: 2,
        //   title: "آشنایی کامل با React Hooks و کاربرد آن‌ها",
        //   excerpt:
        //     "React Hooks امکان مدیریت state و lifecycle را بدون class فراهم می‌کنند. در این مقاله با مثال‌های کاربردی آن‌ها آشنا می‌شویم.",
        //   category: "برنامه‌نویسی",
        //   publishedAt: "۱۴۰۳/۱۰/۰۳",
        //   image: "https://vigiato.net/wp-content/uploads/2025/12/Call-of-Duty-Black-Ops-7-2-910x600.jpg",
        //   url: "/articles/react-hooks-guide.html"
        // },

        // {
        //   id: 3,
        //   title: "روش‌های عملی افزایش راندمان پنل‌های خورشیدی",
        //   excerpt:
        //     "در این مقاله روش‌های کاربردی برای افزایش بازدهی سیستم‌های فتوولتائیک و استفاده بهینه از پنل‌های خورشیدی بررسی می‌شود.",
        //   category: "برق خورشیدی",
        //   publishedAt: "۱۴۰۳/۱۰/۱۲",
        //   image: "https://vigiato.net/wp-content/uploads/2025/12/Call-of-Duty-Black-Ops-7-2-910x600.jpg",
        //   url: "/articles/solar-panel-efficiency.html"
        // },

        // {
        //   id: 4,
        //   title: "آشنایی کامل با React Hooks و کاربرد آن‌ها",
        //   excerpt:
        //     "React Hooks امکان مدیریت state و lifecycle را بدون class فراهم می‌کنند. در این مقاله با مثال‌های کاربردی آن‌ها آشنا می‌شویم.",
        //   category: "برنامه‌نویسی",
        //   publishedAt: "۱۴۰۳/۱۰/۰۳",
        //   image: "https://vigiato.net/wp-content/uploads/2025/12/Call-of-Duty-Black-Ops-7-2-910x600.jpg",
        //   url: "/articles/react-hooks-guide.html"
        // },,

        // {
        //   id: 5,
        //   title: "آشنایی کامل با React Hooks و کاربرد آن‌ها",
        //   excerpt:
        //     "React Hooks امکان مدیریت state و lifecycle را بدون class فراهم می‌کنند. در این مقاله با مثال‌های کاربردی آن‌ها آشنا می‌شویم.",
        //   category: "برنامه‌نویسی",
        //   publishedAt: "۱۴۰۳/۱۰/۰۳",
        //   image: "https://vigiato.net/wp-content/uploads/2025/12/Call-of-Duty-Black-Ops-7-2-910x600.jpg",
        //   url: "/articles/react-hooks-guide.html"
        // },,

        // {
        //   id: 6,
        //   title: "آشنایی کامل با React Hooks و کاربرد آن‌ها",
        //   excerpt:
        //     "React Hooks امکان مدیریت state و lifecycle را بدون class فراهم می‌کنند. در این مقاله با مثال‌های کاربردی آن‌ها آشنا می‌شویم.",
        //   category: "برنامه‌نویسی",
        //   publishedAt: "۱۴۰۳/۱۰/۰۳",
        //   image: "https://vigiato.net/wp-content/uploads/2025/12/Call-of-Duty-Black-Ops-7-2-910x600.jpg",
        //   url: "/articles/react-hooks-guide.html"
        // },,

        // {
        //   id: 7,
        //   title: "آشنایی کامل با React Hooks و کاربرد آن‌ها",
        //   excerpt:
        //     "React Hooks امکان مدیریت state و lifecycle را بدون class فراهم می‌کنند. در این مقاله با مثال‌های کاربردی آن‌ها آشنا می‌شویم.",
        //   category: "برنامه‌نویسی",
        //   publishedAt: "۱۴۰۳/۱۰/۰۳",
        //   image: "https://vigiato.net/wp-content/uploads/2025/12/Call-of-Duty-Black-Ops-7-2-910x600.jpg",
        //   url: "/articles/react-hooks-guide.html"
        // },,

        // {
        //   id: 8,
        //   title: "آشنایی کامل با React Hooks و کاربرد آن‌ها",
        //   excerpt:
        //     "React Hooks امکان مدیریت state و lifecycle را بدون class فراهم می‌کنند. در این مقاله با مثال‌های کاربردی آن‌ها آشنا می‌شویم.",
        //   category: "برنامه‌نویسی",
        //   publishedAt: "۱۴۰۳/۱۰/۰۳",
        //   image: "https://vigiato.net/wp-content/uploads/2025/12/Call-of-Duty-Black-Ops-7-2-910x600.jpg",
        //   url: "/articles/react-hooks-guide.html"
        // },,

        // {
        //   id: 9,
        //   title: "آشنایی کامل با React Hooks و کاربرد آن‌ها",
        //   excerpt:
        //     "React Hooks امکان مدیریت state و lifecycle را بدون class فراهم می‌کنند. در این مقاله با مثال‌های کاربردی آن‌ها آشنا می‌شویم.",
        //   category: "برنامه‌نویسی",
        //   publishedAt: "۱۴۰۳/۱۰/۰۳",
        //   image: "https://vigiato.net/wp-content/uploads/2025/12/Call-of-Duty-Black-Ops-7-2-910x600.jpg",
        //   url: "/articles/react-hooks-guide.html"
        // },,

        // {
        //   id: 10,
        //   title: "آشنایی کامل با React Hooks و کاربرد آن‌ها",
        //   excerpt:
        //     "React Hooks امکان مدیریت state و lifecycle را بدون class فراهم می‌کنند. در این مقاله با مثال‌های کاربردی آن‌ها آشنا می‌شویم.",
        //   category: "برنامه‌نویسی",
        //   publishedAt: "۱۴۰۳/۱۰/۰۳",
        //   image: "https://vigiato.net/wp-content/uploads/2025/12/Call-of-Duty-Black-Ops-7-2-910x600.jpg",
        //   url: "/articles/react-hooks-guide.html"
        // },,

        // {
        //   id: 11,
        //   title: "آشنایی کامل با React Hooks و کاربرد آن‌ها",
        //   excerpt:
        //     "React Hooks امکان مدیریت state و lifecycle را بدون class فراهم می‌کنند. در این مقاله با مثال‌های کاربردی آن‌ها آشنا می‌شویم.",
        //   category: "برنامه‌نویسی",
        //   publishedAt: "۱۴۰۳/۱۰/۰۳",
        //   image: "https://vigiato.net/wp-content/uploads/2025/12/Call-of-Duty-Black-Ops-7-2-910x600.jpg",
        //   url: "/articles/react-hooks-guide.html"
        // },,

        // {
        //   id: 12,
        //   title: "آشنایی کامل با React Hooks و کاربرد آن‌ها",
        //   excerpt:
        //     "React Hooks امکان مدیریت state و lifecycle را بدون class فراهم می‌کنند. در این مقاله با مثال‌های کاربردی آن‌ها آشنا می‌شویم.",
        //   category: "برنامه‌نویسی",
        //   publishedAt: "۱۴۰۳/۱۰/۰۳",
        //   image: "https://vigiato.net/wp-content/uploads/2025/12/Call-of-Duty-Black-Ops-7-2-910x600.jpg",
        //   url: "/articles/react-hooks-guide.html"
        // },

        // ✅ مقالات بعدی فقط اینجا اضافه می‌شوند
      ];
    }

  };

  const ARTICLES = ArticleService.fetchArticles();

  /* --------------------------------------------------
   * 5️⃣ CARD FACTORY
   * -------------------------------------------------- */

  function createArticleCard(article) {
    const card = document.createElement("article");
    card.className = "article-card";

    card.innerHTML = `
      <div class="article-media">
        <img
          class="article-image"
          src="${article.image}"
          alt="${article.title}"
          loading="lazy"
        />
        <span class="article-badge">
          ${article.category}
        </span>
      </div>

      <div class="article-content">
        <h3 class="article-title">
          <a href="${article.url}">
            ${article.title}
          </a>
        </h3>

        <p class="article-excerpt">
          ${article.excerpt}
        </p>

        <div class="article-meta">
          <span>${article.publishedAt}</span>
          <span>مطالعه →</span>
        </div>
      </div>
    `;

    return card;
  }

  /* --------------------------------------------------
   * 6️⃣ RENDER ENGINE
   * -------------------------------------------------- */

  function renderNextBatch() {
    if (state.loading || state.finished) return;

    state.loading = true;

    const start = state.cursor;
    const end = start + CONFIG.BATCH_SIZE;
    const batch = ARTICLES.slice(start, end);

    if (CONFIG.DEBUG) {
      console.log("📦 Render:", start, end);
    }

    batch.forEach((article, index) => {
      const card = createArticleCard(article);
      DOM.grid.appendChild(card);

      // CSS Animation trigger
      setTimeout(() => {
        card.classList.add("show");
      }, index * CONFIG.ANIMATION_DELAY);
    });

    state.cursor += batch.length;

    if (state.cursor >= ARTICLES.length) {
      state.finished = true;
      DOM.loadMoreBtn.style.display = "none";
    }

    state.loading = false;
  }

  /* --------------------------------------------------
   * 7️⃣ LOAD MORE HANDLER
   * -------------------------------------------------- */

  function handleLoadMoreClick() {
    if (state.loading || state.finished) return;

    DOM.loadMoreBtn.classList.add("loading");

    setTimeout(() => {
      renderNextBatch();
      DOM.loadMoreBtn.classList.remove("loading");
    }, 450);
  }

  DOM.loadMoreBtn.addEventListener("click", handleLoadMoreClick);

  /* --------------------------------------------------
   * 8️⃣ INIT
   * -------------------------------------------------- */

  function initBlog() {
    renderNextBatch();
  }

  initBlog();

});
