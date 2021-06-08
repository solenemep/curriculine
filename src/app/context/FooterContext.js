import { createContext } from "react"

import { footer } from "../data/footer"

export const FooterContext = createContext()

export const FooterContextProvider = ({ children }) => {
  return (
    <FooterContext.Provider value={{ footer }}>
      {children}
    </FooterContext.Provider>
  )
}
