// تغییر تم بین دارک و لایت
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('light-theme');

  // ذخیره تنظیم تم در localStorage
  const isLight = body.classList.contains('light-theme');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  
  // انیمیشن تغییر تم
  body.style.transition = 'background 0.5s ease, color 0.5s ease';
  setTimeout(() => {
    body.style.transition = '';
  }, 500);
}

// رفتن به صفحه اصلی
function goToHome() {
  // انیمیشن خروج
  const card = document.querySelector('.glass-card');
  card.style.transform = 'scale(0.9) translateY(20px)';
  card.style.opacity = '0';
  
  setTimeout(() => {
    window.location.href = '/';
  }, 300);
}

// بارگذاری تم ذخیره شده
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
  }
  
  // اضافه کردن انیمیشن به دکمه‌ها
  addButtonAnimations();
  
  // راه‌اندازی اسکرولر
  initScrollProgress();
});

// انیمیشن هنگام کلیک روی دکمه‌ها
function addButtonAnimations() {
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mousedown', function() {
      this.style.transform = 'scale(0.95)';
    });
    
    button.addEventListener('mouseup', function() {
      this.style.transform = '';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });
}

// انیمیشن شناور برای عناصر پس‌زمینه
function createFloatingElements() {
  const container = document.querySelector('.background-elements');
  if (!container) return;
  
  for (let i = 0; i < 5; i++) {
    const element = document.createElement('div');
    element.className = 'floating-element';
    element.style.setProperty('--delay', `${Math.random() * 3}s`);
    element.style.setProperty('--size', `${Math.random() * 60 + 20}px`);
    element.style.setProperty('--color', `hsl(${Math.random() * 360}, 70%, 60%)`);
    element.style.left = `${Math.random() * 100}%`;
    element.style.top = `${Math.random() * 100}%`;
    container.appendChild(element);
  }
}

// اجرای انیمیشن‌ها
document.addEventListener('DOMContentLoaded', () => {
  createFloatingElements();
});

// جلوگیری از انتخاب متن
document.addEventListener('selectstart', function(e) {
  if (e.target.closest('.btn, .social-icon')) return;
  e.preventDefault();
});

// اسکرولر پیشرفت
function initScrollProgress() {
  const progressBar = document.querySelector('.scroll-progress-bar');
  
  if (!progressBar) return;
  
  const updateProgress = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    
    progressBar.style.width = `${scrolled}%`;
  };
  
  window.addEventListener('scroll', updateProgress);
  
  // اولین بار هم اجرا شه
  updateProgress();
}

// اضافه کردن اسکرول نرم
document.addEventListener('DOMContentLoaded', () => {
  // اضافه کردن smooth scroll behavior
  document.documentElement.style.scrollBehavior = 'smooth';
  
  // اضافه کردن scroll snapping برای تجربه بهتر
  document.body.style.scrollSnapType = 'y proximity';
});
