import "../../index.css"
import "./style.css"
import ArrowDown from "../../assets/icons/ArrowDown.svg"
import ArrowUp from "../../assets/icons/ArrowUp.svg"
import { ComponentProps, useState } from "react"

export function TableEmployeesMobile(props: ComponentProps<"table">){

    const [idEmployeerSection, setIdEmployeerSection] = useState<number>(-1)

    const handleClick = (index: number) => {
        if(idEmployeerSection !== index) setIdEmployeerSection(index)
        else setIdEmployeerSection(-1)
    }

    const mock = [
        {
            foto: "dhfskhfkjhf",
            nome: "Teste silva",
            cargo: "dev front",
            data: "03/12/2020",
            telefone: "47 99999-3333"
        },
        {
            foto: "dhfskhfkjhf",
            nome: "Teste silva",
            cargo: "dev front",
            data: "03/12/2020",
            telefone: "47 99999-3333"
        },
        {
            foto: "dhfskhfkjhf",
            nome: "Teste silva",
            cargo: "dev front",
            data: "03/12/2020",
            telefone: "47 99999-3333"
        },
        {
            foto: "dhfskhfkjhf",
            nome: "Teste silva",
            cargo: "dev front",
            data: "03/12/2020",
            telefone: "47 99999-3333"
        }
    ]

    return (
        <table className="table" {...props}>
            <tr className="table-header">
                <th><h2 className="table-title">FOTO</h2></th>
                <th><h2 className="table-title">NOME</h2></th>
                <th><h2 className="icon-white-circle">{'\u26AA'}</h2></th>
            </tr>

            {mock && mock.map((item, index) => (
                <>
                    <tr key={index} className="table-row">
                        <td className="table-row-text">{item.foto}</td>
                        <td className="table-row-text">{item.nome}</td>
                        <td className="table-row-text" onClick={() => handleClick(index)}>
                            <img src={(idEmployeerSection === index) ? ArrowUp : ArrowDown } alt="Arrow Icon" className="icon-arrow"/>
                        </td>           
                    </tr>
                    
                    <td className="table-person-content" colSpan={3} hidden={(idEmployeerSection !== index)}>
                        <div className="table-person-content-div">
                            <span className="table-title-person-content">Cargo</span> 
                            <span className="table-person-data-text">{item.cargo}</span>
                        </div>
                        <div className="table-person-content-div">
                            <span className="table-title-person-content">Data de admissão</span> 
                            <span className="table-person-data-text">{item.data}</span>
                        </div>
                        <div className="table-person-content-div">
                            <span className="table-title-person-content">Telefone</span> 
                            <span className="table-person-data-text">{item.telefone}</span>
                        </div>
                    </td>         
                </>
            ))}
            
        </table>
    )
}