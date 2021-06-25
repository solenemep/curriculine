import { createContext, useState, useEffect } from "react"

import {
  sections,
  changeSection,
  skills,
  filterSkill,
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
        main,
      }}
    >
      {children}
    </ContentContext.Provider>
  )
}
