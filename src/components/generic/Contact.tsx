import Link from 'next/link'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { LuMail } from 'react-icons/lu'

const Contact = () => {
  return (
    <div className="py-16 px-4 text-center">
      <h1 className="text-4xl lg:text-5xl font-semibold mb-4 text-center">
        Contact
      </h1>
      <p className='mb-4'>Feel free to reach out to me</p>
      <div className="flex justify-center gap-6">
        <Link href="mailto:sybrinpypaert@gmail.com">
          <div className="bg-secundary-900 p-4">
            <LuMail className="w-8 h-8" />
          </div>
        </Link>
        <Link
          href="https://www.linkedin.com/in/sybrin-pypaert-a2413b298/"
          target="_blank"
        >
          <div className="bg-secundary-900 p-4">
            <SiLinkedin className="w-8 h-8" />
          </div>
        </Link>
        <Link href="https://github.com/PypaertSybrin" target="_blank">
          <div className="bg-secundary-900 p-4">
            <SiGithub className="w-8 h-8" />
          </div>
        </Link>
      </div>
    </div>
  )
}
export default Contact
