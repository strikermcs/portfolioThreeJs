import {
    mobile,
    backend,
    creator,
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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    githubLink,
    telegram,
    linkedIn,
    csharp,
    posgres,
    firebase,
    vue,
    Shevcuk,
    Incognito,
    Fayna,
    Quazzaro,
    Geld,
    Portfolio2,
    luxtraider,
    aerospace
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
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "WordPress Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
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
      name: "Vue JS",
      icon: vue,
    },
    {
      name: "C Sharp",
      icon: csharp,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
    {
      name: "Posgess SQL",
      icon: posgres,
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
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
      'Благодарна Павлу за выполненные задачи. Задания нужно было выполнить срочно, а Павел оперативно всё выполнил и проконсультировал. Также, я просила внести некоторые корректировки, всё было сделано на отлично. Спасибо за сотрудничество 🙂',
      name: "Надежда Шевчук",
      designation: "",
      company: "",
      image: Shevcuk,
    },
    {
      testimonial:
        "Швидко виконана робота! Фрілансер відповідав на всі заданні питання (також швидко)! Якісно виконана робота. Враження від роботи прекрасні!)",
      name: "Валентин Федьо",
      designation: "",
      company: "",
      image: Incognito,
    },
    {
      testimonial:
        "Павел помог в кротчайшие сроки провести исследовательскую работу по возможной адаптации сайта к варианту с поддержкой масштабируемости.",
      name: "Петр Иванов",
      designation: "",
      company: "",
      image: Incognito,
    },
  ];
  
  const projects = [
    {
      name: "Fayna",
      description:
        "The social network. Is a platform that supports various communication features such as chats, groups, channels, photo sharing, audio and video messaging. It also allows users to react to messages with emojis or other symbols. In addition, this platform provides audio and video call features that allow users to have real-time conversations with each other.",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "ASP.NET Core",
          color: "green-text-gradient",
        },
        {
          name: "Entity Framework",
          color: "pink-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "text-amber-600",
        },
        {
          name: "Vue 3",
          color: "text-purple-500",
        },
        {
          name: "Quasar Framework",
          color: "text-lime-400",
        },
        {
          name: "Pinia",
          color: "text-stone-400",
        },
      ],
      image: Fayna,
      source_code_link: "https://github.com/orgs/Fayna-Social-Network/repositories",
    },
    {
      name: "Quizzaro",
      description:
        "With this service, users can create custom quizzes and surveys using a variety of question formats, such as multiple-choice, true/false, and open-ended questions. After creating a quiz or survey, users can share it with others by sending a link. Once respondents complete the quiz or survey, the service provides the user with detailed results and statistics, including response rates, answer frequencies.",
      tags: [
        {
          name: "Vue 3",
          color: "blue-text-gradient",
        },
        {
          name: "Element Plus",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
        {
          name: "Pinia",
          color: "text-amber-600",
        },
      ],
      image: Quazzaro,
      source_code_link: "https://github.com/strikermcs/Quizzaro",
      demo_link: "https://quizzaro-beryl.vercel.app/"
    },
    {
      name: "Geld",
      description:
        "The CRM system designed for expense tracking and created to gain experience with Vue is a web-based software application that helps users keep track of their expenses.",
      tags: [
        {
          name: "Vue 3",
          color: "blue-text-gradient",
        },
        {
          name: "Pinia",
          color: "green-text-gradient",
        },
        {
          name: "Wave UI",
          color: "pink-text-gradient",
        },
        {
          name: "Firebase",
          color: "text-amber-600",
        },
      ],
      image: Geld,
      source_code_link: "https://github.com/strikermcs/Geld",
      demo_link: "https://geld.vercel.app/"
    },
    {
      name: "My old Portfolio",
      description:
        "My old portfolio was built using React and pure CSS and HTML.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
       
      ],
      image: Portfolio2,
      source_code_link: "https://github.com/strikermcs/portfolio",
      demo_link: "https://earnest-cucurucho-1c0afd.netlify.app/"
    },
    {
      name: "Aerospace",
      description:
        "The portfolio website was created to gain and solidify experience in web development.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
       
      ],
      image: aerospace,
      source_code_link: "https://github.com/strikermcs/Aerospace",
      demo_link: "http://strikermcs.github.io/Aerospace/"
    },
    {
      name: "Luxtrader",
      description:
        "The website was created to gain and solidify experience in web development.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "SCSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "Gulp",
          color: "text-amber-600",
        },
      ],
      image: luxtraider,
      source_code_link: "https://github.com/strikermcs/Luxtrader",
      demo_link: "http://strikermcs.github.io/Luxtrader/"
    },
  ];

  const socialLinks = [
    {
      icon: telegram, 
      link: 'https://t.me/strikermcs'
    },

    {
      icon: linkedIn,
      link: 'https://www.linkedin.com/in/strikermcs/'
    },

    {
      icon: githubLink,
      link: 'https://github.com/strikermcs'
    }
  ]
  
  export { services, technologies, experiences, testimonials, projects, socialLinks };