// portfolio.js - کد کامل برای فیلتر و انیمیشن

document.addEventListener('DOMContentLoaded', function() {
  // انتخاب دکمه‌های فیلتر
  const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
  const cards = document.querySelectorAll('.portfolio-card');

  // افزودن رویداد کلیک به دکمه‌های فیلتر
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // حذف کلاس active از همه دکمه‌ها
      filterBtns.forEach(b => b.classList.remove('active'));
      // افزودن کلاس active به دکمه کلیک شده
      this.classList.add('active');
      
      // گرفتن دسته‌بندی انتخاب شده
      const filter = this.getAttribute('data-filter');
      
      // فیلتر کردن کارت‌ها
      cards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
          // اضافه کردن انیمیشن
          card.style.animation = 'fadeInUp 0.6s ease-out forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // انیمیشن هاور پیشرفته برای کارت‌ها
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-15px)';
      this.style.boxShadow = '0 25px 50px rgba(67, 97, 238, 0.25)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'var(--portfolio-shadow-light)';
    });
  });

  // انیمیشن دکمه مشاهده
  const viewBtns = document.querySelectorAll('.portfolio-view-btn');
  viewBtns.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px)';
      this.style.boxShadow = '0 8px 25px rgba(67, 97, 238, 0.4)';
    });
    
    btn.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 4px 15px rgba(67, 97, 238, 0.3)';
    });
  });
});
