import { SkillData } from "@/data/SkillsData";
import SkillCard from "@/components/cards/SkillCard";

const Skills = () => {
    return (
        <div className="py-12 px-4">
            <h1 className="text-4xl font-semibold mb-12 text-center">Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {SkillData.map((skill) => (
                    <div key={skill.name} className="basis-2/6">
                        <SkillCard skill={skill} />
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Skills;