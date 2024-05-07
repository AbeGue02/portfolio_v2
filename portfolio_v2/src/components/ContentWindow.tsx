import { useContext } from "react"
import WindowContext from "../context"
import { Route, Routes, useNavigate } from "react-router-dom"
import AboutMe from "../routes/AboutMe"
import EarlyLife from "../routes/EarlyLife"
import Hobbies from "../routes/Hobbies"
import ProjectList from "../routes/ProjectList"
import SkillsList from "../routes/SkillsList"
import ProjectDetails from "../routes/ProjectDetails"
import Welcome from "../routes/Welcome"

export default function ContentWindow() {
    
    const { windowState, setWindowState } = useContext(WindowContext)!
    
    return (
        <div className="contentWindow">
            <div className="contentWindowHeader">
                <h4 className="navItem">{windowState.title}</h4>
                <button 
                    className="closeWindowButton"
                    onClick={() => {
                        setWindowState({
                            ...windowState,
                            isVisible: false
                        })
                    }}/>
            </div>
            <main className="overflow-scroll">
                <Routes>
                    <Route path="/" element={<Welcome/>}/>
                    <Route path='/about'/>
                    <Route path='/about/me' element={<AboutMe/>}/>
                    <Route path='/about/earlylife' element={<EarlyLife/>}/>
                    <Route path='/about/hobbies' element={<Hobbies/>}/>
                    <Route path='/work/all' element={<ProjectList/>}/>
                    <Route path='/work/:projectId' element={<ProjectDetails/>}/>
                    <Route path='/work/skills' element={<SkillsList/>}/>
                </Routes>
            </main>
        </div>
    )
}