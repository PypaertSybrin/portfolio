import Skill from '@/models/Skill'

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <div className='sm:p-8 p-4 dark:bg-secundary-900 bg-neutral-300 h-full rounded-xl'>
      <div className='w-min dark:bg-secundary-800 bg-secundary-50 p-6 sm:mb-12 mb-6 rounded-full text-primary-dark dark:text-primary-neutral'>
          <skill.icon
            className='w-8 h-8'
          />
      </div>
      <p className='text-2xl mb-2 font-semibold'>{skill.name}</p>
      <div className='items-start'>
        <p className='py-2'>Strengths</p>
        <ul className='flex flex-wrap gap-2 items-center'>
          {skill.strength.map(s => (
            <div
              key={s.name}
              className='flex items-center gap-2 dark:bg-secundary-950 bg-secundary-50 p-2 rounded-lg'
            >
              <s.icon color={s.color}/>
              <span className='text-sm'>{s.name}</span>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default SkillCard
