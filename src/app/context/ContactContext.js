import { createContext, useState } from "react"
// import emailjs from "emailjs-com"

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

  const submitEmail = (e) => {
    /*
    e.preventDefault() 

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          window.location.reload() //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text)
        }
      )
      */
  }

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
