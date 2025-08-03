import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  flutter,
  meta,
  starbucks,
  ecommex,
  ecommexproj,
  ecomMobile,
  easyrent,
  hotelreserve,
  whatsappTrack,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Ecommex.one",
    icon: ecommex,
    iconBg: "#383E56",
    date: "December 2024 - July 2025",
     points : [
  "Developed and maintained web applications using Php, Node.js, and related technologies.",
  "Collaborated with cross-functional teams including designers, product managers, and developers to deliver high-quality products.",
  "Implemented responsive designs ensuring cross-browser compatibility.",
  "Participated in code reviews and provided constructive feedback.",
  "Led the development of three major mobile applications for the company, contributing to both frontend and backend components.",
]

  },
  
  
  
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Ecommex.one",
    description: "Worked as Fullstack Developer in this Project for 7 months",
    tags: [
      { name: "Php", color: "blue-text-gradient" },
      { name: "Node", color: "green-text-gradient" },
      { name: "Express", color: "pink-text-gradient" },
      { name: "Prisma", color: "blue-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "Html", color: "pink-text-gradient" },
      { name: "css", color: "blue-text-gradient" },
      { name: "Javascript", color: "green-text-gradient" },
    ],
    image: ecommexproj,
    source_code_link: "https://ecommex.one/user/view/index-en.php",
  },
  {
    name: "Ecommex Mobile App",
    description: "Mobile Application To Manage Ecommex Admin Dashboard. Worked As The Main Developer for this project",
    tags: [
      { name: "Flutter", color: "blue-text-gradient" },
      { name: "Socket.io", color: "green-text-gradient" },
      { name: "Firebase", color: "pink-text-gradient" },
    ],
    image: ecomMobile,
    source_code_link: "https://ecommex.one/user/view/index-si.php",
  },
  {
    name: "WhatsApp Monitor",
    description: "Application for Monitoring Whatsapp Contacts and fetching data from labels, categorized by saved or unsaved manner",
    tags: [
      { name: "Flutter", color: "blue-text-gradient" },
      { name: "Firebase", color: "green-text-gradient" },
    ],
    image:whatsappTrack,
    source_code_link: "https://github.com/Chanuka-Dushan/WhatsApp-Number-Tracker",
  },
  {
    name: "Hotel Reservation System For Weddings",
    description: "A modern Event management Website for wedding events.",
    tags: [
      { name: "Html", color: "blue-text-gradient" },
      { name: "Css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
      { name: "Jwt Auth", color: "blue-text-gradient" },
      { name: "Mysql", color: "green-text-gradient" },
    ],
    image:hotelreserve,
    source_code_link: "https://github.com/Chanuka-Dushan/Hotel-Reservation-Sytem-for-Weddings",
  },
  {
    name: "Easy Rent",
    description: "A weather forecasting app with beautiful visualizations and location-based alerts.",
    tags: [
      { name: "Mongo DB", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Vite", color: "pink-text-gradient" },
      { name: "Tailwind CSS", color: "blue-text-gradient" },
      { name: "Node js", color: "green-text-gradient" },
      { name: "Express", color: "pink-text-gradient" },
    ],
    image:easyrent,
    source_code_link: "https://github.com/Chanuka-Dushan/EasyRent",
  },
];


export { services, technologies, experiences, projects };
