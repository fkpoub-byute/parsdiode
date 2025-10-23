/**
 * داده‌های ماشین حساب خورشیدی - نسخه پیشرفته
 * @author ParsDiode
 * @version 1.0.0
 */

// داده‌های ماشین حساب خورشیدی
const solarCalculatorData = {
    // وسایل برقی
    appliances: [
        {
            id: 'tv',
            name: 'تلویزیون',
            icon: 'fas fa-tv',
            power: 100, // وات
            dailyUsage: 4, // ساعت در روز
            category: 'سرگرمی',
            description: 'تلویزیون LED 42 اینچ'
        },
        {
            id: 'refrigerator',
            name: 'یخچال فریزر',
            icon: 'fas fa-snowflake',
            power: 150,
            dailyUsage: 24,
            category: 'آشپزخانه',
            description: 'یخچال فریزر دو دری دو قطبی'
        },
        {
            id: 'washing-machine',
            name: 'ماشین لباسشویی',
            icon: 'fas fa-tshirt',
            power: 2000,
            dailyUsage: 1,
            category: 'آشپزخانه',
            description: 'ماشین لباسشویی پرکن 7 کیلوگرمی'
        },
        {
            id: 'light-bulb',
            name: 'لامپ LED',
            icon: 'fas fa-lightbulb',
            power: 10,
            dailyUsage: 5,
            category: 'روشنایی',
            isQuantity: true,
            defaultQuantity: 10,
            description: 'لامپ LED 10 وات'
        },
        {
            id: 'laptop',
            name: 'لپ‌تاپ',
            icon: 'fas fa-laptop',
            power: 65,
            dailyUsage: 6,
            category: 'دفتری',
            description: 'لپ‌تاپ میان‌رده'
        },
        {
            id: 'air-conditioner',
            name: 'کولر گازی',
            icon: 'fas fa-wind',
            power: 1500,
            dailyUsage: 8,
            category: 'سرمایش',
            description: 'کولر گازی 12000 BTU'
        },
        {
            id: 'microwave',
            name: 'مایکروویو',
            icon: 'fas fa-utensils',
            power: 1200,
            dailyUsage: 0.5,
            category: 'آشپزخانه',
            description: 'فر مایکروویو 20 لیتری'
        },
        {
            id: 'water-heater',
            name: 'آبگرمکن برقی',
            icon: 'fas fa-shower',
            power: 3000,
            dailyUsage: 2,
            category: 'آشپزخانه',
            description: 'آبگرمکن برقی 100 لیتری'
        },
        {
            id: 'fan',
            name: 'پنکه',
            icon: 'fas fa-fan',
            power: 75,
            dailyUsage: 6,
            category: 'سرمایش',
            description: 'پنکه سقفی یا ایستاده'
        },
        {
            id: 'charger',
            name: 'شارژر موبایل',
            icon: 'fas fa-mobile-alt',
            power: 10,
            dailyUsage: 3,
            category: 'دفتری',
            isQuantity: true,
            defaultQuantity: 3,
            description: 'شارژر موبایل هوشمند'
        }
    ],

    // شهرها و موقعیت‌های جغرافیایی
    cities: {
        tehran: [
            { 
                name: 'تهران', 
                irradiance: 5.2, // kWh/m²/day
                temperature: 18, // درجه سانتی‌گراد میانگین
                altitude: 1180, // متر از سطح دریا
                description: 'مرکز ایران - شرایط آب و هوایی متنوع'
            },
            { 
                name: 'شهریار', 
                irradiance: 5.1, 
                temperature: 17,
                altitude: 1200,
                description: 'شهری نزدیک تهران'
            },
            { 
                name: 'کرج', 
                irradiance: 5.0, 
                temperature: 16,
                altitude: 1300,
                description: 'مرکز استان البرز'
            }
        ],
        qazvin: [
            { 
                name: 'قزوین', 
                irradiance: 5.3, 
                temperature: 15,
                altitude: 1280,
                description: 'مرکز استان قزوین - شرایط خوب خورشیدی'
            },
            { 
                name: 'آبیک', 
                irradiance: 5.2, 
                temperature: 14,
                altitude: 1400,
                description: 'شهری در جنوب قزوین'
            },
            { 
                name: 'تاکستان', 
                irradiance: 5.1, 
                temperature: 14,
                altitude: 1350,
                description: 'شهری در شمال غربی قزوین'
            }
        ],
        'azarbaijan-east': [
            { 
                name: 'تبریز', 
                irradiance: 4.8, 
                temperature: 13,
                altitude: 1367,
                description: 'مرکز استان آذربایجان شرقی'
            },
            { 
                name: 'مراغه', 
                irradiance: 4.9, 
                temperature: 12,
                altitude: 1480,
                description: 'شهری جنوب تبریز'
            },
            { 
                name: 'میانه', 
                irradiance: 4.7, 
                temperature: 11,
                altitude: 1520,
                description: 'شهری در جنوب شرقی تبریز'
            }
        ],
        'azarbaijan-west': [
            { 
                name: 'ارومیه', 
                irradiance: 4.9, 
                temperature: 14,
                altitude: 1320,
                description: 'مرکز استان آذربایجان غربی'
            },
            { 
                name: 'خوی', 
                irradiance: 5.0, 
                temperature: 13,
                altitude: 1450,
                description: 'شهری شمالی استان'
            },
            { 
                name: 'ماکو', 
                irradiance: 4.8, 
                temperature: 12,
                altitude: 1300,
                description: 'شهری در غرب استان'
            }
        ],
        'khorasan-razavi': [
            { 
                name: 'مشهد', 
                irradiance: 5.4, 
                temperature: 16,
                altitude: 995,
                description: 'مرکز استان خراسان رضوی'
            },
            { 
                name: 'نیشابور', 
                irradiance: 5.3, 
                temperature: 15,
                altitude: 1200,
                description: 'شهری غربی مشهد'
            },
            { 
                name: 'سبزوار', 
                irradiance: 5.5, 
                temperature: 17,
                altitude: 1050,
                description: 'شهری جنوبی مشهد'
            }
        ],
        isfahan: [
            { 
                name: 'اصفهان', 
                irradiance: 5.1, 
                temperature: 17,
                altitude: 1590,
                description: 'مرکز استان اصفهان'
            },
            { 
                name: 'کاشان', 
                irradiance: 5.2, 
                temperature: 16,
                altitude: 980,
                description: 'شهری شمالی اصفهان'
            },
            { 
                name: 'نجف‌آباد', 
                irradiance: 5.0, 
                temperature: 16,
                altitude: 1620,
                description: 'شهری غربی اصفهان'
            }
        ],
        fars: [
            { 
                name: 'شیراز', 
                irradiance: 5.0, 
                temperature: 18,
                altitude: 1480,
                description: 'مرکز استان فارس'
            },
            { 
                name: 'مرودشت', 
                irradiance: 5.1, 
                temperature: 17,
                altitude: 1500,
                description: 'شهری شمالی شیراز'
            },
            { 
                name: 'فسا', 
                irradiance: 4.9, 
                temperature: 19,
                altitude: 1150,
                description: 'شهری جنوبی شیراز'
            }
        ],
        kerman: [
            { 
                name: 'کرمان', 
                irradiance: 5.5, 
                temperature: 19,
                altitude: 1760,
                description: 'مرکز استان کرمان - شرایط عالی خورشیدی'
            },
            { 
                name: 'زرند', 
                irradiance: 5.6, 
                temperature: 18,
                altitude: 1800,
                description: 'شهری شمالی کرمان'
            },
            { 
                name: 'سیرجان', 
                irradiance: 5.4, 
                temperature: 20,
                altitude: 1700,
                description: 'شهری جنوبی کرمان'
            }
        ],
        mazandaran: [
            { 
                name: 'ساری', 
                irradiance: 4.2, 
                temperature: 16,
                altitude: 20,
                description: 'مرکز استان مازندران'
            },
            { 
                name: 'آمل', 
                irradiance: 4.1, 
                temperature: 15,
                altitude: 10,
                description: 'شهری غربی ساری'
            },
            { 
                name: 'بابل', 
                irradiance: 4.3, 
                temperature: 16,
                altitude: 15,
                description: 'شهری شرقی ساری'
            }
        ],
        gilan: [
            { 
                name: 'رشت', 
                irradiance: 4.0, 
                temperature: 15,
                altitude: 10,
                description: 'مرکز استان گیلان'
            },
            { 
                name: 'لاهیجان', 
                irradiance: 3.9, 
                temperature: 14,
                altitude: 5,
                description: 'شهری جنوبی رشت'
            },
            { 
                name: 'آستارا', 
                irradiance: 4.1, 
                temperature: 15,
                altitude: 8,
                description: 'شهری شمالی رشت'
            }
        ]
    },

    // پنل‌های خورشیدی
    panels: [
        {
            id: 'monocrystalline-400w',
            name: 'پنل مونوکریستالی 400 وات',
            power: 400, // وات
            efficiency: 20.5, // راندمان
            voltage: 37.4, // ولت مدار باز
            current: 10.7, // آمپر اتصال کوتاه
            price: 1200000, // ریال
            warranty: 25, // سال
            type: 'مونوکریستالی',
            dimensions: '1956×992×40 mm',
            weight: 21.5, // کیلوگرم
            description: 'پنل‌های با کیفیت بالا با راندمان 20.5%'
        },
        {
            id: 'polycrystalline-350w',
            name: 'پنل پلی‌کریستالی 350 وات',
            power: 350,
            efficiency: 18.2,
            voltage: 32.8,
            current: 10.7,
            price: 950000,
            warranty: 20,
            type: 'پلی‌کریستالی',
            dimensions: '1650×992×40 mm',
            weight: 19.5,
            description: 'پنل‌های اقتصادی با راندمان 18.2%'
        },
        {
            id: 'thin-film-120w',
            name: 'پنل فیلم نازک 120 وات',
            power: 120,
            efficiency: 12.0,
            voltage: 18.0,
            current: 6.7,
            price: 450000,
            warranty: 10,
            type: 'فیلم نازک',
            dimensions: '1200×600×8 mm',
            weight: 8.5,
            description: 'پنل‌های سبک و انعطاف‌پذیر'
        }
    ],

    // اینورترها
    inverters: [
        {
            id: 'on-grid-5kw',
            name: 'اینورتر آن‌گرید 5 کیلووات',
            type: 'on-grid',
            efficiency: 98.5,
            powerRange: '3-10 کیلووات',
            price: 8000000,
            features: ['اتصال به شبکه', 'فروش اضافی برق', 'بدون باتری', 'MPPT هوشمند'],
            description: 'اینورتر مناسب برای سیستم‌های متصل به شبکه'
        },
        {
            id: 'off-grid-pure-sine-5kw',
            name: 'اینورتر سینوسی خالص 5 کیلووات',
            type: 'off-grid',
            efficiency: 95.0,
            powerRange: '2-5 کیلووات',
            price: 12000000,
            features: ['بدون اتصال به شبکه', 'نیاز به باتری', 'کیفیت بالا', 'حفاظت پیشرفته'],
            description: 'اینورتر با خروجی سینوسی خالص برای سیستم‌های مستقل'
        },
        {
            id: 'off-grid-modified-sine-3kw',
            name: 'اینورتر شبه سینوسی 3 کیلووات',
            type: 'off-grid',
            efficiency: 90.0,
            powerRange: '1-3 کیلووات',
            price: 6000000,
            features: ['بدون اتصال به شبکه', 'نیاز به باتری', 'اقتصادی', 'مناسب برای لامپ‌ها'],
            description: 'اینورتر اقتصادی برای سیستم‌های کوچک'
        },
        {
            id: 'hybrid-8kw',
            name: 'اینورتر هیبریدی 8 کیلووات',
            type: 'hybrid',
            efficiency: 97.0,
            powerRange: '3-8 کیلووات',
            price: 15000000,
            features: ['اتصال به شبکه', 'ذخیره‌سازی باتری', 'کنترل هوشمند', 'مدیریت انرژی'],
            description: 'اینورتر پیشرفته برای سیستم‌های هیبریدی'
        }
    ],

    // باتری‌ها
    batteries: [
        {
            id: 'lead-acid-car-100ah',
            name: 'باتری لید اسیدی (ماشین) 100Ah',
            type: 'لید اسیدی',
            voltage: 12,
            capacity: 100, // آمپر-ساعت
            price: 800000,
            cycleLife: 300,
            depthOfDischarge: 50, // درصد
            weight: 30, // کیلوگرم
            description: 'باتری‌های معمولی خودرو - اقتصادی'
        },
        {
            id: 'lead-acid-ups-200ah',
            name: 'باتری لید اسیدی (یو پی اس) 200Ah',
            type: 'لید اسیدی',
            voltage: 12,
            capacity: 200,
            price: 1500000,
            cycleLife: 500,
            depthOfDischarge: 80,
            weight: 60,
            description: 'باتری‌های عمیق دشارژ - کیفیت بالاتر'
        },
        {
            id: 'lithium-iron-phosphate-100ah',
            name: 'باتری لیتیوم فسفات آهن 100Ah',
            type: 'لیتیوم فسفات آهن',
            voltage: 12.8,
            capacity: 100,
            price: 4500000,
            cycleLife: 3000,
            depthOfDischarge: 100,
            weight: 12,
            description: 'باتری‌های پیشرفته با عمر طولانی'
        }
    ],

    // جهت‌های نصب
    orientationFactors: {
        south: 1.0,      // بهترین
        'south-east': 0.95,
        'south-west': 0.95,
        east: 0.85,
        west: 0.85
    },

    // ضرایب محاسباتی
    calculationFactors: {
        safetyFactor: 1.2, // ضریب ایمنی
        systemLoss: 0.15, // افت سیستم (15%)
        temperatureFactor: 0.85, // ضریب دمایی
        dustFactor: 0.95 // ضریب گرد و غبار
    }
};

// اکспорت داده‌ها برای استفاده در ماشین حساب
if (typeof window !== 'undefined') {
    window.solarCalculatorData = solarCalculatorData;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = solarCalculatorData;
}
