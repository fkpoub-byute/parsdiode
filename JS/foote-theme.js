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
