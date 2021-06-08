import { useContext } from "react"
import { HomeContext } from "../context/HomeContext"

export const useHomeContext = () => {
  const context = useContext(HomeContext)
  if (context === undefined) {
    throw new Error(
      `It seems that you are trying to use HomeContext outside of its provider`
    )
  }
  return context
}
