import { createContext, useState, useEffect } from "react"

import { langagues } from "../data/content/aside/langagues"

export const CurriContext = createContext()

export const CurriContextProvider = ({ children }) => {
  // Langague
  const [lang, setLang] = useState(
    JSON.parse(localStorage.getItem("langCurricuLine")) || langagues[0]
  )
  const changeLang = (event) => {
    setLang(event.target.value)
  }
  useEffect(() => {
    localStorage.setItem("langCurricuLine", JSON.stringify(lang), [lang])
  })

  // DarkMode
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkModeCurricuLine")) || false
  )
  const changeDarkMode = () => {
    setDarkMode(!darkMode)
  }
  useEffect(() => {
    localStorage.setItem("darkModeCurricuLine", JSON.stringify(darkMode))
  })

  const index = langagues.findIndex((el) => el === lang)

  return (
    <CurriContext.Provider
      value={{ index, lang, changeLang, darkMode, changeDarkMode }}
    >
      {children}
    </CurriContext.Provider>
  )
}
