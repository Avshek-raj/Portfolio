export const ProjectList = () => {
    const projects = [
        {
            title: "Nepflix",
            description: "A simple webapp, that shows latest movies with their trailers.",
            githubLink: "https://github.com/Avshek-raj/Nepflix",
            language: ["JavaScript"],
            demoLink: "https://avshek-raj.github.io/Nepflix/"
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
        <div className="flex flex-row flex-wrap justify-center">
            <h1>Projects</h1>
            <ul className="flex flex-row flex-wrap justify-center mt-15">
                {projects.map((project, index) => {
                    return (
                        <div key={index} className="w-120 bg-white/10 mx-25 hover:scale-101 border p-4 my-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div key={index} className="bg-white/20 border p-4 rounded-lg hover:scale-101 hover:bg-white/40 transition-colors duration-300 cursor-pointer">
                                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                                <p className="mb-4">{project.description}</p>
                            </div>
                            <div className="mb-2 justify-between flex ">
                                <div className="language-section flex flex-row">
                                    {project.language.map((lang, langIndex) => (
                                        <span key={langIndex} className="my-2 block border text-sm px-2 py-1 rounded-sm mr-2">{lang}</span>
                                    ))}
                                </div>
                                <div className="action-button flex flex-row ">
                                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="mr-2 ">
                                        <button className="my-2 text-sm h-7 px-3 flex items-center rounded-sm justify-center ">
                                            Demo
                                        </button>
                                    </a>
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="mr-2 ">
                                        <button className="my-2 text-sm h-7 px-3 flex items-center justify-center ">
                                            Github
                                        </button>
                                    </a>
                                </div>

                            </div>
                            
                        </div>
                    )

                })}
            </ul>

                    
        </div>
    </>
}