import { BrowserRouter } from "react-router-dom"
import Header from "./components/header"
import SearchInput from "./components/searchInput"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <SearchInput title={"Funcionários"} />
      </BrowserRouter>
    </div>
  )
}

export default App
