import { createContext } from "react"

import { copyrights } from "../data/footer/copyrights"

export const FooterContext = createContext()

export const FooterContextProvider = ({ children }) => {
  return (
    <FooterContext.Provider value={{ copyrights }}>
      {children}
    </FooterContext.Provider>
  )
}
