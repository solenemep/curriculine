import {
  Flex,
  Link,
  useDisclosure,
  IconButton,
  HStack,
  Box,
  VStack,
  Heading,
} from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"

import DarkMode from "./componentsNav/DarkMode"
import Langague from "./componentsNav/Langague"

import { useCurriContext } from "./hook/useCurriContext"
import { useNavContext } from "./hook/useNavContext"

const Nav = () => {
  const { lang, bgNavFoot, hoverNavFoot, setSection } = useCurriContext()
  const { home, main, contacts } = useNavContext()
  const {
    isOpen: navIsOpen,
    onOpen: navOnOpen,
    onClose: navOnClose,
  } = useDisclosure()

  return (
    <Box bg={bgNavFoot} px={4} style={{ position: "sticky", top: "0" }}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          aria-label={"Open Menu"}
          display={{ lg: "none" }}
          onClick={navIsOpen ? navOnClose : navOnOpen}
          bg={bgNavFoot}
          _hover={hoverNavFoot}
        >
          {navIsOpen ? <CloseIcon /> : <HamburgerIcon />}
        </IconButton>
        <HStack id="routes" spacing={8} alignItems={"center"}>
          <HStack as={"nav"} spacing={4} display={{ base: "none", lg: "flex" }}>
            <Link
              style={{ fontWeight: "bold" }}
              href={"/"}
              aria-label={"home page"}
              px={2}
              py={1}
              rounded={"md"}
              _hover={hoverNavFoot}
            >
              {home.title[lang]}
            </Link>

            <Link
              href={"/curriculum"}
              aria-label={"education page"}
              px={2}
              py={1}
              rounded={"md"}
              _hover={hoverNavFoot}
              onClick={() => setSection("education")}
            >
              {main.education.title[lang]}
            </Link>

            <Link
              href={"/curriculum"}
              aria-label={"experience page"}
              px={2}
              py={1}
              rounded={"md"}
              _hover={hoverNavFoot}
              onClick={() => setSection("experience")}
            >
              {main.experience.title[lang]}
            </Link>

            <Link
              href={"/curriculum"}
              aria-label={"portfolio page"}
              px={2}
              py={1}
              rounded={"md"}
              _hover={hoverNavFoot}
              onClick={() => setSection("portfolio")}
            >
              {main.portfolio.title[lang]}
            </Link>

            <Link
              href={"/contact"}
              aria-label={"contact page"}
              px={2}
              py={1}
              rounded={"md"}
              _hover={hoverNavFoot}
            >
              {contacts.title[lang]}
            </Link>
          </HStack>
        </HStack>
        <HStack id="settings" h={16} alignItems={"center"}>
          <Langague />
          <DarkMode />
        </HStack>
      </Flex>

      {navIsOpen ? (
        <Box pb={4} display={{ lg: "none" }}>
          <VStack as={"nav"} spacing={2} alignItems={"left"}>
            <Link
              style={{ fontWeight: "bold" }}
              href={"/"}
              aria-label={"home page"}
              px={2}
              py={1}
              rounded={"md"}
              _hover={hoverNavFoot}
            >
              <HStack>
                <Heading as="h1" size={"sm"}>
                  {home.name}
                </Heading>
              </HStack>
            </Link>

            <Link
              href={"/curriculum"}
              aria-label={"education page"}
              px={2}
              py={1}
              rounded={"md"}
              _hover={hoverNavFoot}
              onClick={() => setSection("education")}
            >
              {main.education.title[lang]}
            </Link>

            <Link
              href={"/curriculum"}
              aria-label={"experience page"}
              px={2}
              py={1}
              rounded={"md"}
              _hover={hoverNavFoot}
              onClick={() => setSection("experience")}
            >
              {main.experience.title[lang]}
            </Link>

            <Link
              href={"/curriculum"}
              aria-label={"portfolio page"}
              px={2}
              py={1}
              rounded={"md"}
              _hover={hoverNavFoot}
              onClick={() => setSection("portfolio")}
            >
              {main.portfolio.title[lang]}
            </Link>

            <Link
              href={"/contact"}
              aria-label={"contact page"}
              px={2}
              py={1}
              rounded={"md"}
              _hover={hoverNavFoot}
            >
              {contacts.title[lang]}
            </Link>
          </VStack>
        </Box>
      ) : null}
    </Box>
  )
}

export default Nav
