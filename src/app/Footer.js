import { Box, Flex, Text } from "@chakra-ui/react"
import { useCurriContext } from "./hook/useCurriContext"
import { useFooterContext } from "./hook/useFooterContext"

const Footer = () => {
  const { index, bgNavFoot } = useCurriContext()
  const { footer } = useFooterContext()

  return (
    <Box bg={bgNavFoot} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box id="madeby" px={2} py={1}>
          <Text style={{ fontWeight: "bold" }}>{footer[index].madeby}</Text>
        </Box>
        <Box id="copyright" px={2} py={1}>
          <Text style={{ fontWeight: "bold" }}>{footer[index].copyright}</Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default Footer
