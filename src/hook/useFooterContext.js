import { useContext } from "react"
import { FooterContext } from "../context/FooterContext"

export const useFooterContext = () => {
  const context = useContext(FooterContext)
  if (context === undefined) {
    throw new Error(
      `It seems that you are trying to use FooterContext outside of its provider`
    )
  }
  return context
}
