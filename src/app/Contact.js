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

  return (
    <div className="container py-5">
      <div className="row">
        <h2 className="display-5">{contacts[index].title}</h2>
        <section id="mail" className="col-lg-8">
          <form onSubmit={submitEmail} id="send-form" className="my-3">
            <label className="form-label" htmlFor="name">
              {contacts[index].name}
            </label>
            <input
              className={
                darkMode
                  ? "form-control bg-dark text-white mb-3"
                  : "form-control mb-3"
              }
              id="name"
              type="text"
              aria-label="name"
              value={sendName}
              onChange={changeSendName}
              required
            ></input>
            <label className="form-label" htmlFor="email">
              {contacts[index].sendermail}
            </label>
            <input
              className={
                darkMode
                  ? "form-control bg-dark text-white mb-3"
                  : "form-control mb-3"
              }
              id="email"
              type="email"
              aria-label="email"
              value={sendEmail}
              onChange={changeSendEmail}
              required
            ></input>
            <label className="form-label" htmlFor="subject">
              {contacts[index].subject}
            </label>
            <input
              className={
                darkMode
                  ? "form-control bg-dark text-white mb-3"
                  : "form-control mb-3"
              }
              id="subject"
              type="text"
              aria-label="subject"
              value={sendSubject}
              onChange={changeSendSubject}
              required
            ></input>
            <label className="form-label" htmlFor="message">
              {contacts[index].message}
            </label>
            <textarea
              className={
                darkMode
                  ? "form-control bg-dark text-white mb-3"
                  : "form-control mb-3"
              }
              rows="6"
              id="message"
              aria-label="message"
              value={sendMessage}
              onChange={changeSendMessage}
              required
            ></textarea>
            <button
              className={
                darkMode
                  ? "mb-3 btn btn-outline-light"
                  : "mb-3 btn btn-outline-dark"
              }
              type="submit"
            >
              {contacts[index].send}
            </button>
          </form>
        </section>
        <section id="coord" className="col-lg-4 d-flex flex-column">
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="me-3" />{" "}
            {contacts[index].address}
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} size="2x" className="me-3" />{" "}
            {contacts[index].phone}
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} size="2x" className="me-3" />{" "}
            {contacts[index].mailto}
          </p>
          <p>
            <FontAwesomeIcon icon={faDiscord} size="2x" className="me-3" />{" "}
            {contacts[index].discord}
          </p>
        </section>
      </div>
    </div>
  )
}

export default Contact
