import Logo from "../../assets/icons/Logo.svg"
import "./style.css"

export function Header() {
    return (
        <header className="header">
            <img src={Logo} alt="BeTalent" style={{ padding: "10px", gap: "10px", height: "34px", width: "91.19px" }} />
        </header>
    )
}