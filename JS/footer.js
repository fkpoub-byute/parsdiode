// نمایش/پنهان کردن دکمه اسکرول به بالا
window.addEventListener('scroll', function () {
  const btn = document.getElementById('scrollTopBtn');
  if (window.scrollY > 300) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
});

// اسکرول به بالای صفحه
document.getElementById('scrollTopBtn').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
