import { CurriContextProvider } from "./context/CurriContext"
import CurricuLine from "./CurricuLine"

const App = () => {
  return (
    <CurriContextProvider>
      <CurricuLine />
    </CurriContextProvider>
  )
}

export default App
