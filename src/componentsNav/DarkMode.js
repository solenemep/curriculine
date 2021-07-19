import { Button } from "@chakra-ui/button"
import { useColorMode } from "@chakra-ui/color-mode"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { useCurriContext } from "../hook/useCurriContext"

const DarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { bgNav, hoverButton } = useCurriContext()

  return (
    <Button
      px={2}
      py={1}
      mx={4}
      size={"md"}
      aria-label="Dark Mode"
      onClick={toggleColorMode}
      bg={bgNav}
      _hover={hoverButton}
    >
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  )
}

export default DarkMode
