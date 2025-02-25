import { Header } from "./components/Header"
import './assets/fonts.css'
import './App.css'
import Search from "./assets/icons/Search.svg"
import { TableEmployeesMobile } from "./components/TableEmployeesMobile"
import { useEffect, useState } from "react"
import { TableEmployeesDesktop } from "./components/TableEmployeesDesktop"

function App() {
  const [width, setWidth] = useState(window.innerWidth)
  const [showPlaceholder, setShowPlaceholder] = useState<boolean>(true)
  const [searchValue, setSearchValue] = useState<string>("")

  useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main>
      <Header/>
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

      <TableEmployeesMobile hidden={(width > 660)} />
      <TableEmployeesDesktop hidden={(width <= 660)} />
    </main>
  )
}

export default App
