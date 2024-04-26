const About = () => {
  return (
    <div className="py-16 px-4">
      <h1 className="text-4xl lg:text-5xl font-semibold mb-12 text-center">
        About me
      </h1>
      <div className="grid lg:grid-cols-2 place-items-center">
        <div className="p-8">
          <div className="mx-auto lg:w-96 lg:h-96 w-48 h-48 bg-neutral-900 rounded-br-[64px] rounded-tl-[64px] lg:rounded-br-[150px] lg:rounded-tl-[150px]"></div>
        </div>
        <div className="p-8 flex flex-col gap-4 lg:w-full">
          <div className="bg-secundary-900 p-4 rounded-xl">
            <h2 className="text-2xl font-semibold">Eager to learn</h2>
            <p>mqsj ljfjqfk jkqlsmfjlqmsj flm qjsf jqs fjmk qmlsj flkmjqqsj fmlkj qslmfjlqmsj flmqj s </p>
          </div>
          <div className="bg-secundary-900 p-4 rounded-xl">
            <h1 className="text-2xl font-semibold">Eager to learn</h1>
            <p>
              mqsj ljfjqfk jkqlsmfjlqmsj flm qjsf jqs fjmk qmlsj flkmjq lfkjq
              mfjlqm jflmkjqs lmfjq sfqslj flqmjfk kqslmfj mj{' '}
            </p>
          </div>
          <div className="bg-secundary-900 p-4 rounded-xl">
            <h1 className="text-2xl font-semibold">Eager to learn</h1>
            <p>
              mqsj ljfjqfk jkqlsmfjlqmsj flm qjsf jqs fjmk qmlsj flkmjq lfkjq
              mfjlqm jflmkjqs lmfjq sfqslj flqmjfk kqslmfj mj{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About
