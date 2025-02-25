import { ComponentProps } from "react"

interface EmployeeType {
    id: number
    name: string
    job: string
    admission_date: string
    phone: string
    image: string
}

export interface TableProps extends ComponentProps<"table">{
    employees: EmployeeType[]
    search: string
}