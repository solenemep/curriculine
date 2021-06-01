import { useContext } from "react"
import { ContentContext } from "../context/ContentContext"

export const useContentContext = () => {
  const context = useContext(ContentContext)
  if (context === undefined) {
    throw new Error(
      `It seems that you are trying to use GradientContext outside of its provider`
    )
  }
  return context
}
