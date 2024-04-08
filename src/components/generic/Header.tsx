import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";

const Header = () => {
    return (
        <div className="h-screen flex flex-col-reverse lg:flex-row items-center lg:justify-around lg:gap-16">
            <div className="p-10">
                <p className="lg:text-xl py-2">Sybrin Pypaert</p>
                <h1 className="lg:text-5xl font-bold text-primary-neutral py-2">Junior Full Stack Developer</h1>
                <p className="lg:text-xl py-2">I&apos;m currently studying <Link className="text-primary-light underline" href={'https://mct.be/'} target="_blank">MCT</Link> or Multimedia &amp; Creative Technology at <Link className="text-primary-light underline" href={'https://www.howest.be/nl'} target="_blank">Howest</Link> in Belgium.</p>
                <div className="flex items-center gap-8 pt-10 pb-2">
                    <button className="bg-primary-neutral text-secundary-950 py-4 px-8 rounded-lg">Contact me</button>
                    <p><SiLinkedin className="w-8 h-8"/></p>
                    <p><SiGithub className="w-8 h-8"/></p>
                </div>
            </div>
            <div className="px-10">
                <div className="lg:w-96 lg:h-96 w-48 h-48 bg-neutral-900 rounded-br-[64px] rounded-tl-[64px] lg:rounded-br-[150px] lg:rounded-tl-[150px]"></div>
            </div>
        </div>
    )
}
export default Header;