// src/data/data.js

import { myMoviesImages, scrumbleImages, fashionMnistImages, fullstackJsImages, franceMapImages, othelloImages, trafficImages, edidebsImg, sonatrachImg, ulcoImg, ummtoImg, gameAiImages, storeManagementImages, monSacElegantImages, viePlanifieeImages } from '../images';



export const firebaseData = {
  Bio: {
    name: "Dina KHIMOUD",
    description: "Passionate about software application development, I have expertise in Frontend, Backend, and software architectures. Curious and detail-oriented, I create efficient and intuitive solutions while focusing on quality, maintainability, and user experience. As an aspiring developer, I am ready to take on new challenges and actively contribute to innovative projects.",
    roles: "Future Software Applications Developer.",
    github: "https://github.com/dina-khimoud-futuredev",
    linkedin: "https://www.linkedin.com/in/dina-khimoud/",
    resume: "https://drive.google.com/file/d/1qGn71K9MrddQSwdL6eUcZGu6mSoh5Es5/view?usp=sharing"
  },
  skills: [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "JavaScript" },
        { name: "Angular" },
        { name: "React" },
        { name: "Flutter" },
        { name: "Three.js" },
        { name: "WebGL" }
      ]
    },
    {
      title: "Backend & Bases de Données",
      skills: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "PHP" },
        { name: "Spring Boot" },
        { name: "Java" },
        { name: "Python" },
        { name: "C" },
        { name: "C++" },
        { name: "JWT" },
        { name: "MySQL" },
        { name: "MariaDB" },
        { name: "MongoDB" },
        { name: "Oracle PL/SQL" }
      ]
    },
    {
      title: "Développement Logiciel & Outils",
      skills: [
        { name: "UML" },
        { name: "SOLID" },
        { name: "MVC" },
        { name: "Refactoring" },
        { name: "Tests" },
        { name: "VS Code" },
        { name: "IntelliJ IDEA" },
        { name: "Postman" },
        { name: "MySQL Workbench" },
        { name: "Bonita Studio" },
        { name: "Git" },
        { name: "GitHub" },
        { name: "GitLab CI" }
      ]
    },
    {
      title: "Computer Graphics, Analysis & Systems",
      skills: [
        { name: "3D Modeling" },
        { name: "Ray Tracing" },
        { name: "Real-Time Rendering" },
        { name: "MATLAB" },
        { name: "Octave" },
        { name: "Excel" },
        { name: "Linux" },
        { name: "Windows" },
        { name: "TCP/IP" },
        { name: "UDP" },
        { name: "ARP" },
        { name: "ICMP" },
        { name: "Network Programming" },
        { name: "Haskell" }
      ]
    }
  ],

  experience: [
    {
      id: 1,
      role: "Fullstack Developer Intern",
      company: "EDIDEBS, Pâlis, Grand Est, France",
      date: "June 2025 - August 2025",
      desc: `Development of web applications using Java (Spring Boot) and Angular,
as well as mobile applications in Flutter, with a microservices architecture and REST APIs.
Workflow optimization and process automation.`,


      link: "",
      img: edidebsImg
    }
    ,
    {
      id: 2,
      role: "Web Developer Assistant Intern",
      company: "Sonatrach, Algeria",
      date: "May - July 2023",
      desc: "Development and support of an internal system. Created small internal web features (forms, consultation pages, lists). Participated in building and maintaining simple APIs (MySQL / Oracle). Assisted in design and modeling with UML. Collaborated with the team, documented, and tested developed modules.",
      img: sonatrachImg

    }
  ],
  projects: [
    {
      id: 1,
      title: "My Movies – Web App for Movies",
      description: [
        "My Movies is a dynamic web application developed during my L2 Computer Science (2023-2024). It allows browsing, managing, and administering a database of movies and series.",
        "The project shows full-stack development skills with HTML, CSS, JavaScript for frontend, and PHP with MySQL / MariaDB for backend.",
        "It includes CRUD features to create, read, update, and delete movies, actors, directors, and categories.",
        "Role management allows Admin / User access control and search/navigation by title, actor, director, or category.",
        "An Admin Dashboard is included to manage content and users, demonstrating skills in web architecture, security, UI, and database management."
      ],
      images: myMoviesImages,
      category: "FullStack/Mobile",
      tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      date: "2024",
      github: "https://github.com/dina-khimoud-futuredev/My-Movies-L2",
      member: null
    },
    {
      id: 2,
      title: "Scrumble Game",
      date: "2024",
      tags: ["Java", "LibGDX", "Gradle"],
      description: [
        "Scrumble Game is an academic video game project built in Java with LibGDX. It was done during L2 Computer Science (2023-2024) at ULCO, Calais, France.",
        "The project shows skills in game development, modular architecture, and multimedia management.",
        "It offers a full user experience with menus, pause screens, and game over screens, plus four levels with increasing difficulty, scoring, and animations.",
        "Multimedia integration includes sounds and background music, and keyboard controls handle the game interfaces.",
        "The goal was to learn the full game development cycle, from design to implementation, using Gradle for modular project management and resource handling."
      ],
      images: scrumbleImages,
      category: "Video Games",
      github: "https://github.com/dina-khimoud-futuredev/Scrumble-Game",
      member: null
    },
    {
      id: 3,
      title: "Fashion MNIST – CNN & DNN Project",
      date: "2025",
      tags: ["Python", "TensorFlow", "Keras", "Deep Learning", "CNN", "DNN"],
      description: [
        "Deep Learning project for the Machine Learning module (M1 I2L). It compares CNN and DNN architectures for classifying Fashion MNIST images.",
        "Models developed include CNN for 2D image classification and DNN using 1D flattened image vector.",
        "Analysis and visualization include training/validation accuracy, loss curves, and correctly/incorrectly classified images.",
        "Errors like T-shirt vs Pullover are interpreted, with CNN achieving ~91% accuracy and DNN slightly lower.",
        "Learning points include data preparation, regularization, evaluation, and generalization."
      ],
      images: fashionMnistImages,
      category: "Deep Learning",
      github: "https://github.com/dina-khimoud-futuredev/deep-learning-fashion-cnn-dnn",
      webapp: null,
      member: null
    },
    {
      id: 4,
      title: "Mini Project – FullStack JavaScript",
      date: "2025",
      tags: ["Node.js", "Express", "MongoDB", "Mongoose", "HTML", "CSS", "JavaScript"],
      description: [
        "Mini L3 Computer Science project to manage a movie database. Full CRUD app with Node.js / MongoDB backend and HTML/CSS/JS frontend.",
        "Features include listing, viewing, adding, editing, and deleting movies.",
        "Backend skills: Node.js / Express / Mongoose for routes, controllers, schemas, and data import.",
        "Frontend skills: HTML, CSS, JS for dynamic display, form handling, and page navigation.",
        "Database skills: MongoDB CRUD operations and data manipulation."
      ],
      images: fullstackJsImages,
      category: "FullStack/Mobile",
      github: "https://github.com/dina-khimoud-futuredev/Node.js-Film",
      webapp: null,
      member: null
    },
    {
      id: 5,
      title: "Carte de France – Shortest Path",
      date: "2024",
      tags: ["Python", "PyQt6", "Matplotlib", "NumPy", "AI"],
      description: [
        "Mini L3 project to calculate the shortest path between two cities in France. Users can choose Dijkstra or A* algorithm and see a visual map.",
        "Features include map visualization, city input with autocomplete, algorithm selection, path display, and total distance.",
        "It also corrects typing errors automatically.",
        "Learning includes implementing Dijkstra and A* algorithms, graph manipulation, and distance calculations.",
        "GUI development uses PyQt6 and Matplotlib, with NumPy for computations."
      ],
      images: franceMapImages,
      github: "https://github.com/dina-khimoud-futuredev/carte_france_ia",
      category: "Algorithms & Optimization",
      webapp: null,
      member: null
    },


    {
      id: 6,
      title: "Othello – AI Agents (MinMax, Alpha-Beta, MCTS, UCT)",
      date: "2024",
      tags: ["Python", "AI", "Tkinter", "MCTS", "MinMax", "AlphaBeta"],
      description: [
        "This project implements several AI agents for the Othello game: MinMax, Alpha-Beta, MCTS, and UCT. It includes a graphical interface and performance analysis.",
        "It is an academic project in Artificial Intelligence (L3 Computer Science) designed to develop intelligent agents for Othello.",
        "Implemented agents include the base game, MinMax, Alpha-Beta, MCTS, UCT, a Tkinter interface, and performance analysis with charts.",
        "Algorithms include MinMax (deterministic tree search), Alpha-Beta (optimized MinMax), MCTS (probabilistic simulations), and UCT (advanced MCTS).",
        "The interface allows real-time board display, agent selection, move tracking, and responsive interaction. Technical skills include Python, AI algorithms, Tkinter GUI, and Matplotlib for analysis."
      ],
      images: othelloImages,
      github: "https://github.com/dina-khimoud-futuredev/othello-ai-strategies",
      category: "AI/Machine Learning",
      webapp: null,
      member: null
    },
    {
      id: 7,
      title: "Traffic Simulator – Web Interface (React)",
      date: "2025",
      tags: ["React", "JavaScript", "Cypress", "API REST", "Java", "Frontend"],
      description: [
        "Interactive web interface for a traffic simulator, built in React. It displays the network, adds vehicles, allows real-time control, and communicates with a Java engine via REST.",
        "The project was completed during Master 1 Computer Science (Agility module) and connects the frontend to the traffic simulator engine.",
        "Key features include network visualization, dynamic vehicle management, real-time configuration, and REST communication between React and Java backend.",
        "End-to-end tests with Cypress ensure frontend stability. Users can launch the Java engine and then the React frontend at http://localhost:3000.",
        "Technical skills demonstrated include modern frontend development (React), client-server architecture, REST API usage, JSON handling, and agile collaboration with CI/CD."
      ],
      images: trafficImages,
      github: "https://github.com/dina-khimoud-futuredev/Simulateur-de-Flux-Routier-Projet-M1Agilit-",
      category: "FullStack/Mobile",
      webapp: null,
      member: null
    },
    {
      id: 8,
      title: "AI Development and Game Engine",
      date: "2025",
      tags: ["C++", "JavaScript", "AI", "Game Engine", "Web", "Unit Tests"],
      description: [
        "Project for L3 Computer Science (2024–2025) at ULCO, Calais. Focused on AI development and game engine design with performance, reliability, and user interaction in mind.",
        "Skills include AI programming in C++ for decision-making and algorithms, and game engine implementation in JavaScript.",
        "An interactive web interface was created to visualize and control the game. Unit tests ensure reliability and robustness.",
        "Clear software architecture separates AI, engine, and interface responsibilities.",
        "This project demonstrates strong skills in algorithms, system programming, web development, and software engineering."
      ],
      images: gameAiImages,
      github: "https://github.com/dina-khimoud-futuredev/application-intelligente",
      category: "Video Games",
      webapp: null,
      member: null
    },
    {
      id: 9,
      title: "Store Management System",
      date: "2025",
      tags: ["Java", "Swing", "MySQL", "MVC", "Desktop App"],
      description: [
        "Desktop application developed in Java using MVC architecture, with Swing for the GUI and MySQL for database management.",
        "Designed to manage a store with multiple user roles, including sellers and administrators.",
        "Features include user management, product management, sales tracking, stock control, and dashboard visualization for store performance.",
        "The project demonstrates skills in object-oriented programming, MVC architecture, relational databases, and user-friendly interface design.",

      ],
      images: storeManagementImages,
      github: "https://github.com/dina-khimoud-futuredev/JAVA-swing-Store-management",
      category: "Software/Desktop",
      webapp: null,
      member: null
    },
    {
      id: 10,
      title: "MonSacÉlégant – E-commerce Application",
      date: "2025",
      tags: ["Node.js", "EJS", "MongoDB", "Stripe", "E-commerce"],
      description: [
        "MonSacÉlégant is a fictional e-commerce app developed for educational purposes, demonstrating key online store features.",
        "Backend uses Node.js, frontend uses EJS for dynamic page rendering, and MongoDB handles user, product, and order data.",
        "Main features include product browsing, shopping cart management, user authentication, and simulated payments with Stripe in test mode.",
        "Admin interface allows product, category, and order management. Data persistence ensures reliable storage of users, products, carts, and orders.",
        "The project showcases backend development, NoSQL database management, dynamic web app design, and e-commerce functionalities."
      ],
      images: monSacElegantImages,
      github: "https://github.com/dina-khimoud-futuredev/e-commerce-application",
      category: "Web",
      webapp: null,
      member: null
    },
    {
      id: 11,
      title: "Planned Life – Productivity App",
      date: "2024",
      tags: ["Node.js", "Flutter", "MongoDB", "REST API", "Productivity"],
      description: [
        "Planned Life is a productivity app designed to help users organize and manage daily tasks efficiently.",
        "Backend is built with Node.js exposing a RESTful API, and the mobile frontend is developed in Flutter for smooth Android and iOS experiences.",
        "Data is stored in MongoDB for fast and reliable access.",
        "Main features include note management, task planning, reminders, and personal organization.",
        "This project highlights full-stack development, API design, cross-platform mobile development, NoSQL database management, and user-focused productivity solutions."
      ],
      images: viePlanifieeImages,
      github: "https://github.com/dina-khimoud-futuredev/Vie-planifie",
      category: "FullStack/Mobile",
      webapp: null,
      member: null
    },



  ],
  education: [
    {
      id: 1,
      school: "Université du Littoral Côte d’Opale, Calais, France",
      degree: "Master 1 Computer Science, Software Engineering",
      date: "2025/2026",
      img: ulcoImg,
      average: "Ongoing",
      desc: "Computer Science: development of free software applications (web, mobile, multi-tier), design of distributed architectures, agile methodologies (Scrum, Kanban) and DevOps practices (CI/CD, Git, testing, continuous integration), administration of open-source infrastructures (Linux, virtualization, network services), system and application security, migration to open-source solutions, legal and economic aspects of free software, introduction to research and entrepreneurship. Mathematics / Theory: advanced algorithms, functional programming, machine learning, formal logic."
    },
    {
      id: 2,
      school: "Université du Littoral Côte d’Opale, Calais, France",
      degree: "Bachelor 3 Computer Science",
      date: "2024/2025",
      img: ulcoImg,
      average: "12/20",
      desc: "Computer Science: study of functional programming (Haskell), advanced object-oriented programming (C++), advanced networks and databases (PL/SQL - Oracle), software engineering, advanced AI, system and network administration, IT (automata, Turing machines, algorithm complexity), fullstack development (JavaScript, Node.js, Express, MongoDB), computer graphics and real-time 3D rendering (WebGL, Three.js). Mathematics: probability and statistics."
    },
    {
      id: 3,
      school: "Université du Littoral Côte d’Opale, Calais, France",
      degree: "Bachelor 2 Computer Science",
      date: "2023/2024",
      img: ulcoImg,
      average: "12/20",
      desc: "Computer Science: graph algorithms (C), object-oriented programming (Java), databases (SQL), web development (JS, PHP), AI (Python - Seaborn, Matplotlib, NumPy, Pandas), system and architecture (Linux, Unix) resource management and concurrent programming, IT (counting, finite automata, grammar). Mathematics: linear algebra, applications, numerical analysis (MATLAB, Octave)."
    },
    {
      id: 4,
      school: "UNIVERSITE MOULOUD MAMMERI, Tizi Ouzou, Algeria",
      degree: "Bachelor 2 Computer Science",
      date: "2022/2023",
      img: ummtoImg,
      average: "13/20",
      desc: "Computer Science: computer architecture (assembly language), tree algorithms (C), information systems (Merise method), graph theory, language theory (C), operating systems (Linux), databases (MariaDB), networks (Cisco Packet Tracer), web (HTML, CSS). Mathematics: numerical methods, mathematical logic."
    },
    {
      id: 5,
      school: "UNIVERSITE MOULOUD MAMMERI, Tizi Ouzou, Algeria",
      degree: "Bachelor 1 Mathematics and Computer Science",
      date: "2021/2022",
      img: ummtoImg,
      average: "14/20",
      desc: "Computer Science: algorithms and data structures (Pascal), machine structures, Information and Communication Technology. Mathematics: analysis, algebra, probability and descriptive statistics."
    },
    {
      id: 6,
      school: "Lycée Ouedni Amar Technicum, Tizi Ouzou, Algeria",
      degree: "Baccalaureate in Mathematics",
      date: "2021",
      average: "17/20",
    }
  ]


};
