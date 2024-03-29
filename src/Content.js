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
  Alert,
  AlertIcon,
} from "@chakra-ui/react"
import { AddIcon, MinusIcon, SmallCloseIcon } from "@chakra-ui/icons"
import CardContent from "./card/CardContent"

const Content = () => {
  const { lang, section, setSection, bgButton, hoverButton } = useCurriContext()
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
  }, [main, filter, section])

  const sectionScroll = (e) => {
    setSection(e.target.value)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Container maxW={"container.xl"} pt={4}>
      <Heading as="h2" size="2xl" mb={16}>
        {sections[section][lang]}
      </Heading>
      <Grid
        sx={{
          display: "grid",
          gridTemplateColumns: { base: "1fr", lg: "2fr 1fr" },
          gap: "6rem",
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
          {list.length === 0 && (
            <Alert status="info" rounded={"lg"}>
              <AlertIcon />
              {changeSection.nothing[lang]}
              {sections[section][lang]}
            </Alert>
          )}
          {list.length !== 0 &&
            list.map((item) => {
              return (
                <CardContent
                  key={item.key}
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
            <FormLabel fontWeight={"bold"}>
              {changeSection.choose[lang]}
            </FormLabel>
            <Select defaultValue={section} onChange={(e) => sectionScroll(e)}>
              <option value="education">{sections.education[lang]}</option>
              <option value="experience">{sections.experience[lang]}</option>
              <option value="portfolio">{sections.portfolio[lang]}</option>
            </Select>
          </FormControl>
          <FormControl id="skills">
            <FormLabel flex="1" textAlign="left">
              <HStack justifyContent={"space-between"}>
                <Text fontWeight={"bold"}>{filterSkill.asidefilter[lang]}</Text>
                <IconButton
                  icon={<SmallCloseIcon />}
                  type="button"
                  bg={bgButton}
                  aria-label="remove filter"
                  _hover={hoverButton}
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
                            <Text>
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
                                  colorScheme={"gray"}
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
