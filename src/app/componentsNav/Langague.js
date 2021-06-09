import { useCurriContext } from "../hook/useCurriContext"

const Langague = () => {
  const { langagues, lang, setLang } = useCurriContext()
  return (
    <div role="group" aria-label="langague choice" className="btn-group">
      {langagues.map((langague) => {
        return (
          <button
            key={langague}
            type="button"
            value={langague}
            onClick={(e) => setLang(e.target.value)}
            disabled={langague === lang}
            className="btn btn-outline-light btn-sm"
          >
            {langague}
          </button>
        )
      })}
    </div>
  )
}
export default Langague
