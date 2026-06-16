document.addEventListener('DOMContentLoaded', function() {
    
    // انتخاب عناصر
    const masterImage = document.getElementById('masterImage');
    const thumbnails = document.querySelectorAll('.glass-thumb');

    // تابع تغییر تصویر
    window.updateView = function(clickedThumb, newSrc) {
        
        // 1. هندل کردن کلاس Active
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        clickedThumb.classList.add('active');

        // 2. انیمیشن محو شدن (Fade Out)
        masterImage.style.opacity = '0';
        masterImage.style.transform = 'scale(0.98)';

        // 3. تغییر عکس و ظاهر شدن بعد از زمان کوتاه
        setTimeout(() => {
            masterImage.src = newSrc;
            
            // انیمیشن ظاهر شدن (Fade In) پس از لود شدن عکس جدید
            masterImage.onload = () => {
                masterImage.style.opacity = '1';
                masterImage.style.transform = 'scale(1)';
            };
            // برای اطمینان در صورتی که عکس کش شده باشد
            if (masterImage.complete) {
                 masterImage.style.opacity = '1';
                 masterImage.style.transform = 'scale(1)';
            }
        }, 300); // 300ms delay for smooth transition
    };

});
