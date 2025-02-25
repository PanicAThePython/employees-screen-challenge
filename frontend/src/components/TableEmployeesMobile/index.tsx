import "../../global.css"
import "./style.css"
import ArrowDown from "../../assets/icons/ArrowDown.svg"
import ArrowUp from "../../assets/icons/ArrowUp.svg"
import { useState } from "react"
import { TableProps } from "../../utils/TableType"
import { getFormattedDate } from "../../utils/formattingDate"
import { getFormattedPhone } from "../../utils/formattingPhone"

export function TableEmployeesMobile({ employees, search, ...props }: TableProps){
    const [idEmployeerSection, setIdEmployeerSection] = useState<number>(-1)

    const handleClick = (index: number) => {
        if(idEmployeerSection !== index) setIdEmployeerSection(index)
        else setIdEmployeerSection(-1)
    }

    return (
        <table className="table" {...props}>
            <tr className="table-header">
                <th><h2 className="table-title">FOTO</h2></th>
                <th><h2 className="table-title">NOME</h2></th>
                <th><h2 className="icon-white-circle">{'\u26AA'}</h2></th>
            </tr>

            {employees && employees
                .filter(({name, job, phone}) => name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || job.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || phone.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                .map((item) => {
                    const admissionDate = getFormattedDate(item.admission_date)
                    const maskedPhone = getFormattedPhone(item.phone)
                    
                    return (
                        <>
                            <tr key={item.id} className="table-row">
                                <td className="table-row-text">
                                    <img src={item.image} alt="profile image" className="profile-image"/>
                                </td>
                                <td className="table-row-text">{item.name}</td>
                                <td className="table-row-text" style={{ textAlign: "right" }} onClick={() => handleClick(item.id)}>
                                    <img src={(idEmployeerSection === item.id) ? ArrowUp : ArrowDown } alt="Arrow Icon" className="icon-arrow"/>
                                </td>           
                            </tr>
                            
                            <td className="table-person-content" colSpan={3} hidden={(idEmployeerSection !== item.id)}>
                                <div className="table-person-content-div">
                                    <span className="table-title-person-content">Cargo</span> 
                                    <span className="table-person-data-text">{item.job}</span>
                                </div>
                                <div className="table-person-content-div">
                                    <span className="table-title-person-content">Data de admissão</span> 
                                    <span className="table-person-data-text">{admissionDate}</span>
                                </div>
                                <div className="table-person-content-div">
                                    <span className="table-title-person-content">Telefone</span> 
                                    <span className="table-person-data-text">{maskedPhone}</span>
                                </div>
                            </td>         
                        </>
                    )
                })
            }
            
        </table>
    )
}