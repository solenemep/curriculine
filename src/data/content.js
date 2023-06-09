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
    EN: "Choose the section",
    ES: "Elegir la sección",
    FR: "Choisir la section",
  },
  nothing: {
    EN: "Nothing to show with this filter on section ",
    ES: "Nada para monstrar con este filtro en la sección ",
    FR: "Rien à afficher avec ce filtre dans la section ",
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
    EN: "Filter by skills",
    ES: "Filtrar por habilidad",
    FR: "Filtrer par compétence",
  },
  buttonfilter: {
    active: {
      EN: "Active filter",
      ES: "Activar filtro",
      FR: "Activer le filtre",
    },
    inactive: {
      EN: "Inactive filter",
      ES: "Desactivar filtro",
      FR: "Désactiver le filtre",
    },
  },
}

export const cardLinks = {
  code: {
    EN: "View source code",
    ES: "Ver el codigo fuente",
    FR: "Voir le code source",
  },
  link: {
    EN: "Website link",
    ES: "Enlace del la página Web",
    FR: "Lien vers le site Web",
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
  // {
  //   key: 201,
  //   title: {
  //     EN: "Worker in factory",
  //     ES: "Obrera en fábrica",
  //     FR: "Ouvrière en usine",
  //   },
  //   date: {
  //     EN: "July 2012 - August 2012",
  //     ES: "Julio 2012 - Agosto 2012",
  //     FR: "Juillet 2012 - Août 2012",
  //   },
  //   establishment: { EN: "D3 LLC", ES: "D3 LLC", FR: "D3 LLC" },
  //   location: {
  //     EN: "New York, USA",
  //     ES: "Nueva York, EE.UU",
  //     FR: "New York, États-Unis",
  //   },
  //   section: "experience",
  //   skills: [{ key: 402 }],
  //   code: "",
  //   link: "",
  //   details: [
  //     {
  //       key: 2011,
  //       text: {
  //         EN: "Worker in factoy for one month to learn english",
  //         ES: "Obrera en fábrica durante un mes para aprender al inglés",
  //         FR: "Ouvrière en usine pendant un mois pour apprendre l'anglais",
  //       },
  //     },
  //   ],
  // },
  {
    key: 202,
    title: {
      EN: "Logistic analyst",
      ES: "Analista logístico",
      FR: "Analiste logisitque",
    },
    date: {
      EN: "June 2015 - August 2015",
      ES: "Junio 2015 - Agosto 2015",
      FR: "Juin 2015 - Août 2015",
    },
    establishment: {
      EN: "Pernod Ricard",
      ES: "Pernod Ricard",
      FR: "Pernod Ricard",
    },
    location: {
      EN: "Bordeaux, France",
      ES: "Burdeos, Francia",
      FR: "Bordeaux, France",
    },
    section: "experience",
    skills: [{ key: 401 }, { key: 402 }, { key: 502 }],
    code: "",
    link: "https://www.pernod-ricard.com/en",
    details: [
      {
        key: 2021,
        text: {
          EN: "Designed a logistic plan to integrate a new supply chain activity",
          ES: "Creación de un plano logístico para integrar una nueva actividad supply chain",
          FR: "Création d'un plan logistique afin d'intégrer une nouvelle activité supply chain",
        },
      },
      {
        key: 2022,
        text: {
          EN: "Optimized goods picking & packing processes",
          ES: "Optimización de los procesos de recogida et preparación de la mercancía",
          FR: "Optimisation des processus de collecte et préparation de la marchandise",
        },
      },
    ],
  },
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
          EN: "Analysed functional specification to match customer requirements",
          ES: "Análisis de las especificaciónes funcionales para responder a las necesidades del cliente",
          FR: "Analyse des spécifications fonctionnelles pour répondre au besoin client",
        },
      },
      {
        key: 2032,
        text: {
          EN: "Coordinated projects and assigned tasks to developers and QA testing unit",
          ES: "Coordinación de proyectos y asignación de las tareas a los equipos de desarrolladores y testadores",
          FR: "Coordination de projet et affectation des tâches aux équipes de développeurs et testeurs",
        },
      },
      {
        key: 2033,
        text: {
          EN: "Supported and trained customers during the implementation and exploitation stage",
          ES: "Soporte y formación cliente durante las etapas de implementación y de explotación",
          FR: "Support et formation client pendant les étapes d'implémentation et d'exploitation",
        },
      },
      {
        key: 2034,
        text: {
          EN: "Optimized internal management tool for resources workload monitoring",
          ES: "Optimización del herramienta de gestión interno para controlar la carga de trabajo de los empleados",
          FR: "Optimisation de l'outil de management interne pour contrôler la charge de travail des employés",
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
          EN: "Managed the industrialization of two production lines",
          ES: "Dirección de la industrialización de dos linéas de producción",
          FR: "Direction de l'industralisation de deux lignes de production",
        },
      },
      {
        key: 2042,
        text: {
          EN: "Animated progress meetings to liaise management and operational teams",
          ES: "Animación de reuniónes para vincular los equipos de management y los equipos operacionales",
          FR: "Animation de réunions pour lier les équipes de management et les équipes opérationnelles",
        },
      },
      {
        key: 2043,
        text: {
          EN: "Identified process issues to establish action plans supporting engineering production and exploitation unit",
          ES: "Identificación de los procesos bloqueantes y implementación de un plan de acciónes para soportar la concepción y la producción",
          FR: "Identification des processus bloquants et mise en place de plan d'action pour supporter la conception et la production",
        },
      },
      {
        key: 2044,
        text: {
          EN: "Implemented an internal tool to monitor production and to measure Key Performance Indicator",
          ES: "Implementación de un herramienta interno de gestión de producción y de medida de los Indicadores Clave de Rendimiento",
          FR: "Implémentation d'un outil interne de gestion de production et de mesure des Indicateurs Clé de Performance",
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
          EN: "Guided customers in their ERP SaaS solution implementation",
          ES: "Asistencia de los clientes durante la fase de implementación de la solución ERP",
          FR: "Assistance des clients pendant la phase d'implémentation de leur solution ERP",
        },
      },
      {
        key: 2052,
        text: {
          EN: "Produced technical specifications to create / improve solution functionalities",
          ES: "Producción de las especificaciónes technicas para créar / mejorar las funciónes de la solución",
          FR: "Producion des spécifications techniques pour créer / améliorer les fonctionalités de la solution",
        },
      },
      {
        key: 2053,
        text: {
          EN: "Implemented walkthrough programming HTML and CSS",
          ES: "Implementación tutoriales dinámicos con HTML y CSS",
          FR: "Implémentation de tutoriels dynamiques avec HTML et CSS",
        },
      },
      {
        key: 2054,
        text: {
          EN: "Troubleshot, investigated and created detailed reports about issues",
          ES: "Identificación de los bugs, investigación y redacción de informes de resolución detallados",
          FR: "Indentification des bugs, investigation et rédaction de rapports de résolution détaillés",
        },
      },
      {
        key: 2055,
        text: {
          EN: "Provided online instructions for users",
          ES: "Redacción de las instrucciónes de uso en línea",
          FR: "Rédaction des instructions d'utilisation en ligne",
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
    establishment: { EN: "Ideasoft", ES: "Ideasoft", FR: "Ideasoft" },
    location: { EN: "Remote", ES: "Remoto", FR: "Remote" },
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
      { key: 501 },
    ],
    code: "",
    link: "https://ideasoft.io/",
    details: [
      {
        key: 2061,
        text: {
          EN: "Solidity Developer on Bridge Mutual DEFI project",
          ES: "Desarolladora Solidity en el proyecto DEFI Bridge Mutual",
          FR: "Développeuse Solidity sur le projet DEFI Bridge Mutual",
        },
      },
      {
        key: 2062,
        text: {
          EN: "Solidity Developer on various NFT project",
          ES: "Desarolladora Solidity en varios proyectos NFT",
          FR: "Développeuse Solidity sur plusieurs projets NFT",
        },
      },
      {
        key: 2063,
        text: {
          EN: "Integration with DEFI protocols Aave, Compound & Yearn to generate yield",
          ES: "Integración de los protocolos DEFI Aave, Compound & Yearn para generar rendimiento",
          FR: "Intégration des protocols DEFI Aave, Compound & Yearn pour générer rendement",
        },
      },
      {
        key: 2064,
        text: {
          EN: "Securization of capital pools",
          ES: "Securización de los capital pools",
          FR: "Securisation des capital pools",
        },
      },
      {
        key: 2065,
        text: {
          EN: "Management of multichain deployment",
          ES: "Gestión de despliegue multichain",
          FR: "Gestion de déploiement mutichain",
        },
      },
      {
        key: 2066,
        text: {
          EN: "Development of encrypted voting system",
          ES: "Desarollo de un sistema de votos encriptados",
          FR: "Développement d'un système votes encryptés",
        },
      },
      {
        key: 2067,
        text: {
          EN: "Development of staking and rewarding contracts",
          ES: "Desarollo de contratos de staking y rewarding",
          FR: "Développement de contrats de staking et rewarding",
        },
      },
      {
        key: 2068,
        text: {
          EN: "Development of vesting platform",
          ES: "Desarollo una plataforma de vesting",
          FR: "Développement d'une plateforme de vesting",
        },
      },
      {
        key: 2069,
        text: {
          EN: "Random generation of NFT asset according to a ranking",
          ES: "Generación aleatoria de atributos NFT de acuerdo a un ranking",
          FR: "Generation aléatoire d'attibuts NFT en fonction d'un ranking",
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
          ES: "Juego de los 80s desarollado en JavaScript",
          FR: "Jeu des 80s développé en JavaScript",
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
          ES: "Aplicación React de GoogleFonts",
          FR: "Application React de GoogleFonts",
        },
      },
      {
        key: 3032,
        text: {
          EN: "Page designed with Bootstrap",
          ES: "Página diseñada con Bootstrap",
          FR: "Page designée avec Bootstrap",
        },
      },
      {
        key: 3033,
        text: {
          EN: "Fetch data from API GoogleFonts",
          ES: "Fetch de los datos desde API GoogleFonts",
          FR: "Fetch des données depuis API GoogleFonts",
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
          ES: "Aplicación React para organizarse diariamente",
          FR: "Aplication React pour s'organiser quotidiennement",
        },
      },
      {
        key: 3042,
        text: {
          EN: "Page designed with Bootstrap",
          ES: "Página diseñada con Bootstrap",
          FR: "Page designée avec Bootstrap",
        },
      },
    ],
  },
  {
    key: 305,
    title: { EN: "Mini Swap", ES: "Mini Swap", FR: "Mini Swap" },
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
    code: "https://github.com/solenemep/swap-back",
    link: "https://solenemep-swap.netlify.app/",
    img: "swap.png",
    details: [
      {
        key: 3051,
        text: {
          EN: "Token swaping dapp",
          ES: "Dapp de swap de tokens",
          FR: "Dapp de swap de tokens",
        },
      },
      {
        key: 3052,
        text: {
          EN: "Simplified version of UniSwap",
          ES: "Version simplificada de UniSwap",
          FR: "Version simplifiée de UniSwap",
        },
      },
      {
        key: 3053,
        text: {
          EN: "Create pools, add liquidity and swap tokens",
          ES: "Crear pools, añadir liquidez y swap tokens",
          FR: "Créer des pools, ajouter de la liquidité et swap tokens",
        },
      },
      {
        key: 3054,
        text: {
          EN: "Connected with MetaMask",
          ES: "Conectada con MetaMask",
          FR: "Connecté avec MetaMask",
        },
      },
    ],
  },
  {
    key: 306,
    title: {
      EN: "Auction Marketplace",
      ES: "Auction Marketplace",
      FR: "Auction Marketplace",
    },
    date: { EN: "September 2021", ES: "Septiembre 2021", FR: "Septembre 2021" },
    establishment: { EN: "", ES: "", FR: "" },
    location: { EN: "", ES: "", FR: "" },
    section: "portfolio",
    skills: [
      { key: 202 },
      { key: 203 },
      { key: 205 },
      { key: 207 },
      { key: 208 },
      { key: 210 },
    ],
    code: "https://github.com/solenemep/market-place-back",
    link: "",
    img: "",
    details: [
      {
        key: 3061,
        text: {
          EN: "NFT Marketplace with auction",
          ES: "Marketplace NFT con subasta",
          FR: "Marketplace NFT à l'encan",
        },
      },
      {
        key: 3062,
        text: {
          EN: "Lazy minting with EIP712 signature",
          ES: "Lazy minting con firma EIP712",
          FR: "Lazy minting avec signature EIP712",
        },
      },
      {
        key: 3063,
        text: {
          EN: "Use of wrapped ETH",
          ES: "Uso de wrapped ETH",
          FR: "Usage de wrapped ETH",
        },
      },
    ],
  },
  {
    key: 307,
    title: {
      EN: "Randomness template",
      ES: "Randomness template",
      FR: "Randomness template",
    },
    date: { EN: "November 2022", ES: "Noviembre 2022", FR: "Novembre 2022" },
    establishment: { EN: "", ES: "", FR: "" },
    location: { EN: "", ES: "", FR: "" },
    section: "portfolio",
    skills: [{ key: 203 }, { key: 205 }, { key: 207 }, { key: 208 }],
    code: "https://github.com/solenemep/randomness-template",
    link: "",
    img: "",
    details: [
      {
        key: 3071,
        text: {
          EN: "Library for random number generation in a specific range",
          ES: "Biblioteca de generación de numero aleatorio dentro de un rango especifico",
          FR: "Bibliothèque de génération de numéro aléatoire compris dans un segment spécifique",
        },
      },
    ],
  },
  {
    key: 308,
    title: {
      EN: "Upgradeable Registry template",
      ES: "Upgradeable Registry template",
      FR: "Upgradeable Registry template",
    },
    date: { EN: "December 2022", ES: "Diciembre 2022", FR: "Décembre 2022" },
    establishment: { EN: "", ES: "", FR: "" },
    location: { EN: "", ES: "", FR: "" },
    section: "portfolio",
    skills: [{ key: 203 }, { key: 205 }, { key: 207 }, { key: 208 }],
    code: "https://github.com/solenemep/upgradeable-registry-template",
    link: "",
    img: "",
    details: [
      {
        key: 3081,
        text: {
          EN: "Template of upgradeable contracts registry",
          ES: "Template de registry de contratos upgradeable",
          FR: "Template de registry de contrats upgradeable",
        },
      },
      {
        key: 3082,
        text: {
          EN: "Deployment and upgrade scripts and tests",
          ES: "Escriptos y pruebas de despliegue y upgrade",
          FR: "Scripts et tests de déploiement et upgrade",
        },
      },
    ],
  },
  {
    key: 309,
    title: {
      EN: "Vesting template",
      ES: "Vesting template",
      FR: "Vesting template",
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
    code: "https://github.com/solenemep/vesting-back",
    link: "",
    img: "",
    details: [
      {
        key: 3091,
        text: {
          EN: "Vesting plateform with 3 types of sales",
          ES: "Plataforma de vesting con 3 tipos de ventas",
          FR: "Plateforme de vesting avec 3 types de ventes",
        },
      },
      {
        key: 3092,
        text: {
          EN: "Cliff and release percentage at given date",
          ES: "Cliff y porcentaje distribuido a fecha dada",
          FR: "Cliff et pourcentage distribué à date donnée",
        },
      },
      {
        key: 3093,
        text: {
          EN: "Then, linear distribution claimable by user at any time",
          ES: "Despues, distribución linear reclamable a cualquier momento",
          FR: "Puis, distribution linéaire reclamable à tout moment",
        },
      },
      {
        key: 3094,
        text: {
          EN: "Tested with Hardhat and Foundry",
          ES: "Probado con Hardhat y Foundry",
          FR: "Testé avec Hardhat et Foundry",
        },
      },
    ],
  },
]
