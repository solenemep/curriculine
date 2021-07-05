import { useState, useEffect, Fragment } from "react"
import { useCurriContext } from "./hook/useCurriContext"
import { useContentContext } from "./hook/useContentContext"

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
  HStack,
  IconButton,
  Spacer,
} from "@chakra-ui/react"
import { AddIcon, MinusIcon, SmallCloseIcon } from "@chakra-ui/icons"
import CardContent from "./card/CardContent"

const Content = () => {
  const { lang, section, setSection, colorCard } = useCurriContext()
  const {
    sections,
    changeSection,
    skills,
    filterSkill,
    main,
    filter,
    setFilter,
    toggleFilter,
  } = useContentContext()
  const [list, setList] = useState(main)

  useEffect(() => {
    const filterMain = (section, filter) => {
      if (filter.length !== 0) {
        let mainy = main.filter((elem) => {
          let bool = false
          elem.skills.map((skill) => {
            if (filter.includes(Number(skill.key))) {
              bool = true
            }
            return bool
          })
          if (bool === true) {
            return true
          } else return false
        })
        return mainy.filter((el) => el.section === section)
      } else {
        let mainy = main
        return mainy.filter((el) => el.section === section)
      }
    }

    setList(filterMain(section, filter).reverse())
  }, [filter, section])

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
          {list.map((item) => {
            return (
              <CardContent
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
                img={item.img}
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
        >
          <FormControl id="section">
            <FormLabel fontWeight={"bold"}>{changeSection[lang]}</FormLabel>
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
              <HStack justifyContent={"space-between"}>
                <Text fontWeight={"bold"}>{filterSkill[lang]}</Text>
                <IconButton
                  icon={<SmallCloseIcon />}
                  color={colorCard}
                  type="button"
                  bg={"purple.100"}
                  size={"xs"}
                  _hover={{
                    bg: `purple.300`,
                    textDecoration: "none",
                    color: `${colorCard}`,
                  }}
                  onClick={() => setFilter([])}
                />
              </HStack>
            </FormLabel>
            <Accordion allowMultiple>
              {skills.map((category) => {
                return (
                  <AccordionItem key={category.key}>
                    {({ isExpanded }) => (
                      <Fragment>
                        <AccordionButton justifyContent={"space-between"}>
                          <Text textAlign="left">{category.title[lang]} </Text>
                          <HStack justifyContent={"space-between"}>
                            <Text as={"small"}>
                              {
                                filter.filter((el) =>
                                  el.toString().startsWith(`${category.key}`)
                                ).length
                              }
                              /{category.items.length}
                            </Text>
                            <Spacer />
                            {isExpanded ? (
                              <MinusIcon fontSize="12px" />
                            ) : (
                              <AddIcon fontSize="12px" />
                            )}
                          </HStack>
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
