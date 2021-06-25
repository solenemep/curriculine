import { Link } from "@chakra-ui/react"
import { Fragment } from "react"
import { useCurriContext } from "../hook/useCurriContext"
import { useNavContext } from "../hook/useNavContext"

const NavItems = () => {
  const { lang, setSection, hoverNavFoot } = useCurriContext()
  const { home, curriculum, contacts } = useNavContext()
  return (
    <Fragment>
      <Link
        style={{ fontWeight: "bold" }}
        href={"/"}
        aria-label={"home page"}
        px={2}
        py={1}
        rounded={"md"}
        _hover={hoverNavFoot}
      >
        {home[lang]}
      </Link>

      <Link
        href={"/curriculum"}
        aria-label={"curriculum page"}
        px={2}
        py={1}
        rounded={"md"}
        _hover={hoverNavFoot}
        onClick={() => setSection("education")}
      >
        {curriculum[lang]}
      </Link>

      <Link
        href={"/contact"}
        aria-label={"contact page"}
        px={2}
        py={1}
        rounded={"md"}
        _hover={hoverNavFoot}
      >
        {contacts[lang]}
      </Link>
    </Fragment>
  )
}
export default NavItems
