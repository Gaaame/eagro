function Navbar() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Navbar */}
      <header className="fixed top-0 z-50 w-full bg-white shadow-sm">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          {/* Logo */}
          <a
            href="#home"
            className="text-3xl font-bold tracking-tight text-[#286b4f]"
          >
            E-Ag<span className="text-[#55b957]">r</span>o
          </a>

          {/* Navigation */}
          <div className="hidden items-center gap-7 text-xs font-medium md:flex">
            <a href="#home" className="font-bold text-[#00a651]">
              HOME
            </a>

            <a href="#program" className="transition hover:text-[#00a651]">
              OUR PROGRAM
            </a>

            <a href="#loan" className="transition hover:text-[#00a651]">
              LOAN
            </a>

            <a href="#research" className="transition hover:text-[#00a651]">
              RESEARCH
            </a>

            <a href="#links" className="transition hover:text-[#00a651]">
              USEFUL GOV LINK
            </a>

            <a href="#contact" className="transition hover:text-[#00a651]">
              CONTACT US
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="rounded-md p-2 md:hidden">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </header>
    </div>
  );
}
export default Navbar;
