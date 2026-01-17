// Image imports
import LMS_IMG from '../Assets/Images/LMS.png';
import ECOMMERCE_IMG from '../Assets/Images/E-Commerce.png';
import IDS_IMG from '../Assets/Images/IDS.png';
import VTRYON_IMG from '../Assets/Images/VTryon.png';
import PANTRYMIND_IMG from '../Assets/Images/PantryMind.png';

// Centralized Data Source for Portfolio Frontend
// This structure aligns with portfolio-admin-frontend/src/types

export const PERSONAL_CONTENT = {
  name: 'Abdul Aziz',
  titlePrefix: "Hi, I'm",
  description:
    "Passionate Software Engineer specializing in AI/ML, Deep Learning, and Full-Stack Development. Experienced in GAN-based intrusion detection systems, computer vision applications, and building scalable web solutions with MERN stack. Let's build something extraordinary together.",
  roles: ['AI/ML Engineer', 'Software Engineer', 'Full-Stack Developer', 'Frontend Developer'],
  cvFilePublicPath: '/My CV (Updated).pdf',
  cvDownloadName: 'Abdul-Aziz-CV.pdf',
};

export const SOCIAL_LINKS = [
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/abdulaziz-dev/',
    label: 'LinkedIn',
  },
  {
    id: 'github',
    href: 'https://github.com/abdulazizatGitHub',
    label: 'GitHub',
  },
];

export const ABOUT_CONTENT = {
  roleTitle: 'AI/ML Engineer & Full-Stack Developer',
  paragraphs: [
    "I'm a passionate Software Engineer with expertise in Artificial Intelligence, Machine Learning, and Full-Stack Web Development. Currently working as a Frontend Developer at Inara Technologies, I bring a unique blend of AI/ML knowledge and web development skills.",
    'My journey includes groundbreaking research on GAN-based intrusion detection systems for IoT networks, developing computer vision applications like Virtual Try-On systems, and building scalable web solutions using the MERN stack. I am proficient in Python, PyTorch, TensorFlow, and modern web technologies.',
    "With a CGPA of 3.52 from COMSATS University and hands-on experience in AI/ML projects, I'm dedicated to creating innovative solutions that make a real impact. Let's collaborate and build the future together!",
  ],
  stats: [
    { label: 'CGPA', value: '3.52' },
    { label: 'Projects', value: '10+' },
    { label: 'Experience', value: '2+' },
  ],
};

export const EDUCATION_ENTRIES = [
  {
    period: '2017 - 2019',
    title: 'Matriculation (Science)',
    organization: 'FG Public School Batkhela',
    description:
      'Completed secondary education with excellent grades (1009/1100), building a strong foundation in science subjects that sparked my interest in technology and innovation.',
  },
  {
    period: '2019 - 2021',
    title: 'Intermediate (Pre-Engineering)',
    organization: 'Islamia College Peshawar',
    description:
      'Pursued Pre-Engineering with marks of 814/1100. Served as Monitor of Osmania Hostel and member of the Management Team, developing leadership and teamwork skills.',
  },
  {
    period: '2021 - 2025',
    title: 'Bachelor of Science in Software Engineering',
    organization: 'COMSATS University',
    description:
      'Graduated with CGPA 3.52/4.00 from COMSATS University Islamabad, Abbottabad Campus. Specialized in AI/ML, Deep Learning, and Full-Stack Development with groundbreaking research on GAN-based intrusion detection systems.',
  },
];

export const EXPERIENCE_ENTRIES = [
  {
    period: 'Oct 2025 - Present',
    title: 'Frontend Developer',
    organization: 'Inara Technologies Pvt. Limited',
    description:
      'Designing responsive dashboards and admin panels with focus on usability and performance. Collaborating with backend teams to integrate RESTful APIs for seamless user experiences.',
  },
  {
    period: 'Aug 2025 - Oct 2025',
    title: 'AI/ML Intern',
    organization: 'Omnisolve AI (Remote)',
    description:
      'Contributed to Virtual Try-On E-commerce System using CP-VTON for realistic clothing simulation. Built personalized AI shopbot for intelligent, context-aware product recommendations.',
  },
  {
    period: 'Sept 2024 - June 2025',
    title: 'Research Project',
    organization: 'IoT Intrusion Detection using GANs',
    description:
      'Designed Dynamic Class-Weighted GAN (DCSW-GAN) to address class imbalance in IoT intrusion detection. Achieved improved minority-class recall on UNSW-NB15 and CICIDS-2017 datasets.',
  },
];

export const PROJECTS_DATA = [
  {
    title: 'Laboratory Management System',
    description:
      'Full-stack web application with role-based authentication for Admin, Staff, and Patients. Features include CRUD operations for inventory, lab users, and secure JWT authentication with scalable architecture.',
    tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
    link: 'https://laboratory-management-system.vercel.app/',
    image: LMS_IMG,
    source: 'https://github.com/abdulazizatGitHub/Laboratory-Management-System',
  },
  {
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce application with product browsing, cart management, checkout flow, and comprehensive admin panel. Implemented RESTful APIs and structured database design for scalability.',
    tech: ['MERN Stack', 'REST APIs', 'Firebase'],
    link: '',
    image: ECOMMERCE_IMG,
    source: 'https://github.com/abdulazizatGitHub/E-Commerce-Application',
  },
  {
    title: 'IoT Intrusion Detection System',
    description:
      'Designed Dynamic Class-Weighted GAN (DCSW-GAN) to address class imbalance in IoT intrusion detection. Implemented log-based adaptive loss weighting strategy achieving improved minority-class recall on UNSW-NB15 and CICIDS-2017 datasets.',
    tech: ['PyTorch', 'Deep Learning', 'GANs', 'Python'],
    link: '',
    image: IDS_IMG,
    source: '#',
  },
  {
    title: 'Virtual Try-On System',
    description:
      'Deep learning-based virtual outfit try-on system using CP-VTON for realistic clothing simulation. Implemented image segmentation and computer vision techniques for accurate fitting visualization.',
    tech: ['PyTorch', 'OpenCV', 'Computer Vision', 'Python'],
    link: '',
    image: VTRYON_IMG,
    source: 'https://github.com/abdulazizatGitHub/virtual-try-on',
  },
  {
    title: 'PantryMind',
    description:
      'AI-powered pantry and recipe management platform using NLP for ingredient parsing and ML-based recommendation system for personalized recipe generation and meal planning.',
    tech: ['Python', 'Flask', 'NLP', 'ML'],
    link: '',
    image: PANTRYMIND_IMG,
    source: 'https://github.com/abdulazizatGitHub/PantryMind',
  },
];

export const SKILLS_CONTENT = {
  technical: [
    { name: 'Python', level: '95%' },
    { name: 'JavaScript', level: '90%' },
    { name: 'React.js', level: '92%' },
    { name: 'Node.js & Express', level: '88%' },
    { name: 'MongoDB', level: '85%' },
    { name: 'SQL & PostgreSQL', level: '82%' },
    { name: 'Java & C++', level: '78%' },
    { name: 'Git & GitHub', level: '90%' },
  ],
  ai: [
    { name: 'PyTorch & Deep Learning', level: '93%' },
    { name: 'TensorFlow & Keras', level: '88%' },
    { name: 'GANs & Computer Vision', level: '90%' },
    { name: 'NLP & Transformers', level: '85%' },
    { name: 'OpenCV & Image Processing', level: '87%' },
    { name: 'Flask & FastAPI', level: '86%' },
    { name: 'IoT Security & IDS', level: '88%' },
  ],
};

export const CONTACT_INFO_ITEMS = [
  {
    id: 'email',
    label: 'Email',
    value: 'abdulazizk1430@gmail.com',
    href: 'mailto:abdulazizk1430@gmail.com',
  },
  {
    id: 'phone',
    label: 'Phone',
    value: '+92 341 6988051',
    href: 'tel:+923416988051',
  },
  {
    id: 'location',
    label: 'Location',
    value: 'G15 Islamabad, Pakistan',
    href: null,
  },
];
