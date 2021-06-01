import { useCurriContext } from "./hook/useCurriContext"
import { useContentContext } from "./hook/useContentContext"

import Main from "./componentsContent/Main"
import Aside from "./componentsContent/Aside"

const Content = () => {
  const { index, lang, changeLang, darkMode, changeDarkMode } =
    useCurriContext()
  const {
    educations,
    experiences,
    portfolios,
    filteredEducation,
    filteredExperience,
    filteredPortfolio,
  } = useContentContext()

  return (
    <div className="container">
      <Main />
      <Aside />
    </div>
  )
}

export default Content
