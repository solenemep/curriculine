import { useCurriContext } from "./hook/useCurriContext"
import { useHeaderContext } from "./hook/useHeaderContext"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  const { index, darkMode } = useCurriContext()
  const { intros, links } = useHeaderContext()

  return (
    <header>
      <h1>{intros[index].name}</h1>
      <small>{intros[index].title}</small>
      <p>{intros[index].paragraph}</p>
      <ul>
        <li>
          <a
            href={links[index].linkedin}
            aria-label="my linkedin"
            target="blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </li>
        <li>
          <a
            href={links[index].github}
            aria-label="my github"
            target="blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </li>
        <li>
          <a
            href={links[index].codepen}
            aria-label="my codepen"
            target="blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faCodepen} size="2x" />
          </a>
        </li>
        <li>
          <a
            href={links[index].mail}
            aria-label="my email"
            target="blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </li>
      </ul>
    </header>
  )
}

export default Header
