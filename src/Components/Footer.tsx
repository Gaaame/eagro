function Footer() {
  return (
    <footer className="relative bg-[#075c2e] px-6 py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center">
        {/* Facebook */}
        <a
          href="#"
          className="mb-4 flex h-6 w-6 items-center justify-center rounded bg-white text-sm font-bold text-[#075c2e]"
        >
          f
        </a>

        <p className="text-[10px] font-bold">
          ©2026 E-AGRO. All Rights Reserved
        </p>
      </div>

      {/* Language */}
      <button className="absolute bottom-5 right-6 rounded-full bg-[#00a94f] px-5 py-2 text-xs font-bold">
        TAGALOG
      </button>
    </footer>
  );
}
export default Footer;
