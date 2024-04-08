import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";

const Header = () => {
    return (
        <div id="/" className="h-screen flex items-center justify-around gap-32">
            <div className="p-10">
                <p className="text-xl py-2">Sybrin Pypaert</p>
                <h1 className="text-5xl font-bold text-primary-neutral py-2">Junior Full Stack Developer</h1>
                <p className="text-xl py-2">I&apos;m currently studying <Link className="text-primary-light underline" href={'https://mct.be/'} target="_blank">MCT</Link> or Multiemedia &amp; Creative Technology at <Link className="text-primary-light underline" href={'https://www.howest.be/nl'} target="_blank">Howest</Link>.</p>
                <div className="flex items-center gap-8 pt-10 pb-2">
                    <button className="bg-primary-neutral text-neutral-900 py-4 px-8 rounded-lg">Contact me</button>
                    <p><SiLinkedin className="w-8 h-8"/></p>
                    <p><SiGithub className="w-8 h-8"/></p>
                </div>
            </div>
            <div className="px-10">
                <div className="px-40 py-40 bg-neutral-800 rounded-br-[150px] rounded-tl-[150px]">Profile picture</div>
            </div>
        </div>
    )
}
export default Header;