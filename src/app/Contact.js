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
} from "@chakra-ui/react"

const Contact = () => {
  const { lang, index } = useCurriContext()
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
      <Heading as="h2" size="lg" mb={8}>
        {contacts[lang].title}
      </Heading>
      <VStack id="mail">
        <FormControl id="name" isRequired>
          <FormLabel>{contacts[index].name}</FormLabel>
          <Input
            type="text"
            aria-label="name"
            value={sendName}
            onChange={changeSendName}
            required
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>{contacts[index].sendermail}</FormLabel>
          <Input
            type="email"
            aria-label="email"
            value={sendEmail}
            onChange={changeSendEmail}
            required
          />
        </FormControl>
        <FormControl id="subject">
          <FormLabel>{contacts[index].subject}</FormLabel>
          <Input
            type="text"
            aria-label="subject"
            value={sendSubject}
            onChange={changeSendSubject}
            required
          />
        </FormControl>
        <FormControl id="message" isRequired>
          <FormLabel>{contacts[index].message}</FormLabel>
          <Textarea
            rows="6"
            aria-label="message"
            value={sendMessage}
            onChange={changeSendMessage}
            required
          />
        </FormControl>
        <Button type="submit" onSubmit={submitEmail}>
          {contacts[index].send}
        </Button>
      </VStack>
      <Flex direction={"column"} alignItems={"start"} id="coord">
        <Box>
          <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" className="me-3" />{" "}
          {contacts[index].address}
        </Box>
        <Box>
          <FontAwesomeIcon icon={faPhone} size="2x" className="me-3" />{" "}
          {contacts[index].phone}
        </Box>
        <Box>
          <FontAwesomeIcon icon={faEnvelope} size="2x" className="me-3" />{" "}
          {contacts[index].mailto}
        </Box>
        <Box>
          <FontAwesomeIcon icon={faDiscord} size="2x" className="me-3" />{" "}
          {contacts[index].discord}
        </Box>
      </Flex>
    </Box>
  )
}

export default Contact
