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
    category: "Frontend"
  },
  {
    id: 2,
    name: "JavaScript",
    level: 85,
    category: "Frontend"
  },
  {
    id: 3,
    name: "Tailwind CSS",
    level: 88,
    category: "Frontend"
  },
  {
    id: 4,
    name: "Node.js",
    level: 75,
    category: "Backend"
  },
  {
    id: 5,
    name: "Firebase",
    level: 80,
    category: "Backend"
  },
  {
    id: 6,
    name: "MongoDB",
    level: 70,
    category: "Backend"
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
