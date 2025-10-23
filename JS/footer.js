// footer.js - نسخه به‌روز شده با تابع تم

// انتخاب المان فوتر
const footer = document.querySelector('footer');

// تابع به‌روزرسانی تم فوتر (منتقل شده از foote-theme.js)
function updateFooterTheme() {
  const bgColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--bg-color')
    .trim();

  if (bgColor === '#000' || bgColor === '#111') {
    footer.classList.add('footer-dark');
    footer.classList.remove('footer-light');
  } else {
    footer.classList.add('footer-light');
    footer.classList.remove('footer-dark');
  }
}

// فراخوانی اولیه تابع تم
document.addEventListener('DOMContentLoaded', () => {
  if (footer) {
    updateFooterTheme();
    
    // اضافه کردن MutationObserver برای رصد تغییرات تم
    const observer = new MutationObserver(() => {
      updateFooterTheme();
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
  }
});

// بقیه توابع فوتر (اگر وجود داشته باشن)...
