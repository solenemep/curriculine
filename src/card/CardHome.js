import { CheckIcon } from "@chakra-ui/icons"
import {
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
  Text,
} from "@chakra-ui/react"
import { useCurriContext } from "../hook/useCurriContext"
import ScaleFadeOnScroll from "../transitions/ScaleFadeOnScroll"

const CardHome = (props) => {
  const { color, title, section, path, more, details } = props
  const { lang, setSection, colorCard } = useCurriContext()
  return (
    <ScaleFadeOnScroll>
      <Box bg={`${color}.100`} color={colorCard} rounded={"md"} shadow={"lg"}>
        <Stack direction={"column"} alignItems={"left"} p={8} spacing={8}>
          <Heading as={"h3"} size={"md"} fontWeight={"bold"}>
            {title}
          </Heading>
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
              size={"md"}
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
              }}
            >
              {more[lang]}
            </Button>
          </HStack>
        </Stack>
      </Box>
    </ScaleFadeOnScroll>
  )
}
export default CardHome
