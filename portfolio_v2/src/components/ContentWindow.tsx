import { useContext } from "react"
import WindowContext from "../context"
import { Route, Routes, useNavigate } from "react-router-dom"
import AboutMe from "../routes/AboutMe"
import EarlyLife from "../routes/EarlyLife"
import Hobbies from "../routes/Hobbies"

export default function ContentWindow() {
    
    const { windowState, setWindowState } = useContext(WindowContext)!

    let navigate = useNavigate()
    
    return (
        <div className="contentWindow">
            <div className="contentWindowHeader">
                <h4 className="navItem">{windowState.title}</h4>
                <button 
                    className="closeWindowButton"
                    onClick={() => {
                        setWindowState({
                            title: '',
                            isVisible: false
                        })
                        navigate('/')
                    }}/>
            </div>
            <main className="overflow-scroll">
                <Routes>
                    <Route path="/"/>
                    <Route path='/about'/>
                    <Route path='/about/me' element={<AboutMe/>}/>
                    <Route path='/about/earlylife' element={<EarlyLife/>}/>
                    <Route path='/about/hobbies' element={<Hobbies/>}/>
                    <Route path='/work/all'/>
                    <Route path='/work/all/:projectId'/>
                    <Route path='/work/skills'/>
                </Routes>
            </main>
        </div>
    )
}