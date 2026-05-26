export type Interest =
  | "Web Development"
  | "Programming Languages"
  | "Artificial Intelligence & Machine Learning"
  | "Data"
  | "Cloud Computing"
  | "DevOps"
  | "Mobile Development"
  | "Design & Graphics"
  | "Cybersecurity"
  | "Software Engineering"
  | "Core Computing / Core Tech"
  | "Engineering";
export type TrackName = string;
export type UserPlan = "free" | "pro" | "premium";
export type UserRole = "student" | "admin" | "teacher";
export type LessonStatus = "completed" | "unlocked" | "locked";
export type CourseAccess = "free" | "paid";
export type Weekday =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";
export interface Assessment {
  id: string;
  title: string;
  description: string;
  type: "assessment" | "project";
}
export interface Lesson {
  id: string;
  title: string;
  duration: string;
  status: LessonStatus;
  videoId: string;
  description: string;
}
export interface SectionLesson {
  id: string;
  title: string;
  description: string;
  type: "video" | "text";
  videoUrl?: string;
  textContent?: string;
  duration: string;
  status: LessonStatus;
}
export interface SectionTask {
  id: string;
  title: string;
  description: string;
  submissionInstructions: string;
  submissionLink?: string;
  helpVideoLink?: string;
  submissionVideoUrl?: string;
}
export interface CourseSection {
  id: string;
  title: string;
  isFree: boolean;
  isLocked: boolean;
  lessons: SectionLesson[];
  tasks: SectionTask[];
}
export interface Module {
  id: string;
  title: string;
  week: number;
  lessons: Lesson[];
  assessment: Assessment;
}
export interface Course {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  instructor: string;
  teacherId?: string;
  teacherName?: string;
  totalLessons: number;
  completedLessons: number;
  cover: string;
  modules: Module[];
  interest: Interest;
  track: TrackName;
  access: CourseAccess;
  price?: number;
  roadmapText?: string;
  roadmapLink?: string;
  overview?: string;
  schemeOfWork?: string[];
  status?: "draft" | "published";
  availableOn?: Weekday;
  rating: number;
  learners: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  featured?: boolean;
  tags: string[];
}
export interface Announcement {
  id: string;
  title: string;
  body: string;
  date: string;
  tag: "update" | "event" | "release";
}
export interface PricingPlan {
  id: UserPlan;
  title: string;
  price: string;
  tagline: string;
  description: string;
  features: string[];
  cta: string;
  highlight?: boolean;
  audience?: string;
  accessSummary?: string;
  supportSummary?: string;
  certificateSummary?: string;
}
export interface QuizShopItem {
  id: string;
  title: string;
  cost: number;
  rarity: "Rare" | "Epic" | "Legendary";
  reward: string;
  description: string;
}
export interface NotificationItem {
  id: string;
  title: string;
  body: string;
  description?: string;
  image?: string;
  target?: "all-students" | "tutors";
  kind: "course" | "reward" | "message";
  read: boolean;
  time: string;
}
export interface LearningBranch {
  title: TrackName;
  summary: string;
  tools: string[];
  weeklyFocus: string[];
}
export interface AcademyProgram {
  id: string;
  title: Interest;
  description: string;
  cover: string;
  iconLabel: string;
  branches: LearningBranch[];
}
export interface TeacherUploadBlueprint {
  id: string;
  title: string;
  status: "Draft" | "Review" | "Published";
  learners: number;
  completionRate: number;
  program: Interest;
  track: TrackName;
  tags: string[];
  roadmap: string[];
  modules: Array<{
    id: string;
    title: string;
    weekLabel: string;
    lessons: Array<{ id: string; title: string; format: "video" | "text"; resource: string }>;
    assessment: string;
    project: string;
  }>;
}
export interface TeacherProfileOption {
  id: string;
  username?: string;
  name: string;
  email?: string;
  program: Interest;
  track: TrackName;
  focus: string;
  bio?: string;
  isActive?: boolean;
}
export interface AdminBroadcast {
  id: string;
  title: string;
  image: string;
  description: string;
  target: "all-students" | "tutors";
  sentAt: string;
}
export interface CoursePaymentSnapshot {
  courseId: string;
  courseTitle: string;
  tutorName: string;
  price: number;
  purchases: number;
  revenue: number;
}
export interface PaymentRecord {
  id: string;
  courseId: string;
  studentId: string;
  amount: number;
  status: "paid";
  purchasedAt: string;
}
export const interests: Interest[] = [
  "Web Development",
  "Programming Languages",
  "Artificial Intelligence & Machine Learning",
  "Data",
  "Cloud Computing",
  "DevOps",
  "Mobile Development",
  "Design & Graphics",
  "Cybersecurity",
  "Software Engineering",
  "Core Computing / Core Tech",
  "Engineering",
];
export const trackOptionsByInterest: Record<Interest, TrackName[]> = {
  "Web Development": ["Frontend Development", "Backend Development", "Fullstack Development"],
  "Programming Languages": ["Python", "JavaScript", "C++"],
  "Artificial Intelligence & Machine Learning": ["Machine Learning", "Deep Learning", "Generative AI"],
  "Data": ["Data Analysis", "Data Science", "Data Engineering", "Business Intelligence"],
  "Cloud Computing": ["AWS Cloud", "Microsoft Azure", "Google Cloud", "Cloud Architecture"],
  "DevOps": ["CI/CD Engineering", "Containerization", "Infrastructure as Code", "Site Reliability Engineering"],
  "Mobile Development": ["Flutter Development", "React Native"],
  "Design & Graphics": ["UI/UX Design", "Graphic Design", "Product Design", "Motion Design"],
  "Cybersecurity": ["Ethical Hacking", "Network Security", "Cloud Security", "SOC Analysis"],
  "Software Engineering": ["Software Architecture", "Testing Engineering", "Performance Engineering", "API Engineering"],
  "Core Computing / Core Tech": ["Linux", "Networking", "Git & Collaboration", "Databases", "Computer Science", "APIs & Internet"],
  "Engineering": ["3D Modeling", "SolidWorks", "Engineering Design Systems"],
};
function buildLessons(
  prefix: string,
  titles: string[],
  unlockedThru: number,
  completedThru: number,
): Lesson[] {
  return titles.map((title, index) => ({
    id: `${prefix}-l${index + 1}`,
    title,
    duration: `${12 + ((index * 6) % 22)} min`,
    status: index < completedThru ? "completed" : index < unlockedThru ? "unlocked" : "locked",
    videoId: "dQw4w9WgXcQ",
    description:
      "A guided lesson with examples, breakdowns, and a practical task to reinforce the concept.",
  }));
}
function buildModules(
  prefix: string,
  weeks: Array<{
    title: string;
    lessons: string[];
    assessment: string;
    completedLessons: number;
    unlockedLessons: number;
  }>,
): Module[] {
  return weeks.map((week, index) => ({
    id: `${prefix}-w${index + 1}`,
    title: week.title,
    week: index + 1,
    lessons: buildLessons(
      `${prefix}-w${index + 1}`,
      week.lessons,
      week.unlockedLessons,
      week.completedLessons,
    ),
    assessment: {
      id: `${prefix}-a${index + 1}`,
      title: index === weeks.length - 1 ? "Capstone project" : `Week ${index + 1} assessment`,
      description: week.assessment,
      type: index === weeks.length - 1 ? "project" : "assessment",
    },
  }));
}
export const academyPrograms: AcademyProgram[] = [
  {
    id: "web-development",
    title: "Web Development",
    description: "A complete path for learners who want to build websites, user interfaces, and real-world web apps.",
    cover: " ",
    iconLabel: "WD",
    branches: [
      {
        title: "Frontend Development",
        summary: "HTML, CSS, JavaScript, responsive layouts, and frontend project delivery.",
        tools: ["HTML & CSS - Tailwind CSS", "Intro to JavaScript & React", "TypeScript"],
        weeklyFocus: []
      },
      {
        title: "Backend Development",
        summary: "Server-side engineering, database modeling, and API integrations.",
        tools: ["Backend with Python", "Backend with Node.js", "Flask/Django"],
        weeklyFocus: []
      },
      {
        title: "Fullstack Development",
        summary: "Connect frontend thinking with APIs, databases, auth, and deployment basics.",
        tools: ["MERN Stack", "Django + React"],
        weeklyFocus: []
      }
    ]
  },
  {
    id: "programming-languages",
    title: "Programming Languages",
    description: "Deep language-first tracks for learners who want strong fundamentals before choosing a specialization.",
    cover: " ",
    iconLabel: "PL",
    branches: [
      {
        title: "Python",
        summary: "Master Python from syntax basics to object-oriented programming and advanced patterns.",
        tools: ["Python Fundamentals", "Intermediate Python", "Advanced Python"],
        weeklyFocus: []
      },
      {
        title: "JavaScript",
        summary: "Explore modern JavaScript, async programming, and advanced language features.",
        tools: ["JavaScript Basics", "Modern JavaScript", "Advanced JavaScript"],
        weeklyFocus: []
      },
      {
        title: "C++",
        summary: "Understand high-performance programming, data structures, and memory management.",
        tools: ["C++ Fundamentals", "Data Structures in C++", "Advanced C++"],
        weeklyFocus: []
      }
    ]
  },
  {
    id: "ai-ml",
    title: "Artificial Intelligence & Machine Learning",
    description: "Data, machine learning, deep neural networks, generative AI models, and automation workflows.",
    cover: " ",
    iconLabel: "AI",
    branches: [
      {
        title: "Machine Learning",
        summary: "Learn ML foundations, supervised learning, and deployment of predictive models.",
        tools: ["Machine Learning Fundamentals", "Supervised Learning", "Model Deployment"],
        weeklyFocus: []
      },
      {
        title: "Deep Learning",
        summary: "Build and train neural networks, CNNs, and modern transformers.",
        tools: ["Neural Networks", "CNNs", "Transformers"],
        weeklyFocus: []
      },
      {
        title: "Generative AI",
        summary: "Harness LLMs, build AI agents, and master prompt engineering.",
        tools: ["Prompt Engineering", "AI Agents", "Building with LLMs"],
        weeklyFocus: []
      }
    ]
  },
  {
    id: "data",
    title: "Data",
    description: "Unlock insights, design scalable data pipelines, and visualize business datasets.",
    cover: " ",
    iconLabel: "DA",
    branches: [
      {
        title: "Data Analysis",
        summary: "Analyze data using spreadsheets, SQL queries, and interactive dashboards.",
        tools: ["Excel for Data", "SQL for Analytics", "Power BI"],
        weeklyFocus: []
      },
      {
        title: "Data Science",
        summary: "Apply statistics, predictive modeling, and Python libraries to extract insights.",
        tools: ["Statistics", "Data Science with Python", "Predictive Analytics"],
        weeklyFocus: []
      },
      {
        title: "Data Engineering",
        summary: "Design and build data pipelines, ETL workflows, and Spark applications.",
        tools: ["Data Pipelines", "Apache Spark", "ETL Engineering"],
        weeklyFocus: []
      },
      {
        title: "Business Intelligence",
        summary: "Visualize data and build premium reporting dashboards.",
        tools: ["Tableau", "Power BI Advanced", "Data Visualization"],
        weeklyFocus: []
      }
    ]
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    description: "Master cloud services, platform design, serverless patterns, and multi-cloud environments.",
    cover: " ",
    iconLabel: "CC",
    branches: [
      {
        title: "AWS Cloud",
        summary: "Learn AWS core services, solution architecture, and cloud security.",
        tools: ["AWS Fundamentals", "AWS Solutions Architecture", "AWS Security"],
        weeklyFocus: []
      },
      {
        title: "Microsoft Azure",
        summary: "Master Azure cloud administration, infrastructure, and DevOps pipelines.",
        tools: ["Azure Fundamentals", "Azure Administration", "Azure DevOps"],
        weeklyFocus: []
      },
      {
        title: "Google Cloud",
        summary: "Understand GCP fundamentals, Kubernetes deployments, and cloud networking.",
        tools: ["GCP Fundamentals", "Kubernetes on GCP", "Cloud Infrastructure"],
        weeklyFocus: []
      },
      {
        title: "Cloud Architecture",
        summary: "Design scalable, serverless, and multi-cloud patterns.",
        tools: ["Cloud Design Patterns", "Serverless Computing", "Multi-Cloud Systems"],
        weeklyFocus: []
      }
    ]
  },
  {
    id: "devops",
    title: "DevOps",
    description: "Automate build infrastructure, run container clusters, and manage site reliability.",
    cover: " ",
    iconLabel: "DO",
    branches: [
      {
        title: "CI/CD Engineering",
        summary: "Build and automate delivery pipelines with GitHub Actions and Jenkins.",
        tools: ["GitHub Actions", "Jenkins", "CI/CD Pipelines"],
        weeklyFocus: []
      },
      {
        title: "Containerization",
        summary: "Manage applications with Docker containers and Kubernetes clusters.",
        tools: ["Docker Fundamentals", "Kubernetes", "Container Orchestration"],
        weeklyFocus: []
      },
      {
        title: "Infrastructure as Code",
        summary: "Provision and automate infrastructure using Terraform and Ansible.",
        tools: ["Terraform", "Ansible", "Infrastructure Automation"],
        weeklyFocus: []
      },
      {
        title: "Site Reliability Engineering",
        summary: "Monitor performance, set up dashboards, and handle incident management.",
        tools: ["Monitoring & Logging", "Prometheus & Grafana", "Incident Management"],
        weeklyFocus: []
      }
    ]
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description: "Build native and cross-platform mobile apps for iOS and Android devices.",
    cover: " ",
    iconLabel: "MD",
    branches: [
      {
        title: "Flutter Development",
        summary: "Build beautiful cross-platform mobile apps with Dart and Flutter.",
        tools: ["Dart Fundamentals", "Flutter Basics", "Cross-Platform Apps"],
        weeklyFocus: []
      },
      {
        title: "React Native",
        summary: "Create native mobile experiences using React and Javascript.",
        tools: ["React Native Fundamentals", "Mobile APIs", "Mobile App Deployment"],
        weeklyFocus: []
      }
    ]
  },
  {
    id: "design-graphics",
    title: "Design & Graphics",
    description: "Create interface mockups, graphics assets, product prototypes, and animations.",
    cover: " ",
    iconLabel: "DG",
    branches: [
      {
        title: "UI/UX Design",
        summary: "Research user needs, design intuitive interfaces, and build design systems.",
        tools: ["UI Design Fundamentals", "UX Research", "Design Systems"],
        weeklyFocus: []
      },
      {
        title: "Graphic Design",
        summary: "Master Photoshop and Illustrator for branding and visual asset creation.",
        tools: ["Photoshop", "Illustrator", "Branding Design"],
        weeklyFocus: []
      },
      {
        title: "Product Design",
        summary: "Prototype, wireframe, and design products in Figma.",
        tools: ["Figma", "Wireframing", "Prototyping"],
        weeklyFocus: []
      },
      {
        title: "Motion Design",
        summary: "Bring designs to life with After Effects and animation principles.",
        tools: ["After Effects", "Motion Graphics", "Animation Basics"],
        weeklyFocus: []
      }
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Defend systems, test for vulnerabilities, configure secure networks, and analyze threats.",
    cover: " ",
    iconLabel: "CS",
    branches: [
      {
        title: "Ethical Hacking",
        summary: "Learn penetration testing, Kali Linux tools, and vulnerability exploitation.",
        tools: ["Penetration Testing", "Kali Linux", "Exploitation Basics"],
        weeklyFocus: []
      },
      {
        title: "Network Security",
        summary: "Defend networks with firewalls, secure protocols, and VPN configurations.",
        tools: ["Network Defense", "Firewalls", "VPN Security"],
        weeklyFocus: []
      },
      {
        title: "Cloud Security",
        summary: "Implement identity access management (IAM) and secure cloud architectures.",
        tools: ["AWS Security", "IAM Management", "Secure Architectures"],
        weeklyFocus: []
      },
      {
        title: "SOC Analysis",
        summary: "Monitor threats, use SIEM tools, and handle security incidents.",
        tools: ["Threat Detection", "SIEM Tools", "Incident Response"],
        weeklyFocus: []
      }
    ]
  },
  {
    id: "software-engineering",
    title: "Software Engineering",
    description: "Design systems architecture, automate test coverage, and engineer high-performance APIs.",
    cover: " ",
    iconLabel: "SE",
    branches: [
      {
        title: "Software Architecture",
        summary: "Design high-scale, distributed, and fault-tolerant software systems.",
        tools: ["System Design", "Scalable Systems", "Distributed Systems"],
        weeklyFocus: []
      },
      {
        title: "Testing Engineering",
        summary: "Automate testing with unit, integration, and end-to-end suites.",
        tools: ["Unit Testing", "Integration Testing", "Test Automation"],
        weeklyFocus: []
      },
      {
        title: "Performance Engineering",
        summary: "Profile applications, optimize bottlenecks, and monitor performance.",
        tools: ["Optimization", "Profiling", "Performance Monitoring"],
        weeklyFocus: []
      },
      {
        title: "API Engineering",
        summary: "Build secure, typed, and well-designed REST and GraphQL APIs.",
        tools: ["REST APIs", "GraphQL", "API Security"],
        weeklyFocus: []
      }
    ]
  },
  {
    id: "core-tech",
    title: "Core Computing / Core Tech",
    description: "Build base knowledge in operating systems, networks, Git collaboration, and SQL databases.",
    cover: " ",
    iconLabel: "CT",
    branches: [
      {
        title: "Linux",
        summary: "Learn terminal navigation, administration, and Bash scripting.",
        tools: ["Linux Fundamentals", "Linux Administration", "Bash Scripting"],
        weeklyFocus: []
      },
      {
        title: "Networking",
        summary: "Master TCP/IP networking, routing, and network troubleshooting.",
        tools: ["Networking Basics", "TCP/IP", "Network Troubleshooting"],
        weeklyFocus: []
      },
      {
        title: "Git & Collaboration",
        summary: "Manage source code with Git and team workflows in GitHub.",
        tools: ["Git Fundamentals", "GitHub Workflows", "Team Collaboration"],
        weeklyFocus: []
      },
      {
        title: "Databases",
        summary: "Design relational databases, write queries, and manage PostgreSQL databases.",
        tools: ["SQL Fundamentals", "PostgreSQL", "Database Design"],
        weeklyFocus: []
      },
      {
        title: "Computer Science",
        summary: "Study algorithms, data structures, and operating system principles.",
        tools: ["Algorithms", "Data Structures", "Operating Systems"],
        weeklyFocus: []
      },
      {
        title: "APIs & Internet",
        summary: "Understand HTTP protocols, RESTful APIs, and real-time WebSockets.",
        tools: ["HTTP Fundamentals", "REST APIs", "WebSockets"],
        weeklyFocus: []
      }
    ]
  },
  {
    id: "engineering",
    title: "Engineering",
    description: "Technical design paths for learners interested in 3D systems, product modeling, and engineering workflows.",
    cover: " ",
    iconLabel: "EG",
    branches: [
      {
        title: "3D Modeling",
        summary: "Learn the foundations of digital modeling, forms, assemblies, and presentation in Blender.",
        tools: ["Blender", "CAD Basics", "Rendering", "Model Workflow"],
        weeklyFocus: []
      },
      {
        title: "SolidWorks",
        summary: "Go deeper into mechanical modeling and engineering documentation workflows.",
        tools: ["SolidWorks", "Assemblies", "Drawings", "Simulation"],
        weeklyFocus: []
      },
      {
        title: "Engineering Design Systems",
        summary: "Create repeatable design workflows for technical product teams and engineering orgs.",
        tools: ["Systems Thinking", "CAD Workflow", "Documentation", "Review Loops"],
        weeklyFocus: []
      }
    ]
  }
];
export const mockUser = {
  id: "u_1",
  username: "alex.moore",
  displayName: "Alex Moore",
  email: "alex@mooreskillup.com",
  avatar: "AM",
  joinedAt: "2025-01-12",
  plan: "free" as UserPlan,
  role: "student" as UserRole,
  interests: ["Web Development"] as Interest[],
  wishlist: ["backend-python-api-builder"],
  selectedInterest: "Web Development" as Interest,
  selectedTrack: "Frontend Development" as TrackName,
  purchasedCourseIds: ["backend-python-api-builder"],
};
export const courses: Course[] = [
  {
    id: "frontend-react-studio",
    title: "Frontend React Studio",
    description:
      "A structured web development track for modern frontend builders with HTML, CSS, JavaScript, React, and shipped projects.",
    instructor: "Ada Morgan",
    totalLessons: 24,
    completedLessons: 9,
    cover: " ",
    interest: "Web Development",
    track: "Frontend Development",
    access: "free",
    availableOn: "Monday",
    rating: 4.9,
    learners: 1240,
    level: "Intermediate",
    featured: true,
    tags: ["HTML", "CSS", "JavaScript", "React"],
    modules: buildModules("front-react", [
      {
        title: "HTML and CSS foundations",
        lessons: [
          "How the web works",
          "Semantic HTML",
          "CSS layout systems",
          "Responsive design basics",
        ],
        assessment: "Build and style a responsive landing page section.",
        completedLessons: 4,
        unlockedLessons: 4,
      },
      {
        title: "JavaScript essentials",
        lessons: [
          "Variables and functions",
          "Arrays and objects",
          "DOM interaction",
          "Async basics",
        ],
        assessment: "Create an interactive mini UI with state changes.",
        completedLessons: 3,
        unlockedLessons: 4,
      },
      {
        title: "React foundations",
        lessons: [
          "Components and props",
          "State and hooks",
          "Routing concepts",
          "Reusable UI patterns",
        ],
        assessment: "Build a multi-section React interface.",
        completedLessons: 2,
        unlockedLessons: 3,
      },
      {
        title: "UI polish and motion",
        lessons: ["Design tokens", "Motion basics", "Accessibility polish", "Responsive QA"],
        assessment: "Improve a UI to production-ready quality.",
        completedLessons: 0,
        unlockedLessons: 1,
      },
      {
        title: "Frontend capstone",
        lessons: [
          "Planning the build",
          "Component architecture",
          "Integration pass",
          "Deployment and review",
        ],
        assessment: "Ship a complete frontend capstone project.",
        completedLessons: 0,
        unlockedLessons: 0,
      },
    ]),
  },
  {
    id: "backend-python-api-builder",
    title: "Backend with Python API Builder",
    description:
      "Learn backend development with Python, Django, FastAPI, databases, auth, and real API projects.",
    instructor: "Lena Park",
    totalLessons: 25,
    completedLessons: 7,
    cover: "500 900",
    interest: "Web Development",
    track: "Backend Development",
    access: "paid",
    rating: 4.85,
    learners: 980,
    level: "Intermediate",
    featured: true,
    tags: ["Python", "Django", "FastAPI", "PostgreSQL"],
    modules: buildModules("back-python", [
      {
        title: "Python for backend engineers",
        lessons: [
          "Python syntax for services",
          "Functions and modules",
          "Data structures for APIs",
          "Environment setup",
        ],
        assessment: "Write a clean Python utility service.",
        completedLessons: 4,
        unlockedLessons: 4,
      },
      {
        title: "API design and routing",
        lessons: [
          "HTTP and REST thinking",
          "FastAPI basics",
          "Request validation",
          "Error handling",
        ],
        assessment: "Create a simple CRUD API.",
        completedLessons: 2,
        unlockedLessons: 4,
      },
      {
        title: "Django backend systems",
        lessons: [
          "Django architecture",
          "Models and ORM",
          "Django REST patterns",
          "Serialization basics",
        ],
        assessment: "Build a Django API module.",
        completedLessons: 1,
        unlockedLessons: 3,
      },
      {
        title: "Auth, permissions, and database flow",
        lessons: ["JWT auth", "Permissions", "Database migrations", "Service layer design"],
        assessment: "Secure an API with role-based rules.",
        completedLessons: 0,
        unlockedLessons: 1,
      },
      {
        title: "Backend capstone",
        lessons: ["Capstone planning", "API implementation", "Testing and docs", "Deployment flow"],
        assessment: "Ship a full backend capstone with docs.",
        completedLessons: 0,
        unlockedLessons: 0,
      },
    ]),
  },
  {
    id: "backend-javascript-service-lab",
    title: "Backend with JavaScript Service Lab",
    description:
      "Build backend services with JavaScript and Node.js, from API routing to auth, middleware, and deployment.",
    instructor: "Jordan Cole",
    totalLessons: 22,
    completedLessons: 0,
    cover: "400 500 900",
    interest: "Web Development",
    track: "Backend Development",
    access: "paid",
    rating: 4.76,
    learners: 710,
    level: "Intermediate",
    tags: ["JavaScript", "Node.js", "Express", "MongoDB"],
    modules: buildModules("back-js", [
      {
        title: "JavaScript service foundations",
        lessons: [
          "Node runtime basics",
          "Modules and project structure",
          "Async flow on the server",
          "Local tooling",
        ],
        assessment: "Set up a Node service foundation.",
        completedLessons: 0,
        unlockedLessons: 2,
      },
      {
        title: "APIs with Express",
        lessons: [
          "Routing and middleware",
          "Controllers and handlers",
          "Validation",
          "Error boundaries",
        ],
        assessment: "Create and test Express endpoints.",
        completedLessons: 0,
        unlockedLessons: 0,
      },
      {
        title: "Persistence and auth",
        lessons: [
          "Database integration",
          "Authentication",
          "Authorization",
          "Session and token strategy",
        ],
        assessment: "Add auth to a service app.",
        completedLessons: 0,
        unlockedLessons: 0,
      },
      {
        title: "Production backend patterns",
        lessons: ["Testing", "Logging", "Deployment", "Monitoring basics"],
        assessment: "Prepare a service for production.",
        completedLessons: 0,
        unlockedLessons: 0,
      },
      {
        title: "Backend capstone",
        lessons: [
          "Planning the project",
          "Building the API",
          "Security and review",
          "Deployment and wrap-up",
        ],
        assessment: "Ship a backend capstone app.",
        completedLessons: 0,
        unlockedLessons: 0,
      },
    ]),
  },
  {
    id: "uiux-figma-product-track",
    title: "UI/UX and Figma Product Track",
    description:
      "A premium graphics and design path covering UX thinking, interface design, Figma systems, and case studies.",
    instructor: "Mina Duarte",
    totalLessons: 24,
    completedLessons: 4,
    cover: "400 500",
    interest: "Design & Graphics",
    track: "UI/UX Design",
    access: "paid",
    availableOn: "Thursday",
    rating: 4.95,
    learners: 760,
    level: "Advanced",
    tags: ["UI/UX", "Figma", "Research", "Systems"],
    modules: buildModules("design-uiux", [
      {
        title: "UX foundations",
        lessons: [
          "Research basics",
          "Personas and flows",
          "Information architecture",
          "Problem framing",
        ],
        assessment: "Map a learner journey flow.",
        completedLessons: 3,
        unlockedLessons: 4,
      },
      {
        title: "Interface design in Figma",
        lessons: [
          "Layout and hierarchy",
          "Components and variants",
          "Auto layout",
          "Design consistency",
        ],
        assessment: "Design a responsive product page in Figma.",
        completedLessons: 1,
        unlockedLessons: 4,
      },
      {
        title: "Systems and prototyping",
        lessons: ["Tokens and systems", "Interaction states", "Prototyping", "Design handoff"],
        assessment: "Prototype a learner dashboard flow.",
        completedLessons: 0,
        unlockedLessons: 2,
      },
      {
        title: "Creative production",
        lessons: [
          "Graphics thinking",
          "Brand expression",
          "Video handoff and direction",
          "Design critique loops",
        ],
        assessment: "Create a visual campaign pack.",
        completedLessons: 0,
        unlockedLessons: 0,
      },
      {
        title: "Portfolio case study",
        lessons: ["Case study structure", "Presentation polish", "Feedback pass", "Final delivery"],
        assessment: "Ship a full design case study.",
        completedLessons: 0,
        unlockedLessons: 0,
      },
    ]),
  },
  {
    id: "ai-data-automation-lab",
    title: "AI, Data, and Automation Lab",
    description:
      "Learn analysis, AI workflows, Python tooling, and automation systems for modern digital work.",
    instructor: "Marcus Vega",
    totalLessons: 23,
    completedLessons: 2,
    cover: "400 ",
    interest: "Artificial Intelligence & Machine Learning",
    track: "Machine Learning",
    access: "free",
    availableOn: "Wednesday",
    rating: 4.72,
    learners: 680,
    level: "Beginner",
    tags: ["Python", "Data", "AI", "Automation"],
    modules: buildModules("ai-data", [
      {
        title: "Data and Python foundations",
        lessons: ["Python basics", "NumPy and arrays", "Pandas intro", "Clean data thinking"],
        assessment: "Analyze a starter dataset.",
        completedLessons: 2,
        unlockedLessons: 4,
      },
      {
        title: "Visualization and reporting",
        lessons: [
          "Plotting basics",
          "Storytelling with charts",
          "Business insights",
          "Communicating results",
        ],
        assessment: "Present a simple findings report.",
        completedLessons: 0,
        unlockedLessons: 2,
      },
      {
        title: "AI fundamentals",
        lessons: [
          "AI concepts",
          "Model intuition",
          "Prompt and tool workflows",
          "Responsible AI basics",
        ],
        assessment: "Document an AI-assisted workflow.",
        completedLessons: 0,
        unlockedLessons: 0,
      },
      {
        title: "Automation systems",
        lessons: ["Workflow mapping", "API automation", "Agent loops", "Business use cases"],
        assessment: "Build an automation concept demo.",
        completedLessons: 0,
        unlockedLessons: 0,
      },
      {
        title: "AI and data capstone",
        lessons: ["Project plan", "Implementation", "Insights and review", "Presentation"],
        assessment: "Ship an AI/data capstone project.",
        completedLessons: 0,
        unlockedLessons: 0,
      },
    ]),
  },
  {
    id: "engineering-3d-systems",
    title: "Engineering 3D Systems Studio",
    description:
      "A technical engineering path covering 3D modeling, SolidWorks workflows, and technical design systems.",
    instructor: "Tomi Bello",
    totalLessons: 21,
    completedLessons: 1,
    cover: "700 400",
    interest: "Engineering",
    track: "3D Modeling",
    access: "paid",
    rating: 4.83,
    learners: 410,
    level: "Intermediate",
    tags: ["3D Modeling", "SolidWorks", "Engineering"],
    modules: buildModules("eng-3d", [
      {
        title: "Modeling fundamentals",
        lessons: ["3D form thinking", "Parts and sketches", "Tool familiarity", "Precision habits"],
        assessment: "Model a simple engineering part.",
        completedLessons: 1,
        unlockedLessons: 3,
      },
      {
        title: "Assemblies and technical workflows",
        lessons: ["Assemblies", "Constraints", "Iteration", "Review loops"],
        assessment: "Build a small multi-part assembly.",
        completedLessons: 0,
        unlockedLessons: 1,
      },
      {
        title: "SolidWorks and documentation",
        lessons: [
          "SolidWorks workflow",
          "Drawings",
          "Technical communication",
          "Simulation awareness",
        ],
        assessment: "Prepare technical drawings for review.",
        completedLessons: 0,
        unlockedLessons: 0,
      },
      {
        title: "Design systems for engineering",
        lessons: [
          "Reusable workflows",
          "Team standards",
          "Versioning and naming",
          "Critique loops",
        ],
        assessment: "Define a team modeling standard.",
        completedLessons: 0,
        unlockedLessons: 0,
      },
      {
        title: "Engineering capstone",
        lessons: ["Planning", "Build", "Review", "Presentation"],
        assessment: "Ship a full engineering model showcase.",
        completedLessons: 0,
        unlockedLessons: 0,
      },
    ]),
  },
  {
    id: "cloud-devops-launchpad",
    title: "Cloud and DevOps Launchpad",
    description:
      "Learn cloud deployment, DevOps workflows, CI/CD, automation, and release confidence for modern teams.",
    instructor: "Nina Brooks",
    totalLessons: 22,
    completedLessons: 0,
    cover: "500 400",
    interest: "DevOps",
    track: "CI/CD Engineering",
    access: "paid",
    rating: 4.8,
    learners: 530,
    level: "Intermediate",
    tags: ["Cloud", "DevOps", "Docker", "CI/CD"],
    modules: buildModules("cloud-devops", [
      {
        title: "Cloud foundations",
        lessons: ["Cloud concepts", "Compute and storage", "Networking basics", "Hosting choices"],
        assessment: "Map a deployment architecture.",
        completedLessons: 0,
        unlockedLessons: 2,
      },
      {
        title: "DevOps workflow",
        lessons: ["Linux basics", "Containers with Docker", "CI principles", "Automation thinking"],
        assessment: "Containerize a small app.",
        completedLessons: 0,
        unlockedLessons: 0,
      },
      {
        title: "Deployment systems",
        lessons: ["CD pipelines", "Environment management", "Monitoring", "Rollback plans"],
        assessment: "Design a deployment workflow.",
        completedLessons: 0,
        unlockedLessons: 0,
      },
      {
        title: "Cloud automation",
        lessons: [
          "Scripting automation",
          "Infrastructure concepts",
          "Repeatable workflows",
          "Team operations",
        ],
        assessment: "Automate an ops task flow.",
        completedLessons: 0,
        unlockedLessons: 0,
      },
      {
        title: "DevOps capstone",
        lessons: ["Plan", "Implement", "Observe", "Deliver"],
        assessment: "Ship a cloud and DevOps capstone.",
        completedLessons: 0,
        unlockedLessons: 0,
      },
    ]),
  },
];
export const announcements: Announcement[] = [
  {
    id: "a1",
    title: "Quiz Shop just opened",
    body: "Redeem your points for challenge packs, retries, and mentor-style review perks.",
    date: "20 minutes ago",
    tag: "release",
  },
  {
    id: "a2",
    title: "Backend cohort sprint on Friday",
    body: "Join the live build-along session covering auth, permissions, and clean service layers.",
    date: "Today",
    tag: "event",
  },
  {
    id: "a3",
    title: "New engineering and cloud paths added",
    body: "The academy now includes engineering, cloud, DevOps, and language-first learning trees.",
    date: "2 days ago",
    tag: "update",
  },
];
export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    title: "Free",
    price: "$0",
    tagline: "Explore before you commit",
    description:
      "Ideal for new learners who want to explore beginner sections, preview roadmaps, and understand each course before paying.",
    cta: "Start free",
    audience: "Best for new learners comparing paths",
    accessSummary: "Access roadmap previews, beginner sections, and a limited part of each course.",
    supportSummary: "Basic dashboard, notifications, and standard support.",
    certificateSummary:
      "Certificate previews are visible, but full course certificates unlock only after buying and completing a course.",
    features: [
      "Public catalog and course roadmap preview",
      "Free beginner section access",
      "Student dashboard with progress overview",
      "Preview mode for locked sections",
      "Wishlist and explore-more course recommendations",
    ],
  },
  {
    id: "pro",
    title: "Paid Course",
    price: "Per course",
    tagline: "Unlock full course access",
    description:
      "Built for active learners who want the full course experience: every section, every lesson, every task, and certificate eligibility for the purchased course.",
    cta: "Unlock a course",
    highlight: true,
    audience: "Best for learners ready to pay for a course and finish it properly",
    accessSummary:
      "Unlock all sections, lessons, tasks, roadmap resources, and completion status for the course you pay for.",
    supportSummary: "Full study flow, richer notifications, and project submission guidance.",
    certificateSummary:
      "Generate certificates after completing all lessons and required tasks in that purchased course.",
    features: [
      "Unlock all sections in the selected course",
      "All lessons, tasks, roadmap resources, and submissions",
      "Course completion tracking and certificate eligibility",
      "Project submission instructions per section",
      "Better notifications and learner progress visibility",
    ],
  },
  {
    id: "premium",
    title: "Premium",
    price: "Custom",
    tagline: "Premium support layer",
    description:
      "Designed for learners or cohorts that want mentor-style reviews, premium support, and stronger accountability on top of paid course access.",
    cta: "Talk to us",
    audience: "Best for professionals building portfolio-ready outcomes",
    accessSummary:
      "Everything in paid course access plus deeper feedback loops, premium cohorts, and guided support.",
    supportSummary: "Mentor-style office hours, portfolio reviews, and premium learner support.",
    certificateSummary:
      "Premium certificate experience with capstone review support and advanced completion recognition.",
    features: [
      "Everything in Pro",
      "Mentor-style office-hour support",
      "Portfolio, capstone, and project review",
      "Advanced learning paths and leadership tracks",
      "Priority cohort events and premium accountability",
    ],
  },
];
export const quizShopItems: QuizShopItem[] = [
  {
    id: "qs-1",
    title: "Rapid Quiz Booster",
    cost: 150,
    rarity: "Rare",
    reward: "+1 retry token",
    description: "Use points earned from quizzes to unlock one extra attempt on a challenge.",
  },
  {
    id: "qs-2",
    title: "Mentor Access Pass",
    cost: 450,
    rarity: "Epic",
    reward: "15-minute mentor review",
    description: "A premium-style reward for focused feedback on a project or stuck topic.",
  },
  {
    id: "qs-3",
    title: "Legendary Capstone Drop",
    cost: 900,
    rarity: "Legendary",
    reward: "Private critique + exclusive badge",
    description: "A capstone-level reward pack unlocked through consistent quiz performance.",
  },
];
export const faqItems = [
  {
    question: "How does course access work on the free plan?",
    answer:
      "Free learners can explore the public academy catalog and access selected courses on specific release days. Paid plans unlock everything full-time.",
  },
  {
    question: "How is the dashboard personalized?",
    answer:
      "Learners choose a main academy path and a track during registration. The dashboard then prioritizes content, recommendations, and progress around that selection.",
  },
  {
    question: "What is the Quiz Shop?",
    answer:
      "The Quiz Shop is a gamified rewards area where quiz points can be redeemed for perks like retry tokens, challenge packs, and premium-style review rewards.",
  },
  {
    question: "How are courses structured?",
    answer:
      "Courses are organized week by week. Each week includes lessons plus an assessment, and the final week ends with a capstone-style project before certification.",
  },
];
export const notifications: NotificationItem[] = [
  {
    id: "n1",
    title: "Monday unlock is live",
    body: "Frontend React Studio is open today for free learners.",
    kind: "course",
    read: false,
    time: "Now",
  },
  {
    id: "n2",
    title: "220 points added",
    body: "You passed the backend foundations assessment and unlocked a new Quiz Shop item.",
    kind: "reward",
    read: false,
    time: "1h ago",
  },
  {
    id: "n3",
    title: "Capstone review available",
    body: "Your design submission has new feedback from the team workspace.",
    kind: "message",
    read: true,
    time: "Yesterday",
  },
];
export const teacherUploads: TeacherUploadBlueprint[] = [
  {
    id: "tu-1",
    title: "Backend with Python API Builder",
    status: "Draft",
    learners: 42,
    completionRate: 38,
    program: "Backend Development",
    track: "Backend with Python",
    tags: ["python", "django", "api", "backend"],
    roadmap: [
      "Python foundations and backend thinking",
      "REST API design and route structure",
      "Django REST workflow and authentication",
      "Weekly submission flow and capstone delivery",
    ],
    modules: [
      {
        id: "tu-1-m1",
        title: "Python backend foundations",
        weekLabel: "Week 1",
        lessons: [
          {
            id: "tu-1-m1-l1",
            title: "Python service setup",
            format: "video",
            resource: "https://youtube.com/watch?v=python-setup",
          },
          {
            id: "tu-1-m1-l2",
            title: "Request-response primer",
            format: "text",
            resource: "Guided reading notes for backend request flow.",
          },
        ],
        assessment: "Short quiz on backend concepts",
        project: "Submit a Python utility service.",
      },
      {
        id: "tu-1-m2",
        title: "Django REST workflow",
        weekLabel: "Week 2",
        lessons: [
          {
            id: "tu-1-m2-l1",
            title: "Django models and serializers",
            format: "video",
            resource: "https://youtube.com/watch?v=django-models",
          },
          {
            id: "tu-1-m2-l2",
            title: "Permissions and auth notes",
            format: "text",
            resource: "Reference sheet for JWT and permissions.",
          },
        ],
        assessment: "API endpoint assessment",
        project: "Build and submit a learner profile API.",
      },
    ],
  },
  {
    id: "tu-2",
    title: "Frontend React Studio",
    status: "Published",
    learners: 182,
    completionRate: 67,
    program: "Web Development",
    track: "React and Modern UI",
    tags: ["react", "nextjs", "frontend", "ui"],
    roadmap: [
      "UI foundations and component architecture",
      "State, props, and modern rendering patterns",
      "Responsive product interfaces",
      "Capstone portfolio build",
    ],
    modules: [
      {
        id: "tu-2-m1",
        title: "React foundations",
        weekLabel: "Week 1",
        lessons: [
          {
            id: "tu-2-m1-l1",
            title: "Component anatomy",
            format: "video",
            resource: "https://youtube.com/watch?v=react-components",
          },
          {
            id: "tu-2-m1-l2",
            title: "Props and state cheatsheet",
            format: "text",
            resource: "Reference content for props, state, and events.",
          },
        ],
        assessment: "React fundamentals quiz",
        project: "Build a profile card interface.",
      },
      {
        id: "tu-2-m2",
        title: "Modern UI delivery",
        weekLabel: "Week 2",
        lessons: [
          {
            id: "tu-2-m2-l1",
            title: "Layout systems and responsiveness",
            format: "video",
            resource: "https://youtube.com/watch?v=responsive-ui",
          },
          {
            id: "tu-2-m2-l2",
            title: "UI review checklist",
            format: "text",
            resource: "Design QA and frontend review checklist.",
          },
        ],
        assessment: "Responsive dashboard check",
        project: "Ship a responsive dashboard section.",
      },
    ],
  },
];
export const teacherProfileOptions: TeacherProfileOption[] = [
  {
    id: "tp-1",
    name: "Mina Duarte",
    username: "mina.duarte",
    email: "mina@mooreskillup.com",
    program: "Graphics and Design",
    track: "UI/UX Design",
    focus: "Product design systems and critique workflows",
    bio: "I help learners turn design systems into polished case studies and portfolio work.",
    isActive: true,
  },
  {
    id: "tp-2",
    name: "Ada Morgan",
    username: "ada.morgan",
    email: "ada@mooreskillup.com",
    program: "Backend Development",
    track: "Backend with Python",
    focus: "Django APIs and learner backend architecture",
    bio: "I teach API architecture, Django workflows, and delivery-ready backend fundamentals.",
    isActive: true,
  },
  {
    id: "tp-3",
    name: "Tomi Bello",
    username: "tomi.bello",
    email: "tomi@mooreskillup.com",
    program: "Engineering",
    track: "SolidWorks",
    focus: "Engineering documentation and 3D modeling workflows",
    bio: "I guide technical learners through CAD workflow, project reviews, and engineering documentation.",
    isActive: false,
  },
];
export const adminUsers = [
  {
    id: "u-11",
    name: "Zainab Okon",
    role: "Student",
    program: "Web Development",
    track: "Frontend Development",
    purchasedCourses: 2,
  },
  {
    id: "u-12",
    name: "Chinedu Grey",
    role: "Student",
    program: "Backend Development",
    track: "Backend with Python",
    purchasedCourses: 3,
  },
  {
    id: "u-13",
    name: "Mina Duarte",
    role: "Teacher",
    program: "Graphics and Design",
    track: "UI/UX Design",
    purchasedCourses: 0,
  },
  {
    id: "u-14",
    name: "Ada Morgan",
    role: "Admin",
    program: "Backend Development",
    track: "Backend with Python",
    purchasedCourses: 0,
  },
  {
    id: "u-15",
    name: "Tomi Bello",
    role: "Teacher",
    program: "Engineering",
    track: "SolidWorks",
    purchasedCourses: 0,
  },
];
export const adminBroadcasts: AdminBroadcast[] = [
  {
    id: "b1",
    title: "New backend course sections unlocked",
    image: "/hero-bg.jpg",
    description:
      "Free learners can now preview the first backend section before purchasing the full course.",
    target: "all-students",
    sentAt: "Today",
  },
  {
    id: "b2",
    title: "Tutor upload review reminder",
    image: "/hero-bg.jpg",
    description:
      "Tutors should add submission instructions to each section task before publishing.",
    target: "tutors",
    sentAt: "Yesterday",
  },
];
const courseCatalogConfig: Record<
  string,
  {
    subtitle: string;
    teacherId: string;
    teacherName: string;
    price: number;
    roadmapText: string;
    roadmapLink: string;
    overview: string;
    schemeOfWork: string[];
    status: "draft" | "published";
  }
> = {
  "frontend-react-studio": {
    subtitle: "Modern frontend delivery from HTML foundations to polished React interfaces",
    teacherId: "tp-1",
    teacherName: "Mina Duarte",
    price: 180,
    roadmapText:
      "Start with interface thinking, move into responsive UI systems, then ship portfolio-ready frontend work.",
    roadmapLink: "https://roadmap.sh/frontend",
    overview:
      "A frontend learning path that blends foundations, modern React patterns, and UI review discipline.",
    schemeOfWork: [
      "Frontend foundations",
      "Responsive layout systems",
      "React patterns",
      "Portfolio delivery",
    ],
    status: "published",
  },
  "backend-python-api-builder": {
    subtitle: "Build Django-powered APIs and backend delivery confidence",
    teacherId: "tp-2",
    teacherName: "Ada Morgan",
    price: 220,
    roadmapText:
      "Move from backend thinking into Django APIs, permissions, and production-style project delivery.",
    roadmapLink: "https://roadmap.sh/backend",
    overview:
      "A structured backend course focused on Python, Django, API design, auth, and capstone delivery.",
    schemeOfWork: [
      "Backend foundations",
      "API architecture",
      "Django workflows",
      "Deployment and capstone",
    ],
    status: "published",
  },
  "backend-javascript-engine": {
    subtitle: "Server-side JavaScript, APIs, and full backend project flow",
    teacherId: "tp-2",
    teacherName: "Ada Morgan",
    price: 210,
    roadmapText:
      "Learn Node.js backend thinking, route design, database flow, and final project delivery.",
    roadmapLink: "https://roadmap.sh/nodejs",
    overview:
      "A backend course for learners who want JavaScript server-side fundamentals and delivery habits.",
    schemeOfWork: ["Node foundations", "Express routing", "Database flow", "Capstone build"],
    status: "published",
  },
  "ui-ux-product-lab": {
    subtitle: "User-centered product design and portfolio case-study workflows",
    teacherId: "tp-1",
    teacherName: "Mina Duarte",
    price: 165,
    roadmapText:
      "Understand research, wireframes, interface systems, and case-study communication.",
    roadmapLink: "https://roadmap.sh/ux-design",
    overview:
      "A learner-friendly design course focused on product thinking and polished case-study output.",
    schemeOfWork: ["UX basics", "Wireframes", "UI systems", "Case-study delivery"],
    status: "published",
  },
  "solidworks-engineering-studio": {
    subtitle: "Engineering modeling, documentation, and workflow review",
    teacherId: "admin-owned",
    teacherName: "Admin ownership",
    price: 260,
    roadmapText:
      "Learn design thinking, engineering documentation, and review-ready technical modeling.",
    roadmapLink: "https://roadmap.sh/computer-science",
    overview:
      "An engineering-focused course preserved under admin ownership after teacher access removal.",
    schemeOfWork: ["Part design", "Assemblies", "Documentation", "Engineering showcase"],
    status: "published",
  },
  "cloud-devops-launchpad": {
    subtitle: "CI/CD, cloud operations, and deployment confidence for modern teams",
    teacherId: "admin-owned",
    teacherName: "Admin ownership",
    price: 240,
    roadmapText:
      "Cover cloud foundations, deployment flow, automation, monitoring, and reliable release habits.",
    roadmapLink: "https://roadmap.sh/devops",
    overview:
      "A cloud and DevOps course structured for deployment thinking, automation, and team-ready workflows.",
    schemeOfWork: [
      "Cloud foundations",
      "Container workflow",
      "Deployment systems",
      "Ops automation",
    ],
    status: "published",
  },
};
const paymentPurchaseCounts: Record<string, number> = {
  "frontend-react-studio": 18,
  "backend-python-api-builder": 26,
  "backend-javascript-engine": 11,
  "ui-ux-product-lab": 14,
  "solidworks-engineering-studio": 7,
  "cloud-devops-launchpad": 9,
};
export const paymentRecords: PaymentRecord[] = Object.entries(paymentPurchaseCounts).flatMap(
  ([courseId, purchases], courseIndex) =>
    Array.from({ length: purchases }, (_, index) => {
      const amount = courseCatalogConfig[courseId]?.price ?? 0;
      return {
        id: `pay-${courseIndex + 1}-${index + 1}`,
        courseId,
        studentId: `student-${courseIndex + 1}-${index + 1}`,
        amount,
        status: "paid",
        purchasedAt: `2026-04-${String((index % 18) + 1).padStart(2, "0")}`,
      } satisfies PaymentRecord;
    }),
);
export const coursePaymentSnapshots: CoursePaymentSnapshot[] = courses.map((course) => {
  const price = courseCatalogConfig[course.id]?.price ?? 0;
  const purchases = paymentPurchaseCounts[course.id] ?? 0;
  return {
    courseId: course.id,
    courseTitle: course.title,
    tutorName: courseCatalogConfig[course.id]?.teacherName ?? course.instructor,
    price,
    purchases,
    revenue: price * purchases,
  };
});
export function findLesson(
  lessonId: string,
): { lesson: Lesson; course: Course; module: Module } | null {
  for (const course of courses) {
    for (const module of course.modules) {
      const lesson = module.lessons.find((item) => item.id === lessonId);
      if (lesson) {
        return { lesson, course, module };
      }
    }
  }
  return null;
}
export function getPurchasedCourseIdsForUser(
  user?: { purchasedCourseIds?: string[]; role?: UserRole } | null,
) {
  if (user?.role === "admin" || user?.role === "teacher") {
    return courses.map((course) => course.id);
  }
  return user?.purchasedCourseIds ?? mockUser.purchasedCourseIds ?? [];
}
export function isCoursePurchased(
  courseOrId: Course | string,
  user?: { purchasedCourseIds?: string[]; role?: UserRole } | null,
) {
  const courseId = typeof courseOrId === "string" ? courseOrId : courseOrId.id;
  return getPurchasedCourseIdsForUser(user).includes(courseId);
}
export function getCourseMeta(course: Course) {
  const meta = courseCatalogConfig[course.id];
  return {
    subtitle: meta?.subtitle ?? `${course.track} pathway for structured learner delivery`,
    teacherId: meta?.teacherId ?? "admin-owned",
    teacherName: meta?.teacherName ?? course.instructor,
    price: meta?.price ?? 0,
    roadmapText:
      meta?.roadmapText ??
      `Follow the ${course.track} path from the first free section into guided project delivery.`,
    roadmapLink: meta?.roadmapLink,
    overview: meta?.overview ?? course.description,
    schemeOfWork:
      meta?.schemeOfWork ?? course.modules.map((module) => `Week ${module.week}: ${module.title}`),
    status: meta?.status ?? "published",
  };
}
export function getCoursePrice(course: Course) {
  return getCourseMeta(course).price;
}
export function getPlatformOverview() {
  const students = adminUsers.filter((user) => user.role === "Student").length;
  const tutors = teacherProfileOptions.filter((teacher) => teacher.isActive !== false).length;
  const admins = adminUsers.filter((user) => user.role === "Admin").length;
  return {
    totalStudents: students,
    totalTutors: tutors,
    totalAdmins: admins,
    totalCourses: courses.length,
  };
}
export function getTeacherRows() {
  return teacherProfileOptions.map((teacher) => {
    const ownedCourses = courses.filter((course) => getCourseMeta(course).teacherId === teacher.id);
    return {
      id: teacher.id,
      name: teacher.name,
      email:
        teacher.email ??
        `${teacher.username ?? teacher.name.toLowerCase().replace(/\s+/g, ".")}@mooreskillup.com`,
      role: "Teacher",
      program: teacher.program,
      track: teacher.track,
      numberOfCourses: ownedCourses.length,
      isActive: teacher.isActive !== false,
      reassignsTo: teacher.isActive === false ? "Admin ownership" : teacher.name,
    };
  });
}
export function getAdminCourseRows() {
  return courses.map((course) => ({
    id: course.id,
    title: course.title,
    tutorName: getCourseMeta(course).teacherName,
    price: getCoursePrice(course),
    status: getCourseMeta(course).status,
  }));
}
export function getRevenueSummary() {
  const totalRevenue = coursePaymentSnapshots.reduce((sum, item) => sum + item.revenue, 0);
  return { totalRevenue, totalPurchases: paymentRecords.length, byCourse: coursePaymentSnapshots };
}
export function getNotificationsForRole(role: UserRole = "student") {
  const dashboardNotifications = notifications.filter((item) => {
    if (!item.target) return role === "student";
    return role === "teacher" ? item.target === "tutors" : item.target === "all-students";
  });
  const adminMessages = adminBroadcasts
    .filter((item) =>
      role === "teacher" ? item.target === "tutors" : item.target === "all-students",
    )
    .map((item) => ({
      id: `broadcast-${item.id}`,
      title: item.title,
      body: item.description,
      description: item.description,
      image: item.image,
      target: item.target,
      kind: "message" as const,
      read: false,
      time: item.sentAt,
    }));
  return [...adminMessages, ...dashboardNotifications];
}
export function todaysLesson(
  userOrPlan:
    | UserPlan
    | { purchasedCourseIds?: string[]; role?: UserRole }
    | null
    | undefined = "free",
  selectedInterests: Interest[] = [],
) {
  const orderedCourses = getCoursesByInterest(selectedInterests);
  const viewer =
    typeof userOrPlan === "string"
      ? {
          purchasedCourseIds:
            userOrPlan === "free" ? [] : orderedCourses.map((course) => course.id),
          role: "student" as UserRole,
        }
      : userOrPlan;
  for (const course of orderedCourses) {
    const sections = getCourseSections(course, viewer);
    for (const section of sections) {
      if (section.isLocked) continue;
      const nextLesson = section.lessons.find((lesson) => lesson.status !== "locked");
      if (nextLesson) {
        const module = course.modules.find((item) => item.id === section.id) ?? course.modules[0];
        const rawLesson =
          module.lessons.find((item) => item.id === nextLesson.id) ?? module.lessons[0];
        return { course, lesson: rawLesson, module };
      }
    }
  }
  const course = orderedCourses[0] ?? courses[0];
  return { course, lesson: course.modules[0].lessons[0], module: course.modules[0] };
}
export function getCoursesByInterest(selectedInterests: Interest[]) {
  if (!selectedInterests.length) {
    return courses;
  }
  const matches = courses.filter((course) => selectedInterests.includes(course.interest));
  const rest = courses.filter((course) => !selectedInterests.includes(course.interest));
  return [...matches, ...rest];
}
export function getTodayName(date = new Date()): Weekday {
  return date.toLocaleDateString("en-US", { weekday: "long" }) as Weekday;
}
export function canAccessCourse(course: Course, plan: UserPlan, day = getTodayName()) {
  if (plan !== "free") {
    return { allowed: true, reason: null as string | null };
  }
  if (course.access === "paid") {
    return { allowed: false, reason: "Upgrade to Pro to unlock this course." };
  }
  if (course.availableOn && course.availableOn !== day) {
    return {
      allowed: false,
      reason: `Free learners can access this course on ${course.availableOn}.`,
    };
  }
  return { allowed: true, reason: null as string | null };
}
export function getLearnerDashboardCourses(
  selectedInterests: Interest[],
  userOrPlan: UserPlan | { purchasedCourseIds?: string[]; role?: UserRole } | null | undefined,
) {
  const ordered = getCoursesByInterest(selectedInterests);
  const viewer =
    typeof userOrPlan === "string"
      ? {
          purchasedCourseIds: userOrPlan === "free" ? [] : ordered.map((course) => course.id),
          role: "student" as UserRole,
        }
      : userOrPlan;
  const current = ordered.filter((course) => isCoursePurchased(course, viewer));
  const recommended = ordered.filter((course) => !isCoursePurchased(course, viewer)).slice(0, 4);
  const unlocked = ordered.filter((course) =>
    getCourseSections(course, viewer).some((section) => !section.isLocked),
  );
  const locked = ordered.filter((course) =>
    getCourseSections(course, viewer).some((section) => section.isLocked),
  );
  return { current: current.length ? current : ordered.slice(0, 2), recommended, unlocked, locked };
}
export function getPlanComparisonNotes(plan: PricingPlan) {
  return [plan.accessSummary, plan.supportSummary, plan.certificateSummary].filter(
    Boolean,
  ) as string[];
}
export function getCourseRoadmap(course: Course) {
  const meta = getCourseMeta(course);
  return [
    meta.roadmapText,
    ...course.modules.map(
      (module) =>
        `Week ${module.week}: ${module.title} - ${module.assessment.type === "project" ? "project delivery" : "assessment checkpoint"}`,
    ),
  ];
}
export function getCoursePrerequisites(course: Course) {
  return [
    `Commit to the ${course.track} pathway and weekly study schedule.`,
    `Be ready to work with ${course.tags.slice(0, 3).join(", ")} across guided lessons and practice.`,
    "Submit the weekly assessment or project before moving into the capstone phase.",
  ];
}
export function isSectionFree(course: Course, sectionIndex: number) {
  if (course.access === "free") {
    return sectionIndex < Math.min(2, course.modules.length);
  }
  return sectionIndex === 0;
}
export function getCourseSections(
  course: Course,
  userOrPlan: UserPlan | { purchasedCourseIds?: string[]; role?: UserRole } | null | undefined,
): CourseSection[] {
  const viewer =
    typeof userOrPlan === "string"
      ? {
          purchasedCourseIds: userOrPlan === "free" ? [] : [course.id],
          role: "student" as UserRole,
        }
      : userOrPlan;
  const purchased = isCoursePurchased(course, viewer);
  return course.modules.map((module, index) => {
    const free = isSectionFree(course, index);
    const locked = !purchased && !free;
    return {
      id: module.id,
      title: module.title,
      isFree: free,
      isLocked: locked,
      lessons: module.lessons.map((lesson) => ({
        id: lesson.id,
        title: lesson.title,
        description: lesson.description,
        type: "video",
        duration: lesson.duration,
        status: locked ? "locked" : lesson.status,
        videoUrl: `https://www.youtube.com/watch?v=${lesson.videoId}`,
      })),
      tasks: [
        {
          id: `${module.assessment.id}-task`,
          title: module.assessment.title,
          description: module.assessment.description,
          submissionInstructions:
            "Complete the work for this section and submit it through the tutor's preferred review channel when backend submission is connected.",
          submissionLink: "https://wa.me/2340000000000",
          helpVideoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          submissionVideoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
      ],
    };
  });
}
export function canAccessLessonInCourse(
  course: Course,
  lessonId: string,
  userOrPlan: UserPlan | { purchasedCourseIds?: string[]; role?: UserRole } | null | undefined,
) {
  return getCourseSections(course, userOrPlan).some(
    (section) => !section.isLocked && section.lessons.some((lesson) => lesson.id === lessonId),
  );
}
export function getLessonNavigation(
  course: Course,
  lessonId: string,
  userOrPlan: UserPlan | { purchasedCourseIds?: string[]; role?: UserRole } | null | undefined,
) {
  const lessons = getCourseSections(course, userOrPlan)
    .filter((section) => !section.isLocked)
    .flatMap((section) => section.lessons);
  const index = lessons.findIndex((lesson) => lesson.id === lessonId);
  return {
    previous: index > 0 ? lessons[index - 1] : null,
    next: index >= 0 && index < lessons.length - 1 ? lessons[index + 1] : null,
  };
}
export function isCourseCompleted(course: Course) {
  return course.completedLessons >= course.totalLessons;
}
