import { useState } from "react"

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
        </div>
    )
}