const Footer = () => {
  return (
    <footer className="p-4 text-right max-w-screen-xl mx-auto">
      <p className="text-neutral-400 text-sm">
        Made by{' '}
        <a className="hover:underline text-neutral-500" href="#">
          Sybrin Pypaert
        </a>{' '}
        - {new Date().getFullYear()} &copy;
      </p>
    </footer>
  )
}
export default Footer
