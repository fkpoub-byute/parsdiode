// script.js

// DOM Elements
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

// Theme Toggle
let isLightTheme = true;

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

// Search Modal
searchBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    searchInput.focus();
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
    }
});

// Sample articles data
const articles = [
    {
        title: "طراحی فیلتر پایین‌گذر",
        content: "آموزش طراحی فیلتر پایین‌گذر با استفاده از المان‌های RLC و تحلیل فرکانسی",
        category: "الکترونیک"
    },
    {
        title: "آشنایی با React Hooks",
        content: "آموزش کامل React Hooks و کاربرد آن در توسعه وب مدرن",
        category: "برنامه‌نویسی"
    },
    {
        title: "بهینه‌سازی سیستم‌های فتوولتائیک",
        content: "روش‌های بهینه‌سازی عملکرد سلول‌های خورشیدی و افزایش بازدهی",
        category: "برق خورشیدی"
    },
    {
        title: "مدارهای تقویت‌کننده عملیاتی",
        content: "تحلیل و طراحی مدارهای تقویت‌کننده عملیاتی در الکترونیک آنالوگ",
        category: "الکترونیک"
    },
    {
        title: "Vue.js Composition API",
        content: "آشنایی با Composition API در Vue.js و مزایای آن نسبت به Options API",
        category: "برنامه‌نویسی"
    }
];

// Search functionality
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    if (query.length === 0) {
        searchResults.innerHTML = '';
        return;
    }

    const filteredArticles = articles.filter(article => 
        article.title.toLowerCase().includes(query) || 
        article.content.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query)
    );

    displaySearchResults(filteredArticles);
});

function displaySearchResults(results) {
    if (results.length === 0) {
        searchResults.innerHTML = '<p style="text-align: center; padding: 1rem; color: var(--light-text-secondary);">مقاله‌ای یافت نشد.</p>';
        return;
    }

    searchResults.innerHTML = results.map(article => `
        <div class="search-result">
            <h4>${article.title}</h4>
            <p>${article.content}</p>
            <span class="tag ${article.category === 'الکترونیک' ? 'electronic' : 
                              article.category === 'برنامه‌نویسی' ? 'programming' : 'solar'}">
                ${article.category}
            </span>
        </div>
        <hr style="border: none; border-top: 1px solid var(--light-border); margin: 0.5rem 0;">
    `).join('');
}

// Mobile Menu Toggle
mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = mobileMenuToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.className = 'fas fa-times';
    } else {
        icon.className = 'fas fa-bars';
    }
});

// Mobile Dropdown Toggle
dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');
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
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && navMenu.classList.contains('active')) {
        if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            mobileMenuToggle.querySelector('i').className = 'fas fa-bars';
        }
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        mobileMenuToggle.querySelector('i').className = 'fas fa-bars';
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
