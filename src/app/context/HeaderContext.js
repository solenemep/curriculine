import { createContext } from "react"

import { intros } from "../data/header/intros"
import { links } from "../data/header/links"

export const HeaderContext = createContext()

export const HeaderContextProvider = ({ children }) => {
  return (
    <HeaderContext.Provider value={{ intros, links }}>
      {children}
    </HeaderContext.Provider>
  )
}
