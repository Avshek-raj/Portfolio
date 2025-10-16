import { NavLink } from "react-router-dom"
import domainLogo from "../assets/react.svg"
import '../App.css'

export const Header = () => {
    return <div className="navbar flex items-center justify-between px-20 py-10">
        <NavLink to="/" className="flex flex-row gap-2">
            <img src={domainLogo} className=""></img>
            <p className="font-semibold">Abhishek Raj Singh</p>
        </NavLink>
        <div className="flex gap-15">
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        </div>
    </div>
}