import { useContext, useEffect } from "react"
import WindowContext from "../context"

export default function AboutMe() {
    
    const { windowState, setWindowState } = useContext(WindowContext)!
    
    useEffect(() => {
        setWindowState({
            ...windowState,
            isVisible: true,
            title: "Who am I?"
        })
    }, [])

    return (
        <div className="container flex flex-col p-4 vt323-regular">
            <h1 className="text-[3em]">Abraham Guerrero</h1>
            <div className="flex flex-col items-center md:flex-row">
                <img 
                    className="object-cover aspect-square size-1/3"
                    src="https://i.imgur.com/JBKdtT1.jpg"/>
                <p className="text-xl md:ml-4">
                    Hello! My name is Abraham Guerrero. As a Software Engineer, I'm driven by a passion for learning and mastering both traditional and cutting-edge technologies in Web, App, and Video Game Development. With a background in Vocal Performance, I excel in teamwork and collaboration, fostering environments where mental wellbeing is prioritized. My commitment to excellence ensures timely delivery of high-quality work, while my mentoring approach empowers team members to enhance their skills. With a focus on continual improvement and collective success, I am equipped to tackle any challenge in software engineering.
                </p>
            </div>
            <div className="flex flex-col items-start">
                <p className="mt-4 text-xl">
                    I discovered my passion for software engineering early in high school when I joined my first App Development class, where I developed Android Applications using 'code blocks' through the <a href="https://appinventor.mit.edu/" className="text-blue-500">MIT App Inventor</a>. Through that class, I developed a hunger for learning more, so I started learning Swift through one of the free books from Apple in the iBooks store. After graduation, I got a degree in Vocal Performance, only to realize that Computer Science was my true calling all along. I am now enrolled at the University of London for a BSc on Computer Science with a specialization in Mobile App Development 
                </p>
                <p className="mt-4 text-xl">
                    I love learning, and I thrive in spaces where I am being constantly challenged to learn something new and to apply it right away. If I sound like someone you would like to have in your team, let me know and let's arrange a meeting!
                </p>
            </div>
        </div>
    )
}