import { createContext } from "react"

import { home, intro, highlights } from "../data/home"

export const HomeContext = createContext()

export const HomeContextProvider = ({ children }) => {
  return (
    <HomeContext.Provider value={{ home, intro, highlights }}>
      {children}
    </HomeContext.Provider>
  )
}
