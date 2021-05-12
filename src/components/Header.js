import { intros } from "./data/header/intros"
import { links } from "./data/header/links"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faCodepen } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
  const { index, darkMode } = props

  return (
    <header className="container-fluid min-100-vh">
      <h1>{intros[index].name}</h1>
      <small>{intros[index].title}</small>
      <p>{intros[index].paragraph}</p>
      <ul className="list-unstyled list-inline">
        <li className="list-inline-item m-3">
          <a href={links[index].linkedin} aria-label="mylinkedin" target="blank"
            rel="noopener noreferrer" className={darkMode ? "text-white" : "text-dark"}>
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </li>
        <li className="list-inline-item m-3">
          <a href={links[index].github} aria-label="mygithub" target="blank"
            rel="noopener noreferrer" className={darkMode ? "text-white" : "text-dark"}>
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </li>
        <li className="list-inline-item m-3">
          <a href={links[index].codepen} aria-label="mycodepen" target="blank"
            rel="noopener noreferrer" className={darkMode ? "text-white" : "text-dark"}>
            <FontAwesomeIcon icon={faCodepen} size="2x" />
          </a>
        </li>
        <li className="list-inline-item m-3">
          <a href={links[index].mail} aria-label="myemail" target="blank"
            rel="noopener noreferrer" className={darkMode ? "text-white" : "text-dark"}>
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </li>
      </ul>
    </header>
  )
}

export default Header