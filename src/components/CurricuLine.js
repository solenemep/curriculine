import { Fragment } from "react"
import Header from "./Header"
import Highlights from "./Hightlights"
import Main from "./Main"
import Footer from "./Footer"

const CurricuLine = (props) => {
  const { } = props

  // Langague
  const [lang, setLang] = useState(JSON.parse(localStorage.getItem('langCurricuLine')) || 'EN')
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

  // Filter Fields
  // Filter Skills

  return (
    <Fragment>
      <Header />
      <Highlights />
      <Main />
      <Footer />
    </Fragment>
  )
}
export default CurricuLine