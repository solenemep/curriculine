import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBuilding,
  faCalendar,
  faMap,
} from "@fortawesome/free-regular-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faAngleDoubleRight, faLink } from "@fortawesome/free-solid-svg-icons"

import { useCurriContext } from "./hook/useCurriContext"

const Card = (props) => {
  const { darkMode, setSection, style } = useCurriContext()
  const {
    title,
    date,
    establishment,
    location,
    pathSection,
    field,
    skills,
    github,
    link,
    path,
    details,
  } = props

  return (
    <div className={darkMode ? "card bg-myblack" : "card bg-light"}>
      <div className="card-header py-3 lead" style={style}>
        <strong>{title}</strong>
      </div>
      <div className="p-3">
        <div className="d-flex flex-row justify-content-between">
          {date !== "" && (
            <small>
              <FontAwesomeIcon icon={faCalendar} className="me-2" /> {date}
            </small>
          )}
          {establishment !== "" && (
            <small>
              <FontAwesomeIcon icon={faBuilding} className="me-2" />{" "}
              {establishment}
            </small>
          )}
          {location !== "" && (
            <small>
              <FontAwesomeIcon icon={faMap} className="me-2" /> {location}
            </small>
          )}
        </div>
        <ul>
          {details.map((detail) => {
            return <li key={detail}>{detail}</li>
          })}
        </ul>
        <ul className="list-inline text-end">
          {skills.map((skill) => {
            return (
              <li key={skill.text} className="list-inline-item">
                <button
                  type="button"
                  className={
                    darkMode ? "btn btn-outline-light" : "btn btn-outline-dark"
                  }
                >
                  {skill.text}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="card-footer">
        <div className="d-flex flex-row justify-content-between">
          <p>{field}</p>
          <div className="d-flex flex-row justify-content-end gap-3">
            {github !== "" && (
              <a
                href={github}
                className={darkMode ? "text-white" : "text-dark"}
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            )}
            {link !== "" && (
              <a href={link} className={darkMode ? "text-white" : "text-dark"}>
                <FontAwesomeIcon icon={faLink} size="2x" />
              </a>
            )}
            {path !== "" && (
              <a
                href={path}
                className={darkMode ? "text-white" : "text-dark"}
                onClick={() => setSection(pathSection)}
              >
                <FontAwesomeIcon icon={faAngleDoubleRight} size="2x" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card
