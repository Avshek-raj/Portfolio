import { FaBootstrap, FaGithub } from "react-icons/fa";
import { FaHtml5 } from 'react-icons/fa';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { BiLogoJavascript } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { FaFlutter } from 'react-icons/fa6';
import { FaJava } from 'react-icons/fa';
import { FaAndroid } from 'react-icons/fa';
import { BiLogoFirebase } from 'react-icons/bi';
import { DiDart, DiDocker, DiPython } from 'react-icons/di';
import { PiFileSql } from 'react-icons/pi';
import { SiApachecordova, SiSqlite } from 'react-icons/si';
import avshek from "../assets/avshek1.jpg"
import { BsBootstrap } from "react-icons/bs";
import { Projects } from "./Projects";
import { ProjectList } from "../ui/ProjectList";

export const Home = () => {
    return <>
        <div className="px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col lg:flex-row gap-6 lg:gap-0">
            <div className="text-start flex-1 flex flex-col justify-center">
                <p className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl [text-shadow:_2px_2px_10px_black]">Hi, I'm</p>
                <p className="font-bold text-red-500 text-4xl sm:text-5xl md:text-6xl lg:text-8xl hover:text-[3rem] sm:hover:text-[3.5rem] md:hover:text-[5rem] lg:hover:text-[6.2rem] transition-size duration-300 [text-shadow:_2px_2px_10px_black]">Abhishek Raj</p>
                <p className="font-bold text-yellow-100 text-4xl sm:text-5xl md:text-6xl lg:text-8xl [text-shadow:_2px_2px_10px_black]">Singh</p>
                <br/>
                <p className="font-bold text-lg sm:text-xl md:text-2xl">Software Engineer 👋</p>
                <br/>
                <p className="leading-relaxed text-justify text-sm sm:text-base md:text-lg">
                    Specializing in creating responsive and intuitive web apps. I focus on building high-performance interfaces using modern technologies like <strong>React</strong>, delivering seamless user experiences across platforms. Experienced in hybrid app development and working with international teams to deliver scalable digital products.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 my-6 sm:my-10">
                    <button className="px-4 py-2 w-full sm:w-auto text-sm sm:text-base" onClick={() => window.open(window.location.href + "projects", "_self")}>
                        <span>View My Work</span>
                        <span className="font-bold text-lg sm:text-xl pl-2">➡︎</span>
                    </button>

                    <button className="flex flex-row items-center justify-center sm:justify-start gap-2 px-4 py-2 w-full sm:w-auto text-sm sm:text-base" onClick={() => window.open("https://github.com/avshek-raj", "_blank")}>
                        <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                        Github
                    </button>
                </div>

            </div>
            <div className="flex flex-1 justify-center items-center mt-6 lg:mt-0">
                <div className="hover:scale-110 transition-size duration-500">
                    <img loading="lazy"
                        src={avshek}
                        alt="Abhishek Raj Singh"
                        className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] rounded-full object-cover shadow-2xl shadow-black"
                    />
                </div>
            </div>
        </div>

        <h1 className="my-8 sm:my-10 md:my-12">Skills</h1>
        <div className="skills flex flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center mx-4 sm:mx-6 md:mx-10 lg:mx-18 my-5 py-4 sm:py-6 md:py-8">
            <div className="skillItem">
                <div className="w-14 h-14 sm:w-16 sm:h-16 text-white flex items-center justify-center rounded-full text-lg sm:text-xl font-bold">
                    <FaHtml5 className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <p className="text-xs sm:text-sm mt-2">Html5</p>
            </div>
            <div className="skillItem">
                <div className="w-14 h-14 sm:w-16 sm:h-16 text-white flex items-center justify-center rounded-full text-lg sm:text-xl font-bold">
                    <BiLogoTailwindCss className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <p className="text-xs sm:text-sm mt-2">Tailwindcss</p>
            </div>
            <div className="skillItem">
                <div className="w-14 h-14 sm:w-16 sm:h-16 text-white flex items-center justify-center rounded-full text-lg sm:text-xl font-bold">
                    <FaBootstrap className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <p className="text-xs sm:text-sm mt-2">Bootstrap</p>
            </div>
            <div className="skillItem">
                <div className="w-14 h-14 sm:w-16 sm:h-16 text-white flex items-center justify-center rounded-full text-lg sm:text-xl font-bold">
                    <BiLogoJavascript className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <p className="text-xs sm:text-sm mt-2">Javascript</p>
            </div>
            <div className="skillItem">
                <div className="w-14 h-14 sm:w-16 sm:h-16 text-white flex items-center justify-center rounded-full text-lg sm:text-xl font-bold">
                    <FaReact className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <p className="text-xs sm:text-sm mt-2">React</p>
            </div>
            <div className="skillItem">
                <div className="w-14 h-14 sm:w-16 sm:h-16 text-white flex items-center justify-center rounded-full text-lg sm:text-xl font-bold">
                    <FaFlutter className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <p className="text-xs sm:text-sm mt-2">Flutter</p>
            </div>
            <div className="skillItem">
                <div className="w-14 h-14 sm:w-16 sm:h-16 text-white flex items-center justify-center rounded-full text-lg sm:text-xl font-bold">
                    <DiDart className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <p className="text-xs sm:text-sm mt-2">Dart</p>
            </div>
            <div className="skillItem">
                <div className="w-14 h-14 sm:w-16 sm:h-16 text-white flex items-center justify-center rounded-full text-lg sm:text-xl font-bold">
                    <FaJava className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <p className="text-xs sm:text-sm mt-2">Java</p>
            </div>
            <div className="skillItem">
                <div className="w-14 h-14 sm:w-16 sm:h-16 text-white flex items-center justify-center rounded-full text-lg sm:text-xl font-bold">
                    <SiApachecordova className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <p className="text-xs sm:text-sm mt-2">Cordova</p>
            </div>
            <div className="skillItem">
                <div className="w-14 h-14 sm:w-16 sm:h-16 text-white flex items-center justify-center rounded-full text-lg sm:text-xl font-bold">
                    <FaAndroid className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <p className="text-xs sm:text-sm mt-2">Android</p>
            </div>
            <div className="skillItem">
                <div className="w-14 h-14 sm:w-16 sm:h-16 text-white flex items-center justify-center rounded-full text-lg sm:text-xl font-bold">
                    <BiLogoFirebase className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <p className="text-xs sm:text-sm mt-2">Firebase</p>
            </div>
            <div className="skillItem">
                <div className="w-14 h-14 sm:w-16 sm:h-16 text-white flex items-center justify-center rounded-full text-lg sm:text-xl font-bold">
                    <PiFileSql className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <p className="text-xs sm:text-sm mt-2">SQL</p>
            </div>
            <div className="skillItem">
                <div className="w-14 h-14 sm:w-16 sm:h-16 text-white flex items-center justify-center rounded-full text-lg sm:text-xl font-bold">
                    <SiSqlite className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <p className="text-xs sm:text-sm mt-2">SQLite</p>
            </div>
            <div className="skillItem">
                <div className="w-14 h-14 sm:w-16 sm:h-16 text-white flex items-center justify-center rounded-full text-lg sm:text-xl font-bold">
                    <FaGithub className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <p className="text-xs sm:text-sm mt-2">Github</p>
            </div>
            <div className="skillItem">
                <div className="w-14 h-14 sm:w-16 sm:h-16 text-white flex items-center justify-center rounded-full text-lg sm:text-xl font-bold">
                    <DiDocker className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <p className="text-xs sm:text-sm mt-2">Docker</p>
            </div>
            <div className="skillItem">
                <div className="w-14 h-14 sm:w-16 sm:h-16 text-white flex items-center justify-center rounded-full text-lg sm:text-xl font-bold">
                    <DiPython className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <p className="text-xs sm:text-sm mt-2">Python</p>
            </div>
        </div>

        <div className="experience opacity-75 bg-black mx-4 sm:mx-6 md:mx-10 lg:m-20 rounded-lg p-6 sm:p-8 md:p-10">
            <h1 className="">Experience</h1>
            <div className="flex flex-col sm:flex-row mt-6 sm:mt-10 justify-between gap-4 w-full">
                <p className="text-lg sm:text-xl md:text-2xl"><strong>Procit BV</strong></p>
                <p className="text-base sm:text-sm md:text-sm">(July-2022 to Oct-2025)</p>
            </div>
            <p className="text-left text-xs sm:text-sm mt-4">(Front-end developer) 3+ yrs</p>

            <div className="mx-0 sm:mx-4 md:mx-10 my-4 sm:my-5">
                {/* <ul className="list-disc list-inside space-y-2 text-justify leading-relaxed text-sm sm:text-base">
                    <li>Led the development of the company's flagship <strong>Checklist</strong> product — a digital inspection and maintenance platform for industries like manufacturing and oil & gas.</li>
                    <li>Built responsive user interfaces, integrated APIs, and optimized front-end performance to deliver a seamless user experience across web and Android platforms.</li>
                    <li>Occasionally worked with <strong>AngularJS</strong> and <strong>Java</strong> for feature enhancements.</li>
                    <li>Performed light database operations using <strong>SQLite</strong> and <strong>SQL Server Management</strong>, such as viewing logs and running basic queries.</li>
                    <li>Collaborated closely with project leaders in the <strong>Netherlands</strong> to deliver scalable and reliable solutions.</li>
                    <li>Trained and supported junior developers in understanding and working with the Checklist product</li>
                    <li>Assisted global clients including <strong>Moduresource</strong>, <strong>Aboma</strong>, <strong>MRUSA</strong>, <strong>Impala</strong>, and others.</li>
                </ul> */}
                <ul className="list-disc list-inside space-y-2 text-justify leading-relaxed text-sm sm:text-base">
    <li>⚡ <strong>Led development</strong> of the hybrid web & mobile <strong>Checklist</strong> platform for international clients (<strong>Moduresource</strong>, <strong>Aboma</strong>, <strong>MRUSA</strong>, <strong>Impala</strong>).</li>
    <li>💻 <strong>Front-end</strong> development using <strong>Vanilla JavaScript</strong> and hybrid mobile app with <strong>Java (Cordova)</strong>.</li>
    <li>🔒 Implemented <strong>secure authentication</strong> using <strong>Auth0</strong> and <strong>OIDC</strong>.</li>
    <li>🚀 <strong>Performance optimization</strong> — reduced checklist load & save times for faster workflow.</li>
    <li>📦 Added <strong>offline capability</strong> using <strong>IndexedDB</strong> and implemented client-side <strong>image compression</strong>.</li>
    <li>🎨 Developed <strong>UI features</strong> such as sticky headers, accordion-style menus, and custom checklist components.</li>
    <li>🧑‍🏫 <strong>Mentored junior developers</strong>, improving code quality and team productivity.</li>
    <li>🛠 <strong>Issue resolution</strong> — analyzed logs and fixed client-reported bugs.</li>
    <li>🤝 <strong>Client collaboration</strong> — translated requirements into functional, production-ready solutions.</li>
</ul>
            </div>
        </div>

        <div className="">
            <ProjectList />
        </div>
    </>
}
