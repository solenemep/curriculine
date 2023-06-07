import {
  Flex,
  useDisclosure,
  IconButton,
  HStack,
  Box,
  VStack,
  Fade,
} from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"

import DarkMode from "./componentsNav/DarkMode"
import Langague from "./componentsNav/Langague"

import { useCurriContext } from "./hook/useCurriContext"

import NavItems from "./componentsNav/NavItems"

const Nav = () => {
  const { bgCurri, bgButton, hoverButton } = useCurriContext()

  const {
    isOpen: navIsOpen,
    onOpen: navOnOpen,
    onClose: navOnClose,
  } = useDisclosure()

  return (
    <Box bg={bgCurri} position="fixed" px={4} w="100%" zIndex="sticky">
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          aria-label={"Open Menu"}
          display={{ lg: "none" }}
          onClick={navIsOpen ? navOnClose : navOnOpen}
          bg={bgButton}
          _hover={hoverButton}
        >
          {navIsOpen ? <CloseIcon /> : <HamburgerIcon />}
        </IconButton>
        <HStack
          id="routes"
          alignItems={"center"}
          as={"nav"}
          spacing={8}
          display={{ base: "none", lg: "flex" }}
        >
          <NavItems />
        </HStack>
        <HStack id="settings" alignItems={"center"}>
          <Langague />
          <DarkMode />
        </HStack>
      </Flex>

      {navIsOpen ? (
        <Fade in={navIsOpen} unmountOnExit={true}>
          <Box pb={4} display={{ lg: "none" }}>
            <VStack as={"nav"} spacing={2} alignItems={"start"}>
              <NavItems />
            </VStack>
          </Box>
        </Fade>
      ) : null}
    </Box>
  )
}

export default Nav
