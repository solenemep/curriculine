import { langagues } from "./data/content/aside/langagues"

import { intros } from "./data/header/intros"
import { links } from "./data/header/links"

const Header = (props) => {
  const { lang, darkMode } = props

  for (const [index, langague] of langagues.entries()) {
    if (lang === langagues[index]) {

      return (
        <header className="container-fluid min-100-vh">

        </header>
      )
    }
  }
}
export default Header