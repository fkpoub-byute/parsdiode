/**
 * Single Portfolio Item - Advanced JavaScript
 * @version 1.0.0
 * @author Parsdiode
 */

class PortfolioItemManager {
  constructor() {
    this.init();
  }

  init() {
    this.cacheElements();
    this.bindEvents();
    this.initializeComponents();
  }

  cacheElements() {
    this.elements = {
      thumbnails: document.querySelectorAll('.thumbnail'),
      mainImage: document.getElementById('mainImage'),
      shareButtons: document.querySelectorAll('.share-btn'),
      viewDetailButtons: document.querySelectorAll('.view-details'),
      projectTitle: document.querySelector('.project-title'),
      projectUrl: window.location.href
    };
  }

  bindEvents() {
    // Image Gallery Events
    this.elements.thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', this.handleThumbnailClick.bind(this));
      thumbnail.addEventListener('mouseenter', this.handleThumbnailHover.bind(this));
      thumbnail.addEventListener('mouseleave', this.handleThumbnailLeave.bind(this));
    });

    // Share Button Events
    this.elements.shareButtons.forEach(button => {
      button.addEventListener('click', this.handleShareButtonClick.bind(this));
      button.addEventListener('mouseenter', this.handleShareButtonHover.bind(this));
      button.addEventListener('mouseleave', this.handleShareButtonLeave.bind(this));
    });

    // View Details Events
    this.elements.viewDetailButtons.forEach(button => {
      button.addEventListener('click', this.handleViewDetailsClick.bind(this));
    });

    // Keyboard Navigation
    document.addEventListener('keydown', this.handleKeyboardNavigation.bind(this));
  }

  initializeComponents() {
    this.initializeImageGallery();
    this.initializeShareButtons();
  }

  // Image Gallery Methods
  initializeImageGallery() {
    if (this.elements.thumbnails.length > 0) {
      this.elements.thumbnails[0].classList.add('active');
    }
  }

  handleThumbnailClick(event) {
    const thumbnail = event.currentTarget;
    const newSrc = thumbnail.getAttribute('data-src');
    
    if (!newSrc || !this.elements.mainImage) return;

    // Update active state
    this.updateActiveThumbnail(thumbnail);
    
    // Change main image with smooth transition
    this.changeMainImage(newSrc);
  }

  handleThumbnailHover(event) {
    const thumbnail = event.currentTarget;
    const img = thumbnail.querySelector('img');
    
    if (img) {
      img.style.transform = 'scale(1.1)';
      img.style.transition = 'transform 0.3s ease';
    }
  }

  handleThumbnailLeave(event) {
    const thumbnail = event.currentTarget;
    const img = thumbnail.querySelector('img');
    
    if (img) {
      img.style.transform = 'scale(1)';
    }
  }

  updateActiveThumbnail(activeThumbnail) {
    this.elements.thumbnails.forEach(thumbnail => {
      thumbnail.classList.remove('active');
    });
    activeThumbnail.classList.add('active');
  }

  changeMainImage(newSrc) {
    if (!this.elements.mainImage) return;

    // Add transition class
    this.elements.mainImage.classList.add('image-transition');
    
    setTimeout(() => {
      this.elements.mainImage.src = newSrc;
      this.elements.mainImage.classList.remove('image-transition');
    }, 150);
  }

  // Share Button Methods
  initializeShareButtons() {
    // Add tooltips to share buttons
    this.elements.shareButtons.forEach(button => {
      const platform = button.classList.contains('telegram') ? 'تلگرام' :
                      button.classList.contains('whatsapp') ? 'واتساپ' :
                      button.classList.contains('linkedin') ? 'لینکدین' : 'کپی لینک';
      
      button.setAttribute('aria-label', `اشتراک‌گذاری در ${platform}`);
      button.setAttribute('title', `اشتراک‌گذاری در ${platform}`);
    });
  }

  handleShareButtonClick(event) {
    const button = event.currentTarget;
    const projectTitle = this.elements.projectTitle?.textContent || 'پروژه';
    const projectUrl = this.elements.projectUrl;

    // Visual feedback
    this.provideVisualFeedback(button);

    if (button.classList.contains('copy-link')) {
      this.copyLinkToClipboard(projectUrl, button);
    } else if (button.classList.contains('telegram')) {
      this.shareToTelegram(projectTitle, projectUrl);
    } else if (button.classList.contains('whatsapp')) {
      this.shareToWhatsApp(projectTitle, projectUrl);
    } else if (button.classList.contains('linkedin')) {
      this.shareToLinkedIn(projectUrl);
    }
  }

  handleShareButtonHover(event) {
    const button = event.currentTarget;
    button.style.transform = 'translateY(-5px) scale(1.1)';
  }

  handleShareButtonLeave(event) {
    const button = event.currentTarget;
    button.style.transform = 'translateY(0) scale(1)';
  }

  provideVisualFeedback(button) {
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
      button.style.transform = 'scale(1)';
    }, 150);
  }

  async copyLinkToClipboard(url, button) {
    try {
      await navigator.clipboard.writeText(url);
      this.showSuccessFeedback(button, 'لینک کپی شد!');
    } catch (err) {
      console.error('Failed to copy link:', err);
      this.showErrorFeedback(button);
    }
  }

  shareToTelegram(title, url) {
    const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
    this.openShareWindow(shareUrl);
  }

  shareToWhatsApp(title, url) {
    const shareUrl = `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`;
    this.openShareWindow(shareUrl);
  }

  shareToLinkedIn(url) {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    this.openShareWindow(shareUrl);
  }

  openShareWindow(url) {
    const width = 600;
    const height = 400;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;
    
    window.open(
      url,
      'share',
      `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
    );
  }

  showSuccessFeedback(button, message) {
    const originalHTML = button.innerHTML;
    const originalTitle = button.getAttribute('title');
    
    button.innerHTML = '<i class="fas fa-check"></i>';
    button.setAttribute('title', message);
    button.style.background = 'linear-gradient(135deg, #4ade80, #22c55e)';
    
    setTimeout(() => {
      button.innerHTML = originalHTML;
      button.setAttribute('title', originalTitle);
      button.style.background = '';
    }, 2000);
  }

  showErrorFeedback(button) {
    const originalHTML = button.innerHTML;
    button.innerHTML = '<i class="fas fa-exclamation"></i>';
    button.style.background = 'linear-gradient(135deg, #f87171, #ef4444)';
    
    setTimeout(() => {
      button.innerHTML = originalHTML;
      button.style.background = '';
    }, 2000);
  }

  // View Details Methods
  handleViewDetailsClick(event) {
    const button = event.currentTarget;
    const projectCard = button.closest('.project-card');
    
    if (!projectCard) return;

    const projectName = projectCard.querySelector('.project-title')?.textContent;
    const projectCategory = projectCard.querySelector('.project-category')?.textContent;
    
    // Analytics tracking (optional)
    this.trackProjectView(projectName, projectCategory);
    
    // Navigation logic
    this.navigateToProject(projectName);
  }

  trackProjectView(projectName, category) {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'view_project_detail', {
        'event_category': 'Portfolio',
        'event_label': projectName,
        'project_category': category
      });
    }
  }

  navigateToProject(projectName) {
    if (!projectName) return;
    
    // Create URL-friendly slug
    const slug = projectName
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
    
    // Navigate to project detail page
    window.location.href = `/portfolio/${slug}`;
  }

  // Keyboard Navigation
  handleKeyboardNavigation(event) {
    // ESC key to close any open modals or overlays
    if (event.key === 'Escape') {
      this.handleEscapeKey();
    }
    
    // Arrow keys for gallery navigation
    if (event.target.closest('.thumbnail-gallery')) {
      this.handleGalleryNavigation(event);
    }
  }

  handleEscapeKey() {
    // Close any active overlays or modals
    const activeElements = document.querySelectorAll('.active, .open');
    activeElements.forEach(element => {
      element.classList.remove('active', 'open');
    });
  }

  handleGalleryNavigation(event) {
    const currentIndex = Array.from(this.elements.thumbnails).findIndex(thumb => 
      thumb.classList.contains('active')
    );
    
    if (currentIndex === -1) return;

    let newIndex = currentIndex;
    
    switch (event.key) {
      case 'ArrowLeft':
        newIndex = (currentIndex + 1) % this.elements.thumbnails.length;
        break;
      case 'ArrowRight':
        newIndex = (currentIndex - 1 + this.elements.thumbnails.length) % this.elements.thumbnails.length;
        break;
      default:
        return;
    }

    event.preventDefault();
    this.elements.thumbnails[newIndex].click();
  }

  // Utility Methods
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioItemManager();
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      }
    });
  });
});

// Performance optimizations
if ('loading' in HTMLImageElement.prototype) {
  // Native lazy loading support
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.setAttribute('loading', 'lazy');
  });
}
