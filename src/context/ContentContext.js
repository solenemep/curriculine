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
  return (
    <ContentContext.Provider
      value={{
        sections,
        changeSection,
        skills,
        filterSkill,
        cardLinks,
        main,
      }}
    >
      {children}
    </ContentContext.Provider>
  )
}
