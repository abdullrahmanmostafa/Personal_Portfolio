import { Project, SkillCategory, ProficiencyItem, TimelineItem } from '../types';

export const PERSONAL_INFO = {
  name: 'ABDULLRAHMAN MOSTAFA',
  firstName: 'ABDULLRAHMAN',
  lastName: 'MOSTAFA',
  role: 'Full Stack Software Engineer',
  status: 'Available for new opportunities',
  bio: 'I build scalable backend systems, AI-powered applications, and modern web experiences focused on performance, security, and clean architecture.',
  email: 'abdalrahmanmostafasoltan@gmail.com',
  location: 'Egypt (Available Globally)',
  badges: ['ASP.NET Core', 'AI/ML', 'Backend Architecture'],
  profileImage: '/assets/profile_photo.png', // Sleek professional headshot
  github: 'https://github.com/abdullrahmanmostafa',
  linkedin: 'https://www.linkedin.com/in/abdullrahman-mostafa-477314245',
  twitter: 'https://x.com/3bdullrahman_23?s=21&t=_Utfq6BhXXCDRUG2iMANTg',
};

export const CORE_HIGHLIGHTS = [
  { id: 'cs', label: 'CS GRADUATE', iconName: 'GraduationCap' },
  { id: 'react', label: 'REACT CERTIFIED', iconName: 'Award' },
  { id: 'dotnet', label: '.NET DEVELOPER', iconName: 'Code' },
  { id: 'ai', label: 'AI PROJECTS', iconName: 'Cpu' },
  { id: 'backend', label: 'BACKEND SPECIALIST', iconName: 'Server' },
];

export const CORE_SOLUTIONS = {
  heading: 'Engineering Robust Digital Solutions',
  subheading: 'I am a passionate Software Engineer dedicated to crafting high-performance backend architectures and intelligent AI integrations. My approach combines technical precision with a focus on scalable, secure code. Whether I\'m designing complex cloud-native APIs or developing machine learning models, I strive for excellence in every line of code.',
  metrics: [
    { value: '95%', label: 'Efficiency Rate' },
    { value: '100%', label: 'Clean Code' },
    { value: '24/7', label: 'Active Learning' },
  ],
};

export const TECH_STACK: SkillCategory[] = [
  {
    title: 'Backend',
    iconName: 'backend',
    items: ['ASP.NET Core', 'Node.js', 'Microservices', 'RESTful APIs'],
  },
  {
    title: 'Frontend',
    iconName: 'frontend',
    items: ['React & Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
  },
  {
    title: 'Database',
    iconName: 'database',
    items: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'AI & Cloud',
    iconName: 'cloud',
    items: ['Azure / AWS', 'TensorFlow', 'Python / FastAPI', 'Docker'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'sign-language-api',
    title: 'Sign Language Recognition API',
    iconType: 'ai',
    badges: ['FastAPI', 'TensorFlow'],
    description: 'High-performance API using deep learning models to translate sign language gestures into text in real-time with 98% accuracy.',
    githubUrl: 'https://github.com/abdullrahman/sign-language-api',
    demoUrl: 'https://demo-sign-api.example.com',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
    longDescription: 'An ultra-low-latency computer vision API that ingests continuous video frame streams via WebSockets and REST endpoints. Powered by custom TensorFlow CNN-LSTM architecture trained on ASL gesture datasets, it delivers real-time gesture-to-text inference at 60 FPS.',
    features: [
      'Real-time WebSocket streaming with <15ms latency',
      'TensorFlow Lite model optimization for edge deployment',
      'Multi-hand tracking and 3D joint coordinate estimation',
      'Automated OpenAPI documentation & SDK generators'
    ],
    architecture: 'FastAPI + OpenCV + TensorFlow + Redis Queue + Docker Containerized Cluster',
    metrics: [
      { label: 'Inference Accuracy', value: '98.2%' },
      { label: 'Avg API Response', value: '14 ms' },
      { label: 'Requests / Sec', value: '2,400 RPS' }
    ],
    sampleEndpoint: 'POST /api/v1/recognize-frame',
    sampleResponse: JSON.stringify({
      status: "success",
      confidence: 0.984,
      translatedText: "HELLO WORLD",
      processingTimeMs: 12.4,
      frameResolution: "1080p",
      gestureDetected: "ASL_GREETING"
    }, null, 2)
  },
  {
    id: 'power-monitoring-system',
    title: 'Power Monitoring System',
    iconType: 'power',
    badges: ['ASP.NET Core', 'PostgreSQL'],
    description: 'Real-time enterprise power grid monitoring with advanced analytics and predictive maintenance alerts using industrial IoT protocols.',
    githubUrl: 'https://github.com/abdullrahmanmostafa/Electric-Power-Monitoring-System-1',
    demoUrl: 'https://github.com/abdullrahmanmostafa/Electric-Power-Monitoring-System-1',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
    longDescription: 'Industrial IoT monitoring system built for high-throughput sensor telemetry. It ingests thousands of voltage, frequency, and harmonic metrics per second from substation transformers and applies anomaly detection algorithms to prevent blackout events.',
    features: [
      'High-throughput MQTT & Modbus TCP protocol adapter',
      'TimescaleDB / PostgreSQL time-series partitioning',
      'Automated load shedding rules & emergency alerts',
      'Interactive SignalR live telemetry dashboard'
    ],
    architecture: 'ASP.NET Core 8 + Entity Framework Core + TimescaleDB + MQTT + SignalR',
    metrics: [
      { label: 'Sensory Telemetry', value: '50k pts/sec' },
      { label: 'Uptime Reliability', value: '99.999%' },
      { label: 'Anomaly Lead Time', value: '45 mins prior' }
    ],
    sampleEndpoint: 'GET /api/v1/grid/telemetry/live',
    sampleResponse: JSON.stringify({
      substationId: "SUB-NORTH-04",
      voltageRms: 230.4,
      frequencyHz: 50.02,
      powerFactor: 0.98,
      status: "OPTIMAL",
      alerts: []
    }, null, 2)
  },
  {
    id: 'medical-booking-api',
    title: 'Medical Booking API',
    iconType: 'medical',
    badges: ['ASP.NET Core', 'JWT'],
    description: 'Secure healthcare scheduling system with HIPAA-compliant data handling and encrypted patient authentication.',
    githubUrl: 'https://github.com/abdullrahmanmostafa/VezetaAPI$0',
    demoUrl: 'https://github.com/abdullrahmanmostafa/VezetaAPI$0',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    longDescription: 'Mission-critical appointment and electronic health record (EHR) access API. Designed with strict zero-trust security layers, AES-256 field-level database encryption, and automated audit logging required for healthcare compliance.',
    features: [
      'HIPAA & GDPR field-level AES-256 encryption',
      'Role-based access control (RBAC) with granular scopes',
      'Automated SMS & Email appointment reminders via Twilio',
      'Doctor schedule conflict resolution engine'
    ],
    architecture: 'ASP.NET Core 8 Web API + SQL Server + Redis Cache + MediatR CQRS',
    metrics: [
      { label: 'Security Score', value: '100% HIPAA' },
      { label: 'Daily Bookings', value: '12,000+' },
      { label: 'Database Speed', value: '3 ms query' }
    ],
    sampleEndpoint: 'POST /api/v1/appointments/schedule',
    sampleResponse: JSON.stringify({
      bookingReference: "MED-884920",
      doctorName: "Dr. Sarah Bennett",
      specialty: "Cardiology",
      appointmentTime: "2026-08-05T10:00:00Z",
      encryptedPatientHash: "a8f92b...e41c",
      status: "CONFIRMED"
    }, null, 2)
  },
  {
    id: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    iconType: 'ecommerce',
    badges: ['ASP.NET MVC', 'SQL Server'],
    description: 'A full-featured digital marketplace with inventory management, secure checkout, and user-behavior analytics.',
    githubUrl: 'https://github.com/abdullrahman/ecommerce-platform',
    demoUrl: 'https://store-demo.example.com',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    longDescription: 'Enterprise e-commerce engine equipped with atomic transaction processing, dynamic discount rules, integrated payment gateways (Stripe & PayPal), and real-time stock reservation locks.',
    features: [
      'Pessimistic inventory locking during checkout',
      'Stripe & PayPal multi-currency gateway integration',
      'Elasticsearch full-text search with instant facet filters',
      'Automated order processing workflow background jobs'
    ],
    architecture: 'ASP.NET MVC 5 / .NET 8 + SQL Server + Hangfire + Redis + Elasticsearch',
    metrics: [
      { label: 'Peak Concurrent Users', value: '15,000' },
      { label: 'Checkout Success', value: '99.8%' },
      { label: 'Catalog Search', value: '8 ms' }
    ],
    sampleEndpoint: 'POST /api/v1/cart/checkout',
    sampleResponse: JSON.stringify({
      orderId: "ORD-2026-7782",
      paymentStatus: "PAID",
      amountTotal: 1499.00,
      currency: "USD",
      itemsReserved: true,
      estimatedDelivery: "2026-08-04"
    }, null, 2)
  },
];

export const PROFICIENCY_SKILLS: ProficiencyItem[] = [
  { skill: 'BACKEND ARCHITECTURE', percentage: 95 },
  { skill: 'REACT & FRONTEND', percentage: 85 },
  { skill: 'AI / ML INTEGRATION', percentage: 90 },
  { skill: 'CLOUD INFRASTRUCTURE', percentage: 88 },
];

export const TIMELINE: TimelineItem[] = [
  {
    period: '2023 - PRESENT',
    role: 'Full Stack Freelancer',
    organization: 'Self-Employed / Global Clients',
    description: 'Delivering bespoke software solutions for global clients, focusing on secure backend APIs and AI integrations.',
    type: 'experience'
  },
  {
    period: '2022 - 2023',
    role: 'Software Engineer Intern',
    organization: 'Logistics Enterprise Systems',
    description: 'Assisted in developing enterprise-grade modules for a national logistics management system.',
    type: 'experience'
  },
  {
    period: '2019 - 2023',
    role: 'Menoufia University',
    organization: 'Faculty of Computers and Information',
    description: 'B.Sc. In Computer Science. Specialized in Artificial Intelligence and Database Systems.',
    type: 'education'
  },
];
