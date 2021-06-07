import { Link } from "react-router-dom"

import DarkMode from "../app/componentsNav/DarkMode"
import Langague from "../app/componentsNav/Langague"

import { useCurriContext } from "./hook/useCurriContext"
import { useNavContext } from "./hook/useNavContext"

const Nav = () => {
  const { index, darkMode } = useCurriContext()
  const { navs, intros, contacts } = useNavContext()

  return (
    <nav className="bg-dark text-white d-flex flex-row">
      <div className="nav-items">
        <Link to="/" aria-label="home page">
          {intros[index].name}
        </Link>
        <Link to="/curriculum" aria-label="curriculum page">
          CURRICULUM
        </Link>
        <Link to="/contact" aria-label="contact page">
          {contacts[index].title}
        </Link>
      </div>
      <div className="nav-items">
        <Langague />
        <DarkMode />
      </div>
    </nav>
  )
}

export default Nav
