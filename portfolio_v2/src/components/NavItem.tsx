import { useState } from "react"
import Dropdown from "./Dropdown"

interface NavItemProps {
    title: String
}

export default function NavItem({title}: NavItemProps) {

    const [isHovering, setIsHovering] = useState<Boolean>(false)

    return (
        <div 
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className={`${isHovering ? 'hoveredNavItem' : ''}`}>
                <h4 className={`navItem`}>{title}</h4>
            {isHovering && <Dropdown dropdownFor={title}/>}
        </div>
    )
}