import { createContext, useState } from "react"
// à supprimer :
import { useCurriContext } from "../hook/useCurriContext"

import { educations } from "../data/content/main/educations"
import { experiences } from "../data/content/main/experiences"
import { portfolios } from "../data/content/main/portfolios"

import { allFields } from "../data/content/aside/fields"
import { allSkills } from "../data/content/aside/skills"
import { fields } from "../data/content/aside/fields"
import { skills } from "../data/content/aside/skills"

export const ContentContext = createContext()

export const ContentContextProvider = ({ children }) => {
  // à supprimer :
  const { index } = useCurriContext()

  // Filter by fields
  const [filterFields, setFilterFields] = useState("")
  const updateFilterFields = (event) => {
    setFilterFields(event.target.value)
  }

  // Filter by skills
  const [filterSkills, setFilterSkills] = useState("")
  const updateFilterSkills = (event) => {
    setFilterSkills(event.target.value)
  }

  // POUR LE ASIDE
  const list = [educations[index], experiences[index], portfolios[index]]
  const uniqueFields = allFields(list)
  // console.log(uniqueFields)
  const uniqueSkills = allSkills(list)
  // console.log(uniqueSkills)

  // POUR LE MAIN
  const filterList = (list, filter1, filter2) => {
    if (filter1 === "" && filter2 === "") {
      return list
    } else {
      return list.filter((el) => el.fields === filter1 && el.skills === filter2)
    }
  }
  const filteredEducation = filterList(
    educations[index].items,
    filterFields,
    filterSkills
  )
  const filteredExperience = filterList(
    experiences[index].items,
    filterFields,
    filterSkills
  )
  const filteredPortfolio = filterList(
    portfolios[index].items,
    filterFields,
    filterSkills
  )

  return (
    <ContentContext.Provider
      value={{
        educations,
        experiences,
        portfolios,
        filteredEducation,
        filteredExperience,
        filteredPortfolio,
        fields,
        allFields,
        uniqueFields,
        updateFilterFields,
        skills,
        allSkills,
        uniqueSkills,
        updateFilterSkills,
      }}
    >
      {children}
    </ContentContext.Provider>
  )
}
