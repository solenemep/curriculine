import { createContext } from "react"

import { home } from "../data/home"
import { main } from "../data/main"
import { contacts } from "../data/contacts"

export const NavContext = createContext()

export const NavContextProvider = ({ children }) => {
  return (
    <NavContext.Provider value={{ home, main, contacts }}>
      {children}
    </NavContext.Provider>
  )
}
