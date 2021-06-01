import { CurriContextProvider } from "./context/CurriContext"
import { HeaderContextProvider } from "./context/HeaderContext"
import { HighlightsContextProvider } from "./context/HighlightsContext"
import { ContentContextProvider } from "./context/ContentContext"
import { FooterContextProvider } from "./context/FooterContext"

import Header from "./Header"
import Highlights from "./Highlights"
import Content from "./Content"
import Footer from "./Footer"

const CurricuLine = () => {
  return (
    <CurriContextProvider>
      <HeaderContextProvider>
        <Header />
      </HeaderContextProvider>

      <HighlightsContextProvider>
        <Highlights />
      </HighlightsContextProvider>

      <ContentContextProvider>
        <Content />
      </ContentContextProvider>

      <FooterContextProvider>
        <Footer />
      </FooterContextProvider>
    </CurriContextProvider>
  )
}
export default CurricuLine
