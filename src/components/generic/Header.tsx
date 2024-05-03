import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";

const Header = () => {
    return (
        <div className="h-screen flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between lg:gap-16">
            <div className="p-8 text-center lg:text-left text-xl">
                <p className="py-1 lg:py-2">Sybrin Pypaert</p>
                <h1 className="lg:text-5xl font-bold text-primary-dark dark:text-primary-neutral py-1 lg:py-2">Junior Full Stack Developer</h1>
                <p className="py-1 lg:py-2">I&apos;m currently studying <Link className="text-primary-dark dark:text-primary-neutral underline" href={'https://mct.be/'} target="_blank">MCT</Link> or Multimedia &amp; Creative Technology at <Link className="text-primary-dark dark:text-primary-neutral underline" href={'https://www.howest.be/nl'} target="_blank">Howest</Link> in Belgium.</p>
                <div className="flex items-center gap-4 lg:gap-8 pt-4 lg:pt-10 pb-2 justify-center lg:justify-start">
                    <Link href="mailto:sybrinpypaert@gmail.com" className="bg-primary-dark dark:bg-primary-neutral text-white dark:text-secundary-950 py-2 px-4 md:py-4 md:px-8 rounded-lg" >Contact me</Link>
                    <Link href="https://www.linkedin.com/in/sybrin-pypaert-a2413b298/" target="_blank"><SiLinkedin className="w-8 h-8"/></Link>
                    <Link href="https://github.com/PypaertSybrin" target="_blank"><SiGithub className="w-8 h-8"/></Link>
                </div>
            </div>
            <div className="p-8">
                <div className="lg:w-96 lg:h-96 w-48 h-48 bg-secundary-200 dark:bg-neutral-900 rounded-br-[64px] rounded-tl-[64px] lg:rounded-br-[150px] lg:rounded-tl-[150px]"></div>
            </div>
        </div>
    )
}
export default Header;