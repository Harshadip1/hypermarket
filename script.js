/* ==========================================================================
   OPEN CHALLENGE SUPERMARKET - AKOLA, MAHARASHTRA
   EXPANDED PRODUCT CATALOG (60+ SUPERMARKET PRODUCTS)
   ========================================================================== */

const PRODUCTS = [
    // --- GROCERY & STAPLES ---
    {
        id: 'oc-001',
        title: 'Fortune Sunlite Refined Sunflower Oil',
        brand: 'Fortune',
        category: 'Grocery & Staples',
        image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&auto=format&fit=crop&q=80',
        rating: 4.8,
        ratingCount: 1420,
        inStock: true,
        variants: [
            { size: '1 Litre Pouch', mrp: 185, dmartPrice: 125 },
            { size: '5 Litre Can', mrp: 925, dmartPrice: 620 }
        ],
        description: 'Fortune Sunlite Refined Sunflower Oil is a healthy and light edible oil rich in Vitamin E. Perfect for daily Indian cooking and deep frying.'
    },
    {
        id: 'oc-002',
        title: 'Aashirvaad Shuddh Chakki Whole Wheat Atta',
        brand: 'Aashirvaad',
        category: 'Grocery & Staples',
        image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&auto=format&fit=crop&q=80',
        rating: 4.9,
        ratingCount: 2310,
        inStock: true,
        variants: [
            { size: '5 kg Pack', mrp: 275, dmartPrice: 215 },
            { size: '10 kg Pack', mrp: 540, dmartPrice: 410 }
        ],
        description: 'Aashirvaad Shuddh Chakki Atta is made from 100% pure wheat grains, processed naturally to retain fiber & rotis stay soft for longer.'
    },
    {
        id: 'oc-003',
        title: 'India Gate Basmati Rice Feast Rozzana',
        brand: 'India Gate',
        category: 'Grocery & Staples',
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&auto=format&fit=crop&q=80',
        rating: 4.7,
        ratingCount: 980,
        inStock: true,
        variants: [
            { size: '5 kg Pack', mrp: 495, dmartPrice: 349 },
            { size: '1 kg Pack', mrp: 110, dmartPrice: 78 }
        ],
        description: 'Premium quality aromatic basmati rice grains ideal for everyday biryani, pulao, and steamed rice.'
    },
    {
        id: 'oc-009',
        title: 'Open Challenge Premium Whole Almonds / Badam',
        brand: 'Open Challenge Choice',
        category: 'Grocery & Staples',
        image: 'https://images.unsplash.com/photo-1508061252966-f7267f53a15c?w=500&auto=format&fit=crop&q=80',
        rating: 4.8,
        ratingCount: 1670,
        inStock: true,
        variants: [
            { size: '500 g Pack', mrp: 520, dmartPrice: 345 },
            { size: '1 kg Pack', mrp: 1040, dmartPrice: 679 }
        ],
        description: '100% crispy, crunchy, and nutritious California whole almonds directly packed under hygienic conditions.'
    },
    {
        id: 'oc-017',
        title: 'Everest Tikhalal Hot Red Chilli Powder',
        brand: 'Everest',
        category: 'Grocery & Staples',
        image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&auto=format&fit=crop&q=80',
        rating: 4.8,
        ratingCount: 840,
        inStock: true,
        variants: [
            { size: '200 g Pack', mrp: 110, dmartPrice: 85 },
            { size: '500 g Pack', mrp: 260, dmartPrice: 195 }
        ],
        description: 'Made from rich, sun-dried red chillies giving vibrant natural red color and fiery hot flavor to curries.'
    },
    {
        id: 'oc-018',
        title: 'Tata Sampann Unpolished Toor Dal / Arhar Dal',
        brand: 'Tata Sampann',
        category: 'Grocery & Staples',
        image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=500&auto=format&fit=crop&q=80',
        rating: 4.9,
        ratingCount: 1290,
        inStock: true,
        variants: [
            { size: '1 kg Pack', mrp: 180, dmartPrice: 139 },
            { size: '2 kg Saver Pack', mrp: 360, dmartPrice: 265 }
        ],
        description: 'Unpolished pulses with natural wholesome goodness, rich in protein, essential minerals and wholesome taste.'
    },
    {
        id: 'oc-019',
        title: 'Dabur 100% Pure Squeezy Honey',
        brand: 'Dabur',
        category: 'Grocery & Staples',
        image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500&auto=format&fit=crop&q=80',
        rating: 4.8,
        ratingCount: 1540,
        inStock: true,
        variants: [
            { size: '500 g Bottle', mrp: 240, dmartPrice: 165 },
            { size: '1 kg Pack', mrp: 480, dmartPrice: 320 }
        ],
        description: '100% pure honey compliant with international NMR tests. Perfect immunity booster with warm lemon water.'
    },
    {
        id: 'oc-020',
        title: 'Saffola Gold Rice Bran & Sunflower Edible Oil',
        brand: 'Saffola',
        category: 'Grocery & Staples',
        image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&auto=format&fit=crop&q=80',
        rating: 4.9,
        ratingCount: 2100,
        inStock: true,
        variants: [
            { size: '1 Litre Pouch', mrp: 215, dmartPrice: 149 },
            { size: '5 Litre Jar', mrp: 1050, dmartPrice: 735 }
        ],
        description: 'Dual seed technology with antioxidants that help maintain healthy cholesterol levels.'
    },
    {
        id: 'oc-021',
        title: 'Open Challenge Choice Premium Cashew Nuts / Kaju',
        brand: 'Open Challenge Choice',
        category: 'Grocery & Staples',
        image: 'https://images.unsplash.com/photo-1536591375315-1b836890327c?w=500&auto=format&fit=crop&q=80',
        rating: 4.8,
        ratingCount: 920,
        inStock: true,
        variants: [
            { size: '500 g Pack', mrp: 580, dmartPrice: 395 }
        ],
        description: 'Whole, creamy, crunch-tested cashew nuts rich in healthy fats, magnesium and copper.'
    },
    {
        id: 'oc-033',
        title: 'Madhur Pure Crystal Sugar',
        brand: 'Madhur',
        category: 'Grocery & Staples',
        image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=500&auto=format&fit=crop&q=80',
        rating: 4.9,
        ratingCount: 1850,
        inStock: true,
        variants: [
            { size: '1 kg Pack', mrp: 60, dmartPrice: 46 },
            { size: '5 kg Saver Pack', mrp: 300, dmartPrice: 225 }
        ],
        description: '100% sulphur-free refine white crystal sugar made untouched by hand under strict quality controls.'
    },
    {
        id: 'oc-034',
        title: 'Tata Salt Vacuum Evaporated Iodised Salt',
        brand: 'Tata',
        category: 'Grocery & Staples',
        image: 'https://images.unsplash.com/photo-1518110168401-f2841ee59f8a?w=500&auto=format&fit=crop&q=80',
        rating: 4.9,
        ratingCount: 4200,
        inStock: true,
        variants: [
            { size: '1 kg Pack', mrp: 28, dmartPrice: 24 }
        ],
        description: 'Desh Ka Namak! India\'s favorite vacuum evaporated iodised salt ensuring mental development and immunity.'
    },
    {
        id: 'oc-035',
        title: 'Fortune Kachi Ghani Pure Mustard Oil',
        brand: 'Fortune',
        category: 'Grocery & Staples',
        image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&auto=format&fit=crop&q=80',
        rating: 4.7,
        ratingCount: 1120,
        inStock: true,
        variants: [
            { size: '1 Litre Pouch', mrp: 195, dmartPrice: 138 },
            { size: '5 Litre Can', mrp: 975, dmartPrice: 685 }
        ],
        description: 'Cold-pressed traditional kachi ghani mustard oil with rich pungency and natural digestive qualities.'
    },
    {
        id: 'oc-036',
        title: 'Everest Turmeric Powder / Haldi',
        brand: 'Everest',
        category: 'Grocery & Staples',
        image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=500&auto=format&fit=crop&q=80',
        rating: 4.8,
        ratingCount: 1340,
        inStock: true,
        variants: [
            { size: '200 g Pack', mrp: 75, dmartPrice: 58 },
            { size: '500 g Pack', mrp: 180, dmartPrice: 135 }
        ],
        description: 'High curcumin turmeric powder sourced directly from Salem fields giving deep golden hue and aromatic flavor.'
    },
    {
        id: 'oc-037',
        title: 'Open Challenge Choice Premium Raisins / Kishmish',
        brand: 'Open Challenge Choice',
        category: 'Grocery & Staples',
        image: 'https://images.unsplash.com/photo-1595418917831-ef942bad9b96?w=500&auto=format&fit=crop&q=80',
        rating: 4.8,
        ratingCount: 760,
        inStock: true,
        variants: [
            { size: '250 g Pack', mrp: 150, dmartPrice: 99 },
            { size: '500 g Pack', mrp: 300, dmartPrice: 189 }
        ],
        description: 'Juicy, naturally sun-dried green raisins packed with natural sweetness, iron, and fiber.'
    },

    // --- SNACKS & BEVERAGES ---
    {
        id: 'oc-006',
        title: 'Maggi 2-Minute Masala Instant Noodles (12 Packs)',
        brand: 'Nestle Maggi',
        category: 'Snacks & Beverages',
        image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?w=500&auto=format&fit=crop&q=80',
        rating: 4.9,
        ratingCount: 4200,
        inStock: true,
        variants: [
            { size: '840 g Mega Pack', mrp: 168, dmartPrice: 138 }
        ],
        description: 'India\'s favorite snack! Delicious instant noodles enriched with iron and roasted Indian spices.'
    },
    {
        id: 'oc-007',
        title: 'Tata Tea Gold Premium Black Tea',
        brand: 'Tata Tea',
        category: 'Snacks & Beverages',
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=80',
        rating: 4.7,
        ratingCount: 890,
        inStock: true,
        variants: [
            { size: '500 g Pack', mrp: 330, dmartPrice: 240 },
            { size: '1 kg Pack', mrp: 650, dmartPrice: 460 }
        ],
        description: 'Exquisite blend of CTC tea leaves with long leaves for rich aroma and robust flavor.'
    },
    {
        id: 'oc-010',
        title: 'Parle-G Gold Biscuits Family Pack',
        brand: 'Parle',
        category: 'Snacks & Beverages',
        image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop&q=80',
        rating: 4.9,
        ratingCount: 5100,
        inStock: true,
        variants: [
            { size: '1 kg Value Pack', mrp: 150, dmartPrice: 110 }
        ],
        description: 'The iconic glucose biscuit filled with goodness of milk and wheat. Perfect tea-time snack.'
    },
    {
        id: 'oc-013',
        title: 'Tropicana 100% Mixed Fruit Juice',
        brand: 'Tropicana',
        category: 'Snacks & Beverages',
        image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=500&auto=format&fit=crop&q=80',
        rating: 4.5,
        ratingCount: 640,
        inStock: true,
        variants: [
            { size: '1 Litre Tetra Pack', mrp: 135, dmartPrice: 85 }
        ],
        description: 'No added sugar or artificial preservatives. Made from 9 delicious fruits packed with natural vitamins.'
    },
    {
        id: 'oc-015',
        title: 'Cadbury Dairy Milk Silk Chocolate Bar',
        brand: 'Cadbury',
        category: 'Snacks & Beverages',
        image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?w=500&auto=format&fit=crop&q=80',
        rating: 4.9,
        ratingCount: 3800,
        inStock: true,
        variants: [
            { size: '150 g Pack', mrp: 190, dmartPrice: 149 }
        ],
        description: 'Rich, smooth and creamy milk chocolate that melts in your mouth for pure delight.'
    },
    {
        id: 'oc-022',
        title: 'Nescafe Classic Instant Coffee Powder Glass Jar',
        brand: 'Nescafe',
        category: 'Snacks & Beverages',
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&auto=format&fit=crop&q=80',
        rating: 4.8,
        ratingCount: 2450,
        inStock: true,
        variants: [
            { size: '200 g Jar', mrp: 625, dmartPrice: 475 }
        ],
        description: '100% pure natural coffee beans roasted to perfection delivering rich aroma and bold coffee flavor.'
    },
    {
        id: 'oc-023',
        title: 'Lays Magic Masala Potato Chips (Family Saver Pack)',
        brand: 'Lays',
        category: 'Snacks & Beverages',
        image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=500&auto=format&fit=crop&q=80',
        rating: 4.7,
        ratingCount: 1890,
        inStock: true,
        variants: [
            { size: '130 g Party Pack', mrp: 50, dmartPrice: 38 }
        ],
        description: 'Crunchy potato chips seasoned with authentic Indian spices for the ultimate party munchies.'
    },
    {
        id: 'oc-024',
        title: 'Haldiram\'s Nagpur Bhujia Sev Crispy Namkeen',
        brand: 'Haldiram\'s',
        category: 'Snacks & Beverages',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format&fit=crop&q=80',
        rating: 4.9,
        ratingCount: 3120,
        inStock: true,
        variants: [
            { size: '1 kg Family Pack', mrp: 280, dmartPrice: 199 }
        ],
        description: 'Classic spicy moth bean and gram flour fried noodles - the authentic taste of Nagpur.'
    },
    {
        id: 'oc-025',
        title: 'Bournvita Chocolate Health Drink Powder',
        brand: 'Cadbury Bournvita',
        category: 'Snacks & Beverages',
        image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&auto=format&fit=crop&q=80',
        rating: 4.8,
        ratingCount: 1400,
        inStock: true,
        variants: [
            { size: '1 kg Pouch', mrp: 440, dmartPrice: 325 }
        ],
        description: 'Fortified with Vitamin D, Calcium, Iron and Zinc to support active growth, bone strength, and immunity.'
    },
    {
        id: 'oc-038',
        title: 'Britannia Good Day Cashew Cookies Family Pack',
        brand: 'Britannia',
        category: 'Snacks & Beverages',
        image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop&q=80',
        rating: 4.8,
        ratingCount: 2150,
        inStock: true,
        variants: [
            { size: '600 g Value Pack', mrp: 160, dmartPrice: 115 }
        ],
        description: 'Loaded with real cashew nuts and butter. Spreads smiles with every crunchy bite.'
    },
    {
        id: 'oc-039',
        title: 'Oreo Chocolate Cream Sandwich Biscuits',
        brand: 'Cadbury Oreo',
        category: 'Snacks & Beverages',
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500&auto=format&fit=crop&q=80',
        rating: 4.9,
        ratingCount: 3400,
        inStock: true,
        variants: [
            { size: '300 g Family Pack', mrp: 120, dmartPrice: 88 }
        ],
        description: 'Twist, Lick, Dunk! Rich cocoa biscuits filled with smooth vanilla cream.'
    },
    {
        id: 'oc-040',
        title: 'Real Fruit Power Mango Juice',
        brand: 'Dabur Real',
        category: 'Snacks & Beverages',
        image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=500&auto=format&fit=crop&q=80',
        rating: 4.7,
        ratingCount: 1780,
        inStock: true,
        variants: [
            { size: '1 Litre Tetra Pack', mrp: 130, dmartPrice: 89 }
        ],
        description: 'Prepared from ripe, juicy Alphonso mangoes without added preservatives.'
    },
    {
        id: 'oc-041',
        title: 'Bikaji Aslee Bikaneri Bhujia',
        brand: 'Bikaji',
        category: 'Snacks & Beverages',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&auto=format&fit=crop&q=80',
        rating: 4.8,
        ratingCount: 1560,
        inStock: true,
        variants: [
            { size: '1 kg Pack', mrp: 290, dmartPrice: 205 }
        ],
        description: 'Crispy spicy namkeen made from authentic Bikaner dew bean flour and selected spices.'
    },

    // --- HOUSEHOLD ESSENTIALS ---
    {
        id: 'oc-005',
        title: 'Surf Excel Easy Wash Detergent Powder',
        brand: 'Surf Excel',
        category: 'Household Essentials',
        image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=500&auto=format&fit=crop&q=80',
        rating: 4.8,
        ratingCount: 1850,
        inStock: true,
        variants: [
            { size: '1 kg Pack', mrp: 160, dmartPrice: 118 },
            { size: '5 kg Value Saver', mrp: 790, dmartPrice: 520 }
        ],
        description: 'Removes tough stains like tea, coffee, turmeric & grease easily without harming clothes.'
    },
    {
        id: 'oc-011',
        title: 'Vim Dishwash Gel Lemon Liquid',
        brand: 'Vim',
        category: 'Household Essentials',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
        rating: 4.8,
        ratingCount: 1430,
        inStock: true,
        variants: [
            { size: '750 ml Bottle', mrp: 210, dmartPrice: 145 },
            { size: '2 Litre Refill Pouch', mrp: 450, dmartPrice: 310 }
        ],
        description: '1 spoonful of Vim Gel cleans a sinkful of greasy utensils with the power of 100 lemons.'
    },
    {
        id: 'oc-014',
        title: 'Harpic Power Plus Toilet Cleaner Liquid',
        brand: 'Harpic',
        category: 'Household Essentials',
        image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500&auto=format&fit=crop&q=80',
        rating: 4.8,
        ratingCount: 1720,
        inStock: true,
        variants: [
            { size: '1 Litre Twin Pack', mrp: 390, dmartPrice: 255 }
        ],
        description: '10x better stain removal & kills 99.9% germs leaving your toilet sparkling clean and fresh.'
    },
    {
        id: 'oc-026',
        title: 'Ariel Complete Detergent Washing Powder',
        brand: 'Ariel',
        category: 'Household Essentials',
        image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=500&auto=format&fit=crop&q=80',
        rating: 4.9,
        ratingCount: 1620,
        inStock: true,
        variants: [
            { size: '4 kg Saver Pack', mrp: 850, dmartPrice: 579 }
        ],
        description: 'Designed for tough stain removal in 1 wash with brightness guard technology for whites and colors.'
    },
    {
        id: 'oc-027',
        title: 'Comfort After Wash Fabric Conditioner (Lily)',
        brand: 'Comfort',
        category: 'Household Essentials',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
        rating: 4.8,
        ratingCount: 980,
        inStock: true,
        variants: [
            { size: '1.5 Litre Bottle', mrp: 420, dmartPrice: 285 }
        ],
        description: 'Gives clothes unbeatable shine, long-lasting floral freshness, and extra softness after wash.'
    },
    {
        id: 'oc-028',
        title: 'Lizol Disinfectant Surface Cleaner Citrus',
        brand: 'Lizol',
        category: 'Household Essentials',
        image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500&auto=format&fit=crop&q=80',
        rating: 4.7,
        ratingCount: 1110,
        inStock: true,
        variants: [
            { size: '2 Litre Bottle', mrp: 410, dmartPrice: 295 }
        ],
        description: 'Kills 99.9% germs, removes 100 types of tough stains, and leaves a pleasant citrus fragrance.'
    },
    {
        id: 'oc-042',
        title: 'Rin Advanced Detergent Bar Soap',
        brand: 'Rin',
        category: 'Household Essentials',
        image: 'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=500&auto=format&fit=crop&q=80',
        rating: 4.8,
        ratingCount: 1940,
        inStock: true,
        variants: [
            { size: '4 x 250 g Multipack', mrp: 120, dmartPrice: 89 }
        ],
        description: 'Infused with bright clean technology that makes white clothes look whiter than new.'
    },
    {
        id: 'oc-043',
        title: 'Pril Dishwash Liquid Degreaser Lemon',
        brand: 'Pril',
        category: 'Household Essentials',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
        rating: 4.7,
        ratingCount: 1180,
        inStock: true,
        variants: [
            { size: '750 ml Bottle', mrp: 220, dmartPrice: 149 }
        ],
        description: 'Active degreasing formula cuts through grease quickly, giving shiny clean utensils.'
    },
    {
        id: 'oc-044',
        title: 'Colin Glass & Surface Cleaner Spray',
        brand: 'Colin',
        category: 'Household Essentials',
        image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500&auto=format&fit=crop&q=80',
        rating: 4.8,
        ratingCount: 1650,
        inStock: true,
        variants: [
            { size: '500 ml Spray Bottle', mrp: 125, dmartPrice: 92 }
        ],
        description: 'Shine boosters formula for streak-free shine on glass tables, mirrors, and electronic screens.'
    },
    {
        id: 'oc-045',
        title: 'Good Knight Gold Flash Mosquito Liquid Refill',
        brand: 'Good Knight',
        category: 'Household Essentials',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
        rating: 4.9,
        ratingCount: 2780,
        inStock: true,
        variants: [
            { size: 'Pack of 3 Refills', mrp: 270, dmartPrice: 195 }
        ],
        description: 'Dual mode liquid vaporiser ensuring fast action protection against dengue and malaria mosquitoes.'
    },
    {
        id: 'oc-046',
        title: 'Odonil Room Air Freshener Gel',
        brand: 'Odonil',
        category: 'Household Essentials',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop&q=80',
        rating: 4.7,
        ratingCount: 890,
        inStock: true,
        variants: [
            { size: '3 x 75g Pack', mrp: 180, dmartPrice: 129 }
        ],
        description: 'Continuous floral fragrance that neutralizes bad odors and keeps rooms fresh for up to 30 days.'
    },
    {
        id: 'oc-047',
        title: 'Hit Flying Insect Killer Mosquito Spray',
        brand: 'Hit',
        category: 'Household Essentials',
        image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500&auto=format&fit=crop&q=80',
        rating: 4.8,
        ratingCount: 1450,
        inStock: true,
        variants: [
            { size: '625 ml Can', mrp: 350, dmartPrice: 249 }
        ],
        description: 'Instant kill spray for hidden disease-causing mosquitoes and flies in corner spots.'
    },

    // --- PERSONAL CARE ---
    {
        id: 'oc-008',
        title: 'Dove Intense Repair Shampoo with Keratin',
        brand: 'Dove',
        category: 'Personal Care',
        image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500&auto=format&fit=crop&q=80',
        rating: 4.6,
        ratingCount: 1150,
        inStock: true,
        variants: [
            { size: '650 ml Bottle', mrp: 650, dmartPrice: 389 },
            { size: '340 ml Bottle', mrp: 360, dmartPrice: 220 }
        ],
        description: 'Nourishes heat-damaged and dry hair from deep inside for smooth, tangle-free tresses.'
    },
    {
        id: 'oc-012',
        title: 'Dettol Original Germ Protection Soap (Buy 4 Get 1)',
        brand: 'Dettol',
        category: 'Personal Care',
        image: 'https://images.unsplash.com/photo-1607006482602-76ca0fd2f864?w=500&auto=format&fit=crop&q=80',
        rating: 4.9,
        ratingCount: 2890,
        inStock: true,
        variants: [
            { size: '5 x 125g Multipack', mrp: 280, dmartPrice: 198 }
        ],
        description: '99.9% protection against illness-causing germs with trusted pine fragrance.'
    },
    {
        id: 'oc-029',
        title: 'Colgate Strong Teeth Calcium Toothpaste Combo',
        brand: 'Colgate',
        category: 'Personal Care',
        image: 'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?w=500&auto=format&fit=crop&q=80',
        rating: 4.9,
        ratingCount: 3410,
        inStock: true,
        variants: [
            { size: '500 g Saver Combo', mrp: 310, dmartPrice: 215 }
        ],
        description: 'Amino power formula that adds natural calcium to your teeth, making them 2x stronger.'
    },
    {
        id: 'oc-030',
        title: 'Nivea Soft Light Moisturizing Cream Tub',
        brand: 'Nivea',
        category: 'Personal Care',
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop&q=80',
        rating: 4.8,
        ratingCount: 1560,
        inStock: true,
        variants: [
            { size: '300 ml Jar', mrp: 450, dmartPrice: 295 }
        ],
        description: 'Enriched with Jojoba Oil and Vitamin E for non-greasy, fast-absorbing soft and supple skin.'
    },
    {
        id: 'oc-031',
        title: 'Himalaya Purifying Neem Face Wash',
        brand: 'Himalaya',
        category: 'Personal Care',
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop&q=80',
        rating: 4.7,
        ratingCount: 2200,
        inStock: true,
        variants: [
            { size: '300 ml Value Pack', mrp: 380, dmartPrice: 265 }
        ],
        description: 'Herbal soap-free face wash with Neem and Turmeric that prevents pimples and purifies skin.'
    },
    {
        id: 'oc-048',
        title: 'Pears Pure & Gentle Soap Bar',
        brand: 'Pears',
        category: 'Personal Care',
        image: 'https://images.unsplash.com/photo-1607006482602-76ca0fd2f864?w=500&auto=format&fit=crop&q=80',
        rating: 4.8,
        ratingCount: 1650,
        inStock: true,
        variants: [
            { size: '3 x 125 g Pack', mrp: 210, dmartPrice: 155 }
        ],
        description: 'Made with 98% pure glycerin and natural oils that gently cleanse while preserving skin moisture.'
    },
    {
        id: 'oc-049',
        title: 'Sunsilk Black Shine Shampoo',
        brand: 'Sunsilk',
        category: 'Personal Care',
        image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500&auto=format&fit=crop&q=80',
        rating: 4.7,
        ratingCount: 1320,
        inStock: true,
        variants: [
            { size: '650 ml Bottle', mrp: 550, dmartPrice: 349 }
        ],
        description: 'Co-created with hair experts, enriched with Amla Pearl Complex for shiny, luscious black hair.'
    },
    {
        id: 'oc-050',
        title: 'Sensodyne Rapid Relief Toothpaste',
        brand: 'Sensodyne',
        category: 'Personal Care',
        image: 'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?w=500&auto=format&fit=crop&q=80',
        rating: 4.9,
        ratingCount: 2100,
        inStock: true,
        variants: [
            { size: '80 g Tube', mrp: 210, dmartPrice: 169 }
        ],
        description: 'Clinically proven fast relief from tooth sensitivity in just 60 seconds of brushing.'
    },
    {
        id: 'oc-051',
        title: 'Gillette Mach3 Turbo Razor + Blades Set',
        brand: 'Gillette',
        category: 'Personal Care',
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop&q=80',
        rating: 4.8,
        ratingCount: 1890,
        inStock: true,
        variants: [
            { size: '1 Razor + 2 Cartridges', mrp: 450, dmartPrice: 325 }
        ],
        description: '3 stronger-than-steel blades for 15 comfortable shaves per cartridge with lubrication strip.'
    },
    {
        id: 'oc-052',
        title: 'Vaseline Intensive Care Cocoa Glow Body Lotion',
        brand: 'Vaseline',
        category: 'Personal Care',
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop&q=80',
        rating: 4.8,
        ratingCount: 1740,
        inStock: true,
        variants: [
            { size: '400 ml Bottle', mrp: 435, dmartPrice: 289 }
        ],
        description: 'Formulated with 100% pure cocoa butter and Vaseline jelly micro-droplets for deep glowing skin.'
    },
    {
        id: 'oc-053',
        title: 'Wild Stone Edge Deodorant Body Spray',
        brand: 'Wild Stone',
        category: 'Personal Care',
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop&q=80',
        rating: 4.6,
        ratingCount: 1250,
        inStock: true,
        variants: [
            { size: '150 ml Can', mrp: 225, dmartPrice: 149 }
        ],
        description: 'Long-lasting woody and marine fragrance that keeps body odor away for up to 12 hours.'
    },
    {
        id: 'oc-054',
        title: 'Whisper Choice Ultra Sanitary Pads',
        brand: 'Whisper',
        category: 'Personal Care',
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop&q=80',
        rating: 4.9,
        ratingCount: 3100,
        inStock: true,
        variants: [
            { size: 'XL Pack of 20 Pads', mrp: 180, dmartPrice: 135 }
        ],
        description: 'Delivers up to 100% stain protection with side wings and extra long coverage.'
    },

    // --- DAIRY & FROZEN ---
    {
        id: 'oc-004',
        title: 'Amul Pasteurised Salted Butter',
        brand: 'Amul',
        category: 'Dairy & Frozen',
        image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500&auto=format&fit=crop&q=80',
        rating: 4.9,
        ratingCount: 3120,
        inStock: true,
        variants: [
            { size: '500 g Pack', mrp: 275, dmartPrice: 245 },
            { size: '100 g Pack', mrp: 58, dmartPrice: 52 }
        ],
        description: 'Taste of India! Delicious, creamy, pasteurised butter made from pure cow and buffalo milk.'
    },
    {
        id: 'oc-016',
        title: 'Epigamia Greek Yogurt Natural',
        brand: 'Epigamia',
        category: 'Dairy & Frozen',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&auto=format&fit=crop&q=80',
        rating: 4.6,
        ratingCount: 540,
        inStock: true,
        variants: [
            { size: '400 g Tub', mrp: 170, dmartPrice: 135 }
        ],
        description: 'Thick, creamy & low fat Greek yogurt strained naturally to pack double the protein.'
    },
    {
        id: 'oc-032',
        title: 'Amul Cheese Slices (Pack of 10 Slices)',
        brand: 'Amul',
        category: 'Dairy & Frozen',
        image: 'https://images.unsplash.com/photo-1552767059-ce182ead8c1b?w=500&auto=format&fit=crop&q=80',
        rating: 4.9,
        ratingCount: 2800,
        inStock: true,
        variants: [
            { size: '200 g Pack', mrp: 150, dmartPrice: 132 }
        ],
        description: 'Delicious processed cheese slices rich in calcium and milk proteins. Perfect for burgers and sandwiches.'
    },
    {
        id: 'oc-055',
        title: 'Amul Taaza Homogenised Toned Milk',
        brand: 'Amul',
        category: 'Dairy & Frozen',
        image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&auto=format&fit=crop&q=80',
        rating: 4.9,
        ratingCount: 4100,
        inStock: true,
        variants: [
            { size: '1 Litre Tetra Pack', mrp: 72, dmartPrice: 66 }
        ],
        description: 'Long-life UHT pasteurised toned milk with zero preservatives. Ready to drink straight from pack.'
    },
    {
        id: 'oc-056',
        title: 'Amul Cow Ghee / Pure Desi Ghee',
        brand: 'Amul',
        category: 'Dairy & Frozen',
        image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=500&auto=format&fit=crop&q=80',
        rating: 4.9,
        ratingCount: 3890,
        inStock: true,
        variants: [
            { size: '1 Litre Tin', mrp: 650, dmartPrice: 569 }
        ],
        description: 'Rich granular texture and authentic aroma made from fresh cow milk fat.'
    },
    {
        id: 'oc-057',
        title: 'Mother Dairy Fresh Paneer / Cottage Cheese',
        brand: 'Mother Dairy',
        category: 'Dairy & Frozen',
        image: 'https://images.unsplash.com/photo-1552767059-ce182ead8c1b?w=500&auto=format&fit=crop&q=80',
        rating: 4.8,
        ratingCount: 1720,
        inStock: true,
        variants: [
            { size: '200 g Pack', mrp: 95, dmartPrice: 82 }
        ],
        description: 'Hygienically packed soft and tender cottage cheese suitable for tikka, palak paneer, and curries.'
    },
    {
        id: 'oc-058',
        title: 'Kwality Wall\'s Vanilla Magic Ice Cream Tub',
        brand: 'Kwality Wall\'s',
        category: 'Dairy & Frozen',
        image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=500&auto=format&fit=crop&q=80',
        rating: 4.7,
        ratingCount: 2150,
        inStock: true,
        variants: [
            { size: '700 ml Tub', mrp: 180, dmartPrice: 135 }
        ],
        description: 'Classic creamy vanilla dessert scoopable straight out of the freezer.'
    },
    {
        id: 'oc-059',
        title: 'McCain French Fries Frozen Potato Crisps',
        brand: 'McCain',
        category: 'Dairy & Frozen',
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&auto=format&fit=crop&q=80',
        rating: 4.8,
        ratingCount: 2400,
        inStock: true,
        variants: [
            { size: '1250 g Family Pack', mrp: 295, dmartPrice: 215 }
        ],
        description: 'Crispy outside, fluffy inside golden potato french fries ready in 3 minutes of deep frying or air frying.'
    },
    {
        id: 'oc-060',
        title: 'Amul Masti Spiced Buttermilk / Chaas',
        brand: 'Amul',
        category: 'Dairy & Frozen',
        image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&auto=format&fit=crop&q=80',
        rating: 4.9,
        ratingCount: 1980,
        inStock: true,
        variants: [
            { size: '1 Litre Pack', mrp: 50, dmartPrice: 42 }
        ],
        description: 'Refreshing traditional Indian spiced buttermilk infused with cumin, ginger, and green chillies.'
    },
    {
        id: 'oc-061',
        title: 'Gowardhan Fresh Malai Paneer',
        brand: 'Gowardhan',
        category: 'Dairy & Frozen',
        image: 'https://images.unsplash.com/photo-1552767059-ce182ead8c1b?w=500&auto=format&fit=crop&q=80',
        rating: 4.8,
        ratingCount: 1120,
        inStock: true,
        variants: [
            { size: '200 g Pack', mrp: 100, dmartPrice: 85 }
        ],
        description: '100% pure cow milk malai paneer with extra soft texture and high protein content.'
    },
    {
        id: 'oc-062',
        title: 'Amul Fresh Cream Tetra Pack',
        brand: 'Amul',
        category: 'Dairy & Frozen',
        image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&auto=format&fit=crop&q=80',
        rating: 4.9,
        ratingCount: 1650,
        inStock: true,
        variants: [
            { size: '250 ml Pack', mrp: 67, dmartPrice: 60 }
        ],
        description: 'Sterilised low-fat cream ideal for preparing soups, creamy gravies, fruit salads, and desserts.'
    }
];


// 2. OPEN CHALLENGE STORES DATASET (AKOLA BRANCHES)
const STORES = [
    {
        id: 'st-akola-01',
        name: 'Open Challenge Main Supermarket - Murtizapur Road',
        city: 'Akola',
        area: 'Murtizapur Road',
        image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&auto=format&fit=crop&q=80',
        address: 'Plot No. 12, Murtizapur Road, Near National Highway Touch, Akola, Maharashtra 444001',
        pincode: '444001',
        hours: '8:00 AM - 10:00 PM (Open All 7 Days)',
        phone: '0724-2430001',
        facilities: ['Spacious Parking Lot', 'Air Conditioned', 'Apparel & Utensils Section', 'Express Billing']
    },
    {
        id: 'st-akola-02',
        name: 'Open Challenge Supermarket - Civil Lines',
        city: 'Akola',
        area: 'Civil Lines',
        image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&auto=format&fit=crop&q=80',
        address: 'Civil Lines Square, Opposite Collector Office Road, Civil Lines, Akola, Maharashtra 444001',
        pincode: '444001',
        hours: '8:00 AM - 10:00 PM (Open All 7 Days)',
        phone: '0724-2430002',
        facilities: ['Covered Parking', 'Bakery & Fresh Dairy', 'Wheelchair Access']
    },
    {
        id: 'st-akola-03',
        name: 'Open Challenge Store - Jowahar Nagar',
        city: 'Akola',
        area: 'Jowahar Nagar',
        image: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=600&auto=format&fit=crop&q=80',
        address: 'Jowahar Nagar Main Road, Near Radha Krishna Temple, Akola, Maharashtra 444004',
        pincode: '444004',
        hours: '8:30 AM - 9:30 PM (Open All 7 Days)',
        phone: '0724-2430003',
        facilities: ['Customer Service Counter', 'Grain & Pulses Counter', 'Card & UPI Payments']
    },
    {
        id: 'st-akola-04',
        name: 'Open Challenge Express - Old City Market',
        city: 'Akola',
        area: 'Old City',
        image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=600&auto=format&fit=crop&q=80',
        address: 'Gandhi Road, Near Tower Square, Old City, Akola, Maharashtra 444005',
        pincode: '444005',
        hours: '8:00 AM - 10:00 PM (Open All 7 Days)',
        phone: '0724-2430004',
        facilities: ['Quick Billing Counters', 'Personal Care & Soaps', 'Daily Kitchen Staples']
    }
];

// 3. APP STATE
let state = {
    wishlist: JSON.parse(localStorage.getItem('oc_wishlist')) || [],
    activeCategory: 'all',
    searchQuery: '',
    selectedCategories: ['Grocery & Staples', 'Snacks & Beverages', 'Household Essentials', 'Personal Care', 'Dairy & Frozen'],
    minDiscount: 0,
    maxPrice: 2500,
    inStockOnly: true,
    sortBy: 'relevance',
    activeStoreCity: 'Akola'
};

// 4. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    const pageCategory = document.body.getAttribute('data-category-page');
    if (pageCategory) {
        state.selectedCategories = [pageCategory];
        state.activeCategory = pageCategory;
    }

    initHeroCarousel();
    initEventListeners();
    initDigitalFeatures();
    renderCatalog();
    renderStoresList();
    updateWishlistUI();
});

function initDigitalFeatures() {
    // 1. Digital Live Flash Sale Clock Ticker
    let hours = 4, minutes = 32, seconds = 15;
    const hElem = document.getElementById('digital-h');
    const mElem = document.getElementById('digital-m');
    const sElem = document.getElementById('digital-s');

    if (hElem && mElem && sElem) {
        setInterval(() => {
            seconds--;
            if (seconds < 0) {
                seconds = 59;
                minutes--;
                if (minutes < 0) {
                    minutes = 59;
                    hours--;
                    if (hours < 0) hours = 12;
                }
            }
            hElem.textContent = hours.toString().padStart(2, '0');
            mElem.textContent = minutes.toString().padStart(2, '0');
            sElem.textContent = seconds.toString().padStart(2, '0');
        }, 1000);
    }

    // 2. Digital Quick Filter Chips
    const chips = document.querySelectorAll('#digital-quick-filters .digital-chip');
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');

            const filterType = chip.getAttribute('data-chip');
            if (filterType === 'all') {
                state.minDiscount = 0;
                state.sortBy = 'relevance';
            } else if (filterType === 'flash') {
                state.minDiscount = 25;
                state.sortBy = 'discount-high';
            } else if (filterType === 'top') {
                state.minDiscount = 0;
                state.sortBy = 'relevance';
            } else if (filterType === 'saver') {
                state.minDiscount = 10;
                state.sortBy = 'price-low';
            }

            renderCatalog();
        });
    });
}

// ==========================================================================
// CAROUSEL LOGIC
// ==========================================================================
let currentSlide = 0;
let carouselTimer = null;

function initHeroCarousel() {
    const slides = document.querySelectorAll('#hero-carousel .slide');
    const indicators = document.querySelectorAll('#carousel-indicators .indicator');
    
    if (!slides.length) return;

    function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        indicators[currentSlide]?.classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        indicators[currentSlide]?.classList.add('active');
    }

    document.getElementById('carousel-next')?.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
        resetTimer();
    });

    document.getElementById('carousel-prev')?.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
        resetTimer();
    });

    indicators.forEach((ind, i) => {
        ind.addEventListener('click', () => {
            goToSlide(i);
            resetTimer();
        });
    });

    function startTimer() {
        carouselTimer = setInterval(() => goToSlide(currentSlide + 1), 5000);
    }

    function resetTimer() {
        clearInterval(carouselTimer);
        startTimer();
    }

    startTimer();
}

// ==========================================================================
// EVENT LISTENERS & FILTERS
// ==========================================================================
function initEventListeners() {
    document.querySelectorAll('#main-nav-links .nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const cat = link.getAttribute('data-cat');
            if (cat) {
                e.preventDefault();
                document.querySelectorAll('#main-nav-links .nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                filterByCategory(cat);
            }
        });
    });

    const searchInput = document.getElementById('main-search-input');
    
    searchInput?.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.trim().toLowerCase();
        handleLiveSearchDropdown(state.searchQuery);
        renderCatalog();
    });

    document.getElementById('search-submit-btn')?.addEventListener('click', () => {
        renderCatalog();
        closeLiveSearchDropdown();
        scrollToCatalog();
    });

    document.querySelectorAll('#category-checkboxes input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', () => {
            const checkedVals = Array.from(document.querySelectorAll('#category-checkboxes input[type="checkbox"]:checked')).map(c => c.value);
            state.selectedCategories = checkedVals;
            renderCatalog();
        });
    });

    document.querySelectorAll('input[name="discount-filter"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            state.minDiscount = parseInt(e.target.value, 10);
            renderCatalog();
        });
    });

    const priceSlider = document.getElementById('price-range-slider');
    const priceValText = document.getElementById('price-range-value');
    priceSlider?.addEventListener('input', (e) => {
        state.maxPrice = parseInt(e.target.value, 10);
        if (priceValText) priceValText.textContent = `Up to ₹${state.maxPrice.toLocaleString('en-IN')}`;
        renderCatalog();
    });

    document.getElementById('stock-only-toggle')?.addEventListener('change', (e) => {
        state.inStockOnly = e.target.checked;
        renderCatalog();
    });

    document.getElementById('reset-filters-btn')?.addEventListener('click', resetAllFilters);

    document.getElementById('sort-select')?.addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        renderCatalog();
    });

    const storeSearchInput = document.getElementById('store-search-input');
    storeSearchInput?.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        renderStoresList(query);
    });
}

function scrollToCatalog() {
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
}

function filterByCategory(cat) {
    if (cat === 'all') {
        state.activeCategory = 'all';
        state.minDiscount = 0;
        state.selectedCategories = ['Grocery & Staples', 'Snacks & Beverages', 'Household Essentials', 'Personal Care', 'Dairy & Frozen'];
    } else if (cat === 'offers') {
        state.activeCategory = 'offers';
        state.minDiscount = 30;
    } else {
        state.activeCategory = cat;
        state.selectedCategories = [cat];
    }

    syncSidebarUI();
    renderCatalog();
    scrollToCatalog();
}

function syncSidebarUI() {
    document.querySelectorAll('#category-checkboxes input[type="checkbox"]').forEach(cb => {
        cb.checked = state.selectedCategories.includes(cb.value);
    });
}

function resetAllFilters() {
    const pageCategory = document.body.getAttribute('data-category-page');
    state.activeCategory = pageCategory || 'all';
    state.searchQuery = '';
    state.selectedCategories = pageCategory ? [pageCategory] : ['Grocery & Staples', 'Snacks & Beverages', 'Household Essentials', 'Personal Care', 'Dairy & Frozen'];
    state.minDiscount = 0;
    state.maxPrice = 2500;
    state.inStockOnly = false;
    state.sortBy = 'relevance';

    const searchInput = document.getElementById('main-search-input');
    if (searchInput) searchInput.value = '';

    const priceSlider = document.getElementById('price-range-slider');
    if (priceSlider) priceSlider.value = 2500;

    const priceValText = document.getElementById('price-range-value');
    if (priceValText) priceValText.textContent = 'Up to ₹2,500';

    syncSidebarUI();
    renderCatalog();
    showToast('Filters cleared');
}

// ==========================================================================
// SEARCH SUGGESTIONS DROPDOWN
// ==========================================================================
function handleLiveSearchDropdown(query) {
    const dropdown = document.getElementById('search-dropdown-results');
    if (!dropdown) return;

    if (!query) {
        dropdown.classList.add('hidden');
        return;
    }

    const matches = PRODUCTS.filter(p => 
        p.title.toLowerCase().includes(query) || 
        p.brand.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query)
    ).slice(0, 6);

    if (matches.length === 0) {
        dropdown.innerHTML = `<div class="search-item"><span style="color:var(--text-muted);">No products found for "${query}"</span></div>`;
    } else {
        dropdown.innerHTML = matches.map(p => {
            const variant = p.variants[0];
            const discountPct = Math.round(((variant.mrp - variant.dmartPrice) / variant.mrp) * 100);
            return `
                <div class="search-item" onclick="openProductDetailModal('${p.id}')">
                    <img src="${p.image}" alt="${p.title}" onerror="this.src='https://images.unsplash.com/photo-1542838132-92c53300491e?w=100&auto=format&fit=crop&q=80'">
                    <div class="search-item-info">
                        <h5>${p.title}</h5>
                        <div class="prices">
                            <strong class="green-text">₹${variant.dmartPrice}</strong>
                            <span style="text-decoration:line-through; font-size:0.75rem; color:var(--text-muted); margin-left:6px;">₹${variant.mrp}</span>
                            <span class="save-badge" style="margin-left:6px;">${discountPct}% OFF</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    dropdown.classList.remove('hidden');
}

function closeLiveSearchDropdown() {
    document.getElementById('search-dropdown-results')?.classList.add('hidden');
}

document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
        closeLiveSearchDropdown();
    }
});

// ==========================================================================
// CATALOG RENDER & SORTING
// ==========================================================================
function renderCatalog() {
    const grid = document.getElementById('products-grid');
    const emptyState = document.getElementById('empty-state');
    const countLabel = document.getElementById('product-count-label');
    const titleLabel = document.getElementById('catalog-title');

    if (!grid) return;

    const pageCategory = document.body.getAttribute('data-category-page');

    let filtered = PRODUCTS.filter(product => {
        if (pageCategory && product.category !== pageCategory) {
            return false;
        }

        if (state.searchQuery) {
            const matchesQuery = product.title.toLowerCase().includes(state.searchQuery) ||
                                 product.brand.toLowerCase().includes(state.searchQuery) ||
                                 product.category.toLowerCase().includes(state.searchQuery);
            if (!matchesQuery) return false;
        }

        if (!pageCategory && state.selectedCategories.length > 0 && !state.selectedCategories.includes(product.category)) {
            return false;
        }

        if (state.inStockOnly && !product.inStock) return false;

        const v = product.variants[0];
        const discountPct = Math.round(((v.mrp - v.dmartPrice) / v.mrp) * 100);

        if (v.dmartPrice > state.maxPrice) return false;
        if (discountPct < state.minDiscount) return false;

        return true;
    });

    filtered.sort((a, b) => {
        const vA = a.variants[0];
        const vB = b.variants[0];
        const discA = ((vA.mrp - vA.dmartPrice) / vA.mrp);
        const discB = ((vB.mrp - vB.dmartPrice) / vB.mrp);

        switch (state.sortBy) {
            case 'price-low':
                return vA.dmartPrice - vB.dmartPrice;
            case 'price-high':
                return vB.dmartPrice - vA.dmartPrice;
            case 'discount-high':
                return discB - discA;
            case 'rating':
                return b.rating - a.rating;
            case 'relevance':
            default:
                return b.ratingCount - a.ratingCount;
        }
    });

    if (countLabel) countLabel.textContent = `Showing ${filtered.length} products`;
    if (titleLabel) {
        if (pageCategory) titleLabel.textContent = `${pageCategory} Products in Akola`;
        else if (state.activeCategory === 'offers') titleLabel.textContent = 'Open Challenge Super Saver Offers (Min 30% Off)';
        else if (state.activeCategory !== 'all') titleLabel.textContent = state.activeCategory;
        else titleLabel.textContent = 'All Supermarket Products';
    }

    if (filtered.length === 0) {
        grid.innerHTML = '';
        emptyState?.classList.remove('hidden');
        return;
    }

    emptyState?.classList.add('hidden');

    grid.innerHTML = filtered.map(product => {
        const primaryVar = product.variants[0];
        const discountPct = Math.round(((primaryVar.mrp - primaryVar.dmartPrice) / primaryVar.mrp) * 100);
        const savings = primaryVar.mrp - primaryVar.dmartPrice;
        const isWishlisted = state.wishlist.some(item => item.id === product.id);

        return `
            <div class="product-card" id="card-${product.id}">
                ${discountPct >= 15 ? `<span class="card-discount-badge">${discountPct}% OFF</span>` : ''}
                
                <button class="card-wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist('${product.id}')" aria-label="Save Item">
                    <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                </button>

                <div class="product-img-wrapper" onclick="openProductDetailModal('${product.id}')">
                    <img src="${product.image}" alt="${product.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&auto=format&fit=crop&q=80'">
                </div>

                <div class="product-brand">${product.brand}</div>
                <h4 class="product-title" onclick="openProductDetailModal('${product.id}')">${product.title}</h4>

                <select class="product-variant-select" onchange="handleVariantChange('${product.id}', this.value)">
                    ${product.variants.map((v, i) => `
                        <option value="${v.size}">${v.size} - ₹${v.dmartPrice}</option>
                    `).join('')}
                </select>

                <div class="product-price-box" id="price-box-${product.id}">
                    <div class="price-row">
                        <span class="dmart-price">₹${primaryVar.dmartPrice}</span>
                        <span class="mrp-price">MRP ₹${primaryVar.mrp}</span>
                    </div>
                    <span class="save-badge">Save ₹${savings}</span>
                </div>

                <div class="card-action-box">
                    <button class="btn-view-details" onclick="openProductDetailModal('${product.id}')">
                        <i class="fa-solid fa-eye"></i> VIEW DETAILS
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function handleVariantChange(productId, selectedSize) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const variant = product.variants.find(v => v.size === selectedSize);
    if (!variant) return;

    const savings = variant.mrp - variant.dmartPrice;

    const priceBox = document.getElementById(`price-box-${productId}`);
    if (priceBox) {
        priceBox.innerHTML = `
            <div class="price-row">
                <span class="dmart-price">₹${variant.dmartPrice}</span>
                <span class="mrp-price">MRP ₹${variant.mrp}</span>
            </div>
            <span class="save-badge">Save ₹${savings}</span>
        `;
    }
}

// ==========================================================================
// WISHLIST LOGIC
// ==========================================================================
function toggleWishlist(productId) {
    const index = state.wishlist.findIndex(item => item.id === productId);
    const product = PRODUCTS.find(p => p.id === productId);

    if (index > -1) {
        state.wishlist.splice(index, 1);
        showToast(`Removed from saved favorites`);
    } else if (product) {
        state.wishlist.push(product);
        showToast(`Saved ${product.title}`, 'success');
    }

    localStorage.setItem('oc_wishlist', JSON.stringify(state.wishlist));
    updateWishlistUI();
    renderCatalog();
}

function updateWishlistUI() {
    const badge = document.getElementById('wishlist-count-badge');
    if (badge) badge.textContent = state.wishlist.length;
}

function openWishlistDrawer() {
    if (state.wishlist.length === 0) {
        showToast('Your saved items list is empty!');
        return;
    }
    window.location.href = 'index.html#catalog';
    renderCatalog();
}

// ==========================================================================
// STORE LOCATIONS RENDER
// ==========================================================================
function renderStoresList(query = '') {
    const container = document.getElementById('stores-grid-container');
    if (!container) return;

    let filtered = STORES.filter(s => {
        if (query) {
            return s.name.toLowerCase().includes(query) || 
                   s.area.toLowerCase().includes(query) || 
                   s.city.toLowerCase().includes(query) ||
                   s.pincode.includes(query);
        }
        return true;
    });

    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align:center; padding:50px; background:#FFF; border-radius:8px; border:1px solid var(--border-color);">
                <i class="fa-solid fa-store-slash" style="font-size:3rem; color:var(--text-muted); margin-bottom:12px;"></i>
                <h3>No Open Challenge stores found matching "${query}"</h3>
                <p style="color:var(--text-secondary); margin-top:4px;">Try searching for Murtizapur Road, Civil Lines, Jowahar Nagar, or Old City in Akola.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(s => `
        <div class="store-card">
            <div class="store-img-box">
                <img src="${s.image}" alt="${s.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=600&auto=format&fit=crop&q=80'">
            </div>
            <div class="store-info-body">
                <div>
                    <div class="store-header">
                        <h3>${s.name}</h3>
                        <span class="store-badge"><i class="fa-solid fa-circle-check"></i> Open</span>
                    </div>
                    <div class="store-address">
                        <i class="fa-solid fa-location-dot green-text"></i> ${s.address}
                    </div>
                    <div class="store-meta">
                        <span><i class="fa-solid fa-clock"></i> ${s.hours}</span>
                        <span><i class="fa-solid fa-phone"></i> Tel: ${s.phone}</span>
                    </div>
                </div>

                <div style="margin-bottom:12px;">
                    <div style="font-size:0.75rem; font-weight:700; color:var(--text-muted); margin-bottom:4px;">STORE FACILITIES:</div>
                    <div style="display:flex; flex-wrap:wrap; gap:4px;">
                        ${s.facilities.map(f => `<span style="background:#F1F5F9; font-size:0.725rem; padding:2px 8px; border-radius:4px;">${f}</span>`).join('')}
                    </div>
                </div>

                <div class="store-actions">
                    <a href="https://maps.google.com/?q=${encodeURIComponent(s.name + ' ' + s.address)}" target="_blank" class="btn-directions">
                        <i class="fa-solid fa-diamond-turn-right"></i> Get Directions
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

function filterStores(area) {
    renderStoresList(area === 'all' ? '' : area);
}

// ==========================================================================
// CONTACT FORM & FAQ
// ==========================================================================
function handleContactSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('contact-name')?.value;
    showToast(`Thank you ${name}! Your message has been sent to our Akola Store Team.`, 'success');
    e.target.reset();
}

function toggleFaq(elem) {
    const item = elem.closest('.faq-item');
    item?.classList.toggle('active');
}

// ==========================================================================
// PRODUCT DETAIL MODAL
// ==========================================================================
function openProductDetailModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('product-detail-modal');
    const body = document.getElementById('product-detail-body');

    if (!modal || !body) return;

    const v = product.variants[0];
    const discountPct = Math.round(((v.mrp - v.dmartPrice) / v.mrp) * 100);

    body.innerHTML = `
        <div class="detail-img-box">
            <img src="${product.image}" alt="${product.title}" onerror="this.src='https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=80'">
        </div>
        <div class="detail-info-box">
            <div class="product-brand" style="font-size:0.85rem; margin-bottom:4px;">${product.brand}</div>
            <h2 style="font-size:1.4rem; margin-bottom:10px;">${product.title}</h2>
            
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:14px;">
                <span style="background:#FEF08A; color:#854D0E; font-size:0.8rem; font-weight:700; padding:2px 8px; border-radius:4px;">
                    <i class="fa-solid fa-star"></i> ${product.rating} (${product.ratingCount} Customer Ratings)
                </span>
                <span style="color:#166534; font-size:0.8rem; font-weight:700; background:#DCFCE7; padding:2px 8px; border-radius:4px;">
                    <i class="fa-solid fa-store"></i> In Stock in Akola Stores
                </span>
            </div>

            <div style="background:#F8FAFC; padding:14px; border-radius:8px; margin-bottom:16px;">
                <div style="display:flex; align-items:baseline; gap:10px;">
                    <span style="font-size:1.8rem; font-weight:800; color:var(--text-primary);">₹${v.dmartPrice}</span>
                    <span style="font-size:1.1rem; color:var(--text-muted); text-decoration:line-through;">MRP ₹${v.mrp}</span>
                    <span class="save-badge" style="font-size:0.85rem;">Save ₹${v.mrp - v.dmartPrice} (${discountPct}% OFF)</span>
                </div>
                <p style="font-size:0.75rem; color:var(--text-secondary); margin-top:4px;">(Everyday Low Price in all Akola branches)</p>
            </div>

            <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:20px; line-height:1.6;">${product.description}</p>

            <div style="display:flex; gap:12px;">
                <a href="stores.html" class="btn btn-primary btn-large" style="flex:1;">
                    <i class="fa-solid fa-map-location-dot"></i> FIND AKOLA STORE LOCATIONS
                </a>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
}

function closeProductDetailModal() {
    document.getElementById('product-detail-modal')?.classList.add('hidden');
}

// ==========================================================================
// TOAST SYSTEM
// ==========================================================================
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-info'}"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(100%)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
