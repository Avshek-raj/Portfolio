import { NavLink } from "react-router-dom"
import domainLogo from "../assets/react.svg"
import '../App.css'

export const Header = () => {
    return <div className="navbar flex items-center justify-between px-20 py-10 bg-transparent">
        <NavLink to="/" className="flex flex-row items-center gap-2">
            <div className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-full text-xl font-bold">
                AR
            </div>

            <p className="font-bold hover:text-gray-500 transition-colors duration-300 text-lg">
                Abhishek Raj Singh
            </p>
        </NavLink>

        <div className="flex gap-15">
        <NavLink to="/projects" className="font-bold hover:text-xl transition-size duration-500 text-lg text-gray-200">Projects</NavLink>
        <NavLink to="/contact" className="font-bold hover:text-xl transition-size duration-300 text-lg">Contact</NavLink>
        </div>
    </div>
}