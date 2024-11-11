export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    { id: 4, name: 'Experience', href: '#experience' },
    {
      id: 4,
      name: 'Contact',
      href: '#footer',
    },
  ];
  
  // export const clientReviews = [
  //   {
  //     id: 1,
  //     name: 'Emily Johnson',
  //     position: 'Marketing Director at GreenLeaf',
  //     img: 'assets/review1.png',
  //     review:
  //       'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  //   },
  //   {
  //     id: 2,
  //     name: 'Mark Rogers',
  //     position: 'Founder of TechGear Shop',
  //     img: 'assets/review2.png',
  //     review:
  //       'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  //   },
  //   {
  //     id: 3,
  //     name: 'John Dohsas',
  //     position: 'Project Manager at UrbanTech ',
  //     img: 'assets/review3.png',
  //     review:
  //       'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  //   },
  //   {
  //     id: 4,
  //     name: 'Ether Smith',
  //     position: 'CEO of BrightStar Enterprises',
  //     img: 'assets/review4.png',
  //     review:
  //       'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  //   },
  // ];
  
  export const myProjects = [
    {
      title: 'File Share',
      desc: 'FileShare is a web application developed for internal company use to facilitate seamless file uploads and secure sharing. Built with ExpressJS, Angular, and MySQL, the app features user-based authentication and role-based access control, ensuring a secure environment for managing and sharing files within the organization.',
      subdesc:'',
      href: 'https://upload.softizoinfotech.com/login',
      texture: '/textures/project/fileshare.mp4',
      logo: '/assets/fileShareLogo.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'Angular.js',
          path: '/assets/Angular.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Express JS',
          path: '/assets/Express.svg',
        },
      ],
    },
    {
      title: 'Profit Analysis Dashboard',
      desc: 'The Profit Analysis application is a powerful internal tool designed to automate the extraction and analysis of data from Excel files. Built to monitor and report campaign profits in real-time, it provides a user-friendly dashboard that offers insightful visualizations and comprehensive profit tracking. This application enhances decision-making and streamlines the analysis process, empowering teams with clear and actionable data.',
      subdesc:
        '',
      href: 'https://upload.softizoinfotech.com/login',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/Analysis.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'Angular.js',
          path: '/assets/Angular.svg',
        },
        {
          id: 2,
          name: 'Material UI',
          path: 'assets/Mui.svg',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Express JS',
          path: '/assets/Express.svg',
        },
      ],
    },
    {
      title: 'AR Application ',
      desc: 'This Augmented Reality Facial Landmark Application, developed using Python and OpenGL, leverages facial landmark detection to superimpose virtual glasses models onto human faces. By utilizing cutting-edge technologies, we have created a seamless and interactive experience that allows users to visualize how different spectacles look on their own faces.',
      subdesc:
        '',
      href: 'https://github.com/p-chotaliya/AR-App-Python',
      texture: '/textures/project/AR-APP.mp4',
      logo: '/assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'Python',
          path: '/assets/python.png',
        },
      ],
    },
    {
      title: 'E Commerce Website',
      desc: 'As part of my internship with Just Natural Paws, I developed a full-featured e-commerce platform focused on selling premium food products for dogs and cats. This project aimed to provide pet owners with a seamless and enjoyable online shopping experience while ensuring high performance and scalability for the business.',
      subdesc: 'Leveraging React and Tailwind CSS, I crafted a modern, responsive user interface that offers a smooth user experience across devices. I integrated Stripe to facilitate secure, efficient payment processing, enhancing trust and convenience for customers. To support backend operations, I implemented Firebase Cloud Functions, improving the sites performance and scalability. The deployment process was streamlined through CI/CD pipelines, ensuring continuous integration and reliable updates for a smooth user experience.',
      href: 'https://www.justnaturalpaws.org/',
      texture: '/textures/project/Ecommerce.mp4',
      logo: '/assets/Ecommerce.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Node JS',
          path: '/assets/Nodejs.svg',
        },
        {
          id: 5,
          name: 'Notion ',
          path: '/assets/notion.svg',
        },
      ],
    },
   
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Arolytics',
      pos: 'Full Stack Software Developer',
      duration: '2023 - 2024',
      title: "I contributed to building a methane emissions analysis platform, focusing on user-centric interfaces with React, Redux, styled-components, HTML, CSS, and TailwindCSS. I utilized GIS and visualization tools like React Charts, Mapbox API, and Deck GL for insightful visualizations. On the backend, I developed automation scripts and RESTful APIs using Python, Node.js, and Java, optimizing performance. I also designed efficient NoSQL schemas in MongoDB, improving query performance for large datasets.",
      icon: '/assets/Arolytics.png',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'DigiMaze',
      pos: 'Full Stack Software Developer',
      duration: '2022- 2023',
      title: "At DigiMaze, I helped develop a review referral system to enhance user engagement. I built a dynamic UI with Next.js, React Redux for state management, and MongoDB for data storage. I collaborated with the design team to convert Figma prototypes into responsive React components. On the backend, I developed REST APIs with Java Spring Boot, Node.js microservices with Express.js, and Python Flask. I also integrated GraphQL APIs using Apollo to optimize system performance and scalability.",
      icon: '/assets/Digimaze.png',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Infosys',
      pos: 'Senior Systems Engineer',
      duration: '2020 - 2022',
      title: "At Infosys, I developed RESTful APIs with Spring Boot and Oracle database integration using Spring Data JPA, optimizing performance with Oracle Essbase. I managed Angular and React web applications with TypeScript, HTML, CSS, and JavaScript, and maintained Java EE applications using JSP, Servlets, and JDBC. I automated web data extraction with Python and Selenium, improving efficiency. I also streamlined Jenkins CI/CD pipelines, reducing deployment time by 50%, and supported data migration using Informatica MDM and Data Quality ETL for enhanced data accuracy.",
      icon: '/assets/Infosys.png',
      animation: 'salute',
    },
  ];