import { useState, useEffect } from "react"
import { useCurriContext } from "./hook/useCurriContext"
import { useContentContext } from "./hook/useContentContext"

import Card from "./Card"

const Content = () => {
  const { index, darkMode, section, setSection } = useCurriContext()
  const { main, aside, toggleFilter } = useContentContext()

  const [list, setList] = useState(main[index].educations)
  useEffect(() => {
    if (section === "education") {
      setList(main[index].educations)
    } else if (section === "experience") {
      setList(main[index].experiences)
    } else if (section === "portfolio") {
      setList(main[index].portfolios)
    }
  }, [[index], [section]])

  return (
    <div className="container py-5">
      <div className="row">
        <h2 className="display-5">{list.title}</h2>

        <section id="main" className="col-lg-8">
          <div className="my-3">
            {list.items.map((item) => {
              return (
                <article key={item.title}>
                  <Card
                    title={item.title}
                    date={item.date}
                    establishment={item.establishment}
                    location={item.location}
                    section={item.section}
                    fields={item.fields}
                    skills={item.skills}
                    github={item.github}
                    link={item.link}
                    path={item.path}
                    details={item.details}
                  />
                </article>
              )
            })}
          </div>
        </section>
        <section id="aside" className="col-lg-4">
          <form className="my-3">
            <label className="form-label" htmlFor="section">
              {aside[index].change_section}
            </label>
            <select
              id="section"
              className={
                darkMode ? "form-select bg-dark text-white" : "form-select"
              }
              aria-label="select section"
              onChange={(e) => setSection(e.target.value)}
              value={section}
            >
              <option value="education">{main[index].educations.title}</option>
              <option value="experience">
                {main[index].experiences.title}
              </option>
              <option value="portfolio">{main[index].portfolios.title}</option>
            </select>

            <label htmlFor=""></label>
            <select id="" aria-label="" onClick={toggleFilter}></select>
          </form>
        </section>
      </div>
    </div>
  )
}

export default Content
