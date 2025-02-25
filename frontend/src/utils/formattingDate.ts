export function getFormattedDate(admission_date: string){
    const date = admission_date.split("T")[0]
    const [year, month, day ] = date.split("-")
    return day + "/" + month + "/" + year
}