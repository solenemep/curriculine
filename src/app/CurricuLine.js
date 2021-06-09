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

const CurricuLine = () => {
  const { darkMode } = useCurriContext()
  return (
    <Router>
      <NavContextProvider>
        <Nav />
      </NavContextProvider>
      <Switch>
        <Route exact path="/">
          <HomeContextProvider>
            <div
              className={darkMode ? "bg-dark text-white" : "bg-white text-dark"}
            >
              <Home />
            </div>
          </HomeContextProvider>
        </Route>

        <Route exact path="/curriculum">
          <ContentContextProvider>
            <div
              className={darkMode ? "bg-dark text-white" : "bg-white text-dark"}
            >
              <Content />
            </div>
          </ContentContextProvider>
        </Route>

        <Route exact path="/contact">
          <ContactContextProvider>
            <div
              className={darkMode ? "bg-dark text-white" : "bg-white text-dark"}
            >
              <Contact />
            </div>
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
