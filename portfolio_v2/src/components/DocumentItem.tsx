import { MouseEventHandler, useState } from "react"

interface DocumentItemProps {
    title: string,
    onClick: MouseEventHandler<HTMLDivElement>,
    icon: string
}

export default function DocumentItem({title, onClick, icon = 'https://i.imgur.com/rnLPbUQ.png'}: DocumentItemProps) {
    
    const [isClicked, setIsClicked] = useState(false)
    
    

    return (
        <div 
            className="w-24 flex flex-col items-center" 
            style={{backgroundColor: isClicked ? '#afafaf' : 'transparent'}}
            onClick={(e) => {
                isClicked && onClick(e)
                setIsClicked(!isClicked)
            }}>
            <img 
                className="w-fit aspect-square"
                src={icon} />
            <h3>{title}</h3>
        </div>
    )
}