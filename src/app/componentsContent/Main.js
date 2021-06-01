import { useContentContext } from "../hook/useContentContext"
import { useCurriContext } from "../hook/useCurriContext"

const Main = () => {
  const { index, darkMode } = useCurriContext()
  const { filteredEducation, filteredExperience, filteredPortfolio } =
    useContentContext()

  return <main className="col-lg-9"></main>
}

export default Main
