import { NavLink, useNavigate, useNavigation } from "react-router-dom"
import domainLogo from "../assets/react.svg"
import '../App.css'
import avshek from "../../public/images/logo.png"
import { useState } from "react"

export const Header = () => {
    const navigation = useNavigation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return <div className="navbar flex items-center justify-between px-4 md:px-8 lg:px-20 py-4 md:py-6 lg:py-10 bg-transparent">
        <NavLink to="/" onClick={closeMobileMenu} className={({isActive}) => `flex flex-row items-center gap-2 ${isActive} ? 'white' : 'white'`}>
            <div className="w-12 h-12 md:w-16 md:h-16 bg-black text-white flex items-center justify-center rounded-full text-sm md:text-xl font-bold">
                <img src={avshek} className="rounded-full object-cover h-12 w-12 md:h-16 md:w-16" alt="Logo"></img>
            </div>

            <p className="!white font-bold hover:text-gray-500 transition-colors duration-300 text-xs md:text-sm lg:text-lg">
                Abhishek
            </p>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 lg:gap-10">
            <NavLink to="/" className="font-bold hover:text-xl transition-size duration-500 text-sm lg:text-lg text-gray-200">Home</NavLink>
            <NavLink to="/projects" className="font-bold hover:text-xl transition-size duration-500 text-sm lg:text-lg text-gray-200">Projects</NavLink>
            <NavLink to="/contact" className="font-bold hover:text-xl transition-size duration-300 text-sm lg:text-lg">Contact</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button 
            className="hamburger md:hidden flex flex-col" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
        >
            <span></span>
            <span></span>
            <span></span>
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
            <div className="absolute top-20 right-0 md:hidden bg-gray-900 w-48 flex flex-col gap-4 p-6 rounded-lg shadow-lg z-50">
                <NavLink 
                    to="/" 
                    onClick={closeMobileMenu}
                    className="font-bold text-gray-200 hover:text-red-500 transition-colors"
                >
                    Home
                </NavLink>
                <NavLink 
                    to="/projects" 
                    onClick={closeMobileMenu}
                    className="font-bold text-gray-200 hover:text-red-500 transition-colors"
                >
                    Projects
                </NavLink>
                <NavLink 
                    to="/contact" 
                    onClick={closeMobileMenu}
                    className="font-bold text-gray-200 hover:text-red-500 transition-colors"
                >
                    Contact
                </NavLink>
            </div>
        )}
    </div>
}