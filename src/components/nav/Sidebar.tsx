import Link from 'next/link'

const Sidebar = ({
  isOpen,
  toggle,
  active
}: {
  isOpen: boolean
  toggle: () => void,
  active: number
}) => {
  const activeClass = (index: number) => {
    if (active === index) {
      return 'text-primary-neutral'
    }
    return ''
  }
  return (
    <>
      <div
        className={`${
          isOpen ? 'opacity-100 top-0' : 'opacity-0 top-[-100%]'
        } fixed w-full h-full overflow-hidden justify-center dark:bg-secundary-950 bg-secundary-50 grid pt-[120px] left-0 z-10`}
      >
        <button className="absolute right-0 p-5" onClick={toggle}>
          {/* Close icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            />
          </svg>
        </button>

        <ul className="text-center text-xl">
          <li>
            <Link className={`${activeClass(0)}`} href="/" onClick={toggle}>
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link className={`${activeClass(1)}`} href="/#about" onClick={toggle}>
              <p>About me</p>
            </Link>
          </li>
          <li>
            <Link className={`${activeClass(2)}`} href="/#skills" onClick={toggle}>
              <p>Skills</p>
            </Link>
          </li>
          <li>
            <Link className={`${activeClass(3)}`} href="/#projects" onClick={toggle}>
              <p>Projects</p>
            </Link>
          </li>
          <li>
            <Link className={`${activeClass(4)}`} href="/#contact" onClick={toggle}>
              <p>Contact</p>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
