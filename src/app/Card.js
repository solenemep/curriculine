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
    section,
    fields,
    skills,
    github,
    link,
    path,
    details,
  } = props

  return (
    <div className={darkMode ? "card bg-myblack" : "card bg-light"}>
      <div className="card-header py-3 h3" style={style}>
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
        <div style={{ position: "relative" }}>
          <div className="p-4">
            <ul className="mb-0">
              {details.map((detail) => {
                return (
                  <li key={detail} className="mb-2">
                    {detail}
                  </li>
                )
              })}
            </ul>
          </div>
          <ul
            className="list-inline text-end mb-0"
            style={{ position: "absolute", bottom: "0", right: "0" }}
          >
            {skills.map((skill) => {
              return (
                <li key={skill.text} className="list-inline-item">
                  <button
                    type="button"
                    className={
                      darkMode
                        ? "btn btn-outline-light btn-sm"
                        : "btn btn-sm btn-outline-dark"
                    }
                  >
                    {skill.text}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="card-footer">
        <div className="d-flex flex-row justify-content-between align-items-center">
          <div className="d-flex flex-row justify-content-start gap-3">
            {fields.map((field) => (
              <p key={field} className="m-0">
                {field}
              </p>
            ))}
          </div>
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
                onClick={() => setSection(section)}
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
