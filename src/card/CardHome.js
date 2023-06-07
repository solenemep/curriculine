import { CheckIcon } from "@chakra-ui/icons"
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
import { useCurriContext } from "../hook/useCurriContext"
import ScaleFadeOnScroll from "../transitions/ScaleFadeOnScroll"

const CardHome = (props) => {
  const { title, speach, details } = props
  const { lang, colorCard, bgGradientCard } = useCurriContext()
  return (
    <ScaleFadeOnScroll>
      <Box bgGradient={bgGradientCard} color={colorCard} rounded={"md"}>
        <Stack direction={"column"} alignItems={"left"} p={8} spacing={8}>
          <Heading as="h3" size="lg">
            {title}
          </Heading>
          <Text>{speach}</Text>
          <List spacing={2} pb={2}>
            {details.map((detail) => {
              return (
                <ListItem key={detail.key}>
                  <HStack>
                    <ListIcon as={CheckIcon} color={colorCard} />
                    <Text as="small">{detail.text[lang]}</Text>
                  </HStack>
                </ListItem>
              )
            })}
          </List>
        </Stack>
      </Box>
    </ScaleFadeOnScroll>
  )
}
export default CardHome
