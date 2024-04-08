import Skill from '@/models/Skill'

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <div className='p-8 bg-secundary-800 h-full'>
      <div className='w-min bg-secundary-900 p-6 mb-12 rounded-full text-primary-neutral'>
          <skill.icon
            className='w-8 h-8'
          />
      </div>
      <p className='text-2xl mb-2'>{skill.name}</p>
      <div className='items-start'>
        <p className='py-2'>Strengths</p>
        <ul className='flex flex-wrap gap-2 items-center'>
          {skill.strength.map(s => (
            <div
              key={s.name}
              className='flex items-center gap-2 bg-secundary-900 p-2 rounded-lg'
            >
              <s.icon />
              <span className='text-sm'>{s.name}</span>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default SkillCard
