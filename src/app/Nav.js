import {
  Flex,
  Link,
  useDisclosure,
  IconButton,
  HStack,
  Box,
  Stack,
} from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"

import DarkMode from "./componentsNav/DarkMode"
import Langague from "./componentsNav/Langague"

import { useCurriContext } from "./hook/useCurriContext"
import { useNavContext } from "./hook/useNavContext"

const Nav = () => {
  const { index, bgNavFoot, hoverNavFoot } = useCurriContext()
  const { home, main, contacts } = useNavContext()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box bg={bgNavFoot} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ lg: "none" }}
          onClick={isOpen ? onClose : onOpen}
          bg={bgNavFoot}
          hover={hoverNavFoot}
        />
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
              {home[index].name}
            </Link>
            <Link
              style={{ fontWeight: "bold" }}
              href={"/curriculum"}
              aria-label={"curriculum page"}
              px={2}
              py={1}
              rounded={"md"}
              _hover={hoverNavFoot}
            >
              {main[index].name}
            </Link>
            <Link
              href={"/curriculum"}
              aria-label={"education page"}
              px={2}
              py={1}
              rounded={"md"}
              _hover={hoverNavFoot}
            >
              {main[index].educations.title}
            </Link>
            <Link
              href={"/curriculum"}
              aria-label={"experience page"}
              px={2}
              py={1}
              rounded={"md"}
              _hover={hoverNavFoot}
            >
              {main[index].experiences.title}
            </Link>
            <Link
              href={"/contact"}
              aria-label={"portfolio page"}
              px={2}
              py={1}
              rounded={"md"}
              _hover={hoverNavFoot}
            >
              {main[index].portfolios.title}
            </Link>
            <Link
              style={{ fontWeight: "bold" }}
              href={"/contact"}
              aria-label={"contact page"}
              px={2}
              py={1}
              rounded={"md"}
              _hover={hoverNavFoot}
            >
              {contacts[index].title}
            </Link>
          </HStack>
        </HStack>

        <HStack id="settings" h={16} alignItems={"center"}>
          <Langague />
          <DarkMode />
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ lg: "none" }}>
          <Stack as={"nav"} spacing={2}>
            <Link
              style={{ fontWeight: "bold" }}
              href={"/"}
              aria-label={"home page"}
              px={2}
              py={1}
              rounded={"md"}
              _hover={hoverNavFoot}
            >
              {home[index].name}
            </Link>
            <Link
              style={{ fontWeight: "bold" }}
              href={"/curriculum"}
              aria-label={"curriculum page"}
              px={2}
              py={1}
              rounded={"md"}
              _hover={hoverNavFoot}
            >
              {main[index].name}
            </Link>
            <Link
              href={"/curriculum"}
              aria-label={"education page"}
              px={2}
              py={1}
              rounded={"md"}
              _hover={hoverNavFoot}
            >
              {main[index].educations.title}
            </Link>
            <Link
              href={"/curriculum"}
              aria-label={"experience page"}
              px={2}
              py={1}
              rounded={"md"}
              _hover={hoverNavFoot}
            >
              {main[index].experiences.title}
            </Link>
            <Link
              href={"/contact"}
              aria-label={"portfolio page"}
              px={2}
              py={1}
              rounded={"md"}
              _hover={hoverNavFoot}
            >
              {main[index].portfolios.title}
            </Link>
            <Link
              style={{ fontWeight: "bold" }}
              href={"/contact"}
              aria-label={"contact page"}
              px={2}
              py={1}
              rounded={"md"}
              _hover={hoverNavFoot}
            >
              {contacts[index].title}
            </Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  )
}

export default Nav
