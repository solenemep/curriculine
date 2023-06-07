import { createContext, useState } from "react"

import {
  sections,
  changeSection,
  skills,
  filterSkill,
  cardLinks,
  main,
} from "../data/content"

export const ContentContext = createContext()

export const ContentContextProvider = ({ children }) => {
  // Filter
  const [filter, setFilter] = useState([])
  const toggleFilter = (event) => {
    event.preventDefault()
    if (filter.some((elem) => elem === Number(event.target.value))) {
      setFilter(filter.filter((elem) => elem !== Number(event.target.value)))
    } else {
      setFilter([...filter, Number(event.target.value)])
    }
  }

  const getSkillLabel = (key, lang) => {
    let label
    skills.map((skill) =>
      skill.items.forEach((item) => {
        if (Number(item.key) === key) {
          label = item.text[lang]
        }
      })
    )
    return label
  }

  return (
    <ContentContext.Provider
      value={{
        sections,
        changeSection,
        skills,
        filterSkill,
        cardLinks,
        main,
        filter,
        setFilter,
        toggleFilter,
        getSkillLabel,
      }}
    >
      {children}
    </ContentContext.Provider>
  )
}
