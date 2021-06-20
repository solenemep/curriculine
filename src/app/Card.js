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
} from "@chakra-ui/react"

const Card = (props) => {
  const { setSection, colorCard, hoverContent } = useCurriContext()
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
    <Box
      bg={`${color}.100`}
      color={colorCard}
      rounded={"md"}
      width={"100%"}
      _hover={{
        transform: "scale(1.03)",
        transition: "0.3s",
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

        {location !== [] && (
          <HStack justifyContent={"space-between"} mt={4}>
            {fields.map((field) => {
              return <Badge colorScheme={color}>{field}</Badge>
            })}
          </HStack>
        )}

        <Flex direction={"column"} mt={8}>
          {details.map((detail) => {
            return (
              <HStack key={detail} mb={2}>
                <small>{detail}</small>
              </HStack>
            )
          })}
        </Flex>

        {skills !== [] && (
          <Wrap mt={4}>
            {skills.map((skill) => {
              return (
                <WrapItem>
                  <Tag variant={"solid"} key={skill} colorScheme={color}>
                    {skill}
                  </Tag>
                </WrapItem>
              )
            })}
          </Wrap>
        )}
      </Flex>
    </Box>
  )
}
export default Card
