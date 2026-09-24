function About() {
  return (
    <div className="font-sans">
      <section
        id="about"
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
              top-1/2
              h-72
              w-72
              -translate-x-1/2
              -translate-y-1/2
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
            top-[18%]
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
            top-[30%]
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
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div
              className="
                animate-entrance-up
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
              <span className="text-sm text-[#8BCF63]">
                {" "}
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

              <span className="text-xs font-medium text-[#8BCF63]">
                About E-Agro
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                animate-entrance-up
                entrance-delay-200
                text-4xl
                font-bold
                leading-tight
                tracking-[-0.04em]
                text-[#F1F5EE]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Growing a stronger
              <br />
              <span className="text-[#8BCF63]">agricultural community.</span>
            </h1>

            {/* Intro */}
            <p
              className="
                animate-entrance-up
                entrance-delay-300
                mx-auto
                mt-6
                max-w-2xl
                text-sm
                leading-7
                text-white/55
                sm:text-base
              "
            >
              E-Agro connects farmers, suppliers, and agricultural workers
              through accessible financial assistance, farm resources, and
              opportunities designed to support sustainable growth.
            </p>
          </div>

          {/* Story Section */}
          <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
            {/* Image */}
            <div
              className="
                animate-entrance-left
                entrance-delay-400
                group
                relative
                mx-auto
                w-full
                max-w-lg
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
              <div className="relative h-[420px] overflow-hidden rounded-[30px]">
                <img
                  src="https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg"
                  alt="Farmer working in an agricultural field"
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

                {/* Image Gradient */}
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
                    rounded-xl
                    border
                    border-white/10
                    bg-[#10271A]/90
                    px-4
                    py-3
                    backdrop-blur-md
                  "
                >
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#8BCF63]">
                    Our Purpose
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    Supporting those who feed communities.
                  </p>
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div>
              <p
                className="
                  animate-entrance-right
                  entrance-delay-400
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#F5B900]
                "
              >
                Who We Are
              </p>

              <h2
                className="
                  animate-entrance-right
                  entrance-delay-500
                  mt-3
                  text-3xl
                  font-bold
                  leading-tight
                  tracking-[-0.03em]
                  text-[#F1F5EE]
                  sm:text-4xl
                "
              >
                Making agricultural
                <br />
                growth more accessible.
              </h2>

              <p
                className="
                  animate-entrance-right
                  entrance-delay-600
                  mt-6
                  text-sm
                  leading-7
                  text-white/55
                  sm:text-base
                "
              >
                E-Agro was created to help bridge the gaps that farmers and
                agricultural communities face when accessing the resources they
                need to grow.
              </p>

              <p
                className="
                  animate-entrance-right
                  entrance-delay-700
                  mt-4
                  text-sm
                  leading-7
                  text-white/55
                  sm:text-base
                "
              >
                By bringing financial support, agricultural supplies, machinery,
                and services together, E-Agro aims to make it easier for people
                across the agricultural sector to connect, collaborate, and move
                forward.
              </p>

              {/* Highlight */}
              <div
                className="
                  animate-entrance-up
                  entrance-delay-800
                  mt-7
                  flex
                  items-start
                  gap-3
                  rounded-2xl
                  border
                  border-[#8BCF63]/15
                  bg-[#8BCF63]/5
                  p-4
                  transition-all
                  duration-300
                  hover:border-[#8BCF63]/30
                  hover:bg-[#8BCF63]/10
                "
              >
                <div
                  className="
                    mt-0.5
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#8BCF63]/15
                    text-sm
                    text-[#8BCF63]
                  "
                >
                  ✓
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    One community, shared growth.
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/45">
                    Connecting the people, resources, and opportunities that
                    help agriculture move forward.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mt-24">
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
                What We Believe
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
                Built around the people
                <br />
                behind agriculture.
              </h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {/* Value 1 */}
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
                  hover:border-[#8BCF63]/30
                  hover:bg-[#10271A]
                "
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#8BCF63]/10
                    text-lg
                    text-[#8BCF63]
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:bg-[#8BCF63]/20
                  "
                >
                  🌱
                </div>

                <h3 className="mt-5 text-base font-semibold text-white">
                  Sustainable Growth
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/45">
                  Supporting solutions that help agricultural communities build
                  stronger and more sustainable futures.
                </p>
              </div>

              {/* Value 2 */}
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
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#F5B900]/10
                    text-lg
                    text-[#F5B900]
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:bg-[#F5B900]/20
                  "
                >
                  🤝
                </div>

                <h3 className="mt-5 text-base font-semibold text-white">
                  Stronger Connections
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/45">
                  Creating meaningful connections between farmers, suppliers,
                  laborers, and other agricultural partners.
                </p>
              </div>

              {/* Value 3 */}
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
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#8BCF63]/10
                    text-lg
                    text-[#8BCF63]
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:bg-[#8BCF63]/20
                  "
                >
                  🌾
                </div>

                <h3 className="mt-5 text-base font-semibold text-white">
                  Empowering Farmers
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/45">
                  Helping farmers access the tools, resources, and support they
                  need to turn opportunities into progress.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Statement */}
          <div
            className="
              animate-entrance-up
              entrance-delay-600
              mt-20
              rounded-[28px]
              border
              border-[#8BCF63]/15
              bg-gradient-to-r
              from-[#0B2116]
              to-[#10271A]
              px-6
              py-10
              text-center
              sm:px-12
            "
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8BCF63]">
              Our Vision
            </p>

            <h2
              className="
                mx-auto
                mt-3
                max-w-3xl
                text-2xl
                font-bold
                leading-tight
                tracking-[-0.03em]
                text-[#F1F5EE]
                sm:text-3xl
              "
            >
              A future where every agricultural community has the opportunity to
              grow.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/45">
              From the field to the market, E-Agro brings people and
              opportunities together to create a more connected agricultural
              ecosystem.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
