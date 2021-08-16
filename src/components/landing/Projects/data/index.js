import React from "react";
import { FaLink, FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    name: "Lucky Guy Brewing",
    description:
      "E-Commerce website built for Lucky Guy Brewing to showcase their beer and provide customers with a way to order online. Built with Gatsby and Contentful CMS to manage content",
    stack: ["Gatsby", "Contentful", "Snipcart", "FormSpree"],
    links: [
      {
        id: 1,
        link: "https://luckyguybrewing.xyz/",
        icon: <FaLink />,
      },
      {
        id: 2,
        link: "https://github.com/charley81/lucky-guy-brewing",
        icon: <FaGithub />,
      },
    ],
  },
  {
    id: 2,
    name: "SoundBoss",
    description:
      "Website for SoundBoss studios to display their contact info as well as provide clients information about SoundBoss studio rooms and equipment. Built with Gatsby and Contentful CMS to manage content",
    stack: ["Gatsby", "Contentful", "FormSpree"],
    links: [
      {
        id: 1,
        link: "https://soundboss.xyz/",
        icon: <FaLink />,
      },
      {
        id: 2,
        link: "https://github.com/charley81/soundboss",
        icon: <FaGithub />,
      },
    ],
  },
  {
    id: 3,
    name: "The Great Dev Co.",
    description:
      "Site built for The Great Dev Co. (TGDC) This is a super minimalist but very effective website that displays TGDC’s work and provides a form for clients to contact. Built with Gatsby and Agility CMS to manage content",
    stack: ["Gatsby", "Agility CMS", "FormSpree"],
    links: [
      {
        id: 1,
        link: "https://thegreatdevco.com/",
        icon: <FaLink />,
      },
      {
        id: 2,
        link: "https://github.com/charley81/the-great-dev-co",
        icon: <FaGithub />,
      },
    ],
  },
  {
    id: 4,
    name: "Weekly Buzz",
    description:
      " Weekly Buzz is a blogging platform used to review cannabis strains. This site contains weekly reviews, an about page and a contact form for users to stay in touch. Built with Gatsby and Contentful CMS for content management",
    stack: ["Gatsby", "Contentful"],
    links: [
      {
        id: 1,
        link: "https://theweeklybuzz.xyz/",
        icon: <FaLink />,
      },
      {
        id: 2,
        link: "https://github.com/charley81/weekly-buzz",
        icon: <FaGithub />,
      },
    ],
  },
  {
    id: 5,
    name: "Portfolio_V3",
    description:
      "A modern stylish portfolio website built by you’s truly to showcase my work, provide information about myself and a way for anyone to contact me. Built with Gatsby and Strapi CMS to manage content",
    stack: ["Gatsby", "Strapi", "Netlify Forms"],
    links: [
      {
        id: 1,
        link: "https://charley81.com/",
        icon: <FaLink />,
      },
      {
        id: 2,
        link: "https://github.com/charley81/portfolio_v3",
        icon: <FaGithub />,
      },
    ],
  },
];

export default projects;
