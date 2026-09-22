function Services() {
  return (
    <section id="program" className="bg-[#061810] py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#8BCF63]">
              Our services
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              What E-Agro provides
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/50">
            Loans, farm supplies, and machinery in one place, at low cost.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {/* Loan */}
          <article
            id="loan"
            className="rounded-3xl bg-[#14552F] p-8 md:row-span-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5B900] font-bold text-[#07150D]">
              ₱
            </div>

            <h3 className="mt-8 text-3xl font-bold leading-tight text-white">
              Low-interest
              <br />
              loans
            </h3>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/60">
              Borrow with collateral at low interest to fund what your farm
              needs.
            </p>

            <a
              href="#loan"
              className="mt-8 inline-block rounded-full bg-[#F5B900] px-5 py-3 text-xs font-bold text-[#07150D] transition hover:bg-[#FFC928]"
            >
              See loan details
            </a>
          </article>

          {/* Supplies */}
          <article className="rounded-3xl bg-[#0D2A1B] p-7">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#163D26] text-[#8BCF63]">
              ✦
            </div>

            <h3 className="mt-5 text-xl font-bold text-white">
              Farming supplies and tools
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/50">
              Buy the supplies and tools your farm needs at low prices.
            </p>
          </article>

          {/* Machinery */}
          <article className="rounded-3xl bg-[#302C12] p-7">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#49410D] text-[#F5B900]">
              ⚙
            </div>

            <h3 className="mt-5 text-xl font-bold text-white">
              Machinery and services
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/50">
              Purchase or rent machinery and services at low prices.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Services;
