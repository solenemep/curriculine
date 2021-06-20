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
  Box,
  Flex,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Badge,
  Wrap,
  WrapItem,
  Tag,
  HStack,
  Text,
} from "@chakra-ui/react"

const Contact = () => {
  const { lang, hoverNavFoot, colorCard } = useCurriContext()
  const {
    contacts,
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
    <Box mx={16} py={16}>
      <Heading
        Heading
        as="h2"
        style={{ textTransform: "uppercase" }}
        size="2xl"
        mb={8}
      >
        {contacts.title[lang]}
      </Heading>
      <Wrap id="coord" mb={8}>
        <WrapItem>
          <Tag colorScheme={"pink"} fontSize={"md"}>
            <HStack spacing={2}>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <Text>{contacts.address[lang]}</Text>
            </HStack>
          </Tag>
        </WrapItem>
        <WrapItem>
          <Tag colorScheme={"red"} fontSize={"md"}>
            <HStack spacing={2}>
              <FontAwesomeIcon icon={faPhone} />
              <Text>{contacts.phone}</Text>
            </HStack>
          </Tag>
        </WrapItem>
        <WrapItem>
          <Tag colorScheme={"cyan"} fontSize={"md"}>
            <HStack spacing={2}>
              <FontAwesomeIcon icon={faEnvelope} />
              <Text>{contacts.mailto}</Text>
            </HStack>
          </Tag>
        </WrapItem>
        <WrapItem>
          <Tag colorScheme={"purple"} fontSize={"md"}>
            <HStack spacing={2}>
              <FontAwesomeIcon icon={faDiscord} />
              <Text>{contacts.discord}</Text>
            </HStack>
          </Tag>
        </WrapItem>
      </Wrap>
      <VStack
        id="mail"
        mb={8}
        as={"form"}
        onSubmit={submitEmail}
        alignItems={"start"}
      >
        <FormControl id="name" isRequired>
          <FormLabel>{contacts.name[lang]}</FormLabel>
          <Input
            type="text"
            aria-label="name"
            value={sendName}
            onChange={changeSendName}
            required
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>{contacts.mail[lang]}</FormLabel>
          <Input
            type="email"
            aria-label="email"
            value={sendEmail}
            onChange={changeSendEmail}
            required
          />
        </FormControl>
        <FormControl id="subject">
          <FormLabel>{contacts.subject[lang]}</FormLabel>
          <Input
            type="text"
            aria-label="subject"
            value={sendSubject}
            onChange={changeSendSubject}
            required
          />
        </FormControl>
        <FormControl id="message" isRequired>
          <FormLabel>{contacts.message[lang]}</FormLabel>
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
          {contacts.send[lang]}
        </Button>
      </VStack>
    </Box>
  )
}

export default Contact
