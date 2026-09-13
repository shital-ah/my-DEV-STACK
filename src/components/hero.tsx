function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2">

        {/* Left Side */}
        <div>
          <p className="mb-4 font-semibold text-purple-600">
            🚀 Build Your Perfect Tech Stack
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Build Your
            <br />

            <span className="brand-gradient">
              Developer Stack
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Discover modern technologies, explore their capabilities,
            and create your perfect development stack for your next
            amazing project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#technologies"
              className="rounded-full gradient-bg px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
            >
              Explore Technologies →
            </a>

            <a
              href="#about"
              className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-purple-500 hover:text-purple-600"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className="w-full max-w-lg rounded-3xl bg-slate-900 p-6 shadow-2xl">

            {/* Fake browser top */}
            <div className="mb-6 flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
            </div>

            {/* Code */}
            <div className="font-mono text-sm leading-8 text-slate-300">
              <p>
                <span className="text-purple-400">const</span>{" "}
                myStack = [
              </p>

              <p className="pl-6 text-orange-300">
                "React",
              </p>

              <p className="pl-6 text-cyan-300">
                "Node.js",
              </p>

              <p className="pl-6 text-green-300">
                "MongoDB",
              </p>

              <p className="pl-6 text-pink-300">
                "Tailwind CSS"
              </p>

              <p>];</p>

              <p className="mt-4 text-slate-500">
                // Ready to build 🚀
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;