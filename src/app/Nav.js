import { Link } from "react-router-dom"

import DarkMode from "../app/componentsNav/DarkMode"
import Langague from "../app/componentsNav/Langague"

import { useCurriContext } from "./hook/useCurriContext"
import { useNavContext } from "./hook/useNavContext"

const Nav = () => {
  const { index } = useCurriContext()
  const { home, main, contacts } = useNavContext()

  return (
    <nav className="bg-navfoot">
      <section id="routes" className="navfoot-items">
        <Link to="/" aria-label="home page" className="text-white">
          {home[index].name}
        </Link>
        <Link
          to="/curriculum"
          aria-label="curriculum page"
          className="text-white"
        >
          {main[index].name}
        </Link>
        <Link to="/contact" aria-label="contact page" className="text-white">
          {contacts[index].title}
        </Link>
      </section>
      <section id="settings" className="navfoot-items">
        <Langague />
        <DarkMode />
      </section>
    </nav>
  )
}

export default Nav
