import { useCurriContext } from "./hook/useCurriContext"
import { useFooterContext } from "./hook/useFooterContext"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDiscord,
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons"
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
  const { index, darkMode } = useCurriContext()
  const { contacts, abouts, copyrights } = useFooterContext()

  return (
    <footer>
      <section>
        <h2>{contacts[index].title}</h2>
        <ul>
          <li>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {contacts[index].address}
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} /> {contacts[index].phone}
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} /> {contacts[index].mail}
          </li>
          <li>
            <FontAwesomeIcon icon={faDiscord} /> {contacts[index].discord}
          </li>
        </ul>
      </section>
      <section>
        <h2>{abouts[index].title}</h2>
        <p>{abouts[index].info}</p>
        <ul>
          <li>
            <a
              href={abouts[index].facebook}
              aria-label="my facebook"
              target="blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a
              href={abouts[index].instagram}
              aria-label="my instagram"
              target="blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a
              href={abouts[index].linkedin}
              aria-label="my linkedin"
              target="blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              href={abouts[index].github}
              aria-label="my github"
              target="blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              href={abouts[index].codepen}
              aria-label="my codepen"
              target="blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faCodepen} />
            </a>
          </li>
          <li>
            <a
              href={abouts[index].mail}
              aria-label="my email"
              target="blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </ul>
      </section>
      <p>
        {copyrights[index].madeby} - {copyrights[index].copyright}
      </p>
    </footer>
  )
}

export default Footer
