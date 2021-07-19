import { createContext, useState } from "react"
import emailjs from "emailjs-com"

import { contacts, coord, mailme } from "../data/contact"

export const ContactContext = createContext()

export const ContactContextProvider = ({ children }) => {
  const [alert, setAlert] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Submit
  const submitEmail = (e) => {
    e.preventDefault()
    setIsLoading(true)
    emailjs
      .sendForm(
        "service_zb6htqh",
        "template_c820kyr",
        e.target,
        "user_93Akge9QL78ACBpCymsa4"
      )
      .then(
        (result) => {
          setAlert("OK")
          setIsLoading(false)
        },
        (error) => {
          setAlert("KO")
          setIsLoading(false)
        }
      )
  }

  return (
    <ContactContext.Provider
      value={{
        contacts,
        coord,
        mailme,
        submitEmail,
        alert,
        isLoading,
      }}
    >
      {children}
    </ContactContext.Provider>
  )
}
