import DarkMode from "./DarkMode"
import Langague from "./Langague"

const Aside = (props) => {
  const { lang, changeLang, darkMode, changeDarkMode } = props
  return (
    <aside className="col-lg-3">
      <form>
        <div>
          <DarkMode
            lang={lang}
            darkMode={darkMode}
            changeDarkMode={changeDarkMode} />
          <Langague
            lang={lang}
            changeLang={changeLang} />
        </div>
        <div>
          <label></label>
          <select></select>
        </div>
        <div>
          <label></label>
          <select></select>
        </div>
      </form>
    </aside>
  )
}
export default Aside