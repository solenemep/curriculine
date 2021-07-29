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
    title: { EN: "Front", ES: "Front", FR: "Front" },
    items: [
      { key: 11, text: { EN: "HTML", ES: "HTML", FR: "HTML" } },
      { key: 12, text: { EN: "CSS", ES: "CSS", FR: "CSS" } },
      {
        key: 13,
        text: { EN: "Bootstrap", ES: "Bootstrap", FR: "Bootstrap" },
      },
      { key: 14, text: { EN: "React", ES: "React", FR: "React" } },
      {
        key: 15,
        text: { EN: "Chakra UI", ES: "Chakra UI", FR: "Chakra UI" },
      },
    ],
  },
  {
    key: 2,
    title: { EN: "Back", ES: "Back", FR: "Back" },
    items: [
      {
        key: 21,
        text: { EN: "JavaScript", ES: "JavaScript", FR: "JavaScript" },
      },
      { key: 22, text: { EN: "Node", ES: "Node", FR: "Node" } },
      { key: 23, text: { EN: "SQL", ES: "SQL", FR: "SQL" } },
      { key: 24, text: { EN: "Perl", ES: "Perl", FR: "Perl" } },
      { key: 25, text: { EN: "API", ES: "API", FR: "API" } },
    ],
  },

  {
    key: 3,
    title: { EN: "Blockchain", ES: "Blockchain", FR: "Blockchain" },
    items: [
      { key: 31, text: { EN: "Solidity", ES: "Solidity", FR: "Solidity" } },
      { key: 32, text: { EN: "Hardhat", ES: "Hardhat", FR: "Hardhat" } },
      { key: 33, text: { EN: "Web3", ES: "Web3", FR: "Web3" } },
      {
        key: 34,
        text: { EN: "OpenZepellin", ES: "OpenZepellin", FR: "OpenZepellin" },
      },
      { key: 35, text: { EN: "Ethers", ES: "Ethers", FR: "Ethers" } },
    ],
  },
  {
    key: 4,
    title: { EN: "Mathematics", ES: "Matématica", FR: "Mathématiques" },
    items: [
      {
        key: 41,
        text: { EN: "Aritmetic", ES: "Aritmética", FR: "Arithmétique" },
      },
      { key: 42, text: { EN: "Algebra", ES: "Álgebra", FR: "Algèbre" } },
      { key: 43, text: { EN: "Geometry", ES: "Geometría", FR: "Géométrie" } },
    ],
  },
  {
    key: 5,
    title: { EN: "Method", ES: "Método", FR: "Méthode" },
    items: [
      { key: 51, text: { EN: "Agil", ES: "Ágil", FR: "Agile" } },
      {
        key: 52,
        text: { EN: "Logistic", ES: "Logistica", FR: "Logistique" },
      },
      {
        key: 53,
        text: { EN: "Robotics", ES: "Robótica", FR: "Robotique" },
      },
    ],
  },
  {
    key: 6,
    title: { EN: "Tools", ES: "Heramientas", FR: "Outils" },
    items: [
      { key: 61, text: { EN: "JIRA", ES: "JIRA", FR: "JIRA" } },
      { key: 62, text: { EN: "SAP", ES: "SAP", FR: "SAP" } },
      { key: 63, text: { EN: "Odoo", ES: "Odoo", FR: "Odoo" } },
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
      EN: "Active filter ",
      ES: "Activar filtro ",
      FR: "Activer le filtre ",
    },
    inactive: {
      EN: "Inactive filter ",
      ES: "Desactivar filtro ",
      FR: "Désactiver le filtre ",
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
    EN: "Page link",
    ES: "Enlace de la página",
    FR: "Lien vers la page",
  },
}

export const main = [
  {
    key: 1,
    color: "teal",
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
    skills: [
      {
        key: 41,
        text: { EN: "Aritmetic", ES: "Aritmética", FR: "Arithmétique" },
      },
      {
        key: 42,
        text: { EN: "Algebra", ES: "Álgebra", FR: "Algèbre" },
      },
      {
        key: 43,
        text: { EN: "Geometry", ES: "Geometría", FR: "Géométrie" },
      },
    ],
    code: "",
    link: "",
    details: [],
  },
  /*
  {
    key: 2,
    color: "blue",
    title: {
      EN: "Worker in factory",
      ES: "Obrera en fábrica",
      FR: "Ouvrière en usine",
    },
    date: {
      EN: "July 2012 - August 2012",
      ES: "Julio 2012 - Agosto 2012",
      FR: "Juillet 2012 - Août 2012",
    },
    establishment: { EN: "D3 LLC", ES: "D3 LLC", FR: "D3 LLC" },
    location: {
      EN: "New York, USA",
      ES: "Nueva York, EE.UU",
      FR: "New York, États-Unis",
    },
    section: "experience",
    skills: [
      {
        key: 52,
        text: { EN: "Logistic", ES: "Logistica", FR: "Logistique" },
      },
    ],
    code: "",
    link: "",
    details: [
      {
        key: 21,
        text: {
          EN: "Worker in factoy for one month to english",
          ES: "Obrera en fábrica durante un mes para aprender al inglés",
          FR: "Ouvrière en usine pendant un mois pour apprendre l'anglais",
        },
      },
    ],
  },
  */
  {
    key: 3,
    color: "blue",
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
    skills: [
      { key: 51, text: { EN: "Agil", ES: "Ágil", FR: "Agile" } },
      {
        key: 52,
        text: { EN: "Logistic", ES: "Logistica", FR: "Logistique" },
      },
      {
        key: 53,
        text: { EN: "Robotics", ES: "Robótica", FR: "Robotique" },
      },
    ],
    code: "",
    link: "",
    details: [],
  },
  {
    key: 4,
    color: "teal",
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
    skills: [
      {
        key: 52,
        text: { EN: "Logistic", ES: "Logistica", FR: "Logistique" },
      },
      { key: 63, text: { EN: "SAP", ES: "SAP", FR: "SAP" } },
    ],
    github: "",
    code: "",
    details: [
      {
        key: 41,
        text: {
          EN: "Designed a logistic plan to integrate a new supply chain activity",
          ES: "Creación de un plano logístico para integrar una nueva actividad supply chain",
          FR: "Création d'un plan logistique afin d'intégrer une nouvelle activité supply chain",
        },
      },
      {
        key: 42,
        text: {
          EN: "Optimized goods picking & packing processes",
          ES: "Optimización de los procesos de recogida et preparación de la mercancía",
          FR: "Optimisation des processus de collecte et préparation de la marchandise",
        },
      },
    ],
  },
  {
    key: 5,
    color: "cyan",
    title: {
      EN: "MSc Information Technology & Process Engineer",
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
    skills: [
      { key: 11, text: { EN: "HTML", ES: "HTML", FR: "HTML" } },
      { key: 12, text: { EN: "CSS", ES: "CSS", FR: "CSS" } },
      { key: 23, text: { EN: "SQL", ES: "SQL", FR: "SQL" } },
      { key: 24, text: { EN: "Perl", ES: "Perl", FR: "Perl" } },
      { key: 51, text: { EN: "Agil", ES: "Ágil", FR: "Agile" } },
    ],
    code: "",
    link: "",
    details: [],
  },
  {
    key: 6,
    color: "blue",
    title: {
      EN: "Functional & Technical Consultant",
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
      { key: 23, text: { EN: "SQL", ES: "SQL", FR: "SQL" } },
      { key: 51, text: { EN: "Agil", ES: "Ágil", FR: "Agile" } },
      { key: 61, text: { EN: "JIRA", ES: "JIRA", FR: "JIRA" } },
      { key: 64, text: { EN: "Odoo", ES: "Odoo", FR: "Odoo" } },
    ],
    code: "",
    link: "https://trobz.com/about",
    details: [
      {
        key: 61,
        text: {
          EN: "Analysed functional specification to match customer requirements",
          ES: "Análisis de las especificaciónes funcionales para responder a las necesidades del cliente",
          FR: "Analyse des spécifications fonctionnelles pour répondre au besoin client",
        },
      },
      {
        key: 62,
        text: {
          EN: "Coordinated projects and assigned tasks to developers and QA testing unit",
          ES: "Coordinación de proyectos y asignación de las tareas a los equipos de desarrolladores y testadores",
          FR: "Coordination de projet et affectation des tâches aux équipes de développeurs et testeurs",
        },
      },
      {
        key: 63,
        text: {
          EN: "Supported and trained customers during the implementation and exploitation stage",
          ES: "Soporte y formación cliente durante las etapas de implementación y de explotación",
          FR: "Support et formation client pendant les étapes d'implémentation et d'exploitation",
        },
      },
      {
        key: 64,
        text: {
          EN: "Optimized internal management tool for resources workload monitoring",
          ES: "Optimización del herramienta de gestión interno para controlar la carga de trabajo de los empleados",
          FR: "Optimisation de l'outil de management interne pour contrôler la charge de travail des employés",
        },
      },
    ],
  },
  {
    key: 7,
    color: "teal",
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
    skills: [
      { key: 51, text: { EN: "Agil", ES: "Ágil", FR: "Agile" } },
      {
        key: 52,
        text: { EN: "Logistic", ES: "Logistica", FR: "Logistique" },
      },
      { key: 61, text: { EN: "JIRA", ES: "JIRA", FR: "JIRA" } },
    ],
    code: "",
    link: "",
    details: [
      {
        key: 71,
        text: {
          EN: "Managed the industrialization of two production lines",
          ES: "Dirección de la industrialización de dos linéas de producción",
          FR: "Direction de l'industralisation de deux lignes de production",
        },
      },
      {
        key: 72,
        text: {
          EN: "Animated progress meetings to liaise management and operational teams",
          ES: "Animación de reuniónes para vincular los equipos de management y los equipos operacionales",
          FR: "Animation de réunions pour lier les équipes de management et les équipes opérationnelles",
        },
      },
      {
        key: 73,
        text: {
          EN: "Identified process issues to establish action plans supporting engineering production and exploitation unit",
          ES: "Identificación de los procesos bloqueantes y implementación de un plan de acciónes para soportar la concepción y la producción",
          FR: "Identification des processus bloquants et mise en place de plan d'action pour supporter la conception et la production",
        },
      },
      {
        key: 74,
        text: {
          EN: "Implemented an internal tool to monitor production and to measure Key Performance Indicator",
          ES: "Implementación de un herramienta interno de gestión de producción y de medida de los Indicadores Clave de Rendimiento",
          FR: "Implémentation d'un outil interne de gestion de production et de mesure des Indicateurs Clé de Performance",
        },
      },
    ],
  },
  {
    key: 8,
    color: "cyan",
    title: {
      EN: "Technical Product Specialist",
      ES: "Especialista Tecnico de Producto",
      FR: "Spécialiste Technique de Produit",
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
    skills: [
      { key: 23, text: { EN: "SQL", ES: "SQL", FR: "SQL" } },
      { key: 51, text: { EN: "Agil", ES: "Ágil", FR: "Agile" } },
      { key: 61, text: { EN: "JIRA", ES: "JIRA", FR: "JIRA" } },
    ],
    code: "",
    link: "https://www.fitnetmanager.com/en/home-en/",
    details: [
      {
        key: 81,
        text: {
          EN: "Guided customers in their ERP SaaS solution implementation",
          ES: "Asistencia de los clientes durante la fase de implementación de la solución ERP",
          FR: "Assistance des clients pendant la phase d'implémentation de leur solution ERP",
        },
      },
      {
        key: 82,
        text: {
          EN: "Produced technical specifications to create / improve solution functionalities",
          ES: "Producción de las especificaciónes technicas para créar / mejorar las funciónes de la solución",
          FR: "Producion des spécifications techniques pour créer / améliorer les fonctionalités de la solution",
        },
      },
      {
        key: 83,
        text: {
          EN: "Implemented walkthrough programming HTML and CSS",
          ES: "Implementación tutoriales dinámicos con HTML y CSS",
          FR: "Implémentation de tutoriels dynamiques avec HTML et CSS",
        },
      },
      {
        key: 84,
        text: {
          EN: "Troubleshot, investigated and created detailed reports about issues",
          ES: "Identificación de los bugs, investigación y redacción de informes de resolución detallados",
          FR: "Indentification des bugs, investigation et rédaction de rapports de résolution détaillés",
        },
      },
      {
        key: 65,
        text: {
          EN: "Provided online instructions for users",
          ES: "Redacción de las instrucciónes de uso en línea",
          FR: "Rédaction des instructions d'utilisation en ligne",
        },
      },
    ],
  },
  {
    key: 9,
    color: "blue",
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
      { key: 11, text: { EN: "HTML", ES: "HTML", FR: "HTML" } },
      { key: 12, text: { EN: "CSS", ES: "CSS", FR: "CSS" } },
      {
        key: 13,
        text: { EN: "Bootstrap", ES: "Bootstrap", FR: "Bootstrap" },
      },
      { key: 14, text: { EN: "React", ES: "React", FR: "React" } },
      {
        key: 15,
        text: { EN: "Chakra UI", ES: "Chakra UI", FR: "Chakra UI" },
      },

      {
        key: 21,
        text: { EN: "JavaScript", ES: "JavaScript", FR: "JavaScript" },
      },
      { key: 22, text: { EN: "Node", ES: "Node", FR: "Node" } },

      {
        key: 31,
        text: { EN: "Solidity", ES: "Solidity", FR: "Solidity" },
      },
      {
        key: 32,
        text: { EN: "Hardhat", ES: "Hardhat", FR: "Hardhat" },
      },
      { key: 33, text: { EN: "Web3", ES: "Web3", FR: "Web3" } },
      {
        key: 34,
        text: {
          EN: "OpenZepellin",
          ES: "OpenZepellin",
          FR: "OpenZepellin",
        },
      },
      { key: 35, text: { EN: "Ethers", ES: "Ethers", FR: "Ethers" } },
    ],
    code: "",
    link: "https://alyra.fr/",
    details: [],
  },
  {
    key: 10,
    color: "teal",
    title: { EN: "Arkanoid", ES: "Arkanoid", FR: "Arkanoid" },
    date: { EN: "March 2021", ES: "Marzo 2021", FR: "Mars 2021" },
    establishment: { EN: "", ES: "", FR: "" },
    location: { EN: "", ES: "", FR: "" },
    section: "portfolio",
    skills: [
      {
        key: 21,
        text: { EN: "JavaScript", ES: "JavaScript", FR: "JavaScript" },
      },
      { key: 22, text: { EN: "Node", ES: "Node", FR: "Node" } },
    ],
    code: "https://github.com/solenemhep/arkanoid/",
    link: "https://solenemhep-arkanoid.netlify.app/",
    img: "arkanoid.png",
    details: [
      {
        key: 101,
        text: {
          EN: "Simple game developped in JavaScript",
          ES: "Juego simple desarollado en JavaScript",
          FR: "Jeu simple développé en JavaScript",
        },
      },
    ],
  },
  {
    key: 11,
    color: "cyan",
    title: { EN: "Alyra Mag", ES: "Alyra Mag", FR: "Alyra Mag" },
    date: { EN: "March 2021", ES: "Marzo 2021", FR: "Mars 2021" },
    establishment: { EN: "", ES: "", FR: "" },
    location: { EN: "", ES: "", FR: "" },
    section: "portfolio",
    skills: [
      { key: 11, text: { EN: "HTML", ES: "HTML", FR: "HTML" } },
      { key: 12, text: { EN: "CSS", ES: "CSS", FR: "CSS" } },
      {
        key: 13,
        text: { EN: "Bootstrap", ES: "Bootstrap", FR: "Bootstrap" },
      },
    ],
    code: "https://github.com/solenemhep/alyra-mag",
    link: "https://solenemhep-alyra-mag.netlify.app/",
    img: "alyramag.png",
    details: [
      {
        key: 111,
        text: {
          EN: "Page designed with Bootstrap",
          ES: "Página diseñada con Bootstrap",
          FR: "Page conçue avec Bootstrap",
        },
      },
    ],
  },
  {
    key: 12,
    color: "blue",
    title: { EN: "Hangman", ES: "Hangman", FR: "Hangman" },
    date: { EN: "April 2021", ES: "Abril 2021", FR: "Avril 2021" },
    establishment: { EN: "", ES: "", FR: "" },
    location: { EN: "", ES: "", FR: "" },
    section: "portfolio",
    skills: [
      {
        key: 21,
        text: { EN: "JavaScript", ES: "JavaScript", FR: "JavaScript" },
      },
      { key: 22, text: { EN: "Node", ES: "Node", FR: "Node" } },
    ],
    code: "https://github.com/solenemhep/hangman",
    link: "",
    img: "hangman.png",
    details: [
      {
        key: 121,
        text: {
          EN: "Node & JavaScript hangman game",
          ES: "Node & Javascript juego del ahorcado",
          FR: "Node & Javascript jeu du pendu",
        },
      },
    ],
  },
  {
    key: 13,
    color: "cyan",
    title: { EN: "Monty Hall", ES: "Monty Hall", FR: "Monty Hall" },
    date: { EN: "April 2021", ES: "Abril 2021", FR: "Avril 2021" },
    establishment: { EN: "", ES: "", FR: "" },
    location: { EN: "", ES: "", FR: "" },
    section: "portfolio",
    skills: [
      {
        key: 21,
        text: { EN: "JavaScript", ES: "JavaScript", FR: "JavaScript" },
      },
      { key: 22, text: { EN: "Node", ES: "Node", FR: "Node" } },
    ],
    code: "https://github.com/solenemhep/monty-hall",
    link: "",
    img: "montyhall.png",
    details: [
      {
        key: 131,
        text: {
          EN: "Node & JavaScript Monty-Hall game",
          ES: "Node & Javascript juego del Monty-Hall",
          FR: "Node & Javascript jeu du Monty-Hall",
        },
      },
    ],
  },
  {
    key: 14,
    color: "teal",
    title: { EN: "Weather App", ES: "App Météo", FR: "App Météo" },
    date: { EN: "April 2021", ES: "Abril 2021", FR: "Avril 2021" },
    establishment: { EN: "", ES: "", FR: "" },
    location: { EN: "", ES: "", FR: "" },
    section: "portfolio",
    skills: [
      { key: 11, text: { EN: "HTML", ES: "HTML", FR: "HTML" } },
      { key: 12, text: { EN: "CSS", ES: "CSS", FR: "CSS" } },
      {
        key: 13,
        text: { EN: "Bootstrap", ES: "Bootstrap", FR: "Bootstrap" },
      },
      { key: 14, text: { EN: "React", ES: "React", FR: "React" } },
      {
        key: 21,
        text: { EN: "JavaScript", ES: "JavaScript", FR: "JavaScript" },
      },
      { key: 25, text: { EN: "API", ES: "API", FR: "API" } },
    ],
    code: "https://github.com/solenemhep/weather-app",
    link: "https://solenemhep-weather-app.netlify.app/",
    img: "weatherapp.png",
    details: [
      {
        key: 141,
        text: {
          EN: "React weather application",
          ES: "Aplicación React de meteo ",
          FR: "Application React de météo",
        },
      },
      {
        key: 142,
        text: {
          EN: "Fetch data from API",
          ES: "Fetch de los datos desde API",
          FR: "Fetch des données depuis API",
        },
      },
    ],
  },
  {
    key: 15,
    color: "blue",
    title: { EN: "Gradients", ES: "Gradients", FR: "Gradients" },
    date: { EN: "April 2021", ES: "Abril 2021", FR: "Avril 2021" },
    establishment: { EN: "", ES: "", FR: "" },
    location: { EN: "", ES: "", FR: "" },
    section: "portfolio",
    skills: [
      { key: 11, text: { EN: "HTML", ES: "HTML", FR: "HTML" } },
      { key: 12, text: { EN: "CSS", ES: "CSS", FR: "CSS" } },
      {
        key: 13,
        text: { EN: "Bootstrap", ES: "Bootstrap", FR: "Bootstrap" },
      },
      { key: 14, text: { EN: "React", ES: "React", FR: "React" } },
      {
        key: 21,
        text: { EN: "JavaScript", ES: "JavaScript", FR: "JavaScript" },
      },
      { key: 25, text: { EN: "API", ES: "API", FR: "API" } },
    ],
    code: "https://github.com/solenemhep/gradients-fetch",
    link: "https://solenemhep-gradients-fetch.netlify.app/",
    img: "gradientsfetch.png",
    details: [
      {
        key: 151,
        text: {
          EN: "React application displaying gradient list",
          ES: "Aplicación React de gradientes de color",
          FR: "Application React de gradients de couleur",
        },
      },
      {
        key: 152,
        text: {
          EN: "Page designed with Bootstrap",
          ES: "Página diseñada con Bootstrap",
          FR: "Page conçue avec Bootstrap",
        },
      },
      {
        key: 153,
        text: {
          EN: "GET & POST data from API",
          ES: "GET & POST de los datos desde API",
          FR: "GET & POST des données depuis API",
        },
      },
    ],
  },
  {
    key: 16,
    color: "cyan",
    title: { EN: "Google Fonts", ES: "Google Fonts", FR: "Google Fonts" },
    date: { EN: "April 2021", ES: "Abril 2021", FR: "Avril 2021" },
    establishment: { EN: "", ES: "", FR: "" },
    location: { EN: "", ES: "", FR: "" },
    section: "portfolio",
    skills: [
      { key: 11, text: { EN: "HTML", ES: "HTML", FR: "HTML" } },
      { key: 12, text: { EN: "CSS", ES: "CSS", FR: "CSS" } },
      {
        key: 13,
        text: { EN: "Bootstrap", ES: "Bootstrap", FR: "Bootstrap" },
      },
      { key: 14, text: { EN: "React", ES: "React", FR: "React" } },
      {
        key: 21,
        text: { EN: "JavaScript", ES: "JavaScript", FR: "JavaScript" },
      },
      { key: 25, text: { EN: "API", ES: "API", FR: "API" } },
    ],
    code: "https://github.com/solenemhep/googlefonts-widget",
    link: "https://solenemhep-googlefonts.netlify.app/",
    img: "googlefonts.png",
    details: [
      {
        key: 161,
        text: {
          EN: "React application displaying GoogleFonts",
          ES: "Aplicación React de GoogleFonts",
          FR: "Application React de GoogleFonts",
        },
      },
      {
        key: 162,
        text: {
          EN: "Page designed with Bootstrap",
          ES: "Página diseñada con Bootstrap",
          FR: "Page conçue avec Bootstrap",
        },
      },
      {
        key: 163,
        text: {
          EN: "Fetch data from API GoogleFonts",
          ES: "Fetch de los datos desde API GoogleFonts",
          FR: "Fetch des données depuis API GoogleFonts",
        },
      },
    ],
  },
  {
    key: 17,
    color: "teal",
    title: { EN: "Taties", ES: "Taties", FR: "Taties" },
    date: { EN: "May 2021", ES: "Mayo 2021", FR: "Mai 2021" },
    establishment: { EN: "", ES: "", FR: "" },
    location: { EN: "", ES: "", FR: "" },
    section: "portfolio",
    skills: [
      { key: 11, text: { EN: "HTML", ES: "HTML", FR: "HTML" } },
      { key: 12, text: { EN: "CSS", ES: "CSS", FR: "CSS" } },
      {
        key: 13,
        text: { EN: "Bootstrap", ES: "Bootstrap", FR: "Bootstrap" },
      },
      { key: 14, text: { EN: "React", ES: "React", FR: "React" } },
      {
        key: 21,
        text: { EN: "JavaScript", ES: "JavaScript", FR: "JavaScript" },
      },
    ],
    code: "https://github.com/solenemhep/taties-app",
    link: "https://solenemhep-taties.netlify.app/",
    img: "taties.png",
    details: [
      {
        key: 171,
        text: {
          EN: "React application to organize",
          ES: "Aplicación React para organizarse",
          FR: "Aplication React pour s'organiser",
        },
      },
      {
        key: 172,
        text: {
          EN: "Page designed with Bootstrap",
          ES: "Página diseñada con Bootstrap",
          FR: "Page conçue avec Bootstrap",
        },
      },
    ],
  },
  {
    key: 18,
    color: "blue",
    title: { EN: "StarWars API", ES: "StarWars API", FR: "StarWars API" },
    date: { EN: "June 2021", ES: "Junio 2021", FR: "Juin 2021" },
    establishment: { EN: "", ES: "", FR: "" },
    location: { EN: "", ES: "", FR: "" },
    section: "portfolio",
    skills: [
      { key: 11, text: { EN: "HTML", ES: "HTML", FR: "HTML" } },
      { key: 12, text: { EN: "CSS", ES: "CSS", FR: "CSS" } },
      {
        key: 13,
        text: { EN: "Bootstrap", ES: "Bootstrap", FR: "Bootstrap" },
      },
      { key: 14, text: { EN: "React", ES: "React", FR: "React" } },
      {
        key: 21,
        text: { EN: "JavaScript", ES: "JavaScript", FR: "JavaScript" },
      },
      { key: 25, text: { EN: "API", ES: "API", FR: "API" } },
    ],
    code: "https://github.com/solenemhep/starwars-api",
    link: "https://solenemhep-starwars-api.netlify.app/",
    img: "starwars.png",
    details: [
      {
        key: 181,
        text: {
          EN: "React application referencing StarWars universe",
          ES: "Aplicación React referenciando StarWars universo",
          FR: "Application React référençant l'univers StarWars",
        },
      },
      {
        key: 182,
        text: {
          EN: "Page designed with Bootstrap",
          ES: "Página diseñada con Bootstrap",
          FR: "Page conçue avec Bootstrap",
        },
      },
      {
        key: 183,
        text: {
          EN: "Fetch data from API",
          ES: "Fetch de los datos desde API",
          FR: "Fetch des données depuis API",
        },
      },
    ],
  },
  {
    key: 19,
    color: "cyan",
    title: { EN: "AlyraKit", ES: "AlyraKit", FR: "AlyraKit" },
    date: { EN: "June 2021", ES: "Junio 2021", FR: "Juin 2021" },
    establishment: { EN: "", ES: "", FR: "" },
    location: { EN: "", ES: "", FR: "" },
    section: "portfolio",
    skills: [
      { key: 11, text: { EN: "HTML", ES: "HTML", FR: "HTML" } },
      { key: 12, text: { EN: "CSS", ES: "CSS", FR: "CSS" } },
      { key: 14, text: { EN: "React", ES: "React", FR: "React" } },
      {
        key: 15,
        text: { EN: "Chakra UI", ES: "Chakra UI", FR: "Chakra UI" },
      },
      {
        key: 21,
        text: { EN: "JavaScript", ES: "JavaScript", FR: "JavaScript" },
      },
    ],
    code: "https://github.com/solenemhep/alyrakit",
    link: "https://solenemhep-alyrakit.netlify.app/",
    img: "alyrakit.png",
    details: [
      {
        key: 191,
        text: {
          EN: "Page designed with Chakra UI",
          ES: "Página diseñada con Chakra UI",
          FR: "Page conçue avec Chakra UI",
        },
      },
    ],
  },
  {
    key: 20,
    color: "teal",
    title: {
      EN: "Faucet",
      ES: "Faucet",
      FR: "Faucet",
    },
    date: { EN: "June 2021", ES: "Junio 2021", FR: "Juin 2021" },
    establishment: { EN: "", ES: "", FR: "" },
    location: { EN: "", ES: "", FR: "" },
    section: "portfolio",
    skills: [
      { key: 14, text: { EN: "React", ES: "React", FR: "React" } },
      {
        key: 15,
        text: { EN: "Chakra UI", ES: "Chakra UI", FR: "Chakra UI" },
      },
      {
        key: 21,
        text: { EN: "JavaScript", ES: "JavaScript", FR: "JavaScript" },
      },
      { key: 31, text: { EN: "Solidity", ES: "Solidity", FR: "Solidity" } },
      { key: 32, text: { EN: "Hardhat", ES: "Hardhat", FR: "Hardhat" } },
      { key: 33, text: { EN: "Web3", ES: "Web3", FR: "Web3" } },
      {
        key: 34,
        text: { EN: "OpenZepellin", ES: "OpenZepellin", FR: "OpenZepellin" },
      },
      { key: 35, text: { EN: "Ethers", ES: "Ethers", FR: "Ethers" } },
    ],
    code: "https://github.com/solenemhep/faucet-back",
    link: "https://solenemhep-faucet.netlify.app/",
    img: "faucet.png",
    details: [
      {
        key: 201,
        text: {
          EN: "Ethereum application compatible with MetaMask on Kovan network",
          ES: "Aplicación Ethereum compatible con MetaMask en la red Kovan",
          FR: "Application Ethereum compatible avec MetaMask sur le réseau Kovan",
        },
      },
      {
        key: 202,
        text: {
          EN: "Smart Contract base on ERC20 Token OpenZepellin",
          ES: "Contrato Intelligente basado sobre el Token ERC20 de OpenZepellin",
          FR: "Contrat Intelligent basé sur le Token ERC20 d'OpenZepellin",
        },
      },
      {
        key: 203,
        text: {
          EN: "Faucet application to get 100 free tokens each 3 days",
          ES: "Aplicación Faucet para obtener 100 tokens gratuito cada 3 días",
          FR: "Application Faucet pour obtenir 100 tokens gratuits tous les 3 jours",
        },
      },
    ],
  },
  {
    key: 21,
    color: "blue",
    title: {
      EN: "ICO Calculator",
      ES: "ICO Calculadora",
      FR: "ICO Calculatrice",
    },
    date: { EN: "June 2021", ES: "Junio 2021", FR: "Juin 2021" },
    establishment: { EN: "", ES: "", FR: "" },
    location: { EN: "", ES: "", FR: "" },
    section: "portfolio",
    skills: [
      { key: 14, text: { EN: "React", ES: "React", FR: "React" } },
      {
        key: 15,
        text: { EN: "Chakra UI", ES: "Chakra UI", FR: "Chakra UI" },
      },
      {
        key: 21,
        text: { EN: "JavaScript", ES: "JavaScript", FR: "JavaScript" },
      },
      { key: 31, text: { EN: "Solidity", ES: "Solidity", FR: "Solidity" } },
      { key: 32, text: { EN: "Hardhat", ES: "Hardhat", FR: "Hardhat" } },
      { key: 33, text: { EN: "Web3", ES: "Web3", FR: "Web3" } },
      {
        key: 34,
        text: { EN: "OpenZepellin", ES: "OpenZepellin", FR: "OpenZepellin" },
      },
      { key: 35, text: { EN: "Ethers", ES: "Ethers", FR: "Ethers" } },
    ],
    code: "https://github.com/solenemhep/ico-calc-back",
    link: "https://solenemhep-ico-calc.netlify.app/",
    img: "icocalc.png",
    details: [
      {
        key: 211,
        text: {
          EN: "Ethereum application compatible with MetaMask on Kovan network",
          ES: "Aplicación Ethereum compatible con MetaMask en la red Kovan",
          FR: "Application Ethereum compatible avec MetaMask sur le réseau Kovan",
        },
      },
      {
        key: 212,
        text: {
          EN: "Smart Contract base on ERC20 Token OpenZepellin",
          ES: "Contrato Intelligente basado sobre el Token ERC20 de OpenZepellin",
          FR: "Contrat Intelligent basé sur le Token ERC20 d'OpenZepellin",
        },
      },
      {
        key: 213,
        text: {
          EN: "ICO & Calculator application to buy tokens and spend them calculating",
          ES: "Aplicación ICO & Calculadora para comprar tokens y gastarlos calculando",
          FR: "Application ICO & Calculatrice pour acheter des tokens et les dépenser en calculant",
        },
      },
    ],
  },
  {
    key: 22,
    color: "cyan",
    title: {
      EN: "Smart Words",
      ES: "Smart Words",
      FR: "Smart Words",
    },
    date: { EN: "June 2021", ES: "Junio 2021", FR: "Juin 2021" },
    establishment: { EN: "", ES: "", FR: "" },
    location: { EN: "", ES: "", FR: "" },
    section: "portfolio",
    skills: [
      { key: 14, text: { EN: "React", ES: "React", FR: "React" } },
      {
        key: 15,
        text: { EN: "Chakra UI", ES: "Chakra UI", FR: "Chakra UI" },
      },
      {
        key: 21,
        text: { EN: "JavaScript", ES: "JavaScript", FR: "JavaScript" },
      },
      { key: 31, text: { EN: "Solidity", ES: "Solidity", FR: "Solidity" } },
      { key: 32, text: { EN: "Hardhat", ES: "Hardhat", FR: "Hardhat" } },
      { key: 33, text: { EN: "Web3", ES: "Web3", FR: "Web3" } },
      {
        key: 34,
        text: { EN: "OpenZepellin", ES: "OpenZepellin", FR: "OpenZepellin" },
      },
      { key: 35, text: { EN: "Ethers", ES: "Ethers", FR: "Ethers" } },
    ],
    code: "https://github.com/solenemhep/smart-words-back",
    link: "https://solenemhep-smartwords.netlify.app/",
    img: "smartwords.png",
    details: [
      {
        key: 221,
        text: {
          EN: "Ethereum application compatible with MetaMask on Kovan network",
          ES: "Aplicación Ethereum compatible con MetaMask en la red Kovan",
          FR: "Application Ethereum compatible avec MetaMask sur le réseau Kovan",
        },
      },
      {
        key: 222,
        text: {
          EN: "Smart Contract based on ERC721 Token OpenZepellin",
          ES: "Contrato Intelligente basado sobre el Token ERC721 de OpenZepellin",
          FR: "Contrat Intelligent basé sur le Token ERC721 d'OpenZepellin",
        },
      },
      {
        key: 223,
        text: {
          EN: "Token has a unique text content identified with hash",
          ES: "El Token tiene un contenido texto único indentificado con un hash",
          FR: "Le Token a un contenu texte unique identifié avec un hash",
        },
      },
    ],
  },
  /*
  {
    key: 23,
    color: "teal",
    title: {
      EN: "Collateral Token",
      ES: "Collateral Token",
      FR: "Collateral Token",
    },
    date: { EN: "July 2021", ES: "Julio 2021", FR: "Juillet 2021" },
    establishment: { EN: "", ES: "", FR: "" },
    location: { EN: "", ES: "", FR: "" },
    section: "portfolio",
    skills: [
      { key: 14, text: { EN: "React", ES: "React", FR: "React" } },
      {
        key: 15,
        text: { EN: "Chakra UI", ES: "Chakra UI", FR: "Chakra UI" },
      },
      {
        key: 21,
        text: { EN: "JavaScript", ES: "JavaScript", FR: "JavaScript" },
      },
      { key: 31, text: { EN: "Solidity", ES: "Solidity", FR: "Solidity" } },
      { key: 32, text: { EN: "Hardhat", ES: "Hardhat", FR: "Hardhat" } },
      { key: 33, text: { EN: "Web3", ES: "Web3", FR: "Web3" } },
      {
        key: 34,
        text: { EN: "OpenZepellin", ES: "OpenZepellin", FR: "OpenZepellin" },
      },
      { key: 35, text: { EN: "Ethers", ES: "Ethers", FR: "Ethers" } },
    ],
    code: "https://github.com/solenemhep/collateral-token-back",
    link: "",
    img: "nada.png",
    details: [
      {
        key: 231,
        text: {
          EN: "detail alyra en 1",
          ES: "detail alyra es 1",
          FR: "detail alyra fr 1",
        },
      },
      {
        key: 232,
        text: {
          EN: "detail alyra en 2",
          ES: "detail alyra es 2",
          FR: "detail alyra fr 2",
        },
      },
      {
        key: 233,
        text: {
          EN: "detail alyra en 2",
          ES: "detail alyra es 2",
          FR: "detail alyra fr 2",
        },
      },
    ],
  },
  {
    key: 24,
    color: "cyan",
    title: {
      EN: "Login",
      ES: "Login",
      FR: "Login",
    },
    date: { EN: "July 2021", ES: "Julio 2021", FR: "Juillet 2021" },
    establishment: { EN: "", ES: "", FR: "" },
    location: { EN: "", ES: "", FR: "" },
    section: "portfolio",
    skills: [
      { key: 14, text: { EN: "React", ES: "React", FR: "React" } },
      {
        key: 15,
        text: { EN: "Chakra UI", ES: "Chakra UI", FR: "Chakra UI" },
      },
      {
        key: 21,
        text: { EN: "JavaScript", ES: "JavaScript", FR: "JavaScript" },
      },
      { key: 22, text: { EN: "Node", ES: "Node", FR: "Node" } },
      { key: 23, text: { EN: "SQL", ES: "SQL", FR: "SQL" } },
      { key: 25, text: { EN: "API", ES: "API", FR: "API" } },
    ],
    code: "https://github.com/solenemhep/login-back",
    link: "",
    img: "nada.png",
    details: [
      {
        key: 241,
        text: {
          EN: "detail alyra en 1",
          ES: "detail alyra es 1",
          FR: "detail alyra fr 1",
        },
      },
      {
        key: 242,
        text: {
          EN: "detail alyra en 2",
          ES: "detail alyra es 2",
          FR: "detail alyra fr 2",
        },
      },
      {
        key: 243,
        text: {
          EN: "detail alyra en 2",
          ES: "detail alyra es 2",
          FR: "detail alyra fr 2",
        },
      },
    ],
  },
  */
]
