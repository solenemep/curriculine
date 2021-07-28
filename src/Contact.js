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
  HStack,
  Text,
  Container,
  Grid,
  AlertIcon,
  Link,
  Box,
} from "@chakra-ui/react"
import ScaleFadeOnScroll from "./transitions/ScaleFadeOnScroll"

const Contact = () => {
  const { lang, colorCard, hoverButton } = useCurriContext()
  const { contacts, coord, mailme, submitEmail, isLoading, alert } =
    useContactContext()

  return (
    <Container maxW={"container.xl"} pt={4}>
      <Heading as="h2" size="2xl" mb={16}>
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
        <ScaleFadeOnScroll>
          <Box bg={`blue.100`} color={colorCard} rounded={"md"} shadow={"lg"}>
            <VStack
              p={8}
              id="mail"
              mb={8}
              as={"form"}
              onSubmit={submitEmail}
              alignItems={"start"}
              className="contact-form"
            >
              <FormControl id="user_name" isRequired>
                <FormLabel>{mailme.name[lang]}</FormLabel>
                <Input
                  bg={"white"}
                  type="text"
                  name="user_name"
                  aria-label="name"
                  required
                />
              </FormControl>
              <FormControl id="user_email" isRequired>
                <FormLabel>{mailme.mail[lang]}</FormLabel>
                <Input
                  bg={"white"}
                  type="email"
                  name="user_email"
                  aria-label="email"
                  required
                />
              </FormControl>
              <FormControl id="subject">
                <FormLabel>{mailme.subject[lang]}</FormLabel>
                <Input
                  bg={"white"}
                  type="text"
                  name="subject"
                  aria-label="subject"
                  required
                />
              </FormControl>
              <FormControl id="message" isRequired>
                <FormLabel>{mailme.message[lang]}</FormLabel>
                <Textarea
                  bg={"white"}
                  name="message"
                  rows="6"
                  aria-label="message"
                  required
                />
              </FormControl>
              {alert === "" && (
                <Button
                  type="submit"
                  color={colorCard}
                  bg={"blue.200"}
                  _hover={{
                    bg: `blue.300`,
                    textDecoration: "none",
                    color: `inherit`,
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
          </Box>
        </ScaleFadeOnScroll>

        <VStack
          id="coord"
          mb={8}
          alignItems={"start"}
          sx={{ columnSpan: 1 }}
          spacing={4}
        >
          {/* 
              <HStack spacing={4} >
                <FontAwesomeIcon icon={faMapMarkerAlt} size={"2x"} />
                <Text>{coord.address[lang]}</Text>
              </HStack>
*/}
          <HStack spacing={4}>
            <FontAwesomeIcon icon={faPhone} size={"2x"} />
            <Text>{coord.phone}</Text>
          </HStack>

          <Link
            _hover={hoverButton}
            href={coord.mailtolink}
            aria-label="mail me"
            isExternal
          >
            <HStack spacing={4}>
              <FontAwesomeIcon icon={faEnvelope} size={"2x"} />
              <Text>{coord.mailto}</Text>
            </HStack>
          </Link>

          <Link
            _hover={hoverButton}
            href={coord.linkedinlink}
            aria-label="linkedin"
            isExternal
          >
            <HStack spacing={4}>
              <FontAwesomeIcon icon={faLinkedin} size={"2x"} />
              <Text>{coord.linkedin}</Text>
            </HStack>
          </Link>

          <Link
            _hover={hoverButton}
            href={coord.githublink}
            aria-label="github"
            isExternal
          >
            <HStack spacing={4}>
              <FontAwesomeIcon icon={faGithub} size={"2x"} />
              <Text>{coord.github}</Text>
            </HStack>
          </Link>

          <HStack spacing={4}>
            <FontAwesomeIcon icon={faDiscord} size={"2x"} />
            <Text>{coord.discord}</Text>
          </HStack>
        </VStack>
      </Grid>
    </Container>
  )
}

export default Contact
