import { createContext, useState, useEffect } from "react"

import { curriculum } from "../data/curriculum"

export const ContentContext = createContext()

export const ContentContextProvider = ({ children }) => {
  /*
  // Filter
  const [filter, setFilter] = useState(
    () => JSON.parse(localStorage.getItem("solenemhep-filter")) || tags
  )
  const toggleFilter = (event) => {
    setFilter(
      filter.map((el) => {
        if (el.text === event.target.value) {
          return {
            ...el,
            bool: !el.bool,
          }
        }
        return el
      })
    )
  }
  useEffect(() => {
    localStorage.setItem("solenemhep-filter", JSON.stringify(filter))
  }, [filter])

  const filterList = (list) => {
    list.filter((el) => {
      const elem = filter.find((fil) => fil.id === el.id)
      if (elem) {
        return el
      }
    }
    )}
*/

  return (
    <ContentContext.Provider
      value={{
        curriculum,
        //filter,
        //toggleFilter,
      }}
    >
      {children}
    </ContentContext.Provider>
  )
}
