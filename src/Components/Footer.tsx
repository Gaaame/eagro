function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#04110B]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          {/* Logo */}
          <div>
            <a
              href="#home"
              className="flex items-center gap-2 text-lg font-bold text-white"
            >
              <span className="text-[#8BCF63]">✦</span>
              E-Agro
            </a>

            <p className="mt-5 text-xs text-white/30">
              ©2026 E-AGRO. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-7 gap-y-3 text-xs text-white/45">
            <a href="#program" className="hover:text-white">
              Our program
            </a>

            <a href="#loan" className="hover:text-white">
              Loan
            </a>

            <a href="#research" className="hover:text-white">
              Research
            </a>

            <a href="#links" className="hover:text-white">
              Useful government links
            </a>

            <a href="#contact" className="hover:text-white">
              Contact us
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t border-white/5 pt-5">
          <p className="text-[10px] text-white/25">
            E-Agro Farmer's Assistance Program
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
