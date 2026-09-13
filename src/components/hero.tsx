import heroImage from "../assets/banner-stack.png";

function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-2">
        
        {/* Left Content */}
        <div>
          <p className="mb-4 font-semibold text-purple-600">
            🚀 Build Your Perfect Tech Stack
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Build Your
            <br />
            <span className="brand-gradient">Developer Stack</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Discover modern technologies, explore their capabilities,
            and create your perfect development stack for your next
            amazing project.
          </p>

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

        {/* Hero Image */}
        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="Dev Stack"
            className="w-full max-w-xl rounded-3xl object-cover shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;