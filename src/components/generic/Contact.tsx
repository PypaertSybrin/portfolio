import Link from 'next/link'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { LuMail } from 'react-icons/lu'

const Contact = () => {
  return (
    <div className="text-center">
      <p className='mb-4'>Feel free to reach out to me</p>
      <div className="flex justify-center gap-6">
        <Link href="mailto:sybrin.pypaert@student.howest.be">
          <div className="dark:bg-secundary-900 bg-neutral-300 p-4 rounded-xl">
            <LuMail className="w-8 h-8" />
          </div>
        </Link>
        <Link
          href="https://www.linkedin.com/in/sybrin-pypaert/"
          target="_blank"
        >
          <div className="dark:bg-secundary-900 bg-neutral-300 p-4 rounded-xl">
            <SiLinkedin className="w-8 h-8" />
          </div>
        </Link>
        <Link href="https://github.com/PypaertSybrin" target="_blank">
          <div className="dark:bg-secundary-900 bg-neutral-300 p-4 rounded-xl">
            <SiGithub className="w-8 h-8" />
          </div>
        </Link>
      </div>
    </div>
  )
}
export default Contact
