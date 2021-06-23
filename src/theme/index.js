// src/theme/index.js
import { extendTheme } from "@chakra-ui/react"
// Global style overrides
import { styles } from "./styles"
// Foundational style overrides
import { fonts } from "./foundations/fonts"
// Component style overrides
import { Tag } from "./components/Tag"
const overrides = {
  styles,
  fonts,
  // Other foundational style overrides go here
  components: {
    Tag,
    // Other components go here
  },
}
export default extendTheme(overrides)
