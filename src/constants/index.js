import project1 from "../assets/projects/DriveGo.jpeg";
import project2 from "../assets/projects/Ruby.png";
import project3 from "../assets/projects/AgroConnect.png";
import project4 from "../assets/projects/TrainHub..png";
import { link } from "motion/react-client";

export const HERO_CONTENT = `Technicien spécialisé en systèmes automatisés et développement Digital, spécialisé en HTML, CSS, JavaScript, REACT JS, ainsi qu'en technologies back-end telles que PHP, LARAVEL et SQL. Je suis curieux, dynamique, enthousiaste et désireux de compléter ma formation et de relever de nouveaux défis. `;

export const ABOUT_TEXT = `
Je suis un développeur full stack dévoué et polyvalent, passionné par la création d'applications Web efficaces et conviviales. J'ai travaillé avec une variété de technologies, notamment React, MySQL, Laravel, Tailwind et MongoDB. Mon parcours dans le développement Web a commencé par une profonde curiosité pour le fonctionnement des choses, et il a évolué vers une carrière où je m'efforce continuellement d'apprendre et de m'adapter à de nouveaux défis. Je m'épanouis dans des environnements collaboratifs et j'aime résoudre des problèmes complexes pour fournir des solutions de haute qualité. En dehors du codage, j'aime rester actif, explorer de nouvelles technologies et contribuer à des projets open source.`;

export const EXPERIENCES = [
  {
    year: "2024 - 2025",
    role: "Chef de projet & Développeur Full Stack",
    company: "Projet AgroConnect",
    description: `Gestion et pilotage du développement d’une plateforme numérique reliant directement les producteurs agricoles aux consommateurs finaux. Supervision de toutes les phases du projet, de la planification au déploiement, en assurant le respect des délais et des besoins des utilisateurs.`,
    technologies: ["Laravel Blade", "Laravel", "MySQL", "Tailwind CSS"]
  },
  {
    year: "2024 - 2025",
    role: "Lead Développeur Frontend",
    company: "Projet TrainHub - OFPPT",
    description: `Encadrement de l’équipe frontend pour la conception et le développement d’une plateforme digitale dédiée à la gestion des formations des formateurs de l’OFPPT. Collaboration étroite avec les développeurs backend et les designers UI/UX pour assurer une intégration fluide et une expérience utilisateur optimale.`,
    technologies: ["React.js", "Tailwind CSS", "Laravel", "MySQL"]
  },
  {
    year: "2024 - 2025",
    role: "Product Owner",
    company: "OFPPT",
    description: `Représentant des parties prenantes et des utilisateurs finaux. Définit la vision du produit et veille à ce que l’équipe Scrum se concentre sur les fonctionnalités les plus prioritaires.`,
    technologies: ["Tailwind", "React.js", "PHP", "MySQL"]
  },
  {
    year: "2023 - 2024",
    role: "Développeur Frontend",
    company: "OFPPT",
    description: `Conception et développement des interfaces utilisateur pour des applications web en utilisant JavaScript et HTML/CSS.`,
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"]
  }
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
  title: "Site Web AgroConnect",
  image: project3,
  description:
    "Conception et développement d’une plateforme numérique reliant les producteurs agricoles aux consommateurs finaux.",
  technologies: ["Laravel Blade", "Laravel", "MySQL", "Tailwind CSS"],
  link: "https://ton-lien-vers-le-projet.com"
},
 {
  title: "Site Web TrainHub",
  image: project4,
  description:
    "Conception et développement d’une plateforme digitale dédiée à la gestion des formations des formateurs de l’OFPPT.",
  technologies: ["React.js", "Laravel", "MySQL", "Tailwind CSS"],
  link: "https://ton-lien-vers-le-projet.com"
}
];

export const CONTACT = {
  address: "Dr lamcalla No 43 Syba Marrakech - 44000",
  phoneNo: "+212 702000215",
  email: "abdelkarimkribi@gmail.com",
};
