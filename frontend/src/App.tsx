import { Header } from "./components/Header"
import './assets/fonts.css'
import './App.css'
import Search from "./assets/icons/Search.svg"
// import { TableEmployeesDesktop } from "./components/TableEmployeesDesktop"
import { TableEmployeesMobile } from "./components/TableEmployeesMobile"

function App() {
  return (
    <main>
      <Header/>
      <div className="div-employees-title-and-search">
        <h1 className="title">Funcionários</h1>
        <div className="input-div">
          <h3 className="placeholder">Pesquisar
            <input type="text" className="input"/></h3>
            <img src={Search} alt="Search" style={{ width: "24px", height: "24px", color: "#9E9E9E"}}/>
        </div>
      </div>

      <TableEmployeesMobile />
    </main>
  )
}

export default App
