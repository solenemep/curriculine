import { useColorModeValue } from "@chakra-ui/react"
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

  // Index
  // const index = langagues.findIndex((el) => el === lang)
  const [index, setIndex] = useState(langagues[0])
  useEffect(() => {
    setIndex(langagues.findIndex((el) => el === lang))
  }, [lang])

  // Color Mode
  const bgNavFoot = useColorModeValue("gray.100", "gray.900")
  const hoverNavFoot = {
    textDecoration: "none",
    color: "inherit",
    bg: useColorModeValue("gray.200", "gray.800"),
  }
  const hoverContent = {
    textDecoration: "none",
    color: useColorModeValue("red.300", "cyan.200"),
  }

  const bgContent = useColorModeValue("gray.50", "gray.800")
  const colorTitle = useColorModeValue("red.300", "cyan.200")

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
        bgNavFoot,
        hoverNavFoot,
        bgContent,
        colorTitle,
        hoverContent,
      }}
    >
      {children}
    </CurriContext.Provider>
  )
}
