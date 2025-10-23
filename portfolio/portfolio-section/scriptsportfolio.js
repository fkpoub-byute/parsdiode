// projects.js - Portfolio Management System

document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const projectsGrid = document.getElementById("projects-grid");
  const pagination = document.getElementById("projects-pagination");
  const filterTags = document.querySelectorAll(".filter-tag");
  const projectsSection = document.getElementById("projects-section");

  // Configuration
  const projectsPerPage = 6;
  let currentPage = 1;
  let currentCategory = "all";

  // Project Data - Enhanced with more details
  const allProjects = [
    {
      id: 1,
      title: "طراحی مدار فیلتر پایین‌گذر",
      category: "الکترونیک",
      image: "https://images.unsplash.com/photo-1517242020052-5c90d705b9f3?w=400&h=250&fit=crop",
      description: "طراحی و شبیه‌سازی مدار فیلتر پایین‌گذر با استفاده از المان‌های RLC و تحلیل فرکانسی کامل",
      technologies: ["LTspice", "KiCad", "MATLAB"],
      date: "1403/05/15",
      difficulty: "متوسط",
      projectLink: "/portfolio/portfolio/portfolio.html"
    },
    {
      id: 2,
      title: "اپلیکیشن مدیریت پروژه با React",
      category: "برنامه‌نویسی",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
      description: "توسعه اپلیکیشن وب برای مدیریت پروژه‌های الکترونیک با استفاده از React و Redux",
      technologies: ["React", "Redux", "Node.js", "MongoDB"],
      date: "1403/04/28",
      difficulty: "پیشرفته",
      projectLink: "project-detail.html?id=2"
    },
    {
      id: 3,
      title: "سیستم کنترل MPPT برای پنل خورشیدی",
      category: "برق خورشیدی",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=250&fit=crop",
      description: "پیاده‌سازی الگوریتم کنترل نقطه توان حداکثر (MPPT) برای بهینه‌سازی عملکرد پنل‌های خورشیدی",
      technologies: ["Arduino", "C++", "MATLAB/Simulink"],
      date: "1403/04/12",
      difficulty: "پیشرفته",
      projectLink: "project-detail.html?id=3"
    },
    {
      id: 4,
      title: "طراحی مدار تقویت‌کننده عملیاتی",
      category: "الکترونیک",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop",
      description: "تحلیل و طراحی مدار تقویت‌کننده عملیاتی برای کاربردهای صوتی با پهنای باند بالا",
      technologies: ["LTspice", "Eagle", "Oscilloscope"],
      date: "1403/03/20",
      difficulty: "متوسط",
      projectLink: "project-detail.html?id=4"
    },
    {
      id: 5,
      title: "داشبورد مانیتورینگ سیستم‌های خورشیدی",
      category: "برق خورشیدی",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop",
      description: "توسعه داشبورد مانیتورینگ برای سیستم‌های فتوولتائیک با استفاده از IoT و ابر",
      technologies: ["Vue.js", "Node.js", "MQTT", "InfluxDB"],
      date: "1403/02/15",
      difficulty: "پیشرفته",
      projectLink: "project-detail.html?id=5"
    },
    {
      id: 6,
      title: "شبیه‌سازی مدارهای دیجیتال با VHDL",
      category: "الکترونیک",
      image: "https://images.unsplash.com/photo-1550439062-609e1531270e?w=400&h=250&fit=crop",
      description: "پیاده‌سازی و شبیه‌سازی مدارهای دیجیتال پیشرفته با استفاده از زبان VHDL و FPGA",
      technologies: ["VHDL", "ModelSim", "Xilinx Vivado"],
      date: "1403/01/20",
      difficulty: "سخت",
      projectLink: "project-detail.html?id=6"
    },
    {
      id: 7,
      title: "اپلیکیشن موبایل محاسبه‌گر الکترونیک",
      category: "برنامه‌نویسی",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop",
      description: "توسعه اپلیکیشن موبایل برای محاسبات الکترونیکی با استفاده از React Native",
      technologies: ["React Native", "JavaScript", "Expo"],
      date: "1402/12/10",
      difficulty: "متوسط",
      projectLink: "project-detail.html?id=7"
    },
    {
      id: 8,
      title: "طراحی سیستم ذخیره‌سازی انرژی با باتری لیتیوم",
      category: "برق خورشیدی",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=400&h=250&fit=crop",
      description: "طراحی و پیاده‌سازی سیستم BMS برای باتری‌های لیتیوم فسفات آهن",
      technologies: ["Arduino", "C++", "Battery Management"],
      date: "1402/11/05",
      difficulty: "پیشرفته",
      projectLink: "project-detail.html?id=8"
    }
  ];

  // Utility Functions
  const utils = {
    getFilteredProjects() {
      let filtered = allProjects;
      
      // Filter by category
      if (currentCategory !== "all") {
        filtered = filtered.filter(project => project.category === currentCategory);
      }
      
      return filtered;
    },

    getCategoryClass(category) {
      const categoryClasses = {
        'الکترونیک': 'electronic',
        'برنامه‌نویسی': 'programming',
        'برق خورشیدی': 'solar'
      };
      return categoryClasses[category] || '';
    },

    formatDate(dateString) {
      return dateString;
    },

    truncateText(text, maxLength = 100) {
      if (text.length <= maxLength) return text;
      return text.substr(0, maxLength) + '...';
    }
  };

  // Render Functions
  const renderer = {
    renderProjects() {
      const filtered = utils.getFilteredProjects();
      const start = (currentPage - 1) * projectsPerPage;
      const end = start + projectsPerPage;
      const projectsToShow = filtered.slice(start, end);

      if (projectsToShow.length === 0) {
        projectsGrid.innerHTML = `
          <div class="no-projects-found">
            <i class="fas fa-search fa-3x"></i>
            <h3>پروژه‌ای یافت نشد</h3>
            <p>دسته‌بندی دیگری را انتخاب کنید</p>
          </div>
        `;
        return;
      }

      projectsGrid.innerHTML = projectsToShow.map(project => `
        <div class="project-card" data-id="${project.id}">
          <div class="project-image">
            <img src="${project.image}" alt="${project.title}" loading="lazy">
            <span class="project-category ${utils.getCategoryClass(project.category)}">
              ${project.category}
            </span>
            <div class="project-overlay"></div>
          </div>
          <div class="project-content">
            <h3>${project.title}</h3>
            <p class="project-description">${utils.truncateText(project.description, 120)}</p>
            <div class="project-meta">
              <div class="project-meta-item">
                <i class="far fa-calendar"></i>
                ${project.date}
              </div>
              <div class="project-meta-item">
                <i class="fas fa-signal"></i>
                ${project.difficulty}
              </div>
            </div>
            <div class="project-technologies">
              ${project.technologies.slice(0, 4).map(tech => 
                `<span class="tech-tag">${tech}</span>`
              ).join('')}
              ${project.technologies.length > 4 ? 
                `<span class="tech-tag">+${project.technologies.length - 4}</span>` : ''}
            </div>
            <button class="view-project-btn" onclick="window.location.href='${project.projectLink}'">
              مشاهده جزئیات پروژه
              <i class="fas fa-arrow-left"></i>
            </button>
          </div>
        </div>
      `).join('');
    },

    renderPagination() {
      const filtered = utils.getFilteredProjects();
      const totalPages = Math.ceil(filtered.length / projectsPerPage);

      pagination.innerHTML = '';
      
      if (totalPages <= 1) return;

      // Previous button
      const prevBtn = document.createElement("div");
      prevBtn.className = `pagination-btn ${currentPage === 1 ? 'disabled' : ''}`;
      prevBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
      prevBtn.addEventListener("click", () => {
        if (currentPage > 1) {
          currentPage--;
          this.renderProjects();
          this.renderPagination();
          projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
      pagination.appendChild(prevBtn);

      // Page numbers (show max 5 pages)
      const maxVisiblePages = 5;
      let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
      let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
      
      if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        const btn = document.createElement("div");
        btn.className = `pagination-btn ${i === currentPage ? 'active' : ''}`;
        btn.textContent = i;
        btn.addEventListener("click", () => {
          currentPage = i;
          this.renderProjects();
          this.renderPagination();
          projectsSection.scrollIntoView({ behavior: 'smooth' });
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
          this.renderProjects();
          this.renderPagination();
          projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
      pagination.appendChild(nextBtn);
    }
  };

  // Event Handlers
  const eventHandlers = {
    handleFilterClick(tag) {
      filterTags.forEach(t => t.classList.remove("active"));
      tag.classList.add("active");
      currentCategory = tag.dataset.category;
      currentPage = 1;
      renderer.renderProjects();
      renderer.renderPagination();
    },

    init() {
      // Filter tag click events
      filterTags.forEach(tag => {
        tag.addEventListener("click", () => this.handleFilterClick(tag));
      });
    }
  };

  // Theme Management
  const themeManager = {
    init() {
      this.updateTheme();
      this.observeThemeChanges();
    },

    updateTheme() {
      const isDark = document.body.classList.contains('dark-theme');
      
      // Update hero section based on theme
      const heroSection = document.querySelector('.portfolio-hero');
      if (heroSection) {
        if (isDark) {
          heroSection.style.background = 'linear-gradient(135deg, #2563eb, #7c3aed)';
        } else {
          heroSection.style.background = 'linear-gradient(135deg, #4361ee, #3a0ca3)';
        }
      }
    },

    observeThemeChanges() {
      const observer = new MutationObserver(() => {
        this.updateTheme();
      });
      
      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ['class']
      });
    }
  };

  // Initialize
  function init() {
    renderer.renderProjects();
    renderer.renderPagination();
    eventHandlers.init();
    themeManager.init();
  }

  init();

  // Public API
  window.Portfolio = {
    getProjectById(id) {
      return allProjects.find(project => project.id == id);
    },

    addProject(projectData) {
      const newId = Math.max(...allProjects.map(p => p.id)) + 1;
      const newProject = {
        id: newId,
        title: projectData.title || "عنوان پروژه جدید",
        category: projectData.category || "الکترونیک",
        image: projectData.image || `https://picsum.photos/400/250?random=${newId}`,
        description: projectData.description || "توضیحات کوتاه پروژه...",
        technologies: projectData.technologies || [],
        date: projectData.date || new Date().toLocaleDateString('fa-IR'),
        difficulty: projectData.difficulty || "متوسط",
        projectLink: projectData.projectLink || `project-detail.html?id=${newId}`
      };
      
      allProjects.unshift(newProject);
      return newProject;
    },

    getProjectsCount() {
      return allProjects.length;
    },

    getProjectsByCategory(category) {
      return allProjects.filter(project => project.category === category);
    }
  };

  // Global Functions
  window.scrollToProjects = function() {
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  };
});
