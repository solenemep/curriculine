import { useCurriContext } from "./hook/useCurriContext"
import { useHomeContext } from "./hook/useHomeContext"

import SP from "./img/SP.jpg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  VStack,
  HStack,
  Heading,
  Link,
  SimpleGrid,
  Text,
  Avatar,
  Container,
} from "@chakra-ui/react"
import CardHome from "./card/CardHome"

const Home = () => {
  const { lang, hoverNavFoot } = useCurriContext()
  const { intro, highlights } = useHomeContext()

  return (
    <Container maxW={"container.xl"} pt={8}>
      <HStack
        id="intro"
        alignItems={"center"}
        mb={24}
        justifyContent={"left"}
        spacing={16}
      >
        <Avatar size="2xl" src={SP} />
        <VStack alignItems={"left"} spacing={4}>
          <HStack spacing={8}>
            <Heading as="h1" size={"xl"}>
              {intro.name}
            </Heading>

            <Link
              _hover={hoverNavFoot}
              href={intro.linkedin}
              aria-label="my linkedin"
              isExternal
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>

            <Link
              _hover={hoverNavFoot}
              href={intro.github}
              aria-label="my github"
              isExternal
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>

            <Link
              _hover={hoverNavFoot}
              href={intro.codepen}
              aria-label="my codepen"
              isExternal
            >
              <FontAwesomeIcon icon={faCodepen} />
            </Link>

            <Link
              _hover={hoverNavFoot}
              href={intro.mail}
              aria-label="my email"
              isExternal
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
          </HStack>
          <Heading style={{ textTransform: "uppercase" }} size="md">
            {intro.title[lang]}
          </Heading>
        </VStack>
      </HStack>

      <SimpleGrid
        id="highlight"
        columns={{ base: 1, lg: 3 }}
        spacing={8}
        mb={16}
      >
        {highlights.map((highlight) => {
          return (
            <CardHome
              key={highlight.key}
              color={highlight.color}
              title={highlight.title[lang]}
              section={highlight.section}
              path={highlight.path}
              more={highlight.more}
              filter={highlight.filter}
              details={highlight.details}
            />
          )
        })}
      </SimpleGrid>
    </Container>
  )
}

export default Home
