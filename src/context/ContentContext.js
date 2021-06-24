import { createContext, useState, useEffect } from "react"

import { main } from "../data/main"
import {
  sections,
  changeSection,
  skills,
  filterSkill,
  curriculum,
} from "../data/content"

export const ContentContext = createContext()

export const ContentContextProvider = ({ children }) => {
  return (
    <ContentContext.Provider
      value={{
        main,
        sections,
        changeSection,
        skills,
        filterSkill,
        curriculum,
      }}
    >
      {children}
    </ContentContext.Provider>
  )
}
