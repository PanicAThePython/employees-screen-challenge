import "./style.css"
export function TableEmployees (){

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
                <th><h2 className="table-title">CARGO</h2></th>
                <th><h2 className="table-title">DATA DE ADMISSÃO</h2></th>
                <th><h2 className="table-title">TELEFONE</h2></th>
            </tr>

            {mock && mock.map((item, index) => (
                <tr key={index} className="table-row">
                    <td className="table-row-text">{item.foto}</td>
                    <td className="table-row-text">{item.nome}</td>
                    <td className="table-row-text">{item.cargo}</td>
                    <td className="table-row-text">{item.data}</td>
                    <td className="table-row-text">{item.telefone}</td>
                </tr>
            ))}
            
        </table>
    )
}