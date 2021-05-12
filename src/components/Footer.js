import { contacts } from "./data/footer/contacts"
import { copyrights } from "./data/footer/copyrights"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"

const Footer = (props) => {
  const { index, darkMode } = props

  return (
    <footer className="container-fluid bg-dark text-white p-3">
      <h2>{contacts[index].title}</h2>
      <ul className="list-unstyled">
        <li className="list-item m-3">
          <FontAwesomeIcon icon={faPhone} />{" "}{contacts[index].phone}</li>
        <li className="list-item m-3">
          <FontAwesomeIcon icon={faEnvelope} />{" "}{contacts[index].mail}</li>
        <li className="list-item m-3">
          <FontAwesomeIcon icon={faDiscord} />{" "}{contacts[index].discord}</li>
        <li className="list-item m-3">
          <FontAwesomeIcon icon={faLinkedin} />{" "}{contacts[index].linkedin}</li>
      </ul>
      <p>{copyrights[index].madeby} - {copyrights[index].copyright}</p>
    </footer>
  )
}

export default Footer