import { createContext } from "react"

import { copyright, madeby, links } from "../data/footer"

export const FooterContext = createContext()

export const FooterContextProvider = ({ children }) => {
  return (
    <FooterContext.Provider value={{ copyright, madeby, links }}>
      {children}
    </FooterContext.Provider>
  )
}
