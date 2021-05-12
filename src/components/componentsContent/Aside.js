import DarkMode from "./DarkMode"
import Langague from "./Langague"

import { fields } from "../data/content/aside/fields"
import { skills } from "../data/content/aside/skills"

const Aside = (props) => {
  const { index, lang, changeLang, darkMode, changeDarkMode,
    uniqueFields, uniqueSkills,
    filterFields, updateFilterFields,
    filterSkills, updateFilterSkills } = props

  return (
    <aside className="col-lg-3">
      <form>
        <div>
          <DarkMode
            index={index}
            darkMode={darkMode}
            changeDarkMode={changeDarkMode} />
          <Langague
            lang={lang}
            changeLang={changeLang} />
        </div>
        <div>
          <label htmlFor="fields" className="form-label">{fields[index]}</label>
          <select id="fields" className="form-select" aria-label="select fields" onClick={updateFilterFields}>
            {uniqueFields.map((field) => {
              return (
                <option key={field} value={field} selected={field === filterFields}>{field}</option>)
            })}
          </select>
        </div>
        <div>
          <label htmlFor="skills" className="form-label">{skills[index]}</label>
          <select id="skills" className="form-select" aria-label="select skills" onClick={updateFilterSkills}>
            {uniqueSkills.map((skill) => {
              return (
                <option key={skill} value={skill} selected={skill === filterSkills}>{skill}</option>)
            })}
          </select>
        </div>
      </form>
    </aside>
  )
}
export default Aside