import { useState, useEffect, Fragment } from "react"
import { useCurriContext } from "./hook/useCurriContext"
import { useContentContext } from "./hook/useContentContext"

import Card from "./Card"
import {
  Heading,
  FormLabel,
  FormControl,
  Select,
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  Checkbox,
  Flex,
  Stack,
  Grid,
} from "@chakra-ui/react"
import { AddIcon, MinusIcon } from "@chakra-ui/icons"

const Content = () => {
  const { lang, section, setSection, filter, toggleFilter } = useCurriContext()
  const { main, aside, skills } = useContentContext()

  const filterMain = (filter) => {
    if (filter.length === 0) {
      return main[section].items
    } else {
      return main[section].items.filter((item) =>
        item.skills.filter((el) => el.items.key !== 12)
      )
    }
  }

  const mainy = filterMain(filter)
  console.log(mainy)

  return (
    <Container maxW={"container.xl"}>
      <Heading as="h2" style={{ textTransform: "uppercase" }} size="2xl" mb={8}>
        {main[section].title[lang]}
      </Heading>
      <Grid
        sx={{
          display: "grid",
          gridTemplateColumns: { base: "1fr", lg: "2fr 1fr" },
          gap: "2rem",
        }}
        alignItems={"start"}
        justifyContent={"space-between"}
      >
        <Stack
          sx={{ columnSpan: 1 }}
          direction={"column"}
          spacing={8}
          id="main"
        >
          {mainy.map((item) => {
            return (
              <Card
                key={item.key}
                color={item.color}
                title={item.title[lang]}
                date={item.date[lang]}
                establishment={item.establishment[lang]}
                location={item.location[lang]}
                section={item.section}
                fields={item.fields}
                skills={item.skills}
                github={item.github}
                link={item.link}
                path={item.path}
                details={item.details[lang]}
              />
            )
          })}
        </Stack>
        <Stack
          sx={{ columnSpan: 1 }}
          direction={"column"}
          alignItems={"start"}
          spacing={8}
          id="aside"
        >
          <FormControl id="section">
            <FormLabel>{aside.changeSection[lang]}</FormLabel>
            <Select
              defaultValue={section}
              onChange={(e) => setSection(e.target.value)}
            >
              <option value="education">{main.education.title[lang]}</option>
              <option value="experience">{main.experience.title[lang]}</option>
              <option value="portfolio">{main.portfolio.title[lang]}</option>
            </Select>
          </FormControl>
          <FormControl id="skills">
            <FormLabel flex="1" textAlign="left">
              {skills.filter[lang]}
            </FormLabel>
            <Accordion allowMultiple>
              {skills.items.map((category) => {
                return (
                  <AccordionItem key={category.key}>
                    {({ isExpanded }) => (
                      <Fragment>
                        <AccordionButton>
                          <Text flex="1" textAlign="left">
                            {category.title[lang]}{" "}
                            <Text as={"small"}>
                              ( /{category.items.length})
                            </Text>
                          </Text>

                          {isExpanded ? (
                            <MinusIcon fontSize="12px" />
                          ) : (
                            <AddIcon fontSize="12px" />
                          )}
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                          <Flex direction={"column"} alignItems={"start"}>
                            {category.items.map((skill) => {
                              return (
                                <Checkbox
                                  key={skill.key}
                                  value={skill.key}
                                  onChange={toggleFilter}
                                  isChecked={filter.includes(Number(skill.key))}
                                >
                                  {skill.text[lang]}
                                </Checkbox>
                              )
                            })}
                          </Flex>
                        </AccordionPanel>
                      </Fragment>
                    )}
                  </AccordionItem>
                )
              })}
            </Accordion>
          </FormControl>
        </Stack>
      </Grid>
    </Container>
  )
}

export default Content
