function App() {
  return (
    <div className="font-sans">
      <section id="home" className="relative overflow-hidden bg-[#061810]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Left Content */}
            <div>
              {/* Label */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2">
                <span className="text-sm text-[#8BCF63]">✦</span>

                <span className="text-xs font-medium text-[#8BCF63]">
                  Farmer's Assistance Program
                </span>
              </div>

              {/* Heading */}
              <h1 className="max-w-xl text-5xl font-bold leading-[1.02] tracking-[-0.04em] text-[#F1F5EE] sm:text-6xl lg:text-7xl">
                Grow together,
                <br />
                from the field to
                <br />
                the <span className="text-[#8BCF63]">market.</span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-lg text-sm leading-6 text-white/55 sm:text-base">
                E-Agro is a one-stop shop that helps farmers, suppliers, and
                laborers work toward mutual growth and a better future.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#loan"
                  className="rounded-full bg-[#F5B900] px-6 py-3 text-sm font-semibold text-[#07150D] transition hover:bg-[#FFC928]"
                >
                  Apply for a loan
                </a>

                <a
                  href="#program"
                  className="rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Learn more
                </a>
              </div>

              {/* Features */}
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                <div className="flex items-center gap-2 text-xs text-white/65">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#8BCF63] text-[10px] text-[#8BCF63]">
                    ✓
                  </span>
                  Low-interest loans
                </div>

                <div className="flex items-center gap-2 text-xs text-white/65">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#8BCF63] text-[10px] text-[#8BCF63]">
                    ✓
                  </span>
                  Farm supplies and tools
                </div>

                <div className="flex items-center gap-2 text-xs text-white/65">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#8BCF63] text-[10px] text-[#8BCF63]">
                    ✓
                  </span>
                  Machinery and services
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative mx-auto w-full max-w-md">
              {/* Decorative border */}
              <div className="absolute -bottom-2 -right-2 h-full w-full rounded-[30px] border border-[#8BCF63]/70" />

              {/* Image */}
              <div className="relative h-[460px] overflow-hidden rounded-[30px]">
                <img
                  src="https://images.pexels.com/photos/5174197/pexels-photo-5174197.jpeg"
                  alt="E-Agro agricultural field"
                  className="h-full w-full object-cover"
                />

                {/* Image gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Floating Options */}
              <div className="absolute bottom-5 -left-8 w-64 overflow-hidden rounded-2xl border border-white/10 bg-[#10271A]/95 shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/15 text-[#8BCF63]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4a4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3M4 9a5 5 0 0 1 8 4a5 5 0 0 1-8-4m1 12h14"
                        ></path>
                      </svg>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-white">
                        I'm a farmer
                      </p>

                      <p className="text-[10px] text-white">
                        Loans, supplies, machinery
                      </p>
                    </div>
                  </div>

                  <span className="text-white/40">›</span>
                </div>

                <div className="flex items-center justify-between px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500/10 text-[#F5B900]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 16.008V7.99a1.98 1.98 0 0 0-1-1.717l-7-4.008a2.02 2.02 0 0 0-2 0L4 6.273c-.619.355-1 1.01-1 1.718v8.018c0 .709.381 1.363 1 1.717l7 4.008a2.02 2.02 0 0 0 2 0l7-4.008c.619-.355 1-1.01 1-1.718M12 22V12m0 0l8.73-5.04m-17.46 0L12 12"
                        ></path>
                      </svg>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-white">
                        I'm a supplier
                      </p>

                      <p className="text-[10px] text-white/40">
                        Connect with farmers
                      </p>
                    </div>
                  </div>

                  <span className="text-white/40">›</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
