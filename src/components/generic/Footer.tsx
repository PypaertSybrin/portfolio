const Footer = () => {
  return (
    <footer className="p-4 text-right max-w-screen-xl mx-auto">
      <p className="text-secundary-800 dark:text-secundary-300 text-sm">
        Made by{' '}
        <a className="hover:underline" href="#">
          Sybrin Pypaert
        </a>{' '}
        - {new Date().getFullYear()} &copy;
      </p>
    </footer>
  )
}
export default Footer
