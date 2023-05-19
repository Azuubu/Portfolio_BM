import {
  web,
  designer,
  frontend,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  mongodb,
  nodejs,
  git,
  WordlieImage,
  BlazinImage,
  ComfyImage,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Web Designer',
    icon: designer,
  },
];

const technologies = [
  {
    name: 'HTML',
    icon: html,
  },
  {
    name: 'CSS',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'ReactJS',
    icon: reactjs,
  },
  {
    name: 'Redux',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'NodeJS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'git',
    icon: git,
  },
];

const experiences = [
  {
    title: 'Web Developer',
    date: 'September 2021 - April 2022',
    points: [
      'Developing web applications using Javascript and other related technologies.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
    ],
  },

  {
    title: 'ReactJS Developer',
    date: 'May 2022 - Present',
    points: [
      'Developing user interfaces and web apps using mainly React.js and other useful libraries.',
      'Integrating user interfaces with backend logic to ensure smooth user experience throughout web apps as well as ecommerce websites.',
    ],
  },
];

const projects = [
  {
    name: 'Wordlie',
    description:
      'Web-based wordle-like game that challenges users to uncover a five-letter word within a limited number of attempts. The game is designed to be challenging but not overly difficult, providing an enjoyable and engaging experience for players of all age. The logic is made mainly in ReactJS, whereas the styling is taken care of with styled components library.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mui_material',
        color: 'pink-text-gradient',
      },
      {
        name: 'styled_components',
        color: 'pink-text-gradient',
      },
    ],
    image: WordlieImage,
    source_code_link: 'https://github.com/Azuubu/Wordlie-React-Game',
    live_website_link: 'https://wordlie.netlify.app',
  },
  {
    name: 'Blazin Shoes',
    description:
      'E-Commerce platfrom that enables users to browse, select and purchase a wide range of footwear products conveniently from the comfort of their own homes. It is a single-page application integrated with an external API and Sanity, a headless content management system, which allows for an easy control over your products and shop contents. The app also uses Stripe to take care of the payments and shipment details.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
      {
        name: 'sanity',
        color: 'green-text-gradient',
      },
      {
        name: 'stripe',
        color: 'green-text-gradient',
      },
      {
        name: 'api',
        color: 'green-text-gradient',
      },
    ],
    image: BlazinImage,
    source_code_link: 'https://github.com/Azuubu/ECommerce-BlazinShoes',
    live_website_link: 'https://e-com-blazin-shoes.vercel.app',
  },
  {
    name: 'Comfy Shop',
    description:
      'E-Commerce online shop with a wide variety of furniture to choose from. The app is a multi-page application and is made mainly with Javascript and Scss. The app is also integrated with an external API. The whole idea behind this app was to establish a web app, with somewhat complex structure for a vanilla javascript only project.',
    tags: [
      {
        name: 'javascript',
        color: 'blue-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
      {
        name: 'api',
        color: 'green-text-gradient',
      },
    ],
    image: ComfyImage,
    source_code_link: 'https://github.com/Azuubu/ECommerce-Shop',
    live_website_link: 'https://brandcomfyshop.netlify.app',
  },
];

export { services, technologies, experiences, projects };
