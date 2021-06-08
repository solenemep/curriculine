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
  const {
    contacts,
    submitEmail,
    sendName,
    changeSendName,
    sendEmail,
    changeSendEmail,
    sendSubject,
    changeSendSubject,
    sendMessage,
    changeSendMessage,
  } = useContactContext()

  const bgContact = darkMode ? "bg-dark" : "bg-light"

  return (
    <div className={bgContact}>
      <section id="contact" className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2>{contacts[index].title}</h2>
            <ul>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
                {contacts[index].address}
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} /> {contacts[index].phone}
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} /> {contacts[index].mailto}
              </li>
              <li>
                <FontAwesomeIcon icon={faDiscord} /> {contacts[index].discord}
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <h2>{contacts[index].write}</h2>
            <form onSubmit={submitEmail} id="send-form">
              <label htmlFor="name">{contacts[index].name}</label>
              <input
                id="name"
                type="text"
                aria-label="name"
                value={sendName}
                onChange={changeSendName}
                required
              ></input>
              <label htmlFor="email">{contacts[index].sendermail}</label>
              <input
                id="email"
                type="email"
                aria-label="email"
                value={sendEmail}
                onChange={changeSendEmail}
                required
              ></input>
              <label htmlFor="subject">{contacts[index].subject}</label>
              <input
                id="subject"
                type="text"
                aria-label="subject"
                value={sendSubject}
                onChange={changeSendSubject}
                required
              ></input>
              <label htmlFor="message">{contacts[index].message}</label>
              <textarea
                id="message"
                aria-label="message"
                value={sendMessage}
                onChange={changeSendMessage}
                required
              ></textarea>
              <button type="submit">{contacts[index].send}</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
