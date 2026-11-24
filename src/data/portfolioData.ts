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
  role: 'Aspiring Software Engineer & AI/ML Undergraduate',
  headline: 'Building Technology. Exploring Intelligence. Creating Impact.',
  designation: 'Computer Science & AI/ML Undergraduate | Aspiring Software Engineer',
  institution: 'Newton School of Technology',
  degree: 'B.Tech in Computer Science & Artificial Intelligence and Machine Learning',
  batch: '2026–2030',
  location: 'India',
  careerLevel: 'Fresher / Undergraduate Student',
  careerGoal: 'Software Development, AI/ML, Frontend Development, and Technology Internships',
  status: 'Open to Internship Opportunities',
  email: 'harvendersinghrawat7336@gmail.com',
  github: 'https://github.com/Harvender07',
  linkedin: 'https://www.linkedin.com/in/harvender-singh-rawat', // Configurable LinkedIn URL
  profileImageUrl: '/profile.jpg', // Place your headshot at public/profile.jpg
  bioIntro:
    "I'm a Computer Science and AI/ML undergraduate at Newton School of Technology, passionate about software engineering, artificial intelligence, and web technologies. I enjoy exploring new technologies, developing practical solutions, and continuously improving my technical abilities.",
  bioExtended:
    "I'm currently pursuing my B.Tech in Computer Science and Artificial Intelligence & Machine Learning at Newton School of Technology. I am developing my foundation in programming, software development, and emerging technologies.\n\nI believe in learning through experimentation, building projects, and solving real-world problems. My goal is to grow into a versatile software engineer with strong foundations in development and artificial intelligence.",
  resumeDownloadUrl: '/resume.pdf', // Place your updated resume PDF at public/resume.pdf
};

export const ABOUT_PILLARS = [
  {
    title: 'Army Background & Disciplined Mindset',
    subtitle: 'Rigor & Consistency',
    description:
      'Raised in an army environment, I bring structured personal discipline, punctuality, resilience under pressure, and consistent follow-through on engineering commitments.',
    icon: 'Shield',
  },
  {
    title: 'Self-Learning & Adaptability',
    subtitle: 'Rapid Technology Uptake',
    description:
      'I learn proactively through hands-on experimentation, official technical documentation, and iterative coding rather than waiting for classroom instruction.',
    icon: 'Zap',
  },
  {
    title: 'Creative Problem-Solving',
    subtitle: 'First-Principles Thinking',
    description:
      'I enjoy decomposing complex, open-ended challenges into clear, modular logic and developing practical software solutions.',
    icon: 'Cpu',
  },
  {
    title: 'Interest in Technology & Innovation',
    subtitle: 'Curiosity-Driven',
    description:
      'Deeply enthusiastic about how software engineering, artificial intelligence, and modern web technologies converge to build high-leverage products.',
    icon: 'Compass',
  },
  {
    title: 'Teamwork & Communication',
    subtitle: 'Collaborative Execution',
    description:
      'Comfortable collaborating across diverse peers, listening carefully to feedback, documenting work clearly, and contributing positively to team velocity.',
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
      'Core interest area: studying intelligent systems, reasoning workflows, and applied AI concepts.',
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

// Clearly marked editable placeholder projects until completed builds are added
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
    status: 'Currently Pursuing',
    location: 'India',
    highlights: [
      'Developing core programming foundations, algorithmic thinking, and modern software engineering practices',
      'Pursuing specialized coursework in Artificial Intelligence and Machine Learning',
      'Participating in hands-on coding labs, peer learning, and technical project sprints',
    ],
    focusAreas: ['Computer Science Core', 'AI & Machine Learning', 'C++ & Python', 'Software Engineering'],
  },
  {
    institution: 'SVR PU College',
    degree: 'Class 12 (Pre-University)',
    timeline: 'Completed',
    score: '89.5%',
    status: '89.5% Aggregate',
    location: 'India',
    highlights: [
      'Achieved 89.5% overall score in senior secondary education',
      'Strengthened analytical reasoning, mathematics, and disciplined study habits',
      'Built academic readiness for undergraduate Computer Science & AI/ML engineering',
    ],
    focusAreas: ['Mathematics', 'Analytical Problem Solving', 'Science Foundations'],
  },
  {
    institution: 'Army Public School',
    degree: 'Class 10 (Secondary School)',
    timeline: 'Completed',
    score: '72.2%',
    status: '72.2% Aggregate',
    location: 'India',
    highlights: [
      'Completed secondary schooling with 72.2% in an army school environment',
      'Cultivated personal discipline, punctuality, teamwork, and resilience through sports and academics',
      'Developed foundational communication and leadership skills',
    ],
    focusAreas: ['Disciplined Mindset', 'Teamwork & Sports', 'Core Academics'],
  },
];

// Place original certificate PDFs or images inside public/certificates/ to render them directly
export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'worldquant-gold',
    title: 'WorldQuant Challenge – Gold Certificate',
    issuer: 'WorldQuant Challenge',
    tier: 'Gold',
    date: 'Gold Achievement',
    credentialNote: 'Upload original certificate file at public/certificates/worldquant-gold.pdf (or .jpg/.png)',
    fileUrl: '/certificates/worldquant-gold.pdf',
    fileType: 'pdf',
    badgeColor: 'border-amber-400/50 text-amber-400 bg-amber-500/10',
    skillsDemonstrated: [
      'Quantitative Modeling & Logical Reasoning',
      'Iterative Hypothesis Testing',
      'Analytical Problem Solving',
      'Research Persistence',
    ],
    description:
      'Earned the Gold Certificate in the WorldQuant Challenge, demonstrating analytical curiosity, structured quantitative thinking, and persistence through competitive problem-solving milestones.',
  },
  {
    id: 'worldquant-silver',
    title: 'WorldQuant Challenge – Silver Certificate',
    issuer: 'WorldQuant Challenge',
    tier: 'Silver',
    date: 'Silver Achievement',
    credentialNote: 'Upload original certificate file at public/certificates/worldquant-silver.pdf (or .jpg/.png)',
    fileUrl: '/certificates/worldquant-silver.pdf',
    fileType: 'pdf',
    badgeColor: 'border-slate-300/50 text-slate-300 bg-slate-400/10',
    skillsDemonstrated: [
      'Quantitative Data Exploration',
      'Pattern & Signal Evaluation',
      'Structured Experimentation',
    ],
    description:
      'Awarded the Silver Certificate in the WorldQuant Challenge for consistent progress in quantitative problem analysis and formula experimentation.',
  },
  {
    id: 'worldquant-bronze',
    title: 'WorldQuant Challenge – Bronze Certificate',
    issuer: 'WorldQuant Challenge',
    tier: 'Bronze',
    date: 'Bronze Achievement',
    credentialNote: 'Upload original certificate file at public/certificates/worldquant-bronze.pdf (or .jpg/.png)',
    fileUrl: '/certificates/worldquant-bronze.pdf',
    fileType: 'pdf',
    badgeColor: 'border-amber-700/60 text-amber-500 bg-amber-700/10',
    skillsDemonstrated: [
      'Foundational Quantitative Thinking',
      'Data Interpretation',
      'Competitive Readiness',
    ],
    description:
      'Recognized with the Bronze Certificate in the WorldQuant Challenge for completing early competitive quantitative research and analysis milestones.',
  },
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    title: 'Academic Development',
    period: '2026 – 2030',
    tag: 'B.Tech CS & AI/ML',
    iconName: 'GraduationCap',
    description:
      'Building a strong engineering foundation at Newton School of Technology through structured computer science and AI/ML coursework.',
    bulletPoints: [
      'Practicing programming fundamentals in C++, Python, and HTML',
      'Strengthening mathematical reasoning and computational logic',
      'Collaborating in peer review and team problem-solving sessions',
    ],
  },
  {
    title: 'Independent Projects & Vibe Coding',
    period: 'Ongoing',
    tag: 'Hands-On Building',
    iconName: 'Code2',
    description:
      'Translating concepts into working prototypes through independent exploration, documentation, and AI-assisted development workflows.',
    bulletPoints: [
      'Designing modular project blueprints across Software, Web, AI/ML, and Creative Tech',
      'Learning clean GitHub repository organization and deployment practices',
      'Iterating on user-centric layouts and practical automation ideas',
    ],
  },
  {
    title: 'Technical Learning & Coding Challenges',
    period: 'Active Track',
    tag: 'Skill Expansion',
    iconName: 'BookOpen',
    description:
      'Expanding beyond foundational syntax into modern web development, data structures, APIs, and machine learning tooling.',
    bulletPoints: [
      'Follow-through roadmap covering JavaScript, CSS, React, SQL, Git, APIs, and DSA',
      'Solving beginner coding exercises to build fluency and debugging discipline',
      'Documenting learning progress transparently for continuous improvement',
    ],
  },
  {
    title: 'Certifications & Extracurricular Activities',
    period: '2024 – Present',
    tag: 'Recognition & Growth',
    iconName: 'Trophy',
    description:
      'Combining competitive quantitative challenges with athletic discipline and creative digital production.',
    bulletPoints: [
      'Earned WorldQuant Challenge Gold, Silver, and Bronze Certificates',
      'Maintained regular basketball training, physical fitness, and team coordination',
      'Produced creative digital edits strengthening visual communication skills',
    ],
  },
];

export const PERSONALITY_PILLARS: PersonalityPillar[] = [
  {
    title: 'Basketball & Fitness',
    category: 'Discipline & Teamwork',
    description:
      'Regular basketball sessions and physical conditioning reinforce stamina, quick decision-making, court awareness, and team-first collaboration.',
    takeaway: 'Consistent energy, composure under pressure, and collaborative spirit.',
    iconName: 'Activity',
  },
  {
    title: 'Content Creation & Video Editing',
    category: 'Visual Storytelling',
    description:
      'Editing digital videos sharpens pacing, attention to visual detail, narrative clarity, and audience empathy.',
    takeaway: 'Strong sense of UI polish, visual hierarchy, and concise communication.',
    iconName: 'Video',
  },
  {
    title: 'Creative Experimentation',
    category: 'Curiosity & Vibe Coding',
    description:
      'Exploring emerging AI workflows, interactive prototypes, and digital tools to see how new ideas can be turned into usable software.',
    takeaway: 'Fast experimentation mindset and comfort exploring unfamiliar tools.',
    iconName: 'Sparkles',
  },
  {
    title: 'Continuous Personal Development',
    category: 'Army Upbringing & Mindset',
    description:
      'Grounded in an army school background, I focus on daily accountability, active listening, and measurable self-improvement.',
    takeaway: 'Coachable, reliable, and eager to learn from experienced mentors.',
    iconName: 'TrendingUp',
  },
];

export const ATS_RESUME_DATA = {
  name: 'Harvender Singh Rawat',
  title: 'Computer Science & AI/ML Undergraduate | Aspiring Software Engineer',
  contact: {
    email: 'harvendersinghrawat7336@gmail.com',
    location: 'India',
    github: 'github.com/Harvender07',
    linkedin: 'linkedin.com/in/harvender-singh-rawat',
  },
  summary:
    'Computer Science & AI/ML undergraduate at Newton School of Technology (2026–2030) with an army background and disciplined work ethic. Foundational experience in C++, Python, and HTML, paired with WorldQuant Challenge Gold, Silver, and Bronze Certificates. Actively seeking Software Development, Frontend Development, or AI/ML Internships to contribute with high learnability and execution rigor.',
  education: [
    {
      institution: 'Newton School of Technology',
      degree: 'B.Tech – Computer Science & Artificial Intelligence and Machine Learning',
      timeline: '2026 – 2030 (Currently Pursuing)',
      details: 'Focus Areas: Programming Fundamentals (C++, Python), AI/ML Foundations, Web Technologies.',
    },
    {
      institution: 'SVR PU College',
      degree: 'Class 12 (Pre-University)',
      timeline: 'Completed',
      details: 'Aggregate Score: 89.5%.',
    },
    {
      institution: 'Army Public School',
      degree: 'Class 10 (Secondary School)',
      timeline: 'Completed',
      details: 'Aggregate Score: 72.2% | Cultivated discipline, teamwork, and leadership.',
    },
  ],
  skills: {
    programming: 'C++ (Basic), Python (Basic), HTML (Basic)',
    interests: 'Software Development, Frontend Development, Artificial Intelligence, Machine Learning, Web Technologies',
    additional: 'Vibe Coding, MS Office (Basic), Video Editing',
    inProgress: 'JavaScript, CSS, React, SQL, Git, APIs, Data Structures & Algorithms, Machine Learning Tools',
  },
  certifications: [
    {
      name: 'WorldQuant Challenge – Gold Certificate',
      issuer: 'WorldQuant Challenge',
      desc: 'Awarded for quantitative problem-solving and analytical modeling performance.',
    },
    {
      name: 'WorldQuant Challenge – Silver Certificate',
      issuer: 'WorldQuant Challenge',
      desc: 'Recognized for quantitative experimentation and data exploration milestones.',
    },
    {
      name: 'WorldQuant Challenge – Bronze Certificate',
      issuer: 'WorldQuant Challenge',
      desc: 'Earned for completing foundational quantitative research challenges.',
    },
  ],
  projects: [
    {
      name: 'Software, Web, AI/ML & Creative Tech Blueprints (Portfolio Showcase)',
      tech: 'C++ (Basic), Python (Basic), HTML (Basic), React/TypeScript',
      points: [
        'Structuring modular problem-solving projects across software development, web, AI/ML, and automation.',
        'Built and deployed a recruiter-focused React + TypeScript + Tailwind portfolio on Vercel.',
      ],
    },
  ],
};
