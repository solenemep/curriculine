import { createContext, useState } from "react"

import { contacts } from "../data/contacts"

export const ContactContext = createContext()

export const ContactContextProvider = ({ children }) => {
  // sendName
  const [sendName, setSendName] = useState("")
  const changeSendName = (event) => {
    setSendName(event.target.value)
  }

  // sendEmail
  const [sendEmail, setSendEmail] = useState("")
  const changeSendEmail = (event) => {
    setSendName(event.target.value)
  }

  // sendSubject
  const [sendSubject, setSendSubject] = useState("")
  const changeSendSubject = (event) => {
    setSendName(event.target.value)
  }

  // sendMessage
  const [sendMessage, setSendMessage] = useState("")
  const changeSendMessage = (event) => {
    setSendMessage(event.target.value)
  }

  // Submit
  const submitEmail = () => {}
  return (
    <ContactContext.Provider
      value={{
        contacts,
        submitEmail,
        sendName,
        changeSendName,
        sendEmail,
        changeSendEmail,
        sendSubject,
        changeSendSubject,
        sendMessage,
        changeSendMessage,
      }}
    >
      {children}
    </ContactContext.Provider>
  )
}
