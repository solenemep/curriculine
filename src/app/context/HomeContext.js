import { createContext } from "react"

import { home } from "../data/home"

export const HomeContext = createContext()

export const HomeContextProvider = ({ children }) => {
  return (
    <HomeContext.Provider value={{ home }}>{children}</HomeContext.Provider>
  )
}
