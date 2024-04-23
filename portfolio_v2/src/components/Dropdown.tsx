import DropdownItem from "./DropdownItem"

interface DropdownProps {
    dropdownFor: String
}

export default function Dropdown({dropdownFor}: DropdownProps) {

    let dropdownMenuContent

    switch (dropdownFor) {
        case 'About Me':
            dropdownMenuContent = (
                <>
                    <DropdownItem>Who am I?</DropdownItem>
                    <DropdownItem>Early Life</DropdownItem>
                    <DropdownItem>Hobbies</DropdownItem>
                </>
            )
            break
        case 'Work':
            dropdownMenuContent = (
                <>
                    <DropdownItem>All Projects</DropdownItem>
                    <DropdownItem>Skills</DropdownItem>
                </>
            )
            break
        case 'Documents':
            dropdownMenuContent = (
                <>
                    <DropdownItem>Web Developer Resume</DropdownItem>
                    <DropdownItem>Mobile App Dev Resume</DropdownItem>
                </>
            )
            break
        case 'Socials':
            dropdownMenuContent = (
                <>
                    <DropdownItem onClick={() => {window.open('https://www.linkedin.com/in/abrahamdguerrero/')}}>LinkedIn</DropdownItem>
                    <DropdownItem onClick={() => window.open('https://github.com/AbeGue02')}>Github</DropdownItem>
                </>
            )
            break
        case 'Contact Me':
            dropdownMenuContent = (
                <>
                    <DropdownItem>Calendly</DropdownItem>
                    <DropdownItem>Email</DropdownItem>
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