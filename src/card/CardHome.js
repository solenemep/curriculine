import { CheckIcon } from "@chakra-ui/icons"
import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  Link,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react"
import { useCurriContext } from "../hook/useCurriContext"
import SlideFadeOnScroll from "../transitions/SlideFadeOnScroll"

const CardHome = (props) => {
  const { color, title, section, path, more, filter, details } = props
  const { lang, setSection, setFilter, colorCard } = useCurriContext()
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
          <HStack>
            <Spacer />
            <Button
              as={Link}
              size={"xs"}
              href={path}
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
              onClick={() => {
                setSection(section)
                setFilter(filter)
              }}
            >
              {more[lang]}
            </Button>
          </HStack>
        </Stack>
      </Box>
    </SlideFadeOnScroll>
  )
}
export default CardHome