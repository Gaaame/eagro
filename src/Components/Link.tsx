import { Link } from "react-router-dom";

const governmentLinks = [
  {
    logo: "/images/ati.png",
    title: "Agricultural Training Institute",
    description:
      "For programs and training to promote the development of rural areas.",
    url: "#",
  },
  {
    logo: "/images/bafs.png",
    title: "Bureau of Agriculture and Fisheries Standards",
    description:
      "For quality standards regarding agricultural and fishery products, structure, and machinery.",
    url: "#",
  },
  {
    logo: "/images/da-ilocos.png",
    title: "Department of Agriculture - Ilocos",
    description: "For economic development through agriculture from Region 1.",
    url: "#",
  },
  {
    logo: "/images/dost.png",
    title: "Department of Science and Technology",
    description:
      "Get information on the latest technology and techniques within Region 1.",
    url: "#",
  },
  {
    logo: "/images/pcaf.png",
    title: "Philippine Council for Agriculture and Fisheries",
    description:
      "For participatory processes in the sector of agriculture and fisheries.",
    url: "#",
  },
  {
    logo: "/images/tesda.png",
    title: "Technical Education and Skills Development Authority",
    description:
      "Read more about technical and skills development programs in the Philippines.",
    url: "#",
  },
  {
    logo: "/images/acpc.png",
    title: "Agricultural Credit Policy Council",
    description:
      "Find out the agricultural credit policies that are being implemented.",
    url: "#",
  },
  {
    logo: "/images/bar.png",
    title: "Bureau of Agricultural Research",
    description: "Find out the new research available in the farming sector.",
    url: "#",
  },
];

function GovLinks() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#071A11] font-sans text-[#F1F5EE]">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#00A94F]/10 blur-3xl" />

        <div className="absolute right-[-10rem] top-[25%] h-[30rem] w-[30rem] rounded-full bg-[#8BCF63]/10 blur-3xl" />

        <div className="absolute bottom-[-12rem] left-[35%] h-[28rem] w-[28rem] rounded-full bg-[#00A94F]/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Hero */}
      <section className="relative px-6 pb-16 pt-28 sm:px-8 lg:px-12 lg:pb-20 lg:pt-36">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            {/* Eyebrow */}
            <div className="animate-fade-up mb-5 inline-flex items-center gap-2 rounded-full border border-[#8BCF63]/20 bg-[#8BCF63]/10 px-4 py-2 text-sm font-medium text-[#A9DB8A]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#8BCF63]" />
              Government Resources
            </div>

            {/* Heading */}
            <h1 className="animate-fade-up animation-delay-100 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Useful{" "}
              <span className="bg-gradient-to-r from-[#35B85F] via-[#8BCF63] to-[#B5E890] bg-clip-text text-transparent">
                Government Links
              </span>
            </h1>

            <p className="animate-fade-up animation-delay-200 mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
              Connect with government agencies and organizations that provide
              agricultural programs, services, research, training, technology,
              and financial resources.
            </p>
          </div>
        </div>
      </section>

      {/* Government Links */}
      <section className="px-6 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {governmentLinks.map((item, index) => (
              <a
                key={item.title}
                href={item.url}
                target={item.url !== "#" ? "_blank" : undefined}
                rel={item.url !== "#" ? "noopener noreferrer" : undefined}
                className="animate-fade-up group relative flex min-h-[330px] flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.035] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#8BCF63]/30 hover:bg-white/[0.06] hover:shadow-[0_25px_70px_rgba(0,169,79,0.12)]"
                style={{
                  animationDelay: `${index * 80}ms`,
                }}
              >
                {/* Glow */}
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#8BCF63]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Number */}
                <span className="absolute right-6 top-6 text-xs font-semibold tracking-[0.2em] text-white/20">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Logo */}
                <div className="relative flex h-28 items-center justify-center">
                  <div className="absolute h-24 w-24 rounded-full bg-[#8BCF63]/5 blur-2xl transition-all duration-500 group-hover:bg-[#8BCF63]/10" />

                  <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-white p-3 shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:-rotate-2">
                    <img
                      src={item.logo}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative mt-7 flex flex-1 flex-col text-center">
                  <h2 className="text-base font-bold uppercase leading-6 text-white transition-colors duration-300 group-hover:text-[#8BCF63]">
                    {item.title}
                  </h2>

                  <p className="mt-4 text-sm leading-6 text-white/55">
                    {item.description}
                  </p>

                  {/* Visit */}
                  <div className="mt-auto pt-6">
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8BCF63]">
                      Visit Website
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-7 right-7 h-px origin-left scale-x-0 bg-gradient-to-r from-[#35B85F] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#8BCF63]/20 bg-gradient-to-br from-[#0B351F] via-[#092417] to-[#071A11] px-8 py-14 text-center sm:px-12 lg:py-20">
            {/* Glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#35B85F]/10 blur-3xl" />

            <div className="relative">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8BCF63]">
                E-Agro Resources
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Everything farmers need,
                <br className="hidden sm:block" /> connected in one place.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
                Explore our programs and discover how E-Agro can help connect
                farmers with opportunities and agricultural resources.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  to="/program"
                  className="group rounded-full bg-[#00A94F] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#00A94F]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0BBD5D] hover:shadow-[#00A94F]/30"
                >
                  Explore Our Program
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  to="/contact"
                  className="rounded-full border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#8BCF63]/30 hover:bg-white/[0.08]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(24px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fade-up 0.7s ease-out both;
        }

        .animation-delay-100 {
          animation-delay: 100ms;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </main>
  );
}

export default GovLinks;
