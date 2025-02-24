import React from 'react'

export const Projects = (props) => {
    var { projects } = props

    return (
        <>
            <div className="project-div" >
                {projects.map((project, index) => {
                    return (
                        <div key={index} className="project-card" data-aos="flip-left" data-aos-duration="1100" data-aos-delay="20">
                            <img src={project.img} alt={project.title} />
                            <div className="project-content">
                                <h5>{project.title}</h5>
                                <div className="project-tools">
                                    {project.tools.map((tool, index) => {
                                        return (
                                            <span key={index}>{tool}</span>
                                        )
                                    })}
                                </div>
                                <div className="project-desc">
                                    <p>{project.desc}</p>
                                </div>

                            </div>
                            <div className="project-links">
                                {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-link"></i></a>}
                                <a href={project.github} target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
