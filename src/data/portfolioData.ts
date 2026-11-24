import {
  Project,
  SkillItem,
  EducationItem,
  CertificationItem,
  JourneyMilestone,
  PersonalityPillar,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Harvender Singh Rawat',
  initials: 'HSR',
  role: 'B.Tech CSE (Artificial Intelligence & Machine Learning) Student',
  headline: 'Building Technology. Exploring Intelligence. Creating Impact.',
  designation: 'B.Tech CSE (Artificial Intelligence & Machine Learning) | Aspiring Software Engineer',
  institution: 'Newton School of Technology',
  degree: 'B.Tech – Computer Science & Artificial Intelligence and Machine Learning',
  batch: '2026–2030 | Currently in First Year',
  location: 'Pune, Maharashtra, India',
  careerLevel: 'Fresher / First-Year Undergraduate',
  careerGoal: 'Software Development, AI/ML, Frontend Development, and Technology Internships',
  status: 'Open to Internship Opportunities',
  email: 'harvendersinghrawat7336@gmail.com',
  github: 'https://github.com/Harvender07',
  linkedin: 'https://www.linkedin.com/in/harvender-singh-rawat-3407a12a1',
  worldquantPostUrl:
    'https://www.linkedin.com/posts/harvender-singh-rawat-3407a12a1_worldquant-computerscience-ai-ugcPost-7521212556233998336-wLMd',
  profileImageUrl: '/profile.jpg',
  bioIntro:
    'Motivated first-year B.Tech student specializing in Computer Science and Artificial Intelligence & Machine Learning at Newton School of Technology. Eager to explore software development, emerging technologies, and AI-driven solutions while building strong fundamentals through practical projects.',
  professionalSummary:
    'Motivated first-year B.Tech student specializing in Computer Science and Artificial Intelligence & Machine Learning at Newton School of Technology. Eager to explore software development, emerging technologies, and AI-driven solutions. Possesses foundational programming knowledge, creative problem-solving abilities, and an interest in learning through practical projects. Seeking internship opportunities to develop technical skills and gain industry experience.',
  careerObjective:
    'To begin my professional journey in the technology industry, contribute to meaningful projects, continuously improve my technical abilities, and grow as a software and AI/ML professional.',
  languages: [
    { name: 'Hindi', proficiency: 'Fluent' },
    { name: 'English', proficiency: 'Fluent' },
  ],
  coreStrengths: [
    'Quick Learner',
    'Problem Solving',
    'Adaptability',
    'Teamwork',
    'Creativity',
    'Discipline and Time Management',
  ],
  resumeDownloadUrl: '/resume.pdf',
};

export const ABOUT_PILLARS = [
  {
    title: 'Army Background & Discipline',
    subtitle: 'Discipline & Time Management',
    description:
      'Rooted in Army Public School values, bringing punctuality, composure under pressure, and consistent follow-through on engineering commitments.',
    icon: 'Shield',
  },
  {
    title: 'Quick Learner & Adaptable',
    subtitle: 'Self-Directed Growth',
    description:
      'Proactively learning through experimentation, technical documentation, and practical coding rather than relying solely on classroom lectures.',
    icon: 'Zap',
  },
  {
    title: 'Problem Solving & Logic',
    subtitle: 'First-Principles Thinking',
    description:
      'Breaking complex challenges down into clear, modular logic and developing practical, maintainable software implementations.',
    icon: 'Cpu',
  },
  {
    title: 'Creativity & Innovation',
    subtitle: 'Curiosity-Driven',
    description:
      'Combining creative ideation, video storytelling instincts, and emerging AI tools to turn new concepts into working digital prototypes.',
    icon: 'Compass',
  },
  {
    title: 'Teamwork & Communication',
    subtitle: 'Hindi & English (Fluent)',
    description:
      'Fluent in both Hindi and English, collaborating clearly across diverse peers, taking feedback openly, and contributing positively to teams.',
    icon: 'Users',
  },
];

export const SKILLS_DATA: SkillItem[] = [
  // PROGRAMMING (Current Verified Basic Skills)
  {
    name: 'C++',
    proficiency: 'Basic / Foundational',
    levelPercentage: 45,
    category: 'programming',
    description:
      'Foundational syntax, control flow, functions, arrays, and introductory object-oriented programming concepts.',
  },
  {
    name: 'Python',
    proficiency: 'Basic / Foundational',
    levelPercentage: 50,
    category: 'programming',
    description:
      'Basic scripting, built-in data structures (lists, dictionaries), conditional logic, and foundational problem solving.',
  },
  {
    name: 'HTML',
    proficiency: 'Basic / Foundational',
    levelPercentage: 55,
    category: 'programming',
    description:
      'Semantic document structure, accessible landmarks, forms, and clean web page markup.',
  },

  // DEVELOPMENT INTERESTS (Not presented as mastered skills)
  {
    name: 'Software Development',
    proficiency: 'Active Exploration',
    levelPercentage: 35,
    category: 'interests',
    description:
      'Core interest area: building reliable, maintainable applications and learning clean architectural practices.',
  },
  {
    name: 'Frontend Development',
    proficiency: 'Active Exploration',
    levelPercentage: 35,
    category: 'interests',
    description:
      'Core interest area: crafting clean, responsive, accessible user interfaces and smooth client-side workflows.',
  },
  {
    name: 'Artificial Intelligence',
    proficiency: 'Active Exploration',
    levelPercentage: 30,
    category: 'interests',
    description:
      'Core interest area: studying intelligent systems, reasoning workflows, and applied AI-driven solutions.',
  },
  {
    name: 'Machine Learning',
    proficiency: 'Active Exploration',
    levelPercentage: 30,
    category: 'interests',
    description:
      'Core interest area: exploring supervised learning fundamentals, data preprocessing, and model evaluation.',
  },
  {
    name: 'Web Technologies',
    proficiency: 'Active Exploration',
    levelPercentage: 35,
    category: 'interests',
    description:
      'Core interest area: understanding browser mechanics, HTTP fundamentals, and modern full-stack web architecture.',
  },

  // ADDITIONAL SKILLS
  {
    name: 'Vibe Coding',
    proficiency: 'Basic / Foundational',
    levelPercentage: 70,
    category: 'additional',
    description:
      'Rapid AI-assisted prototyping, structured prompt iteration, and turning product concepts into testable interfaces.',
  },
  {
    name: 'MS Office',
    proficiency: 'Basic / Foundational',
    levelPercentage: 65,
    category: 'additional',
    description:
      'Basic spreadsheets, structured documentation, and clean presentation design for academic and team reporting.',
  },
  {
    name: 'Video Editing',
    proficiency: 'Basic / Foundational',
    levelPercentage: 70,
    category: 'additional',
    description:
      'Visual pacing, storytelling, timeline editing, and multimedia production for creative digital content.',
  },

  // EXPANDABLE LEARNING ROADMAP (Technologies Currently Learning)
  {
    name: 'JavaScript (ES6+)',
    proficiency: 'Learning In Progress',
    levelPercentage: 25,
    category: 'learning',
    description:
      'Learning core language mechanics, DOM manipulation, events, and asynchronous JavaScript fundamentals.',
  },
  {
    name: 'CSS & Tailwind CSS',
    proficiency: 'Learning In Progress',
    levelPercentage: 30,
    category: 'learning',
    description:
      'Developing fluency in Flexbox, CSS Grid, responsive breakpoints, and utility-first component styling.',
  },
  {
    name: 'React',
    proficiency: 'Learning In Progress',
    levelPercentage: 25,
    category: 'learning',
    description:
      'Learning component architecture, props, state hooks, and building modular single-page web interfaces.',
  },
  {
    name: 'SQL',
    proficiency: 'Learning In Progress',
    levelPercentage: 20,
    category: 'learning',
    description:
      'Planned learning track: relational database schemas, SELECT queries, joins, and data normalization.',
  },
  {
    name: 'Git & GitHub',
    proficiency: 'Learning In Progress',
    levelPercentage: 35,
    category: 'learning',
    description:
      'Learning branching, commits, pull requests, and clean repository workflows for team collaboration.',
  },
  {
    name: 'APIs',
    proficiency: 'Learning In Progress',
    levelPercentage: 20,
    category: 'learning',
    description:
      'Learning HTTP request/response lifecycles, JSON payloads, and integrating RESTful services.',
  },
  {
    name: 'Data Structures & Algorithms',
    proficiency: 'Learning In Progress',
    levelPercentage: 25,
    category: 'learning',
    description:
      'Building systematic proficiency in arrays, strings, recursion, sorting, searching, and time complexity.',
  },
  {
    name: 'Machine Learning Tools',
    proficiency: 'Learning In Progress',
    levelPercentage: 20,
    category: 'learning',
    description:
      'Planned learning track: NumPy, Pandas, scikit-learn, and Jupyter notebooks for practical experimentation.',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'software-dev-placeholder',
    title: 'Software Development Project Slot (C++ / Python)',
    category: 'software',
    categoryLabel: 'Software Development',
    tagline:
      'Editable placeholder for upcoming Python applications, C++ CLI tools, and algorithmic problem-solving builds.',
    problem:
      'Placeholder: Define the real-world workflow bottleneck, CLI automation need, or algorithmic problem this application solves.',
    overview:
      'Reserved showcase slot for foundational C++ and Python software engineering projects built during coursework and independent practice at Newton School of Technology.',
    technologies: ['C++ (Basic)', 'Python (Basic)', 'Problem Solving', 'CLI Architecture'],
    keyFeatures: [
      'Structured problem decomposition using modular functions and clean control flow',
      'Input validation and deterministic edge-case test cases',
      'Clear README documentation covering build steps and complexity notes',
    ],
    architectureHighlights: [
      'Editable Slot: Replace with actual project architecture diagram and benchmark results',
      'Supports Python scripts, C++ console applications, and DSA implementations',
    ],
    screenshotUrl: '',
    screenshotPlaceholderNote: 'Upload screenshot at public/projects/software-preview.png',
    githubUrl: 'https://github.com/Harvender07',
    liveUrl: '',
    isPlaceholder: true,
    status: 'Placeholder Blueprint',
    featured: true,
  },
  {
    id: 'web-dev-placeholder',
    title: 'Web Development Project Slot (Responsive & Frontend)',
    category: 'web',
    categoryLabel: 'Web Development',
    tagline:
      'Editable placeholder for responsive websites, personal web applications, and frontend engineering experiments.',
    problem:
      'Placeholder: Identify the user experience friction or accessibility gap addressed by this web application.',
    overview:
      'Reserved showcase slot for semantic HTML, responsive CSS/Tailwind layouts, and interactive frontend projects as I expand into JavaScript and React.',
    technologies: ['HTML (Basic)', 'CSS / Tailwind (Learning)', 'JavaScript (Learning)', 'Responsive UI'],
    keyFeatures: [
      'Mobile-first responsive layout verified across phone, tablet, and desktop viewports',
      'Accessible semantic HTML landmarks and keyboard navigation support',
      'Clean UI typography and minimal distraction-free layout',
    ],
    architectureHighlights: [
      'Editable Slot: Add component hierarchy and state flow details once built',
      'Deployable directly on Vercel with GitHub repository integration',
    ],
    screenshotUrl: '',
    screenshotPlaceholderNote: 'Upload screenshot at public/projects/web-preview.png',
    githubUrl: 'https://github.com/Harvender07',
    liveUrl: '',
    isPlaceholder: true,
    status: 'Placeholder Blueprint',
    featured: true,
  },
  {
    id: 'ai-ml-placeholder',
    title: 'AI & Machine Learning Project Slot (Experiments & Data)',
    category: 'ai',
    categoryLabel: 'AI & Machine Learning',
    tagline:
      'Editable placeholder for beginner AI/ML experiments, exploratory data analysis notebooks, and model prototypes.',
    problem:
      'Placeholder: Describe the dataset question, classification/regression goal, or insight extraction objective.',
    overview:
      'Reserved showcase slot for introductory Python data analysis experiments and foundational machine learning implementations aligned with my B.Tech specialization.',
    technologies: ['Python (Basic)', 'Data Analysis (Learning)', 'ML Fundamentals (Learning)'],
    keyFeatures: [
      'Reproducible dataset exploration and structured data cleaning pipeline',
      'Baseline model evaluation with honest metric reporting',
      'Clear visual summaries and documented assumptions',
    ],
    architectureHighlights: [
      'Editable Slot: Document dataset source, preprocessing pipeline, and validation split',
      'Focused on verifiable, reproducible beginner ML experiments',
    ],
    screenshotUrl: '',
    screenshotPlaceholderNote: 'Upload screenshot at public/projects/aiml-preview.png',
    githubUrl: 'https://github.com/Harvender07',
    liveUrl: '',
    isPlaceholder: true,
    status: 'Placeholder Blueprint',
    featured: true,
  },
  {
    id: 'creative-tech-placeholder',
    title: 'Creative Technology Project Slot (Vibe Coding & Automation)',
    category: 'creative',
    categoryLabel: 'Creative Technology',
    tagline:
      'Editable placeholder for vibe-coded applications, workflow automation experiments, and innovative digital concepts.',
    problem:
      'Placeholder: Outline the repetitive manual task or creative workflow friction being automated.',
    overview:
      'Reserved showcase slot for rapid AI-augmented prototypes, creative web concepts, and practical automation utilities built through iterative vibe coding.',
    technologies: ['Vibe Coding', 'AI Prototyping', 'Automation Concepts', 'Web Tools'],
    keyFeatures: [
      'Rapid end-to-end prototype iteration from concept brief to working interface',
      'Practical focus on usability, speed, and real-world utility',
      'Iterative refinement based on direct user feedback',
    ],
    architectureHighlights: [
      'Editable Slot: Add workflow steps, prompt orchestration notes, and live preview link',
      'Demonstrates adaptability and creative experimentation with modern AI tooling',
    ],
    screenshotUrl: '',
    screenshotPlaceholderNote: 'Upload screenshot at public/projects/creative-preview.png',
    githubUrl: 'https://github.com/Harvender07',
    liveUrl: '',
    isPlaceholder: true,
    status: 'Placeholder Blueprint',
    featured: false,
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'Newton School of Technology',
    degree: 'B.Tech – Computer Science & Artificial Intelligence and Machine Learning',
    timeline: '2026 – 2030',
    status: 'Currently in First Year',
    location: 'Pune, Maharashtra, India',
    highlights: [
      'Developing core programming foundations in C++, Python, and HTML alongside problem-solving methodology',
      'Pursuing specialized Computer Science and Artificial Intelligence & Machine Learning coursework',
      'Actively building independent exploration projects and participating in technical challenges',
    ],
    focusAreas: ['Computer Science Core', 'AI & Machine Learning', 'C++ & Python', 'Software Development'],
  },
  {
    institution: 'SVR PU College',
    degree: 'Class XII – Science (PCM)',
    timeline: 'Completed',
    score: '89.5%',
    status: '89.5% Aggregate',
    location: 'India',
    highlights: [
      'Achieved 89.5% aggregate in Class XII Science (Physics, Chemistry, Mathematics)',
      'Strengthened quantitative reasoning, analytical thinking, and structured study discipline',
      'Built strong mathematical foundations supporting CS and AI/ML studies',
    ],
    focusAreas: ['Physics', 'Chemistry', 'Mathematics (PCM)', 'Analytical Reasoning'],
  },
  {
    institution: 'Army Public School',
    degree: 'Class X (Secondary School)',
    timeline: 'Completed',
    score: '72.2%',
    status: '72.2% Aggregate',
    location: 'India',
    highlights: [
      'Completed Class X schooling with 72.2% in an army school environment',
      'Cultivated personal discipline, time management, teamwork, and resilience through sports and academics',
      'Built strong communication habits across Hindi and English',
    ],
    focusAreas: ['Discipline & Time Management', 'Teamwork & Sports', 'Core Academics'],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'worldquant-gold',
    title: 'WorldQuant Challenge – Gold Certificate',
    issuer: 'WorldQuant BRAIN · Presented by Nitish Maini (CSO)',
    tier: 'Gold',
    date: 'Gold Level Achievement',
    credentialNote: 'Certificate of Accomplishment — Gold Level in the WorldQuant Challenge®',
    fileUrl: '/certificates/worldquant-gold.jpg',
    fileType: 'image',
    verificationPostUrl:
      'https://www.linkedin.com/posts/harvender-singh-rawat-3407a12a1_worldquant-computerscience-ai-ugcPost-7521212556233998336-wLMd',
    badgeColor: 'border-amber-400/50 text-amber-400 bg-amber-500/10',
    skillsDemonstrated: [
      'Quantitative Research & Modeling',
      'Iterative Hypothesis Testing',
      'Analytical Problem Solving',
      'Continuous Learning',
    ],
    description:
      'Awarded Certificate of Accomplishment for reaching Gold Level in the WorldQuant Challenge®, authorized and presented by Nitish Maini, Chief Strategy Officer of WorldQuant.',
  },
  {
    id: 'worldquant-silver',
    title: 'WorldQuant Challenge – Silver Certificate',
    issuer: 'WorldQuant BRAIN · Presented by Nitish Maini (CSO)',
    tier: 'Silver',
    date: 'Silver Level Achievement',
    credentialNote: 'Certificate of Accomplishment — Silver Level in the WorldQuant Challenge®',
    fileUrl: '/certificates/worldquant-silver.jpg',
    fileType: 'image',
    verificationPostUrl:
      'https://www.linkedin.com/posts/harvender-singh-rawat-3407a12a1_worldquant-computerscience-ai-ugcPost-7521212556233998336-wLMd',
    badgeColor: 'border-slate-300/50 text-slate-300 bg-slate-400/10',
    skillsDemonstrated: [
      'Quantitative Data Exploration',
      'Signal & Pattern Evaluation',
      'Structured Experimentation',
    ],
    description:
      'Awarded Certificate of Accomplishment for reaching Silver Level in the WorldQuant Challenge®, demonstrating consistent progression in quantitative problem analysis.',
  },
  {
    id: 'worldquant-bronze',
    title: 'WorldQuant Challenge – Bronze Certificate',
    issuer: 'WorldQuant BRAIN · Presented by Nitish Maini (CSO)',
    tier: 'Bronze',
    date: 'Bronze Level Achievement',
    credentialNote: 'Certificate of Accomplishment — Bronze Level in the WorldQuant Challenge®',
    fileUrl: '/certificates/worldquant-bronze.jpg',
    fileType: 'image',
    verificationPostUrl:
      'https://www.linkedin.com/posts/harvender-singh-rawat-3407a12a1_worldquant-computerscience-ai-ugcPost-7521212556233998336-wLMd',
    badgeColor: 'border-amber-700/60 text-amber-500 bg-amber-700/10',
    skillsDemonstrated: [
      'Foundational Quantitative Thinking',
      'Data Interpretation',
      'Competitive Readiness',
    ],
    description:
      'Awarded Certificate of Accomplishment for reaching Bronze Level in the WorldQuant Challenge®, marking the first milestone in my WorldQuant quantitative research journey.',
  },
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    title: 'Academic Development',
    period: '2026 – 2030 (First Year)',
    tag: 'B.Tech CSE (AI & ML)',
    iconName: 'GraduationCap',
    description:
      'Building technical knowledge and practical skills through first-year coursework at Newton School of Technology, Pune.',
    bulletPoints: [
      'Developing foundational programming fluency in C++, Python, and HTML',
      'Strengthening mathematical reasoning and algorithmic problem-solving habits',
      'Seeking internship opportunities to apply academic learning in real-world engineering teams',
    ],
  },
  {
    title: 'Independent Projects & Vibe Coding',
    period: 'Ongoing',
    tag: 'Practical Exploration',
    iconName: 'Code2',
    description:
      'Exploring software development, frontend experiments, and AI-driven workflows through practical prototypes.',
    bulletPoints: [
      'Designing structured project slots across Software, Web, AI/ML, and Creative Tech',
      'Practicing rapid prototyping and iterative debugging via Vibe Coding',
      'Building clean GitHub hygiene and deployable web workflows',
    ],
  },
  {
    title: 'Technical Learning & Coding Challenges',
    period: 'Active Track',
    tag: 'Skill Expansion',
    iconName: 'BookOpen',
    description:
      'Expanding systematically beyond introductory syntax into modern web development, databases, APIs, and ML tools.',
    bulletPoints: [
      'Following a structured roadmap across JavaScript, CSS, React, SQL, Git, APIs, and DSA',
      'Applying quick-learning and problem-solving habits to new developer ecosystems',
      'Maintaining steady weekly practice and transparent documentation',
    ],
  },
  {
    title: 'Certifications & Extracurricular Activities',
    period: 'Milestones',
    tag: 'WorldQuant & Discipline',
    iconName: 'Trophy',
    description:
      'Combining competitive quantitative research milestones with athletic discipline and creative media editing.',
    bulletPoints: [
      'Earned Bronze, Silver, and Gold Level Certificates in the WorldQuant Challenge®',
      'Active in basketball and fitness, reinforcing teamwork and time management',
      'Practicing creative digital storytelling through video editing',
    ],
  },
];

export const PERSONALITY_PILLARS: PersonalityPillar[] = [
  {
    title: 'Basketball & Fitness',
    category: 'Discipline & Teamwork',
    description:
      'Regular basketball and fitness training reinforce stamina, quick decision-making, court awareness, and team-first collaboration.',
    takeaway: 'Consistent energy, composure under pressure, and collaborative spirit.',
    iconName: 'Activity',
  },
  {
    title: 'Content Creation & Video Editing',
    category: 'Creativity & Detail',
    description:
      'Editing digital videos sharpens pacing, attention to visual detail, narrative clarity, and audience empathy.',
    takeaway: 'Strong sense of UI polish, visual hierarchy, and concise communication.',
    iconName: 'Video',
  },
  {
    title: 'Creative Experimentation',
    category: 'Curiosity & Vibe Coding',
    description:
      'Exploring emerging AI workflows, interactive prototypes, and digital tools to turn new ideas into usable software.',
    takeaway: 'Fast experimentation mindset and comfort exploring unfamiliar tools.',
    iconName: 'Sparkles',
  },
  {
    title: 'Continuous Personal Development',
    category: 'Time Management & Mindset',
    description:
      'Grounded in an army school background, focusing on daily accountability, adaptability, and steady self-improvement.',
    takeaway: 'Quick learner, coachable, and eager to learn from experienced mentors.',
    iconName: 'TrendingUp',
  },
];

export const ATS_RESUME_DATA = {
  name: 'Harvender Singh Rawat',
  title: 'B.Tech CSE (Artificial Intelligence & Machine Learning) Student',
  contact: {
    email: 'harvendersinghrawat7336@gmail.com',
    location: 'Pune, Maharashtra, India',
    github: 'github.com/Harvender07',
    linkedin: 'linkedin.com/in/harvender-singh-rawat-3407a12a1',
  },
  summary:
    'Motivated first-year B.Tech student specializing in Computer Science and Artificial Intelligence & Machine Learning at Newton School of Technology. Eager to explore software development, emerging technologies, and AI-driven solutions. Possesses foundational programming knowledge, creative problem-solving abilities, and an interest in learning through practical projects. Seeking internship opportunities to develop technical skills and gain industry experience.',
  careerObjective:
    'To begin my professional journey in the technology industry, contribute to meaningful projects, continuously improve my technical abilities, and grow as a software and AI/ML professional.',
  experience:
    'Fresher — Currently building technical knowledge and practical skills through academic learning and independent exploration.',
  education: [
    {
      institution: 'Newton School of Technology',
      degree: 'B.Tech – Computer Science & Artificial Intelligence and Machine Learning',
      timeline: '2026 – 2030 | Currently in First Year',
      details: 'Location: Pune, Maharashtra, India | Core Focus: Programming Fundamentals, AI & Machine Learning, Practical Projects.',
    },
    {
      institution: 'SVR PU College',
      degree: 'Class XII – Science (PCM)',
      timeline: 'Completed',
      details: 'Percentage: 89.5%',
    },
    {
      institution: 'Army Public School',
      degree: 'Class X',
      timeline: 'Completed',
      details: 'Percentage: 72.2%',
    },
  ],
  skills: {
    programming: 'C++ – Basic, Python – Basic, HTML – Basic',
    interests: 'Software Development, Frontend Development, Artificial Intelligence, Machine Learning, Web Technologies',
    additional: 'MS Office – Basic, Video Editing, Vibe Coding',
    inProgress: 'JavaScript, CSS, React, SQL, Git, APIs, Data Structures & Algorithms, Machine Learning Tools',
  },
  strengths: 'Quick Learner, Problem Solving, Adaptability, Teamwork, Creativity, Discipline and Time Management',
  languages: 'Hindi – Fluent, English – Fluent',
  certifications: [
    {
      name: 'WorldQuant Challenge® – Gold Level Certificate of Accomplishment',
      issuer: 'WorldQuant BRAIN',
      desc: 'Awarded for reaching Gold Level in the WorldQuant Challenge (verified on LinkedIn).',
    },
    {
      name: 'WorldQuant Challenge® – Silver Level Certificate of Accomplishment',
      issuer: 'WorldQuant BRAIN',
      desc: 'Awarded for reaching Silver Level in the WorldQuant Challenge.',
    },
    {
      name: 'WorldQuant Challenge® – Bronze Level Certificate of Accomplishment',
      issuer: 'WorldQuant BRAIN',
      desc: 'Awarded for reaching Bronze Level in the WorldQuant Challenge.',
    },
  ],
  projects: [
    {
      name: 'Recruiter-Focused Developer Portfolio (React + TypeScript + Tailwind)',
      tech: 'React, TypeScript, Tailwind CSS, Vite, Vercel',
      points: [
        'Designed and deployed a clean, minimal dark/light developer portfolio structured around recruiter usability.',
        'Integrated verified WorldQuant certificate previews, ATS resume viewer, and FormSubmit email contact.',
      ],
    },
  ],
};
