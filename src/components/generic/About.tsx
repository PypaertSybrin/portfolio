const About = () => {
  return (
    <div className="py-16 px-4">
      <h1 className="text-4xl lg:text-5xl font-semibold mb-12 text-center">
        About me
      </h1>
      <div className="grid lg:grid-cols-2 place-items-center">
        <div className="p-8">
          <div className="mx-auto lg:w-96 lg:h-96 w-48 h-48 bg-neutral-300 dark:bg-neutral-900 rounded-br-[64px] rounded-tl-[64px] lg:rounded-br-[150px] lg:rounded-tl-[150px]"></div>
        </div>
        <div className="p-8 flex flex-col gap-4 lg:w-full">
          <div className="dark:bg-secundary-900 bg-neutral-300 p-4 rounded-xl">
            <h2 className="text-2xl font-semibold text-primary-dark dark:text-primary-neutral">Sports</h2>
            <p>I love doing sports and keeping myself fit and healthy. I&apos;ve played football for most of my life, but now I often go for a run to stay fit.</p>
          </div>
          <div className="dark:bg-secundary-900 bg-neutral-300 p-4 rounded-xl">
            <h2 className="text-2xl font-semibold text-primary-dark dark:text-primary-neutral">Eager to learn</h2>
            <p>I love learning new things especially when it comes to technology and programming. I am always looking for new challenges and ways to improve my skills.</p>
          </div>
          <div className="dark:bg-secundary-900 bg-neutral-300 p-4 rounded-xl">
            <h2 className="text-2xl font-semibold text-primary-dark dark:text-primary-neutral">Collaborative</h2>
            <p>I am a team player and I love working with others because I can learn a lot from them and they from me.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About
