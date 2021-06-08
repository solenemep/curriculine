import { createContext } from "react"

import { home } from "../data/home"
import { contacts } from "../data/contacts"

export const NavContext = createContext()

export const NavContextProvider = ({ children }) => {
  return (
    <NavContext.Provider value={{ home, contacts }}>
      {children}
    </NavContext.Provider>
  )
}
