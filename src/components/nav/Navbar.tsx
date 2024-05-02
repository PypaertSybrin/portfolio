import Link from 'next/link'

const Navbar = ({ isOpen, toggle, active }: { isOpen: boolean, toggle: () => void, active: number }) => {
  const activeClass = (index: number) => {
    if (active === index) {
      return 'text-primary-neutral'
    }
    return ''
  }
  return (
    <nav className={`${isOpen ? 'hidden' : ''} fixed top-0 left-0 right-0 p-2 md:p-4 dark:bg-secundary-950 bg-secundary-50 z-10`}>
      <div className="mx-auto max-w-screen-xl">
        <ul className="text-xl font-semibold gap-8 justify-end hidden md:flex">
          <li>
            <Link className={`${activeClass(0)}`} href="/">Home</Link>
          </li>
          <li>
            <Link className={`${activeClass(1)}`} href="/#about">About me</Link>
          </li>
          <li>
            <Link className={`${activeClass(2)}`} href="/#skills">Skills</Link>
          </li>
          <li>
            <Link className={`${activeClass(3)}`} href="/#projects">Projects</Link>
          </li>
          <li>
            <Link className={`${activeClass(4)}`} href="/#contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className='mx-auto max-w-screen-xl'>
        <button
          type="button"
          className="md:hidden flex justify-end w-full"
          onClick={toggle}
        >
          {/* Menu icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path fill="#fff" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
          </svg>
        </button>
      </div>
    </nav>
  )
}
export default Navbar
