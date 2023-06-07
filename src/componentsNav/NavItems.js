import { Link, Button } from "@chakra-ui/react"
import { Fragment } from "react"
import { useCurriContext } from "../hook/useCurriContext"
import { useNavContext } from "../hook/useNavContext"

const NavItems = () => {
  const { lang, setSection, bgButton, hoverButton } = useCurriContext()
  const { home, curriculum, contacts } = useNavContext()
  return (
    <Fragment>
      <Button
        as={Link}
        fontWeight={"normal"}
        href={"/"}
        aria-label={"home page"}
        px={2}
        py={1}
        rounded={"md"}
        bg={bgButton}
        _hover={hoverButton}
      >
        {home[lang]}
      </Button>

      <Button
        as={Link}
        href={"/curriculum"}
        fontWeight={"normal"}
        aria-label={"curriculum page"}
        px={2}
        py={1}
        rounded={"md"}
        bg={bgButton}
        _hover={hoverButton}
        onClick={() => setSection("education")}
      >
        {curriculum[lang]}
      </Button>

      <Button
        as={Link}
        href={"/contact"}
        fontWeight={"normal"}
        aria-label={"contact page"}
        px={2}
        py={1}
        rounded={"md"}
        bg={bgButton}
        _hover={hoverButton}
      >
        {contacts[lang]}
      </Button>
    </Fragment>
  )
}
export default NavItems
