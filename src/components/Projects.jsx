import { useState } from 'react'
import CaseStudyModal from './CaseStudyModal.jsx'
import './Projects.css'

// Comprehensive In-Portfolio Case Studies (Sanitized & Security Compliant)
const CASE_STUDIES_DATA = {
  dineloop: {
    id: 'dineloop',
    title: 'DineLoop Food Delivery Application',
    subtitle: 'Modernizing on-demand food ordering with instant cashback, sub-second refunds, and local fleet tracking.',
    category: 'Consumer Mobile UI/UX',
    platform: 'iOS & Android Mobile App',
    domain: 'Food & Quick-Commerce Logistics',
    role: 'Lead UI/UX Designer & Prototyper',
    techStack: ['Figma', 'Interactive Prototyping', 'User Research', 'Design Systems'],
    figmaLink: 'https://www.figma.com/design/Yj6VZFyg7661PXcs2O2SU4/Dineloop?node-id=363-176&t=9ndRKKM6ycjs1CsJ-1',
    metrics: [
      { value: '+30%', label: 'Repeat Order Frequency' },
      { value: '< 1s', label: 'Instant Wallet Refund Speed' },
      { value: '4.8★', label: 'User Usability Rating' },
      { value: '45%', label: 'Higher Vendor Engagement' },
    ],
    overview:
      'DineLoop is a customer-first food delivery application engineered to eliminate the biggest pain points in on-demand food delivery: slow refund turnarounds, low post-purchase customer engagement, and the lack of affordable fleet-level tracking for neighborhood restaurants. By introducing an instant-wallet refund mechanism and gamified post-order rewards, DineLoop transforms standard ordering into a transparent, loyal experience.',
    painPoints: [
      'Traditional delivery apps take 2–5 business days to process order cancellation refunds, eroding customer trust.',
      'Customer engagement drops to zero immediately after placing an order.',
      'Small and local restaurants cannot afford costly enterprise delivery-fleet software.',
      'Customers lack clear transparency when orders encounter kitchen or delivery delays.',
    ],
    solutions: [
      'Architected an Instant Wallet Refund system returning funds within 1 second for canceled orders.',
      'Gamified the post-order experience with interactive spin-to-win and scratch cards granting instant cashback.',
      'Designed a lightweight map-tracking interface giving local restaurants real-time rider dispatch visibility.',
      'Implemented a dish-level reorder loyalty system rewarding frequent repeat diners.',
    ],
    features: [
      {
        icon: '⚡',
        title: 'Instant Cashback & Wallet Refunds',
        desc: 'Zero-wait cancellation refunds directly credited to the user wallet for immediate re-use.',
      },
      {
        icon: '🎮',
        title: 'Gamified Reward Loops',
        desc: 'Interactive post-order mini-games boosting app engagement and rewarding repeat visits.',
      },
      {
        icon: '🗺️',
        title: 'Live Rider Map Tracking',
        desc: 'Clear visual stage tracking from restaurant preparation to doorstep arrival.',
      },
      {
        icon: '🔁',
        title: '1-Tap Reorder Mechanics',
        desc: 'Smart recommendations and personalized discounts on frequently enjoyed culinary favorites.',
      },
    ],
  },

  'bulk-gas': {
    id: 'bulk-gas',
    title: 'Bulk Gas Delivery Enterprise Application',
    subtitle: 'Digitizing industrial LPG logistics with automated dispatch, IoT telemetry, and e-POD verification.',
    category: 'Enterprise Logistics & IoT',
    platform: 'Web Dashboard & Driver Tablet UI',
    domain: 'Industrial Energy & Bulk Logistics',
    role: 'Enterprise UI Developer & Designer',
    techStack: ['React.js', 'Vite', 'Figma', 'REST APIs', 'Bootstrap'],
    metrics: [
      { value: '35%', label: 'Faster Turnaround Time' },
      { value: '100%', label: 'Digital Audit Compliance' },
      { value: '0', label: 'Lost Paper Manifests' },
      { value: '98%', label: 'On-Time Tanker Delivery' },
    ],
    overview:
      'Industrial and commercial bulk gas delivery historically relied on cumbersome paper manifests, delayed driver routing, and lack of real-time gas level telemetry. This enterprise application unites dispatch controllers, tanker drivers, and industrial clients into a synchronized digital workflow with automated scheduling, pressure sensor integration, and instant electronic proof-of-delivery (e-POD).',
    painPoints: [
      'Manual paper trip sheets led to recurring billing disputes and misplaced delivery manifests.',
      'Fleet managers had no visibility into tanker capacity or real-time fuel/gas discharge levels.',
      'Delays in customer sign-off caused invoicing backlogs spanning up to 3 weeks.',
      'Stringent safety protocols required immutable audit logging for hazmat compliance.',
    ],
    solutions: [
      'Developed a unified dispatch command center with automated tanker load and route planning.',
      'Built a driver tablet interface with offline-first digital signature capture and automated e-POD generation.',
      'Integrated real-time telemetry gauges displaying tank temperature, pressure, and delivered volume.',
      'Automated enterprise ERP billing synchronization immediately upon delivery sign-off.',
    ],
    features: [
      {
        icon: '🚛',
        title: 'Automated Route Dispatch',
        desc: 'Optimized multi-stop routing factoring hazardous material corridors and traffic patterns.',
      },
      {
        icon: '📊',
        title: 'Telemetry Sensor Monitoring',
        desc: 'Live tanker pressure, volume, and temperature readings displayed in high-contrast gauges.',
      },
      {
        icon: '✍️',
        title: 'e-POD & Instant Invoicing',
        desc: 'Tamper-proof digital signatures and geolocation stamps that trigger real-time invoice generation.',
      },
      {
        icon: '🔒',
        title: 'Hazmat Safety Compliance',
        desc: 'Integrated digital pre-trip safety checklists required before dispatch activation.',
      },
    ],
  },

  'smart-maintenance': {
    id: 'smart-maintenance',
    title: 'Smart Maintenance AMC Operations Platform',
    subtitle: 'Streamlining facility management, technician dispatch, and SLA adherence across enterprise facilities.',
    category: 'Facility & Asset Management',
    platform: 'Cloud Web Portal & Field Mobile UI',
    domain: 'Enterprise Operations & HVAC Maintenance',
    role: 'UI/UX Designer & Frontend Architect',
    techStack: ['React.js', 'Figma', 'JavaScript (ES6+)', 'Node.js', 'REST APIs'],
    metrics: [
      { value: '40%', label: 'Reduction in MTTR' },
      { value: '95%', label: 'SLA Adherence Rate' },
      { value: '2.5x', label: 'Technician Job Output' },
      { value: '100%', label: 'Asset Lifecycle Traceability' },
    ],
    overview:
      'Annual Maintenance Contracts (AMC) across commercial properties suffer when service requests are tracked across spreadsheets and phone calls. The Smart Maintenance Platform digitizes the entire asset service lifecycle: from QR code equipment scanning to automated technician dispatch, countdown SLA alerts, and comprehensive digital maintenance history.',
    painPoints: [
      'Missed maintenance windows triggered expensive equipment breakdowns and contractual SLA penalties.',
      'Field technicians lacked access to historical repair logs or spare part catalogs while on-site.',
      'Property managers had no proof of technician presence or verified work duration.',
      'Client feedback was disconnected from internal performance evaluation.',
    ],
    solutions: [
      'Engineered an SLA-driven ticketing dashboard with color-coded countdown timers and auto-escalation.',
      'Designed QR-code asset tagging enabling technicians to scan equipment and instantly view complete service logs.',
      'Integrated GPS geofenced check-in and check-out to verify technician on-site presence.',
      'Created a customer portal for instantaneous service sign-offs and satisfaction ratings.',
    ],
    features: [
      {
        icon: '🏷️',
        title: 'QR Code Asset Scanner',
        desc: 'Instant access to equipment manuals, historical breakdowns, and replacement part numbers.',
      },
      {
        icon: '⏱️',
        title: 'SLA Countdown Alerts',
        desc: 'Dynamic countdown tickers alerting supervisors before response deadlines lapse.',
      },
      {
        icon: '📍',
        title: 'Geofenced Field Verification',
        desc: 'GPS-confirmed technician check-in ensuring verified on-site service delivery.',
      },
      {
        icon: '📑',
        title: 'Automated AMC Renewals',
        desc: 'Predictive contract renewal alerts based on equipment age and maintenance frequency.',
      },
    ],
  },

  'smart-operations': {
    id: 'smart-operations',
    title: 'Smart Operations Platform',
    subtitle: 'Real-time distributed workforce visibility, automated scheduling, and executive operational intelligence.',
    category: 'Workforce & Operations Management',
    platform: 'Cross-Platform Enterprise Web App',
    domain: 'Enterprise Workforce Logistics',
    role: 'Frontend UI Developer',
    techStack: ['React.js', 'Tailwind CSS', 'Vite', 'Figma', 'REST APIs'],
    metrics: [
      { value: '28%', label: 'Operational Efficiency Gain' },
      { value: '0', label: 'Attendance Discrepancies' },
      { value: '60%', label: 'Faster Shift Scheduling' },
      { value: '100%', label: 'Real-Time Site Visibility' },
    ],
    overview:
      'Managing hundreds of personnel across multi-site field operations is prone to attendance discrepancies, idle workforce hours, and communication delays. The Smart Operations Platform offers C-suite executives and site managers unified operational transparency: live personnel deployment heatmaps, automated shift allocation, milestone tracking, and audit-ready reporting.',
    painPoints: [
      'Manual attendance tracking caused recurring payroll disputes and ghost-worker vulnerabilities.',
      'Project leads lacked real-time visibility into milestone progress across remote regional sites.',
      'Resource re-allocation during emergencies required hours of phone calls and manual rescheduling.',
      'Fragmented communication tools prevented rapid escalation of site-level impediments.',
    ],
    solutions: [
      'Designed a real-time site dashboard with interactive workforce status maps and attendance feeds.',
      'Implemented biometrically verified and geofenced mobile check-ins with automated timesheet syncing.',
      'Engineered drag-and-drop shift scheduling with conflict detection and automated worker notifications.',
      'Built executive KPI summary widgets visualizing project burn rates, output milestones, and safety scores.',
    ],
    features: [
      {
        icon: '🗺️',
        title: 'Multi-Site Workforce Map',
        desc: 'Real-time geographic distribution of field personnel and assigned site tasks.',
      },
      {
        icon: '📅',
        title: 'Smart Shift Scheduling',
        desc: 'Automated roster generation with statutory rest period and skill-requirement checks.',
      },
      {
        icon: '🚨',
        title: 'Real-time Incident Escalation',
        desc: 'Instant priority incident reporting with photo attachments and emergency broadcast.',
      },
      {
        icon: '📈',
        title: 'Executive KPI Dashboard',
        desc: 'Clean data visualizations tracking operational output, budget health, and milestones.',
      },
    ],
  },

  pos: {
    id: 'pos',
    title: 'POS Inventory Management System',
    subtitle: 'High-speed retail point-of-sale and multi-location inventory synchronization architecture.',
    category: 'Retail & FinTech UI/UX',
    platform: 'Web & Desktop Terminal UI',
    domain: 'Retail & Inventory Management',
    role: 'UI/UX Designer & Design System Lead',
    techStack: ['Figma', 'Prototyping', 'Design Systems', 'User Ergonomics'],
    figmaLink: 'https://www.figma.com/design/JDvajJiUMkWEbmKPIDV6iI/pos-inventory-management?node-id=38-2&t=ppv1JnYFVXeuBFPJ-1',
    metrics: [
      { value: '50%', label: 'Faster Cashier Checkout' },
      { value: '99.8%', label: 'Stock Count Accuracy' },
      { value: '< 200ms', label: 'Barcode Lookup Latency' },
      { value: '3x', label: 'Easier Cashier Onboarding' },
    ],
    overview:
      'Traditional point-of-sale software is cluttered, slow to respond during peak retail rushes, and causes inventory count discrepancies across warehouses. This POS design focuses on cashier ergonomics: keyboard-first shortcuts, ultra-fast barcode processing, offline caching, and real-time multi-store stock visibility.',
    painPoints: [
      'Complex multi-click checkout flows formed long customer queues during peak shopping hours.',
      'Stockouts occurred frequently due to delayed synchronization between retail floors and central warehouses.',
      'Cashiers required weeks of training to master complex legacy terminal software.',
    ],
    solutions: [
      'Designed an uncluttered, high-contrast POS interface optimized for touch terminals and physical barcode scanners.',
      'Created real-time stock indicators with automated purchase-order triggers when thresholds fall below safety levels.',
      'Built a streamlined 2-tap payment flow supporting split payments, digital wallets, and customer loyalty points.',
    ],
    features: [
      {
        icon: '⚡',
        title: 'Keyboard & Touch Ergonomics',
        desc: 'Optimized touch targets and hotkeys designed for high-throughput retail checkout.',
      },
      {
        icon: '📦',
        title: 'Multi-Store Inventory Sync',
        desc: 'Live stock quantities visible across all branches with 1-click inter-store transfers.',
      },
      {
        icon: '💳',
        title: 'Flexible Split Payments',
        desc: 'Frictionless checkout supporting multi-tender splits (cash, card, loyalty credits).',
      },
      {
        icon: '📉',
        title: 'Low-Stock Predictive Alerts',
        desc: 'Automated reorder notifications based on daily sales velocity.',
      },
    ],
  },

  metro: {
    id: 'metro',
    title: 'Chennai Metro Transit Mobile App Redesign',
    subtitle: 'Human-centered public transit interface simplifying interchange navigation, crowd tracking, and ticketing.',
    category: 'Public Transit Mobility UI/UX',
    platform: 'iOS & Android App Redesign',
    domain: 'Smart Cities & Public Transportation',
    role: 'Lead Product & Interaction Designer',
    techStack: ['Figma', 'UX Research', 'Information Architecture', 'Usability Testing'],
    figmaLink: 'https://www.figma.com/design/zR6kfOY85VEyBNUS1p2D9M/Metro?node-id=0-1&t=uiKjZUEb7lN9wAUY-1',
    metrics: [
      { value: '98%', label: 'User Task Success Rate' },
      { value: '60%', label: 'Faster Route Planning' },
      { value: '1-Tap', label: 'QR Ticket Generation' },
      { value: '100%', label: 'Bilingual Accessibility' },
    ],
    overview:
      'Navigating massive public metro networks can be overwhelming for daily commuters and first-time travelers alike. This redesign of the Chennai Metro app replaces confusing line tables with human-centered navigation: visual station interchange guides, real-time crowd density indicators, smart fare calculators, and integrated digital QR ticketing.',
    painPoints: [
      'Commuters struggled to calculate interchange routes across the Blue and Green lines.',
      'Ticket queues at stations were long because existing digital ticketing involved a cumbersome 6-step flow.',
      'No indication of train crowd density or real-time platform delay updates.',
    ],
    solutions: [
      'Created an interactive visual transit planner with automatic interchange recommendations and travel times.',
      'Designed a streamlined 2-step QR ticket purchase workflow integrated with UPI and mobile wallets.',
      'Added live train crowd indicators (Low, Moderate, Busy) to help travelers choose less crowded compartments.',
      'Built high-contrast bilingual typography (Tamil & English) meeting WCAG AAA color standards.',
    ],
    features: [
      {
        icon: '🚇',
        title: 'Smart Interchange Guide',
        desc: 'Clear visual step-by-step instructions for station line switching and platform numbers.',
      },
      {
        icon: '🎟️',
        title: 'Instant QR Ticket Pass',
        desc: 'Quick 2-tap ticket purchase with offline QR access ready at turnstiles.',
      },
      {
        icon: '👥',
        title: 'Live Crowd Density Meter',
        desc: 'Real-time coach capacity indicator helping commuters avoid crowded trains.',
      },
      {
        icon: '🌐',
        title: 'Full Bilingual Accessibility',
        desc: 'Seamless toggle between Tamil and English with high-legibility typography.',
      },
    ],
  },
}

const PROJECTS = [
  // 1. FIGMA UI/UX DESIGNS (DEFAULT FIRST CATEGORY)
  {
    id: 'dineloop',
    title: 'DineLoop - Mobile Food Delivery App',
    category: 'UI/UX & Mobile App',
    type: 'uiux',
    desc: 'A modern food delivery application connecting users with local restaurants. Features frictionless checkout, real-time tracking, and an innovative cashback reward system on every order.',
    image: '/images/Uiux/Dineloop-COVER-IMAGE.png',
    link: 'https://www.figma.com/design/Yj6VZFyg7661PXcs2O2SU4/Dineloop?node-id=363-176&t=9ndRKKM6ycjs1CsJ-1',
    hasCaseStudy: true,
    tags: ['Figma', 'Mobile UI/UX', 'Prototyping', 'E-Commerce'],
    badge: 'Figma Design',
  },
  {
    id: 'pos',
    title: 'POS Inventory Management System',
    category: 'UI/UX & Web Application',
    type: 'uiux',
    desc: 'Smart point-of-sale and inventory platform that simplifies real-time sales reporting, stock replenishment, and multi-location business operations with an intuitive dashboard.',
    image: '/images/Uiux/Pos.png',
    link: 'https://www.figma.com/design/JDvajJiUMkWEbmKPIDV6iI/pos-inventory-management?node-id=38-2&t=ppv1JnYFVXeuBFPJ-1',
    hasCaseStudy: true,
    tags: ['Figma', 'Dashboard', 'POS System', 'Inventory'],
    badge: 'Figma Design',
  },
  {
    id: 'metro',
    title: 'Chennai Metro Transit Application',
    category: 'UI/UX & Mobile Redesign',
    type: 'uiux',
    desc: 'A redesigned Chennai Metro mobile application offering rapid route planning, live transit schedules, fare calculation, and interactive station navigation.',
    image: '/images/Uiux/Metro.png',
    link: 'https://www.figma.com/design/zR6kfOY85VEyBNUS1p2D9M/Metro?node-id=0-1&t=uiKjZUEb7lN9wAUY-1',
    hasCaseStudy: true,
    tags: ['Figma', 'Mobile App', 'Transit UI', 'User Research'],
    badge: 'Figma Design',
  },
  {
    id: 'southcraft',
    title: 'SouthCraft Handcrafting E-Commerce',
    category: 'UI/UX & E-Commerce',
    type: 'uiux',
    desc: 'Curated artisanal handicraft platform celebrating traditional craftsmanship. Designed with seamless catalog browsing, rich product stories, and high-conversion checkout.',
    image: '/images/Uiux/southcraft.png',
    link: 'https://www.figma.com/design/RGZmzr92Knc2ebiWBkad2X/South-Craft?node-id=0-1&t=iIdSQkhNWpOOQo1E-1',
    tags: ['Figma', 'E-Commerce', 'Artisan UI', 'Wireframing'],
    badge: 'Figma Design',
  },
  {
    id: 'bmw',
    title: 'Business Management World (BMW)',
    category: 'Enterprise UI/UX',
    type: 'uiux',
    desc: 'Comprehensive enterprise portal providing executive business strategies, leadership growth workflows, and operational management solutions.',
    image: '/images/Uiux/BMW-Design.png',
    link: 'https://www.figma.com/design/WOs5FvOsOfkMPzbU0JUxm0/Business-Management-world?node-id=34-119&t=C4fhNOQPs5aPHlZM-1',
    tags: ['Figma', 'Enterprise UX', 'Leadership Portal'],
    badge: 'Figma Design',
  },
  {
    id: 'greatify',
    title: 'Greatify SaaS Analytics Dashboard',
    category: 'Dashboard UI/UX',
    type: 'uiux',
    desc: 'Clean, modern SaaS dashboard designed to simplify business intelligence, team performance tracking, and actionable analytics with high visual hierarchy.',
    image: '/images/Uiux/greatify.png',
    link: 'https://www.figma.com/design/h5l4cTWsCSw8ftsSV7c6Ql/greatify?node-id=146-10&t=ZNUBIjFy6UKP1dni-1',
    tags: ['Figma', 'SaaS Dashboard', 'Data Visualization'],
    badge: 'Figma Design',
  },

  // 2. GRAPHIC & POSTER DESIGNS (NEW DEDICATED CATEGORY)
  {
    id: 'poster-smartfarm',
    title: 'Smartfarm Organic Brand Posters',
    category: 'Graphic Design & Posters',
    type: 'poster',
    desc: 'Visually compelling promotional poster series for organic farm produce and sustainable agriculture marketing campaigns.',
    image: '/images/folio/smartfarm/1.jpg',
    tags: ['Photoshop', 'Illustrator', 'Poster Design', 'Branding'],
    badge: 'Graphic Design',
  },
  {
    id: 'poster-smartgas',
    title: 'Smartgas Commercial Campaign Posters',
    category: 'Graphic Design & Posters',
    type: 'poster',
    desc: 'High-contrast commercial LPG safety and corporate distribution advertising posters with strong typography and visual hierarchy.',
    image: '/images/folio/smartgas/1.jpg',
    tags: ['Adobe Photoshop', 'Print Design', 'Visual Hierarchy'],
    badge: 'Graphic Design',
  },
  {
    id: 'poster-smr',
    title: 'SMR Trading Brand & Product Posters',
    category: 'Graphic Design & Posters',
    type: 'poster',
    desc: 'B2B commercial wholesale trading promotional posters crafted for international trade fairs and product marketing catalogs.',
    image: '/images/folio/smrtrading/1.jpg',
    tags: ['Brand Identity', 'Product Posters', 'Illustrator'],
    badge: 'Graphic Design',
  },
  {
    id: 'poster-kavya',
    title: 'Kavya Beauty Parlour Brand Identity',
    category: 'Graphic Design & Posters',
    type: 'poster',
    desc: 'Elegant salon and wellness promotional graphics, social media banners, and print marketing collateral.',
    image: '/images/folio/kavya/1.jpg',
    tags: ['Social Media Graphics', 'Print Collateral', 'Photoshop'],
    badge: 'Graphic Design',
  },
  {
    id: 'poster-smartzen',
    title: 'SmartZEN Agency Brand Posters',
    category: 'Graphic Design & Posters',
    type: 'poster',
    desc: 'Official technology agency brand identity posters, digital marketing banners, and service promotional assets.',
    image: '/images/folio/smartzen/1.jpg',
    tags: ['Brand Identity', 'Agency Collateral', 'Visual Design'],
    badge: 'Graphic Design',
  },
  {
    id: 'poster-horizon',
    title: 'Horizongate Corporate Print Posters',
    category: 'Graphic Design & Posters',
    type: 'poster',
    desc: 'International investment and corporate advisory promotional print designs for the UAE commercial market.',
    image: '/images/folio/horizon/1.jpg',
    tags: ['Corporate Branding', 'Print Media', 'Illustrator'],
    badge: 'Graphic Design',
  },

  // 3. ENTERPRISE CASE STUDIES
  {
    id: 'bulk-gas',
    title: 'Bulk Gas Delivery Enterprise App',
    category: 'Enterprise Case Study',
    type: 'casestudy',
    desc: 'Full-cycle enterprise logistics and route optimization application for bulk liquefied gas fulfillment, telemetry, and driver dispatch.',
    hasCaseStudy: true,
    tags: ['Enterprise Logistics', 'Telemetry', 'Workflow UI'],
    badge: 'Enterprise App',
  },
  {
    id: 'smart-maintenance',
    title: 'Smart Maintenance (AMC Operations)',
    category: 'Enterprise Case Study',
    type: 'casestudy',
    desc: 'Enterprise annual maintenance contract management app facilitating technician dispatch, SLA tracking, and scheduled maintenance workflows.',
    hasCaseStudy: true,
    tags: ['AMC Management', 'SLA Tracking', 'Technician UI'],
    badge: 'Enterprise App',
  },
  {
    id: 'smart-operations',
    title: 'Smart Operations Platform',
    category: 'Enterprise Case Study',
    type: 'casestudy',
    desc: 'Real-time operational dashboard for distributed field operations, personnel allocation, task tracking, and executive analytics.',
    hasCaseStudy: true,
    tags: ['Field Operations', 'Real-time Analytics', 'Enterprise'],
    badge: 'Enterprise App',
  },

  // 4. LIVE VERIFIED CLIENT WEBSITES
  {
    id: 'smartzen',
    title: 'SmartZEN Solutions Corporate Website',
    category: 'Live Deployed Website',
    type: 'website',
    desc: 'Corporate technology agency website featuring dynamic service catalogs, case study showcases, and high-conversion client lead pipelines.',
    image: '/images/Uiux/DM-Smartzen-Solution-1.png',
    link: 'https://www.smartzensolutions.com/',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'SEO'],
    badge: 'Live Website',
  },
  {
    id: 'horizongate',
    title: 'Horizongate UAE',
    category: 'Live Deployed Website',
    type: 'website',
    desc: 'UAE-based international trading and business advisory firm. Built with modern corporate aesthetics, responsive layouts, and cross-browser precision.',
    image: '/images/folio/horizon-website/1.jpg',
    link: 'https://horizongate.ae/',
    tags: ['Corporate Web', 'Responsive', 'Cross-Browser', 'UI/UX'],
    badge: 'Live Website',
  },
  {
    id: 'smartfarm',
    title: 'Smartfarm Chettinadu',
    category: 'Live Deployed Website',
    type: 'website',
    desc: 'Sustainable agro-farming and organic produce web presence. Designed with earth-toned palettes, mobile-optimized catalogs, and brand identity.',
    image: '/images/folio/smartfarm-website/1.png',
    link: 'https://smartfarmchettinadu.com/',
    tags: ['Agro-Tech', 'Brand Identity', 'Responsive Design'],
    badge: 'Live Website',
  },
  {
    id: 'smrtrading',
    title: 'SMR Trading UAE',
    category: 'Live Deployed Website',
    type: 'website',
    desc: 'Commercial wholesale trading and logistics portal based in the UAE. Engineered for rapid load speeds and seamless mobile navigation.',
    link: 'https://smrtradinguae.com/',
    tags: ['Wholesale Trading', 'Fast Load', 'Mobile First'],
    badge: 'Live Website',
  },
  {
    id: 'alhelalgas',
    title: 'Al Helal Gas',
    category: 'Live Deployed Website',
    type: 'website',
    desc: 'Energy distribution and commercial gas supply platform featuring automated booking inquiries and service location directory.',
    link: 'https://alhelalgas.com/',
    tags: ['Energy Sector', 'Utility Portal', 'Web Design'],
    badge: 'Live Website',
  },
  {
    id: 'qrsmotors',
    title: 'QRS Motors',
    category: 'Live Deployed Website',
    type: 'website',
    desc: 'Automotive dealership and vehicle service platform with interactive vehicle browsing and appointment scheduling.',
    link: 'https://qrsmotors.in/',
    tags: ['Automotive', 'Catalog UI', 'Lead Capture'],
    badge: 'Live Website',
  },
]

// Ordered tabs: FIGMA FIRST, POSTERS SECOND, CASE STUDIES THIRD, WEBSITES FOURTH, ALL LAST!
const TABS = [
  { id: 'uiux', label: '🎨 Figma UI/UX Designs (6)' },
  { id: 'poster', label: '🖼️ Poster & Graphic Design (6)' },
  { id: 'casestudy', label: '📊 Enterprise Case Studies (6)' },
  { id: 'website', label: '🌐 Live Websites (6)' },
  { id: 'all', label: 'All Works (24)' },
]

function Projects() {
  // Default to Figma UI/UX Designs first as requested
  const [activeTab, setActiveTab] = useState('uiux')
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null)

  const filteredProjects =
    activeTab === 'all'
      ? PROJECTS
      : activeTab === 'casestudy'
        ? PROJECTS.filter((p) => p.hasCaseStudy)
        : PROJECTS.filter((p) => p.type === activeTab)

  const openCaseStudy = (id) => {
    if (CASE_STUDIES_DATA[id]) {
      setSelectedCaseStudy(CASE_STUDIES_DATA[id])
    }
  }

  const closeCaseStudy = () => {
    setSelectedCaseStudy(null)
  }

  return (
    <section id="work" className="projects-section" aria-label="Featured Works & Projects">
      <div className="projects-section__container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-header__tag">Portfolio Works</span>
          <h2 className="section-header__title">
            Featured <span className="text-gradient">Projects &amp; Case Studies</span>
          </h2>
          <p className="section-header__desc">
            Explore interactive Figma prototypes, graphic &amp; poster designs, native enterprise case studies, and live deployed websites.
          </p>
        </div>

        {/* Filter Navigation Tabs: FIGMA FIRST, ALL LAST */}
        <div className="projects-tabs">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`projects-tab-btn${activeTab === tab.id ? ' projects-tab-btn--active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card">
              {/* Thumbnail Container */}
              <div className="project-card__thumb">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-card__img"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                ) : null}
                <div
                  className="project-card__fallback"
                  style={{ display: project.image ? 'none' : 'flex' }}
                >
                  <span className="project-card__fallback-icon">
                    {project.type === 'uiux'
                      ? '🎨'
                      : project.type === 'poster'
                        ? '🖼️'
                        : project.type === 'website'
                          ? '🌐'
                          : '💼'}
                  </span>
                  <span className="project-card__fallback-text">{project.category}</span>
                </div>
                <span className="project-card__badge">{project.badge}</span>
              </div>

              {/* Content Body */}
              <div className="project-card__body">
                <span className="project-card__category">{project.category}</span>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.desc}</p>

                {/* Tech Tags */}
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Direct Action Buttons */}
                <div className="project-card__footer">
                  {project.hasCaseStudy ? (
                    <button
                      type="button"
                      className="project-card__action-btn project-card__action-btn--cs"
                      onClick={() => openCaseStudy(project.id)}
                    >
                      <span>📖 Read Native Case Study</span>
                    </button>
                  ) : null}

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className={`project-card__action-btn${project.hasCaseStudy ? ' project-card__action-btn--sub' : ''}`}
                    >
                      <span>
                        {project.type === 'uiux'
                          ? 'Open Figma Prototype 🎨 ↗'
                          : 'Visit Live Site ↗'}
                      </span>
                    </a>
                  ) : project.type === 'poster' ? (
                    <a
                      href={project.image}
                      target="_blank"
                      rel="noreferrer"
                      className="project-card__action-btn project-card__action-btn--sub"
                    >
                      <span>View Full Resolution Poster 🖼️ ↗</span>
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Quick Directory Strip */}
        <div className="projects-directory">
          <h3 className="projects-directory__title">
            <span>🔗 Quick Project &amp; Case Study Directory</span>
          </h3>
          <div className="projects-directory__columns">
            <div className="projects-directory__col">
              <h4>🎨 Figma UI/UX Designs</h4>
              <ul>
                <li>
                  <a href="https://www.figma.com/design/WOs5FvOsOfkMPzbU0JUxm0/Business-Management-world?node-id=34-119&t=C4fhNOQPs5aPHlZM-1" target="_blank" rel="noreferrer">
                    Business Management World ↗
                  </a>
                </li>
                <li>
                  <a href="https://www.figma.com/design/Yj6VZFyg7661PXcs2O2SU4/Dineloop?node-id=363-176&t=9ndRKKM6ycjs1CsJ-1" target="_blank" rel="noreferrer">
                    DineLoop Delivery App ↗
                  </a>
                </li>
                <li>
                  <a href="https://www.figma.com/design/JDvajJiUMkWEbmKPIDV6iI/pos-inventory-management?node-id=38-2&t=ppv1JnYFVXeuBFPJ-1" target="_blank" rel="noreferrer">
                    POS Inventory Management ↗
                  </a>
                </li>
                <li>
                  <a href="https://www.figma.com/design/RGZmzr92Knc2ebiWBkad2X/South-Craft?node-id=0-1&t=iIdSQkhNWpOOQo1E-1" target="_blank" rel="noreferrer">
                    SouthCraft Handcrafting ↗
                  </a>
                </li>
                <li>
                  <a href="https://www.figma.com/design/zR6kfOY85VEyBNUS1p2D9M/Metro?node-id=0-1&t=uiKjZUEb7lN9wAUY-1" target="_blank" rel="noreferrer">
                    Chennai Metro Redesign ↗
                  </a>
                </li>
                <li>
                  <a href="https://www.figma.com/design/h5l4cTWsCSw8ftsSV7c6Ql/greatify?node-id=146-10&t=ZNUBIjFy6UKP1dni-1" target="_blank" rel="noreferrer">
                    Greatify Dashboard Design ↗
                  </a>
                </li>
              </ul>
            </div>

            <div className="projects-directory__col">
              <h4>🌐 Live Client Websites</h4>
              <ul>
                <li>
                  <a href="https://www.smartzensolutions.com/" target="_blank" rel="noreferrer">
                    SmartZEN Solutions ↗
                  </a>
                </li>
                <li>
                  <a href="https://horizongate.ae/" target="_blank" rel="noreferrer">
                    Horizongate UAE ↗
                  </a>
                </li>
                <li>
                  <a href="https://smrtradinguae.com/" target="_blank" rel="noreferrer">
                    SMR Trading UAE ↗
                  </a>
                </li>
                <li>
                  <a href="https://alhelalgas.com/" target="_blank" rel="noreferrer">
                    Al Helal Gas ↗
                  </a>
                </li>
                <li>
                  <a href="https://smartfarmchettinadu.com/" target="_blank" rel="noreferrer">
                    Smartfarm Chettinadu ↗
                  </a>
                </li>
                <li>
                  <a href="https://qrsmotors.in/" target="_blank" rel="noreferrer">
                    QRS Motors ↗
                  </a>
                </li>
              </ul>
            </div>

            <div className="projects-directory__col">
              <h4>📊 Enterprise Case Studies &amp; Profiles</h4>
              <ul>
                <li>
                  <button
                    type="button"
                    className="projects-directory__link-btn"
                    onClick={() => openCaseStudy('bulk-gas')}
                  >
                    Bulk Gas Delivery (Read Case Study) 📖
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="projects-directory__link-btn"
                    onClick={() => openCaseStudy('smart-maintenance')}
                  >
                    Smart Maintenance AMC (Read Case Study) 📖
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="projects-directory__link-btn"
                    onClick={() => openCaseStudy('smart-operations')}
                  >
                    Smart Operations Platform (Read Case Study) 📖
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="projects-directory__link-btn"
                    onClick={() => openCaseStudy('dineloop')}
                  >
                    DineLoop Food App (Read Case Study) 📖
                  </button>
                </li>
                <li>
                  <a href="https://dribbble.com/akilesh_hari" target="_blank" rel="noreferrer">
                    Akilesh on Dribbble ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Case Study Reader Modal */}
      {selectedCaseStudy && (
        <CaseStudyModal
          caseStudy={selectedCaseStudy}
          onClose={closeCaseStudy}
        />
      )}
    </section>
  )
}

export default Projects
