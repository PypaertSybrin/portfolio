import Skill from "@/models/Skill";

const SkillCard = ({ skill }: { skill: Skill }) => {
    return (
        <div className="p-4 bg-neutral-800">
            <div className="px-32 py-20 bg-neutral-950"></div>
            <p className="py-2 text-xl border-b-2">{skill.name}</p>
            <div className="items-start">
                <p className="py-2">Strengths</p>
                <ul className="flex flex-wrap gap-2 items-center">
                    {skill.strength.map((s) => (
                        <div key={s.name} className="flex items-center gap-2 bg-neutral-900 p-2 rounded-lg">
                            <s.icon />
                            <span className="text-sm">{s.name}</span>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default SkillCard;
