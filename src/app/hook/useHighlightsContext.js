import { useContext } from "react"
import { HighlightsContext } from "../context/HighlightsContext"

export const useHighlightsContext = () => {
  const context = useContext(HighlightsContext)
  if (context === undefined) {
    throw new Error(
      `It seems that you are trying to use GradientContext outside of its provider`
    )
  }
  return context
}
