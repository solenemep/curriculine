import { useCurriContext } from "./hook/useCurriContext"
import { useFooterContext } from "./hook/useFooterContext"

const Footer = () => {
  const { index } = useCurriContext()
  const { footer } = useFooterContext()

  return (
    <footer className="bg-navfoot d-flex flex-row align-items-center">
      <section id="madeby" className="navfoot-items">
        <p>{footer[index].madeby}</p>
      </section>
      <section id="copyright" className="navfoot-items">
        <p>{footer[index].copyright}</p>
      </section>
    </footer>
  )
}

export default Footer
