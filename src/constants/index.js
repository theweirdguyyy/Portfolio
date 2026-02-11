export const myProjects = [
  {
    id: 1,
    title: "Flynest",
    description:
      " Flynest is a comprehensive, full-stack travel booking ecosystem designed to provide a seamless one-stop-shop experience for modern travelers. The platform integrates four distinct service sectors—Tours, Hotels, Restaurants, and Transports—into a unified digital marketplace.",
    subDescription: [
      "Architected a full-stack MERN platform, managing dynamic data for over 50+ unique travel listings via a custom REST API. ",
      "Optimized data retrieval by designing Mongoose schemas that reduced API response payloads by 20% through custom data transformations.",
      "Engineered a responsive React frontend using Context API, reducing state-management complexity for a multi-step booking flow. ",
    ],
    href: "https://flynest-rust.vercel.app/",
    github: "https://github.com/theweirdguyyy/Flynest",
    logo: "",
    image: "/assets/projects/Flynest.jpg",
    tags: [
      {
        id: 1,
        name: "ReactJs",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Javascript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 3,
        name: "NodeJs",
        path: "/assets/logos/nodejs.png",
      },
      {
        id: 4,
        name: "MongoDB",
        path: "/assets/logos/mongodb.png",
      },
    ],
  },
  {
    id: 2,
    title: "DevEvent",
    description:
      "Developed a high-performance event platform designed to seamlessly showcase and manage professional gatherings, featuring dynamic event listings, detailed registration pages, and automated similar event suggestions.",
    subDescription: [
      "Implemented full CRUD functionality via Next.js API routes, integrated Cloudinary for optimized cloud-based media management, and utilized PostHog to track real-time user engagement and behavioral analytics.",
      "Engineered using Next.js 15 (utilizing advanced caching strategies) and TypeScript, ensuring a type-safe environment with lightning-fast page loads and superior SEO performance.",
      "Architected a scalable data model using MongoDB and Mongoose for flexible content storage, while crafting a fully responsive, modern UI using Tailwind CSS.",
      "Utilized Warp and CodeRabbit AI to streamline the development lifecycle, ensuring clean code architecture and efficient version control practices.",
    ],
    href: "https://dev-events-six-theta.vercel.app/",
    github: "https://github.com/theweirdguyyy/DevEvents",
    logo: "",
    image: "/assets/projects/devevents.jpg",
    tags: [
      {
        id: 1,
        name: "NextJs",
        path: "/assets/logos/nextjss.png",
      },
      {
        id: 2,
        name: "Typescript",
        path: "/assets/logos/typescript.png",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/logos/mongodb.png",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description:
      "A modern, animated 3D developer portfolio built with React, Three.js, TailwindCSS, and motion effects",
    subDescription: [
      "Developed this portfolio to showcase my skills creatively.",
      "3D visuals powered by React Three Fiber and Drei. Smooth transitions and scroll-based animations using Framer Motion. Clean, responsive UI with TailwindCSS. ",
      "Working contact form using EmailJS. ",
      
    ],
    href: "",
    logo: "",
    image: "/assets/projects/portfolio.jpg",
    tags: [
      {
        id: 1,
        name: "ReactJs",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Vite",
        path: "/assets/logos/vitejs.svg",
      },
      {
        id: 3,
        name: "FramerMotion",
        path: "/assets/logos/motion.png",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Elite Eats",
    description:
      "Full-Stack Frontend Food Delivery Landing Page. A high-performance, responsive landing page using React.js and Vite, featuring a modern UI/UX for food delivery service.",
    subDescription: [
      "Implemented a custom Dark Mode/Light Mode toggle using Tailwind CSS and React Hooks (useState, useEffect) with local storage persistence.",
      "Utilized Tailwind CSS for rapid, utility-first styling, ensuring a mobile-first responsive design across all device breakpoints.",
      "By leveraging the Spread Operator for efficient prop management and integrating React-Slick for interactive UI elements, the application maintains clean, industry-standard code.",
      "Integrated React-Slick for dynamic, touch-responsive testimonial carousels and React-Icons for an intuitive visual interface.",
    ],
    href: "https://elite-eats-24ji.vercel.app/",
    github: "https://github.com/theweirdguyyy/EliteEats",
    logo: "",
    image: "/assets/projects/eliteeats.jpg",
    tags: [
      {
        id: 1,
        name: "ReactJs",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Vite",
        path: "/assets/logos/vitejs.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 4,
        name: "Javascript",
        path: "/assets/logos/javascript.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Sports Station",
    description:
      "A full-stack e-commerce web application for sports apparel, particularly focusing on jerseys",
    subDescription: [
      "An e-commerce platform built with React.js for the front-end and Node.js/Express for the backend. Spearheaded the development of a Node.js/MySQL backend capable of handling secure user authentication and real-time order processing.",
      "Engineered a secure checkout flow that processes real-time orders, handling concurrent user sessions with Node.js/Express",
      "The application includes features like user authentication, product management, shopping cart functionality, and payment processing.",
      
    ],
    href: "https://github.com/theweirdguyyy/Sport-Station",
    github: "https://github.com/theweirdguyyy/Sport-Station",
    logo: "",
    image: "/assets/projects/sportsstation.jpg",
    tags: [
      {
        id: 1,
        name: "ReactJs",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "NodeJs",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 3,
        name: "Express",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 4,
        name: "MySQL",
        path: "/assets/logos/javascript.svg",
      },
    ],
  },
  {
    id: 6,
    title: "MovieLand",
    description:
      "A web application that allows users to search for movies. Build using ReactJs, JavaScript, CSS, HTML and data fetched with OMDb API. ",
    subDescription: [
      "Implemented asynchronous data fetching using the OMDb API, achieving sub-second load times for movie search queries.",
      "Crafted a modular UI with React Hooks (useState, useEffect), improving code reusability.",
    ],
    href: "https://movieland-rust.vercel.app/",
    github: "https://github.com/theweirdguyyy/MovieLandd",
    logo: "",
    image: "/assets/projects/movieland.jpg",
    tags: [
      {
        id: 1,
        name: "ReactJs",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "HTML",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 3,
        name: "CSS",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 4,
        name: "Javascript",
        path: "/assets/logos/javascript.svg",
      },
      
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/+8801798942838",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/shihabrayhansoeb/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/soeb007x/",
    icon: "/assets/socials/instagram.svg",
  },
  {
    name: "Github",
    href: "https://github.com/theweirdguyyy",
    icon: "/assets/socials/github.png",
  },
];

export const experiences = [
  {
    title: "Graduated",
    job: "Computer Science & Engineering from SUST",
    date: "2020-2025",
    contents: [
      "During my four-year tenure, I dedicated my undergraduate years to fostering a vibrant tech culture at SUST. By organizing major hackathons and collaborating on diverse technical projects, I developed a unique blend of leadership skills and technical expertise, preparing me to tackle real-world engineering problems with a team-oriented mindset.",
      "Served as a core Technical Organizer for the SUST CSE Carnival 2024, where I spearheaded the planning and execution of a large-scale national hackathon.",
      "Contributed to the academic research community at SUST by assisting senior students with their undergraduate theses, specifically focusing on data preprocessing and technical documentation.",
      "Beyond academics, I am an avid athlete with a proven track record of excellence in competitive sports. I secured the title of Singles Champion in the SUST CSE Badminton Tournament 2024, a feat that required rigorous training and strategic focus.",
      "Additionally, I have been an active member of the department's football and cricket teams, which has instilled in me a strong sense of teamwork, resilience, and the ability to perform under pressure in a fast-paced environment.",
    ],
  },
  // {
  //   title: "Back-End Developer",
  //   job: "Car Manufacture",
  //   date: "2023-2024",
  //   contents: [
  //     "Engineered systems for large-scale data ingestion and analysis, ensuring efficient data processing and storage.",
  //     "Developed back-end systems enabling vehicle-to-cloud communication for telemetry, diagnostics, and remote control:",
  //     "✅ Implemented secure APIs, following ISO 26262 automotive safety standards.",
  //     "✅ Ensured data privacy for customers and partners through industry-compliant protocols.",
  //     "✅ Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities.",
  //   ],
  // },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2024-Present",
    contents: [
      "Created a personal portfolio using React, Vite, TailwindCSS, Three.js, Framer Motion, and EmailJS to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
];
export const reviews = [
  {
    name: "Radif",
    username: "@radif",
    body: "Fantastic team player who brings both technical expertise and a positive attitude to the project.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Khaled",
    username: "@khaled",
    body: "A remarkably fast learner. SoEb picks up new frameworks and internal workflows in days, not weeks.",
    img: "https://robohash.org/jill",
  },
  {
    name: "Rudro",
    username: "rudro",
    body: "Incredibly reliable.",
    img: "https://robohash.org/john",
  },
  {
    name: "Mim",
    username: "@mim",
    body: "Highly disciplined and focused. Even under the pressure SoEb remains calm and produces clean work.",
    img: "https://robohash.org/alice",
  },
  {
    name: "Shahriar",
    username: "@shahriar",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Partha",
    username: "@partha",
    body: "Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Fahim",
    username: "@fahim",
    body: "A developer who genuinely cares about the 'why' behind the code. He ensures the solution aligns with the long-term goals of the project.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Mehedi",
    username: "@mehedi",
    body: "What he lacks in years of experience, he more than makes up for in raw curiosity and the speed at which he masters new tools.",
    img: "https://robohash.org/eve",
  },
];
