import { useContext } from "react"
import { HeaderContext } from "../context/HeaderContext"

export const useHeaderContext = () => {
  const context = useContext(HeaderContext)
  if (context === undefined) {
    throw new Error(
      `It seems that you are trying to use GradientContext outside of its provider`
    )
  }
  return context
}
