import { langagues } from "../data/content/aside/langagues"

const Langague = (props) => {
  const { lang, changeLang } = props
  return (
    <div className="btn-group" role="group" aria-label="langague choice">
      {langagues.map((langague) => {
        return (
          <button key={langague} type="button" className="btn btn-dark" value={langague} onClick={changeLang} disabled={langague === lang}>{langague}</button>
        )
      })}
    </div >
  )
}
export default Langague