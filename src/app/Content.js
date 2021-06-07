import Main from "./componentsContent/Main"
import Aside from "./componentsContent/Aside"

import { useCurriContext } from "./hook/useCurriContext"
import { useContentContext } from "./hook/useContentContext"

const Content = () => {
  const { index } = useCurriContext()
  const {} = useContentContext()

  return (
    <section id="content" className="container">
      <div className="row">
        <Main />
        <Aside />
      </div>
    </section>
  )
}

export default Content
