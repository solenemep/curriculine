import { useContentContext } from "../hook/useContentContext"
import { useCurriContext } from "../hook/useCurriContext"

const Main = () => {
  const { index, darkMode, section, changeSection } = useCurriContext()
  const { curriculum } = useContentContext()
  //si tous les filters sont à false, toute la liste, sinon juste les true

  const cardContent = darkMode ? "card-dark" : "card-light"

  return (
    <main className="col-md-9">
      <div role="group" aria-label="section choice">
        <button
          type="button"
          value="education"
          disabled={section === "education"}
          onClick={changeSection}
        >
          {curriculum[index].educations.title}
        </button>
        <button
          type="button"
          value="experience"
          disabled={section === "experience"}
          onClick={changeSection}
        >
          {curriculum[index].experiences.title}
        </button>
        <button
          type="button"
          value="portfolio"
          disabled={section === "portfolio"}
          onClick={changeSection}
        >
          {curriculum[index].portfolios.title}
        </button>
      </div>
      {section === "education" && (
        <section id="education">
          <h2>{curriculum[index].educations.title}</h2>
          {curriculum[index].educations.items.map((item) => {
            return (
              <article>
                <div class={cardContent}>
                  <h3>{item.name}</h3>
                  <small>
                    {item.date_start} - {item.date_end}
                  </small>
                  <p>{item.location}</p>
                  <p>{item.establishment}</p>
                  <ul>
                    {item.skills.map((skill) => {
                      return (
                        <li>
                          <button type="button">{skill.text}</button>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </article>
            )
          })}
        </section>
      )}
      {section === "experience" && (
        <section id="experience">
          <h2>{curriculum[index].experiences.title}</h2>
          {curriculum[index].experiences.items.map((item) => {
            return (
              <article>
                <div className={cardContent}>
                  <h3>{item.name}</h3>
                  <small>
                    {item.date_start} - {item.date_end}
                  </small>
                  <p>{item.location}</p>
                  <p>{item.establishment}</p>
                  <ul>
                    {item.details.map((detail) => {
                      return <p>{detail}</p>
                    })}
                  </ul>
                  <ul>
                    {item.skills.map((skill) => {
                      return (
                        <li>
                          <button type="button">{skill.text}</button>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </article>
            )
          })}
        </section>
      )}
      {section === "portfolio" && (
        <section id="portfolio">
          <h2>{curriculum[index].portfolios.title}</h2>

          {curriculum[index].portfolios.items.map((item) => {
            return (
              <article>
                <div className={cardContent}>
                  <h3>
                    <a href={item.repository}>{item.name}</a>
                  </h3>
                  <small>
                    {item.date_start} - {item.date_end}
                  </small>
                  <p>{item.location}</p>
                  <ul>
                    {item.details.map((detail) => {
                      return <p>{detail}</p>
                    })}
                  </ul>
                  <a href={item.link}>{item.link}</a>
                  <ul>
                    {item.skills.map((skill) => {
                      return (
                        <li>
                          <button type="button">{skill.text}</button>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </article>
            )
          })}
        </section>
      )}
    </main>
  )
}

export default Main
