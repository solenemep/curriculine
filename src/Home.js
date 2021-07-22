import { useCurriContext } from "./hook/useCurriContext"
import { useHomeContext } from "./hook/useHomeContext"

import SP from "./img/SP.jpg"

import {
  VStack,
  HStack,
  Heading,
  SimpleGrid,
  Avatar,
  Container,
  Text,
} from "@chakra-ui/react"
import CardHome from "./card/CardHome"

const Home = () => {
  const { lang } = useCurriContext()
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
        <Avatar size="2xl" src={SP} name={"SP"} />
        <VStack alignItems={"left"} spacing={2}>
          <Heading as="h1" size={"2xl"}>
            {intro.name}
          </Heading>

          <Text fontSize="xl">{intro.title1[lang]}</Text>
          <Text fontSize="xl">{intro.title2[lang]}</Text>
          <Text as="small">{intro.speaks[lang]}</Text>
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
