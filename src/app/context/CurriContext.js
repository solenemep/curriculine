import { createContext, useState, useEffect } from "react"

import { langagues } from "../data/langagues"

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
  }, [lang])
  const index = langagues.findIndex((el) => el === lang)

  // DarkMode
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkModeCurricuLine")) || false
  )
  const changeDarkMode = () => {
    setDarkMode(!darkMode)
  }
  useEffect(() => {
    localStorage.setItem("darkModeCurricuLine", JSON.stringify(darkMode))
  }, [darkMode])

  // Mode
  const [section, setSection] = useState(
    () => JSON.parse(localStorage.getItem("sectionCurricuLine")) || "portfolio"
  )
  const changeSection = (event) => {
    setSection(event.target.value)
  }
  useEffect(() => {
    localStorage.setItem("sectionCurricuLine", JSON.stringify(section))
  }, [section])

  return (
    <CurriContext.Provider
      value={{
        langagues,
        index,
        lang,
        changeLang,
        darkMode,
        changeDarkMode,
        section,
        changeSection,
      }}
    >
      {children}
    </CurriContext.Provider>
  )
}
