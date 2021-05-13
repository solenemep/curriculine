import { contacts } from "./data/footer/contacts"
import { abouts } from "./data/footer/abouts"
import { copyrights } from "./data/footer/copyrights"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord, faFacebook, faInstagram, faLinkedin, faGithub, faCodepen } from "@fortawesome/free-brands-svg-icons"
import { faMapMarkerAlt, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"

const Footer = (props) => {
  const { index, darkMode } = props

  return (
    <footer className="bg-dark text-white">
      <div className="container">
        <div className="row">
          <section className="col-6">
            <h2>{contacts[index].title}</h2>
            <ul className="list-unstyled">
              <li className="list-item m-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}{contacts[index].address}</li>
              <li className="list-item m-3">
                <FontAwesomeIcon icon={faPhone} />{" "}{contacts[index].phone}</li>
              <li className="list-item m-3">
                <FontAwesomeIcon icon={faEnvelope} />{" "}{contacts[index].mail}</li>
              <li className="list-item m-3">
                <FontAwesomeIcon icon={faDiscord} />{" "}{contacts[index].discord}</li>
            </ul>
          </section>
          <section className="col-6">
            <h2>{abouts[index].title}</h2>
            <p>{abouts[index].info}</p>
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <a href={abouts[index].facebook} aria-label="my facebook" target="blank"
                  rel="noopener noreferrer" >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href={abouts[index].instagram} aria-label="my instagram" target="blank"
                  rel="noopener noreferrer" >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href={abouts[index].linkedin} aria-label="my linkedin" target="blank"
                  rel="noopener noreferrer" >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href={abouts[index].github} aria-label="my github" target="blank"
                  rel="noopener noreferrer" >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href={abouts[index].codepen} aria-label="my codepen" target="blank"
                  rel="noopener noreferrer" >
                  <FontAwesomeIcon icon={faCodepen} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href={abouts[index].mail} aria-label="my email" target="blank"
                  rel="noopener noreferrer" >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <p className="bg-success p-3 text-center text-white">{copyrights[index].madeby} - {copyrights[index].copyright}</p>
    </footer>
  )
}

export default Footer