import { createContext, useState, useEffect } from "react"

import { main } from "../data/main"
import { aside } from "../data/aside"
import { skills } from "../data/tags"

export const ContentContext = createContext()

export const ContentContextProvider = ({ children }) => {
  return (
    <ContentContext.Provider
      value={{
        main,
        aside,
        skills,
      }}
    >
      {children}
    </ContentContext.Provider>
  )
}
