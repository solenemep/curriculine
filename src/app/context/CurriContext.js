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
  const index = langagues.findIndex((el) => el === lang)

  // Color Mode
  const bgNavFoot = useColorModeValue("white", "gray.900")
  const bgContent = useColorModeValue("white", "gray.900")

  const hoverNavFoot = {
    textDecoration: "none",
    color: useColorModeValue("gray.600", "gray.400"),
    bg: "inherit",
  }
  const hoverContent = {
    textDecoration: "none",
    color: useColorModeValue("gray.600", "gray.400"),
    bg: "inherit",
  }
  const colorCard = useColorModeValue("black", "black")
  const colorScheme = useColorModeValue("gray", "yellow")

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
        index,
        lang,
        setLang,
        section,
        setSection,
        bgNavFoot,
        hoverNavFoot,
        bgContent,
        colorCard,
        hoverContent,
        colorScheme,
      }}
    >
      {children}
    </CurriContext.Provider>
  )
}
