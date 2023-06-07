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
  WrapItem,
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
  const {
    lang,
    colorCard,
    bgContent,
    bgGradientCard,
    bgButton,
    hoverButton,
    activeButton,
    hoverLink,
  } = useCurriContext()
  const { cardLinks, toggleFilter, filter, filterSkill, getSkillLabel } =
    useContentContext()

  return (
    <SlideFadeOnScroll>
      <Box bgGradient={bgGradientCard} color={colorCard} rounded={"md"}>
        <Stack direction={"column"} alignItems={"left"} p={8} spacing={8}>
          <Heading as="h3" size="lg">
            {title}
          </Heading>
          <HStack justifyContent={"space-between"}>
            <Text>
              <FontAwesomeIcon icon={faCalendar} /> {date}
            </Text>
            {section === "portfolio" ? (
              <Fragment>
                {link.length !== 0 ? (
                  <Link
                    isExternal
                    href={link}
                    aria-label={"page link"}
                    _hover={hoverLink}
                  >
                    <FontAwesomeIcon icon={faLink} /> {cardLinks.link[lang]}{" "}
                  </Link>
                ) : (
                  <Fragment></Fragment>
                )}
                <Link
                  isExternal
                  href={code}
                  aria-label={"source code"}
                  _hover={hoverLink}
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} />{" "}
                  {cardLinks.code[lang]}
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
              {img.length !== 0 && (
                <Image
                  sx={{ columnSpan: 1 }}
                  margin={{ base: "auto", md: 0 }}
                  ratio={16 / 9}
                  maxWidth={"250px"}
                  borderWidth="1px"
                  borderRadius="lg"
                  src={require(`../img/${img}`).default}
                  alt={`img${img}`}
                />
              )}
              <List spacing={2} sx={{ columnSpan: 2 }}>
                {details.map((detail) => {
                  return (
                    <ListItem key={detail.key}>
                      <HStack>
                        <ListIcon as={ArrowForwardIcon} />
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
                      <ListIcon as={ArrowForwardIcon} />
                      <Text>{detail.text[lang]}</Text>
                    </HStack>
                  </ListItem>
                )
              })}
            </List>
          )}

          <HStack>
            <Spacer />
            <Wrap direction={"row"}>
              {skills.map((item) => {
                return (
                  <Tooltip
                    label={
                      filter.includes(Number(item.key))
                        ? filterSkill.buttonfilter.inactive[lang]
                        : filterSkill.buttonfilter.active[lang]
                    }
                    bg={bgContent}
                    key={item.key}
                  >
                    <WrapItem>
                      <Button
                        size={"xs"}
                        bg={bgButton}
                        _hover={hoverButton}
                        _active={activeButton}
                        value={item.key}
                        onClick={toggleFilter}
                        isActive={filter.includes(Number(item.key))}
                      >
                        {getSkillLabel(item.key, lang)}
                      </Button>{" "}
                    </WrapItem>
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
