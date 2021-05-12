import { Fragment, useState } from "react"

import Main from "./componentsContent/Main"
import Aside from "./componentsContent/Aside"

import { langagues } from "./data/content/aside/langagues"

import { educations } from "./data/content/main/educations"
import { experiences } from "./data/content/main/experiences"
import { portfolios } from "./data/content/main/portfolios"

import { allFields } from "./data/content/aside/fields"
import { allSkills } from "./data/content/aside/skills"

const Content = (props) => {
  const { lang, changeLang, darkMode, changeDarkMode } = props

  // Filter by fields
  const [filterFields, setFilterFields] = useState("")
  const updateFilterFields = (event) => {
    if (filterFields.includes(event.target.value)) {
      setFilterFields(filterFields.filter((el) => el !== event.target.value))
    } else {
      setFilterFields(filterFields.push(event.target.value))
    }
  }

  // Filter by skills
  const [filterSkills, setFilterSkills] = useState("")
  const updateFilterSkills = (event) => {
    if (filterSkills.includes(event.target.value)) {
      setFilterSkills(filterSkills.filter((el) => el !== event.target.value))
    } else {
      setFilterSkills(filterSkills.push(event.target.value))
    }
  }

  for (const [index, langague] of langagues.entries()) {
    if (lang === langagues[index]) {

      const list = [educations[index], experiences[index], portfolios[index]]

      const uniqueFields = allFields(list)
      // console.log(uniqueFields)
      const filterFieldsList = (filterFields) => {
        if (filterFields === []) {
          return list
        }
        else {
          return list.filter((el) => el != list.items.fields.includes(filterFields))
        }
      }

      const uniqueSkills = allSkills(list)
      // console.log(uniqueSkills)
      const filterSkillsList = (filterSkills) => {
        if (filterSkills === []) {
          return list
        }
        else {
          return list.filter((el) => el != list.items.skills.includes(filterSkills))
        }
      }

      // Concat lists
      /*
      const filterList = (listA, listB) => {
        const list = listA + listB
        const filteredList
        for (el of list) {
          if (!list.includes(el)) {
            filteredList.push(el)
          }
        }
        return filteredList
      }
      const filteredList = filterList(filteredFieldsList, filteredSkillsList)
      */



      return (
        <div className="content">
          <Main
            lang={lang}
            darkMode={darkMode}
          // 3 listes filtrées
          />
          <Aside
            lang={lang}
            changeLang={changeLang}
            darkMode={darkMode}
            changeDarkMode={changeDarkMode}
            filterFields={filterFields}
            updateFilterFields={updateFilterFields}
            filterSkills={filterSkills}
            updateFilterSkills={updateFilterSkills} />
        </div>
      )
    }
  }
}

export default Content