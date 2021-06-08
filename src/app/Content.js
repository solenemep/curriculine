import Main from "./componentsContent/Main"
import Aside from "./componentsContent/Aside"

import { useCurriContext } from "./hook/useCurriContext"
import { useContentContext } from "./hook/useContentContext"

const Content = () => {
  const { index, darkMode } = useCurriContext()
  const {} = useContentContext()

  const bgContent = darkMode ? "bg-dark" : "bg-light"
  return (
    <div className={bgContent}>
      <section id="content" className="container">
        <div className="row">
          <Main />
          <Aside />
        </div>
      </section>
    </div>
  )
}

export default Content
