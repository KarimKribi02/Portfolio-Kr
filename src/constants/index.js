import project1 from "../assets/projects/DriveGo.jpeg";
import project2 from "../assets/projects/Ruby.png";
import project5 from "../assets/projects/Kr.png";
import { link } from "motion/react-client";

export const HERO_CONTENT = `Technicien spécialisé en systèmes automatisés et développement Digital, spécialisé en HTML, CSS, JavaScript, REACT JS, ainsi qu'en technologies back-end telles que PHP, LARAVEL et SQL. Je suis curieux, dynamique, enthousiaste et désireux de compléter ma formation et de relever de nouveaux défis. `;

export const ABOUT_TEXT = `
I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.  I have worked with a variety of technologies, including React,MySQL,Laravel,Tailwind, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Product Owner",
    company: "OFPPT",
    description: `le porte-parole des parties prenantes et des utilisateurs finaux. Il définit la vision du produit et veille à ce que l’équipe Scrum travaille sur les fonctionnalités les plus prioritaires.`,
    technologies: ["Tailwind", "React.js", "PHP", "MySQL"],
  },
  {
    year: "2023 - 2024",
    role: "Frontend Developer",
    company: "OFPPT",
    description: `Designed and developed user interfaces for web applications using JavaScript and HTML/CSS.`,
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "Site Web DriveGo",
    image: project1,
    description:
      "Projet DriveGo consiste à développer une plateforme web de location de voitures.",
    technologies: ["PHP", "Tailwind", "React.js", "MySQL",],
    link: "https://grive-go.vercel.app/",
  },
  {
    title: "Site Web Ruby Store",
    image: project2,
    description:
      "Conception et réalisation d’une boutique E-commerce.",
    technologies: ["HTML", "CSS", "JavaScript", " Bootstrap"],
    link: "https://ruby-store-orpin.vercel.app/index.html",  

  },
  {
    title: "Portfolio Website",
    image: project5,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React.js", "Tailwind", "Motion",],
    link: "https://portfolio-kr.vercel.app/",
  },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "Dr lamcalla No 43 Syba Marrakech - 44000",
  phoneNo: "+212 702000215",
  email: "abdelkarimkribi@gmail.com",
};
