import { useState, useEffect } from "react"
import { useCurriContext } from "./hook/useCurriContext"
import { useContentContext } from "./hook/useContentContext"

import Card from "./Card"
import { Box, VStack, Stack, Heading, HStack } from "@chakra-ui/react"

const Content = () => {
  const { index, darkMode, section, setSection } = useCurriContext()
  const { main, aside, toggleFilter } = useContentContext()

  const [list, setList] = useState(main[index].educations)
  useEffect(() => {
    if (section === "education") {
      setList(main[index].educations)
    } else if (section === "experience") {
      setList(main[index].experiences)
    } else if (section === "portfolio") {
      setList(main[index].portfolios)
    }
  }, [index, main, section])

  return (
    <Box mx={16} py={16}>
      <Heading as="h2" size="lg" mb={8}>
        {list.title}
      </Heading>
      <Stack>
        <VStack id="main" spacing={8}>
          {list.items.map((item) => {
            return (
              <Card
                key={item.title}
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
        <HStack id="aside">
          <form className="my-3">
            <label className="form-label" htmlFor="section">
              {aside[index].change_section}
            </label>
            <select
              id="section"
              className={
                darkMode ? "form-select bg-dark text-white" : "form-select"
              }
              aria-label="select section"
              onChange={(e) => setSection(e.target.value)}
              value={section}
            >
              <option value="education">{main[index].educations.title}</option>
              <option value="experience">
                {main[index].experiences.title}
              </option>
              <option value="portfolio">{main[index].portfolios.title}</option>
            </select>

            <label htmlFor=""></label>
            <select id="" aria-label="" onClick={toggleFilter}></select>
          </form>
        </HStack>
      </Stack>
    </Box>
  )
}

export default Content
