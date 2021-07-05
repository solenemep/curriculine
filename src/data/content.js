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
  EN: "Choose the section",
  ES: "Elegir la sección",
  FR: "Choisir la section",
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
        text: { EN: "Robotics", ES: "Robotica", FR: "Robotique" },
      },
    ],
  },
  {
    key: 6,
    title: { EN: "Tools", ES: "Heramientas", FR: "Outils" },
    items: [
      { key: 61, text: { EN: "JIRA", ES: "JIRA", FR: "JIRA" } },
      { key: 62, text: { EN: "Trello", ES: "Trello", FR: "Trello" } },
      { key: 63, text: { EN: "SAP", ES: "SAP", FR: "SAP" } },
      { key: 64, text: { EN: "Odoo", ES: "Odoo", FR: "Odoo" } },
    ],
  },
  {
    key: 7,
    title: { EN: "Langagues", ES: "Idiomas", FR: "Langues" },
    items: [
      { key: 71, text: { EN: "English", ES: "Inglés", FR: "Anglais" } },
      { key: 72, text: { EN: "Spanish", ES: "Español", FR: "Espagnol" } },
      { key: 73, text: { EN: "French", ES: "Francés", FR: "Français" } },
    ],
  },
]

export const filterSkill = {
  EN: "Filter by skills",
  ES: "Filtrar por habilidad",
  FR: "Filtrer par compétence",
}

export const cardLinks = {
  code: {
    EN: "View source code",
    ES: "Ver el codigo fuente",
    FR: "Voir le code source",
  },
  link: {
    EN: "Page link",
    ES: "Enlace de la pagina",
    FR: "Lien vers le page",
  },
}

export const main = [
  {
    key: 1,
    color: "green",
    title: {
      EN: "Undergraduate intensive course in Mathematics & Physics",
      ES: "Curso de Matemáticas & Física",
      FR: "Cours de Mathématiques & Physique MPSI/MP",
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
  {
    key: 2,
    color: "pink",
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
      { key: 71, text: { EN: "English", ES: "Inglés", FR: "Anglais" } },
    ],
    code: "",
    link: "",
    details: [
      {
        key: 21,
        text: {
          EN: "",
          ES: "",
          FR: "",
        },
      },
      {
        key: 22,
        text: {
          EN: "",
          ES: "",
          FR: "",
        },
      },
      {
        key: 23,
        text: {
          EN: "",
          ES: "",
          FR: "",
        },
      },
    ],
  },
  {
    key: 3,
    color: "red",
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
        text: { EN: "Robotics", ES: "Robotica", FR: "Robotique" },
      },
    ],
    code: "",
    link: "",
    details: [],
  },
  {
    key: 4,
    color: "green",
    title: {
      EN: "Logistic analyst",
      ES: "Analista logistica",
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
          ES: "",
          FR: "",
        },
      },
      {
        key: 42,
        text: {
          EN: "Optimized picking & packing processes",
          ES: "",
          FR: "",
        },
      },
      {
        key: 43,
        text: {
          EN: "",
          ES: "",
          FR: "",
        },
      },
    ],
  },
  {
    key: 5,
    color: "cyan",
    title: {
      EN: "MSC Information Technology & Process Engineering",
      ES: "MSC Ingenería de los Sistemas de Información & Procesos",
      FR: "MSC Génie des Sysèmes d'Information & Processus",
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
      { key: 24, text: { EN: "Perl", ES: "Perl", FR: "Perl" } },
      { key: 51, text: { EN: "Agil", ES: "Ágil", FR: "Agile" } },
    ],
    code: "",
    link: "",
    details: [],
  },
  {
    key: 6,
    color: "cyan",
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
      { key: 71, text: { EN: "English", ES: "Inglés", FR: "Anglais" } },
    ],
    code: "",
    link: "https://trobz.com/about",
    details: [
      {
        key: 61,
        text: {
          EN: "Guided customer in their ERP SaaS solution implementation",
          ES: "",
          FR: "",
        },
      },
      {
        key: 62,
        text: {
          EN: "Produced specifications improving solution functionalities",
          ES: "",
          FR: "",
        },
      },
      {
        key: 63,
        text: {
          EN: "Implemented walkthrough programming HTML and CSS",
          ES: "",
          FR: "",
        },
      },
      {
        key: 64,
        text: {
          EN: "Troubleshot, investigated and created detailed reports about issues",
          ES: "",
          FR: "",
        },
      },
      {
        key: 65,
        text: {
          EN: "Provided online instruction for users",
          ES: "",
          FR: "",
        },
      },
    ],
  },
  {
    key: 7,
    color: "yellow",
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
          ES: "",
          FR: "",
        },
      },
      {
        key: 72,
        text: {
          EN: "Animated progress meetings to liaise management and operational teams",
          ES: "",
          FR: "",
        },
      },
      {
        key: 73,
        text: {
          EN: "Identified process issues to establish action plans supporting engineering production and exploitation unit",
          ES: "",
          FR: "",
        },
      },
      {
        key: 74,
        text: {
          EN: "Implemented an internal tool to monitor production and to measure KPI",
          ES: "",
          FR: "",
        },
      },
    ],
  },
  {
    key: 8,
    color: "red",
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
      { key: 72, text: { EN: "Spanish", ES: "Español", FR: "Espagnol" } },
    ],
    code: "",
    link: "https://www.fitnetmanager.com/en/home-en/",
    details: [
      {
        key: 81,
        text: {
          EN: "Guided customer in their ERP SaaS solution implementation",
          ES: "",
          FR: "",
        },
      },
      {
        key: 82,
        text: {
          EN: "Produced specifications improving solution functionalities",
          ES: "",
          FR: "",
        },
      },
      {
        key: 83,
        text: {
          EN: "Implemented walkthrough & Provided online instruction for users",
          ES: "",
          FR: "",
        },
      },
      {
        key: 84,
        text: {
          EN: "Troubleshot, investigated and created detailed reports about issues",
          ES: "",
          FR: "",
        },
      },
    ],
  },
  {
    key: 9,
    color: "red",
    title: {
      EN: "Decentralized Full Stack Developer",
      ES: "Desarrollador Full Stack Descentralizado",
      FR: "Développeur Full Stack Décentralisé",
    },
    date: {
      EN: "January 2021 - August 2021",
      ES: "Enero 2021 - Agosto 2021",
      FR: "Janvier 2021 - Août 2021",
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
    color: "yellow",
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
          EN: "detail alyra en 1",
          ES: "detail alyra es 1",
          FR: "detail alyra fr 1",
        },
      },
      {
        key: 102,
        text: {
          EN: "detail alyra en 2",
          ES: "detail alyra es 2",
          FR: "detail alyra fr 2",
        },
      },
      {
        key: 103,
        text: {
          EN: "detail alyra en 2",
          ES: "detail alyra es 2",
          FR: "detail alyra fr 2",
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
          EN: "detail alyra en 1",
          ES: "detail alyra es 1",
          FR: "detail alyra fr 1",
        },
      },
      {
        key: 112,
        text: {
          EN: "detail alyra en 2",
          ES: "detail alyra es 2",
          FR: "detail alyra fr 2",
        },
      },
      {
        key: 113,
        text: {
          EN: "detail alyra en 2",
          ES: "detail alyra es 2",
          FR: "detail alyra fr 2",
        },
      },
    ],
  },
  {
    key: 12,
    color: "red",
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
          EN: "detail alyra en 1",
          ES: "detail alyra es 1",
          FR: "detail alyra fr 1",
        },
      },
      {
        key: 122,
        text: {
          EN: "detail alyra en 2",
          ES: "detail alyra es 2",
          FR: "detail alyra fr 2",
        },
      },
      {
        key: 123,
        text: {
          EN: "detail alyra en 2",
          ES: "detail alyra es 2",
          FR: "detail alyra fr 2",
        },
      },
    ],
  },
  {
    key: 13,
    color: "pink",
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
          EN: "detail alyra en 1",
          ES: "detail alyra es 1",
          FR: "detail alyra fr 1",
        },
      },
      {
        key: 132,
        text: {
          EN: "detail alyra en 2",
          ES: "detail alyra es 2",
          FR: "detail alyra fr 2",
        },
      },
      {
        key: 133,
        text: {
          EN: "detail alyra en 2",
          ES: "detail alyra es 2",
          FR: "detail alyra fr 2",
        },
      },
    ],
  },
  {
    key: 14,
    color: "orange",
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
          EN: "detail alyra en 1",
          ES: "detail alyra es 1",
          FR: "detail alyra fr 1",
        },
      },
      {
        key: 142,
        text: {
          EN: "detail alyra en 2",
          ES: "detail alyra es 2",
          FR: "detail alyra fr 2",
        },
      },
      {
        key: 143,
        text: {
          EN: "detail alyra en 2",
          ES: "detail alyra es 2",
          FR: "detail alyra fr 2",
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
          EN: "detail alyra en 1",
          ES: "detail alyra es 1",
          FR: "detail alyra fr 1",
        },
      },
      {
        key: 152,
        text: {
          EN: "detail alyra en 2",
          ES: "detail alyra es 2",
          FR: "detail alyra fr 2",
        },
      },
      {
        key: 153,
        text: {
          EN: "detail alyra en 2",
          ES: "detail alyra es 2",
          FR: "detail alyra fr 2",
        },
      },
    ],
  },
  {
    key: 16,
    color: "purple",
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
          EN: "detail alyra en 1",
          ES: "detail alyra es 1",
          FR: "detail alyra fr 1",
        },
      },
      {
        key: 162,
        text: {
          EN: "detail alyra en 2",
          ES: "detail alyra es 2",
          FR: "detail alyra fr 2",
        },
      },
      {
        key: 163,
        text: {
          EN: "detail alyra en 2",
          ES: "detail alyra es 2",
          FR: "detail alyra fr 2",
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
          EN: "detail alyra en 1",
          ES: "detail alyra es 1",
          FR: "detail alyra fr 1",
        },
      },
      {
        key: 172,
        text: {
          EN: "detail alyra en 2",
          ES: "detail alyra es 2",
          FR: "detail alyra fr 2",
        },
      },
      {
        key: 173,
        text: {
          EN: "detail alyra en 2",
          ES: "detail alyra es 2",
          FR: "detail alyra fr 2",
        },
      },
    ],
  },
  {
    key: 18,
    color: "purple",
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
          EN: "detail alyra en 1",
          ES: "detail alyra es 1",
          FR: "detail alyra fr 1",
        },
      },
      {
        key: 182,
        text: {
          EN: "detail alyra en 2",
          ES: "detail alyra es 2",
          FR: "detail alyra fr 2",
        },
      },
      {
        key: 183,
        text: {
          EN: "detail alyra en 2",
          ES: "detail alyra es 2",
          FR: "detail alyra fr 2",
        },
      },
    ],
  },
  {
    key: 19,
    color: "red",
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
          EN: "detail alyra en 1",
          ES: "detail alyra es 1",
          FR: "detail alyra fr 1",
        },
      },
      {
        key: 192,
        text: {
          EN: "detail alyra en 2",
          ES: "detail alyra es 2",
          FR: "detail alyra fr 2",
        },
      },
      {
        key: 193,
        text: {
          EN: "detail alyra en 2",
          ES: "detail alyra es 2",
          FR: "detail alyra fr 2",
        },
      },
    ],
  },
]
