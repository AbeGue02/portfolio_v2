import { useNavigate } from "react-router-dom";
import DocumentItem from "../components/DocumentItem";
import projects from "../data/projects";
import WindowContext from "../context";
import { useContext, useEffect } from "react";

export default function ProjectList() {
    
    const { windowState, setWindowState } = useContext(WindowContext)!
    let navigate = useNavigate()

    useEffect(() => {
        setWindowState({
            ...windowState,
            title: 'Projects',
            isVisible: true
        })
    }, [])    
    
    return (
        <div className="container p-4 flex flex-row flex-wrap justify-start items-start">
            {
                projects.map((project) => (
                    <DocumentItem
                        title={project.title}
                        onClick={() => {
                            navigate(`/work/${project.id}`)
                        }}
                        icon={project.icon ? project.icon : "https://i.imgur.com/rnLPbUQ.png"}/>
                ))
            }
        </div>
    )
}