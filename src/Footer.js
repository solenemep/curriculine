import { Box, Flex, Link, SimpleGrid, Text } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useCurriContext } from "./hook/useCurriContext"
import { useFooterContext } from "./hook/useFooterContext"
import {
  faGithub,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
  const { lang, bgFoot, colorFoot, hoverButton } = useCurriContext()
  const { copyright, madeby, links } = useFooterContext()

  return (
    <Box bg={bgFoot} color={colorFoot} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box id="madeby" px={2} py={1}>
          <Text>{madeby[lang]}</Text>
        </Box>
        <SimpleGrid columns={{ base: 2, sm: 4 }} spacing={0} mx={4}>
          <Link
            mx={4}
            _hover={hoverButton}
            href={links.linkedin}
            aria-label="my linkedin"
            isExternal
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>

          <Link
            mx={4}
            _hover={hoverButton}
            href={links.github}
            aria-label="my github"
            isExternal
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>

          <Link
            mx={4}
            _hover={hoverButton}
            href={links.codepen}
            aria-label="my codepen"
            isExternal
          >
            <FontAwesomeIcon icon={faCodepen} />
          </Link>

          <Link
            mx={4}
            _hover={hoverButton}
            href={links.mail}
            aria-label="my email"
            isExternal
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
        </SimpleGrid>
        <Box id="copyright" px={2} py={1}>
          <Text>{copyright}</Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default Footer
