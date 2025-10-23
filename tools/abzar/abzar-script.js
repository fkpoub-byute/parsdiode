/**
 * ماشین حساب سیستم‌های فتوولتائیک - نسخه پیشرفته
 * @author ParsDiode
 * @version 1.0.0
 */

class SolarCalculator {
    constructor() {
        this.selectedAppliances = new Map();
        this.selectedLocation = null;
        this.selectedOrientation = 'south';
        this.systemType = 'on-grid';
        this.calculationResults = null;
        this.isLoading = false;
        
        this.initializeElements();
        this.loadAppliances();
        this.setupEventListeners();
        this.initializeTooltips();
        this.setupAccessibility();
        this.initializeTheme();
    }

    /**
     * مقداردهی اولیه تم
     */
    initializeTheme() {
        // تم دیفالت لایت
        document.body.classList.add('light-theme');
        
        // اضافه کردن event listener برای دکمه تم
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                document.body.classList.toggle('dark-theme');
                const isDark = document.body.classList.contains('dark-theme');
                themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
                themeToggle.setAttribute('aria-label', isDark ? 'حالت روشن' : 'حالت تاریک');
            });
        }
    }

    /**
     * مقداردهی اولیه عناصر DOM
     */
    initializeElements() {
        // Containers
        this.appliancesContainer = document.getElementById('appliances-container');
        this.resultsSection = document.getElementById('results-section');
        
        // Form Elements
        this.provinceSelect = document.getElementById('province-select');
        this.citySelect = document.getElementById('city-select');
        this.orientationSelect = document.getElementById('orientation-select');
        this.systemTypeInputs = document.querySelectorAll('input[name="system-type"]');
        this.calculateBtn = document.getElementById('calculate-btn');
        
        // Result Containers
        this.panelResults = document.getElementById('panel-results');
        this.inverterResults = document.getElementById('inverter-results');
        this.batteryResults = document.getElementById('battery-results');
        this.summaryResults = document.getElementById('summary-results');
        
        // Loading Indicator
        this.loadingIndicator = null;
    }

    /**
     * بارگذاری وسایل برقی
     */
    loadAppliances() {
        try {
            const appliances = window.solarCalculatorData.appliances;
            this.appliancesContainer.innerHTML = '';
            
            appliances.forEach(appliance => {
                const applianceElement = this.createApplianceElement(appliance);
                this.appliancesContainer.appendChild(applianceElement);
            });
            
            this.showToast('وسایل برقی با موفقیت بارگذاری شدند', 'success');
        } catch (error) {
            console.error('Error loading appliances:', error);
            this.showToast('خطا در بارگذاری وسایل برقی', 'error');
        }
    }

    /**
     * ایجاد عنصر وسیله برقی
     * @param {Object} appliance - اطلاعات وسیله برقی
     * @returns {HTMLElement} - عنصر DOM ایجاد شده
     */
    createApplianceElement(appliance) {
        const div = document.createElement('div');
        div.className = 'appliance-item';
        div.dataset.id = appliance.id;
        div.setAttribute('role', 'region');
        div.setAttribute('aria-labelledby', `appliance-name-${appliance.id}`);
        
        const checkboxId = `checkbox-${appliance.id}`;
        const quantityId = `quantity-${appliance.id}`;
        
        div.innerHTML = `
            <div class="appliance-header">
                <div class="appliance-icon" aria-hidden="true">
                    <i class="${this.getApplianceIcon(appliance.id)}"></i>
                </div>
                <div class="appliance-info">
                    <h3 id="appliance-name-${appliance.id}">${appliance.name}</h3>
                    <p>${appliance.power} وات × ${appliance.dailyUsage} ساعت = 
                       <strong>${(appliance.power * appliance.dailyUsage).toLocaleString('fa-IR')} وات‌ساعت/روز</strong></p>
                </div>
            </div>
            <div class="appliance-controls">
                <div class="appliance-checkbox" 
                     id="${checkboxId}" 
                     role="checkbox" 
                     aria-checked="false" 
                     tabindex="0"
                     aria-label="انتخاب ${appliance.name}">
                </div>
                ${appliance.isQuantity ? `
                    <div class="appliance-quantity" role="group" aria-label="تعداد ${appliance.name}">
                        <button class="quantity-btn minus" 
                                data-id="${appliance.id}" 
                                aria-label="کاهش تعداد">
                            <i class="fas fa-minus"></i>
                        </button>
                        <input type="number" 
                               class="quantity-input" 
                               id="${quantityId}" 
                               value="${appliance.defaultQuantity || 1}" 
                               min="1" 
                               max="50"
                               aria-label="تعداد ${appliance.name}">
                        <button class="quantity-btn plus" 
                                data-id="${appliance.id}" 
                                aria-label="افزایش تعداد">
                            <i class="fas fa-plus"></i>
                        </button>
                        <span aria-hidden="true">عدد</span>
                    </div>
                ` : ''}
            </div>
        `;
        
        // اضافه کردن event listener برای چک باکس
        const checkbox = div.querySelector(`#${checkboxId}`);
        checkbox.addEventListener('click', () => {
            this.toggleAppliance(appliance.id, checkbox);
        });
        
        // اضافه کردن keyboard support
        checkbox.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.toggleAppliance(appliance.id, checkbox);
            }
        });
        
        // اضافه کردن event listener برای دکمه‌های کم و زیاد
        if (appliance.isQuantity) {
            const minusBtn = div.querySelector('.minus');
            const plusBtn = div.querySelector('.plus');
            const quantityInput = div.querySelector(`#${quantityId}`);
            
            minusBtn.addEventListener('click', () => {
                this.updateQuantity(appliance.id, -1);
            });
            
            plusBtn.addEventListener('click', () => {
                this.updateQuantity(appliance.id, 1);
            });
            
            quantityInput.addEventListener('change', (e) => {
                const value = parseInt(e.target.value) || 1;
                e.target.value = Math.max(1, Math.min(50, value));
                this.updateApplianceQuantity(appliance.id, parseInt(e.target.value));
            });
            
            // Keyboard support for quantity controls
            minusBtn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.updateQuantity(appliance.id, -1);
                }
            });
            
            plusBtn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.updateQuantity(appliance.id, 1);
                }
            });
        }
        
        return div;
    }

    /**
     * دریافت آیکون مناسب برای وسیله برقی
     * @param {string} applianceId - شناسه وسیله برقی
     * @returns {string} - کلاس آیکون Font Awesome
     */
    getApplianceIcon(applianceId) {
        const iconMap = {
            'tv': 'fas fa-tv',
            'refrigerator': 'fas fa-snowflake',
            'washing-machine': 'fas fa-tshirt',
            'light-bulb': 'fas fa-lightbulb',
            'laptop': 'fas fa-laptop',
            'air-conditioner': 'fas fa-wind',
            'microwave': 'fas fa-utensils',
            'water-heater': 'fas fa-shower',
            'fan': 'fas fa-fan',
            'charger': 'fas fa-mobile-alt',
            'default': 'fas fa-plug'
        };
        
        return iconMap[applianceId] || iconMap.default;
    }

    /**
     * تغییر وضعیت انتخاب وسیله برقی
     * @param {string} id - شناسه وسیله برقی
     * @param {HTMLElement} checkboxElement - عنصر چک باکس
     */
    toggleAppliance(id, checkboxElement) {
        const wasSelected = this.selectedAppliances.has(id);
        
        if (wasSelected) {
            this.selectedAppliances.delete(id);
            checkboxElement.classList.remove('checked');
            checkboxElement.setAttribute('aria-checked', 'false');
            this.showToast(`${this.getApplianceName(id)} از انتخاب حذف شد`, 'warning');
        } else {
            this.selectedAppliances.set(id, { quantity: 1 });
            checkboxElement.classList.add('checked');
            checkboxElement.setAttribute('aria-checked', 'true');
            this.showToast(`${this.getApplianceName(id)} انتخاب شد`, 'success');
        }
        
        // به‌روزرسانی UI
        this.updateSelectedCount();
    }

    /**
     * دریافت نام وسیله برقی
     * @param {string} id - شناسه وسیله برقی
     * @returns {string} - نام وسیله برقی
     */
    getApplianceName(id) {
        const appliance = window.solarCalculatorData.appliances.find(a => a.id === id);
        return appliance ? appliance.name : 'وسیله برقی';
    }

    /**
     * به‌روزرسانی تعداد وسایل انتخاب شده
     */
    updateSelectedCount() {
        const count = this.selectedAppliances.size;
        const countElement = document.querySelector('.selected-count');
        
        if (countElement) {
            countElement.textContent = count;
        }
    }

    /**
     * به‌روزرسانی تعداد وسیله برقی
     * @param {string} id - شناسه وسیله برقی
     * @param {number} change - مقدار تغییر (مثبت یا منفی)
     */
    updateQuantity(id, change) {
        if (this.selectedAppliances.has(id)) {
            const current = this.selectedAppliances.get(id);
            const newQuantity = Math.max(1, current.quantity + change);
            this.selectedAppliances.set(id, { quantity: newQuantity });
            
            const quantityInput = document.getElementById(`quantity-${id}`);
            if (quantityInput) {
                quantityInput.value = newQuantity;
            }
            
            this.showToast(`تعداد ${this.getApplianceName(id)} به ${newQuantity} تغییر کرد`, 'info');
        }
    }

    /**
     * به‌روزرسانی تعداد وسیله برقی با مقدار مشخص
     * @param {string} id - شناسه وسیله برقی
     * @param {number} quantity - تعداد جدید
     */
    updateApplianceQuantity(id, quantity) {
        if (this.selectedAppliances.has(id)) {
            this.selectedAppliances.set(id, { quantity: quantity });
            this.showToast(`تعداد ${this.getApplianceName(id)} به ${quantity} تغییر کرد`, 'info');
        }
    }

    /**
     * تنظیم event listenerها
     */
    setupEventListeners() {
        // انتخاب استان
        this.provinceSelect.addEventListener('change', (e) => {
            this.loadCities(e.target.value);
        });
        
        // انتخاب جهت نصب
        this.orientationSelect.addEventListener('change', (e) => {
            this.selectedOrientation = e.target.value;
            this.showToast(`جهت نصب به ${this.getSelectedOrientationText()} تغییر کرد`, 'info');
        });
        
        // انتخاب نوع سیستم
        this.systemTypeInputs.forEach(input => {
            input.addEventListener('change', (e) => {
                this.systemType = e.target.value;
                this.showToast(`نوع سیستم به ${this.getSelectedSystemTypeText()} تغییر کرد`, 'info');
            });
        });
        
        // دکمه محاسبه
        this.calculateBtn.addEventListener('click', () => {
            this.calculateSystem();
        });
        
        // Keyboard support for calculate button
        this.calculateBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.calculateSystem();
            }
        });
        
        // Form submission prevention
        document.querySelector('form')?.addEventListener('submit', (e) => {
            e.preventDefault();
        });
    }

    /**
     * بارگذاری شهرها بر اساس استان انتخاب شده
     * @param {string} province - نام استان
     */
    loadCities(province) {
        const citySelect = this.citySelect;
        citySelect.innerHTML = '<option value="">انتخاب شهر</option>';
        
        if (province && window.solarCalculatorData.cities[province]) {
            citySelect.disabled = false;
            window.solarCalculatorData.cities[province].forEach(city => {
                const option = document.createElement('option');
                option.value = city.name;
                option.textContent = city.name;
                option.dataset.irradiance = city.irradiance;
                option.dataset.temperature = city.temperature;
                citySelect.appendChild(option);
            });
            
            this.showToast(`شهرهای ${this.getProvinceName(province)} بارگذاری شدند`, 'success');
        } else {
            citySelect.disabled = true;
            this.showToast('لطفاً یک استان انتخاب کنید', 'warning');
        }
    }

    /**
     * دریافت نام استان
     * @param {string} provinceKey - کلید استان
     * @returns {string} - نام استان
     */
    getProvinceName(provinceKey) {
        const provinceNames = {
            'tehran': 'تهران',
            'qazvin': 'قزوین',
            'azarbaijan-east': 'آذربایجان شرقی',
            'azarbaijan-west': 'آذربایجان غربی',
            'khorasan-razavi': 'خراسان رضوی',
            'isfahan': 'اصفهان',
            'fars': 'فارس',
            'kerman': 'کرمان',
            'mazandaran': 'مازندران',
            'gilan': 'گیلان'
        };
        
        return provinceNames[provinceKey] || provinceKey;
    }

    /**
     * محاسبه سیستم خورشیدی
     */
    async calculateSystem() {
        // نمایش loading indicator
        this.showLoading(true);
        
        try {
            // اعتبارسنجی ورودی‌ها
            const validation = this.validateInputs();
            if (!validation.isValid) {
                this.showToast(validation.message, 'error');
                this.showLoading(false);
                return;
            }
            
            // شبیه‌سازی محاسبات سنگین
            await this.simulateCalculation();
            
            // گرفتن اطلاعات شهر انتخاب شده
            const selectedCityOption = this.citySelect.options[this.citySelect.selectedIndex];
            this.selectedLocation = {
                name: selectedCityOption.value,
                irradiance: parseFloat(selectedCityOption.dataset.irradiance),
                temperature: parseFloat(selectedCityOption.dataset.temperature)
            };
            
            // محاسبه مصرف روزانه
            const dailyConsumption = this.calculateDailyConsumption();
            
            // محاسبه مصرف ماهانه و سالانه
            const monthlyConsumption = dailyConsumption * 30;
            const yearlyConsumption = dailyConsumption * 365;
            
            // محاسبه توان مورد نیاز سیستم
            const systemPower = this.calculateRequiredSystemPower(dailyConsumption);
            
            // پیشنهاد پنل‌ها
            const panelRecommendation = this.recommendPanels(systemPower);
            
            // پیشنهاد اینورتر
            const inverterRecommendation = this.recommendInverters();
            
            // پیشنهاد باتری (برای سیستم‌های آف‌گرید و هیبریدی)
            const batteryRecommendation = this.recommendBatteries(dailyConsumption);
            
            // ذخیره نتایج
            this.calculationResults = {
                dailyConsumption,
                monthlyConsumption,
                yearlyConsumption,
                systemPower,
                panelRecommendation,
                inverterRecommendation,
                batteryRecommendation
            };
            
            // نمایش نتایج
            this.displayResults(this.calculationResults);
            
            // نمایش بخش نتایج
            this.resultsSection.style.display = 'block';
            
            // اسکرول به بخش نتایج
            this.resultsSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            
            this.showToast('محاسبات با موفقیت انجام شد', 'success');
        } catch (error) {
            console.error('Calculation error:', error);
            this.showToast('خطا در انجام محاسبات', 'error');
        } finally {
            this.showLoading(false);
        }
    }

    /**
     * اعتبارسنجی ورودی‌ها
     * @returns {Object} - نتیجه اعتبارسنجی
     */
    validateInputs() {
        // بررسی اینکه حداقل یک وسیله انتخاب شده باشد
        if (this.selectedAppliances.size === 0) {
            return {
                isValid: false,
                message: 'لطفاً حداقل یک وسیله برقی را انتخاب کنید.'
            };
        }
        
        // بررسی انتخاب استان
        if (!this.provinceSelect.value) {
            return {
                isValid: false,
                message: 'لطفاً استان مورد نظر را انتخاب کنید.'
            };
        }
        
        // بررسی انتخاب شهر
        const selectedCityOption = this.citySelect.options[this.citySelect.selectedIndex];
        if (!selectedCityOption.value) {
            return {
                isValid: false,
                message: 'لطفاً شهر مورد نظر را انتخاب کنید.'
            };
        }
        
        return {
            isValid: true,
            message: 'ورودی‌ها معتبر هستند'
        };
    }

    /**
     * شبیه‌سازی محاسبات سنگین
     * @returns {Promise} - Promise برای شبیه‌سازی
     */
    simulateCalculation() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 1500); // 1.5 ثانیه تاخیر برای شبیه‌سازی محاسبات
        });
    }

    /**
     * محاسبه مصرف روزانه
     * @returns {number} - مصرف روزانه به وات‌ساعت
     */
    calculateDailyConsumption() {
        let totalConsumption = 0;
        const appliances = window.solarCalculatorData.appliances;
        
        this.selectedAppliances.forEach((data, id) => {
            const appliance = appliances.find(a => a.id === id);
            if (appliance) {
                const consumption = appliance.power * appliance.dailyUsage * data.quantity;
                totalConsumption += consumption;
            }
        });
        
        return totalConsumption; // وات‌ساعت
    }

    /**
     * محاسبه توان مورد نیاز سیستم
     * @param {number} dailyConsumption - مصرف روزانه به وات‌ساعت
     * @returns {number} - توان مورد نیاز به کیلووات
     */
    calculateRequiredSystemPower(dailyConsumption) {
        // گرفتن داده‌های شهر انتخاب شده
        const irradiance = this.selectedLocation.irradiance;
        const orientationFactor = window.solarCalculatorData.orientationFactors[this.selectedOrientation];
        
        // محاسبه ساعت آفتابی مؤثر
        const effectiveSunHours = irradiance * orientationFactor;
        
        // محاسبه توان مورد نیاز سیستم (با ضریب ایمنی 1.2)
        const requiredPower = (dailyConsumption / 1000) / effectiveSunHours * 1.2;
        
        return requiredPower; // کیلووات
    }

    /**
     * پیشنهاد پنل‌های خورشیدی
     * @param {number} requiredPower - توان مورد نیاز به کیلووات
     * @returns {Array} - آرایه پنل‌های پیشنهادی
     */
    recommendPanels(requiredPower) {
        const panels = window.solarCalculatorData.panels;
        const recommendations = [];
        
        panels.forEach(panel => {
            // محاسبه تعداد پنل‌های مورد نیاز
            const panelCount = Math.ceil((requiredPower * 1000) / panel.power);
            const totalPower = panelCount * panel.power;
            
            recommendations.push({
                ...panel,
                count: panelCount,
                totalPower: totalPower
            });
        });
        
        return recommendations;
    }

    /**
     * پیشنهاد اینورترها
     * @returns {Array} - آرایه اینورترهای پیشنهادی
     */
    recommendInverters() {
        const inverters = window.solarCalculatorData.inverters;
        const recommendations = [];
        
        // فیلتر کردن اینورترها بر اساس نوع سیستم
        const filteredInverters = inverters.filter(inv => 
            inv.type === this.systemType || inv.type === 'hybrid'
        );
        
        return filteredInverters;
    }

    /**
     * پیشنهاد باتری‌ها
     * @param {number} dailyConsumption - مصرف روزانه به وات‌ساعت
     * @returns {Array} - آرایه باتری‌های پیشنهادی
     */
    recommendBatteries(dailyConsumption) {
        // فقط برای سیستم‌های آف‌گرید و هیبریدی
        if (this.systemType === 'on-grid') {
            return [];
        }
        
        const batteries = window.solarCalculatorData.batteries;
        const recommendations = [];
        
        // محاسبه انرژی مورد نیاز برای 2 روز ذخیره‌سازی
        const requiredEnergy = (dailyConsumption / 1000) * 2; // کیلووات‌ساعت
        
        batteries.forEach(battery => {
            // محاسبه تعداد باتری‌های مورد نیاز
            const usableCapacity = battery.capacity * (battery.depthOfDischarge / 100);
            const batteryCount = Math.ceil(requiredEnergy / (usableCapacity / 1000));
            const totalCapacity = batteryCount * battery.capacity;
            
            recommendations.push({
                ...battery,
                count: batteryCount,
                totalCapacity: totalCapacity,
                usableEnergy: (totalCapacity * (battery.depthOfDischarge / 100)) / 1000
            });
        });
        
        return recommendations;
    }

    /**
     * نمایش نتایج محاسبات
     * @param {Object} results - نتایج محاسبات
     */
    displayResults(results) {
        // نمایش پنل‌های پیشنهادی
        this.displayPanelResults(results.panelRecommendation);
        
        // نمایش اینورترهای پیشنهادی
        this.displayInverterResults(results.inverterRecommendation);
        
        // نمایش باتری‌های پیشنهادی
        this.displayBatteryResults(results.batteryRecommendation);
        
        // نمایش خلاصه
        this.displaySummary(results);
    }

    /**
     * نمایش پنل‌های پیشنهادی
     * @param {Array} panels - آرایه پنل‌های پیشنهادی
     */
    displayPanelResults(panels) {
        this.panelResults.innerHTML = '';
        
        if (panels.length === 0) {
            this.panelResults.innerHTML = '<p class="no-results">هیچ پنلی پیشنهاد نشده است.</p>';
            return;
        }
        
        panels.forEach(panel => {
            const panelElement = document.createElement('div');
            panelElement.className = 'panel-item';
            panelElement.setAttribute('role', 'region');
            panelElement.setAttribute('aria-labelledby', `panel-name-${panel.id}`);
            
            panelElement.innerHTML = `
                <div class="item-header">
                    <div class="item-icon panel-icon" aria-hidden="true">
                        <i class="fas fa-solar-panel"></i>
                    </div>
                    <div class="item-info">
                        <h4 id="panel-name-${panel.id}">${panel.name}</h4>
                        <p>${panel.count} عدد پنل × ${panel.power} وات = 
                           <strong>${panel.totalPower.toLocaleString('fa-IR')} وات کل</strong></p>
                    </div>
                </div>
                <div class="item-specs">
                    <div class="spec-item">
                        <strong>${panel.efficiency}%</strong>
                        <span>راندمان</span>
                    </div>
                    <div class="spec-item">
                        <strong>${panel.voltage} ولت</strong>
                        <span>ولتاژ مدار باز</span>
                    </div>
                    <div class="spec-item">
                        <strong>${panel.current} آمپر</strong>
                        <span>جریان اتصال کوتاه</span>
                    </div>
                    <div class="spec-item">
                        <strong>${panel.warranty} سال</strong>
                        <span>گارانتی</span>
                    </div>
                </div>
                <div class="features">
                    <p><strong>قیمت تقریبی:</strong> 
                       ${panel.price ? `${panel.price.toLocaleString('fa-IR')} تومان` : 'بر اساس بازار'}</p>
                </div>
            `;
            this.panelResults.appendChild(panelElement);
        });
    }

    /**
     * نمایش اینورترهای پیشنهادی
     * @param {Array} inverters - آرایه اینورترهای پیشنهادی
     */
    displayInverterResults(inverters) {
        this.inverterResults.innerHTML = '';
        
        if (inverters.length === 0) {
            this.inverterResults.innerHTML = '<p class="no-results">هیچ اینورتری پیشنهاد نشده است.</p>';
            return;
        }
        
        inverters.forEach(inverter => {
            const inverterElement = document.createElement('div');
            inverterElement.className = 'inverter-item';
            inverterElement.setAttribute('role', 'region');
            inverterElement.setAttribute('aria-labelledby', `inverter-name-${inverter.id}`);
            
            inverterElement.innerHTML = `
                <div class="item-header">
                    <div class="item-icon inverter-icon" aria-hidden="true">
                        <i class="fas fa-bolt"></i>
                    </div>
                    <div class="item-info">
                        <h4 id="inverter-name-${inverter.id}">${inverter.name}</h4>
                        <p>محدوده توان: ${inverter.powerRange}</p>
                    </div>
                </div>
                <div class="item-specs">
                    <div class="spec-item">
                        <strong>${inverter.efficiency}%</strong>
                        <span>راندمان</span>
                    </div>
                    <div class="spec-item">
                        <strong>${inverter.price ? inverter.price.toLocaleString('fa-IR') : '---'} تومان</strong>
                        <span>قیمت تقریبی</span>
                    </div>
                </div>
                <div class="features">
                    <p><strong>ویژگی‌ها:</strong> ${inverter.features.join(', ')}</p>
                </div>
            `;
            this.inverterResults.appendChild(inverterElement);
        });
    }

    /**
     * نمایش باتری‌های پیشنهادی
     * @param {Array} batteries - آرایه باتری‌های پیشنهادی
     */
    displayBatteryResults(batteries) {
        this.batteryResults.innerHTML = '';
        
        if (this.systemType === 'on-grid') {
            this.batteryResults.innerHTML = `
                <div class="no-battery-needed">
                    <div class="battery-icon-placeholder">
                        <i class="fas fa-info-circle"></i>
                    </div>
                    <p>برای سیستم آن‌گرید نیازی به باتری نیست.</p>
                    <p class="hint">برق اضافی به شبکه برق شهری بازمی‌گردد.</p>
                </div>
            `;
            return;
        }
        
        if (batteries.length === 0) {
            this.batteryResults.innerHTML = '<p class="no-results">هیچ باتری‌ای پیشنهاد نشده است.</p>';
            return;
        }
        
        batteries.forEach(battery => {
            const batteryElement = document.createElement('div');
            batteryElement.className = 'battery-item';
            batteryElement.setAttribute('role', 'region');
            batteryElement.setAttribute('aria-labelledby', `battery-name-${battery.id}`);
            
            batteryElement.innerHTML = `
                <div class="item-header">
                    <div class="item-icon battery-icon" aria-hidden="true">
                        <i class="fas fa-car-battery"></i>
                    </div>
                    <div class="item-info">
                        <h4 id="battery-name-${battery.id}">${battery.name}</h4>
                        <p>${battery.count} عدد باتری × ${battery.capacity} آمپر-ساعت = 
                           <strong>${battery.totalCapacity} آمپر-ساعت کل</strong></p>
                    </div>
                </div>
                <div class="item-specs">
                    <div class="spec-item">
                        <strong>${battery.voltage} ولت</strong>
                        <span>ولتاژ نامی</span>
                    </div>
                    <div class="spec-item">
                        <strong>${battery.usableEnergy.toFixed(1)} kWh</strong>
                        <span>انرژی قابل استفاده</span>
                    </div>
                    <div class="spec-item">
                        <strong>${battery.cycleLife.toLocaleString('fa-IR')}</strong>
                        <span>دوره شارژ/دشارژ</span>
                    </div>
                    <div class="spec-item">
                        <strong>${battery.depthOfDischarge}%</strong>
                        <span>عمق دشارژ</span>
                    </div>
                </div>
                <div class="features">
                    <p><strong>نوع:</strong> ${battery.type}</p>
                    <p><strong>قیمت تقریبی:</strong> 
                       ${battery.price ? `${battery.price.toLocaleString('fa-IR')} تومان` : 'بر اساس بازار'}</p>
                </div>
            `;
            this.batteryResults.appendChild(batteryElement);
        });
    }

    /**
     * نمایش خلاصه محاسبات
     * @param {Object} results - نتایج محاسبات
     */
    displaySummary(results) {
        this.summaryResults.innerHTML = `
            <div class="summary-item">
                <span class="summary-label">مصرف روزانه:</span>
                <span class="summary-value">${(results.dailyConsumption / 1000).toFixed(1)} کیلووات‌ساعت</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">مصرف ماهانه:</span>
                <span class="summary-value">${(results.monthlyConsumption / 1000).toFixed(1)} کیلووات‌ساعت</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">مصرف سالانه:</span>
                <span class="summary-value">${(results.yearlyConsumption / 1000).toFixed(1)} کیلووات‌ساعت</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">توان سیستم پیشنهادی:</span>
                <span class="summary-value">${results.systemPower.toFixed(1)} کیلووات</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">شهر نصب:</span>
                <span class="summary-value">${this.selectedLocation.name}</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">جهت نصب:</span>
                <span class="summary-value">${this.getSelectedOrientationText()}</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">نوع سیستم:</span>
                <span class="summary-value">${this.getSelectedSystemTypeText()}</span>
            </div>
            <div class="summary-item total-section">
                <span class="summary-label">برآورد هزینه کل:</span>
                <span class="summary-value">${this.estimateTotalCost(results).toLocaleString('fa-IR')} تومان</span>
            </div>
        `;
    }

    /**
     * برآورد هزینه کل سیستم
     * @param {Object} results - نتایج محاسبات
     * @returns {number} - هزینه تخمینی به تومان
     */
    estimateTotalCost(results) {
        let totalCost = 0;
        
        // هزینه پنل‌ها
        if (results.panelRecommendation.length > 0) {
            const bestPanel = results.panelRecommendation[0]; // بهترین پنل
            totalCost += (bestPanel.price || 1200000) * bestPanel.count;
        }
        
        // هزینه اینورتر
        if (results.inverterRecommendation.length > 0) {
            const bestInverter = results.inverterRecommendation[0];
            totalCost += bestInverter.price || 8000000;
        }
        
        // هزینه باتری (برای سیستم‌های غیر آن‌گرید)
        if (this.systemType !== 'on-grid' && results.batteryRecommendation.length > 0) {
            const bestBattery = results.batteryRecommendation[0];
            totalCost += (bestBattery.price || 800000) * bestBattery.count;
        }
        
        // هزینه نصب و تجهیزات جانبی (20% از کل)
        totalCost += totalCost * 0.2;
        
        return Math.round(totalCost);
    }

    /**
     * دریافت متن جهت نصب
     * @returns {string} - متن جهت نصب
     */
    getSelectedOrientationText() {
        const orientations = {
            'south': 'جنوبی (بهترین)',
            'south-east': 'جنوب شرقی',
            'south-west': 'جنوب غربی',
            'east': 'شرقی',
            'west': 'غربی'
        };
        return orientations[this.selectedOrientation] || this.selectedOrientation;
    }

    /**
     * دریافت متن نوع سیستم
     * @returns {string} - متن نوع سیستم
     */
    getSelectedSystemTypeText() {
        const types = {
            'on-grid': 'آن‌گرید (متصل به شبکه)',
            'off-grid': 'آف‌گرید (مستقل)',
            'hybrid': 'هیبریدی'
        };
        return types[this.systemType] || this.systemType;
    }

    /**
     * نمایش/پنهان کردن loading indicator
     * @param {boolean} show - نمایش یا پنهان کردن
     */
    showLoading(show) {
        this.isLoading = show;
        
        if (show) {
            this.calculateBtn.innerHTML = `
                <span class="loading"></span>
                در حال محاسبه...
            `;
            this.calculateBtn.disabled = true;
        } else {
            this.calculateBtn.innerHTML = `
                <i class="fas fa-calculator"></i> محاسبه سیستم پیشنهادی
            `;
            this.calculateBtn.disabled = false;
        }
    }

    /**
     * نمایش پیام به کاربر
     * @param {string} message - متن پیام
     * @param {string} type - نوع پیام (success, error, warning, info)
     */
    showToast(message, type = 'info') {
        // ایجاد عنصر toast
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        toast.setAttribute('role', 'alert');
        toast.setAttribute('aria-live', 'polite');
        
        // اضافه کردن به body
        document.body.appendChild(toast);
        
        // نمایش toast
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);
        
        // حذف toast بعد از 3 ثانیه
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, 3000);
    }

    /**
     * مقداردهی اولیه tooltipها
     */
    initializeTooltips() {
        // اضافه کردن tooltip به عناصر با data-tooltip
        const tooltipElements = document.querySelectorAll('[data-tooltip]');
        tooltipElements.forEach(element => {
            element.addEventListener('mouseenter', (e) => {
                this.showTooltip(e.target, e.target.dataset.tooltip);
            });
            
            element.addEventListener('mouseleave', () => {
                this.hideTooltip();
            });
        });
    }

    /**
     * نمایش tooltip
     * @param {HTMLElement} element - عنصر مربوطه
     * @param {string} text - متن tooltip
     */
    showTooltip(element, text) {
        // این قسمت می‌تواند گسترش یابد
        console.log('Tooltip:', text);
    }

    /**
     * پنهان کردن tooltip
     */
    hideTooltip() {
        // این قسمت می‌تواند گسترش یابد
    }

    /**
     * تنظیم دسترسی‌پذیری
     */
    setupAccessibility() {
        // اضافه کردن ARIA labels
        this.calculateBtn.setAttribute('aria-label', 'محاسبه سیستم خورشیدی پیشنهادی');
        
        // تنظیم focus management
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                // مدیریت focus
            }
        });
    }

    /**
     * ذخیره نتایج محاسبات
     */
    saveResults() {
        if (this.calculationResults) {
            const dataStr = JSON.stringify(this.calculationResults);
            const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
            
            const exportFileDefaultName = 'محاسبات-سیستم-خورشیدی.json';
            
            const linkElement = document.createElement('a');
            linkElement.setAttribute('href', dataUri);
            linkElement.setAttribute('download', exportFileDefaultName);
            linkElement.click();
            
            this.showToast('نتایج با موفقیت ذخیره شدند', 'success');
        }
    }

    /**
     * چاپ نتایج
     */
    printResults() {
        if (this.calculationResults) {
            window.print();
        }
    }
}

// راه‌اندازی ماشین حساب
document.addEventListener('DOMContentLoaded', () => {
    // بررسی پشتیبانی از ES6
    if (typeof Map === 'undefined') {
        alert('مرورگر شما از ویژگی‌های مورد نیاز پشتیبانی نمی‌کند. لطفاً از مرورگر جدیدتری استفاده کنید.');
        return;
    }
    
    // ایجاد نمونه از کلاس ماشین حساب
    const calculator = new SolarCalculator();
    
    // ذخیره نمونه در window برای دسترسی از console
    window.solarCalculator = calculator;
    
    // اضافه کردن دکمه‌های ذخیره و چاپ
    const resultsSection = document.getElementById('results-section');
    if (resultsSection) {
        const actionButtons = document.createElement('div');
        actionButtons.className = 'action-buttons';
        actionButtons.innerHTML = `
            <button class="action-btn save-btn" onclick="window.solarCalculator.saveResults()">
                <i class="fas fa-download"></i> ذخیره نتایج
            </button>
            <button class="action-btn print-btn" onclick="window.solarCalculator.printResults()">
                <i class="fas fa-print"></i> چاپ نتایج
            </button>
        `;
        resultsSection.insertBefore(actionButtons, resultsSection.firstChild);
    }
    
    console.log('ماشین حساب خورشیدی با موفقیت بارگذاری شد ✨');
});

// مدیریت خطاهای سراسری
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});
