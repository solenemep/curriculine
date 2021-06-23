import { Box, Flex, Text } from "@chakra-ui/react"
import { useCurriContext } from "./hook/useCurriContext"
import { useFooterContext } from "./hook/useFooterContext"

const Footer = () => {
  const { lang, bgFoot, colorFoot } = useCurriContext()
  const { footer } = useFooterContext()

  return (
    <Box bg={bgFoot} color={colorFoot} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box id="madeby" px={2} py={1}>
          <Text>{footer.madeby[lang]}</Text>
        </Box>
        <Box id="copyright" px={2} py={1}>
          <Text>{footer.copyright}</Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default Footer
