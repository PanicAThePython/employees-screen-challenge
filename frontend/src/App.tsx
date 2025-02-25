import { Header } from "./components/Header"
import './assets/fonts.css'
import './App.css'
import Search from "./assets/icons/Search.svg"
import { TableEmployeesMobile } from "./components/TableEmployeesMobile"
import { useEffect, useState } from "react"
import { TableEmployeesDesktop } from "./components/TableEmployeesDesktop"
import { api } from "./services/api"

function App() {
  const [width, setWidth] = useState(window.innerWidth)
  const [showPlaceholder, setShowPlaceholder] = useState<boolean>(true)
  const [searchValue, setSearchValue] = useState<string>("")
  const [employees, setEmployees] = useState([])
  const [loaded, setLoaded] = useState(false)

  const fetchEmployeers = async () => {
    try{
      const response = await api.get("/employees")
      return response.data
    } catch (e) {
      return console.error(e)
    }
  }

  const load = async () => {
    try{
      const data = await fetchEmployeers()
      if (data.length > 0) setEmployees(data)
    } catch (e){
      console.error(e)
    } finally {
      setLoaded(true)
    }
  }

  useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    load()
  }, [])

  if (loaded) 
    return (
      <>
        <Header/>

        <main>
          <div className="div-employees-title-and-search">
            <h1 className="title">Funcionários</h1>
            <div className="input-div" onFocus={() => setShowPlaceholder(false)} onBlur={() => setShowPlaceholder(true)}>
              <h3 className="placeholder" style={{fontSize: (showPlaceholder && searchValue.length==0) ? "16px" : "0px"}}>
                Pesquisar
              </h3>
              <input
                  type="text"
                  className="input"
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <img
                  src={Search}
                  alt="Search"
                  style={{ width: "24px", height: "24px", color: "#9E9E9E"}}
                />
            </div>
          </div>

          <TableEmployeesMobile hidden={(width > 660)} employees={employees} search={searchValue} />
          <TableEmployeesDesktop hidden={(width <= 660)} employees={employees} search={searchValue} />
        </main>

        <footer style={{ height: "150px", width: "100%"}}/>
      </>
    )
}

export default App
