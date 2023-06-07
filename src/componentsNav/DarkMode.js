import { Button } from "@chakra-ui/button"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { useCurriContext } from "../hook/useCurriContext"

const DarkMode = () => {
  const { darkMode, setDarkMode, bgButton, hoverButton } = useCurriContext()

  return (
    <Button
      px={2}
      py={1}
      mx={4}
      size={"md"}
      aria-label="Dark Mode"
      onClick={() => setDarkMode(!darkMode)}
      bg={bgButton}
      _hover={hoverButton}
    >
      {darkMode === false ? <MoonIcon /> : <SunIcon />}
    </Button>
  )
}

export default DarkMode
