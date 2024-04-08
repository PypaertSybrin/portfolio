import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 p-4 dark:bg-secundary-950 bg-secundary-50">
      <div className="mx-auto max-w-screen-xl">
        <ul className="text-xl font-semibold flex gap-8 justify-end">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#skills">Skills</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#about">About me</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navigation;
