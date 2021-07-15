import {
  CalendarIcon,
  CheckIcon,
  ExternalLinkIcon,
  LinkIcon,
} from "@chakra-ui/icons"
import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react"
import { faBuilding, faCalendar } from "@fortawesome/free-regular-svg-icons"
import {
  faExternalLinkAlt,
  faLink,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useCurriContext } from "../hook/useCurriContext"
import { useContentContext } from "../hook/useContentContext"
import SlideFadeOnScroll from "../transitions/SlideFadeOnScroll"
import { Fragment } from "react"

const CardContent = (props) => {
  const {
    color,
    title,
    date,
    establishment,
    location,
    section,
    skills,
    code,
    link,
    img,
    details,
  } = props
  const { colorCard, lang } = useCurriContext()
  const { cardLinks, toggleFilter, filter } = useContentContext()

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
        <Stack direction={"column"} alignItems={"left"} p={8} spacing={8}>
          <Heading as={"h2"}>{title}</Heading>
          <HStack justifyContent={"space-between"}>
            <Text>
              <FontAwesomeIcon icon={faCalendar} /> {date}
            </Text>
            {section === "portfolio" ? (
              <Fragment>
                <Link
                  isExternal
                  href={code}
                  aria-label={"source code"}
                  _hover={{ textDecoration: "none", color: `${colorCard}` }}
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} />{" "}
                  {cardLinks.code[lang]}
                </Link>
                <Link
                  isExternal
                  href={link}
                  aria-label={"page link"}
                  _hover={{ textDecoration: "none", color: `${colorCard}` }}
                >
                  <FontAwesomeIcon icon={faLink} /> {cardLinks.link[lang]}{" "}
                </Link>
              </Fragment>
            ) : (
              <Fragment>
                <Text>
                  <FontAwesomeIcon icon={faBuilding} /> {establishment}
                </Text>
                <Text>
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> {location}
                </Text>
              </Fragment>
            )}
          </HStack>

          {section !== "education" && (
            <HStack spacing={8}>
              {section === "portfolio" && (
                <AspectRatio ratio={16 / 9} width={"30%"}>
                  <Image
                    shadow={"xs"}
                    borderWidth="1px"
                    borderRadius="lg"
                    src={require(`../img/${img}`).default}
                    alt={`img${img}`}
                  />
                </AspectRatio>
              )}

              <List spacing={2}>
                {details.map((detail) => {
                  return (
                    <ListItem key={detail.key}>
                      <HStack>
                        <ListIcon as={CheckIcon} color="green.300" />
                        <Text>{detail.text[lang]}</Text>
                      </HStack>
                    </ListItem>
                  )
                })}
              </List>
            </HStack>
          )}

          <HStack>
            <Spacer />
            <Wrap direction={"row-reverse"}>
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
          </HStack>
        </Stack>
      </Box>
    </SlideFadeOnScroll>
  )
}
export default CardContent
