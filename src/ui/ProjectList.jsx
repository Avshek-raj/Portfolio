export const ProjectList = () => {
    const projects = [
        {
            title: "Nepflix",
            description: "Description for project one.",
            githubLink: "https://github.com/avshek-raj/nepflix",
            language: ["React", "JavaScript"],
            demoLink: "#"
        },
        {
            title: "Foodrush",
            description: "Description for project one.",
            githubLink: "#",
            language: ["React", "JavaScript"],
            demoLink: "#"
        },
        {
            title: "Foodrush",
            description: "Description for project one.",
            githubLink: "#",
            language: ["React", "JavaScript"],
            demoLink: "#"
        },
    ]
    return <>
        <div className="flex flex-row flex-wrap justify-center">
            <ul className="flex flex-row flex-wrap justify-center">
                {projects.map((project, index) => {
                    return (
                        <div key={index} className="mx-25 border p-4 my-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div key={index} className="border p-4 rounded-lg ">
                                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                                <p className="mb-4">{project.description}</p>
                            </div>
                            <div className="mb-2 justify-between flex gap-20">
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