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
    mysql,
    git,
    nextjs,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    nextStore,
    crud,
    gravador,
    threejs,
    eMobile
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Sobre",
    },
    {
      id: "projetos",
      title: "Projetos",
    },
    {
      id: "contact",
      title: "Contato",
    },
  ];
  
  const services = [
    {
      title: "Desenvolvedor Web e Mobile",
      icon: web,
    }
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
      name: "Next JS",
      icon: nextjs,
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
      name: 'MySQL',
      icon: mysql,
    },
    {
      name: "git",
      icon: git,
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
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Ecommerce",
      description:
        "Uma loja online de produtos eletrônicos, com barra de pesquisa, carrinho e checkout de pagamento.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: nextStore,
      source_code_link: "https://github.com/JVMC42/Ecommerce",
    },
    {
      name: "Crud NextJS",
      description:
        "Um Crud de cadastro completo feito com conexão com banco de dados.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
      ],
      image: crud,
      source_code_link: "https://github.com/JVMC42/Crud-Next.js",
    },
    {
      name: "Gravador Electron",
      description:
        "Um programa pra desktop que grava o audio do microfone.",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "Electron",
          color: "pink-text-gradient",
        },
      ],
      image: gravador,
      source_code_link: "https://github.com/JVMC42/GravadorElectron",
    },
    {
      name: "Mobile Ecommerce",
      description:
        "Um ecommerce mobile de produtos naturais com várias telas e carrinho.",
      tags: [
        {
          name: "React Native",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "Css",
          color: "pink-text-gradient",
        },
      ],
      image: eMobile,
      source_code_link: "https://github.com/JVMC42/produtoresReactNative",
    }
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };