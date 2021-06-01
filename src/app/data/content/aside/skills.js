// #generic

// Faire liste exhaustive

// Filter Skills
export const allSkills = (listArray) => {
  let listTotal = []
  for (let element of listArray) {
    for (let el of element.items) {
      if ("skills" in el) {
        listTotal = listTotal.concat(el.skills)
      }
    }
  }
  const listSkillsUnique = []
  listTotal.forEach((el) => {
    if (!listSkillsUnique.includes(el)) {
      listSkillsUnique.push(el)
    }
  })
  return listSkillsUnique
}

export const skills = [
  "Filter by skills", "Filtrar por habilidad", "Filtrer par compétence"
]

/*
const skills = [
  {
    "front": ["HTML", "CSS", "Bootstrap", "React"],
    "back": ["JavaScript", "NodeJS", "SQL", "C", "Perl"],
    "blockchain": ["Solidity"],
    "maths": ["arithmetic", "algebra", "geometry"],
    "method": ["agile", "logistics"],
    "tools": ["JIRA", "Trello", "SAP", "Odoo", "Microsoft Office"],
    "langague": ["english", "spanish", "french"],
  },
  {
    "front": ["HTML", "CSS", "Bootstrap", "React"],
    "back": ["JavaScript", "NodeJS", "SQL", "C", "Perl"],
    "blockchain": ["Solidity"],
    "maths": ["aritmética", "álgebra", "geometría"],
    "method": ["ágil", "logística"],
    "tools": ["JIRA", "Trello", "SAP", "Odoo", "Microsoft Office"],
    "langague": ["inglés", "español", "francés"],
  },
  {
    "front": ["HTML", "CSS", "Bootstrap", "React"],
    "back": ["JavaScript", "NodeJS", "SQL", "C", "Perl"],
    "blockchain": ["Solidity"],
    "maths": ["arithmétique", "algèbre", "géométrie"],
    "method": ["agile", "logistique"],
    "tools": ["JIRA", "Trello", "SAP", "Odoo", "Microsoft Office"],
    "langague": ["anglais", "espagnol", "français"],
  }
]
*/
