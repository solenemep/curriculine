import { Link } from "react-router-dom"

import DarkMode from "../app/componentsNav/DarkMode"
import Langague from "../app/componentsNav/Langague"

import { useCurriContext } from "./hook/useCurriContext"
import { useNavContext } from "./hook/useNavContext"

const Nav = () => {
  const { index, darkMode } = useCurriContext()
  const { home, contacts } = useNavContext()

  return (
    <nav className="bg-navfoot">
      <div className="navfoot-items">
        <Link to="/" aria-label="home page">
          {home[index].name}
        </Link>
        <Link to="/curriculum" aria-label="curriculum page">
          Curriculum
        </Link>
        <Link to="/contact" aria-label="contact page">
          {contacts[index].title}
        </Link>
      </div>
      <div className="navfoot-items">
        <Langague />
        <DarkMode />
      </div>
    </nav>
  )
}

export default Nav
