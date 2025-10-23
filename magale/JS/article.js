// اسکریپت خاص مقاله
class ArticleManager {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupImageZoom();
        this.setupCodeBlocks();
        this.setupInteractiveElements();
        this.setupReadingProgress();
    }
    
    // تنظیم زوم تصاویر
    setupImageZoom() {
        const images = document.querySelectorAll('.featured-image, .content-image');
        
        images.forEach(img => {
            img.addEventListener('click', () => {
                // ایجاد مودال برای نمایش بزرگ تصویر
                const modal = document.createElement('div');
                modal.className = 'image-modal';
                modal.innerHTML = `
                    <div class="modal-content">
                        <span class="close-modal">&times;</span>
                        <img src="${img.src}" alt="${img.alt}" class="modal-image">
                    </div>
                `;
                
                document.body.appendChild(modal);
                
                // بستن مودال
                const closeBtn = modal.querySelector('.close-modal');
                closeBtn.addEventListener('click', () => {
                    document.body.removeChild(modal);
                });
                
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        document.body.removeChild(modal);
                    }
                });
            });
        });
    }
    
    // تنظیم بلوک‌های کد
    setupCodeBlocks() {
        const codeBlocks = document.querySelectorAll('pre code');
        
        codeBlocks.forEach(block => {
            // اضافه کردن دکمه کپی
            const button = document.createElement('button');
            button.className = 'copy-code-btn';
            button.innerHTML = '<i class="fas fa-copy"></i>';
            button.title = 'کپی کد';
            
            button.addEventListener('click', () => {
                const code = block.textContent;
                navigator.clipboard.writeText(code).then(() => {
                    const originalHTML = button.innerHTML;
                    button.innerHTML = '<i class="fas fa-check"></i>';
                    button.style.background = 'var(--success-color)';
                    
                    setTimeout(() => {
                        button.innerHTML = originalHTML;
                        button.style.background = '';
                    }, 2000);
                });
            });
            
            block.parentNode.style.position = 'relative';
            block.parentNode.appendChild(button);
        });
    }
    
    // تنظیم عناصر تعاملی
    setupInteractiveElements() {
        // افکت هاور برای عناصر
        const hoverElements = document.querySelectorAll('.tech-card, .challenge-item, .perspective-card');
        
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                el.style.transform = 'translateY(-3px)';
            });
            
            el.addEventListener('mouseleave', () => {
                el.style.transform = 'translateY(0)';
            });
        });
        
        // افکت کلیک برای دکمه‌ها
        const buttons = document.querySelectorAll('button');
        buttons.forEach(btn => {
            btn.addEventListener('mousedown', () => {
                btn.style.transform = 'scale(0.95)';
            });
            
            btn.addEventListener('mouseup', () => {
                btn.style.transform = 'scale(1)';
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'scale(1)';
            });
        });
    }
    
    // تنظیم پیشرفت خواندن
    setupReadingProgress() {
        const article = document.querySelector('.main-article');
        if (article) {
            // محاسبه زمان تخمینی خواندن
            const text = article.textContent;
            const words = text.trim().split(/\s+/).length;
            const wpm = 200; // کلمه در دقیقه
            const readingTime = Math.ceil(words / wpm);
            
            // به‌روزرسانی اطلاعات مقاله
            const metaItem = document.querySelector('.meta-item:last-child');
            if (metaItem) {
                metaItem.innerHTML = `<i class="fas fa-clock"></i> زمان مطالعه: ${readingTime} دقیقه`;
            }
        }
    }
}

// اسکریپت مودال تصاویر
document.addEventListener('DOMContentLoaded', () => {
    // اضافه کردن استایل مودال
    const style = document.createElement('style');
    style.textContent = `
        .image-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            backdrop-filter: blur(5px);
        }
        
        .modal-content {
            position: relative;
            max-width: 90%;
            max-height: 90%;
        }
        
        .modal-image {
            max-width: 100%;
            max-height: 80vh;
            border-radius: var(--border-radius);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .close-modal {
            position: absolute;
            top: -40px;
            left: 0;
            color: white;
            font-size: 2rem;
            cursor: pointer;
            background: rgba(0, 0, 0, 0.5);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content:             transition: var(--transition);
        }
        
        .close-modal:hover {
            background: var(--danger-color);
        }
    `;
    document.head.appendChild(style);
});

// شروع اسکریپت مقاله
document.addEventListener('DOMContentLoaded', () => {
    new ArticleManager();
});
