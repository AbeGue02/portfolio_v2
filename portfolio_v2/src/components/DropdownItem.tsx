import { useState } from "react"

export default function DropdownItem({children, onClick}: any) {
    
    const [isHovering, setIsHovering] = useState<Boolean>(false)

    return (
        <li 
            onClick={onClick}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className={`${isHovering ? 'hoveredNavItem' : ''}`}>
                {children}
        </li>
    )
}