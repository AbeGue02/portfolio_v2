import { useParams } from "react-router-dom"
import projects from "../data/projects"
import { useContext, useEffect, useState } from "react"
import WindowContext from "../context"
import { PictureModalInterface } from "../interfaces"
import PictureModal from "../components/PictureModal"
import SkillItem from "../components/SkillItem"

export default function ProjectDetails() {
    
    const { windowState, setWindowState } = useContext(WindowContext)!

    const { projectId } = useParams()

    const [modalState, setModalState] = useState<PictureModalInterface>({
        isShowing: false,
        pictureURL: '',
    })
    
    const currentProject = projects.find((project) => project.id.toString() === projectId)

    useEffect(() => {
        setWindowState({
            ...windowState,
            isVisible: true,
            title: currentProject?.title!
        })
    }, [currentProject])
 
    return (
        <div className="container flex flex-col p-4 vt323-regular">
            {
                modalState.isShowing && <PictureModal setModal={setModalState} pictureURL={modalState.pictureURL}/>
            }
            <div className="flex flex-row flex-wrap max-h-fit justify-between">
                <h1 className="text-5xl">{currentProject?.title}</h1>

                <div className="flex flex-row gap-1 items-center">
                    <img 
                        className="aspect-square h-10 cursor-pointer"
                        src={'https://static-00.iconduck.com/assets.00/github-icon-2048x2048-4uclrgic.png'}
                        onClick={() => window.open(currentProject?.githubLink)}/>
                    {
                        currentProject?.backendLink && (
                            <img 
                                className="aspect-square h-10 cursor-pointer"
                                src={'https://static-00.iconduck.com/assets.00/github-icon-2048x2048-4uclrgic.png'}
                                onClick={() => window.open(currentProject?.backendLink)}/>
                        )
                    }
                    {
                        currentProject?.deployedLink && (
                            <img 
                                className="aspect-square h-10 cursor-pointer"
                                src={'https://cdn1.iconfinder.com/data/icons/pixel-art-2/100/pixel_icons-43-512.png'}
                                onClick={() => window.open(currentProject?.deployedLink)}/>
                        )
                    }
                </div>
            </div>
            <div className="flex flex-row flex-wrap overflow-scroll">
                {
                    currentProject?.skills?.map((skill) => (
                        <SkillItem skill={skill}/>
                    ))
                }
            </div>
            <p className="text-2xl md:text-xl">{currentProject?.description}</p>

            <h1 className="text-5xl md:text-4xl">Screenshots</h1>
            <div className="flex flex-row items-center overflow-auto py-4">
                { 
                    currentProject?.pictures?.map((picture) => (
                        <img 
                            key={picture}
                            src={picture} 
                            className={`h-40 mx-2 cursor-pointer border-black border-2`}
                            onClick={() => {
                                setModalState({...modalState, isShowing: true, pictureURL: picture})
                            }}
                            />
                    ))
                }
            </div>
        </div>
    )
}