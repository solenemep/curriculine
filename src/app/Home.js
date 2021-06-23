import { useCurriContext } from "./hook/useCurriContext"
import { useHomeContext } from "./hook/useHomeContext"

import Card from "./Card"
import SP from "../img/SP.jpg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  Box,
  VStack,
  HStack,
  Heading,
  Link,
  SimpleGrid,
  Text,
  Avatar,
  Container,
} from "@chakra-ui/react"

const Home = () => {
  const { lang, hoverContent } = useCurriContext()
  const { home } = useHomeContext()

  return (
    <Container maxW={"container.xl"}>
      <VStack id="intro" alignItems={"left"} spacing={8} mb={16}>
        <HStack spacing={8}>
          <Avatar size="lg" src={SP} />

          <Heading as="h1" size={"lg"}>
            {home.name}
          </Heading>
          <Link
            _hover={hoverContent}
            href={home.linkedin}
            aria-label="my linkedin"
            isExternal
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>

          <Link
            _hover={hoverContent}
            href={home.github}
            aria-label="my github"
            isExternal
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>

          <Link
            _hover={hoverContent}
            href={home.codepen}
            aria-label="my codepen"
            isExternal
          >
            <FontAwesomeIcon icon={faCodepen} />
          </Link>

          <Link
            _hover={hoverContent}
            href={home.mail}
            aria-label="my email"
            isExternal
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
        </HStack>
        <Heading style={{ textTransform: "uppercase" }} size="2xl">
          {home.qualification[lang]}
        </Heading>
        <Text as={"small"}>{home.paragraph[lang]}</Text>
      </VStack>
      <SimpleGrid
        id="highlight"
        columns={{ base: 1, lg: 3 }}
        spacing={8}
        mb={16}
      >
        {home.highlights.map((highlight) => {
          return (
            <Card
              key={highlight.title[lang]}
              color={highlight.color}
              title={highlight.title[lang]}
              date={highlight.date[lang]}
              establishment={highlight.establishment[lang]}
              location={highlight.location[lang]}
              section={highlight.section}
              fields={highlight.fields}
              skills={highlight.skills}
              github={highlight.github}
              link={highlight.link}
              path={highlight.path}
              details={highlight.details[lang]}
            />
          )
        })}
      </SimpleGrid>
    </Container>
  )
}

export default Home
