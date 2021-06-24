import { useContext } from "react"
import { NavContext } from "../context/NavContext"

export const useNavContext = () => {
  const context = useContext(NavContext)
  if (context === undefined) {
    throw new Error(
      `It seems that you are trying to use NavContext outside of its provider`
    )
  }
  return context
}
