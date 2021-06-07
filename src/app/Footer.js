import { useCurriContext } from "./hook/useCurriContext"
import { useFooterContext } from "./hook/useFooterContext"

const Footer = () => {
  const { index, darkMode } = useCurriContext()
  const { copyrights } = useFooterContext()

  return (
    <footer className="bg-dark text-white">
      <p>
        {copyrights[index].madeby} - {copyrights[index].copyright}
      </p>
    </footer>
  )
}

export default Footer
