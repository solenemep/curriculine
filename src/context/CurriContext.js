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

  // Section
  const [section, setSection] = useState(
    () => JSON.parse(localStorage.getItem("sectionCurricuLine")) || "education"
  )
  useEffect(() => {
    localStorage.setItem("sectionCurricuLine", JSON.stringify(section))
  }, [section])

  // Color Mode
  const color1 = "purple"
  const color2 = "red"

  const bgCurri = useColorModeValue("white", "black")
  const bgCard = useColorModeValue(`${color1}.100`, `${color1}.100`)
  const bgGradientCard = useColorModeValue(
    `linear(${color1}.100, ${color2}.100)`,
    `linear(${color1}.100, ${color2}.100)`
  )
  const bgFoot = useColorModeValue("white", "black")

  const colorCurri = useColorModeValue("gray.600", "white")
  const colorCard = useColorModeValue("gray.600", "gray.600")
  const colorFoot = useColorModeValue("gray.600", "white")

  // Buttons
  const bgButton = "white"
  const hoverButton = {
    textDecoration: "none",
    color: `${color1}.100`,
    bg: "white",
    transition: "0.2s",
  }
  const activeButton = {
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
        bgCurri,
        bgCard,
        bgGradientCard,
        bgFoot,
        colorCurri,
        colorCard,
        colorFoot,
        bgButton,
        hoverButton,
        activeButton,
        hoverLink,
      }}
    >
      {children}
    </CurriContext.Provider>
  )
}
