import { useCurriContext } from "../hook/useCurriContext"
import { useContentContext } from "../hook/useContentContext"

const Aside = () => {
  const { index } = useCurriContext()
  const { uniqueTag, filter, toggleFilter } = useContentContext()

  return (
    <aside className="col-md-3">
      <form>
        <label htmlFor=""></label>
        <select id="" aria-label="" onClick={toggleFilter}></select>
      </form>
    </aside>
  )
}
export default Aside
