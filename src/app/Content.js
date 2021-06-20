import { useState, useEffect } from "react"
import { useCurriContext } from "./hook/useCurriContext"
import { useContentContext } from "./hook/useContentContext"

import Card from "./Card"
import { Box, VStack, Heading, HStack } from "@chakra-ui/react"

const Content = () => {
  const { lang, section, setSection } = useCurriContext()
  const { main, aside, toggleFilter } = useContentContext()

  return (
    <Box mx={16} py={16}>
      <Heading as="h2" style={{ textTransform: "uppercase" }} size="2xl" mb={8}>
        {main[section].title[lang]}
      </Heading>

      <VStack id="main" spacing={8}>
        {main[section].items.map((item) => {
          return (
            <Card
              key={item.title}
              color={item.color}
              title={item.title}
              date={item.date}
              establishment={item.establishment}
              location={item.location}
              section={item.section}
              fields={item.fields}
              skills={item.skills}
              github={item.github}
              link={item.link}
              path={item.path}
              details={item.details}
            />
          )
        })}
      </VStack>
      <HStack id="aside"></HStack>
    </Box>
  )
}

export default Content
