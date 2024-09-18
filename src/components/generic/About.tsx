'use client'
import { CldImage } from 'next-cloudinary'

const About = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 place-items-center lg:place-items-start">
      <div className="self-center">
        <div className="lg:w-96 lg:h-96 sm:w-60 sm:h-60 w-48 h-48 bg-neutral-300 dark:bg-neutral-900 rounded-br-[64px] rounded-tl-[64px] lg:rounded-br-[150px] lg:rounded-tl-[150px] flex">
          <CldImage
            src="/docs/About"
            alt="Profile picture"
            width={2224}
            height={2830}
            className="object-contain rounded-br-[64px] rounded-tl-[64px] lg:rounded-br-[150px] lg:rounded-tl-[150px]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:w-full">
        <div className="dark:bg-secundary-900 bg-neutral-300 p-4 rounded-xl">
          <h2 className="text-2xl font-semibold text-primary-dark dark:text-primary-neutral">
            Eager to learn
          </h2>
          <p className='text-sm sm:text-base'>
            I love learning new things especially when it comes to technology
            and programming. I am always looking for new challenges and ways to
            improve my skills.
          </p>
        </div>
        <div className="dark:bg-secundary-900 bg-neutral-300 p-4 rounded-xl">
          <h2 className="text-2xl font-semibold text-primary-dark dark:text-primary-neutral">
            Collaborative
          </h2>
          <p className='text-sm sm:text-base'>
            I am a team player and I love working with others because I can
            learn a lot from them and they from me.
          </p>
        </div>
        <div className="dark:bg-secundary-900 bg-neutral-300 p-4 rounded-xl">
          <h2 className="text-2xl font-semibold text-primary-dark dark:text-primary-neutral">
            Sports
          </h2>
          <p className='text-sm sm:text-base'>
            I love doing sports and keeping myself fit and healthy. I&apos;ve
            played football for most of my life, but now I often go for a run to
            stay fit.
          </p>
        </div>
      </div>
    </div>
  )
}
export default About
