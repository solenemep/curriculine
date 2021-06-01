import { createContext } from "react"

import { contacts } from "../data/footer/contacts"
import { abouts } from "../data/footer/abouts"
import { copyrights } from "../data/footer/copyrights"

export const FooterContext = createContext()

export const FooterContextProvider = ({ children }) => {
  return (
    <FooterContext.Provider value={{ contacts, abouts, copyrights }}>
      {children}
    </FooterContext.Provider>
  )
}
