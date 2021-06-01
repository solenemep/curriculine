import { useContext } from "react"
import { CurriContext } from "../context/CurriContext"

export const useCurriContext = () => {
  const context = useContext(CurriContext)
  if (context === undefined) {
    throw new Error(
      `It seems that you are trying to use GradientContext outside of its provider`
    )
  }
  return context
}
