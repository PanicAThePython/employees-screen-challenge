import "../../index.css"
import "./style.css"
import ArrowDown from "../../assets/icons/ArrowDown.svg"
import ArrowUp from "../../assets/icons/ArrowUp.svg"
export function TableEmployeesMobile(){

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
        <table className="table">
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
                        <td className="table-row-text" onClick={() => console.log("ativa a visualização de conteúdo")}>
                            <img src={ArrowDown} alt="Arrow Down" className="icon-arrow"/>
                            <img src={ArrowUp} alt="Arrow Down" className="icon-arrow"/>
                        </td>                    
                    </tr>
                    <tr>
                        <div className="table-person-content">
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
                        </div>
                    </tr>
                </>
            ))}
            
        </table>
    )
}