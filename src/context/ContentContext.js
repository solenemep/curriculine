import { createContext, useState, useEffect } from "react"

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
      }}
    >
      {children}
    </ContentContext.Provider>
  )
}
