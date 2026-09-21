function App() {
  return (
    <section className="bg-green-950 lg:min-h-[70vh] lg:flex lg:items-start font-sans">
      <div className="mx-auto w-screen max-w-7xl px-4 pt-16 pb-12 sm:px-6 sm:pt-20 lg:px-8 lg:pt-20">
        <div className="max-w-prose text-left">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Understand user flow and
            <strong className="text-white"> increase </strong>
            conversions
          </h1>

          <p className="mt-4 text-base text-pretty text-white sm:text-lg/relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
            nisi. Natus, provident accusamus impedit minima harum corporis
            iusto.
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6">
            <a
              className="inline-block rounded border border-white bg-white px-5 py-3 font-medium text-green-950 shadow-sm transition-colors"
              href="#"
            >
              Get Started
            </a>

            <a
              className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-white shadow-sm transition-colors"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
