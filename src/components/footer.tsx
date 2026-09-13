function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-bg font-bold text-white">
                DS
              </div>

              <span className="text-xl font-bold text-white">
                Dev <span className="brand-gradient">Stack</span>
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              Build your perfect developer stack with modern
              technologies and tools for your next project.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-slate-800 px-3 py-2 text-sm hover:bg-slate-700"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-slate-800 px-3 py-2 text-sm hover:bg-slate-700"
              >
                Twitter
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-slate-800 px-3 py-2 text-sm hover:bg-slate-700"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-white">
              Product
            </h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#technologies" className="hover:text-white">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-white">
                  Projects
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Features
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white">
              Company
            </h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white">
              Legal
            </h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#privacy" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#terms" className="hover:text-white">
                  Terms of Service
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#privacy" className="hover:text-white">
              Privacy
            </a>

            <a href="#terms" className="hover:text-white">
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;