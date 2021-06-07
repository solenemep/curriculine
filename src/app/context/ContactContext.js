import { createContext } from "react"

import { contacts } from "../data/contact/contacts"

export const ContactContext = createContext()

export const ContactContextProvider = ({ children }) => {
  return (
    <ContactContext.Provider value={{ contacts }}>
      {children}
    </ContactContext.Provider>
  )
}
