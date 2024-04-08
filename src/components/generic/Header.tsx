import Link from "next/link";

const Header = () => {
    return (
        <div id="/" className="h-screen flex items-center justify-around gap-32">
            <div className="px-10">
                <p className="text-xl py-2">Sybrin Pypaert</p>
                <h1 className="text-5xl font-bold text-primary py-2">Junior Full Stack Developer</h1>
                <p className="text-xl p-2">I&apos;m currently studying <Link className="text-primary underline" href={'https://mct.be/'} target="_blank">MCT</Link> or Multiemedia &amp; Creative Technology at <Link className="text-primary underline" href={'https://www.howest.be/nl'} target="_blank">Howest</Link>.</p>
            </div>
            <div className="px-10">
                <div className="px-40 py-40 bg-neutral-800">Profile picture</div>
            </div>
        </div>
    )
}
export default Header;