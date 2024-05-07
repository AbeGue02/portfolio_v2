import { useNavigate } from "react-router-dom"
import DropdownItem from "./DropdownItem"
import { useContext } from "react"
import WindowContext from "../context"

interface DropdownProps {
    dropdownFor: String
}

export default function Dropdown({dropdownFor}: DropdownProps) {

    const { setWindowState } = useContext(WindowContext)!
    
    let dropdownMenuContent

    let navigate = useNavigate()

    const handleNavigate = (path: string, title: string) => {
        setWindowState({
            title: title,
            isVisible: true
        })
        navigate(path)
    }

    switch (dropdownFor) {
        case 'About Me':
            dropdownMenuContent = (
                <>
                    <DropdownItem onClick={() => handleNavigate('/about/me', 'Who am I?')}>Who am I?</DropdownItem>
                    <DropdownItem onClick={() => handleNavigate('/about/earlylife', 'Early Life')}>Early Life</DropdownItem>
                </>
            )
            break
        case 'Work':
            dropdownMenuContent = (
                <>
                    <DropdownItem onClick={() => handleNavigate('/work/all', 'Projects')}>All Projects</DropdownItem>
                    <DropdownItem onClick={() => handleNavigate('/work/skills', 'Skills')}>Skills</DropdownItem>
                </>
            )
            break
        case 'Documents':
            dropdownMenuContent = (
                <>
                    {/* <DropdownItem>Web Developer Resume</DropdownItem>
                    <DropdownItem>Mobile App Dev Resume</DropdownItem> */}
                    <DropdownItem onClick={() => window.open('https://docs.google.com/document/d/1mMujTkn2RGJhWOUQtdi9FE5yXKU_3H_xnVHO-Jb1H9Y/edit?usp=sharing')}>Software Engineer Resume</DropdownItem>
                </>
            )
            break
        case 'Socials':
            dropdownMenuContent = (
                <>
                    <DropdownItem onClick={() => window.open('https://www.linkedin.com/in/abrahamdguerrero/')}>LinkedIn</DropdownItem>
                    <DropdownItem onClick={() => window.open('https://github.com/AbeGue02')}>Github</DropdownItem>
                </>
            )
            break
        case 'Contact Me':
            dropdownMenuContent = (
                <>
                    <DropdownItem onClick={() => window.open('https://calendly.com/abrahamgue02')}>Calendly</DropdownItem>
                    <DropdownItem onClick={() => window.open('mailto:abrahamgue02@gmail.com')}>Email</DropdownItem>
                </>
            )
            break
        

        
    }
    
    return (
        <div className="dropdownMenu">
            <ul>
                {
                    dropdownMenuContent
                }
            </ul>
        </div>
    )
}