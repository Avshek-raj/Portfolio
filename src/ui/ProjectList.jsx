export const ProjectList = () => {
    const projects = [
        {
            title: "AskDoks",
            description: "AskDocks is a document Q&A chatbot, where user can upload their documents and ask anything about the document content.",
            githubLink: "https://github.com/Avshek-raj/AskDocks",
            language: ["Python", "Streamlit", "LangChain"],
            demoLink: ""
        },
        {
            title: "RoboPlan AI ",
            description: "A web app that detects objects in room images, generate robot task plans from natural language instructions, and simulate execution with obstacle avoidance in a Canvas-based 2D environment.",
            githubLink: "https://github.com/Avshek-raj/RoboPlan-AI",
            language: ["React", "TypeScript", "Gemini AI"],
            demoLink: "https://roboplanai.vercel.app/"
        },
        {
            title: "RoboVision",
            description: "A web app that analyzes images from a robot’s perspective. Users can capture images via camera or upload files, and the app processes them to simulate robotic perception for autonomous indoor robots",
            githubLink: "https://github.com/Avshek-raj/RoboVision",
            language: ["React", "TypeScript", "Gemini AI"],
            demoLink: "https://robovision.vercel.app/"
        },
        {
            title: "NepAnime",
            description: "A anime streaming web app, where users can view all sorts or anime and watch them.",
            githubLink: "https://github.com/Avshek-raj/Nepanime",
            language: ["React, JavaScript"],
            demoLink: "https://nepanime.vercel.app/"
        },
        {
            title: "Nepflix",
            description: "A simple webapp, that shows latest movies with their trailers.",
            githubLink: "https://github.com/Avshek-raj/Nepflix",
            language: ["JavaScript"],
            demoLink: "https://nepflix.vercel.app/"
        },
        {
            title: "Foodrush",
            description: "An android app that allows users to order or sell their foods.",
            githubLink: "https://github.com/Avshek-raj/FoodRush",
            language: ["Flutter", "Dart", "Firebase"],
            demoLink: ""
        },
        {
            title: "Portfolio",
            description: "My personal portfolio website to showcase my projects and skills.",
            githubLink: "https://github.com/Avshek-raj/Portfolio",
            language: ["React", "JavaScript"],
            demoLink: ""
        },
        {
            title: "System management service",
            description: "A windows app made using Swing and MySQL for database to provide and get services.",
            githubLink: "https://github.com/Avshek-raj/System-Managent-Service",
            language: ["Java", "MySQL"],
            demoLink: ""
        },
        {
            title: "ImageChat",
            description: "A windows app where users can chat with AI bot using images as input.",
            githubLink: "https://github.com/Avshek-raj/ImageChat",
            language: ["Java", "Room"],
            demoLink: ""
        },
        {
            title: "BuyNsell",
            description: "A webapp where users can buy and sell goods.",
            githubLink: "https://github.com/Avshek-raj/BuyNsell",
            language: ["JavaScript"],
            demoLink: "https://avshek-raj.github.io/BuyNsell/#"
        },
    ]
    return <>
        <div className="flex flex-col w-full py-8 px-4 sm:px-6 md:px-10 lg:px-20">
            <h1 className="w-full mb-8 sm:mb-10">Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full">
                {projects.map((project, index) => {
                    return (
                        <div key={index} className="bg-white/10 hover:scale-105 border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                            <div className="bg-white/20 border p-4 rounded-lg hover:bg-white/40 transition-colors duration-300 cursor-pointer mb-4 flex-1">
                                <h2 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h2>
                                <p className="text-xs sm:text-sm">{project.description.length > 135 ? project.description.substring(0, 135) + "..." : project.description}</p>
                            </div>
                            <div className="flex flex-col gap-3 sm:gap-2">
                                <div className="language-section flex flex-row flex-wrap gap-2">
                                    {project.language.map((lang, langIndex) => (
                                        <span key={langIndex} className="w-auto block border text-xs px-2 py-1 rounded-sm">{lang}</span>
                                    ))}
                                </div>
                                <div className="action-button flex flex-row gap-2">
                                    {project.demoLink ? 
                                    <a href={project.demoLink || ""} target="_blank" rel="noopener noreferrer" className="flex-1">
                                        <button className="w-full my-2 text-xs sm:text-sm h-8 px-2 flex items-center rounded-sm justify-center hover:bg-red-600">
                                            Demo
                                        </button>
                                    </a>
                                    : ""}
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={project.demoLink ? "flex-1" : "w-full"}>
                                        <button className="w-full my-2 text-xs sm:text-sm h-8 px-2 flex items-center rounded-sm justify-center hover:bg-red-600">
                                            Github
                                        </button>
                                    </a>
                                </div>

                            </div>
                        </div>
                    )

                })}
            </div>
        </div>
    </>
}