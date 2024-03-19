export const curriculum = {
  EN: "Curriculum",
  ES: "Currículum",
  FR: "Curriculum",
}

export const sections = {
  education: { EN: "Education", ES: "Formación", FR: "Formation" },
  experience: { EN: "Experience", ES: "Experiencia", FR: "Expérience" },
  portfolio: { EN: "Portfolio", ES: "Portafolio", FR: "Portefolio" },
}

export const changeSection = {
  choose: {
    EN: "choose the section",
    ES: "elegir la sección",
    FR: "choisir la section",
  },
  nothing: {
    EN: "nothing to show with this filter on section ",
    ES: "nada para monstrar con este filtro en la sección ",
    FR: "rien à afficher avec ce filtre dans la section ",
  },
}

export const skillName = {
  EN: "Skills",
  ES: "Habilidades",
  FR: "Compétences",
}

export const skills = [
  {
    key: 1,
    title: { EN: "Web", ES: "Web", FR: "Web" },
    items: [
      {
        key: 101,
        text: { EN: "JavaScript", ES: "JavaScript", FR: "JavaScript" },
      },
      { key: 102, text: { EN: "Node.js", ES: "Node.js", FR: "Node.js" } },
      {
        key: 103,
        text: { EN: "Express.js", ES: "Express.js", FR: "Express.js" },
      },
      {
        key: 104,
        text: { EN: "PostgreSQL", ES: "PostgreSQL", FR: "PostgreSQL" },
      },
      { key: 105, text: { EN: "API", ES: "API", FR: "API" } },
      { key: 106, text: { EN: "React.js", ES: "React.js", FR: "React.js" } },
    ],
  },
  {
    key: 2,
    title: { EN: "Blockchain", ES: "Blockchain", FR: "Blockchain" },
    items: [
      { key: 201, text: { EN: "DEFI", ES: "DEFI", FR: "DEFI" } },
      { key: 202, text: { EN: "NFT", ES: "NFT", FR: "NFT" } },
      { key: 203, text: { EN: "Solidity", ES: "Solidity", FR: "Solidity" } },
      { key: 204, text: { EN: "Truffle", ES: "Truffle", FR: "Truffle" } },
      { key: 205, text: { EN: "Hardhat", ES: "Hardhat", FR: "Hardhat" } },
      {
        key: 206,
        text: { EN: "Multichain", ES: "Multichain", FR: "Multichain" },
      },
      { key: 207, text: { EN: "Ether.js", ES: "Ether.js", FR: "Ether.js" } },
      { key: 208, text: { EN: "Web3.js", ES: "Web3.js", FR: "Web3.js" } },
      { key: 209, text: { EN: "Foundry", ES: "Foundry", FR: "Foundry" } },
      {
        key: 210,
        text: { EN: "OpenZepellin", ES: "OpenZepellin", FR: "OpenZepellin" },
      },
      {
        key: 211,
        text: { EN: "Oracle", ES: "Oracle", FR: "Oracle" },
      },
    ],
  },
  {
    key: 3,
    title: { EN: "Mathematics", ES: "Matématica", FR: "Mathématiques" },
    items: [
      {
        key: 301,
        text: { EN: "Aritmetic", ES: "Aritmética", FR: "Arithmétique" },
      },
      { key: 302, text: { EN: "Algebra", ES: "Álgebra", FR: "Algèbre" } },
      { key: 303, text: { EN: "Geometry", ES: "Geometría", FR: "Géométrie" } },
      {
        key: 304,
        text: { EN: "Statisitcs", ES: "Estatisica", FR: "Statistique" },
      },
    ],
  },
  {
    key: 4,
    title: { EN: "Engineering", ES: "Ingeniería", FR: "Génie" },
    items: [
      {
        key: 401,
        text: { EN: "Industrial", ES: "Industrial", FR: "Industriel" },
      },
      {
        key: 402,
        text: { EN: "Logistic", ES: "Logistica", FR: "Logistique" },
      },
      {
        key: 403,
        text: { EN: "Systems", ES: "Sistemas", FR: "Systèmes" },
      },
      {
        key: 404,
        text: { EN: "Robotics", ES: "Robótica", FR: "Robotique" },
      },
    ],
  },
  {
    key: 5,
    title: { EN: "Product", ES: "Producto", FR: "Produit" },
    items: [
      { key: 501, text: { EN: "JIRA", ES: "JIRA", FR: "JIRA" } },
      { key: 502, text: { EN: "SAP", ES: "SAP", FR: "SAP" } },
      { key: 503, text: { EN: "Odoo", ES: "Odoo", FR: "Odoo" } },
    ],
  },
]

export const filterSkill = {
  asidefilter: {
    EN: "filter by skills",
    ES: "filtrar por habilidad",
    FR: "filtrer par compétence",
  },
  buttonfilter: {
    active: {
      EN: "active filter",
      ES: "activar filtro",
      FR: "activer le filtre",
    },
    inactive: {
      EN: "inactive filter",
      ES: "desactivar filtro",
      FR: "désactiver le filtre",
    },
  },
}

export const cardLinks = {
  code: {
    EN: "view source code",
    ES: "ver el codigo fuente",
    FR: "voir le code source",
  },
  link: {
    EN: "website link",
    ES: "enlace del la página Web",
    FR: "lien vers le site Web",
  },
}

export const main = [
  // EDUCATION
  {
    key: 101,
    title: {
      EN: "Intensive course of Mathematics & Physics",
      ES: "Curso intensivo de Matemáticas & Física",
      FR: "Cours intensif de Mathématiques & Physique MPSI/MP",
    },
    date: {
      EN: "September 2011 - August 2013",
      ES: "Septiembre 2011 - Agosto 2013",
      FR: "Septembre 2011 - Août 2013",
    },
    establishment: {
      EN: "Michelet Hightschool",
      ES: "Escuela Secundaria Michelet",
      FR: "Lycée Michelet",
    },
    location: {
      EN: "Paris, France",
      ES: "Paris, Francia",
      FR: "Paris, France",
    },
    section: "education",
    skills: [{ key: 301 }, { key: 302 }, { key: 303 }, { key: 304 }],
    code: "",
    link: "http://www.cite-scolaire-michelet-vanves.ac-versailles.fr/",
    details: [],
  },
  {
    key: 102,
    title: {
      EN: "Industrial Engineering",
      ES: "Genio Industrial",
      FR: "Génie Industriel",
    },
    date: {
      EN: "January 2015 - May 2015",
      ES: "Enero 2015 - Mayo 2015",
      FR: "Janvier 2015 - Mai 2015",
    },
    establishment: {
      EN: "Polytechnique",
      ES: "Polytechnique",
      FR: "Polytechnique",
    },
    location: {
      EN: "Montreal, Canada",
      ES: "Montréal, Canada",
      FR: "Montréal, Canada",
    },
    section: "education",
    skills: [{ key: 401 }, { key: 402 }, { key: 404 }],
    code: "",
    link: "https://www.polymtl.ca/",
    details: [],
  },
  {
    key: 103,
    title: {
      EN: "MSc Information Technology Engineer",
      ES: "MSc Ingenería Sistemas de Información & Procesos",
      FR: "MSc Ingénieur Sysèmes d'Information & Processus",
    },
    date: {
      EN: "September 2013 - November 2016",
      ES: "Septiembre 2013 - Noviembre 2016",
      FR: "Septembre 2013 - Novembre 2016",
    },
    establishment: {
      EN: "Nacitional Superior School of Mines",
      ES: "Escuela Nacional Superior de Minas",
      FR: "École Nactionale Supérieure des Mines",
    },
    location: { EN: "Albi, France", ES: "Albi, Francia", FR: "Albi, France" },
    section: "education",
    skills: [{ key: 104 }, { key: 401 }, { key: 402 }, { key: 403 }],
    code: "",
    link: "https://www.imt-mines-albi.fr/",
    details: [],
  },
  {
    key: 104,
    title: {
      EN: "Full Stack Blockchain Developer",
      ES: "Desarrollador Full Stack Blockchain",
      FR: "Développeur Full Stack Blockchain",
    },
    date: {
      EN: "February 2021 - August 2021",
      ES: "Febrero 2021 - Agosto 2021",
      FR: "Février 2021 - Août 2021",
    },
    establishment: { EN: "Alyra", ES: "Alyra", FR: "Alyra" },
    location: {
      EN: "Paris, France",
      ES: "París, Francia",
      FR: "Paris, France",
    },
    section: "education",
    skills: [
      { key: 101 },
      { key: 102 },
      { key: 103 },
      { key: 106 },
      { key: 201 },
      { key: 202 },
      { key: 203 },
      { key: 205 },
      { key: 207 },
      { key: 208 },
      { key: 210 },
    ],
    code: "",
    link: "https://alyra.fr/",
    details: [],
  },
  // EXPERIENCE
  {
    key: 203,
    title: {
      EN: "Functional & Technical Consultant ERP",
      ES: "Consultora Functional & Tecnica",
      FR: "Consultant Fonctionnel & Technique",
    },
    date: {
      EN: "March 2016 - August 2016",
      ES: "Marzo 2016 - Agosto 2016",
      FR: "Mars 2016 - Août 2016",
    },
    establishment: { EN: "Trobz", ES: "Trobz", FR: "Trobz" },
    location: {
      EN: "Ho-Chi-Minh-City, Vietnam",
      ES: "Ho-Chi-Minh-City, Vietnam",
      FR: "Ho-Chi-Minh-City, Vietnam",
    },
    section: "experience",
    skills: [
      { key: 104 },
      { key: 105 },
      { key: 403 },
      { key: 501 },
      { key: 503 },
    ],
    code: "",
    link: "https://trobz.com/about",
    details: [
      {
        key: 2031,
        text: {
          EN: "analysed functional specification to match customer requirements",
          ES: "análisis de las especificaciónes funcionales para responder a las necesidades del cliente",
          FR: "analyse des spécifications fonctionnelles pour répondre au besoin client",
        },
      },
      {
        key: 2032,
        text: {
          EN: "coordinated projects and assigned tasks to developers and QA testing unit",
          ES: "coordinación de proyectos y asignación de las tareas a los equipos de desarrolladores y testadores",
          FR: "coordination de projet et affectation des tâches aux équipes de développeurs et testeurs",
        },
      },
      {
        key: 2033,
        text: {
          EN: "supported and trained customers during the implementation and exploitation stage",
          ES: "soporte y formación cliente durante las etapas de implementación y de explotación",
          FR: "support et formation client pendant les étapes d'implémentation et d'exploitation",
        },
      },
      {
        key: 2034,
        text: {
          EN: "optimized internal management tool for resources workload monitoring",
          ES: "optimización del herramienta de gestión interno para controlar la carga de trabajo de los empleados",
          FR: "optimisation de l'outil de management interne pour contrôler la charge de travail des employés",
        },
      },
    ],
  },
  {
    key: 204,
    title: {
      EN: "Process & Method Consultant",
      ES: "Consultora Processos & Metodos",
      FR: "Consultant Processus & Méthodes",
    },
    date: {
      EN: "May 2017 - August 2018",
      ES: "Mayo 2017 - Agosto 2017",
      FR: "Mai 2017 - Août 2017",
    },
    establishment: {
      EN: "Bouygues Telecom",
      ES: "Bouygues Telecom",
      FR: "Bouygues Telecom",
    },
    location: {
      EN: "Paris, France",
      ES: "París, Francia",
      FR: "Paris, France",
    },
    section: "experience",
    skills: [{ key: 401 }, { key: 402 }, { key: 403 }, { key: 501 }],
    code: "",
    link: "",
    details: [
      {
        key: 2041,
        text: {
          EN: "managed the industrialization of two production lines",
          ES: "dirección de la industrialización de dos linéas de producción",
          FR: "direction de l'industralisation de deux lignes de production",
        },
      },
      {
        key: 2042,
        text: {
          EN: "animated progress meetings to liaise management and operational teams",
          ES: "animación de reuniónes para vincular los equipos de management y los equipos operacionales",
          FR: "animation de réunions pour lier les équipes de management et les équipes opérationnelles",
        },
      },
      {
        key: 2043,
        text: {
          EN: "identified process issues to establish action plans supporting engineering production and exploitation unit",
          ES: "identificación de los procesos bloqueantes y implementación de un plan de acciónes para soportar la concepción y la producción",
          FR: "identification des processus bloquants et mise en place de plan d'action pour supporter la conception et la production",
        },
      },
      {
        key: 2044,
        text: {
          EN: "implemented an internal tool to monitor production and to measure Key Performance Indicator",
          ES: "implementación de un herramienta interno de gestión de producción y de medida de los Indicadores Clave de Rendimiento",
          FR: "implémentation d'un outil interne de gestion de production et de mesure des Indicateurs Clé de Performance",
        },
      },
    ],
  },
  {
    key: 205,
    title: {
      EN: "Functional & Technical Consultant ERP",
      ES: "Consultora Functional & Tecnica",
      FR: "Consultant Fonctionnel & Technique",
    },
    date: {
      EN: "September 2018 - January 2020",
      ES: "Septiembre 2018 - Enero 2020",
      FR: "Septembre 2018 - Janvier 2020",
    },
    establishment: {
      EN: "Fitnet Manager",
      ES: "Fitnet Manager",
      FR: "Fitnet Manager",
    },
    location: {
      EN: "Barcelona, Spain",
      ES: "Barcelona, España",
      FR: "Barcelone, France",
    },
    section: "experience",
    skills: [{ key: 104 }, { key: 105 }, { key: 403 }, { key: 501 }],
    code: "",
    link: "https://www.fitnetmanager.com/en/home-en/",
    details: [
      {
        key: 2051,
        text: {
          EN: "guided customers in their ERP SaaS solution implementation",
          ES: "asistencia de los clientes durante la fase de implementación de la solución ERP",
          FR: "assistance des clients pendant la phase d'implémentation de leur solution ERP",
        },
      },
      {
        key: 2052,
        text: {
          EN: "produced technical specifications to create / improve solution functionalities",
          ES: "producción de las especificaciónes technicas para créar / mejorar las funciónes de la solución",
          FR: "producion des spécifications techniques pour créer / améliorer les fonctionalités de la solution",
        },
      },
      {
        key: 2053,
        text: {
          EN: "implemented walkthrough programming HTML and CSS",
          ES: "implementación tutoriales dinámicos con HTML y CSS",
          FR: "implémentation de tutoriels dynamiques avec HTML et CSS",
        },
      },
      {
        key: 2054,
        text: {
          EN: "troubleshot, investigated and created detailed reports about issues",
          ES: "identificación de los bugs, investigación y redacción de informes de resolución detallados",
          FR: "indentification des bugs, investigation et rédaction de rapports de résolution détaillés",
        },
      },
      {
        key: 2055,
        text: {
          EN: "provided online instructions for users",
          ES: "redacción de las instrucciónes de uso en línea",
          FR: "rédaction des instructions d'utilisation en ligne",
        },
      },
    ],
  },
  {
    key: 206,
    title: {
      EN: "Blockchain Developer",
      ES: "Desarolladora Blockchain",
      FR: "Dévelopeuse Blockchain",
    },
    date: {
      EN: "September 2021 - now",
      ES: "Septiembre 2021 - ahora",
      FR: "Septembre 2021 - aujourd'hui",
    },
    establishment: { EN: "freelance", ES: "autónomo", FR: "auto-entrepreneur" },
    location: { EN: "Remote", ES: "Remoto", FR: "Télétravail" },
    section: "experience",
    skills: [
      { key: 101 },
      { key: 102 },
      { key: 201 },
      { key: 202 },
      { key: 203 },
      { key: 204 },
      { key: 205 },
      { key: 206 },
      { key: 207 },
      { key: 208 },
      { key: 209 },
      { key: 210 },
      { key: 211 },
      { key: 501 },
    ],
    code: "",
    link: "",
    details: [
      {
        key: 2061,
        text: {
          EN: "Solidity Developer on various DEFI project (insurance and wallets)",
          ES: "desarolladora Solidity en varios proyectos DEFI (asurancia y carteras)",
          FR: "développeuse Solidity sur plusieurs projets DEFI (assurance et porte-feuille)",
        },
      },
      {
        key: 2062,
        text: {
          EN: "Solidity Developer on various NFT project (marketplaces and games)",
          ES: "desarolladora Solidity en varios proyectos NFT (marketplaces y juegos)",
          FR: "développeuse Solidity sur plusieurs projets NFT (marketplaces et jeux)",
        },
      },
      {
        key: 2063,
        text: {
          EN: "management of multichain deployment EVM compatible (ETH, BSC, POL, ARB, OP, AVAX)",
          ES: "gestión de despliegue multichain con compatibilidad EVM (ETH, BSC, POL, ARB, OP, AVAX)",
          FR: "gestion de déploiement mutichain avec compatibilité EVM (ETH, BSC, POL, ARB, OP, AVAX)",
        },
      },
      {
        key: 2064,
        text: {
          EN: "mastering solidity language, high security and low gas fee",
          ES: "maetría del lenguaje solidity, alta securidad y bajo costos de gas",
          FR: "maîtrise du language solidity, haute sécurité et faible coût de gas",
        },
      },
    ],
  },
  // PORTFOLIO
  {
    key: 301,
    title: { EN: "Arkanoid", ES: "Arkanoid", FR: "Arkanoid" },
    date: { EN: "March 2021", ES: "Marzo 2021", FR: "Mars 2021" },
    establishment: { EN: "", ES: "", FR: "" },
    location: { EN: "", ES: "", FR: "" },
    section: "portfolio",
    skills: [{ key: 101 }, { key: 102 }],
    code: "https://github.com/solenemhep/arkanoid/",
    link: "https://solenemhep-arkanoid.netlify.app/",
    img: "arkanoid.png",
    details: [
      {
        key: 3011,
        text: {
          EN: "80s game developped in JavaScript",
          ES: "juego de los 80s desarollado en JavaScript",
          FR: "jeu des 80s développé en JavaScript",
        },
      },
    ],
  },
  {
    key: 302,
    title: { EN: "Hangman", ES: "Hangman", FR: "Hangman" },
    date: { EN: "April 2021", ES: "Abril 2021", FR: "Avril 2021" },
    establishment: { EN: "", ES: "", FR: "" },
    location: { EN: "", ES: "", FR: "" },
    section: "portfolio",
    skills: [{ key: 101 }, { key: 102 }],
    code: "https://github.com/solenemhep/hangman",
    link: "",
    img: "hangman.png",
    details: [
      {
        key: 3021,
        text: {
          EN: "Node & JavaScript hangman game",
          ES: "Node & Javascript juego del ahorcado",
          FR: "Node & Javascript jeu du pendu",
        },
      },
    ],
  },
  {
    key: 303,
    title: { EN: "Google Fonts", ES: "Google Fonts", FR: "Google Fonts" },
    date: { EN: "May 2021", ES: "Mayo 2021", FR: "Mai 2021" },
    establishment: { EN: "", ES: "", FR: "" },
    location: { EN: "", ES: "", FR: "" },
    section: "portfolio",
    skills: [{ key: 101 }, { key: 105 }, { key: 106 }],
    code: "https://github.com/solenemhep/googlefonts-widget",
    link: "https://solenemhep-googlefonts.netlify.app/",
    img: "googlefonts.png",
    details: [
      {
        key: 3031,
        text: {
          EN: "React application displaying GoogleFonts",
          ES: "aplicación React de GoogleFonts",
          FR: "application React de GoogleFonts",
        },
      },
      {
        key: 3032,
        text: {
          EN: "page designed with Bootstrap",
          ES: "página diseñada con Bootstrap",
          FR: "page designée avec Bootstrap",
        },
      },
      {
        key: 3033,
        text: {
          EN: "fetch data from API GoogleFonts",
          ES: "fetch de los datos desde API GoogleFonts",
          FR: "fetch des données depuis API GoogleFonts",
        },
      },
    ],
  },
  {
    key: 304,
    title: { EN: "Taties", ES: "Taties", FR: "Taties" },
    date: { EN: "May 2021", ES: "Mayo 2021", FR: "Mai 2021" },
    establishment: { EN: "", ES: "", FR: "" },
    location: { EN: "", ES: "", FR: "" },
    section: "portfolio",
    skills: [{ key: 101 }, { key: 106 }],
    code: "https://github.com/solenemep/taties-app",
    link: "https://solenemep-taties.netlify.app/",
    img: "taties.png",
    details: [
      {
        key: 3041,
        text: {
          EN: "React application for daily organization",
          ES: "aplicación React para organizarse diariamente",
          FR: "aplication React pour s'organiser quotidiennement",
        },
      },
      {
        key: 3042,
        text: {
          EN: "page designed with Bootstrap",
          ES: "página diseñada con Bootstrap",
          FR: "page designée avec Bootstrap",
        },
      },
    ],
  },
  {
    key: 305,
    title: { EN: "Mini Dex", ES: "Mini Dex", FR: "Mini Dex" },
    date: { EN: "July 2021", ES: "Julio 2021", FR: "Juillet 2021" },
    establishment: { EN: "", ES: "", FR: "" },
    location: { EN: "", ES: "", FR: "" },
    section: "portfolio",
    skills: [
      { key: 101 },
      { key: 106 },
      { key: 201 },
      { key: 203 },
      { key: 205 },
      { key: 207 },
      { key: 208 },
      { key: 210 },
    ],
    code: "https://github.com/solenemep/mini-dex",
    link: "https://solenemep-swap.netlify.app/",
    img: "swap.png",
    details: [
      {
        key: 3051,
        text: {
          EN: "token swaping dapp",
          ES: "dapp de swap de tokens",
          FR: "dapp de swap de tokens",
        },
      },
      {
        key: 3052,
        text: {
          EN: "simplified version of UniSwap",
          ES: "version simplificada de UniSwap",
          FR: "version simplifiée de UniSwap",
        },
      },
      {
        key: 3053,
        text: {
          EN: "create pools, add liquidity and swap tokens",
          ES: "crear pools, añadir liquidez y swap tokens",
          FR: "créer des pools, ajouter de la liquidité et swap tokens",
        },
      },
      {
        key: 3054,
        text: {
          EN: "connected with MetaMask",
          ES: "conectado con MetaMask",
          FR: "connecté avec MetaMask",
        },
      },
    ],
  },
  {
    key: 306,
    title: {
      EN: "Randomness",
      ES: "Randomness",
      FR: "Randomness",
    },
    date: { EN: "November 2022", ES: "Noviembre 2022", FR: "Novembre 2022" },
    establishment: { EN: "", ES: "", FR: "" },
    location: { EN: "", ES: "", FR: "" },
    section: "portfolio",
    skills: [{ key: 203 }, { key: 205 }, { key: 207 }, { key: 208 }],
    code: "https://github.com/solenemep/randomness",
    link: "",
    img: "",
    details: [
      {
        key: 3061,
        text: {
          EN: "library for random number generation in a specific range",
          ES: "biblioteca de generación de numero aleatorio dentro de un rango especifico",
          FR: "bibliothèque de génération de numéro aléatoire compris dans un segment spécifique",
        },
      },
    ],
  },
  {
    key: 307,
    title: {
      EN: "Upgradeable Registry",
      ES: "Upgradeable Registry",
      FR: "Upgradeable Registry",
    },
    date: { EN: "December 2022", ES: "Diciembre 2022", FR: "Décembre 2022" },
    establishment: { EN: "", ES: "", FR: "" },
    location: { EN: "", ES: "", FR: "" },
    section: "portfolio",
    skills: [{ key: 203 }, { key: 205 }, { key: 207 }, { key: 208 }],
    code: "https://github.com/solenemep/upgradeable-registry",
    link: "",
    img: "",
    details: [
      {
        key: 3071,
        text: {
          EN: "template of upgradeable contracts registry",
          ES: "template de registro de contratos upgradeable",
          FR: "template de registre de contrats upgradeable",
        },
      },
      {
        key: 3072,
        text: {
          EN: "deployment and upgrade scripts and tests",
          ES: "escriptos y pruebas de despliegue y upgrade",
          FR: "scripts et tests de déploiement et upgrade",
        },
      },
    ],
  },
  {
    key: 308,
    title: {
      EN: "Vesting",
      ES: "Vesting",
      FR: "Vesting",
    },
    date: { EN: "March 2022", ES: "Marzo 2022", FR: "Mars 2022" },
    establishment: { EN: "", ES: "", FR: "" },
    location: { EN: "", ES: "", FR: "" },
    section: "portfolio",
    skills: [
      { key: 203 },
      { key: 205 },
      { key: 207 },
      { key: 208 },
      { key: 209 },
      { key: 210 },
    ],
    code: "https://github.com/solenemep/vesting",
    link: "",
    img: "",
    details: [
      {
        key: 3081,
        text: {
          EN: "vesting plateform with 3 types of sales",
          ES: "plataforma de vesting con 3 tipos de ventas",
          FR: "plateforme de vesting avec 3 types de ventes",
        },
      },
      {
        key: 3082,
        text: {
          EN: "cliff and release percentage at given date",
          ES: "cliff y porcentaje distribuido a fecha dada",
          FR: "cliff et pourcentage distribué à date donnée",
        },
      },
      {
        key: 3083,
        text: {
          EN: "then, linear distribution claimable by user at any time",
          ES: "despues, distribución linear reclamable a cualquier momento",
          FR: "puis, distribution linéaire reclamable à tout moment",
        },
      },
      {
        key: 3084,
        text: {
          EN: "Tested with Hardhat and Foundry",
          ES: "Probado con Hardhat y Foundry",
          FR: "Testé avec Hardhat et Foundry",
        },
      },
    ],
  },
  {
    key: 309,
    title: {
      EN: "HAQQ Market Place",
      ES: "HAQQ Market Place",
      FR: "HAQQ Market Place",
    },
    date: { EN: "September 2023", ES: "Septiembre 2023", FR: "Septembre 2023" },
    establishment: { EN: "", ES: "", FR: "" },
    location: { EN: "", ES: "", FR: "" },
    section: "portfolio",
    skills: [
      { key: 203 },
      { key: 205 },
      { key: 206 },
      { key: 207 },
      { key: 208 },
      { key: 210 },
    ],
    code: "https://github.com/solenemep/market-place",
    link: "https://haqq.network/",
    img: "",
    details: [
      {
        key: 3091,
        text: {
          EN: "NFT Marketplace with auction",
          ES: "marketplace NFT con subasta",
          FR: "marketplace NFT avec enchères",
        },
      },
      {
        key: 3091,
        text: {
          EN: "minting and listing of NFT",
          ES: "minting y listing de NFT",
          FR: "minting et listing de NFT",
        },
      },
    ],
  },
  {
    key: 310,
    title: {
      EN: "Betmakerz",
      ES: "Betmakerz",
      FR: "Betmakerz",
    },
    date: { EN: "December 2023", ES: "Diciembre 2023", FR: "Décembre 2023" },
    establishment: { EN: "", ES: "", FR: "" },
    location: { EN: "", ES: "", FR: "" },
    section: "portfolio",
    skills: [
      { key: 203 },
      { key: 205 },
      { key: 206 },
      { key: 207 },
      { key: 208 },
      { key: 210 },
    ],
    code: "https://github.com/solenemep/betmakerz",
    link: "https://betmakerz.io/en",
    img: "betmakerz.png",
    details: [
      {
        key: 3101,
        text: {
          EN: "betting game for sports, politics, etc.",
          ES: "juego de apuestas deportivo, policito, etc.",
          FR: "jeu de paris sportif, politique, etc.",
        },
      },
      {
        key: 3102,
        text: {
          EN: "deployed on mainnet",
          ES: "desplegado en mainnet",
          FR: "déployer sur mainnet",
        },
      },
    ],
  },
  // TODO defistrategies dollet
]
