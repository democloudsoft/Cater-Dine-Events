import { ServiceItem, EventTypeItem, GalleryItem, BlogPost, FaqItem, FoodCategory } from '../types';

export const BUSINESS_INFO = {
  name: "Cater Dine Events",
  shortName: "Cater Dine",
  tagline: "Catering & Event Services in Islamabad",
  phone: "0300 5054045",
  phoneRaw: "+923005054045",
  whatsappNumber: "923005054045",
  email: "caterdine1@gmail.com",
  address: "Sumbal Road, Gul Plaza, First Floor, Office # 6, F-10 Markaz, Islamabad, Pakistan, 44000",
  locationShort: "F-10 Markaz, Islamabad",
  serviceAreas: ["Islamabad", "Rawalpindi", "Twin Cities", "Chak Shahzad", "Bahria Town", "DHA"],
  socials: {
    facebook: "https://www.facebook.com/caterdine/",
    instagram: "https://www.instagram.com/cater.dine.events/",
  }
};

export const SITE_IMAGES = {
  logo: "https://iili.io/nfqfueI.png",
  hero: "https://iili.io/nf2Kfzx.png",
  wedding: "https://iili.io/nf2fEGV.png",
  mehndi: "https://iili.io/nf2xpSV.png",
  nikkah: "https://iili.io/nf2I91f.png",
  walima: "https://iili.io/nf2uMxt.png",
  corporate: "https://iili.io/nf2AcBe.png",
  food: "https://iili.io/nf2R8Pe.png",
  bbq: "https://iili.io/nf2505x.png",
  hitea: "https://iili.io/nf27Vp4.png",
  buffet: "https://iili.io/nf2E6J9.png",
  setup: "https://iili.io/nf2htsa.png",
  outdoor: "https://iili.io/nf2wvFj.png",
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "wedding",
    title: "Wedding Catering",
    description: "Complete wedding feast coordination featuring traditional Pakistani specialties, elegant buffet stations, and courteous guest service.",
    iconName: "UtensilsCrossed",
    badge: "Most Popular",
    features: ["Customized Multi-Course Menus", "Authentic Desi Mutton & Chicken Dishes", "Live Roti & Tandoor Stations", "Dedicated Service Captains"]
  },
  {
    id: "event",
    title: "Event Catering",
    description: "Full-service food catering for large gatherings, public ceremonies, community functions, and grand family milestones in Islamabad.",
    iconName: "Sparkles",
    features: ["Capacity for 50 to 1,500+ Guests", "Heavy-Duty Food Warmers & Chafers", "Customized Presentation", "Uniformed Staff"]
  },
  {
    id: "corporate",
    title: "Corporate Catering",
    description: "Refined luncheon buffets, seminar refreshments, executive meetings, and corporate hi-tea designed for punctuality and business decorum.",
    iconName: "Briefcase",
    features: ["Executive Bento & Box Lunches", "Punctual Delivery Guarantee", "Professional Beverage Stations", "Corporate Invoicing"]
  },
  {
    id: "mehndi-walima",
    title: "Mehndi & Walima Catering",
    description: "Festive street-food carts, live BBQ, and vibrant setups for Mehndi nights, alongside regal, stately menus for Walima receptions.",
    iconName: "PartyPopper",
    badge: "Specialty",
    features: ["Gol Gappa & Chaat Carts", "Live Charcoal Grill", "Slow-cooked Mutton Qorma", "Special Shahi Desserts"]
  },
  {
    id: "nikkah",
    title: "Nikkah & Family Events",
    description: "Intimate mosque or home catering with delicate traditional dishes, sweet platters, and dedicated service staff for your closest circle.",
    iconName: "HeartHandshake",
    features: ["Home & Mosque Friendly Setup", "Traditional Mithai & Kheer", "Delicate Tea & Kashmiri Chai", "Attentive Polite Staff"]
  },
  {
    id: "birthday-private",
    title: "Birthday & Private Events",
    description: "Customized menus for birthdays, graduation dinners, housewarming feasts, and private farmhouse celebrations with full catering support.",
    iconName: "Cake",
    features: ["Kid-Friendly & Desi Options", "Cocktail Appetizers", "Theme Buffet Styling", "Setup & Clean-up Handled"]
  },
  {
    id: "bbq-outdoor",
    title: "BBQ & Outdoor Catering",
    description: "Live coal grill stations preparing freshly made Chicken Tikka, Seekh Kababs, Malai Boti, and piping hot naan right before your guests.",
    iconName: "Flame",
    badge: "Live Stations",
    features: ["On-Site Live Charcoal Pit", "Tender Marinated Skewers", "Fresh Naan & Roti Tandoor", "Smokeless Layout Design"]
  },
  {
    id: "hi-tea",
    title: "Hi-Tea & Gatherings",
    description: "A refined assortment of savory pastries, sandwiches, spring rolls, samosas, fresh green tea, Kashmiri chai, and traditional desserts.",
    iconName: "Coffee",
    features: ["Assorted Finger Foods & Samosas", "Cardamom & Kashmiri Chai", "Fresh Pastries & Halwa", "Elegant Tiered Presentation"]
  },
  {
    id: "setup-coord",
    title: "Event Setup & Coordination",
    description: "Comprehensive venue layout setup, chafing dishes, premium crockery, cutlery, dining linen, and on-site catering supervisor management.",
    iconName: "Grid",
    features: ["Buffet Tables & Premium Linens", "Sanitized Crockery & Cutlery", "Chafing Dishes & Food Warmers", "Floor Supervisors"]
  }
];

export const EVENT_TYPES: EventTypeItem[] = [
  {
    id: "mehndi",
    title: "Mehndi Nights",
    description: "Lively food setups featuring live BBQ, Chaat counters, and traditional Pakistani street favorites for celebratory musical evenings.",
    imageUrl: SITE_IMAGES.mehndi,
    tag: "Festive & Vibrant"
  },
  {
    id: "nikkah",
    title: "Nikkah Ceremonies",
    description: "Dignified dining arrangements with refined entrees, traditional sweets, and graceful hospitality for solemn Nikkah moments.",
    imageUrl: SITE_IMAGES.nikkah,
    tag: "Intimate & Elegant"
  },
  {
    id: "barat",
    title: "Barat Banquets",
    description: "Lavish dining spreads for Barat guests, featuring succulent mutton dishes, aromatic Biryani, hot naan, and grand traditional desserts.",
    imageUrl: SITE_IMAGES.walima,
    tag: "Royal Feast"
  },
  {
    id: "walima",
    title: "Walima Receptions",
    description: "Sophisticated, stately Walima reception catering with premium entrees, curated salads, and attentive table service.",
    imageUrl: SITE_IMAGES.wedding,
    tag: "Stately & Refined"
  },
  {
    id: "dholki",
    title: "Dholki & Mayun",
    description: "Cozy home dining, finger foods, flavorful platters, and tea service for intimate pre-wedding music gatherings.",
    imageUrl: SITE_IMAGES.food,
    tag: "Family Warmth"
  },
  {
    id: "corporate",
    title: "Corporate Conferences",
    description: "Conferences, board meetings, annual gala dinners, and executive luncheons served with punctuality across Islamabad.",
    imageUrl: SITE_IMAGES.corporate,
    tag: "Executive Standard"
  },
  {
    id: "outdoor",
    title: "Outdoor & Farmhouse",
    description: "Farmhouse lawn banquets, Chak Shahzad gatherings, and open-air BBQ events with complete mobile kitchen support.",
    imageUrl: SITE_IMAGES.outdoor,
    tag: "Open-Air Experience"
  },
  {
    id: "private",
    title: "Private Celebrations",
    description: "Birthdays, anniversaries, housewarmings, and family milestones catered with personal culinary warmth.",
    imageUrl: SITE_IMAGES.setup,
    tag: "Personalized"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: "g1", src: "https://iili.io/nf2Kfzx.png", category: "wedding", title: "Barat Banquet & Stage Setup" },
  { id: "g2", src: "https://iili.io/nf2fEGV.png", category: "wedding", title: "Traditional Wedding Buffet Line" },
  { id: "g3", src: "https://iili.io/nf2xpSV.png", category: "mehndi", title: "Vibrant Mehndi Catering & Stage" },
  { id: "g4", src: "https://iili.io/nf2I91f.png", category: "wedding", title: "Nikkah Dining Ceremony" },
  { id: "g5", src: "https://iili.io/nf2uMxt.png", category: "wedding", title: "Walima Feast Presentation" },
  { id: "g6", src: "https://iili.io/nf2AcBe.png", category: "corporate", title: "Executive Corporate Luncheon" },
  { id: "g7", src: "https://iili.io/nf2R8Pe.png", category: "catering", title: "Traditional Pakistani Dishes" },
  { id: "g8", src: "https://iili.io/nf2505x.png", category: "catering", title: "Fresh Charcoal BBQ Grilling" },
  { id: "g9", src: "https://iili.io/nf27Vp4.png", category: "corporate", title: "Conference Tea & Snacks Buffet" },
  { id: "g10", src: "https://iili.io/nf2E6J9.png", category: "decor", title: "Marquee Hall Buffet Décor" },
  { id: "g11", src: "https://iili.io/nf2htsa.png", category: "decor", title: "Elegant Floral Centerpiece" },
  { id: "g12", src: "https://iili.io/nf2wvFj.png", category: "decor", title: "Outdoor Lawn Event Setup" },
  { id: "g13", src: "https://iili.io/nf2eFyl.png", category: "catering", title: "Curried Specialties & Hot Naan" },
  { id: "g14", src: "https://iili.io/nf2eZKu.png", category: "catering", title: "Aromatic Biryani in Chafing Dish" },
  { id: "g15", src: "https://iili.io/nf2vdml.png", category: "mehndi", title: "Festive Street Food Counters" },
  { id: "g16", src: "https://iili.io/nf2vLYb.png", category: "wedding", title: "Grand Barat Hall Arrangement" },
  { id: "g17", src: "https://iili.io/nf288cg.png", category: "decor", title: "Warm Ambience Lighting" },
  { id: "g18", src: "https://iili.io/nf2Skzl.png", category: "corporate", title: "Formal Dining Table Setting" },
  { id: "g19", src: "https://iili.io/nf2Uo2n.png", category: "catering", title: "Hot Live Tandoor Station" },
  { id: "g20", src: "https://iili.io/nf2Ubj4.png", category: "mehndi", title: "Colorful Dholki Music Setup" },
  { id: "g21", src: "https://iili.io/nf2gpRa.png", category: "catering", title: "Traditional Dessert Spread" },
  { id: "g22", src: "https://iili.io/nf2rUqN.png", category: "wedding", title: "Twin Cities Wedding Banquet" },
  { id: "g23", src: "https://iili.io/nf24w4S.png", category: "catering", title: "Fresh Salads & Chutneys Counter" },
  { id: "g24", src: "https://iili.io/nf265Au.png", category: "decor", title: "Lawn Entrance & Floral Archway" }
];

export const FOOD_SPECIALTIES: FoodCategory[] = [
  {
    title: "Rice & Biryani Specialties",
    items: [
      { name: "Special Mutton Dum Biryani", desc: "Long-grain aged basmati rice cooked on dum with tender mutton and aromatic saffron spices.", popular: true },
      { name: "Chicken Sindhi Biryani", desc: "Spiced chicken layers with potatoes, dried plums, and fresh mint leaves." },
      { name: "Zafrani Mutton Pulao", desc: "Fragrant mutton yakhni broth infused with genuine Kashmiri saffron.", popular: true },
      { name: "Afghani Kabuli Pulao", desc: "Mild savory rice garnished with caramelized carrots and sweet plump raisins." },
      { name: "Vegetable Matar Pulao", desc: "Light fragrant rice with sweet peas and delicate whole spices." }
    ]
  },
  {
    title: "Curries & Karahi Dishes",
    items: [
      { name: "Shinwari Mutton Karahi", desc: "Authentic Khyber style with pure tomatoes, green chilies, and black pepper in animal fat or desi ghee.", popular: true },
      { name: "Chicken White Handi", desc: "Velvety boneless chicken simmered in fresh dairy cream, yogurt, and crushed white peppercorns." },
      { name: "Slow-Simmered Mutton Qorma", desc: "Traditional shahi gravy with fried golden onions, whole cloves, and kewra essence.", popular: true },
      { name: "Traditional Beef Nihari", desc: "Overnight slow-cooked beef shank gravy served with julienned ginger and lemon wedges." },
      { name: "Lahori Murgh Chana", desc: "Classic combination of tender chicken and chickpeas simmered with aromatic spices." }
    ]
  },
  {
    title: "Live Charcoal BBQ",
    items: [
      { name: "Chicken Malai Boti", desc: "Melt-in-mouth boneless chicken cubes marinated in heavy cream, green cardamom, and white pepper.", popular: true },
      { name: "Reshmi Chicken Kababs", desc: "Finely ground chicken infused with fresh herbs and skewered over glowing coals." },
      { name: "Tender Beef Seekh Kababs", desc: "Traditional spiced minced beef skewers grilled to juicy perfection.", popular: true },
      { name: "Charcoal Grilled Chicken Tikka", desc: "Quarter chicken leg or breast pieces coated in zesty Lahori spice blend." },
      { name: "Fish Tikka (Seasonal)", desc: "Fresh fish fillets marinated in carom seeds, crushed chili, and lemon juice." }
    ]
  },
  {
    title: "Traditional Desserts",
    items: [
      { name: "Shahi Kheer with Silver Leaf", desc: "Slow-reduced creamy rice and milk pudding garnished with pistachios and chandi vark.", popular: true },
      { name: "Hot Gajar Ka Halwa (Seasonal)", desc: "Fresh winter carrots braised in desi ghee, whole milk, and rich khoya." },
      { name: "Gulab Jamun in Saffron Syrup", desc: "Warm soft khoya dumplings soaked in fragrant cardamom syrup.", popular: true },
      { name: "Ras Malai with Pistachio", desc: "Spongy cottage cheese patties bathed in sweetened cardamom-scented milk." },
      { name: "Customized Ice Cream Counters", desc: "Live scoop stations with rich chocolate, vanilla, and seasonal fruit ice creams." }
    ]
  },
  {
    title: "Hi-Tea & Savories",
    items: [
      { name: "Crispy Cocktail Samosas", desc: "Golden pastry triangles stuffed with spiced minced chicken or seasoned potatoes." },
      { name: "Chicken Patties & Vol-au-vent", desc: "Flaky puff pastry stuffed with creamy black pepper chicken filling." },
      { name: "Assorted Tea Sandwiches", desc: "Crustless finger sandwiches with chicken spread and cucumber ribbons." },
      { name: "Dahi Bhallay & Fruit Chaat", desc: "Spiced lentil dumplings in whipped yogurt and sweet seasonal fruit bowl." }
    ]
  },
  {
    title: "Breads & Beverages",
    items: [
      { name: "Fresh Roghani & Tandoori Naan", desc: "Oven-baked naans brushed with sesame seeds, butter, and milk wash." },
      { name: "Kashmiri Chai with Crushed Nuts", desc: "Traditional pink tea brewed with cardamom and crushed almonds and pistachios.", popular: true },
      { name: "Cardamom Karak Chai", desc: "Strong milk tea slow-brewed with crushed green cardamom pods." },
      { name: "Mint Lemonade & Seasonal Drinks", desc: "Refreshing crushed ice beverage with fresh garden mint and lime juice." }
    ]
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Do you provide catering for weddings in Islamabad?",
    answer: "Yes, Cater Dine Events provides comprehensive catering services for weddings across Islamabad and Rawalpindi, including menu planning, buffet presentation, live stations, and professional service staff."
  },
  {
    question: "Do you cater for Mehndi, Barat and Walima events?",
    answer: "Yes, we specialize in Mehndi, Barat, Walima, Nikkah, and Dholki celebrations with tailored traditional and contemporary menus matched to each ceremony's ambiance."
  },
  {
    question: "Can I customize the menu?",
    answer: "Absolutely. Every event menu is customized according to your preferences, guest expectations, budget, and dietary considerations. You can choose specific mutton, chicken, BBQ, and dessert combinations."
  },
  {
    question: "Do you provide catering staff?",
    answer: "Yes, we provide professionally trained, uniformed serving staff, floor captains, and buffet supervisors to manage seamless food presentation, guest assistance, and station replenishment."
  },
  {
    question: "Can you cater for corporate events?",
    answer: "Yes, we cater for executive corporate meetings, conferences, seminars, annual general meetings, hi-tea receptions, and corporate gala dinners throughout Islamabad and Rawalpindi."
  },
  {
    question: "Do you provide BBQ and outdoor catering?",
    answer: "Yes, we arrange live BBQ stations and mobile kitchen setups for farmhouses (such as Chak Shahzad and Simly Dam road), lawn weddings, and private residences with safe charcoal grill setups."
  },
  {
    question: "How early should I book my event?",
    answer: "We recommend reserving your event date 3 to 6 weeks in advance for weddings and large peak-season functions, though we also accommodate shorter notice subject to date and team availability."
  },
  {
    question: "Do you provide event setup?",
    answer: "Yes, along with catering, we offer complete buffet setup, heavy-duty stainless steel chafing dishes, food warmers, crockery, cutlery, table arrangements, and event coordination."
  },
  {
    question: "Can I request a quotation?",
    answer: "Yes, you can request an instant quotation through our interactive booking form on this site, or directly contact our team via phone or WhatsApp at 0300 5054045."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "choose-catering-service",
    title: "How to Choose a Catering Service for a Wedding in Islamabad",
    category: "Wedding Catering",
    readTime: "5 min read",
    imageUrl: SITE_IMAGES.hero,
    excerpt: "Key factors every family should assess when selecting a wedding caterer in the Twin Cities, from menu flexibility to staffing ratios and venue logistics.",
    content: [
      "Planning a wedding in Islamabad or Rawalpindi is an intricate journey where food and hospitality hold the center stage. When guests remember your celebration, the warmth of the hospitality and the taste of the feast are what linger longest.",
      "1. Verify Food Hygiene & Fresh Sourcing: Insist on fresh, daily sourced meats and farm-fresh ingredients. A reputable caterer will be open about their kitchen practices.",
      "2. Look for Menu Flexibility: Every family has unique palate expectations. Ensure your caterer can fine-tune spice levels, offer authentic regional gravies (like Shinwari Karahi or slow-cooked Mutton Qorma), and provide live stations.",
      "3. Inquire About Staffing and Floor Captains: Hot food must reach guests punctually. Cater Dine Events allocates dedicated floor supervisors to oversee live buffet replenishment and table assistance."
    ]
  },
  {
    id: "wedding-catering-checklist",
    title: "Wedding Catering Checklist for Islamabad Events",
    category: "Planning Checklist",
    readTime: "4 min read",
    imageUrl: SITE_IMAGES.wedding,
    excerpt: "A practical timeline covering food tasting, guest count finalization, dietary accommodations, and buffet layout coordination with Islamabad marquees.",
    content: [
      "Coordinating catering with marquee halls on Islamabad Expressway, Club Road, or farmhouse lawns requires a disciplined schedule.",
      "• 4 Weeks Prior: Finalize the core menu (mutton, chicken, rice specialty, bread variety, desserts).",
      "• 2 Weeks Prior: Confirm estimated guest count and confirm whether live cooking stations (like BBQ or Jalebi) are permitted at your selected venue.",
      "• 5 Days Prior: Lock the guaranteed head-count with your caterer.",
      "• Day of Event: Cater Dine Events arrives at the venue 2-3 hours before guest arrival to set chafing stations, arrange crockery, and begin slow temperature stabilization."
    ]
  },
  {
    id: "estimating-food-portions",
    title: "How Much Food Do You Need for a Wedding? Avoiding Shortages & Wastage",
    category: "Budget & Portions",
    readTime: "4 min read",
    imageUrl: SITE_IMAGES.walima,
    excerpt: "Understanding traditional Pakistani wedding food portions to avoid embarrassing food shortages while preventing excessive food wastage on Barat and Walima days.",
    content: [
      "Calculating food for a Pakistani wedding requires balancing hospitality generosity with responsible planning.",
      "In general, caterers calculate approximately 350-450 grams of cooked meat per adult guest across multiple dishes, along with 150-180 grams of cooked Biryani or Pulao rice.",
      "If you are offering multiple live counters (such as Chicken Tikka and Seekh Kabab) in addition to main gravies, individual dish consumption adjusts naturally. Our coordinators in F-10 Markaz calculate precise portion weight formulas based on your final menu."
    ]
  },
  {
    id: "best-pakistani-wedding-dishes",
    title: "Best Pakistani Dishes for Wedding Catering in 2026",
    category: "Menu Ideas",
    readTime: "6 min read",
    imageUrl: SITE_IMAGES.food,
    excerpt: "Explore the all-time favorites: tender Mutton Dum Biryani, Shinwari Karahi, Reshmi Seekh Kababs, Shahi Kheer, and hot Roghani Naan.",
    content: [
      "Pakistani wedding cuisine is celebrated worldwide for its depth of flavor. In Islamabad, the most sought-after combinations balance regal gravies with live grilled items:",
      "1. Mutton Dum Biryani or Zafrani Pulao: The cornerstone of any Barat menu.",
      "2. White Chicken Handi & Shinwari Karahi: Providing balanced spice options for diverse guest preferences.",
      "3. Fresh BBQ: Chicken Malai Boti and Beef Seekh Kababs grilled live on charcoal.",
      "4. Traditional Shahi Desserts: Warm Gajar Ka Halwa in winter or chilled Pistachio Kheer and Gulab Jamun year-round."
    ]
  },
  {
    id: "corporate-catering-guide",
    title: "How to Plan Catering for a Corporate Event in the Capital",
    category: "Corporate Catering",
    readTime: "3 min read",
    imageUrl: SITE_IMAGES.corporate,
    excerpt: "Ensuring punctuality, professional executive service, and balanced luncheon menus for corporate conferences in Islamabad.",
    content: [
      "Corporate catering in Islamabad demands strict punctuality. Conferences, training seminars, and executive board meetings have rigid schedules that cannot afford catering delays.",
      "Choose a caterer that delivers pre-arranged buffet setups 45 minutes ahead of break times. Hi-tea options with bite-sized chicken patties, tea sandwiches, mini samosas, and premium cardamom chai keep attendees refreshed and focused."
    ]
  },
  {
    id: "mehndi-catering-ideas",
    title: "Mehndi Catering Ideas for a Pakistani Wedding Celebration",
    category: "Mehndi Traditions",
    readTime: "4 min read",
    imageUrl: SITE_IMAGES.mehndi,
    excerpt: "Creative food concepts for Mehndi and Mayun nights, featuring live BBQ skewers, Chaat carts, Halwa Puri corners, and fresh mocktails.",
    content: [
      "Mehndi nights are informal, festive, and musical. Rather than a formal seated dinner, guests appreciate lively food stalls they can visit between dance performances.",
      "Popular Mehndi counters include live Gol Gappay with tangy mint water, spiced Chana Chaat, charcoal-grilled Chicken Boti skewers wrapped in fresh parathas, and piping hot Jalebis prepared right before the audience."
    ]
  }
];
