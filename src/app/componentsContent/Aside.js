import DarkMode from "./DarkMode"
import Langague from "./Langague"

import { useCurriContext } from "../hook/useCurriContext"
import { useContentContext } from "../hook/useContentContext"

const Aside = () => {
  const { index, lang, changeLang, darkMode, changeDarkMode } =
    useCurriContext()
  const {
    fields,
    uniqueFields,
    filterFields,
    updateFilterFields,
    skills,
    uniqueSkills,
    filterSkills,
    updateFilterSkills,
  } = useContentContext()

  return (
    <aside className="col-lg-3">
      <form>
        <div>
          <DarkMode />
          <Langague />
        </div>
        <div>
          <label htmlFor="fields">{fields[index]}</label>
          <select
            id="fields"
            aria-label="select fields"
            onClick={updateFilterFields}
          >
            {uniqueFields.map((field) => {
              return (
                <option
                  key={field}
                  value={field}
                  selected={field === filterFields}
                >
                  {field}
                </option>
              )
            })}
          </select>
        </div>
        <div>
          <label htmlFor="skills">{skills[index]}</label>
          <select
            id="skills"
            aria-label="select skills"
            onClick={updateFilterSkills}
          >
            {uniqueSkills.map((skill) => {
              return (
                <option
                  key={skill}
                  value={skill}
                  selected={skill === filterSkills}
                >
                  {skill}
                </option>
              )
            })}
          </select>
        </div>
      </form>
    </aside>
  )
}
export default Aside
