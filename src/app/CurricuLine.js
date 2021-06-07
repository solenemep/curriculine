import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { CurriContextProvider } from "./context/CurriContext"
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

const CurricuLine = () => {
  return (
    <Router>
      <CurriContextProvider>
        <NavContextProvider>
          <Nav />
        </NavContextProvider>
        <Switch>
          <Route exact path="/">
            <HomeContextProvider>
              <Home />
            </HomeContextProvider>
          </Route>

          <Route exact path="/curriculum">
            <ContentContextProvider>
              <Content />
            </ContentContextProvider>
          </Route>

          <Route exact path="/contact">
            <ContactContextProvider>
              <Contact />
            </ContactContextProvider>
          </Route>
        </Switch>
        <FooterContextProvider>
          <Footer />
        </FooterContextProvider>
      </CurriContextProvider>
    </Router>
  )
}
export default CurricuLine
