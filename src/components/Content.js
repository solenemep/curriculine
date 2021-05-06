import { Fragment } from "react"

import Main from "./componentsContent/Main"
import Aside from "./componentsContent/Aside"

import { educationEN, educationSP, educationFR } from "../data/content/main/education"
import { experienceEN, experienceSP, experienceFR } from "../data/content/main/experience"
import { portfolioEN, portfolioSP, portfolioFR } from "../data/content/main/portfolio"

const Content = (props) => {
  const { lang, changeLang, darkMode, changeDarkMode } = props

  const listEN = [educationEN, experienceEN, portfolioEN]
  const listSP = [educationSP, experienceSP, portfolioSP]
  const listFR = [educationFR, experienceFR, portfolioFR]

  // Filter Fields
  const allFields = (listArray) => {
    let listTotal = []
    for (let element of listArray) {
      for (let el of element) {
        if ("fields" in el) {
          listTotal = listTotal.concat(el.fields)
        }
      }
    }
    const listFieldsUnique = []
    listTotal.forEach((el) => {
      if (!listFieldsUnique.includes(el)) {
        listFieldsUnique.push(el)
      }
    })
    return listFieldsUnique
  }
  const uniqueFieldsEN = allFields(listEN, "fields")
  const uniqueFieldsSP = allFields(listSP, "fields")
  const uniqueFieldsFR = allFields(listFR, "fields")
  console.log(uniqueFieldsEN)
  console.log(uniqueFieldsSP)
  console.log(uniqueFieldsFR)

  // Filter Skills
  const allSkills = (listArray) => {
    let listTotal = []
    for (let element of listArray) {
      for (let el of element) {
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
  const uniqueSkillsEN = allSkills(listEN, "skills")
  const uniqueSkillsSP = allSkills(listSP, "skills")
  const uniqueSkillsFR = allSkills(listFR, "skills")
  console.log(uniqueSkillsEN)
  console.log(uniqueSkillsSP)
  console.log(uniqueSkillsFR)

  return (
    <Fragment>
      <Main
        darkMode={darkMode} />
      <Aside
        lang={lang}
        changeLang={changeLang}
        darkMode={darkMode}
        changeDarkMode={changeDarkMode} />
    </Fragment>
  )
}
export default Content