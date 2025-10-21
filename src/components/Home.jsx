import { FaBootstrap, FaGithub } from "react-icons/fa";
import { FaHtml5 } from 'react-icons/fa';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { BiLogoJavascript } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { FaFlutter } from 'react-icons/fa6';
import { FaJava } from 'react-icons/fa';
import { FaAndroid } from 'react-icons/fa';
import { BiLogoFirebase } from 'react-icons/bi';
import { DiDart } from 'react-icons/di';
import { PiFileSql } from 'react-icons/pi';
import { SiSqlite } from 'react-icons/si';
import avshek from "../assets/avshek1.jpg"
import { BsBootstrap } from "react-icons/bs";
import { Projects } from "./Projects";
import { ProjectList } from "../ui/ProjectList";

export const Home = () => {
    return <>
        <div className="px-20 flex flex-row col-span-2 h-screen">
            <div className="text-start flex-1">
                <p className="font-bold  text-8xl [text-shadow:_2px_2px_10px_black]">Hi, I'm</p>
                <p className="font-bold text-red-500 text-8xl hover:text-[6.2rem] transition-size duration-300 [text-shadow:_2px_2px_10px_black]">Abhishek Raj</p>
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

                    <button className="flex flex-row items-center gap-2" onClick={() => window.open("https://github.com/avshek-raj", "_blank")}>
                        <FaGithub className="w-5 h-5" />
                        Github
                    </button>
                </div>

            </div>
            <div className="flex flex-1 justify-center">
                <div className="hover:scale-110 transition-size duration-500">
                    {/* <img
                        src={avshek}
                        alt="Avshek"
                        className="w-[550px] h-[550px] rounded-full  shadow-2xl shadow-black"
                    /> */}
                </div>
            </div>


        </div>
        <h1>Skills</h1>
        <div className="skills flex flex-wrap flex-row mx-18 my-5">
            <div className="skillItem">
                <div className="w-16 h-16  text-white flex items-center justify-center rounded-full text-xl font-bold">
                    <FaHtml5 className="w-100 h-100" />
                </div>
                <p>Html5</p>
            </div>
            <div className="skillItem">
                <div className="w-16 h-16  text-white flex items-center justify-center rounded-full text-xl font-bold">
                    <BiLogoTailwindCss className="w-100 h-100" />
                </div>
                <p>Tailwindcss</p>
            </div>
            <div className="skillItem">
                <div className="w-16 h-16  text-white flex items-center justify-center rounded-full text-xl font-bold">
                    <FaBootstrap className="w-100 h-100" />
                </div>
                <p>Bootstrap</p>
            </div>
            <div className="skillItem">
                <div className="w-16 h-16  text-white flex items-center justify-center rounded-full text-xl font-bold">
                    <BiLogoJavascript className="w-100 h-100" />
                </div>
                <p>Javascript</p>
            </div>
            <div className="skillItem">
                <div className="w-16 h-16  text-white flex items-center justify-center rounded-full text-xl font-bold">
                    <FaReact className="w-100 h-100" />
                </div>
                <p>React</p>
            </div>
            <div className="skillItem">
                <div className="w-16 h-16  text-white flex items-center justify-center rounded-full text-xl font-bold">
                    <FaFlutter className="w-100 h-100" />
                </div>
                <p>Flutter</p>
            </div>
            <div className="skillItem">
                <div className="w-16 h-16  text-white flex items-center justify-center rounded-full text-xl font-bold">
                    <DiDart className="w-100 h-100" />
                </div>
                <p>Dart</p>
            </div>
            <div className="skillItem">
                <div className="w-16 h-16  text-white flex items-center justify-center rounded-full text-xl font-bold">
                    <FaJava className="w-100 h-100" />
                </div>
                <p>Java</p>
            </div>
            <div className="skillItem">
                <div className="w-16 h-16  text-white flex items-center justify-center rounded-full text-xl font-bold">
                    <FaAndroid className="w-100 h-100" />
                </div>
                <p>Android</p>
            </div>
            <div className="skillItem">
                <div className="w-16 h-16  text-white flex items-center justify-center rounded-full text-xl font-bold">
                    <BiLogoFirebase className="w-100 h-100" />
                </div>
                <p>Firebase</p>
            </div>
            <div className="skillItem">
                <div className="w-16 h-16  text-white flex items-center justify-center rounded-full text-xl font-bold">
                    <PiFileSql className="w-100 h-100" />
                </div>
                <p>SQL</p>
            </div>
            <div className="skillItem">
                <div className="w-16 h-16  text-white flex items-center justify-center rounded-full text-xl font-bold">
                    <SiSqlite className="w-100 h-100" />
                </div>
                <p>SQLite</p>
            </div>
            <div className="skillItem">
                <div className="w-16 h-16 text-white flex items-center justify-center rounded-full text-xl font-bold">
                    <FaGithub className="w-100 h-100" />
                </div>
                <p>Github</p>
            </div>
        </div>
        <div className="experience">
            <h1 className="">Experience</h1>
            <div className="flex flex-row justify-between w-full">
                <p className="mx-20 text-xl">Procit</p>
                <p className=" mx-20 text-lg" >(July-2022 to Oct-2025)</p>
            </div>
            <p className="text-left mx-20 text-sm">(Front-end developer)</p>
            
            <p className="mx-20 my-5">3+ years of experience in front-end development, specializing in creating dynamic and responsive user interfaces using React and Flutter. Proven track record of delivering high-quality web and mobile applications that enhance user engagement and drive business growth.</p>
        </div>
        <div>
            <h1>Projects</h1>
            <ProjectList />
        </div>
    </>
}