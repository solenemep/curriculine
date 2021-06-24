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
  const bgNav = useColorModeValue("whiteAlpha.900", "grayAlpha.900")
  const bgContent = useColorModeValue("white", "gray.900")
  const bgFoot = "gray.900"

  const hoverNavFoot = {
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

  // Filter
  const [filter, setFilter] = useState(
    () => JSON.parse(localStorage.getItem("filterCurriculine")) || []
  )
  const toggleFilter = (event) => {
    event.preventDefault()
    if (filter.some((elem) => elem === Number(event.target.value))) {
      setFilter(filter.filter((elem) => elem !== Number(event.target.value)))
    } else {
      setFilter([...filter, Number(event.target.value)])
    }
  }
  useEffect(() => {
    localStorage.setItem("filterCurriculine", JSON.stringify(filter))
  }, [filter])

  return (
    <CurriContext.Provider
      value={{
        langagues,
        lang,
        setLang,
        section,
        setSection,
        filter,
        setFilter,
        toggleFilter,
        bgNav,
        bgFoot,
        colorFoot,
        hoverNavFoot,
        bgContent,
        colorCard,
        colorTag,
      }}
    >
      {children}
    </CurriContext.Provider>
  )
}
