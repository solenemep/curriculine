import { createContext } from "react"

import { intros } from "../data/home/intros"
import { highlights } from "../data/home/highlights"

export const HomeContext = createContext()

export const HomeContextProvider = ({ children }) => {
  return (
    <HomeContext.Provider value={{ intros, highlights }}>
      {children}
    </HomeContext.Provider>
  )
}
