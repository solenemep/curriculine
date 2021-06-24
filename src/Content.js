import { useState, useEffect, Fragment } from "react"
import { useCurriContext } from "./hook/useCurriContext"
import { useContentContext } from "./hook/useContentContext"

import Card from "./card/Card"
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
  const { sections, changeSection, skills, filterSkill, curriculum } =
    useContentContext()

  const filterCurri = () => {
    const main = curriculum.filter((el) => el.section === section)
    return main
    /*
    if (filter.length === 0) {
      return main[section].items
    } else {
      return main[section].items.filter((item) =>
        item.skills.filter((el) => el.items.key !== 12)
      )
    }
    */
  }

  const main = filterCurri()

  return (
    <Container maxW={"container.xl"}>
      <Heading as="h2" style={{ textTransform: "uppercase" }} size="2xl" mb={8}>
        {sections[section][lang]}
      </Heading>
      <Grid
        sx={{
          display: "grid",
          gridTemplateColumns: { base: "1fr", lg: "2fr 1fr" },
          gap: "3rem",
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
          {main.map((item) => {
            return (
              <Card
                key={item.key}
                color={item.color}
                title={item.title[lang]}
                date={item.date[lang]}
                establishment={item.establishment[lang]}
                location={item.location[lang]}
                section={item.section}
                skills={item.skills}
                code={item.code}
                link={item.link}
                details={item.details}
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
          sx={{ position: "sticky", top: "28" }}
        >
          <FormControl id="section">
            <FormLabel>{changeSection[lang]}</FormLabel>
            <Select
              defaultValue={section}
              onChange={(e) => setSection(e.target.value)}
            >
              <option value="education">{sections.education[lang]}</option>
              <option value="experience">{sections.experience[lang]}</option>
              <option value="portfolio">{sections.portfolio[lang]}</option>
            </Select>
          </FormControl>
          <FormControl id="skills">
            <FormLabel flex="1" textAlign="left">
              {filterSkill[lang]}
            </FormLabel>
            <Accordion allowMultiple>
              {skills.map((category) => {
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
