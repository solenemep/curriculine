import { education } from '../main/education'
import { experience } from '../main/experience'
import { portfolio } from '../main/portfolio'
import { allTags } from './function'

const list = [education, experience, portfolio]
export const uniqueSkills = allTags(list, "skills")

/*
export const skills = {
  "EN": {
    "front": ["HTML", "CSS", "Bootstrap", "React"],
    "back": ["JavaScript", "NodeJS", "SQL", "C", "Perl"],
    "blockchain": ["Solidity"],
    "maths": ["arithmetic", "algebra", "geometry"],
    "method": ["agile", "logistics"],
    "tools": ["JIRA", "Trello", "SAP", "Odoo", "Microsoft Office"],
    "langague": ["english", "spanish", "french"],
  },
  "SP": {
    "front": ["HTML", "CSS", "Bootstrap", "React"],
    "back": ["JavaScript", "NodeJS", "SQL", "C", "Perl"],
    "blockchain": ["Solidity"],
    "maths": ["aritmética", "álgebra", "geometría"],
    "method": ["ágil", "logística"],
    "tools": ["JIRA", "Trello", "SAP", "Odoo", "Microsoft Office"],
    "langague": ["inglés", "español", "francés"],
  },
  "FR": {
    "front": ["HTML", "CSS", "Bootstrap", "React"],
    "back": ["JavaScript", "NodeJS", "SQL", "C", "Perl"],
    "blockchain": ["Solidity"],
    "maths": ["arithmétique", "algèbre", "géométrie"],
    "method": ["agile", "logistique"],
    "tools": ["JIRA", "Trello", "SAP", "Odoo", "Microsoft Office"],
    "langague": ["anglais", "espagnol", "français"],
  }
}
*/