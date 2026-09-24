import { useState } from "react";
import { Link } from "react-router-dom";

const navOptions = [
  { label: "Our program", path: "/program" },
  { label: "About Us", path: "/about" },
  { label: "Government links", path: "/links" },
  { label: "For Farmers", path: "/farmer" },
  { label: "For Suppliers", path: "/supplier" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="bg-white text-slate-800">
      <header className="border-b border-white/5 bg-[#061810]">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2 text-lg font-bold text-white"
          >
            <span className="text-[#8BCF63]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4a4 4 0 0 0-4 4c0 2 0 3 1 5a5 5 0 0 1-1 3M4 9a5 5 0 0 1 8 4a5 5 0 0 1-8-4m1 12h14"
                />
              </svg>
            </span>
            E-Agro
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 md:flex">
            {navOptions.map((option) => (
              <Link
                key={option.label}
                to={option.path}
                className="text-sm text-white/55 transition hover:text-white"
              >
                {option.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 sm:flex">
            <Link
              to="/contact"
              className="rounded-full bg-[#F5B900] px-5 py-2.5 text-xs font-bold text-[#07150D] transition hover:bg-[#FFC928]"
            >
              Apply for a loan
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-white/20 hover:bg-white/5 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden border-t border-white/5 bg-[#061810] transition-all duration-300 md:hidden ${
            menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {navOptions.map((option) => (
              <Link
                key={option.label}
                to={option.path}
                onClick={closeMenu}
                className="border-b border-white/5 py-4 text-sm text-white/60 transition hover:text-white"
              >
                {option.label}
              </Link>
            ))}

            {/* Mobile CTA */}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-4 mb-2 rounded-full bg-[#F5B900] px-5 py-3 text-center text-sm font-bold text-[#07150D] transition hover:bg-[#FFC928]"
            >
              Apply for a loan
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
