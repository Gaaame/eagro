function Participation() {
  return (
    <section id="participation" className="bg-[#061810] py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#8BCF63]">
              Get involved
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Two ways to take part
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/50">
            Whether you grow the crops or supply the farm, E-Agro connects you.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {/* Farmers */}
          <article className="overflow-hidden rounded-3xl bg-[#0D2A1B]">
            <div className="h-56 overflow-hidden">
              <img
                src="/images/farmers.jpg"
                alt="Farmers working in a field"
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="p-7">
              <p className="text-xs font-medium uppercase tracking-wider text-[#8BCF63]">
                Magsasaka
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                For farmers
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/55">
                Receive support through loans, low-cost farming supplies, and
                machinery.
              </p>

              <a
                href="#farmers"
                className="mt-6 inline-block rounded-full border border-white/30 px-5 py-2.5 text-xs font-medium text-white transition hover:bg-white/10"
              >
                Learn more
              </a>
            </div>
          </article>
          {/* Suppliers */}
          <article className="overflow-hidden rounded-3xl bg-[#302C12]">
            <div className="h-56 overflow-hidden">
              <img
                src="/images/suppliers.jpg"
                alt="Agricultural supplier"
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="p-7">
              <p className="text-xs font-medium uppercase tracking-wider text-[#F5B900]">
                Mangangalakal
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                For suppliers
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/55">
                Connect your products and services to farmers to expand your
                business.
              </p>

              <a
                href="#suppliers"
                className="mt-6 inline-block rounded-full border border-white/30 px-5 py-2.5 text-xs font-medium text-white transition hover:bg-white/10"
              >
                Learn more
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Participation;
