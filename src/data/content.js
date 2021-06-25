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

export const main = [
  {
    key: 1,
    color: "green",
    title: {
      EN: "Undergraduate intensive course in Mathematics & Physics",
      ES: "",
      FR: "",
    },
    date: { EN: "September 2011 - August 2013", ES: "", FR: "" },
    establishment: { EN: "Michelet Hightschool", ES: "", FR: "" },
    location: { EN: "Paris, France", ES: "", FR: "" },
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
      ES: "",
      FR: "",
    },
    date: { EN: "July 2012 - August 2012", ES: "", FR: "" },
    establishment: { EN: "D3 LLC", ES: "", FR: "" },
    location: { EN: "New-York, USA", ES: "", FR: "" },
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
    details: [],
  },
  {
    key: 3,
    color: "red",
    title: { EN: "Industrial Engineering", ES: "", FR: "" },
    date: { EN: "January 2015 - May 2015", ES: "", FR: "" },
    establishment: { EN: "Polytechnique", ES: "", FR: "" },
    location: { EN: "Montreal, Canada", ES: "", FR: "" },
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
    title: { EN: "Logistic Analyst", ES: "", FR: "" },
    date: { EN: "June 2015 - August 2015", ES: "", FR: "" },
    establishment: { EN: "Pernod Ricard", ES: "", FR: "" },
    location: { EN: "Bordeaux, France", ES: "", FR: "" },
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
      "Designed a logistic plan to integrate a new supply chain activity",
      "Optimized picking & packing processes",
    ],
  },
  {
    key: 5,
    color: "cyan",
    title: {
      EN: "MSC Information Technology & Process Engineering",
      ES: "",
      FR: "",
    },
    date: { EN: "September 2013 - November 2016", ES: "", FR: "" },
    establishment: {
      EN: "Nacitional Superior School of Mines",
      ES: "",
      FR: "",
    },
    location: { EN: "Albi, France", ES: "", FR: "" },
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
    title: { EN: "Functional & Technical Consultant", ES: "", FR: "" },
    date: { EN: "March 2016 - August 2016", ES: "", FR: "" },
    establishment: { EN: "Trobz", ES: "", FR: "" },
    location: { EN: "Ho-Chi-Minh-City, Vietnam", ES: "", FR: "" },
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
      "Guided customer in their ERP SaaS solution implementation",
      "Produced specifications improving solution functionalities",
      "Implemented walkthrough programming HTML and CSS",
      "Troubleshot, investigated and created detailed reports about issues",
      "Provided online instruction for users",
    ],
  },
  {
    key: 7,
    color: "yellow",
    title: { EN: "Process & Method Consultant", ES: "", FR: "" },
    date: { EN: "May 2017 - August 2018", ES: "", FR: "" },
    establishment: { EN: "Bouygues Telecom", ES: "", FR: "" },
    location: { EN: "Paris, France", ES: "", FR: "" },
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
      "Managed the industrialization of two production lines",
      "Animated progress meetings to liaise management and operational teams",
      "dentified process issues to establish action plans supporting engineering production and exploitation unit",
      "Implemented an internal tool to monitor production and to measure KPI",
    ],
  },
  {
    key: 8,
    color: "red",
    title: { EN: "Technical Product Specialist", ES: "", FR: "" },
    date: { EN: "September 2018 - January 2020", ES: "", FR: "" },
    establishment: { EN: "Fitnet Manager", ES: "", FR: "" },
    location: { EN: "Barcelona, Spain", ES: "", FR: "" },
    section: "experience",
    skills: [
      { key: 23, text: { EN: "SQL", ES: "SQL", FR: "SQL" } },
      { key: 51, text: { EN: "Agil", ES: "Ágil", FR: "Agile" } },
      { key: 61, text: { EN: "JIRA", ES: "JIRA", FR: "JIRA" } },
      { key: 72, text: { EN: "Spanish", ES: "Español", FR: "Espagnol" } },
    ],
    code: "",
    link: "https://www.fitnetmanager.com/en/home-en/",
    details: {
      EN: [
        "Guided customer in their ERP SaaS solution implementation",
        "Produced specifications improving solution functionalities",
        "Implemented walkthrough & Provided online instruction for users",
        "Troubleshot, investigated and created detailed reports about issues",
      ],
      ES: [],
      FR: [],
    },
  },
  {
    key: 9,
    color: "red",
    title: { EN: "Decentralized Full Stack Developer", ES: "", FR: "" },
    date: { EN: "January 2021 - August 2021", ES: "", FR: "" },
    establishment: { EN: "Alyra", ES: "", FR: "" },
    location: { EN: "Paris, France", ES: "", FR: "" },
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
    details: [
      {
        key: 91,
        text: {
          EN: "detail alyra en 1",
          ES: "detail alyra es 1",
          FR: "detail alyra fr 1",
        },
      },
      {
        key: 92,
        text: {
          EN: "detail alyra en 2",
          ES: "detail alyra es 2",
          FR: "detail alyra fr 2",
        },
      },
      {
        key: 93,
        text: {
          EN: "detail alyra en 2",
          ES: "detail alyra es 2",
          FR: "detail alyra fr 2",
        },
      },
    ],
  },
  {
    key: 10,
    color: "purple",
    title: { EN: "Google Fonts", ES: "", FR: "" },
    date: { EN: "April 2021", ES: "", FR: "" },
    establishment: { EN: "", ES: "", FR: "" },
    location: { EN: "", ES: "", FR: "" },
    section: "portfolio",
    skills: [],
    code: "https://github.com/solenemhep/googlefonts-widget",
    link: "https://solenemhep-googlefonts.netlify.app/",
    details: [],
  },
]
