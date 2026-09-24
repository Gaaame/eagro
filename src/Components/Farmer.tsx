function Farmer() {
  return (
    <div className="font-sans">
      <section
        id="farmer"
        className="relative min-h-screen overflow-hidden bg-[#061810]"
      >
        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="
              absolute
              -left-40
              top-20
              h-96
              w-96
              animate-pulse
              rounded-full
              bg-green-500/10
              blur-3xl
              [animation-duration:4s]
            "
          />

          <div
            className="
              absolute
              -right-40
              bottom-0
              h-[30rem]
              w-[30rem]
              animate-pulse
              rounded-full
              bg-[#8BCF63]/10
              blur-3xl
              [animation-duration:5s]
            "
          />

          <div
            className="
              absolute
              left-1/2
              top-1/3
              h-72
              w-72
              -translate-x-1/2
              animate-pulse
              rounded-full
              bg-green-500/5
              blur-3xl
              [animation-duration:6s]
            "
          />
        </div>

        {/* Decorative Dots */}
        <div
          className="
            pointer-events-none
            absolute
            left-[10%]
            top-[20%]
            h-2
            w-2
            animate-ping
            rounded-full
            bg-[#8BCF63]/40
            [animation-duration:3s]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[12%]
            top-[16%]
            h-1.5
            w-1.5
            animate-pulse
            rounded-full
            bg-[#F5B900]/60
            [animation-duration:2s]
          "
        />

        {/* Main Container */}
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:py-28">
          {/* ========================================
              HERO
          ======================================== */}

          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div
                className="
                  animate-entrance-left
                  entrance-delay-100
                  mb-6
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-green-500/20
                  bg-green-500/10
                  px-4
                  py-2
                "
              >
                <span className="text-sm text-[#8BCF63]">🌱</span>

                <span className="text-xs font-medium text-[#8BCF63]">
                  For Farmers
                </span>
              </div>

              {/* Heading */}
              <h1
                className="
                  animate-entrance-left
                  entrance-delay-200
                  max-w-xl
                  text-5xl
                  font-bold
                  leading-[1.02]
                  tracking-[-0.04em]
                  text-[#F1F5EE]
                  sm:text-6xl
                  lg:text-7xl
                "
              >
                Everything you need
                <br />
                to <span className="text-[#8BCF63]">grow.</span>
              </h1>

              {/* Description */}
              <p
                className="
                  animate-entrance-left
                  entrance-delay-300
                  mt-7
                  max-w-lg
                  text-sm
                  leading-6
                  text-white/55
                  sm:text-base
                "
              >
                E-Agro gives farmers access to financial assistance, farm
                supplies, machinery, and services that can help make every
                season more productive.
              </p>

              {/* Buttons */}
              <div
                className="
                  animate-entrance-up
                  entrance-delay-400
                  mt-8
                  flex
                  flex-wrap
                  gap-3
                "
              >
                <a
                  href="#services"
                  className="
                    group
                    rounded-full
                    bg-[#F5B900]
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-[#07150D]
                    shadow-lg
                    shadow-yellow-500/10
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#FFC928]
                    hover:shadow-xl
                    hover:shadow-yellow-500/20
                  "
                >
                  Explore assistance
                  <span
                    className="
                      ml-1
                      inline-block
                      transition-transform
                      duration-300
                      group-hover:translate-y-1
                    "
                  >
                    ↓
                  </span>
                </a>

                <a
                  href="#how-it-works"
                  className="
                    group
                    rounded-full
                    border
                    border-white/20
                    px-6
                    py-3
                    text-sm
                    font-medium
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#8BCF63]/50
                    hover:bg-white/10
                  "
                >
                  How it works
                  <span
                    className="
                      ml-1
                      inline-block
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </a>
              </div>

              {/* Quick Benefits */}
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                <div
                  className="
                    animate-entrance-up
                    entrance-delay-500
                    flex
                    items-center
                    gap-2
                    text-xs
                    text-white/60
                  "
                >
                  <span
                    className="
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#8BCF63]
                      text-[10px]
                      text-[#8BCF63]
                    "
                  >
                    ✓
                  </span>
                  Financial assistance
                </div>

                <div
                  className="
                    animate-entrance-up
                    entrance-delay-600
                    flex
                    items-center
                    gap-2
                    text-xs
                    text-white/60
                  "
                >
                  <span
                    className="
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#8BCF63]
                      text-[10px]
                      text-[#8BCF63]
                    "
                  >
                    ✓
                  </span>
                  Farm resources
                </div>

                <div
                  className="
                    animate-entrance-up
                    entrance-delay-700
                    flex
                    items-center
                    gap-2
                    text-xs
                    text-white/60
                  "
                >
                  <span
                    className="
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#8BCF63]
                      text-[10px]
                      text-[#8BCF63]
                    "
                  >
                    ✓
                  </span>
                  Equipment & services
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div
              className="
                animate-entrance-right
                entrance-delay-300
                group
                relative
                mx-auto
                w-full
                max-w-md
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  -inset-5
                  rounded-[36px]
                  bg-[#8BCF63]/5
                  opacity-0
                  blur-2xl
                  transition-all
                  duration-700
                  group-hover:opacity-100
                "
              />

              {/* Offset Border */}
              <div
                className="
                  absolute
                  -bottom-2
                  -right-2
                  h-full
                  w-full
                  rounded-[30px]
                  border
                  border-[#8BCF63]/60
                  transition-all
                  duration-500
                  group-hover:translate-x-1
                  group-hover:translate-y-1
                  group-hover:border-[#8BCF63]
                "
              />

              {/* Image */}
              <div className="relative h-[460px] overflow-hidden rounded-[30px]">
                <img
                  src="https://images.pexels.com/photos/2382904/pexels-photo-2382904.jpeg"
                  alt="Farmer working in a field"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-all
                    duration-1000
                    ease-out
                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#061810]/70
                    via-transparent
                    to-transparent
                  "
                />

                {/* Image Label */}
                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    right-5
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#10271A]/90
                    p-4
                    backdrop-blur-md
                  "
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#8BCF63]">
                    E-Agro for Farmers
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    Resources that help your farm move forward.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================
              SERVICES
          ======================================== */}

          <div id="services" className="mt-28">
            <div className="max-w-2xl">
              <p
                className="
                  animate-entrance-left
                  entrance-delay-100
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#F5B900]
                "
              >
                What You Can Access
              </p>

              <h2
                className="
                  animate-entrance-left
                  entrance-delay-200
                  mt-3
                  text-3xl
                  font-bold
                  tracking-[-0.03em]
                  text-[#F1F5EE]
                  sm:text-4xl
                "
              >
                Support for every stage
                <br />
                of your farm.
              </h2>

              <p
                className="
                  animate-entrance-left
                  entrance-delay-300
                  mt-4
                  text-sm
                  leading-6
                  text-white/45
                "
              >
                From preparing your land to getting your products to market,
                E-Agro brings different forms of agricultural support together
                in one place.
              </p>
            </div>

            {/* Service Cards */}
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {/* Loan */}
              <div
                className="
                  animate-entrance-up
                  entrance-delay-300
                  group
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#0B2116]/80
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#F5B900]/30
                  hover:bg-[#10271A]
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#F5B900]/10
                    text-xl
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:bg-[#F5B900]/20
                  "
                >
                  💰
                </div>

                <h3 className="mt-5 text-base font-semibold text-white">
                  Agricultural Loans
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/45">
                  Access financial assistance designed to help cover important
                  farming needs and production expenses.
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-medium text-[#F5B900]">
                  Learn about loans
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>

              {/* Supplies */}
              <div
                className="
                  animate-entrance-up
                  entrance-delay-400
                  group
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#0B2116]/80
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#8BCF63]/30
                  hover:bg-[#10271A]
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#8BCF63]/10
                    text-xl
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:bg-[#8BCF63]/20
                  "
                >
                  🌾
                </div>

                <h3 className="mt-5 text-base font-semibold text-white">
                  Farm Supplies
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/45">
                  Find agricultural supplies and tools that can support your
                  day-to-day farming operations.
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-medium text-[#8BCF63]">
                  Explore supplies
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>

              {/* Machinery */}
              <div
                className="
                  animate-entrance-up
                  entrance-delay-500
                  group
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#0B2116]/80
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#8BCF63]/30
                  hover:bg-[#10271A]
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-green-500/10
                    text-xl
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:bg-green-500/20
                  "
                >
                  🚜
                </div>

                <h3 className="mt-5 text-base font-semibold text-white">
                  Machinery & Services
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/45">
                  Connect with machinery and agricultural services that can make
                  farm work more efficient.
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-medium text-[#8BCF63]">
                  View services
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================
              HOW IT WORKS
          ======================================== */}

          <div id="how-it-works" className="mt-28">
            <div className="text-center">
              <p
                className="
                  animate-entrance-up
                  entrance-delay-100
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#F5B900]
                "
              >
                Simple Process
              </p>

              <h2
                className="
                  animate-entrance-up
                  entrance-delay-200
                  mt-3
                  text-3xl
                  font-bold
                  tracking-[-0.03em]
                  text-[#F1F5EE]
                  sm:text-4xl
                "
              >
                Get the support you need.
              </h2>
            </div>

            <div className="relative mt-12 grid gap-8 md:grid-cols-3">
              {/* Step 1 */}
              <div
                className="
                  animate-entrance-up
                  entrance-delay-300
                  text-center
                "
              >
                <div
                  className="
                    mx-auto
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#8BCF63]/30
                    bg-[#8BCF63]/10
                    text-sm
                    font-bold
                    text-[#8BCF63]
                  "
                >
                  01
                </div>

                <h3 className="mt-5 text-base font-semibold text-white">
                  Create your account
                </h3>

                <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-white/40">
                  Register and provide the information needed to get started
                  with E-Agro.
                </p>
              </div>

              {/* Step 2 */}
              <div
                className="
                  animate-entrance-up
                  entrance-delay-400
                  text-center
                "
              >
                <div
                  className="
                    mx-auto
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#F5B900]/30
                    bg-[#F5B900]/10
                    text-sm
                    font-bold
                    text-[#F5B900]
                  "
                >
                  02
                </div>

                <h3 className="mt-5 text-base font-semibold text-white">
                  Choose what you need
                </h3>

                <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-white/40">
                  Explore available loans, supplies, machinery, and agricultural
                  services.
                </p>
              </div>

              {/* Step 3 */}
              <div
                className="
                  animate-entrance-up
                  entrance-delay-500
                  text-center
                "
              >
                <div
                  className="
                    mx-auto
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#8BCF63]/30
                    bg-[#8BCF63]/10
                    text-sm
                    font-bold
                    text-[#8BCF63]
                  "
                >
                  03
                </div>

                <h3 className="mt-5 text-base font-semibold text-white">
                  Grow with E-Agro
                </h3>

                <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-white/40">
                  Access the support and resources that can help move your
                  farming journey forward.
                </p>
              </div>
            </div>
          </div>

          {/* ========================================
              CTA
          ======================================== */}

          <div
            className="
              animate-entrance-up
              entrance-delay-600
              mt-24
              rounded-[28px]
              border
              border-[#8BCF63]/15
              bg-gradient-to-r
              from-[#0B2116]
              to-[#10271A]
              px-6
              py-12
              text-center
              sm:px-12
            "
          >
            <div className="mx-auto max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8BCF63]">
                Ready to get started?
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-bold
                  tracking-[-0.03em]
                  text-[#F1F5EE]
                  sm:text-4xl
                "
              >
                Let's grow your farm together.
              </h2>

              <p className="mt-4 text-sm leading-6 text-white/45">
                Explore the support available through E-Agro and find the
                resources that fit your farming needs.
              </p>

              <button
                className="
                  mt-7
                  rounded-full
                  bg-[#F5B900]
                  px-7
                  py-3
                  text-sm
                  font-semibold
                  text-[#07150D]
                  shadow-lg
                  shadow-yellow-500/10
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#FFC928]
                  hover:shadow-xl
                  hover:shadow-yellow-500/20
                "
              >
                Get started →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Farmer;
