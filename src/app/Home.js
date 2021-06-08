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
  const { home } = useHomeContext()

  const bgHome = darkMode ? "bg-dark" : "bg-light"
  const cardHome = darkMode ? "card-dark" : "card-light"

  return (
    <div className={bgHome}>
      <section id="home" className="container">
        <h1>{home[index].name}</h1>
        <small>{home[index].title}</small>
        <p>{home[index].paragraph}</p>
        <ul>
          <li>
            <a
              href={home[index].linkedin}
              aria-label="my linkedin"
              target="blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </li>
          <li>
            <a
              href={home[index].github}
              aria-label="my github"
              target="blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </li>
          <li>
            <a
              href={home[index].codepen}
              aria-label="my codepen"
              target="blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faCodepen} size="2x" />
            </a>
          </li>
          <li>
            <a
              href={home[index].mail}
              aria-label="my email"
              target="blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </li>
        </ul>

        <section className="row">
          <h2>{home[index].intro}</h2>
          {home[index].items.map((item) => {
            return (
              <article className="col-lg-4">
                <div className={cardHome}>
                  <h3>{item.title}</h3>

                  <a href={item.link}>
                    <button
                      type="button"
                      onClick={changeSection}
                      value={item.section}
                    >
                      {item.see}
                    </button>
                  </a>
                  <ul>
                    {item.details.map((detail) => {
                      return <li>{detail}</li>
                    })}
                  </ul>
                </div>
              </article>
            )
          })}
        </section>
      </section>
    </div>
  )
}

export default Home
