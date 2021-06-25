import { createContext } from "react"

import { home } from "../data/home"
import { curriculum } from "../data/content"
import { contacts } from "../data/contact"

export const NavContext = createContext()

export const NavContextProvider = ({ children }) => {
  return (
    <NavContext.Provider value={{ home, curriculum, contacts }}>
      {children}
    </NavContext.Provider>
  )
}
