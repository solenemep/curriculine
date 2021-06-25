import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBuilding,
  faCalendar,
  faMap,
} from "@fortawesome/free-regular-svg-icons"
import { faCode, faLink } from "@fortawesome/free-solid-svg-icons"

import { useCurriContext } from "../hook/useCurriContext"
import {
  Box,
  Heading,
  HStack,
  Flex,
  Link,
  Wrap,
  Button,
} from "@chakra-ui/react"
import SlideFadeOnScroll from "../transitions/SlideFadeOnScroll"

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
    skills,
    code,
    link,
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
              {code !== "" && (
                <Link _hover={hoverContent} href={code} isExternal>
                  <FontAwesomeIcon icon={faCode} />
                </Link>
              )}
              {link !== "" && (
                <Link _hover={hoverContent} href={link} isExternal>
                  <FontAwesomeIcon icon={faLink} />
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
          {/*
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
              {details[lang].map((detail) => {
                return (
                  <Text as={"small"} key={detail[lang]}>
                    {detail}
                  </Text>
                )
              })}
            </VStack>
          )}
*/}
          {skills !== [] && (
            <Wrap mt={4}>
              {skills.map((skill) => {
                return (
                  <Button
                    size={"xs"}
                    key={skill.key}
                    bg={`${color}.200`}
                    _hover={{
                      bg: `${color}.300`,
                      textDecoration: "none",
                      color: `inherit`,
                    }}
                    _active={{
                      bg: `${color}.300`,
                      textDecoration: "none",
                      color: `inherit`,
                    }}
                    value={skill.key}
                    onClick={toggleFilter}
                    isActive={filter.includes(Number(skill.key))}
                    _hover={{ cursor: "pointer" }}
                  >
                    {skill.text[lang]}
                  </Button>
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
