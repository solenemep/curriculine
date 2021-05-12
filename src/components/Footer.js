import { langagues } from "./data/content/aside/langagues"

import { contacts } from "./data/footer/contacts"
import { copyright } from "./data/footer/copyrights"

const Footer = (props) => {
  const { lang, darkMode } = props

  for (const [index, langague] of langagues.entries()) {
    if (lang === langagues[index]) {

      return (
        <footer>

        </footer>
      )
    }
  }
}
export default Footer