import { createContext } from "react"

import { navs } from "../data/nav/navs"
import { intros } from "../data/home/intros"
import { contacts } from "../data/contact/contacts"

export const NavContext = createContext()

export const NavContextProvider = ({ children }) => {
  return (
    <NavContext.Provider value={{ navs, intros, contacts }}>
      {children}
    </NavContext.Provider>
  )
}
