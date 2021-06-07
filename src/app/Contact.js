import { useCurriContext } from "./hook/useCurriContext"
import { useContactContext } from "./hook/useContactContext"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
  const { index, darkMode } = useCurriContext()
  const { contacts } = useContactContext()

  return (
    <section id="contact" className="container">
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
  )
}

export default Contact
