import { Box, Button } from "@chakra-ui/react"
import { useCurriContext } from "../hook/useCurriContext"

const Langague = () => {
  const { langagues, lang, setLang, bgNavFoot, hoverNavFoot } =
    useCurriContext()

  return (
    <Box role="group" aria-label="langague choice" className="btn-group">
      {langagues.map((langague) => {
        return (
          <Button
            px={2}
            py={1}
            mx={1}
            size={"md"}
            key={langague}
            type="button"
            value={langague}
            onClick={(e) => setLang(e.target.value)}
            disabled={langague === lang}
            bg={bgNavFoot}
            _hover={hoverNavFoot}
          >
            {langague}
          </Button>
        )
      })}
    </Box>
  )
}
export default Langague
