import { createContext, useState, useEffect } from "react"

import { langagues } from "../data/langagues"

export const CurriContext = createContext()

export const CurriContextProvider = ({ children }) => {
  // Langague
  const [lang, setLang] = useState(
    JSON.parse(localStorage.getItem("langCurricuLine")) || langagues[0]
  )
  useEffect(() => {
    localStorage.setItem("langCurricuLine", JSON.stringify(lang))
  }, [lang])

  // Section
  const [section, setSection] = useState(
    () => JSON.parse(localStorage.getItem("sectionCurricuLine")) || "education"
  )
  useEffect(() => {
    localStorage.setItem("sectionCurricuLine", JSON.stringify(section))
  }, [section])

  // DarkMode
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkModeCurricuLine")) || false
  )
  useEffect(() => {
    localStorage.setItem("darkModeCurricuLine", JSON.stringify(darkMode))
  }, [darkMode])

  // Color Mode
  const color1 = "purple"
  const color2 = "red"

  const bgCurri = darkMode ? "black" : "white"
  const bgCard = darkMode ? `${color1}.50` : `${color1}.50`
  const bgGradientCard = darkMode
    ? `linear(${color1}.100, ${color2}.100)`
    : `linear(${color1}.100, ${color2}.100)`

  const bgFoot = darkMode ? "black" : "white"

  const colorCurri = darkMode ? "white" : "gray.600"
  const colorCard = darkMode ? "gray.600" : "gray.600"
  const colorFoot = darkMode ? "white" : "gray.600"

  // Buttons
  const bgButton = darkMode ? "black" : "white"
  const bgButtonCard = "white"
  const hoverButton = {
    textDecoration: "none",
    color: `${color1}.100`,
    bg: darkMode ? "black" : "white",
    transition: "0.2s",
  }
  const hoverButtonCard = {
    textDecoration: "none",
    color: `${color1}.100`,
    bg: "white",
    transition: "0.2s",
  }
  const activeButtonCard = {
    color: `${color1}.100`,
    textDecoration: "none",
  }

  // Link
  const hoverLink = {
    textDecoration: "none",
    color: `white`,
    transition: "0.2s",
  }

  return (
    <CurriContext.Provider
      value={{
        langagues,
        lang,
        setLang,
        section,
        setSection,
        darkMode,
        setDarkMode,
        bgCurri,
        bgCard,
        bgGradientCard,
        bgFoot,
        colorCurri,
        colorCard,
        colorFoot,
        bgButton,
        bgButtonCard,
        hoverButton,
        hoverButtonCard,
        activeButtonCard,
        hoverLink,
      }}
    >
      {children}
    </CurriContext.Provider>
  )
}
