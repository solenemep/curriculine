import { Fragment, useState, useEffect } from "react"

import Header from "./Header"
import Highlights from "./Hightlights"
import Content from "./Content"
import Footer from "./Footer"

import { langagues } from "./data/content/aside/langagues"

const CurricuLine = (props) => {
  const { } = props

  // Langague
  const [lang, setLang] = useState(JSON.parse(localStorage.getItem('langCurricuLine')) || langagues[0])
  const changeLang = (event) => {
    setLang(event.target.value)
  }
  useEffect(() => {
    localStorage.setItem("langCurricuLine", JSON.stringify(lang), [lang])
  }
  )

  // DarkMode
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkModeCurricuLine')) || false)
  const changeDarkMode = () => {
    setDarkMode(!darkMode)
  }
  useEffect(() => {
    localStorage.setItem("darkModeCurricuLine", JSON.stringify(darkMode))
  }
  )

  for (const [index] of langagues.entries()) {
    if (lang === langagues[index]) {

      return (
        <Fragment>
          <Header
            index={index}
            darkMode={darkMode} />
          <Highlights
            index={index}
            darkMode={darkMode} />
          <Content
            index={index}
            lang={lang}
            changeLang={changeLang}
            darkMode={darkMode}
            changeDarkMode={changeDarkMode} />
          <Footer
            index={index}
            darkMode={darkMode} />
        </Fragment>
      )
    }
  }
}
export default CurricuLine