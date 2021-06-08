import { useCurriContext } from "./hook/useCurriContext"
import { useFooterContext } from "./hook/useFooterContext"

const Footer = () => {
  const { index, darkMode } = useCurriContext()
  const { footer } = useFooterContext()

  return (
    <footer className="bg-navfoot d-flex flex-row align-items-center">
      <p className="navfoot-items">{footer[index].madeby}</p>
      <p className="navfoot-items">{footer[index].copyright}</p>
    </footer>
  )
}

export default Footer
