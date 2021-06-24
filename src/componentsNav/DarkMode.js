import { Button } from "@chakra-ui/button"
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { useCurriContext } from "../hook/useCurriContext"

const DarkMode = () => {
  const { colorMode, toggleColorMode, bgNavFoot } = useColorMode()
  const { hoverNavFoot } = useCurriContext()

  return (
    <Button
      px={2}
      py={1}
      mx={4}
      size={"md"}
      type="button"
      aria-label="Dark Mode"
      onClick={toggleColorMode}
      bg={bgNavFoot}
      _hover={hoverNavFoot}
    >
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  )
}

export default DarkMode
