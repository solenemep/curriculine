import { useCurriContext } from "../hook/useCurriContext"
import { langagues } from "../data/content/aside/langagues"

const Langague = () => {
  const { lang, changeLang } = useCurriContext()
  return (
    <div role="group" aria-label="langague choice">
      {langagues.map((langague) => {
        return (
          <button
            key={langague}
            type="button"
            value={langague}
            onClick={changeLang}
            disabled={langague === lang}
          >
            {langague}
          </button>
        )
      })}
    </div>
  )
}
export default Langague
