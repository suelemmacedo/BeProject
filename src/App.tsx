import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import SearchInput from "./components/searchInput";
import EmployeeList from "./components/employeeList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <SearchInput title={"Funcionários"} />
        <EmployeeList />
      </BrowserRouter>
    </div>
  );
}

export default App;


