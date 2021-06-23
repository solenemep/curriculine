import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBuilding,
  faCalendar,
  faMap,
} from "@fortawesome/free-regular-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import {
  faAngleDoubleRight,
  faCode,
  faLink,
} from "@fortawesome/free-solid-svg-icons"

import { useCurriContext } from "./hook/useCurriContext"
import {
  Box,
  Heading,
  HStack,
  Flex,
  Link,
  Tag,
  Wrap,
  WrapItem,
  Badge,
  Text,
  VStack,
  Button,
  filter,
} from "@chakra-ui/react"
import SlideFadeOnScroll from "./transitions/SlideFadeOnScroll"
import { Fragment } from "react"

const Card = (props) => {
  const {
    lang,
    setSection,
    filter,
    toggleFilter,
    colorCard,
    hoverContent,
    colorTag,
  } = useCurriContext()
  const {
    color,
    title,
    date,
    establishment,
    location,
    section,
    fields,
    skills,
    github,
    link,
    path,
    details,
  } = props

  return (
    <SlideFadeOnScroll>
      <Box
        bg={`${color}.100`}
        color={colorCard}
        rounded={"md"}
        _hover={{
          transform: "scale(1.02)",
          transition: "0.5s",
        }}
        shadow={"lg"}
      >
        <Flex direction={"column"} alignItems={"left"} p={8}>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Heading as="h2" size="lg" style={{ fontWeight: "bold" }}>
              {title}
            </Heading>

            <HStack spacing={4}>
              {github !== "" && (
                <Link _hover={hoverContent} href={github} isExternal>
                  <FontAwesomeIcon icon={faCode} />
                </Link>
              )}
              {link !== "" && (
                <Link _hover={hoverContent} href={link} isExternal>
                  <FontAwesomeIcon icon={faLink} />
                </Link>
              )}
              {path !== "" && (
                <Link
                  _hover={hoverContent}
                  href={path}
                  onClick={() => setSection(section)}
                >
                  <FontAwesomeIcon icon={faAngleDoubleRight} />
                </Link>
              )}
            </HStack>
          </Flex>

          {(date !== "" || establishment !== "" || location !== "") && (
            <HStack justifyContent={"space-between"} mt={4}>
              {date !== "" && (
                <small>
                  <FontAwesomeIcon icon={faCalendar} className="me-2" /> {date}
                </small>
              )}
              {establishment !== "" && (
                <small>
                  <FontAwesomeIcon icon={faBuilding} className="me-2" />{" "}
                  {establishment}
                </small>
              )}
              {location !== "" && (
                <small>
                  <FontAwesomeIcon icon={faMap} className="me-2" /> {location}
                </small>
              )}
            </HStack>
          )}

          {fields !== [] && (
            <Wrap mt={4}>
              {fields.map((field) => {
                return (
                  <WrapItem key={field}>
                    <Badge colorScheme={color}>{field}</Badge>
                  </WrapItem>
                )
              })}
            </Wrap>
          )}

          {details !== [] && (
            <VStack mt={4} spacing={2} alignItems={"start"}>
              {details.map((detail) => {
                return (
                  <Text as={"small"} key={detail}>
                    {detail}
                  </Text>
                )
              })}
            </VStack>
          )}

          {skills !== [] && (
            <Wrap mt={4}>
              {skills.map((category) => {
                return (
                  <Fragment key={category.key}>
                    {category.items.map((skill) => {
                      return (
                        <Button
                          size={"xs"}
                          key={skill.key}
                          variant={"solid"}
                          colorScheme={color}
                          color={colorTag}
                          value={skill.key}
                          onClick={toggleFilter}
                          isActive={filter.includes(Number(skill.key))}
                          _hover={{ cursor: "pointer" }}
                        >
                          {skill.text[lang]}
                        </Button>
                      )
                    })}
                  </Fragment>
                )
              })}
            </Wrap>
          )}
        </Flex>
      </Box>
    </SlideFadeOnScroll>
  )
}
export default Card
