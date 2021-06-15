import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBuilding,
  faCalendar,
  faMap,
} from "@fortawesome/free-regular-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faAngleDoubleRight, faLink } from "@fortawesome/free-solid-svg-icons"

import { useCurriContext } from "./hook/useCurriContext"
import {
  Box,
  Heading,
  HStack,
  Button,
  Flex,
  Link,
  Spacer,
} from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"

const Card = (props) => {
  const { setSection, bgNavFoot, hoverNavFoot, colorTitle, hoverContent } =
    useCurriContext()
  const {
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
    <Box bg={bgNavFoot} rounded={"md"} shadow={"xs"} width={"100%"}>
      <Flex direction={"column"} alignItems={"left"} p={8}>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Heading
            as="h2"
            size="lg"
            color={colorTitle}
            style={{ fontWeight: "bold" }}
          >
            {title}
          </Heading>
          <HStack spacing={4}>
            {github !== "" && (
              <Link _hover={hoverContent} href={github}>
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            )}
            {link !== "" && (
              <Link _hover={hoverContent} href={link}>
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

        <Flex direction={"column"} mt={8}>
          {details.map((detail) => {
            return (
              <HStack key={detail} mb={2}>
                <ArrowForwardIcon />
                <small>{detail}</small>
              </HStack>
            )
          })}
        </Flex>

        {(skills !== [] || fields !== []) && (
          <HStack mt={4}>
            <Spacer />
            {skills.map((skill) => {
              return (
                <Button
                  size={"sm"}
                  key={skill.text}
                  type="button"
                  bg={bgNavFoot}
                  _hover={hoverNavFoot}
                >
                  {skill.text}
                </Button>
              )
            })}
            {fields.map((field) => (
              <Button
                size={"sm"}
                key={field}
                type="button"
                bg={bgNavFoot}
                _hover={hoverNavFoot}
              >
                {field}
              </Button>
            ))}
          </HStack>
        )}
      </Flex>
    </Box>
  )
}
export default Card
