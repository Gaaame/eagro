import { Link } from "react-router-dom";

const benefits = [
  {
    icon: "⏱",
    title: "Fast Approval",
    description: "Get your application reviewed within 3–5 days.",
  },
  {
    icon: "₱",
    title: "Up to ₱100,000",
    description: "Access financing of up to ₱100,000 per hectare.",
  },
  {
    icon: "✓",
    title: "Simple Requirements",
    description: "A straightforward application with minimal requirements.",
  },
  {
    icon: "⌁",
    title: "Safe & Secure",
    description:
      "A simple and secure application process from start to finish.",
  },
];

const steps = [
  {
    number: "01",
    title: "Register",
    description:
      "Create your E-Agro account and provide the required information.",
  },
  {
    number: "02",
    title: "Get Approval",
    description:
      "Submit your application and let our team review your request.",
  },
  {
    number: "03",
    title: "Receive Funding",
    description:
      "Once approved, your loan will be released directly to your account.",
  },
  {
    number: "04",
    title: "Make Repayment",
    description:
      "Manage your repayments easily while continuing to grow your business.",
  },
];

const growthBenefits = [
  {
    icon: "◎",
    title: "Reach Your Market",
    description:
      "Connect your products and services with our growing network of farmers.",
  },
  {
    icon: "⚙",
    title: "Easy-to-Use Systems",
    description:
      "Manage orders, inventory, shipping, and operations through simple tools.",
  },
  {
    icon: "₱",
    title: "Secure Finances",
    description:
      "Receive funds directly through your registered payment account.",
  },
  {
    icon: "▣",
    title: "Simplified Inventory",
    description:
      "Keep track of inventory, shipments, and returns in one place.",
  },
  {
    icon: "↗",
    title: "Manage Anywhere",
    description:
      "Access your business and respond to customers wherever you are.",
  },
  {
    icon: "!",
    title: "Dedicated Support",
    description: "Get help from our support team whenever you need assistance.",
  },
];

function Loan() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#071A11] font-sans text-[#F1F5EE]">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-[-20%] top-[5%] h-[600px] w-[600px] rounded-full bg-[#8BCF63]/[0.06] blur-[120px]" />

        <div className="absolute right-[-20%] top-[30%] h-[600px] w-[600px] rounded-full bg-[#F5B900]/[0.035] blur-[120px]" />

        <div className="absolute bottom-[-10%] left-[20%] h-[500px] w-[500px] rounded-full bg-[#8BCF63]/[0.035] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 sm:pb-32 sm:pt-28 lg:px-8 lg:pb-36 lg:pt-32">
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            {/* Content */}

            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#8BCF63]/20 bg-[#8BCF63]/[0.08] px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8BCF63]" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8BCF63]">
                  E-Agro Loan Program
                </span>
              </div>

              <h1 className="max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[76px]">
                Grow your farm.
                <br />
                <span className="text-[#8BCF63]">Fund your future.</span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
                Access simple and convenient financing designed to help farmers
                grow their operations, purchase supplies, and build a better
                future.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#F5B900] px-6 py-3.5 text-sm font-bold text-[#07150D] transition duration-300 hover:-translate-y-1 hover:bg-[#FFC928] hover:shadow-xl hover:shadow-yellow-500/10"
                >
                  Apply for a loan
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <a
                  href="#process"
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.025] px-6 py-3.5 text-sm font-medium text-white/80 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
                >
                  How it works
                </a>
              </div>

              {/* Stats */}

              <div className="mt-12 flex flex-wrap gap-8">
                <div>
                  <p className="text-2xl font-bold tracking-tight text-[#8BCF63]">
                    ₱100K
                  </p>

                  <p className="mt-1 text-xs text-white/35">
                    Maximum per hectare
                  </p>
                </div>

                <div className="h-10 w-px bg-white/10" />

                <div>
                  <p className="text-2xl font-bold tracking-tight text-[#8BCF63]">
                    3–5
                  </p>

                  <p className="mt-1 text-xs text-white/35">Days approval</p>
                </div>

                <div className="h-10 w-px bg-white/10" />

                <div>
                  <p className="text-2xl font-bold tracking-tight text-[#8BCF63]">
                    Simple
                  </p>

                  <p className="mt-1 text-xs text-white/35">
                    Application process
                  </p>
                </div>
              </div>
            </div>

            {/* Hero Image */}

            <div className="relative">
              {/* Decorative frame */}

              <div className="absolute -inset-3 rounded-[34px] border border-[#8BCF63]/10" />

              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-[#8BCF63]/10" />

              <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#10251A] shadow-2xl shadow-black/20">
                <div className="group relative h-[480px] sm:h-[540px]">
                  <img
                    src="https://images.pexels.com/photos/5174197/pexels-photo-5174197.jpeg"
                    alt="Farmer working in a field"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A11] via-transparent to-[#071A11]/10" />

                  {/* Floating card */}

                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-[#10271A]/85 p-5 shadow-2xl backdrop-blur-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.16em] text-white/35">
                          Loan assistance
                        </p>

                        <p className="mt-1 text-base font-semibold">
                          Built for farmers
                        </p>
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#8BCF63]/20 bg-[#8BCF63]/10 text-[#8BCF63]">
                        ✓
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ====================================================== */}

      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8BCF63]">
                Why choose E-Agro
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Financing made simple.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-white/40">
              Everything you need to access financing without unnecessary
              complexity.
            </p>
          </div>

          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#8BCF63]/25 hover:bg-[#8BCF63]/[0.04]"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#8BCF63]/[0.04] blur-2xl transition group-hover:bg-[#8BCF63]/[0.1]" />

                <div className="relative">
                  <span className="text-xs font-bold text-[#8BCF63]/40">
                    0{index + 1}
                  </span>

                  <div className="mt-6 flex h-11 w-11 items-center justify-center rounded-xl border border-[#8BCF63]/15 bg-[#8BCF63]/[0.08] text-[#8BCF63]">
                    {benefit.icon}
                  </div>

                  <h3 className="mt-6 text-sm font-bold">{benefit.title}</h3>

                  <p className="mt-2 text-xs leading-6 text-white/40">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section id="process" className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8BCF63]">
              Simple process
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              From application to funding.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/40">
              We've designed the application process to be straightforward,
              transparent, and easy to understand.
            </p>
          </div>

          <div className="relative mt-16">
            {/* Connecting line */}

            <div className="absolute left-[7%] right-[7%] top-8 hidden h-px bg-gradient-to-r from-transparent via-[#8BCF63]/20 to-transparent lg:block" />

            <div className="grid gap-8 lg:grid-cols-4">
              {steps.map((step) => (
                <div key={step.number} className="relative">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#8BCF63]/20 bg-[#0B2116] shadow-lg shadow-black/10">
                    <span className="text-sm font-bold text-[#8BCF63]">
                      {step.number}
                    </span>
                  </div>

                  <div className="mt-7">
                    <h3 className="text-base font-bold">{step.title}</h3>

                    <p className="mt-3 text-xs leading-6 text-white/40">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GROW WITH E-AGRO
      ====================================================== */}

      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8BCF63]">
              More than financing
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Grow with E-Agro.
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/40">
              More tools, services, and support to help your agricultural
              business move forward.
            </p>
          </div>

          <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {growthBenefits.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#8BCF63]/20 hover:bg-[#8BCF63]/[0.035]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#8BCF63]/15 bg-[#8BCF63]/[0.07] text-[#8BCF63]">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-sm font-bold">{item.title}</h3>

                <p className="mt-3 text-xs leading-6 text-white/40">
                  {item.description}
                </p>

                <div className="mt-6 h-px w-6 bg-[#8BCF63]/40 transition-all duration-300 group-hover:w-12" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="relative px-6 py-24 lg:px-8 lg:py-32">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-[#8BCF63]/15 bg-gradient-to-br from-[#103A22] to-[#0B2416]">
          {/* Glow */}

          <div className="absolute left-1/2 top-[-100px] h-80 w-80 -translate-x-1/2 rounded-full bg-[#8BCF63]/10 blur-[100px]" />

          <div className="relative px-7 py-16 text-center sm:px-12 sm:py-20 lg:px-20">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-[#8BCF63]/20 bg-[#8BCF63]/10 text-[#8BCF63]">
              ✦
            </div>

            <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8BCF63]">
              Ready to get started?
            </p>

            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Give your farm the support it needs to grow.
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/40">
              Start your application today and take the next step toward growing
              your agricultural business.
            </p>

            <Link
              to="/contact"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#F5B900] px-7 py-3.5 text-sm font-bold text-[#07150D] transition duration-300 hover:-translate-y-1 hover:bg-[#FFC928] hover:shadow-xl hover:shadow-yellow-500/10"
            >
              Apply for a loan
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Language Button */}

      <button className="fixed bottom-5 right-5 z-50 rounded-full border border-white/10 bg-[#0D291A]/90 px-5 py-3 text-[10px] font-bold tracking-wide text-white shadow-xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#8BCF63]/30 hover:bg-[#123520]">
        TAGALOG
      </button>
    </main>
  );
}

export default Loan;
