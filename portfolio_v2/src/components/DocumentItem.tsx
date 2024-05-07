import { MouseEventHandler } from "react"

interface DocumentItemProps {
    title: string,
    onClick: MouseEventHandler<HTMLDivElement>,
    icon?: string
}

export default function DocumentItem({title, onClick, icon = 'https://i.imgur.com/rnLPbUQ.png'}: DocumentItemProps) {    

    return (
        <div 
            className="w-24 flex flex-col items-center m-2" 
            onClick={onClick}>
            <img 
                className="w-fit aspect-square object-contain"
                src={icon} />
            <h3 className="vt323-regular text-xl text-center">{title}</h3>
        </div>
    )
}