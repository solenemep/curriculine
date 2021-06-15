import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { NavContextProvider } from "./context/NavContext"
import { HomeContextProvider } from "./context/HomeContext"
import { ContentContextProvider } from "./context/ContentContext"
import { ContactContextProvider } from "./context/ContactContext"
import { FooterContextProvider } from "./context/FooterContext"

import Nav from "./Nav"
import Home from "./Home"
import Content from "./Content"
import Contact from "./Contact"
import Footer from "./Footer"

import { useCurriContext } from "./hook/useCurriContext"
import { Box } from "@chakra-ui/react"

const CurricuLine = () => {
  const { bgContent } = useCurriContext()
  return (
    <Router>
      <NavContextProvider>
        <Nav />
      </NavContextProvider>
      <Switch>
        <Route exact path="/">
          <HomeContextProvider>
            <Box bg={bgContent} minH={"100vh"}>
              <Home />
            </Box>
          </HomeContextProvider>
        </Route>

        <Route exact path="/curriculum">
          <ContentContextProvider>
            <Box bg={bgContent} minH={"100vh"}>
              <Content />
            </Box>
          </ContentContextProvider>
        </Route>

        <Route exact path="/contact">
          <ContactContextProvider>
            <Box bg={bgContent} minH={"100vh"}>
              <Contact />
            </Box>
          </ContactContextProvider>
        </Route>
      </Switch>
      <FooterContextProvider>
        <Footer />
      </FooterContextProvider>
    </Router>
  )
}
export default CurricuLine
