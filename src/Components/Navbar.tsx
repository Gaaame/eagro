import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" bg-white text-slate-800">
      {/* Navbar */}
      <header className="border-b border-white/5 bg-[#061810]">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 text-lg font-bold text-white"
          >
            <span className="text-[#8BCF63]">✦</span>
            E-Agro
          </a>

          {/* Navigation */}
          <nav className="hidden items-center gap-7 md:flex">
            <a href="#home" className="text-xs font-medium text-white">
              Home
            </a>

            <a
              href="#program"
              className="text-xs text-white/55 transition hover:text-white"
            >
              Our program
            </a>

            <a
              href="#loan"
              className="text-xs text-white/55 transition hover:text-white"
            >
              Loan
            </a>

            <a
              href="#research"
              className="text-xs text-white/55 transition hover:text-white"
            >
              Research
            </a>

            <a
              href="#links"
              className="text-xs text-white/55 transition hover:text-white"
            >
              Useful government links
            </a>

            <Link
              to="/contact"
              className="text-xs text-white/55 transition hover:text-white"
            >
              Contact us
            </Link>
          </nav>

          {/* Actions */}
          <div className="hidden items-center gap-3 sm:flex">
            <button className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/70 transition hover:border-white/20 hover:text-white">
              Tagalog
            </button>

            <a
              href="#loan"
              className="rounded-full bg-[#F5B900] px-5 py-2.5 text-xs font-bold text-[#07150D] transition hover:bg-[#FFC928]"
            >
              Apply for a loan
            </a>
          </div>

          {/* Mobile button */}
          <button className="text-white md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}
export default Navbar;
