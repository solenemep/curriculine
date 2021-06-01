import { createContext } from "react"

import { highlights } from "../data/highlights/highlights"

export const HighlightsContext = createContext()

export const HighlightsContextProvider = ({ children }) => {
  return (
    <HighlightsContext.Provider value={{ highlights }}>
      {children}
    </HighlightsContext.Provider>
  )
}
