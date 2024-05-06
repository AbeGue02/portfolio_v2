import { useContext, useEffect } from "react"
import WindowContext from "../context"
import linkedinLogo from "../assets/linkedin_pixel.png"

export default function Welcome() {
    
    const { windowState, setWindowState } = useContext(WindowContext)!

    useEffect(() => {
        setWindowState({
            ...windowState,
            isVisible: true,
            title: "Welcome"
        })
    }, [])
    
    return (
        <div className="container flex flex-col items-center p-4 vt323-regular">
            <h1 className="text-[3em] text-center md:text-start">Welcome to my Portfolio!</h1>
            <p className="text-xl text-center">
                Hi, I'm Abraham Guerrero, a software engineer deeply passionate about all things Computer Science. This webpage, built with React and styled using Tailwind CSS along with some custom CSS, offers a nod to the timeless MacOS aesthetic. Feel free to navigate the mock desktop, explore files, and use the top bar to hop between links and webpages. If you want to get in touch, simply hit the button below to shoot me an email. Let's connect!
            </p>
            <div className="flex flex-row max-h-20 justify-center items-center">
                <button 
                    className="flex flex-row w-fit p-2 items-center justify-center border-2 m-2 border-black max-w-fit text-2xl hover:bg-black hover:text-white"
                    onClick={() => window.open("mailto:abrahamgue02@gmail.com")}>Email</button>
                <img 
                    src={linkedinLogo}
                    className="aspect-square max-h-14 cursor-pointer"
                    onClick={() => window.open('https://www.linkedin.com/in/abrahamdguerrero/')}/>
            </div>
            <p className="text-xl text-center">
                This project was inspired by the Webflow project by <a href="https://webflow.com/@matthewpmunger" className="text-blue-500" target="_blank">Matthew P Munger</a>, called <a href="https://mattos-1.webflow.io/" className="text-blue-500" target="_blank">MattOS</a>
            </p>
        </div>
    )
}