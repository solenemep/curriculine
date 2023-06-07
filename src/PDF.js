import {
  Box,
  Grid,
  Heading,
  HStack,
  Image,
  Link,
  Tag,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react"
import { useCurriContext } from "./hook/useCurriContext"

import SP from "./img/SP.jpg"
import { intro, presentationName } from "./data/home"
import { coord, contacts } from "./data/contact"
import { sections, main, skills, skillName } from "./data/content"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLink,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import {
  faCodepen,
  faDiscord,
  faGithub,
  faLinkedin,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"
import CardPDF from "./card/CardPDF"
import { Fragment } from "react"

const PDF = () => {
  const { lang, bgCard } = useCurriContext()

  const filterMain = (section) => {
    return main.filter((el) => el.section === section)
  }
  const education = filterMain("education").reverse()
  const experience = filterMain("experience").reverse()

  return (
    <Fragment>
      <HStack
        id="head"
        alignItems={"center"}
        justifyContent={"start"}
        mb={8}
        mt={8}
        spacing={16}
      >
        <Image
          borderRadius="full"
          boxSize="200px"
          src={SP}
          name={"SP"}
          ms={8}
          my={4}
        />
        <VStack alignItems={"start"} spacing={2}>
          <Heading as="h1" size={"3xl"} mb={4}>
            {intro.name}
          </Heading>
          <Text fontSize="xl">{intro.title1[lang]}</Text>
          <Text fontSize="xl">{intro.title2[lang]}</Text>
        </VStack>
      </HStack>
      <Grid
        sx={{
          display: "grid",
          gridTemplateColumns: { base: "2fr 1fr" },
          gap: "4rem",
        }}
        alignItems={"start"}
        justifyContent={"space-between"}
      >
        <VStack sx={{ columnSpan: 1 }} alignItems={"stretch"} spacing={12}>
          <VStack alignItems={"stretch"} spacing={2}>
            <Heading as="h2" size="2xl" mb={4}>
              {sections.education[lang]}
            </Heading>
            {education.map((item) => {
              return (
                <CardPDF
                  key={item.key}
                  title={item.title[lang]}
                  date={item.date[lang]}
                  establishment={item.establishment[lang]}
                  location={item.location[lang]}
                  section={item.section}
                  details={item.details}
                />
              )
            })}
          </VStack>
          <VStack alignItems={"stretch"} spacing={2}>
            <Heading as="h2" size="2xl" mb={4}>
              {sections.experience[lang]}
            </Heading>
            {experience.map((item) => {
              return (
                <CardPDF
                  key={item.key}
                  title={item.title[lang]}
                  date={item.date[lang]}
                  establishment={item.establishment[lang]}
                  location={item.location[lang]}
                  section={item.section}
                  details={item.details}
                />
              )
            })}
          </VStack>
        </VStack>
        <VStack sx={{ columnSpan: 1 }} alignItems={"stretch"} spacing={12}>
          <VStack alignItems={"stretch"} spacing={2}>
            <Heading as="h2" size="2xl" mb={4}>
              {presentationName[lang]}
            </Heading>
            <VStack alignItems={"start"} spacing={8}>
              <Text>{intro.who[lang]}</Text>
              <Text>{intro.speaks[lang]}</Text>
              <Text>{intro.remote[lang]}</Text>
            </VStack>
          </VStack>
          <VStack alignItems={"stretch"} spacing={2}>
            <Heading as="h2" size="2xl" mb={4}>
              {sections.portfolio[lang]}
            </Heading>
            <VStack alignItems={"start"} spacing={8}>
              <Link href={coord.githublink}>
                <HStack spacing={4}>
                  <FontAwesomeIcon icon={faGithub} size={"2x"} />
                  <Text>{coord.githublink}</Text>
                </HStack>
              </Link>
              <Link href={coord.linkedinlink}>
                <HStack spacing={4}>
                  <FontAwesomeIcon icon={faLinkedin} size={"2x"} />
                  <Text>{coord.linkedinlink}</Text>
                </HStack>
              </Link>
              <Link href={coord.portfolio}>
                <HStack spacing={4}>
                  <FontAwesomeIcon icon={faLink} size={"2x"} />
                  <Text>{coord.portfolio}</Text>
                </HStack>
              </Link>
              <Link href={coord.codepenlink}>
                <HStack spacing={4}>
                  <FontAwesomeIcon icon={faCodepen} size={"2x"} />
                  <Text>{coord.codepenlink}</Text>
                </HStack>
              </Link>
            </VStack>
          </VStack>
          <VStack alignItems={"stretch"} spacing={2}>
            <Heading as="h2" size="2xl" mb={4}>
              {skillName[lang]}
            </Heading>
            <VStack alignItems={"start"} spacing={8}>
              {skills.map((category) => {
                return (
                  <Box key={category.key}>
                    <Heading as="h3" size="lg" mb={4}>
                      {category.title[lang]}
                    </Heading>
                    <Wrap>
                      {category.items.map((skill) => {
                        return (
                          <Tag bg={bgCard} size={"lg"} key={skill.key}>
                            {skill.text[lang]}
                          </Tag>
                        )
                      })}
                    </Wrap>
                  </Box>
                )
              })}
            </VStack>
          </VStack>
          <VStack alignItems={"stretch"} spacing={2}>
            <Heading as="h2" size="2xl" mb={4}>
              {contacts[lang]}
            </Heading>
            <VStack alignItems={"start"} spacing={8}>
              <HStack spacing={4}>
                <FontAwesomeIcon icon={faMapMarkerAlt} size={"2x"} />
                <Text>{coord.address[lang]}</Text>
              </HStack>
              <Link href={coord.whatsapplink}>
                <HStack spacing={4}>
                  <FontAwesomeIcon icon={faWhatsapp} size={"2x"} />
                  <Text>{coord.whatsapp}</Text>
                </HStack>
              </Link>
              <Link href={coord.telegramlink}>
                <HStack spacing={4}>
                  <FontAwesomeIcon icon={faTelegram} size={"2x"} />
                  <Text>{coord.telegram}</Text>
                </HStack>
              </Link>
              <Link href={coord.discordlink}>
                <HStack spacing={4}>
                  <FontAwesomeIcon icon={faDiscord} size={"2x"} />
                  <Text>{coord.discord}</Text>
                </HStack>
              </Link>
              <HStack spacing={4}>
                <FontAwesomeIcon icon={faPhone} size={"2x"} />
                <Text>{coord.phone}</Text>
              </HStack>
              <Link href={coord.mailtolink}>
                <HStack spacing={4}>
                  <FontAwesomeIcon icon={faEnvelope} size={"2x"} />
                  <Text>{coord.mailto}</Text>
                </HStack>
              </Link>
            </VStack>
          </VStack>
        </VStack>
      </Grid>
    </Fragment>
  )
}
export default PDF
