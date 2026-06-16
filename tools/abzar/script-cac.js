// =========================================
// داده‌های وسایل برقی
// =========================================
const appliances = [
    { id: 1, name: "تلویزیون LED", icon: "fas fa-tv", power: 100, category: "سرگرمی" },
    { id: 2, name: "یخچال معمولی", icon: "fas fa-blender", power: 150, category: "لوازم خانگی" },
    { id: 3, name: "فریزر", icon: "fas fa-snowflake", power: 200, category: "لوازم خانگی" },
    { id: 4, name: "لامپ LED", icon: "fas fa-lightbulb", power: 10, category: "روشنایی" },
    { id: 5, name: "لامپ رشته‌ای", icon: "fas fa-lightbulb", power: 60, category: "روشنایی" },
    { id: 6, name: "کولر آبی", icon: "fas fa-wind", power: 500, category: "سرمایش/گرمایش" },
    { id: 7, name: "کولر گازی", icon: "fas fa-snowflake", power: 2000, category: "سرمایش/گرمایش" },
    { id: 8, name: "پنکه سقفی", icon: "fas fa-fan", power: 75, category: "سرمایش/گرمایش" },
    { id: 9, name: "پنکه رومیزی", icon: "fas fa-fan", power: 50, category: "سرمایش/گرمایش" },
    { id: 10, name: "ماشین لباسشویی", icon: "fas fa-soap", power: 500, category: "لوازم خانگی" },
    { id: 11, name: "ماشین ظرفشویی", icon: "fas fa-pump-soap", power: 1200, category: "لوازم خانگی" },
    { id: 12, name: "اتو", icon: "fas fa-tshirt", power: 1200, category: "لباسشویی" },
    { id: 13, name: "جاروبرقی", icon: "fas fa-vacuum", power: 800, category: "نظافت" },
    { id: 14, name: "مایکروویو", icon: "fas fa-temperature-high", power: 1200, category: "آشپزخانه" },
    { id: 15, name: "اجاق گاز برقی", icon: "fas fa-fire", power: 2000, category: "آشپزخانه" },
    { id: 16, name: "پلوپز", icon: "fas fa-utensils", power: 500, category: "آشپزخانه" },
    { id: 17, name: "قهوه ساز", icon: "fas fa-coffee", power: 800, category: "آشپزخانه" },
    { id: 18, name: "آبمیوه گیری", icon: "fas fa-glass-whiskey", power: 300, category: "آشپزخانه" },
    { id: 19, name: "مخلوط کن", icon: "fas fa-blender", power: 400, category: "آشپزخانه" },
    { id: 20, name: "توستر", icon: "fas fa-bread-slice", power: 800, category: "آشپزخانه" },
    { id: 21, name: "لپ تاپ", icon: "fas fa-laptop", power: 60, category: "الکترونیک" },
    { id: 22, name: "کامپیوتر رومیزی", icon: "fas fa-desktop", power: 300, category: "الکترونیک" },
    { id: 23, name: "مانیتور", icon: "fas fa-tv", power: 50, category: "الکترونیک" },
    { id: 24, name: "پرینتر", icon: "fas fa-print", power: 50, category: "اداری" },
    { id: 25, name: "اسکنر", icon: "fas fa-scanner", power: 30, category: "اداری" },
    { id: 26, name: "روتر وای‌فای", icon: "fas fa-wifi", power: 10, category: "الکترونیک" },
    { id: 27, name: "مودم", icon: "fas fa-network-wired", power: 15, category: "الکترونیک" },
    { id: 28, name: "شارژر موبایل", icon: "fas fa-mobile-alt", power: 10, category: "الکترونیک" },
    { id: 29, name: "تبلت", icon: "fas fa-tablet-alt", power: 25, category: "الکترونیک" },
    { id: 30, name: "پخش کننده DVD", icon: "fas fa-compact-disc", power: 30, category: "سرگرمی" },
    { id: 31, name: "سیستم صوتی", icon: "fas fa-music", power: 100, category: "سرگرمی" },
    { id: 32, name: "ماشین ریش تراش", icon: "fas fa-cut", power: 15, category: "آرایشی" },
    { id: 33, name: "سشوار", icon: "fas fa-wind", power: 1200, category: "آرایشی" },
    { id: 34, name: "اتو مو", icon: "fas fa-fire", power: 50, category: "آرایشی" },
    { id: 35, name: "پمپ آب", icon: "fas fa-tint", power: 750, category: "تجهیزات" },
    { id: 36, name: "آکواریوم", icon: "fas fa-fish", power: 100, category: "سرگرمی" },
    { id: 37, name: "دزدگیر", icon: "fas fa-shield-alt", power: 20, category: "امنیتی" },
    { id: 38, name: "دوربین مداربسته", icon: "fas fa-video", power: 30, category: "امنیتی" },
    { id: 39, name: "اینترکام", icon: "fas fa-broadcast-tower", power: 20, category: "امنیتی" },
    { id: 40, name: "آسانسور (کوچک)", icon: "fas fa-elevator", power: 1500, category: "تجهیزات" }
];

// =========================================
// داده‌های استان‌ها و شهرهای ایران
// =========================================
const provinces = [
    { id: 1, name: "آذربایجان شرقی", cities: [
        { name: "تبریز", sunHours: 5.2, radiation: 5.1, avgTemp: 12, altitude: 1361 },
        { name: "مراغه", sunHours: 5.3, radiation: 5.2, avgTemp: 11, altitude: 1478 },
        { name: "مرند", sunHours: 5.1, radiation: 5.0, avgTemp: 10, altitude: 1330 },
        { name: "اسکو", sunHours: 5.2, radiation: 5.1, avgTemp: 12, altitude: 1500 },
        { name: "اهر", sunHours: 5.3, radiation: 5.2, avgTemp: 13, altitude: 1420 }
    ]},
    { id: 2, name: "آذربایجان غربی", cities: [
        { name: "ارومیه", sunHours: 5.0, radiation: 4.9, avgTemp: 11, altitude: 1332 },
        { name: "خوی", sunHours: 5.2, radiation: 5.1, avgTemp: 12, altitude: 1148 },
        { name: "مهاباد", sunHours: 5.1, radiation: 5.0, avgTemp: 10, altitude: 1314 },
        { name: "ماکو", sunHours: 4.9, radiation: 4.8, avgTemp: 9, altitude: 1634 },
        { name: "سلماس", sunHours: 5.0, radiation: 4.9, avgTemp: 11, altitude: 1383 }
    ]},
    { id: 18, name: "قزوین", cities: [
        { name: "قزوین", sunHours: 5.7, radiation: 5.6, avgTemp: 14, altitude: 1278 },
        { name: "تاکستان", sunHours: 5.8, radiation: 5.7, avgTemp: 15, altitude: 1265 },
        { name: "آبیک", sunHours: 5.7, radiation: 5.6, avgTemp: 14, altitude: 1200 },
        { name: "بوئین زهرا", sunHours: 5.9, radiation: 5.8, avgTemp: 16, altitude: 1100 },
        { name: "الوند", sunHours: 5.6, radiation: 5.5, avgTemp: 13, altitude: 1300 }
    ]},
    { id: 8, name: "تهران", cities: [
        { name: "تهران", sunHours: 5.8, radiation: 5.7, avgTemp: 17, altitude: 1200 },
        { name: "شهریار", sunHours: 5.9, radiation: 5.8, avgTemp: 18, altitude: 1100 },
        { name: "رباط کریم", sunHours: 5.9, radiation: 5.8, avgTemp: 18, altitude: 1050 },
        { name: "ورامین", sunHours: 6.0, radiation: 5.9, avgTemp: 19, altitude: 918 },
        { name: "دماوند", sunHours: 5.5, radiation: 5.4, avgTemp: 12, altitude: 1900 }
    ]},
    { id: 4, name: "اصفهان", cities: [
        { name: "اصفهان", sunHours: 6.0, radiation: 5.9, avgTemp: 16, altitude: 1570 },
        { name: "کاشان", sunHours: 6.2, radiation: 6.1, avgTemp: 17, altitude: 982 },
        { name: "خمینی شهر", sunHours: 6.0, radiation: 5.9, avgTemp: 16, altitude: 1590 },
        { name: "شهرضا", sunHours: 6.1, radiation: 6.0, avgTemp: 15, altitude: 1825 },
        { name: "نجف آباد", sunHours: 6.0, radiation: 5.9, avgTemp: 16, altitude: 1650 }
    ]},
    { id: 10, name: "خراسان رضوی", cities: [
        { name: "مشهد", sunHours: 6.2, radiation: 6.1, avgTemp: 15, altitude: 985 },
        { name: "نیشابور", sunHours: 6.3, radiation: 6.2, avgTemp: 16, altitude: 1250 },
        { name: "سبزوار", sunHours: 6.4, radiation: 6.3, avgTemp: 17, altitude: 977 },
        { name: "تربت حیدریه", sunHours: 6.2, radiation: 6.1, avgTemp: 15, altitude: 1451 },
        { name: "چناران", sunHours: 6.1, radiation: 6.0, avgTemp: 14, altitude: 1100 }
    ]},
    { id: 17, name: "فارس", cities: [
        { name: "شیراز", sunHours: 6.7, radiation: 6.6, avgTemp: 18, altitude: 1486 },
        { name: "مرودشت", sunHours: 6.8, radiation: 6.7, avgTemp: 19, altitude: 1620 },
        { name: "کازرون", sunHours: 6.9, radiation: 6.8, avgTemp: 20, altitude: 860 },
        { name: "فسا", sunHours: 7.0, radiation: 6.9, avgTemp: 21, altitude: 1388 },
        { name: "جهرم", sunHours: 6.9, radiation: 6.8, avgTemp: 22, altitude: 1050 }
    ]},
    { id: 13, name: "خوزستان", cities: [
        { name: "اهواز", sunHours: 6.9, radiation: 6.8, avgTemp: 25, altitude: 20 },
        { name: "خرمشهر", sunHours: 7.0, radiation: 6.9, avgTemp: 26, altitude: 5 },
        { name: "آبادان", sunHours: 7.1, radiation: 7.0, avgTemp: 26, altitude: 3 },
        { name: "دزفول", sunHours: 6.8, radiation: 6.7, avgTemp: 24, altitude: 143 },
        { name: "شوشتر", sunHours: 6.9, radiation: 6.8, avgTemp: 25, altitude: 87 }
    ]}
];

// =========================================
// متغیرهای حالت برنامه
// =========================================
const systemSettings = {
    direction: "south",
    inverter: "on-grid",
    panel: "mono",
    battery: "lead-acid",
    selectedCity: null
};

let selectedAppliances = {};
let currentStep = 1;

// =========================================
// سیستم نوتیفیکیشن
// =========================================
class NotificationSystem {
    constructor() {
        this.container = this.createNotificationContainer();
    }
    
    createNotificationContainer() {
        const container = document.createElement('div');
        container.id = 'notification-container';
        container.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            z-index: 10000;
            display: flex;
            flex-direction: column;
            gap: 10px;
            max-width: 350px;
        `;
        document.body.appendChild(container);
        return container;
    }
    
    show(message, type = 'info', duration = 5000) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        
        const icons = {
            success: 'fas fa-check-circle',
            error: 'fas fa-exclamation-circle',
            warning: 'fas fa-exclamation-triangle',
            info: 'fas fa-info-circle'
        };
        
        notification.innerHTML = `
            <div class="notification-icon">
                <i class="${icons[type]}"></i>
            </div>
            <div class="notification-content">
                <div class="notification-message">${message}</div>
            </div>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        // استایل‌های داینامیک
        notification.style.cssText = `
            background: ${this.getBackgroundColor(type)};
            border: 1px solid ${this.getBorderColor(type)};
            border-radius: 10px;
            padding: 15px;
            display: flex;
            align-items: center;
            gap: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.15);
            animation: slideInRight 0.3s ease-out;
            position: relative;
            overflow: hidden;
        `;
        
        // آیکون
        notification.querySelector('.notification-icon').style.cssText = `
            font-size: 1.4rem;
            color: ${this.getIconColor(type)};
            flex-shrink: 0;
        `;
        
        // محتوا
        notification.querySelector('.notification-content').style.cssText = `
            flex: 1;
            color: ${this.getTextColor(type)};
            font-size: 0.95rem;
            line-height: 1.4;
        `;
        
        // دکمه بستن
        notification.querySelector('.notification-close').style.cssText = `
            background: none;
            border: none;
            color: ${this.getTextColor(type)};
            opacity: 0.6;
            cursor: pointer;
            font-size: 1rem;
            padding: 0;
            margin: 0;
            transition: opacity 0.2s;
        `;
        
        notification.querySelector('.notification-close').addEventListener('click', () => {
            this.removeNotification(notification);
        });
        
        // اضافه کردن نوتیفیکیشن به کانتینر
        this.container.appendChild(notification);
        
        // حذف خودکار بعد از مدت زمان مشخص
        if (duration > 0) {
            setTimeout(() => {
                this.removeNotification(notification);
            }, duration);
        }
        
        return notification;
    }
    
    removeNotification(notification) {
        notification.style.animation = 'slideOutRight 0.3s ease-in forwards';
        setTimeout(() => {
            if (notification.parentNode === this.container) {
                this.container.removeChild(notification);
            }
        }, 300);
    }
    
    getBackgroundColor(type) {
        const colors = {
            success: 'rgba(16, 185, 129, 0.15)',
            error: 'rgba(239, 68, 68, 0.15)',
            warning: 'rgba(245, 158, 11, 0.15)',
            info: 'rgba(59, 130, 246, 0.15)'
        };
        return colors[type];
    }
    
    getBorderColor(type) {
        const colors = {
            success: 'rgba(16, 185, 129, 0.3)',
            error: 'rgba(239, 68, 68, 0.3)',
            warning: 'rgba(245, 158, 11, 0.3)',
            info: 'rgba(59, 130, 246, 0.3)'
        };
        return colors[type];
    }
    
    getIconColor(type) {
        const colors = {
            success: '#10B981',
            error: '#EF4444',
            warning: '#F59E0B',
            info: '#3B82F6'
        };
        return colors[type];
    }
    
    getTextColor(type) {
        return 'var(--text-primary)';
    }
    
    success(message, duration = 5000) {
        return this.show(message, 'success', duration);
    }
    
    error(message, duration = 5000) {
        return this.show(message, 'error', duration);
    }
    
    warning(message, duration = 5000) {
        return this.show(message, 'warning', duration);
    }
    
    info(message, duration = 5000) {
        return this.show(message, 'info', duration);
    }
}

// ایجاد نمونه از سیستم نوتیفیکیشن
const notify = new NotificationSystem();

// =========================================
// توابع کمکی
// =========================================
function formatNumber(number) {
    return new Intl.NumberFormat('fa-IR').format(number);
}

function formatDate() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    return now.toLocaleDateString('fa-IR', options);
}

function updateStepProgress(step) {
    const stepElements = document.querySelectorAll('.step');
    const stepLineElements = document.querySelectorAll('.step-line');
    
    stepElements.forEach((stepEl, index) => {
        const stepNumber = parseInt(stepEl.dataset.step);
        
        stepEl.classList.remove('active', 'completed');
        
        if (stepNumber < step) {
            stepEl.classList.add('completed');
            if (stepLineElements[index]) {
                stepLineElements[index].classList.add('completed');
            }
        } else if (stepNumber === step) {
            stepEl.classList.add('active');
        }
    });
}

function goToStep(step) {
    console.log(`Going to step ${step}`);
    
    // Hide all steps
    document.querySelectorAll('.calculation-step').forEach(stepEl => {
        stepEl.classList.remove('active');
    });
    
    // Show target step
    const targetStep = document.getElementById(`step${step}`);
    if (targetStep) {
        targetStep.classList.add('active');
        currentStep = step;
        updateStepProgress(step);
        
        // Scroll to step
        setTimeout(() => {
            targetStep.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
}

// =========================================
// مرحله 1: مدیریت وسایل
// =========================================
function initializeAppliances() {
    console.log('Initializing appliances...');
    
    const appliancesGrid = document.getElementById('appliancesGrid');
    if (!appliancesGrid) {
        console.error('appliancesGrid element not found!');
        return;
    }
    
    appliancesGrid.innerHTML = '';
    
    // گروه‌بندی وسایل بر اساس دسته
    const categories = {};
    
    appliances.forEach(appliance => {
        if (!categories[appliance.category]) {
            categories[appliance.category] = [];
        }
        categories[appliance.category].push(appliance);
    });
    
    console.log('Categories:', Object.keys(categories));
    
    // رندر دسته‌ها و وسایل
    Object.keys(categories).forEach(category => {
        // سرتیتر دسته
        const categoryHeader = document.createElement('div');
        categoryHeader.className = 'category-header';
        categoryHeader.innerHTML = `
            <h3><i class="fas fa-folder"></i> ${category}</h3>
        `;
        appliancesGrid.appendChild(categoryHeader);
        
        // وسایل این دسته
        categories[category].forEach(appliance => {
            const isSelected = selectedAppliances[appliance.id] ? true : false;
            const quantity = isSelected ? selectedAppliances[appliance.id].quantity : 0;
            
            const applianceElement = document.createElement('div');
            applianceElement.className = `appliance-item ${isSelected ? 'selected' : ''}`;
            applianceElement.dataset.id = appliance.id;
            
            applianceElement.innerHTML = `
                <div class="appliance-icon">
                    <i class="${appliance.icon}"></i>
                </div>
                <div class="appliance-info">
                    <div class="appliance-name">${appliance.name}</div>
                    <div class="appliance-power">
                        <i class="fas fa-bolt"></i>
                        ${appliance.power} وات
                    </div>
                    <div class="appliance-quantity" style="${isSelected ? 'display: flex;' : 'display: none;'}">
                        <button type="button" class="quantity-btn minus-btn" data-id="${appliance.id}">
                            <i class="fas fa-minus"></i>
                        </button>
                        <input type="number" class="quantity-input" 
                               value="${quantity}" min="0" max="99" 
                               data-id="${appliance.id}">
                        <button type="button" class="quantity-btn plus-btn" data-id="${appliance.id}">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div class="appliance-checkbox">
                    ${isSelected ? '✓' : ''}
                </div>
            `;
            
            appliancesGrid.appendChild(applianceElement);
        });
    });
    
    console.log(`Rendered ${appliancesGrid.children.length} elements`);
    
    // اضافه کردن event listeners
    setTimeout(() => {
        // کلیک روی آیتم وسایل
        appliancesGrid.querySelectorAll('.appliance-item').forEach(item => {
            item.addEventListener('click', function(e) {
                if (e.target.closest('.quantity-btn') || e.target.closest('.quantity-input')) {
                    return;
                }
                handleApplianceClick.call(this, e);
            });
        });
        
        // دکمه‌های کم و زیاد
        appliancesGrid.querySelectorAll('.quantity-btn').forEach(btn => {
            btn.addEventListener('click', handleQuantityChange);
        });
        
        // ورودی تعداد
        appliancesGrid.querySelectorAll('.quantity-input').forEach(input => {
            input.addEventListener('change', handleQuantityInputChange);
        });
        
        console.log('Event listeners added successfully');
    }, 50);
    
    updateStep1Summary();
}

function handleApplianceClick(event) {
    const applianceElement = event.currentTarget;
    const applianceId = parseInt(applianceElement.dataset.id);
    const appliance = appliances.find(a => a.id === applianceId);
    
    if (!appliance) {
        console.error('Appliance not found:', applianceId);
        return;
    }
    
    const isSelected = selectedAppliances[applianceId] ? true : false;
    
    if (isSelected) {
        // حذف از انتخاب‌ها
        delete selectedAppliances[applianceId];
        applianceElement.classList.remove('selected');
        applianceElement.querySelector('.appliance-checkbox').textContent = '';
        
        // مخفی کردن قسمت تعداد
        const quantityDiv = applianceElement.querySelector('.appliance-quantity');
        if (quantityDiv) {
            quantityDiv.style.display = 'none';
        }
        
        notify.success(`${appliance.name} از لیست انتخاب‌ها حذف شد`);
    } else {
        // اضافه به انتخاب‌ها
        selectedAppliances[applianceId] = {
            ...appliance,
            quantity: 1
        };
        applianceElement.classList.add('selected');
        applianceElement.querySelector('.appliance-checkbox').textContent = '✓';
        
        // نمایش قسمت تعداد
        const quantityDiv = applianceElement.querySelector('.appliance-quantity');
        if (quantityDiv) {
            quantityDiv.style.display = 'flex';
        }
        
        notify.success(`${appliance.name} به لیست انتخاب‌ها اضافه شد`);
    }
    
    updateStep1Summary();
}

function handleQuantityChange(event) {
    event.stopPropagation();
    event.preventDefault();
    
    const button = event.currentTarget;
    const applianceId = parseInt(button.dataset.id);
    
    if (!selectedAppliances[applianceId]) return;
    
    const isMinus = button.classList.contains('minus-btn');
    let newQuantity = selectedAppliances[applianceId].quantity;
    const appliance = appliances.find(a => a.id === applianceId);
    
    if (isMinus) {
        newQuantity = Math.max(0, newQuantity - 1);
        if (newQuantity === 0) {
            notify.info(`تعداد ${appliance.name} به صفر رسید و از لیست حذف شد`);
        }
    } else {
        newQuantity = Math.min(99, newQuantity + 1);
    }
    
    selectedAppliances[applianceId].quantity = newQuantity;
    
    // آپدیت مقدار در input
    const input = document.querySelector(`.quantity-input[data-id="${applianceId}"]`);
    if (input) {
        input.value = newQuantity;
    }
    
    // اگر تعداد صفر شد، از انتخاب‌ها حذف شود
    if (newQuantity === 0) {
        delete selectedAppliances[applianceId];
        const applianceElement = document.querySelector(`.appliance-item[data-id="${applianceId}"]`);
        if (applianceElement) {
            applianceElement.classList.remove('selected');
            applianceElement.querySelector('.appliance-checkbox').textContent = '';
            applianceElement.querySelector('.appliance-quantity').style.display = 'none';
        }
    }
    
    updateStep1Summary();
}

function handleQuantityInputChange(event) {
    const input = event.currentTarget;
    const applianceId = parseInt(input.dataset.id);
    const newQuantity = parseInt(input.value) || 0;
    const appliance = appliances.find(a => a.id === applianceId);
    
    if (!selectedAppliances[applianceId]) return;
    
    if (newQuantity > 0) {
        selectedAppliances[applianceId].quantity = Math.min(99, newQuantity);
        notify.info(`تعداد ${appliance.name} به ${newQuantity} عدد تنظیم شد`);
    } else {
        delete selectedAppliances[applianceId];
        const applianceElement = document.querySelector(`.appliance-item[data-id="${applianceId}"]`);
        if (applianceElement) {
            applianceElement.classList.remove('selected');
            applianceElement.querySelector('.appliance-checkbox').textContent = '';
            applianceElement.querySelector('.appliance-quantity').style.display = 'none';
        }
        notify.info(`${appliance.name} از لیست انتخاب‌ها حذف شد`);
    }
    
    updateStep1Summary();
}

function updateStep1Summary() {
    const totalAppliances = Object.keys(selectedAppliances).length;
    let totalPower = 0;
    
    Object.values(selectedAppliances).forEach(appliance => {
        totalPower += appliance.power * appliance.quantity;
    });
    
    // آپدیت آمار
    const countElement = document.getElementById('totalAppliancesCount');
    const powerElement = document.getElementById('totalPowerConsumption');
    
    if (countElement) countElement.textContent = formatNumber(totalAppliances);
    if (powerElement) powerElement.textContent = formatNumber(totalPower);
    
    // آپدیت لیست وسایل انتخاب شده
    const selectedList = document.getElementById('selectedAppliancesList');
    if (selectedList) {
        selectedList.innerHTML = '';
        
        if (totalAppliances === 0) {
            selectedList.innerHTML = '<p class="empty-summary">هنوز وسیله‌ای انتخاب نشده است.</p>';
        } else {
            Object.values(selectedAppliances).forEach(appliance => {
                const applianceElement = document.createElement('div');
                applianceElement.className = 'selected-appliance';
                applianceElement.innerHTML = `
                    <div class="appliance-name">${appliance.name}</div>
                    <div class="appliance-details">
                        <span class="quantity">${formatNumber(appliance.quantity)} عدد</span>
                        <span class="power">${formatNumber(appliance.power * appliance.quantity)} وات</span>
                    </div>
                `;
                selectedList.appendChild(applianceElement);
            });
        }
    }
    
    // فعال/غیرفعال کردن دکمه ادامه
    const nextButton = document.getElementById('nextToStep2');
    if (nextButton) {
        nextButton.disabled = totalAppliances === 0;
    }
    
    console.log(`Summary updated: ${totalAppliances} appliances, ${totalPower} watts`);
}

// =========================================
// مرحله 2: موقعیت جغرافیایی
// =========================================
function initializeProvinces() {
    const provinceSelect = document.getElementById('provinceSelect');
    const citySelect = document.getElementById('citySelect');
    
    if (!provinceSelect || !citySelect) {
        console.error('Province or city select elements not found!');
        return;
    }
    
    // پر کردن لیست استان‌ها
    provinceSelect.innerHTML = '<option value="">انتخاب استان...</option>';
    provinces.forEach(province => {
        const option = document.createElement('option');
        option.value = province.id;
        option.textContent = province.name;
        provinceSelect.appendChild(option);
    });
    
    // رویداد تغییر استان
    provinceSelect.addEventListener('change', function() {
        const provinceId = parseInt(this.value);
        const province = provinces.find(p => p.id === provinceId);
        
        citySelect.innerHTML = '<option value="">انتخاب شهر...</option>';
        citySelect.disabled = true;
        
        if (province) {
            province.cities.forEach(city => {
                const option = document.createElement('option');
                option.value = city.name;
                option.textContent = city.name;
                citySelect.appendChild(option);
            });
            
            citySelect.disabled = false;
            systemSettings.selectedCity = null;
            updateCityInfo(null);
            
            notify.info(`استان ${province.name} انتخاب شد`);
        }
        
        updateStep2NextButton();
    });
    
    // رویداد تغییر شهر
    citySelect.addEventListener('change', function() {
        const provinceId = parseInt(provinceSelect.value);
        const cityName = this.value;
        
        if (provinceId && cityName) {
            const province = provinces.find(p => p.id === provinceId);
            if (province) {
                const city = province.cities.find(c => c.name === cityName);
                if (city) {
                    systemSettings.selectedCity = city;
                    updateCityInfo(city);
                    notify.success(`شهر ${cityName} انتخاب شد`);
                }
            }
        }
        
        updateStep2NextButton();
    });
}

function updateCityInfo(city) {
    const elements = {
        sunRadiation: document.getElementById('sunRadiationValue'),
        sunHours: document.getElementById('sunHoursValue'),
        avgTemp: document.getElementById('avgTempValue'),
        altitude: document.getElementById('altitudeValue')
    };
    
    if (!city) {
        Object.values(elements).forEach(el => {
            if (el) el.textContent = '--';
        });
        return;
    }
    
    if (elements.sunRadiation) elements.sunRadiation.textContent = city.radiation.toFixed(1);
    if (elements.sunHours) elements.sunHours.textContent = city.sunHours.toFixed(1);
    if (elements.avgTemp) elements.avgTemp.textContent = city.avgTemp;
    if (elements.altitude) elements.altitude.textContent = formatNumber(city.altitude);
}

function updateStep2NextButton() {
    const nextButton = document.getElementById('nextToStep3');
    if (nextButton) {
        nextButton.disabled = !systemSettings.selectedCity;
    }
}

// =========================================
// مرحله 3: تنظیمات سیستم
// =========================================
function initializeSystemSettings() {
    // جهت نصب
    document.querySelectorAll('.option-item[data-direction]').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.option-item[data-direction]').forEach(opt => {
                opt.classList.remove('selected');
            });
            this.classList.add('selected');
            systemSettings.direction = this.dataset.direction;
            notify.info(`جهت نصب: ${this.querySelector('.option-title').textContent} انتخاب شد`);
        });
    });
    
    // نوع اینورتر
    document.querySelectorAll('.option-item[data-inverter]').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.option-item[data-inverter]').forEach(opt => {
                opt.classList.remove('selected');
            });
            this.classList.add('selected');
            systemSettings.inverter = this.dataset.inverter;
            notify.info(`نوع اینورتر: ${this.querySelector('.option-title').textContent} انتخاب شد`);
        });
    });
    
    // نوع پنل
    document.querySelectorAll('.option-item[data-panel]').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.option-item[data-panel]').forEach(opt => {
                opt.classList.remove('selected');
            });
            this.classList.add('selected');
            systemSettings.panel = this.dataset.panel;
            notify.info(`نوع پنل: ${this.querySelector('.option-title').textContent} انتخاب شد`);
        });
    });
    
    // نوع باتری
    document.querySelectorAll('.battery-option').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.battery-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            this.classList.add('selected');
            systemSettings.battery = this.dataset.battery;
            notify.info(`نوع باتری: ${this.querySelector('.battery-name').textContent} انتخاب شد`);
        });
    });
}

// =========================================
// مرحله 4: محاسبات و نتایج
// =========================================
function calculateSolarSystem() {
    if (!systemSettings.selectedCity) {
        notify.error('لطفاً ابتدا شهر را انتخاب کنید');
        return;
    }
    
    if (Object.keys(selectedAppliances).length === 0) {
        notify.error('لطفاً حداقل یک وسیله انتخاب کنید');
        goToStep(1);
        return;
    }
    
    notify.info('در حال محاسبه سیستم خورشیدی...', 2000);
    
    // محاسبه مصرف انرژی
    let totalPower = 0;
    let dailyEnergy = 0;
    
    Object.values(selectedAppliances).forEach(appliance => {
        const applianceDailyEnergy = appliance.power * appliance.quantity * 4;
        dailyEnergy += applianceDailyEnergy;
        totalPower += appliance.power * appliance.quantity;
    });
    
    // اضافه کردن 20% حاشیه اطمینان
    dailyEnergy *= 1.2;
    
    // اطلاعات شهر
    const city = systemSettings.selectedCity;
    
    // تنظیم ساعت آفتابی بر اساس جهت
    let sunHours = city.sunHours;
    switch(systemSettings.direction) {
        case 'south':
            sunHours *= 1.0;
            break;
        case 'east-west':
            sunHours *= 0.85;
            break;
        case 'flat':
            sunHours *= 0.7;
            break;
    }
    
    // مشخصات پنل
    const panelSpecs = {
        mono: { power: 400, efficiency: 0.20, name: "مونوکریستال" },
        poly: { power: 350, efficiency: 0.17, name: "پلی کریستال" },
        thin: { power: 300, efficiency: 0.14, name: "فیلم نازک" }
    };
    
    const panelType = panelSpecs[systemSettings.panel];
    
    // محاسبه نیاز به پنل
    const panelDailyEnergy = panelType.power * sunHours * (city.radiation / 5.0) * panelType.efficiency;
    const panelCount = Math.ceil(dailyEnergy / panelDailyEnergy);
    
    // محاسبه اینورتر
    const inverterPower = Math.max(1000, Math.ceil(totalPower * 1.2 / 1000) * 1000);
    
    // محاسبه باتری
    const batterySpecs = {
        'lead-acid': { 
            name: "باتری سربی اسیدی معمولی", 
            voltage: 12, 
            capacity: 100, 
            cycles: 500, 
            lifetime: "3-5 سال" 
        },
        'ups': { 
            name: "باتری یو پی اس", 
            voltage: 12, 
            capacity: 150, 
            cycles: 800, 
            lifetime: "4-6 سال" 
        },
        'lithium': { 
            name: "باتری لیتیوم فسفات آهن", 
            voltage: 12.8, 
            capacity: 100, 
            cycles: 3000, 
            lifetime: "8-10 سال" 
        }
    };
    
    const batteryType = batterySpecs[systemSettings.battery];
    const systemVoltage = 48;
    const autonomyDays = systemSettings.inverter === 'off-grid' ? 3 : 2;
    
    const batteryCapacityAh = Math.ceil((dailyEnergy * autonomyDays) / (systemVoltage * 0.8));
    const batteryUnits = Math.ceil(batteryCapacityAh / batteryType.capacity);
    const batterySeries = Math.ceil(systemVoltage / batteryType.voltage);
    const batteryParallel = Math.ceil(batteryUnits / batterySeries);
    const totalBatteryUnits = batterySeries * batteryParallel;
    const actualBatteryCapacity = totalBatteryUnits * batteryType.capacity;
    
    // محاسبه شارژ کنترلر
    const chargeControllerCurrent = Math.ceil((panelCount * panelType.power * 1.25) / systemVoltage);
    
    // ذخیره نتایج برای گزارش
    window.calculationResults = {
        totalPower,
        dailyEnergy,
        panelCount,
        panelType: panelType.name,
        panelPower: panelType.power,
        inverterPower,
        systemVoltage,
        batteryType: batteryType.name,
        batteryVoltage: batteryType.voltage,
        batteryCapacity: batteryType.capacity,
        totalBatteryUnits,
        batterySeries,
        batteryParallel,
        actualBatteryCapacity,
        chargeControllerCurrent,
        city: city.name,
        direction: systemSettings.direction,
        inverter: systemSettings.inverter,
        selectedAppliances: Object.values(selectedAppliances),
        calculationDate: new Date()
    };
    
    // نمایش نتایج
    const resultElements = {
        totalPower: document.getElementById('resultTotalPower'),
        panelCount: document.getElementById('resultPanelCount'),
        inverterPower: document.getElementById('resultInverterPower'),
        batteryCapacity: document.getElementById('resultBatteryCapacity'),
        panelType: document.getElementById('detailPanelType'),
        systemVoltage: document.getElementById('detailSystemVoltage'),
        inverterType: document.getElementById('detailInverterType'),
        chargeController: document.getElementById('detailChargeController'),
        batteryVoltage: document.getElementById('detailBatteryVoltage'),
        batteryCurrent: document.getElementById('detailBatteryCurrent'),
        batteryTypeDetail: document.getElementById('batteryTypeDetail'),
        batteryCountDetail: document.getElementById('batteryCountDetail'),
        batteryConfigDetail: document.getElementById('batteryConfigDetail'),
        batteryLifetimeDetail: document.getElementById('batteryLifetimeDetail')
    };
    
    // آپدیت مقادیر عددی
    if (resultElements.totalPower) resultElements.totalPower.textContent = formatNumber(totalPower);
    if (resultElements.panelCount) resultElements.panelCount.textContent = formatNumber(panelCount);
    if (resultElements.inverterPower) resultElements.inverterPower.textContent = formatNumber(inverterPower);
    if (resultElements.batteryCapacity) resultElements.batteryCapacity.textContent = formatNumber(actualBatteryCapacity);
    
    // آپدیت جزئیات فنی
    if (resultElements.panelType) resultElements.panelType.textContent = `${panelType.name} ${panelType.power} وات`;
    if (resultElements.systemVoltage) resultElements.systemVoltage.textContent = `${systemVoltage} ولت`;
    
    let inverterTypeText = "";
    switch(systemSettings.inverter) {
        case 'on-grid':
            inverterTypeText = "اینورتر انگرید (متصل به شبکه)";
            break;
        case 'off-grid':
            inverterTypeText = "اینورتر آفگرید (منفصل از شبکه)";
            break;
        case 'hybrid':
            inverterTypeText = "اینورتر هیبریدی";
            break;
    }
    
    if (resultElements.inverterType) resultElements.inverterType.textContent = `${inverterTypeText} ${inverterPower/1000} کیلووات`;
    if (resultElements.chargeController) resultElements.chargeController.textContent = `کنترلر MPPT ${chargeControllerCurrent} آمپر`;
    if (resultElements.batteryVoltage) resultElements.batteryVoltage.textContent = `${batteryType.voltage}V`;
    if (resultElements.batteryCurrent) resultElements.batteryCurrent.textContent = `${batteryType.capacity}A`;
    
    // آپدیت اطلاعات باتری
    if (resultElements.batteryTypeDetail) resultElements.batteryTypeDetail.textContent = batteryType.name;
    if (resultElements.batteryCountDetail) resultElements.batteryCountDetail.textContent = `${totalBatteryUnits} عدد باتری`;
    if (resultElements.batteryConfigDetail) resultElements.batteryConfigDetail.textContent = `${batterySeries} سری × ${batteryParallel} موازی`;
    if (resultElements.batteryLifetimeDetail) resultElements.batteryLifetimeDetail.textContent = `طول عمر: ${batteryType.lifetime}`;
    
    // آپدیت توصیه‌ها
    const recommendationsList = document.getElementById('recommendationsList');
    if (recommendationsList) {
        recommendationsList.innerHTML = '';
        
        const recommendations = [
            `برای افزایش راندمان سیستم، پنل‌ها را با زاویه ۳۰ درجه نصب کنید.`,
            `باتری‌ها را در محیطی خنک و خشک با دمای ۲۰-۲۵ درجه سانتی‌گراد نگهداری کنید.`,
            `هر ۶ ماه یکبار سیستم را توسط متخصص بررسی و تمیز کنید.`,
            `برای سیستم‌های آفگرید، حداقل ${autonomyDays} روز ذخیره انرژی در نظر گرفته شده است.`
        ];
        
        recommendations.forEach(rec => {
            const item = document.createElement('div');
            item.className = 'recommendation-item';
            item.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <span>${rec}</span>
            `;
            recommendationsList.appendChild(item);
        });
    }
    
    console.log('Calculations completed successfully');
    notify.success('محاسبات سیستم خورشیدی با موفقیت انجام شد!');
}

// =========================================
// سیستم گزارش‌گیری PDF و چاپ
// =========================================
function setupReportSystem() {
    // دکمه چاپ
    const printBtn = document.querySelector('.btn[title*="چاپ"]') || 
                     document.querySelector('.btn:has(.fa-print)');
    
    if (printBtn) {
        printBtn.addEventListener('click', generatePrintReport);
    }
    
    // دکمه PDF
    const pdfBtn = document.querySelector('.btn[title*="PDF"]') || 
                   document.querySelector('.btn:has(.fa-file-pdf)');
    
    if (pdfBtn) {
        pdfBtn.addEventListener('click', generatePDFReport);
    }
}

function generatePrintReport() {
    if (!window.calculationResults) {
        notify.error('ابتدا محاسبات را انجام دهید');
        return;
    }
    
    notify.info('در حال آماده‌سازی گزارش برای چاپ...');
    
    // ایجاد پنجره جدید برای چاپ
    const printWindow = window.open('', '_blank');
    const results = window.calculationResults;
    
    // تولید HTML گزارش
    const reportHTML = `
        <!DOCTYPE html>
        <html dir="rtl" lang="fa">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>گزارش سیستم خورشیدی</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800;900&display=swap');
                
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: 'Vazirmatn', sans-serif;
                }
                
                body {
                    padding: 30px;
                    background: #f8fafc;
                    color: #1e293b;
                    line-height: 1.6;
                }
                
                .report-container {
                    max-width: 1000px;
                    margin: 0 auto;
                    background: white;
                    border-radius: 20px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                    overflow: hidden;
                }
                
                .report-header {
                    background: linear-gradient(135deg, #007BFF, #00A9FF);
                    color: white;
                    padding: 40px;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                }
                
                .header-pattern {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 300px;
                    height: 300px;
                    background: rgba(255,255,255,0.1);
                    border-radius: 50%;
                    transform: translate(30%, -30%);
                }
                
                .report-title {
                    font-size: 2.5rem;
                    margin-bottom: 10px;
                    position: relative;
                    z-index: 1;
                }
                
                .report-subtitle {
                    font-size: 1.2rem;
                    opacity: 0.9;
                    position: relative;
                    z-index: 1;
                }
                
                .report-meta {
                    display: flex;
                    justify-content: center;
                    gap: 30px;
                    margin-top: 20px;
                    font-size: 0.9rem;
                    position: relative;
                    z-index: 1;
                }
                
                .report-content {
                    padding: 40px;
                }
                
                .section {
                    margin-bottom: 40px;
                    border-bottom: 2px solid #e2e8f0;
                    padding-bottom: 30px;
                }
                
                .section:last-child {
                    border-bottom: none;
                }
                
                .section-title {
                    font-size: 1.8rem;
                    color: #007BFF;
                    margin-bottom: 25px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                
                .section-title i {
                    background: rgba(0, 123, 255, 0.1);
                    width: 50px;
                    height: 50px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 20px;
                    margin-bottom: 30px;
                }
                
                .stat-card {
                    background: #f8fafc;
                    border-radius: 15px;
                    padding: 25px;
                    text-align: center;
                    border: 2px solid #e2e8f0;
                    transition: all 0.3s;
                }
                
                .stat-card.primary {
                    border-color: #007BFF;
                    background: rgba(0, 123, 255, 0.05);
                }
                
                .stat-value {
                    font-size: 2.2rem;
                    font-weight: 800;
                    color: #007BFF;
                    margin: 10px 0;
                }
                
                .stat-label {
                    color: #64748b;
                    font-size: 0.95rem;
                }
                
                .table-container {
                    overflow-x: auto;
                    margin: 20px 0;
                }
                
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 20px 0;
                }
                
                th {
                    background: #007BFF;
                    color: white;
                    padding: 15px;
                    text-align: right;
                }
                
                td {
                    padding: 12px 15px;
                    border-bottom: 1px solid #e2e8f0;
                }
                
                tr:nth-child(even) {
                    background: #f8fafc;
                }
                
                .recommendation-item {
                    background: #f0f9ff;
                    border-right: 4px solid #007BFF;
                    padding: 15px;
                    margin-bottom: 10px;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                
                .recommendation-item i {
                    color: #007BFF;
                    font-size: 1.2rem;
                }
                
                .footer-note {
                    text-align: center;
                    padding: 30px;
                    background: #f8fafc;
                    border-top: 2px solid #e2e8f0;
                    color: #64748b;
                    font-size: 0.9rem;
                    margin-top: 40px;
                }
                
                @media print {
                    body {
                        padding: 0;
                    }
                    
                    .report-container {
                        box-shadow: none;
                        border-radius: 0;
                    }
                    
                    .no-print {
                        display: none;
                    }
                }
            </style>
        </head>
        <body>
            <div class="report-container">
                <div class="report-header">
                    <div class="header-pattern"></div>
                    <h1 class="report-title">
                        <i class="fas fa-solar-panel"></i> گزارش سیستم خورشیدی
                    </h1>
                    <p class="report-subtitle">تحلیل فنی و محاسبات سیستم انرژی خورشیدی</p>
                    <div class="report-meta">
                        <div><i class="fas fa-calendar"></i> تاریخ گزارش: ${formatDate()}</div>
                        <div><i class="fas fa-map-marker-alt"></i> موقعیت: ${results.city}</div>
                        <div><i class="fas fa-user"></i> تهیه شده توسط: سیستم Parsdiode</div>
                    </div>
                </div>
                
                <div class="report-content">
                    <div class="section">
                        <h2 class="section-title">
                            <i class="fas fa-chart-line"></i> خلاصه نتایج
                        </h2>
                        <div class="stats-grid">
                            <div class="stat-card primary">
                                <div class="stat-label">توان مصرفی کل</div>
                                <div class="stat-value">${formatNumber(results.totalPower)}</div>
                                <div class="stat-label">وات</div>
                            </div>
                            <div class="stat-card">
                                <div class="stat-label">تعداد پنل‌ها</div>
                                <div class="stat-value">${formatNumber(results.panelCount)}</div>
                                <div class="stat-label">عدد</div>
                            </div>
                            <div class="stat-card">
                                <div class="stat-label">اینورتر مورد نیاز</div>
                                <div class="stat-value">${formatNumber(results.inverterPower)}</div>
                                <div class="stat-label">وات</div>
                            </div>
                            <div class="stat-card">
                                <div class="stat-label">ظرفیت باتری</div>
                                <div class="stat-value">${formatNumber(results.actualBatteryCapacity)}</div>
                                <div class="stat-label">آمپر-ساعت</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="section">
                        <h2 class="section-title">
                            <i class="fas fa-cogs"></i> جزئیات فنی
                        </h2>
                        <div class="table-container">
                            <table>
                                <tr>
                                    <th>مورد</th>
                                    <th>مشخصات</th>
                                    <th>توضیحات</th>
                                </tr>
                                <tr>
                                    <td>نوع پنل</td>
                                    <td>${results.panelType} ${results.panelPower} وات</td>
                                    <td>با راندمان بالا و گارانتی طولانی</td>
                                </tr>
                                <tr>
                                    <td>ولتاژ سیستم</td>
                                    <td>${results.systemVoltage} ولت</td>
                                    <td>مناسب برای سیستم‌های خانگی متوسط</td>
                                </tr>
                                <tr>
                                    <td>نوع اینورتر</td>
                                    <td>${results.inverter === 'on-grid' ? 'انگرید (متصل به شبکه)' : 
                                         results.inverter === 'off-grid' ? 'آفگرید (منفصل از شبکه)' : 
                                         'هیبریدی'} ${results.inverterPower/1000} کیلووات</td>
                                    <td>مناسب برای لوازم حساس الکترونیکی</td>
                                </tr>
                                <tr>
                                    <td>شارژ کنترلر</td>
                                    <td>MPPT ${results.chargeControllerCurrent} آمپر</td>
                                    <td>با راندمان بالا در تبدیل ولتاژ</td>
                                </tr>
                                <tr>
                                    <td>نوع باتری</td>
                                    <td>${results.batteryType}</td>
                                    <td>${results.batteryVoltage}V ${results.batteryCapacity}Ah</td>
                                </tr>
                                <tr>
                                    <td>پیکربندی باتری</td>
                                    <td>${results.batterySeries} سری × ${results.batteryParallel} موازی</td>
                                    <td>مجموع ${results.totalBatteryUnits} عدد باتری</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    
                    <div class="section">
                        <h2 class="section-title">
                            <i class="fas fa-plug"></i> وسایل انتخاب شده
                        </h2>
                        <div class="table-container">
                            <table>
                                <tr>
                                    <th>نام وسیله</th>
                                    <th>توان (وات)</th>
                                    <th>تعداد</th>
                                    <th>توان کل</th>
                                </tr>
                                ${results.selectedAppliances.map(appliance => `
                                    <tr>
                                        <td>${appliance.name}</td>
                                        <td>${formatNumber(appliance.power)}</td>
                                        <td>${formatNumber(appliance.quantity)}</td>
                                        <td>${formatNumber(appliance.power * appliance.quantity)}</td>
                                    </tr>
                                `).join('')}
                                <tr style="font-weight: bold; background: #f0f9ff;">
                                    <td colspan="3">مجموع توان مصرفی</td>
                                    <td>${formatNumber(results.totalPower)} وات</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    
                    <div class="section">
                        <h2 class="section-title">
                            <i class="fas fa-lightbulb"></i> توصیه‌های فنی
                        </h2>
                        <div class="recommendation-item">
                            <i class="fas fa-check-circle"></i>
                            <span>برای افزایش راندمان سیستم، پنل‌ها را با زاویه ۳۰ درجه نصب کنید.</span>
                        </div>
                        <div class="recommendation-item">
                            <i class="fas fa-check-circle"></i>
                            <span>باتری‌ها را در محیطی خنک و خشک با دمای ۲۰-۲۵ درجه سانتی‌گراد نگهداری کنید.</span>
                        </div>
                        <div class="recommendation-item">
                            <i class="fas fa-check-circle"></i>
                            <span>هر ۶ ماه یکبار سیستم را توسط متخصص بررسی و تمیز کنید.</span>
                        </div>
                        <div class="recommendation-item">
                            <i class="fas fa-check-circle"></i>
                            <span>در صورت استفاده از سیستم انگرید، مجوز اتصال به شبکه را از سازمان انرژی‌های تجدیدپذیر دریافت کنید.</span>
                        </div>
                    </div>
                </div>
                
                <div class="footer-note">
                    <p>این گزارش توسط سیستم هوشمند محاسبات خورشیدی Parsdiode تولید شده است.</p>
                    <p>تمامی محاسبات بر اساس استانداردهای فنی و با در نظر گرفتن ضریب اطمینان انجام شده است.</p>
                    <p>© ${new Date().getFullYear()} Parsdiode - کلیه حقوق محفوظ است</p>
                </div>
            </div>
            
            <script>
                // چاپ خودکار بعد از لود صفحه
                window.onload = function() {
                    setTimeout(() => {
                        window.print();
                        setTimeout(() => {
                            window.close();
                        }, 500);
                    }, 1000);
                };
            </script>
        </body>
        </html>
    `;
    
    printWindow.document.write(reportHTML);
    printWindow.document.close();
}

function generatePDFReport() {
    if (!window.calculationResults) {
        notify.error('ابتدا محاسبات را انجام دهید');
        return;
    }
    
    notify.info('در حال آماده‌سازی PDF گزارش...', 3000);
    
    // استفاده از jsPDF برای تولید PDF
    if (typeof window.jspdf === 'undefined') {
        // لود کتابخانه jsPDF
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
        script.onload = () => {
            generatePDF();
        };
        document.head.appendChild(script);
    } else {
        generatePDF();
    }
    
    function generatePDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('p', 'mm', 'a4');
        const results = window.calculationResults;
        
        // تنظیمات فونت فارسی
        doc.setFont('helvetica', 'normal');
        
        // رنگ‌ها
        const primaryColor = [0, 123, 255];
        const secondaryColor = [100, 116, 139];
        
        // هدر گزارش
        doc.setFillColor(...primaryColor);
        doc.rect(10, 10, 190, 40, 'F');
        
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(24);
        doc.text('گزارش سیستم خورشیدی', 105, 25, { align: 'center' });
        
        doc.setFontSize(12);
        doc.text('تحلیل فنی و محاسبات سیستم انرژی خورشیدی', 105, 35, { align: 'center' });
        
        // متادیتا
        doc.setTextColor(...secondaryColor);
        doc.setFontSize(10);
        doc.text(`تاریخ گزارش: ${formatDate()}`, 15, 55);
        doc.text(`موقعیت: ${results.city}`, 105, 55, { align: 'center' });
        doc.text('تهیه شده توسط: سیستم Parsdiode', 185, 55, { align: 'right' });
        
        // خط جداکننده
        doc.setDrawColor(...primaryColor);
        doc.setLineWidth(0.5);
        doc.line(10, 60, 200, 60);
        
        let yPos = 70;
        
        // خلاصه نتایج
        doc.setTextColor(...primaryColor);
        doc.setFontSize(16);
        doc.text('خلاصه نتایج', 15, yPos);
        yPos += 10;
        
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        
        // جدول خلاصه نتایج
        const summaryData = [
            ['توان مصرفی کل', `${formatNumber(results.totalPower)} وات`],
            ['تعداد پنل‌ها', `${formatNumber(results.panelCount)} عدد`],
            ['اینورتر مورد نیاز', `${formatNumber(results.inverterPower)} وات`],
            ['ظرفیت باتری', `${formatNumber(results.actualBatteryCapacity)} آمپر-ساعت`]
        ];
        
        summaryData.forEach(([label, value], index) => {
            doc.setFillColor(index === 0 ? [...primaryColor, 0.1] : [248, 250, 252]);
            doc.rect(15, yPos, 80, 15, 'F');
            doc.rect(95, yPos, 95, 15, 'F');
            
            doc.setTextColor(...secondaryColor);
            doc.text(label, 20, yPos + 10);
            
            doc.setTextColor(...primaryColor);
            doc.setFontSize(12);
            doc.text(value, 100, yPos + 10, { align: 'right' });
            doc.setFontSize(10);
            
            yPos += 20;
        });
        
        yPos += 10;
        
        // جزئیات فنی
        doc.setTextColor(...primaryColor);
        doc.setFontSize(16);
        doc.text('جزئیات فنی', 15, yPos);
        yPos += 10;
        
        const technicalData = [
            ['نوع پنل', `${results.panelType} ${results.panelPower} وات`],
            ['ولتاژ سیستم', `${results.systemVoltage} ولت`],
            ['نوع اینورتر', `${results.inverter === 'on-grid' ? 'انگرید' : 
                             results.inverter === 'off-grid' ? 'آفگرید' : 'هیبریدی'} ${results.inverterPower/1000} کیلووات`],
            ['شارژ کنترلر', `MPPT ${results.chargeControllerCurrent} آمپر`],
            ['نوع باتری', `${results.batteryType}`],
            ['پیکربندی باتری', `${results.batterySeries} سری × ${results.batteryParallel} موازی`]
        ];
        
        technicalData.forEach(([label, value], index) => {
            doc.setFillColor(index % 2 === 0 ? [248, 250, 252] : [255, 255, 255]);
            doc.rect(15, yPos, 80, 10, 'F');
            doc.rect(95, yPos, 95, 10, 'F');
            
            doc.setTextColor(...secondaryColor);
            doc.text(label, 20, yPos + 7);
            
            doc.setTextColor(0, 0, 0);
            doc.text(value, 100, yPos + 7, { align: 'right' });
            
            yPos += 12;
        });
        
        yPos += 15;
        
        // وسایل انتخاب شده
        if (yPos > 250) {
            doc.addPage();
            yPos = 20;
        }
        
        doc.setTextColor(...primaryColor);
        doc.setFontSize(16);
        doc.text('وسایل انتخاب شده', 15, yPos);
        yPos += 10;
        
        // هدر جدول وسایل
        doc.setFillColor(...primaryColor);
        doc.rect(15, yPos, 175, 8, 'F');
        doc.setTextColor(255, 255, 255);
        doc.text('نام وسیله', 25, yPos + 6);
        doc.text('توان (وات)', 80, yPos + 6, { align: 'center' });
        doc.text('تعداد', 120, yPos + 6, { align: 'center' });
        doc.text('توان کل', 160, yPos + 6, { align: 'center' });
        yPos += 10;
        
        // ردیف‌های وسایل
        doc.setTextColor(0, 0, 0);
        results.selectedAppliances.forEach((appliance, index) => {
            if (yPos > 270 && index < results.selectedAppliances.length - 1) {
                doc.addPage();
                yPos = 20;
            }
            
            doc.setFillColor(index % 2 === 0 ? [248, 250, 252] : [255, 255, 255]);
            doc.rect(15, yPos, 175, 8, 'F');
            
            doc.text(appliance.name, 25, yPos + 6);
            doc.text(formatNumber(appliance.power), 80, yPos + 6, { align: 'center' });
            doc.text(formatNumber(appliance.quantity), 120, yPos + 6, { align: 'center' });
            doc.text(formatNumber(appliance.power * appliance.quantity), 160, yPos + 6, { align: 'center' });
            
            yPos += 10;
        });
        
        yPos += 5;
        
        // ردیف مجموع
        doc.setFillColor([...primaryColor, 0.1]);
        doc.rect(15, yPos, 175, 8, 'F');
        doc.setTextColor(...primaryColor);
        doc.setFontSize(11);
        doc.setFont('helvetica', 'bold');
        doc.text('مجموع توان مصرفی', 25, yPos + 6);
        doc.text(`${formatNumber(results.totalPower)} وات`, 160, yPos + 6, { align: 'center' });
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        
        yPos += 20;
        
        // توصیه‌ها
        if (yPos > 230) {
            doc.addPage();
            yPos = 20;
        }
        
        doc.setTextColor(...primaryColor);
        doc.setFontSize(16);
        doc.text('توصیه‌های فنی', 15, yPos);
        yPos += 10;
        
        const recommendations = [
            'برای افزایش راندمان سیستم، پنل‌ها را با زاویه ۳۰ درجه نصب کنید.',
            'باتری‌ها را در محیطی خنک و خشک با دمای ۲۰-۲۵ درجه سانتی‌گراد نگهداری کنید.',
            'هر ۶ ماه یکبار سیستم را توسط متخصص بررسی و تمیز کنید.',
            'در صورت استفاده از سیستم انگرید، مجوز اتصال به شبکه را دریافت کنید.'
        ];
        
        recommendations.forEach(rec => {
            doc.setTextColor(0, 0, 0);
            doc.text('• ' + rec, 20, yPos);
            yPos += 8;
        });
        
        yPos += 15;
        
        // فوتر
        doc.setDrawColor(...secondaryColor);
        doc.setLineWidth(0.2);
        doc.line(10, 280, 200, 280);
        
        doc.setTextColor(...secondaryColor);
        doc.setFontSize(9);
        doc.text('این گزارش توسط سیستم هوشمند محاسبات خورشیدی Parsdiode تولید شده است.', 105, 285, { align: 'center' });
        doc.text(`© ${new Date().getFullYear()} Parsdiode - کلیه حقوق محفوظ است`, 105, 290, { align: 'center' });
        
        // ذخیره PDF
        const fileName = `گزارش_سیستم_خورشیدی_${results.city}_${new Date().toISOString().split('T')[0]}.pdf`;
        doc.save(fileName);
        
        notify.success(`PDF گزارش با نام ${fileName} دانلود شد`);
    }
}

// =========================================
// مدیریت ناوبری
// =========================================
function initializeNavigation() {
    // مرحله 1 به 2
    const nextToStep2 = document.getElementById('nextToStep2');
    if (nextToStep2) {
        nextToStep2.addEventListener('click', () => {
            if (Object.keys(selectedAppliances).length > 0) {
                goToStep(2);
                notify.success('به مرحله موقعیت جغرافیایی وارد شدید');
            } else {
                notify.error('لطفاً حداقل یک وسیله انتخاب کنید');
            }
        });
    }
    
    // بازنشانی مرحله 1
    const resetStep1 = document.getElementById('resetStep1');
    if (resetStep1) {
        resetStep1.addEventListener('click', () => {
            selectedAppliances = {};
            initializeAppliances();
            notify.info('همه وسایل بازنشانی شدند');
        });
    }
    
    // مرحله 2 به 1
    const backToStep1 = document.getElementById('backToStep1');
    if (backToStep1) {
        backToStep1.addEventListener('click', () => {
            goToStep(1);
            notify.info('به مرحله انتخاب وسایل بازگشتید');
        });
    }
    
    // مرحله 2 به 3
    const nextToStep3 = document.getElementById('nextToStep3');
    if (nextToStep3) {
        nextToStep3.addEventListener('click', () => {
            if (systemSettings.selectedCity) {
                goToStep(3);
                notify.success('به مرحله تنظیمات سیستم وارد شدید');
            } else {
                notify.error('لطفاً شهر را انتخاب کنید');
            }
        });
    }
    
    // مرحله 3 به 2
    const backToStep2 = document.getElementById('backToStep2');
    if (backToStep2) {
        backToStep2.addEventListener('click', () => {
            goToStep(2);
            notify.info('به مرحله موقعیت جغرافیایی بازگشتید');
        });
    }
    
    // محاسبه نتایج
    const calculateResults = document.getElementById('calculateResults');
    if (calculateResults) {
        calculateResults.addEventListener('click', () => {
            calculateSolarSystem();
            goToStep(4);
            notify.success('به مرحله نتایج وارد شدید');
        });
    }
    
    // شروع مجدد
    const restartCalculation = document.getElementById('restartCalculation');
    if (restartCalculation) {
        restartCalculation.addEventListener('click', () => {
            // ریست همه چیز
            selectedAppliances = {};
            systemSettings.selectedCity = null;
            systemSettings.direction = "south";
            systemSettings.inverter = "on-grid";
            systemSettings.panel = "mono";
            systemSettings.battery = "lead-acid";
            
            // ریست فرم‌ها
            const provinceSelect = document.getElementById('provinceSelect');
            const citySelect = document.getElementById('citySelect');
            
            if (provinceSelect) provinceSelect.selectedIndex = 0;
            if (citySelect) {
                citySelect.innerHTML = '<option value="">ابتدا استان را انتخاب کنید</option>';
                citySelect.disabled = true;
            }
            
            // ریست تنظیمات
            document.querySelectorAll('.option-item, .battery-option').forEach(item => {
                item.classList.remove('selected');
            });
            
            // تنظیم مقادیر پیش‌فرض
            document.querySelector('.option-item[data-direction="south"]')?.classList.add('selected');
            document.querySelector('.option-item[data-inverter="on-grid"]')?.classList.add('selected');
            document.querySelector('.option-item[data-panel="mono"]')?.classList.add('selected');
            document.querySelector('.battery-option[data-battery="lead-acid"]')?.classList.add('selected');
            
            // بازگشت به مرحله 1
            initializeAppliances();
            updateCityInfo(null);
            goToStep(1);
            
            notify.success('محاسبات جدید شروع شد');
        });
    }
    
    // راه‌اندازی سیستم گزارش‌گیری
    setupReportSystem();
}

// =========================================
// مدیریت هدر و تم
// =========================================
function initializeHeader() {
    // تغییر تم
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.body.setAttribute('data-theme', savedTheme);
        
        themeToggle.innerHTML = savedTheme === 'light' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
        
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            document.body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeToggle.innerHTML = newTheme === 'light' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
            
            notify.info(`تم ${newTheme === 'light' ? 'روشن' : 'تاریک'} فعال شد`);
        });
    }
    
    // منوی موبایل
    const mobileToggleBtn = document.getElementById('mobileToggleBtn');
    const closeNavBtn = document.getElementById('closeNavBtn');
    const mainNav = document.getElementById('mainNav');
    
    if (mobileToggleBtn && mainNav) {
        mobileToggleBtn.addEventListener('click', () => {
            mainNav.classList.add('is-open');
            notify.info('منو باز شد');
        });
    }
    
    if (closeNavBtn && mainNav) {
        closeNavBtn.addEventListener('click', () => {
            mainNav.classList.remove('is-open');
            notify.info('منو بسته شد');
        });
    }
    
    // بستن منو با کلیک خارج
    document.addEventListener('click', (event) => {
        if (mainNav && mainNav.classList.contains('is-open')) {
            if (!event.target.closest('.glass-nav') && !event.target.closest('.mobile-toggle-btn')) {
                mainNav.classList.remove('is-open');
            }
        }
    });
    
    // جستجوی اسپات‌لایت
    const searchToggle = document.getElementById('searchToggle');
    const spotlightOverlay = document.getElementById('spotlightOverlay');
    const closeSpotlight = document.getElementById('closeSpotlight');
    
    if (searchToggle && spotlightOverlay) {
        searchToggle.addEventListener('click', () => {
            spotlightOverlay.classList.add('active');
            notify.info('جستجوی سریع فعال شد');
        });
    }
    
    if (closeSpotlight && spotlightOverlay) {
        closeSpotlight.addEventListener('click', () => {
            spotlightOverlay.classList.remove('active');
        });
    }
    
    // بستن با ESC
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            if (spotlightOverlay) spotlightOverlay.classList.remove('active');
            if (mainNav) mainNav.classList.remove('is-open');
        }
    });
}

// =========================================
// دکمه بازگشت به بالا
// =========================================
function initializeScrollTopButton() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });
        
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            notify.info('به بالای صفحه بازگشتید');
        });
    }
}

// =========================================
// اضافه کردن انیمیشن‌های CSS برای نوتیفیکیشن
// =========================================
function addNotificationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .notification-close:hover {
            opacity: 1 !important;
        }
    `;
    document.head.appendChild(style);
}

// =========================================
// راه‌اندازی برنامه
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing application...');
    
    // اضافه کردن استایل‌های نوتیفیکیشن
    addNotificationStyles();
    
    // راه‌اندازی همه بخش‌ها
    initializeHeader();
    initializeAppliances();
    initializeProvinces();
    initializeSystemSettings();
    initializeNavigation();
    initializeScrollTopButton();
    
    // شروع از مرحله 1
    goToStep(1);
    
    // نمایش پیام خوشامدگویی
    setTimeout(() => {
        notify.success('به سیستم محاسبات خورشیدی Parsdiode خوش آمدید!');
    }, 1000);
    
    console.log('Application initialized successfully');
});

// تابع کمکی برای دیباگ
window.debugApp = function() {
    console.log('=== DEBUG INFO ===');
    console.log('Selected appliances:', selectedAppliances);
    console.log('System settings:', systemSettings);
    console.log('Current step:', currentStep);
    console.log('Calculation results:', window.calculationResults || 'No calculations yet');
    console.log('=== END DEBUG ===');
};