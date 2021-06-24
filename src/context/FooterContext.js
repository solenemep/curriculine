import { createContext } from "react"

import { copyright, madeby } from "../data/footer"

export const FooterContext = createContext()

export const FooterContextProvider = ({ children }) => {
  return (
    <FooterContext.Provider value={{ copyright, madeby }}>
      {children}
    </FooterContext.Provider>
  )
}
