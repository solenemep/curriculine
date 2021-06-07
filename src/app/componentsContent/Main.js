import { useContentContext } from "../hook/useContentContext"
import { useCurriContext } from "../hook/useCurriContext"

const Main = () => {
  const { index, darkMode, section, changeSection } = useCurriContext()
  const { educations, experiences, portfolios } = useContentContext()
  //si tous les filters sont à false, toute la liste, sinon juste les true

  return (
    <main className="col-md-9">
      <div role="group" aria-label="section choice">
        <button
          type="button"
          value="education"
          disabled={section === "education"}
          onClick={changeSection}
        >
          {educations[index].title}
        </button>
        <button
          type="button"
          value="experience"
          disabled={section === "experience"}
          onClick={changeSection}
        >
          {experiences[index].title}
        </button>
        <button
          type="button"
          value="portfolio"
          disabled={section === "portfolio"}
          onClick={changeSection}
        >
          {portfolios[index].title}
        </button>
      </div>
      {section === "education" && (
        <section id="education">
          <h2>{educations[index].title}</h2>
          <ul>
            {educations[index].items.map((education) => {
              return (
                <li>
                  <h3>{education.name}</h3>
                  <small>
                    {education.date_start} - {education.date_end}
                  </small>
                  <p>{education.location}</p>
                  <p>{education.establishment}</p>
                </li>
              )
            })}
          </ul>
        </section>
      )}
      {section === "experience" && (
        <section id="experience">
          <h2>{experiences[index].title}</h2>
          <ul>
            {experiences[index].items.map((experience) => {
              return (
                <li>
                  <h3>{experience.name}</h3>
                  <small>
                    {experience.date_start} - {experience.date_end}
                  </small>
                  <p>{experience.location}</p>
                  <p>{experience.establishment}</p>
                  <ul>
                    {experience.details.map((detail) => {
                      return <p>{detail}</p>
                    })}
                  </ul>
                </li>
              )
            })}
          </ul>
        </section>
      )}
      {section === "portfolio" && (
        <section id="portfolio">
          <h2>{portfolios[index].title}</h2>
          <ul>
            {portfolios[index].items.map((portfolio) => {
              return (
                <li>
                  <h3>
                    <a href={portfolio.repository}>{portfolio.name}</a>
                  </h3>
                  <small>
                    {portfolio.date_start} - {portfolio.date_end}
                  </small>
                  <p>{portfolio.location}</p>
                  <ul>
                    {portfolio.details.map((detail) => {
                      return <p>{detail}</p>
                    })}
                  </ul>
                  <a href={portfolio.link}>{portfolio.link}</a>
                </li>
              )
            })}
          </ul>
        </section>
      )}
    </main>
  )
}

export default Main
