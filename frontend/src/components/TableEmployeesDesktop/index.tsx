import "../../global.css"
import { getFormattedDate } from "../../utils/formattingDate"
import { getFormattedPhone } from "../../utils/formattingPhone"
import { TableProps } from "../../utils/TableType"

export function TableEmployeesDesktop({ employees, search, ...props}: TableProps){
    return (
        <table className="table" {...props}>
            <tr className="table-header">
                <th><h2 className="table-title">FOTO</h2></th>
                <th><h2 className="table-title">NOME</h2></th>
                <th><h2 className="table-title">CARGO</h2></th>
                <th><h2 className="table-title">DATA DE ADMISSÃO</h2></th>
                <th><h2 className="table-title">TELEFONE</h2></th>
            </tr>

            {employees && employees
                .filter(({name, job, phone}) => name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || job.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || phone.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                .map((item) => {
                    const admissionDate = getFormattedDate(item.admission_date)
                    const maskedPhone = getFormattedPhone(item.phone)
                    
                    return (
                        <tr key={item.id} className="table-row">
                            <td className="table-row-text" style={{ paddingLeft: "32px" }}>
                                <img src={item.image} alt="profile image" className="profile-image"/>
                            </td>
                            <td className="table-row-text">{item.name}</td>
                            <td className="table-row-text">{item.job}</td>
                            <td className="table-row-text">{admissionDate}</td>
                            <td className="table-row-text" style={{ paddingRight: "32px" }}>{maskedPhone}</td>
                        </tr>
                    )
                })
            }
        
        </table>
    )
}