import { createContext, useState, useEffect } from "react"

import { langagues } from "../data/langagues"

export const CurriContext = createContext()

export const CurriContextProvider = ({ children }) => {
  // Langague
  const [lang, setLang] = useState(
    JSON.parse(localStorage.getItem("langCurricuLine")) || langagues[0]
  )
  useEffect(() => {
    localStorage.setItem("langCurricuLine", JSON.stringify(lang), [lang])
  }, [lang])
  const index = langagues.findIndex((el) => el === lang)

  // DarkMode
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkModeCurricuLine")) || false
  )
  useEffect(() => {
    localStorage.setItem("darkModeCurricuLine", JSON.stringify(darkMode))
  }, [darkMode])

  // Section
  const [section, setSection] = useState(
    () => JSON.parse(localStorage.getItem("sectionCurricuLine")) || "education"
  )
  useEffect(() => {
    localStorage.setItem("sectionCurricuLine", JSON.stringify(section))
  }, [section])

  // Style
  const backgroundImage = darkMode
    ? "linear-gradient(45deg,rgb(255,126,95),rgb(254,180,123))"
    : "linear-gradient(45deg,rgb(255,126,95),rgb(254,180,123))"
  const color = darkMode ? "#000000" : "#ffffff"
  const style = {
    backgroundImage,
    color,
  }

  return (
    <CurriContext.Provider
      value={{
        langagues,
        index,
        lang,
        setLang,
        darkMode,
        setDarkMode,
        section,
        setSection,
        style,
      }}
    >
      {children}
    </CurriContext.Provider>
  )
}
