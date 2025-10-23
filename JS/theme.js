function setThemeBasedOnTime() {
    const hour = new Date().getHours();
    const isNight = hour >= 18 || hour <= 6; 
    
    if (isNight && !body.classList.contains('dark-theme')) {
        body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        isLightTheme = false;
    } else if (!isNight && body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        isLightTheme = true;
    }
}

setThemeBasedOnTime();

setInterval(setThemeBasedOnTime, 600000);
