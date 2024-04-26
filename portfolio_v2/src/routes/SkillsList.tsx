import DocumentItem from "../components/DocumentItem";
import { allSkills } from "../data/skills";

export default function SkillsList() {
    return (
        <div className="container p-4 flex flex-row flex-wrap justify-start items-start">
            {
                allSkills.map((skill) => (
                    <DocumentItem
                        title={skill.name}
                        onClick={() => {}}
                        icon={skill.icon ? skill.icon : "https://i.imgur.com/rnLPbUQ.png"}/>
                ))
            }
        </div>
    )
}