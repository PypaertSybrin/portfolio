import { SkillData } from '@/data/SkillsData'
import SkillCard from '@/components/cards/SkillCard'

const Skills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {SkillData.map(skill => (
        <div key={skill.name} className="basis-2/6">
          <SkillCard skill={skill} />
        </div>
      ))}
    </div>
  )
}
export default Skills
