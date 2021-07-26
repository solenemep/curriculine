import { ArrowForwardIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Stack,
  Text,
  Tooltip,
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
  const { colorCard, lang, colorCardOpp } = useCurriContext()
  const { cardLinks, toggleFilter, filter, filterSkill } = useContentContext()

  return (
    <SlideFadeOnScroll>
      <Box bg={`${color}.100`} color={colorCard} rounded={"md"} shadow={"lg"}>
        <Stack direction={"column"} alignItems={"left"} p={8} spacing={8}>
          <Heading as={"h3"} size={"md"} fontWeight={"bold"}>
            {title}
          </Heading>
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
                  _hover={{
                    textDecoration: "none",
                    color: `${colorCard}`,
                    transform: "scale(1.1)",
                    transition: "0.5s",
                  }}
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} />{" "}
                  {cardLinks.code[lang]}
                </Link>
                <Link
                  isExternal
                  href={link}
                  aria-label={"page link"}
                  _hover={{
                    textDecoration: "none",
                    color: `${colorCard}`,
                    transform: "scale(1.1)",
                    transition: "0.5s",
                  }}
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

          {section === "portfolio" && (
            <Grid
              sx={{
                display: "grid",
                gridTemplateColumns: { base: "1fr", md: "1fr 2fr" },
                gap: "1.5rem",
              }}
              alignItems={"center"}
              justifyContent={"start"}
            >
              <Image
                sx={{ columnSpan: 1 }}
                margin={{ base: "auto", md: 0 }}
                ratio={16 / 9}
                maxWidth={"250px"}
                shadow={"xs"}
                borderWidth="1px"
                borderRadius="lg"
                src={require(`../img/${img}`).default}
                alt={`img${img}`}
              />
              <List spacing={2} sx={{ columnSpan: 2 }}>
                {details.map((detail) => {
                  return (
                    <ListItem key={detail.key}>
                      <HStack>
                        <ListIcon as={ArrowForwardIcon} color="green.300" />
                        <Text>{detail.text[lang]}</Text>
                      </HStack>
                    </ListItem>
                  )
                })}
              </List>
            </Grid>
          )}

          {section === "experience" && (
            <List spacing={2}>
              {details.map((detail) => {
                return (
                  <ListItem key={detail.key}>
                    <HStack>
                      <ListIcon as={ArrowForwardIcon} color="green.300" />
                      <Text>{detail.text[lang]}</Text>
                    </HStack>
                  </ListItem>
                )
              })}
            </List>
          )}

          <HStack>
            <Spacer />
            <Wrap direction={"row-reverse"}>
              {skills.map((skill) => {
                return (
                  <Tooltip
                    label={
                      filter.includes(Number(skill.key))
                        ? filterSkill.buttonfilter.inactive[lang] +
                          skill.text[lang]
                        : filterSkill.buttonfilter.active[lang] +
                          skill.text[lang]
                    }
                    bg={"gray.600"}
                    color={colorCardOpp}
                    key={skill.key}
                  >
                    <Button
                      size={"md"}
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
                    >
                      {skill.text[lang]}
                    </Button>
                  </Tooltip>
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
