export function getFormattedPhone(phone: string) {
    const country = "+" + phone.slice(0,2)
    const state = " (" + phone.slice(2, 4) + ") "
    const fisrtPartPhone = phone.slice(4, 10) + "-"
    const lastPartPhone = phone.slice(10, 13)

    const maskedPhone = country + state + fisrtPartPhone + lastPartPhone
    return maskedPhone
}