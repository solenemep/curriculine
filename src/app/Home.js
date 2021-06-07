import { Link } from "react-router-dom"

import { useCurriContext } from "./hook/useCurriContext"
import { useHomeContext } from "./hook/useHomeContext"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Home = () => {
  const { index, darkMode, changeSection } = useCurriContext()
  const { intros, highlights } = useHomeContext()

  return (
    <section id="home" className="container">
      <h1>{intros[index].name}</h1>
      <small>{intros[index].title}</small>
      <p>{intros[index].paragraph}</p>
      <ul>
        <li>
          <a
            href={intros[index].linkedin}
            aria-label="my linkedin"
            target="blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </li>
        <li>
          <a
            href={intros[index].github}
            aria-label="my github"
            target="blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </li>
        <li>
          <a
            href={intros[index].codepen}
            aria-label="my codepen"
            target="blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faCodepen} size="2x" />
          </a>
        </li>
        <li>
          <a
            href={intros[index].mail}
            aria-label="my email"
            target="blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </li>
      </ul>
      <ul className="row">
        {highlights[index].items.map((highlight) => {
          return (
            <li className="col-md-4">
              <h2>{highlight.title}</h2>
              <p>{highlight.detail}</p>
              <a href={highlight.link}>
                <button
                  type="button"
                  onClick={changeSection}
                  value={highlight.section}
                >
                  {highlight.see}
                </button>
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Home
