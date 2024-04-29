import { Skill } from "../interfaces";

interface SkillItemProps {
    skill: Skill
}

export default function SkillItem({skill}: SkillItemProps) {
    return (
        <div className="flex flex-row w-fit p-1 items-center justify-center border-4 my-2 mr-2 border-black max-w-fit">
            {skill.icon && <img className="max-h-4 aspect-square mr-2" src={skill.icon}/>}
            <p className="text-nowrap">{skill.name}</p>
        </div>
    )
}