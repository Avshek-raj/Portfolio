import { FaGithub } from "react-icons/fa";
import avshek from "../assets/avshek.png"

export const Home = () => {
    return <>
        <div className="px-20 flex flex-row col-span-2 h-screen">
            <div className="text-start flex-1">
                <p className="font-bold  text-8xl [text-shadow:_2px_2px_10px_black]">Hi, I'm</p>
                <p className="font-bold text-red-500 text-8xl hover:text-[6.5rem] transition-size duration-300 [text-shadow:_2px_2px_10px_black]">Abhishek Raj</p>
                <p className="font-bold text-yellow-100 text-8xl [text-shadow:_2px_2px_10px_black]">Singh</p>
                <br/>
                <p className="font-bold  text-2xl">Front-end Developer 👋</p>
                <br/>
                <p className="w-100">I build vibrant, interactive user interfaces suing React & Flutter. With 3+ years in JavaScript and experience leading checklist & inspection tooling at Procit, I deliver beautiful performance apps</p>
                <div className="flex flex-row gap-10 my-10">
                    <button className="px-4 py-2">
                        <span>View My Work</span>
                        <span className="font-bold text-xl pl-2">➡︎</span>
                    </button>

                    <button className="flex flex-row items-center gap-2">
                        <FaGithub className="w-5 h-5" />
                        Github
                    </button>
                </div>

            </div>
            {/* <div className="flex flex-1 items-center justify-center">
                <img src={avshek} alt="Avshek" className="w-[400px] h-[400px] rounded-full" />
            </div> */}
            <div className="flex flex-1 justify-center">
                <div className="hover:scale-110 transition-size duration-500">
                    <img
                        src={avshek}
                        alt="Avshek"
                        className="w-[550px] h-[550px] rounded-full  shadow-2xl shadow-black"
                    />
                </div>
            </div>


        </div>
    </>
}