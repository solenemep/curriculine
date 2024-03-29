import { ArrowForwardIcon } from "@chakra-ui/icons"
import {
  Box,
  Heading,
  HStack,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react"
import { faBuilding, faCalendar } from "@fortawesome/free-regular-svg-icons"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useCurriContext } from "../hook/useCurriContext"

const CardPDF = (props) => {
  const { title, date, establishment, location, section, details } = props
  const { lang, colorCard, bgCard } = useCurriContext()

  return (
    <Box bg={bgCard} color={colorCard} rounded={"md"}>
      <Stack direction={"column"} alignItems={"left"} p={8} spacing={8}>
        <Heading as="h3" size="lg">
          {title}
        </Heading>
        <HStack justifyContent={"space-between"}>
          <Text>
            <FontAwesomeIcon icon={faCalendar} /> {date}
          </Text>
          <Text>
            <FontAwesomeIcon icon={faBuilding} /> {establishment}
          </Text>
          <Text>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {location}
          </Text>
        </HStack>

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
      </Stack>
    </Box>
  )
}
export default CardPDF
