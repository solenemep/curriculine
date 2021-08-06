import {
  Avatar,
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react"
import React from "react"
import { useCurriContext } from "./hook/useCurriContext"

import SP from "./img/SP.jpg"
import { intro } from "./data/home"
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
  faDiscord,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import CardPDF from "./card/CardPDF"

const PDF = () => {
  const { lang, colorCard } = useCurriContext()

  const filterMain = (section) => {
    return main.filter((el) => el.section === section)
  }
  const education = filterMain("education").reverse()
  const experience = filterMain("experience").reverse()

  return (
    <Box p={12}>
      <HStack
        id="head"
        alignItems={"center"}
        justifyContent={"start"}
        mb={8}
        spacing={16}
      >
        <Avatar size="2xl" src={SP} name={"SP"} ms={8} />
        <VStack alignItems={"start"} spacing={2}>
          <Heading as="h1" size={"3xl"}>
            {intro.name}
          </Heading>
          <Text fontSize="xl">{intro.title1[lang]}</Text>
          <Text fontSize="xl">{intro.title2[lang]}</Text>
          <Text as="small">{intro.speaks[lang]}</Text>
        </VStack>
      </HStack>
      <Grid
        sx={{
          display: "grid",
          gridTemplateColumns: { base: "2fr 1fr" },
          gap: "6rem",
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
                  color={item.color}
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
                  color={item.color}
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
              {sections.portfolio[lang]}
            </Heading>
            <VStack alignItems={"start"} spacing={8}>
              <Link href={coord.portfolio}>
                <HStack spacing={4}>
                  <FontAwesomeIcon icon={faLink} size={"2x"} />
                  <Text>{coord.portfolio}</Text>
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
                    <Heading as="h2" size="md" mb={4}>
                      {category.title[lang]}
                    </Heading>
                    <Wrap>
                      {category.items.map((skill) => {
                        return (
                          <Button
                            color={colorCard}
                            size={"md"}
                            bg={`cyan.100`}
                            key={skill.key}
                          >
                            {skill.text[lang]}
                          </Button>
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
              <Link href={coord.linkedinlink}>
                <HStack spacing={4}>
                  <FontAwesomeIcon icon={faLinkedin} size={"2x"} />
                  <Text>{coord.linkedinlink}</Text>
                </HStack>
              </Link>
              <Link href={coord.githublink}>
                <HStack spacing={4}>
                  <FontAwesomeIcon icon={faGithub} size={"2x"} />
                  <Text>{coord.githublink}</Text>
                </HStack>
              </Link>

              <HStack spacing={4}>
                <FontAwesomeIcon icon={faDiscord} size={"2x"} />
                <Text>{coord.discord}</Text>
              </HStack>
            </VStack>
          </VStack>
        </VStack>
      </Grid>
    </Box>
  )
}
export default PDF
