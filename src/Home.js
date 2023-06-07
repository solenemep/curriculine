import { useCurriContext } from "./hook/useCurriContext"
import { useHomeContext } from "./hook/useHomeContext"

import SP from "./img/SP.jpg"

import {
  VStack,
  Heading,
  SimpleGrid,
  Container,
  Text,
  Image,
  Stack,
} from "@chakra-ui/react"
import CardHome from "./card/CardHome"

const Home = () => {
  const { lang } = useCurriContext()
  const { intro, highlights } = useHomeContext()

  return (
    <Container maxW={"container.xl"} pt={8}>
      <Stack
        id="intro"
        direction={{ base: "column", lg: "row" }}
        alignItems={"center"}
        mb={16}
        justifyContent={{ base: "center", lg: "left" }}
        spacing={16}
      >
        <Image
          borderRadius="full"
          boxSize="200px"
          src={SP}
          name={"SP"}
          ms={8}
          my={{ base: 0, lg: 4 }}
        />
        <VStack alignItems={"start"} spacing={2}>
          <Heading as="h1" size={"3xl"} mb={4}>
            {intro.name}
          </Heading>
          <Text fontSize="2xl">{intro.title1[lang]}</Text>
          <Text fontSize="2xl">{intro.title2[lang]}</Text>
          <Text fontSize="md" pt={4}>
            {intro.who[lang]}
            {", "}
            {intro.speaks[lang]}
            {", "}
            {intro.remote[lang]}
          </Text>
        </VStack>
      </Stack>

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
              title={highlight.title[lang]}
              speach={highlight.speach[lang]}
              details={highlight.details}
            />
          )
        })}
      </SimpleGrid>
    </Container>
  )
}

export default Home
