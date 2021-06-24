import { useCurriContext } from "./hook/useCurriContext"
import { useContactContext } from "./hook/useContactContext"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons"
import {
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Wrap,
  WrapItem,
  Tag,
  HStack,
  Text,
  Container,
} from "@chakra-ui/react"
import ScaleFadeOnScroll from "./transitions/ScaleFadeOnScroll"

const Contact = () => {
  const { lang, hoverNavFoot, colorCard } = useCurriContext()
  const {
    contacts,
    coord,
    mailme,
    submitEmail,
    sendName,
    changeSendName,
    sendEmail,
    changeSendEmail,
    sendSubject,
    changeSendSubject,
    sendMessage,
    changeSendMessage,
  } = useContactContext()

  return (
    <Container maxW={"container.xl"}>
      <Heading
        Heading
        as="h2"
        style={{ textTransform: "uppercase" }}
        size="2xl"
        mb={8}
      >
        {contacts[lang]}
      </Heading>
      <ScaleFadeOnScroll>
        <Wrap id="coord" mb={8}>
          <WrapItem>
            <Tag colorScheme={"pink"} fontSize={"md"}>
              <HStack spacing={2}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <Text>{coord.address[lang]}</Text>
              </HStack>
            </Tag>
          </WrapItem>
          <WrapItem>
            <Tag colorScheme={"red"} fontSize={"md"}>
              <HStack spacing={2}>
                <FontAwesomeIcon icon={faPhone} />
                <Text>{coord.phone}</Text>
              </HStack>
            </Tag>
          </WrapItem>
          <WrapItem>
            <Tag colorScheme={"cyan"} fontSize={"md"}>
              <HStack spacing={2}>
                <FontAwesomeIcon icon={faEnvelope} />
                <Text>{coord.mailto}</Text>
              </HStack>
            </Tag>
          </WrapItem>
          <WrapItem>
            <Tag colorScheme={"purple"} fontSize={"md"}>
              <HStack spacing={2}>
                <FontAwesomeIcon icon={faDiscord} />
                <Text>{coord.discord}</Text>
              </HStack>
            </Tag>
          </WrapItem>
        </Wrap>
      </ScaleFadeOnScroll>
      <VStack
        id="mail"
        mb={8}
        as={"form"}
        onSubmit={submitEmail}
        alignItems={"start"}
      >
        <FormControl id="name" isRequired>
          <FormLabel>{mailme.name[lang]}</FormLabel>
          <Input
            type="text"
            aria-label="name"
            value={sendName}
            onChange={changeSendName}
            required
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>{mailme.mail[lang]}</FormLabel>
          <Input
            type="email"
            aria-label="email"
            value={sendEmail}
            onChange={changeSendEmail}
            required
          />
        </FormControl>
        <FormControl id="subject">
          <FormLabel>{mailme.subject[lang]}</FormLabel>
          <Input
            type="text"
            aria-label="subject"
            value={sendSubject}
            onChange={changeSendSubject}
            required
          />
        </FormControl>
        <FormControl id="message" isRequired>
          <FormLabel>{mailme.message[lang]}</FormLabel>
          <Textarea
            rows="6"
            aria-label="message"
            value={sendMessage}
            onChange={changeSendMessage}
            required
          />
        </FormControl>
        <Button
          color={colorCard}
          type="submit"
          bg={"red.100"}
          _hover={hoverNavFoot}
        >
          {mailme.send[lang]}
        </Button>
      </VStack>
    </Container>
  )
}

export default Contact
