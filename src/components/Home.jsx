import { FaBootstrap, FaGithub } from "react-icons/fa";
import { FaHtml5 } from 'react-icons/fa';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { BiLogoJavascript } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { FaFlutter } from 'react-icons/fa6';
import { FaJava } from 'react-icons/fa';
import { FaAndroid } from 'react-icons/fa';
import { BiLogoFirebase } from 'react-icons/bi';
import { DiDart, DiDocker } from 'react-icons/di';
import { PiFileSql } from 'react-icons/pi';
import { SiApachecordova, SiSqlite } from 'react-icons/si';
import avshek from "../assets/avshek1.jpg"
import { BsBootstrap } from "react-icons/bs";
import { Projects } from "./Projects";
import { ProjectList } from "../ui/ProjectList";

export const Home = () => {
    return <>
        <div className="px-20 flex flex-row col-span-2">
            <div className="text-start flex-1">
                <p className="font-bold  text-8xl [text-shadow:_2px_2px_10px_black]">Hi, I'm</p>
                <p className="font-bold text-red-500 text-8xl hover:text-[6.2rem] transition-size duration-300 [text-shadow:_2px_2px_10px_black]">Abhishek Raj</p>
                <p className="font-bold text-yellow-100 text-8xl [text-shadow:_2px_2px_10px_black]">Singh</p>
                <br/>
                <p className="font-bold  text-2xl">Front-end Developer 👋</p>
                <br/>
                {/* <p className="w-100">I build vibrant, interactive user interfaces suing React & Flutter. With 3+ years in JavaScript and experience leading checklist & inspection tooling at Procit, I deliver beautiful performance apps</p> */}
                <p className="leading-relaxed text-justify">
 Specializing in creating responsive and intuitive web apps. I focus on building high-performance interfaces using modern technologies like <strong>React</strong>, delivering seamless user experiences across platforms.</p>
Experienced in hybrid app development and working with international teams to deliver scalable digital products.

                <div className="flex flex-row gap-10 my-10">
                    <button className="px-4 py-2" onClick={() => window.open(window.location.href + "projects", "_self")}>
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
                    <img loading = "lazy"
                        src={avshek}
                        alt="Abhishek Raj Singh"
                        className="mt-10 w-[400px] h-[400px] rounded-full object-cover  shadow-2xl shadow-black"
                    />
                </div>
            </div>


        </div>
        <h1>Skills</h1>
        <div className="skills mt-10 flex flex-wrap flex-row mx-18 my-5">
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
                    <SiApachecordova className="w-100 h-100" />
                </div>
                <p>Cordova</p>
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
            <div className="skillItem">
                <div className="w-16 h-16 text-white flex items-center justify-center rounded-full text-xl font-bold">
                    <DiDocker className="w-100 h-100" />
                </div>
                <p>Docker</p>
            </div>
        </div>
        <div className="experience opacity-75 bg-black m-20 rounded-lg p-10">
            <h1 className="">Experience</h1>
            <div className="flex mt-10 flex-row justify-between w-full">
                <p className="mx-20 text-xl"><strong>Procit BV</strong></p>
                <p className=" mx-20 text-lg" >(July-2022 to Oct-2025)</p>
            </div>
            <p className="text-left mx-20 text-sm">(Front-end developer) 3+ yrs</p>

{/* <p className="mx-20 my-5 text-justify leading-relaxed">
  At <strong>Procit BV</strong>, I worked for 3 yrs and 4 months as a <strong>Front-End Developer</strong>, focusing on web and Android app development using <strong>Cordova</strong>.  
  I led the development of the company’s flagship <strong>Checklist</strong> product — a digital inspection and maintenance platform designed to streamline data collection and reporting for industries such as manufacturing and oil & gas.  
  My primary role involved building responsive user interfaces, integrating APIs, and optimizing the overall front-end performance to ensure a seamless user experience across platforms.  
  I occasionally worked with <strong>AngularJS</strong> and <strong>Java</strong> for feature enhancements and used <strong>SQLite</strong> and <strong>SQL Server Management</strong> for light database operations, such as viewing logs and running basic queries.  
  Throughout the project, I collaborated closely with project leaders in the <strong>Netherlands</strong> to deliver scalable solutions and assisted global clients including <strong>Moduresource</strong>, <strong>Aboma</strong>, <strong>MRUSA</strong>, <strong>Impala</strong>, and others.
</p> */}

            <div className="mx-20 my-5">
                <ul className="list-disc list-inside space-y-2 text-justify leading-relaxed">
                    <li>Led the development of the company’s flagship <strong>Checklist</strong> product — a digital inspection and maintenance platform for industries like manufacturing and oil & gas.</li>
                    <li>Built responsive user interfaces, integrated APIs, and optimized front-end performance to deliver a seamless user experience across web and Android platforms.</li>
                    <li>Occasionally worked with <strong>AngularJS</strong> and <strong>Java</strong> for feature enhancements.</li>
                    <li>Performed light database operations using <strong>SQLite</strong> and <strong>SQL Server Management</strong>, such as viewing logs and running basic queries.</li>
                    <li>Collaborated closely with project leaders in the <strong>Netherlands</strong> to deliver scalable and reliable solutions.</li>
                    <li>Assisted global clients including <strong>Moduresource</strong>, <strong>Aboma</strong>, <strong>MRUSA</strong>, <strong>Impala</strong>, and others.</li>
                </ul>
            </div>


        </div>
        <div className="">
            
            <ProjectList />
        </div>
    </>
}