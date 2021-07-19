import { useCurriContext } from "./hook/useCurriContext"
import { useContactContext } from "./hook/useContactContext"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDiscord,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import {
  // faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons"
import {
  Button,
  Alert,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Tag,
  HStack,
  Text,
  Container,
  Grid,
  AlertIcon,
} from "@chakra-ui/react"
import ScaleFadeOnScroll from "./transitions/ScaleFadeOnScroll"

const Contact = () => {
  const { lang, colorCard } = useCurriContext()
  const { contacts, coord, mailme, submitEmail, isLoading, alert } =
    useContactContext()

  return (
    <Container maxW={"container.xl"} pt={4}>
      <Heading as="h2" textTransform={"uppercase"} size="2xl" mb={16}>
        {contacts[lang]}
      </Heading>
      <Grid
        sx={{
          display: "grid",
          gridTemplateColumns: { base: "1fr", md: "2fr 1fr" },
          gap: "6rem",
        }}
        alignItems={"start"}
        justifyContent={"space-between"}
      >
        <VStack
          sx={{ columnSpan: 1 }}
          id="mail"
          mb={8}
          as={"form"}
          onSubmit={submitEmail}
          alignItems={"start"}
          className="contact-form"
        >
          <FormControl id="user_name" isRequired>
            <FormLabel>{mailme.name[lang]}</FormLabel>
            <Input type="text" name="user_name" aria-label="name" required />
          </FormControl>
          <FormControl id="user_email" isRequired>
            <FormLabel>{mailme.mail[lang]}</FormLabel>
            <Input type="email" name="user_email" aria-label="email" required />
          </FormControl>
          <FormControl id="subject">
            <FormLabel>{mailme.subject[lang]}</FormLabel>
            <Input type="text" name="subject" aria-label="subject" required />
          </FormControl>
          <FormControl id="message" isRequired>
            <FormLabel>{mailme.message[lang]}</FormLabel>
            <Textarea name="message" rows="6" aria-label="message" required />
          </FormControl>
          {alert === "" && (
            <Button
              type="submit"
              color={colorCard}
              bg={"red.100"}
              _hover={{
                bg: `red.300`,
                textDecoration: "none",
                color: `${colorCard}`,
              }}
              isLoading={isLoading}
              isFullWidth
            >
              {mailme.send[lang]}
            </Button>
          )}
          {alert === "OK" && (
            <Alert status="success" rounded={"lg"}>
              <AlertIcon />
              {mailme.OK[lang]}
            </Alert>
          )}
          {alert === "KO" && (
            <Alert status="error" rounded={"lg"}>
              <AlertIcon />
              {mailme.KO[lang]}
              {coord.mailto}
            </Alert>
          )}
        </VStack>
        <ScaleFadeOnScroll>
          <VStack
            id="coord"
            mb={8}
            alignItems={"strech"}
            sx={{ columnSpan: 1 }}
          >
            {/* 
            <Tag colorScheme={"pink"} size={"lg"} fontWeight={"bold"}>
              <HStack spacing={2}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <Text>{coord.address[lang]}</Text>
              </HStack>
            </Tag>
*/}
            <Tag colorScheme={"red"} size={"lg"} fontWeight={"bold"}>
              <HStack spacing={2}>
                <FontAwesomeIcon icon={faPhone} />
                <Text>{coord.phone}</Text>
              </HStack>
            </Tag>

            <Tag colorScheme={"cyan"} size={"lg"} fontWeight={"bold"}>
              <HStack spacing={2}>
                <FontAwesomeIcon icon={faEnvelope} />
                <Text>{coord.mailto}</Text>
              </HStack>
            </Tag>

            <Tag colorScheme={"yellow"} size={"lg"} fontWeight={"bold"}>
              <HStack spacing={2}>
                <FontAwesomeIcon icon={faLinkedin} />
                <Text>{coord.linkedin}</Text>
              </HStack>
            </Tag>

            <Tag colorScheme={"green"} size={"lg"} fontWeight={"bold"}>
              <HStack spacing={2}>
                <FontAwesomeIcon icon={faGithub} />
                <Text>{coord.github}</Text>
              </HStack>
            </Tag>

            <Tag colorScheme={"purple"} size={"lg"} fontWeight={"bold"}>
              <HStack spacing={2}>
                <FontAwesomeIcon icon={faDiscord} />
                <Text>{coord.discord}</Text>
              </HStack>
            </Tag>
          </VStack>
        </ScaleFadeOnScroll>
      </Grid>
    </Container>
  )
}

export default Contact
