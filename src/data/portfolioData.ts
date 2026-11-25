import {
  Project,
  SkillItem,
  SaiPullRequest,
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
    'First-year B.Tech Computer Science and Artificial Intelligence & Machine Learning student at Newton School of Technology (2026–2030). Focused on software engineering fundamentals, Git internals, interactive web interfaces, and AI/ML visualizations, seeking software development or AI/ML internships.',
  professionalSummary:
    'I am a first-year B.Tech student specializing in Computer Science and Artificial Intelligence & Machine Learning at Newton School of Technology (Batch 2026–2030). My current technical focus spans Python, automated CLI testing and Git internals through S&AI open-source pull requests, interactive HTML/JavaScript visualizations, and React/TypeScript web applications. My goal is to secure a Software Development, Frontend Engineering, or AI/ML internship where I can contribute to production codebases and build reliable engineering habits.',
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
      'Breaking complex challenges down into clear, modular logic and developing practical, testable software implementations.',
    icon: 'Cpu',
  },
  {
    title: 'Creativity & Innovation',
    subtitle: 'Curiosity-Driven',
    description:
      'Combining creative ideation, visual storytelling instincts, and emerging AI tools to turn concepts into working digital prototypes.',
    icon: 'Compass',
  },
  {
    title: 'Teamwork & Communication',
    subtitle: 'Hindi & English (Fluent)',
    description:
      'Fluent in both Hindi and English, collaborating clearly across peers, taking feedback openly, and contributing positively to teams.',
    icon: 'Users',
  },
];

// Every skill links directly to verified code or pull requests in this portfolio
export const SKILLS_DATA: SkillItem[] = [
  {
    name: 'Python',
    proficiency: 'Applied in Projects / PRs',
    levelPercentage: 65,
    category: 'programming',
    description:
      'Applied across 10 verification scripts (check.py) for S&AI Git internals and Python lab exercises in the Hopper repository.',
    evidenceLabel: 'S&AI PR #83 (R21-T001 check.py)',
    evidenceUrl: 'https://github.com/S-AI-Projects/write-yourself-a-git/pull/83',
  },
  {
    name: 'HTML & Interactive Canvas',
    proficiency: 'Applied in Projects / PRs',
    levelPercentage: 65,
    category: 'programming',
    description:
      'Semantic markup and interactive client-side visualization built in the 3D Vector Attention Matrix Simulator.',
    evidenceLabel: 'llm-attention-matrix (index.html)',
    evidenceUrl: 'https://github.com/Harvender07/llm-attention-matrix',
  },
  {
    name: 'Bash & Shell Scripting',
    proficiency: 'Applied in Projects / PRs',
    levelPercentage: 55,
    category: 'programming',
    description:
      'Automated test harness execution and CLI boundary verification in wyag-tests.sh across S&AI pull requests.',
    evidenceLabel: 'S&AI PR #90 (wyag-tests.sh)',
    evidenceUrl: 'https://github.com/S-AI-Projects/write-yourself-a-git/pull/90',
  },
  {
    name: 'C++',
    proficiency: 'Foundational (Basic)',
    levelPercentage: 45,
    category: 'programming',
    description:
      'Foundational syntax, control flow, functions, and introductory object-oriented programming concepts practiced in coursework.',
    evidenceLabel: 'GitHub Profile (Harvender07)',
    evidenceUrl: 'https://github.com/Harvender07',
  },
  {
    name: 'React & TypeScript',
    proficiency: 'Applied in Projects / PRs',
    levelPercentage: 60,
    category: 'frameworks',
    description:
      'Component-based UI architecture, typed data models, state management, and Vite bundling used in this portfolio.',
    evidenceLabel: 'Portfolio Repository (src/)',
    evidenceUrl: 'https://github.com/Harvender07/Portfolio',
  },
  {
    name: 'Tailwind CSS',
    proficiency: 'Applied in Projects / PRs',
    levelPercentage: 60,
    category: 'frameworks',
    description:
      'Responsive utility-first styling, dark/light theme custom variants, and accessible layouts in the Portfolio codebase.',
    evidenceLabel: 'Portfolio Repository (index.css)',
    evidenceUrl: 'https://github.com/Harvender07/Portfolio',
  },
  {
    name: 'Git & GitHub Internals',
    proficiency: 'Applied in Projects / PRs',
    levelPercentage: 70,
    category: 'tools',
    description:
      'Deep practical understanding of Git objects, index staging, trees, refs, and PR workflows via write-yourself-a-git.',
    evidenceLabel: 'S&AI PR #92 (object_read regression)',
    evidenceUrl: 'https://github.com/S-AI-Projects/write-yourself-a-git/pull/92',
  },
  {
    name: 'Automated Regression Testing',
    proficiency: 'Applied in Projects / PRs',
    levelPercentage: 65,
    category: 'tools',
    description:
      'Writing deterministic input/output fixtures (inputs.json, results.json) and regression checks for CLI state contracts.',
    evidenceLabel: 'S&AI PR #85 (state transitions)',
    evidenceUrl: 'https://github.com/S-AI-Projects/write-yourself-a-git/pull/85',
  },
  {
    name: 'Vibe Coding & AI Prototyping',
    proficiency: 'Applied in Projects / PRs',
    levelPercentage: 70,
    category: 'tools',
    description:
      'Rapid AI-assisted iteration and prototyping applied to interactive Transformer visualizations and web interfaces.',
    evidenceLabel: 'llm-attention-matrix Repository',
    evidenceUrl: 'https://github.com/Harvender07/llm-attention-matrix',
  },
];

export const SAI_REPO_INFO = {
  repoName: 'S-AI-Projects/write-yourself-a-git',
  repoUrl: 'https://github.com/S-AI-Projects/write-yourself-a-git',
  prsFilterUrl: 'https://github.com/S-AI-Projects/write-yourself-a-git/pulls?q=is%3Apr+author%3AHarvender07',
  contributorHandle: 'Harvender07',
  description:
    'Contributed 10 structured verification, contract documentation, isolation, and regression-protection Pull Requests (#83–#92) across tasks R21-T001 through R21-T010 for the Python-based write-yourself-a-git implementation.',
};

export const SAI_PULL_REQUESTS: SaiPullRequest[] = [
  {
    taskId: 'R21-T001',
    prNumber: 83,
    title: 'Specify cmd_add command contract',
    prUrl: 'https://github.com/S-AI-Projects/write-yourself-a-git/pull/83',
    status: 'Open',
    issueRef: 'Fixes #1',
    filesModified: ['work/R21-T001/check.py', 'inputs.json', 'results.json', 'write-yourself-a-git.org', 'wyag-tests.sh'],
    codeModifications:
      'Documented and tested the cmd_add staging contract so valid paths produce bytewise-sorted index entries while invalid or missing paths are rejected before mutating the index.',
    technicalRationale:
      'Prevents silent index corruption on invalid file arguments and guarantees deterministic index ordering matching canonical Git.',
  },
  {
    taskId: 'R21-T002',
    prNumber: 84,
    title: 'Exercise argument boundaries for cmd_ls_tree',
    prUrl: 'https://github.com/S-AI-Projects/write-yourself-a-git/pull/84',
    status: 'Open',
    issueRef: 'Fixes #7',
    filesModified: ['work/R21-T002/check.py', 'inputs.json', 'results.json', 'write-yourself-a-git.org', 'wyag-tests.sh'],
    codeModifications:
      'Added boundary tests for cmd_ls_tree validating the required TREE argument and optional -r/--recursive flag, asserting clean usage errors when omitted.',
    technicalRationale:
      'Ensures missing positional CLI arguments fail explicitly without altering repository state or raising unhandled tracebacks.',
  },
  {
    taskId: 'R21-T003',
    prNumber: 85,
    title: 'Verify state transitions for cmd_show_ref',
    prUrl: 'https://github.com/S-AI-Projects/write-yourself-a-git/pull/85',
    status: 'Open',
    issueRef: 'Fixes #8',
    filesModified: ['work/R21-T003/check.py', 'inputs.json', 'results.json', 'write-yourself-a-git.org', 'wyag-tests.sh'],
    codeModifications:
      'Verified read-only idempotence of cmd_show_ref and validated that branch updates after commits reflect the updated target without affecting unrelated refs.',
    technicalRationale:
      'Confirms inspection commands never mutate on-disk refs or index state while accurately tracking branch pointer updates.',
  },
  {
    taskId: 'R21-T004',
    prNumber: 86,
    title: 'Preserve quoted arguments in tree_from_index',
    prUrl: 'https://github.com/S-AI-Projects/write-yourself-a-git/pull/86',
    status: 'Open',
    issueRef: 'Fixes #9',
    filesModified: ['work/R21-T004/check.py', 'inputs.json', 'results.json', 'write-yourself-a-git.org', 'wyag-tests.sh'],
    codeModifications:
      'Added checks verifying tree_from_index preserves paths containing spaces and literal wildcard characters verbatim inside generated tree objects.',
    technicalRationale:
      'Guards against accidental shell globbing or word-splitting bugs when staging and serializing non-trivial filenames.',
  },
  {
    taskId: 'R21-T005',
    prNumber: 87,
    title: 'Isolate environment dependencies for tree_to_dict',
    prUrl: 'https://github.com/S-AI-Projects/write-yourself-a-git/pull/87',
    status: 'Open',
    issueRef: 'Fixes #10',
    filesModified: ['work/R21-T005/check.py', 'inputs.json', 'results.json', 'write-yourself-a-git.org', 'wyag-tests.sh'],
    codeModifications:
      'Isolated environment dependencies in tree_to_dict and added handling for unresolvable tree references under isolated local Git configs.',
    technicalRationale:
      'Makes execution deterministic across developer machines by removing implicit reliance on host-level Git configuration.',
  },
  {
    taskId: 'R21-T006',
    prNumber: 88,
    title: 'Clarify one source responsibility in cmd_init',
    prUrl: 'https://github.com/S-AI-Projects/write-yourself-a-git/pull/88',
    status: 'Open',
    issueRef: 'Fixes #11',
    filesModified: ['work/R21-T006/check.py', 'inputs.json', 'results.json', 'write-yourself-a-git.org', 'wyag-tests.sh'],
    codeModifications:
      'Clarified path dispatch responsibility in cmd_init so the default directory fallback condition is explicit while preserving observable repo initialization.',
    technicalRationale:
      'Eliminates ambiguous path resolution branches and keeps initialization behavior easy to reason about and test.',
  },
  {
    taskId: 'R21-T007',
    prNumber: 89,
    title: 'Publish a tested usage example for cmd_status',
    prUrl: 'https://github.com/S-AI-Projects/write-yourself-a-git/pull/89',
    status: 'Open',
    issueRef: 'Fixes #12',
    filesModified: ['work/R21-T007/check.py', 'inputs.json', 'results.json', 'write-yourself-a-git.org', 'wyag-tests.sh'],
    codeModifications:
      'Published and validated an executable usage example for cmd_status covering repo setup, command invocation, output sections, and state verification.',
    technicalRationale:
      'Prevents documentation drift by tying documented CLI examples directly to automated CI/verification checks.',
  },
  {
    taskId: 'R21-T008',
    prNumber: 90,
    title: 'Explain a failing invocation for cmd_status_index_worktree',
    prUrl: 'https://github.com/S-AI-Projects/write-yourself-a-git/pull/90',
    status: 'Open',
    issueRef: 'Fixes #13',
    filesModified: ['work/R21-T008/check.py', 'inputs.json', 'results.json', 'write-yourself-a-git.org', 'wyag-tests.sh'],
    codeModifications:
      'Documented and tested failing invocations of cmd_status_index_worktree outside a repository context, verifying non-zero exit codes and diagnostic guidance.',
    technicalRationale:
      'Improves CLI usability and safety by surfacing clear actionable errors when invoked outside a valid Git worktree.',
  },
  {
    taskId: 'R21-T009',
    prNumber: 91,
    title: 'Integrate a focused check for cmd_log',
    prUrl: 'https://github.com/S-AI-Projects/write-yourself-a-git/pull/91',
    status: 'Open',
    issueRef: 'Fixes #14',
    filesModified: ['work/R21-T009/check.py', 'inputs.json', 'results.json', 'write-yourself-a-git.org', 'wyag-tests.sh'],
    codeModifications:
      'Integrated a repeatable offline check for cmd_log verifying DAG Graphviz output generation and error propagation on nonexistent commit references.',
    technicalRationale:
      'Guarantees commit-graph traversal output stays accurate and completely independent of external network services.',
  },
  {
    taskId: 'R21-T010',
    prNumber: 92,
    title: 'Protect header length & format conditions in object_read',
    prUrl: 'https://github.com/S-AI-Projects/write-yourself-a-git/pull/92',
    status: 'Open',
    issueRef: 'Fixes #15',
    filesModified: ['work/R21-T010/check.py', 'inputs.json', 'results.json', 'write-yourself-a-git.org', 'wyag-tests.sh'],
    codeModifications:
      'Added regression tests protecting header length and format validation in object_read, rejecting mutated objects with mismatched lengths or unsupported types.',
    technicalRationale:
      'Prevents malformed or corrupted Git object files from silently deserializing into invalid internal state.',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'llm-attention-matrix',
    title: '3D Vector Attention Matrix Simulator',
    category: 'ai',
    categoryLabel: 'AI & Machine Learning',
    tagline:
      'Interactive 3D visualization of Transformer self-attention scores, vector space embeddings, and token-to-token attention beams.',
    problem:
      'Understanding how Transformer models weight token relationships in multi-dimensional vector space is difficult when reading static equations or raw attention tensors.',
    overview:
      'Built an interactive browser-based 3D vector space simulator that renders token embeddings on a perspective coordinate grid with dynamic softmax attention threshold gating, 2D heatmaps, and an NLP weight inspector.',
    solutionArchitecture:
      'Single-page HTML/Canvas/WebGL-style 3D projection architecture with interactive camera orbit, threshold slider filtering (τ), real-time token search beacon highlights, and synchronized 2D attention heatmap.',
    individualContribution:
      'Sole author — designed and implemented the 3D coordinate projection, attention threshold slider, token search highlights, zoom/fullscreen controls, and Vercel deployment config.',
    technologies: ['HTML5', 'JavaScript', '3D Perspective Canvas', 'Transformer Attention', 'Vercel'],
    keyFeatures: [
      '3D Vector Matrix Space with drop stems and dynamic laser attention beams',
      'Attention Threshold Gating (τ) slider filtering active beams by softmax score',
      'Interactive token search with pulsing highlights and 35%–450% zoom + camera orbit',
      '2D Heatmap & NLP Inspector for examining token-to-token attention weights',
    ],
    architectureHighlights: [
      'Client-side zero-backend architecture configured via vercel.json for instant deployment',
      'Synchronized 3D spatial view and 2D matrix heatmap inspector',
    ],
    githubUrl: 'https://github.com/Harvender07/llm-attention-matrix',
    liveUrl: 'https://github.com/Harvender07/llm-attention-matrix',
    status: 'Completed',
    featured: true,
  },
  {
    id: 'write-yourself-a-git',
    title: 'Write Yourself a Git — Verification & Core Contracts',
    category: 'software',
    categoryLabel: 'Software Development',
    tagline:
      'Python-based Git implementation enhanced with 10 automated command contract, boundary, isolation, and regression test suites.',
    problem:
      'Educational Git reimplementations frequently break on edge cases such as invalid paths, quoted filenames with spaces, missing tree arguments, or host-dependent Git configs.',
    overview:
      'Forked and contributed 10 verified Pull Requests (#83–#92) to S-AI-Projects/write-yourself-a-git covering cmd_add, cmd_ls_tree, cmd_show_ref, tree_from_index, tree_to_dict, cmd_init, cmd_status, cmd_log, and object_read.',
    solutionArchitecture:
      'Modular verification harness pairing isolated Python check.py runners and JSON test fixtures (inputs.json / results.json) with wyag-tests.sh shell assertions and Org-mode documentation.',
    individualContribution:
      'Authored all 10 PRs (R21-T001 through R21-T010) under Harvender07, writing Python verification scripts, boundary test cases, and technical documentation.',
    technologies: ['Python', 'Bash / Shell', 'Git Internals', 'JSON Fixtures', 'Regression Testing'],
    keyFeatures: [
      'Deterministic CLI contract verification across 10 core Git subcommands',
      'Environment isolation ensuring reproducible runs regardless of host config',
      'Header-length and object-format corruption guards in object_read',
      'Tested executable usage documentation preventing doc drift',
    ],
    architectureHighlights: [
      'Structured per-task verification directory layout (work/R21-T001 .. R21-T010)',
      'Automated shell test orchestration via wyag-tests.sh',
    ],
    githubUrl: 'https://github.com/S-AI-Projects/write-yourself-a-git/pulls?q=is%3Apr+author%3AHarvender07',
    liveUrl: 'https://github.com/Harvender07/write-yourself-a-git',
    status: 'Open Source',
    featured: true,
  },
  {
    id: 'recruiter-portfolio-platform',
    title: 'Developer Portfolio & ATS Credential Platform',
    category: 'web',
    categoryLabel: 'Web Development',
    tagline:
      'Recruiter-focused React, TypeScript, and Tailwind CSS portfolio with verified S&AI PR telemetry, WorldQuant credentials, and ATS PDF export.',
    problem:
      'Generic student portfolios often obscure real GitHub contributions, lack verifiable evidence for listed skills, and omit ATS-compatible resumes.',
    overview:
      'Engineered a dark/light themed web application structured directly around engineering hiring criteria, linking every technical skill to verifiable GitHub PRs or repositories.',
    solutionArchitecture:
      'Vite + React + TypeScript single-page application using typed data contracts (src/data/portfolioData.ts), Tailwind CSS v4 custom theme variants, and FormSubmit AJAX contact delivery.',
    individualContribution:
      'Built end-to-end component architecture, responsive dark/light design tokens, ATS resume drawer + PDF generator, and live FormSubmit contact pipeline.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'FormSubmit API', 'Vercel'],
    keyFeatures: [
      'Dedicated S&AI Open-Source Contributions section tracking PRs #83–#92',
      'Evidence-linked Skills matrix connecting each skill to GitHub code',
      'Authentic WorldQuant certificate viewer and 1-page printable ATS resume',
      'Accessible dark/light theme switcher and FormSubmit contact form',
    ],
    architectureHighlights: [
      'Zero external UI bloat; tree-shaken Lucide icons and strict TypeScript types',
      'Vercel SPA rewrite routing configured in vercel.json',
    ],
    githubUrl: 'https://github.com/Harvender07/Portfolio',
    liveUrl: 'https://github.com/Harvender07/Portfolio',
    status: 'Active',
    featured: true,
  },
  {
    id: 'hopper-python-labs',
    title: 'Hopper — Python Problem Solving & Lab Archive',
    category: 'creative',
    categoryLabel: 'Software & Problem Solving',
    tagline:
      'Structured Python coursework repository organizing PSP modules, lab implementations, executable scripts, and engineering logbooks.',
    problem:
      'Early programming exercises become disorganized without structured separation between problem-solving practice, reusable scripts, and reflection logbooks.',
    overview:
      'Maintained a structured Python repository containing Problem Solving & Programming (PSP) exercises, lab modules, CLI utilities, and learning logbooks.',
    solutionArchitecture:
      'Directory-separated repository layout (PSP/, bin/, labs/, logbook/) isolating runnable scripts from lab assignments and progress logs.',
    individualContribution:
      'Maintained and authored Python scripts, lab solutions, and structured logbook documentation.',
    technologies: ['Python', 'Problem Solving', 'CLI Scripts', 'GitHub'],
    keyFeatures: [
      'Organized separation of PSP exercises, lab modules, and logbook notes',
      'Version-controlled Python solutions tracking iterative skill progression',
      'Reusable command-line utilities in bin/',
    ],
    architectureHighlights: [
      'Clean repository organization supporting fast review of foundational Python work',
    ],
    githubUrl: 'https://github.com/Harvender07/hopper',
    liveUrl: 'https://github.com/Harvender07/hopper',
    status: 'Active',
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
      'Developing core programming foundations in Python, C++, HTML, and Git internals',
      'Contributed 10 verified Pull Requests (#83–#92) to S-AI-Projects/write-yourself-a-git',
      'Building practical AI/ML visualizations and recruiter-ready web applications',
    ],
    focusAreas: ['Computer Science Core', 'AI & Machine Learning', 'Python & Git Internals', 'Web Development'],
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
    date: 'Gold Level (2026)',
    credentialNote: 'Certificate of Accomplishment — Gold Level in the WorldQuant Challenge® (2026)',
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
    date: 'Silver Level (2026)',
    credentialNote: 'Certificate of Accomplishment — Silver Level in the WorldQuant Challenge® (2026)',
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
    date: 'Bronze Level (2026)',
    credentialNote: 'Certificate of Accomplishment — Bronze Level in the WorldQuant Challenge® (2026)',
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
      'Developing programming fluency in Python, C++, HTML, and React/TypeScript',
      'Strengthening mathematical reasoning and algorithmic problem-solving habits',
      'Seeking internship opportunities to apply academic learning in engineering teams',
    ],
  },
  {
    title: 'S&AI Open-Source Contributions',
    period: 'November 2026',
    tag: '10 Pull Requests',
    iconName: 'Code2',
    description:
      'Submitted 10 verified Pull Requests (#83–#92) to S-AI-Projects/write-yourself-a-git covering tasks R21-T001 to R21-T010.',
    bulletPoints: [
      'Implemented Python check.py verification suites and JSON input/result fixtures',
      'Isolated test environments and added regression guards for Git object parsing',
      'Documented CLI contracts and failing invocation diagnostics',
    ],
  },
  {
    title: 'Independent Projects & Visualization',
    period: 'Ongoing',
    tag: 'Practical Builds',
    iconName: 'BookOpen',
    description:
      'Applying classroom AI/ML and web concepts into deployed interactive applications.',
    bulletPoints: [
      'Built the 3D Vector Attention Matrix Simulator for Transformer self-attention',
      'Engineered this React + TypeScript + Tailwind portfolio with Vercel deployment',
      'Organized Python PSP exercises and lab utilities in the Hopper repository',
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
    'Fresher — Currently building technical knowledge and practical skills through academic learning, S&AI open-source pull requests (#83–#92), and independent projects.',
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
    programming: 'Python, C++ (Basic), HTML, Bash / Shell Scripting',
    interests: 'Software Development, Frontend Development, Artificial Intelligence, Machine Learning, Web Technologies',
    additional: 'React, TypeScript, Tailwind CSS, Git & GitHub, Automated Regression Testing, Vibe Coding, MS Office, Video Editing',
    inProgress: 'Data Structures & Algorithms, SQL, REST APIs, Machine Learning Tooling',
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
      name: 'S-AI-Projects/write-yourself-a-git — 10 Open-Source Pull Requests (#83–#92)',
      tech: 'Python, Bash, Git Internals, Regression Testing',
      points: [
        'Submitted 10 verified PRs (R21-T001 to R21-T010) validating cmd_add, cmd_ls_tree, cmd_show_ref, cmd_init, cmd_status, cmd_log, and object_read.',
      ],
    },
    {
      name: '3D Vector Attention Matrix Simulator (Harvender07/llm-attention-matrix)',
      tech: 'HTML5, JavaScript, 3D Perspective Canvas, Vercel',
      points: [
        'Built an interactive 3D Transformer attention visualizer with softmax threshold gating (τ), token search, and 2D heatmap inspection.',
      ],
    },
  ],
};
