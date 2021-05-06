import { Fragment } from "react"
import Header from "./componentsCurricuLine/Header"
import Highlight from "./componentsCurricuLine/Hightlight"
import Main from "./componentsCurricuLine/Main"
import Aside from "./componentsCurricuLine/Aside"
import Footer from "./componentsCurricuLine/Footer"

const CurricuLine = (props) => {
  const { } = props
  return (
    <Fragment>
      <Header />
      <Highlight />
      <Main />
      <Aside />
      <Footer />
    </Fragment>
  )
}
export default CurricuLine