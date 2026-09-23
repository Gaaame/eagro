function Contact() {
  return (
    <main className="min-h-screen bg-[#061810] font-sans text-white">
      {/* ================= CONTACT HERO ================= */}
      <section className="border-b border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            {/* Label */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2">
              <span className="text-sm text-[#8BCF63]">✦</span>

              <span className="text-xs font-medium text-[#8BCF63]">
                Get in touch
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Let's grow
              <br />
              <span className="text-[#8BCF63]">together.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
              Have a question about our programs, loans, farming supplies, or
              services? Get in touch with the E-Agro team and we'll be happy to
              help.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT CONTENT ================= */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          {/* ================= CONTACT INFO ================= */}
          <div className="rounded-3xl bg-[#0D2A1B] p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8BCF63]">
              Contact information
            </p>

            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
              We'd love to hear from you.
            </h2>

            <p className="mt-4 text-sm leading-6 text-white/50">
              Reach out to us with your questions, inquiries, or feedback about
              E-Agro.
            </p>

            {/* Contact details */}
            <div className="mt-10 space-y-7">
              {/* Email */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#163D26] text-[#8BCF63]">
                  @
                </div>

                <div>
                  <p className="text-xs text-white/40">Email</p>

                  <a
                    href="mailto:info@e-agro.ph"
                    className="mt-1 block text-sm font-medium text-white transition hover:text-[#8BCF63]"
                  >
                    info@e-agro.ph
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#163D26] text-[#8BCF63]">
                  ☎
                </div>

                <div>
                  <p className="text-xs text-white/40">Phone</p>

                  <a
                    href="tel:+6320000000"
                    className="mt-1 block text-sm font-medium text-white transition hover:text-[#8BCF63]"
                  >
                    +63 (2) 0000 0000
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#163D26] text-[#8BCF63]">
                  ●
                </div>

                <div>
                  <p className="text-xs text-white/40">Location</p>

                  <p className="mt-1 text-sm font-medium text-white">
                    Philippines
                  </p>
                </div>
              </div>
            </div>

            {/* Facebook */}
            <div className="mt-12 border-t border-white/10 pt-7">
              <p className="text-xs text-white/40">Prefer social media?</p>

              <a
                href="#"
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#8BCF63] transition hover:text-white"
              >
                Message us on Facebook
                <span>→</span>
              </a>
            </div>
          </div>

          {/* ================= FORM ================= */}
          <div className="rounded-3xl border border-white/5 bg-[#0A2116] p-8 sm:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8BCF63]">
                Send us a message
              </p>

              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                How can we help?
              </h2>
            </div>

            <form className="mt-8 space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-medium text-white/70"
                >
                  Full name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-white/10 bg-[#061810] px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-[#8BCF63]/60"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-medium text-white/70"
                >
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-[#061810] px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-[#8BCF63]/60"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs font-medium text-white/70"
                >
                  Subject
                </label>

                <select
                  id="subject"
                  className="w-full rounded-xl border border-white/10 bg-[#061810] px-4 py-3 text-sm text-white/70 outline-none transition focus:border-[#8BCF63]/60"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a subject
                  </option>

                  <option value="loan">Loan inquiry</option>

                  <option value="supplies">Farming supplies</option>

                  <option value="machinery">Machinery and services</option>

                  <option value="supplier">Supplier inquiry</option>

                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-medium text-white/70"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#061810] px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 transition focus:border-[#8BCF63]/60"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-full bg-[#F5B900] px-6 py-3.5 text-sm font-bold text-[#07150D] transition hover:bg-[#FFC928]"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= FACEBOOK CTA ================= */}
      <section className="px-6 pb-20">
        <div
          className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/e-agro-hero.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-[#174B2B]/90" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-7 px-8 py-12 sm:px-12 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8BCF63]">
                Stay connected
              </p>

              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Follow E-Agro on Facebook
              </h2>

              <p className="mt-2 text-sm text-white/55">
                Stay updated with our latest programs and announcements.
              </p>
            </div>

            <a
              href="#"
              className="shrink-0 rounded-full bg-[#F5B900] px-6 py-3 text-xs font-bold text-[#07150D] transition hover:bg-[#FFC928]"
            >
              Visit our Facebook
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
