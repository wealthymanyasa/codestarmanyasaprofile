import project1 from "../assets/images/careers.png";
import project2 from "../assets/images/angular-shop.png";
import project3 from "../assets/images/responsive.png";
import project4 from "../assets/images/landing-page.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/prime-health.png";
import standup1 from "../assets/images/standup1.png";
import project7 from "../assets/images/CodeCrew.png";

export const initialProjects = [
  {
    id: 1,
    img: standup1,
    name: "Nextjs Video Conferencing WebApp",
    github_link: "https://github.com/wealthymanyasa/standup-video-conferencing.git",
    live_link: "https://standup-video-conferencing-nextjs.vercel.app/",
    tech: ["Next.js", "WebRTC", "Tailwind"]
  },
  {
    id: 2,
    img: project1,
    name: "Nike Store",
    github_link: "https://github.com/wealthymanyasa/nike-landing-react-tailwind",
    live_link: "https://nike-landing-page-react-tailwind.vercel.app/",
    tech: ["React", "Tailwind CSS", "JavaScript"]
  },
  {
    id: 3,
    img: project7,
    name: "CodeCrew React Engineering Website UI",
    github_link: "https://github.com/wealthymanyasa/codecrew",
    live_link: "https://codecrew-six.vercel.app/",
    tech: ["React", "Tailwind CSS", "JavaScript"]
  },
  {
    id: 4,
    img: project2,
    name: "Angular Shopping Cart",
    github_link: "https://github.com/wealthymanyasa/angular-cart",
    live_link: "https://angular-cart-82b4a.web.app/",
    tech: ["Angular", "Firebase", "TypeScript"]
  },
  {
    id: 5,
    img: project3,
    name: "Single Page Responsive",
    github_link: "https://github.com/wealthymanyasa/manyasaprofile",
    live_link: "https://manyasaprofile-c3597.web.app/",
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 6,
    img: project4,
    name: "Tailwind landing page",
    github_link: "https://github.com/wealthymanyasa/landingpage-tailwind",
    live_link: "https://wealthymanyasa.github.io/landingpage-tailwind/",
    tech: ["Tailwind", "HTML", "JavaScript"]
  },
  {
    id: 7,
    img: project5,
    name: "Cloud App React Tailwind",
    github_link: "https://github.com/wealthymanyasa/cloud-app-tailwind-react",
    live_link: "https://cloud-app-tailwind-react.vercel.app",
    tech: ["React", "Tailwind", "JavaScript"]
  },
  {
    id: 8,
    img: project6,
    name: "Prime-Health React Tailwind",
    github_link: "https://github.com/wealthymanyasa/prime-health-responsive-landing-page",
    live_link: "https://prime-health-tailwind.web.app/",
    tech: ["React", "Tailwind", "Firebase"]
  }
];

export const initialSkills = [
  {
    id: 1,
    name: "React",
    level: 90,
    category: "Frontend",
    icon: "⚛️",
    color: "from-cyan-400 to-blue-500"
  },
  {
    id: 2,
    name: "JavaScript",
    level: 85,
    category: "Frontend",
    icon: "JS",
    color: "from-yellow-400 to-orange-500"
  },
  {
    id: 3,
    name: "TypeScript",
    level: 80,
    category: "Frontend",
    icon: "TS",
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: 4,
    name: "Python",
    level: 75,
    category: "Machine Learning",
    icon: "🐍",
    color: "from-green-500 to-emerald-600"
  },
  {
    id: 5,
    name: "Node.js",
    level: 75,
    category: "Backend",
    icon: "Node",
    color: "from-green-600 to-lime-500"
  },
  {
    id: 6,
    name: "MongoDB",
    level: 70,
    category: "Database",
    icon: "🍃",
    color: "from-green-500 to-emerald-700"
  },
  {
    id: 7,
    name: "PostgreSQL",
    level: 65,
    category: "Database",
    icon: "🐘",
    color: "from-blue-600 to-indigo-700"
  },
  {
    id: 8,
    name: "Docker",
    level: 60,
    category: "DevOps",
    icon: "🐳",
    color: "from-blue-400 to-cyan-500"
  },
  {
    id: 9,
    name: "Kubernetes",
    level: 55,
    category: "DevOps",
    icon: "☸️",
    color: "from-blue-500 to-blue-700"
  },
  {
    id: 10,
    name: "AWS",
    level: 55,
    category: "Cloud",
    icon: "☁️",
    color: "from-orange-500 to-yellow-600"
  },
  {
    id: 11,
    name: "Git",
    level: 85,
    category: "Tools",
    icon: "Git",
    color: "from-red-500 to-orange-600"
  },
  {
    id: 12,
    name: "TensorFlow",
    level: 70,
    category: "Machine Learning",
    icon: "TF",
    color: "from-orange-500 to-red-600"
  },
  {
    id: 13,
    name: "PyTorch",
    level: 65,
    category: "Machine Learning",
    icon: "🔥",
    color: "from-orange-600 to-red-700"
  },
  {
    id: 14,
    name: "Scikit-learn",
    level: 75,
    category: "Machine Learning",
    icon: "SK",
    color: "from-blue-500 to-cyan-600"
  },
  {
    id: 15,
    name: "NLTK",
    level: 60,
    category: "Natural Language Processing",
    icon: "📝",
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 16,
    name: "spaCy",
    level: 65,
    category: "Natural Language Processing",
    icon: "🧠",
    color: "from-indigo-500 to-purple-600"
  },
  {
    id: 17,
    name: "Transformers",
    level: 70,
    category: "Natural Language Processing",
    icon: "🤖",
    color: "from-purple-600 to-blue-600"
  },
  {
    id: 18,
    name: "FastAPI",
    level: 70,
    category: "Backend",
    icon: "⚡",
    color: "from-teal-500 to-green-600"
  },
  {
    id: 19,
    name: "Redis",
    level: 60,
    category: "Database",
    icon: "🔴",
    color: "from-red-600 to-red-800"
  },
  {
    id: 20,
    name: "GraphQL",
    level: 65,
    category: "Backend",
    icon: "◈",
    color: "from-pink-500 to-purple-600"
  },
  {
    id: 21,
    name: "Vue.js",
    level: 70,
    category: "Frontend",
    icon: "V",
    color: "from-green-500 to-emerald-600"
  },
  {
    id: 22,
    name: "Angular",
    level: 65,
    category: "Frontend",
    icon: "▲",
    color: "from-red-500 to-red-700"
  },
  {
    id: 23,
    name: "Next.js",
    level: 70,
    category: "Frontend",
    icon: "▲",
    color: "from-gray-800 to-black"
  },
  {
    id: 24,
    name: "Jenkins",
    level: 50,
    category: "DevOps",
    icon: "🔧",
    color: "from-gray-600 to-gray-800"
  },
  {
    id: 25,
    name: "Linux",
    level: 70,
    category: "Tools",
    icon: "🐧",
    color: "from-yellow-600 to-orange-700"
  },
  {
    id: 26,
    name: "Numpy",
    level: 80,
    category: "Machine Learning",
    icon: "NP",
    color: "from-blue-600 to-indigo-700"
  },
  {
    id: 27,
    name: "Pandas",
    level: 75,
    category: "Machine Learning",
    icon: "PD",
    color: "from-blue-500 to-cyan-600"
  },
  {
    id: 28,
    name: "Jupyter",
    level: 85,
    category: "Tools",
    icon: "📓",
    color: "from-orange-500 to-yellow-600"
  }
];

export const initialHero = {
  title: "Hi, I'm Obert Manyasa",
  subtitle: "Full Stack Developer",
  description: "Passionate about creating amazing web experiences with modern technologies",
  ctaText: "Get In Touch",
  ctaLink: "#contact"
};

export const initialAbout = {
  title: "About Me",
  description: "I'm a passionate full-stack developer with expertise in modern web technologies. I love creating intuitive and performant applications that solve real-world problems.",
  experience: "3+ Years",
  projects: "50+ Projects",
  clients: "30+ Happy Clients"
};
