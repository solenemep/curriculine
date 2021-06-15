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
  Img,
  Stack,
  VStack,
  HStack,
  Heading,
  Text,
  Link,
  SimpleGrid,
} from "@chakra-ui/react"

const Home = () => {
  const { index, colorTitle, hoverContent } = useCurriContext()
  const { home } = useHomeContext()

  return (
    <Box mx={16} py={16}>
      <HStack
        id="intro"
        alignItems={"center"}
        justifyContent={"left"}
        spacing={16}
      >
        <Img rounded={"sm"} src={SP} width="200px" height="200px"></Img>
        <VStack
          alignItems={"left"}
          justifyContent={"space-between"}
          spacing={8}
        >
          <Heading as="h1" size="2xl" color={colorTitle}>
            {home[index].name}
          </Heading>
          <Text style={{ textTransform: "uppercase" }}>
            {home[index].title}
          </Text>
          <HStack spacing={8}>
            <Link
              _hover={hoverContent}
              href={home[index].linkedin}
              aria-label="my linkedin"
              target="blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </Link>

            <Link
              _hover={hoverContent}
              href={home[index].github}
              aria-label="my github"
              target="blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </Link>

            <Link
              _hover={hoverContent}
              href={home[index].codepen}
              aria-label="my codepen"
              target="blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faCodepen} size="2x" />
            </Link>

            <Link
              _hover={hoverContent}
              href={home[index].mail}
              aria-label="my email"
              target="blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </Link>
          </HStack>
        </VStack>
      </HStack>
      <Stack textAlign={"center"} px={8} my={16}>
        <small>{home[index].paragraph}</small>
      </Stack>
      <SimpleGrid id="highlight" columns={{ base: 1, lg: 3 }} spacing={8}>
        {home[index].items.map((item) => {
          return (
            <Card
              key={item.title}
              title={item.title}
              date={item.date}
              establishment={item.establishment}
              location={item.location}
              section={item.section}
              fields={item.fields}
              skills={item.skills}
              github={item.github}
              link={item.link}
              path={item.path}
              details={item.details}
            />
          )
        })}
      </SimpleGrid>
    </Box>
  )
}

export default Home
