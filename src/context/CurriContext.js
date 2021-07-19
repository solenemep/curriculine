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

  // Color Mode
  const bgNav = useColorModeValue("white", "gray.900")
  const bgContent = useColorModeValue("white", "gray.900")
  const bgFoot = "gray.900"

  const hoverButton = {
    textDecoration: "none",
    color: useColorModeValue("gray.600", "gray.400"),
    bg: "inherit",
  }

  const colorFoot = "white"
  const colorCard = useColorModeValue("black", "black")
  const colorTag = useColorModeValue("white", "black")

  // Section
  const [section, setSection] = useState(
    () => JSON.parse(localStorage.getItem("sectionCurricuLine")) || "education"
  )
  useEffect(() => {
    localStorage.setItem("sectionCurricuLine", JSON.stringify(section))
  }, [section])

  return (
    <CurriContext.Provider
      value={{
        langagues,
        lang,
        setLang,
        section,
        setSection,
        bgNav,
        bgContent,
        bgFoot,
        hoverButton,
        colorFoot,
        colorCard,
        colorTag,
      }}
    >
      {children}
    </CurriContext.Provider>
  )
}
