// src/theme/index.js
import { extendTheme } from "@chakra-ui/react"
// Global style overrides
import { styles } from "./styles"
// Foundational style overrides
import { fonts } from "./foundations/fonts"
const overrides = {
  styles,
  fonts,
}
export default extendTheme(overrides)
