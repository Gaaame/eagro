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
                      ✦
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-white">
                        I'm a farmer
                      </p>

                      <p className="text-[10px] text-white/40">
                        Loans, supplies, machinery
                      </p>
                    </div>
                  </div>

                  <span className="text-white/40">›</span>
                </div>

                <div className="flex items-center justify-between px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500/10 text-[#F5B900]">
                      ◆
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
