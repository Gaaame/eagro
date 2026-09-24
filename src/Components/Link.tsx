import { Link } from "react-router-dom";

const governmentLinks = [
  {
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.marriageandbeyond.com%2Fwp-content%2Fuploads%2F2019%2F06%2Fati.jpg&f=1&nofb=1&ipt=3f2174b3d1d9bba1b4c1fd308740a7a9b569d006c568f3c3306d9c843f86dd94",
    title: "Agricultural Training Institute",
    description:
      "For programs and training to promote the development of rural areas.",
    url: "https://ati2.da.gov.ph/ati-main/content/",
  },
  {
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D229107139260744&f=1&nofb=1&ipt=82ff63c0b272dfc8ca80d71b0e3f7c8b964803059dadadb917dc33d84e2f3a98",
    title: "Bureau of Agriculture and Fisheries Standards",
    description:
      "For quality standards regarding agricultural and fishery products, structure, and machinery.",
    url: "https://bafs.da.gov.ph/",
  },
  {
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100069353553423&f=1&nofb=1&ipt=a4dab160193da9a1e73f1e6ce13b2be309ddfb91179070d420113623ecdeb2a5",
    title: "Department of Agriculture - Ilocos",
    description: "For economic development through agriculture from Region 1.",
    url: "https://ilocos.da.gov.ph/",
  },
  {
    logo: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.panaynews.net%2Fwp-content%2Fuploads%2F2019%2F05%2FDepartment-of-Science-and-Technology.png&f=1&nofb=1&ipt=7c70d46f862eceb21e4569970a634406f0b03c60052e6eb95fb4b4885a9bca5e",
    title: "Department of Science and Technology",
    description:
      "Get information on the latest technology and techniques within Region 1.",
    url: "https://www.dost.gov.ph/",
  },
  {
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.p7Sd-hO4z7QmMMXa5HHLVwHaHa%3Fr%3D0%26pid%3DApi&f=1&ipt=c0f7f53e5fc3e758fe48586a14cb7684d85f80c03715a834260429deb090fb17",
    title: "Philippine Council for Agriculture and Fisheries",
    description:
      "For participatory processes in the sector of agriculture and fisheries.",
    url: "#",
  },
  {
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftesdaonlineprogram.com%2Fwp-content%2Fuploads%2F2023%2F08%2FTESDA-LOGO-1.jpg&f=1&nofb=1&ipt=0caaf1d6782139e1ed11a0b2d362555395499f43bf150ff5d9167ad1ec9027b2",
    title: "Technical Education and Skills Development Authority",
    description:
      "Read more about technical and skills development programs in the Philippines.",
    url: "https://www.tesda.gov.ph/",
  },
  {
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2022%2F9%2FKZ%2FPY%2FSU%2F154377177%2Fagricultural-credit-policy-council-tender-information-500x500.jpg&f=1&nofb=1&ipt=119434a2cab12bb9569b0a40d3eaf620d5159547ffeb3687b0bab4830714cac8",
    title: "Agricultural Credit Policy Council",
    description:
      "Find out the agricultural credit policies that are being implemented.",
    url: "https://acpc.gov.ph/",
  },
  {
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fformsphilippines.com%2Fagencylogo%2F59.png&f=1&nofb=1&ipt=5c0a688ae0b3b9beadb5fb952a130c0f929bd63aa4ab7ec5d184ca6111c646ad",
    title: "Bureau of Agricultural Research",
    description: "Find out the new research available in the farming sector.",
    url: "https://www.bar.gov.ph/",
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
