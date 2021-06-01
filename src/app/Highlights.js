import { useCurriContext } from "./hook/useCurriContext"
import { useHighlightsContext } from "./hook/useHighlightsContext"

const Highlights = () => {
  const { index, darkMode } = useCurriContext()
  const { highlights } = useHighlightsContext()

  return <section></section>
}

export default Highlights
