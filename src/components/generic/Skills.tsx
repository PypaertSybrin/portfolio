import { SkillData } from "@/data/SkillsData";
import SkillCard from "@/components/cards/SkillCard";

const Skills = () => {
    return (
        <div className="py-12 text-center">
            <h1 className="text-4xl font-semibold mb-12">Skills</h1>
            <div className="flex flex-wrap justify-between">
                {SkillData.map((skill) => (
                    <div key={skill.name} className="">
                        <SkillCard skill={skill} />
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Skills;