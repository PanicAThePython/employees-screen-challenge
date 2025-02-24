import { Header } from "./components/Header"
import './assets/fonts.css'
import './App.css'
import Search from "./assets/icons/Search.svg"
import { TableEmployees } from "./components/TableEmployees"

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

      <TableEmployees/>
    </main>
  )
}

export default App
