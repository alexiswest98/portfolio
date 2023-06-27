import {
    css,
    figma,
    html, 
    javascript, 
    nodejs, 
    postgresql, 
    python, 
    reactjs, 
    redux, 
    sequelize,
    tailwind, 
    threejs, 
    typescript, 
    personalpic,
    remtheleche,
    westbnb,
    lexflix,
    SQLite,
    Git
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  
  const technologies = [
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
      name: "Redux",
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
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "Sequelize",
      icon: sequelize,
    },
    ,
    {
      name: "SQLite",
      icon: SQLite,
    },
    {
      name: "Git",
      icon: Git,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
  ];

  
  const about = [
    {
      description:
        "After graduating from San Francisco State University, I decided that I wanted to dive deeper into software engineering, which was something I was always passionate about ever since I was young and would modify the HTML on my old Tumblr blog. I decided to take Harvard CS50's course to get some more experience with different coding languages and learn more about DSA. I still remember the first lines of code I wrote and the silly Spongebob-themed game I made on Scratch which inspired me to learn how to create or develop whatever my mind imagined. Since then, I have completed App Academy's 24-week software engineering program. I learned a variety of languages and technologies (JavaScript, Python, Flask, SQLAlchemy, PostgreSQL, SQLite, Express, Sequelize, React, Redux, HTML, CSS, Node.js, Git, Heroku, Render, Figma, NPM, JWT, Gunicorn, Pair programming, Axios, Playwright, AWS ) and developed three full-stack websites, including one in a team environment. Most importantly, the experience has taught me how to learn new languages quickly and efficiently through reading documentation, agile workflow, and maintaining a positive outlook.",
      lookingFor: "Frontend Developer, Full Stack Developer",
      currentlyLearning: "Three.js, TypeScript, Blender",
      image: personalpic
    }
  ];
  
  const projects = [
    {
      name: "LEXFLIX",
      description:
        "Full stack clone of Netflix. Create, Read, Update, and Delete profiles, movie and tv show reviews, and your 'My List'.",
      tags: [
        {
          name: "React/Redux",
          color: "blue-text-gradient",
        },
        {
          name: "Flask/SQLAlchemy",
          color: "green-text-gradient",
        },
        {
          name: "Render/PostgreSQL",
          color: "pink-text-gradient",
        },
      ],
      image: lexflix,
      source_code_link: "https://lexflix.onrender.com/",
      github_link: "https://github.com/alexiswest98/LEXFLIX"
    },
    {
      name: "Remember the Leche",
      description:
        "A full stack task management website inspired by Remember the Milk. Full CRUD on tasks, lists, groups. Follow and Unfollow friends.",
      tags: [
        {
          name: "React/Redux",
          color: "blue-text-gradient",
        },
        {
          name: "Flask/SQLAlchemy",
          color: "green-text-gradient",
        },
        {
          name: "Render/PostgreSQL",
          color: "pink-text-gradient",
        },
      ],
      image: remtheleche,
      source_code_link: "https://remember-the-leche.onrender.com/",
      github_link: "https://github.com/alexiswest98/rem-the-milk"
    },
    {
      name: "Westbnb",
      description:
        "A full stack clone of Airbnb. Full CRUD on listings, reviews, and bookings. Search listings by locations available.",
      tags: [
        {
          name: "React/Redux",
          color: "blue-text-gradient",
        },
        {
          name: "Express.js/Sequelize",
          color: "green-text-gradient",
        },
        {
          name: "Heroku/PostgreSQL",
          color: "pink-text-gradient",
        },
      ],
      image: westbnb,
      source_code_link: "https://westbnb.herokuapp.com/",
      github_link: "https://github.com/alexiswest98/API-Project-Westbnb"
    },
  ];
  
  export { technologies, about, projects };
