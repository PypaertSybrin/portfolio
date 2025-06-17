'use client'

import Skill from '@/models/Skill'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

const SkillCard = ({ skill }: { skill: Skill }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="sm:p-8 p-4 dark:bg-secundary-900 bg-neutral-300 h-full rounded-xl">
      <div className="w-min dark:bg-secundary-800 bg-secundary-50 p-6 sm:mb-12 mb-6 rounded-full text-primary-dark dark:text-primary-neutral">
        <skill.icon className="w-8 h-8" />
      </div>
      <p className="text-2xl mb-2 font-semibold">{skill.name}</p>

      <div className="items-start">
        <p className="py-2 dark:text-secundary-200 text-secundary-900">
          Strengths
        </p>
        <motion.ul
          ref={ref} // Use the ref here to monitor this specific element
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.3,
                duration: 0.5,
              },
            },
          }}
          className="flex flex-wrap gap-2 items-center"
        >
          {skill.strength.map(s => (
            <motion.li
              key={s.name}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
              }}
              className="flex items-center gap-2 dark:bg-secundary-950 bg-secundary-50 p-2 rounded-lg"
            >
              <s.icon color={s.color} />
              <span className="text-sm">{s.name}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  )
}

export default SkillCard
