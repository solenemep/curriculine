import { useCurriContext } from "./hook/useCurriContext"
import { useHomeContext } from "./hook/useHomeContext"

import Card from "./Card"
import SP from "../img/SP.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Home = () => {
  const { index, darkMode } = useCurriContext()
  const { home } = useHomeContext()

  return (
    <div className="container py-5">
      <section id="intro">
        <div className="d-flex flex-row align-items-end">
          <img
            className="img-fluid rounded me-5"
            src={SP}
            width="150px"
            height="150px"
          ></img>
          <div>
            <h1 className="display-3">{home[index].name}</h1>
            <p style={{ textTransform: "uppercase" }}>{home[index].title}</p>
            <ul className="list-inline mb-0">
              <li className="list-inline-item me-3">
                <a
                  className={darkMode ? "text-white" : "text-dark"}
                  href={home[index].linkedin}
                  aria-label="my linkedin"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </li>
              <li className="list-inline-item me-3">
                <a
                  className={darkMode ? "text-white" : "text-dark"}
                  href={home[index].github}
                  aria-label="my github"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </li>
              <li className="list-inline-item me-3">
                <a
                  className={darkMode ? "text-white" : "text-dark"}
                  href={home[index].codepen}
                  aria-label="my codepen"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faCodepen} size="2x" />
                </a>
              </li>
              <li className="list-inline-item me-3">
                <a
                  className={darkMode ? "text-white" : "text-dark"}
                  href={home[index].mail}
                  aria-label="my email"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="m-5 text-center">
          <small>{home[index].paragraph}</small>
        </div>
      </section>
      <section id="highlight" className="row">
        {home[index].items.map((item) => {
          return (
            <article key={item.title} className="col-lg-4">
              <Card
                title={item.title}
                date={item.date}
                establishment={item.establishment}
                location={item.location}
                skills={item.skills}
                field={item.fields}
                pathSection={item.pathSection}
                github={item.github}
                link={item.link}
                path={item.path}
                details={item.details}
              />
            </article>
          )
        })}
      </section>
    </div>
  )
}

export default Home
