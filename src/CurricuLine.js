import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { NavContextProvider } from "./context/NavContext"
import { HomeContextProvider } from "./context/HomeContext"
import { ContentContextProvider } from "./context/ContentContext"
import { ContactContextProvider } from "./context/ContactContext"
import { FooterContextProvider } from "./context/FooterContext"
import { useCurriContext } from "./hook/useCurriContext"

import { Box } from "@chakra-ui/react"

import Nav from "./Nav"
import Home from "./Home"
import Content from "./Content"
import Contact from "./Contact"
import Footer from "./Footer"
import PDF from "./PDF"

const CurricuLine = () => {
  const { bgContent } = useCurriContext()
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <NavContextProvider>
            <Nav />
          </NavContextProvider>
          <HomeContextProvider>
            <Box bg={bgContent} minH={"100vh"} py={24}>
              <Home />
            </Box>
          </HomeContextProvider>
          <FooterContextProvider>
            <Footer />
          </FooterContextProvider>
        </Route>

        <Route exact path="/curriculum">
          <NavContextProvider>
            <Nav />
          </NavContextProvider>
          <ContentContextProvider>
            <Box bg={bgContent} minH={"100vh"} pt={28} pb={24}>
              <Content />
            </Box>
          </ContentContextProvider>
          <FooterContextProvider>
            <Footer />
          </FooterContextProvider>
        </Route>

        <Route exact path="/contact">
          <NavContextProvider>
            <Nav />
          </NavContextProvider>
          <ContactContextProvider>
            <Box bg={bgContent} minH={"100vh"} pt={28} pb={24}>
              <Contact />
            </Box>
          </ContactContextProvider>
          <FooterContextProvider>
            <Footer />
          </FooterContextProvider>
        </Route>

        <Route exact path="/pdf">
          <PDF />
        </Route>
      </Switch>
    </Router>
  )
}
export default CurricuLine
