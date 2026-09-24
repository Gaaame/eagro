import { Link } from "react-router-dom";

const programs = [
  {
    icon: "💰",
    title: "Loans with Low Interest Rates",
    description: [
      "Low interest (1.5% interest per month)",
      "Borrow per product up to the following amounts:",
    ],
    details: [
      "LABOR:",
      "Rice - up to PHP 42,000 per hectare",
      "Corn - up to PHP 16,800 per hectare",
      "Onion - up to PHP 80,000 per hectare",
      "With collateral/safekeep",
      "Harvest may be used to pay the loan",
      "Fast processing",
      "No hidden fees",
    ],
  },
  {
    icon: "🛠️",
    title: "Low Prices of Supplies and Tools",
    description: [
      "Buy tools and supplies at low prices online.",
      "Receive purchases at the nearest warehouse.",
    ],
  },
  {
    icon: "📈",
    title: "Fair Market Prices",
    description: [
      "Sell your produce at the best prices",
      "Know the latest market prices",
    ],
  },
  {
    icon: "🏭",
    title: "Post-Harvest Facilities",
    description: [
      "Places to sell your produce",
      "Warehouses to receive supplies and tools.",
      "Multi-Purpose Drying Pavement (MPDP)",
      "Milling Production Facility",
    ],
  },
  {
    icon: "🚜",
    title: "Mechanized Farming",
    description: [
      "Reduce labor cost",
      "Increase productivity with less effort",
      "Easy access to renting available machinery",
    ],
  },
  {
    icon: "🛡️",
    title: "Crop Insurance",
    description: [
      "Automatic insurance to protect your crops from losses due to natural disasters and more.",
    ],
  },
  {
    icon: "📚",
    title: "Modern Farming Knowledge",
    description: [
      "Continuous research and dissemination of information by the Municipal Agriculture of LGU of Bayambang.",
      "GEOGRAPHICAL INFORMATION SYSTEM (GIS) and SOIL ANALYSIS pinpoints every location in Bayambang, soil type, and top harvested crops.",
    ],
  },
  {
    icon: "🏥",
    title: "Life Insurance",
    description: [
      "The farmer's life is guaranteed.",
      "A program that provides financial assistance, called a Death Benefit, to the designated beneficiaries in the event of the insured person's death.",
    ],
  },
];

function Program() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#071A11] font-sans text-[#F1F5EE]">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#00A94F]/10 blur-3xl" />
        <div className="absolute right-[-10rem] top-[30%] h-[30rem] w-[30rem] rounded-full bg-[#8BCF63]/10 blur-3xl" />
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
            <div className="animate-fade-up mb-5 inline-flex items-center gap-2 rounded-full border border-[#8BCF63]/20 bg-[#8BCF63]/10 px-4 py-2 text-sm font-medium text-[#A9DB8A]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#8BCF63]" />
              Supporting Filipino Farmers
            </div>

            <h1 className="animate-fade-up animation-delay-100 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Our{" "}
              <span className="bg-gradient-to-r from-[#35B85F] via-[#8BCF63] to-[#B5E890] bg-clip-text text-transparent">
                Program
              </span>
            </h1>

            <p className="animate-fade-up animation-delay-200 mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
              E-Agro provides farmers with access to financing, affordable
              agricultural resources, market opportunities, technology, and
              knowledge designed to support sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Program Cards */}
      <section className="px-6 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program, index) => (
              <article
                key={program.title}
                className="animate-fade-up group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.035] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#8BCF63]/30 hover:bg-white/[0.06] hover:shadow-[0_20px_60px_rgba(0,169,79,0.12)]"
                style={{
                  animationDelay: `${index * 80}ms`,
                }}
              >
                {/* Card glow */}
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#8BCF63]/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Number */}
                <div className="absolute right-5 top-5 text-xs font-semibold tracking-widest text-white/20">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#8BCF63]/20 bg-[#8BCF63]/10 text-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  {program.icon}
                </div>

                <h2 className="relative max-w-[260px] text-lg font-bold leading-6 text-white">
                  {program.title}
                </h2>

                <div className="mt-5 space-y-2">
                  {program.description.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-sm leading-6 text-white/65"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8BCF63]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {program.details && (
                  <div className="mt-4 border-t border-white/[0.06] pt-4">
                    {program.details.map((item, detailIndex) => (
                      <div
                        key={`${item}-${detailIndex}`}
                        className={`text-xs leading-5 ${
                          detailIndex === 0
                            ? "mt-1 font-bold text-[#8BCF63]"
                            : "text-white/50"
                        }`}
                      >
                        {detailIndex !== 0 && !item.includes("up to") && (
                          <span className="mr-2 text-[#8BCF63]">•</span>
                        )}
                        {item}
                      </div>
                    ))}
                  </div>
                )}

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-gradient-to-r from-[#35B85F] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-6 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#8BCF63]/20 bg-gradient-to-br from-[#0B351F] via-[#092417] to-[#071A11] px-8 py-14 text-center sm:px-12 lg:py-20">
            {/* Decorative glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#35B85F]/10 blur-3xl" />

            <div className="relative">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8BCF63]">
                Growing together
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Building a stronger future
                <br className="hidden sm:block" /> for our farmers.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
                Explore the different opportunities and services available
                through the E-Agro program.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  to="/loan"
                  className="group rounded-full bg-[#00A94F] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#00A94F]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0BBD5D] hover:shadow-[#00A94F]/30"
                >
                  Explore Loan Program
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

      `}</style>
    </main>
  );
}

export default Program;
