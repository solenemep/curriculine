import { langagues } from "./data/content/aside/langagues"

import { highlights } from "./data/hightlights/highligths"

const Highlights = (props) => {
  const { lang, darkMode } = props

  for (const [index, langague] of langagues.entries()) {
    if (lang === langagues[index]) {

      return (
        <section></section>
      )
    }
  }
}
export default Highlights