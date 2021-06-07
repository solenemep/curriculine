import { useContext } from "react"
import { ContactContext } from "../context/ContactContext"

export const useContactContext = () => {
  const context = useContext(ContactContext)
  if (context === undefined) {
    throw new Error(
      `It seems that you are trying to use GradientContext outside of its provider`
    )
  }
  return context
}
