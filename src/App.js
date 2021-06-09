import { CurriContextProvider } from "./app/context/CurriContext"
import CurricuLine from "./app/CurricuLine"

const App = () => {
  return (
    <CurriContextProvider>
      <CurricuLine />
    </CurriContextProvider>
  )
}

export default App
