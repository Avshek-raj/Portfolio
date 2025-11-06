import { NavLink, useNavigate, useNavigation } from "react-router-dom"
import domainLogo from "../assets/react.svg"
import '../App.css'
import avshek from "../../public/images/logo.png"

export const Header = () => {
    const navigation = useNavigation();
    console.log(navigation);

    return <div className="navbar flex items-center justify-between px-20 py-10 bg-transparent">
        <NavLink to="/" className={({isActive}) => `flex flex-row items-center gap-2 ${isActive} ? 'white' : 'white'`}>
            <div className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-full text-xl font-bold">
                <img src={avshek} className="rounded-full object-cover h-16 w-16"></img>
            </div>

            <p className="!white font-bold hover:text-gray-500 transition-colors duration-300 text-lg">
                Abhishek Raj Singh
            </p>
        </NavLink>

        <div className="flex gap-15">
        <NavLink to="/" className="font-bold hover:text-xl transition-size duration-500 text-lg text-gray-200">Home</NavLink>
        <NavLink to="/projects" className="font-bold hover:text-xl transition-size duration-500 text-lg text-gray-200">Projects</NavLink>
        <NavLink to="/contact" className="font-bold hover:text-xl transition-size duration-300 text-lg">Contact</NavLink>
        </div>
    </div>
}