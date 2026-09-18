import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  Company: [
    { name: "About", path: "/about" },
    { name: "Process", path: "/process" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ],

  Services: [
    { name: "Web Development", path: "/services" },
    { name: "E-commerce", path: "/services" },
    { name: "UI/UX Design", path: "/services" },
    { name: "Website Redesign", path: "/services" },
  ],

  Explore: [
    { name: "Get a Quote", path: "/get-quote" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms", path: "/terms" },
  ],
};

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden bg-[#05070B] text-white"
      aria-label="WebQenzo website footer"
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-600/[0.07] blur-[120px]" />

        <div className="absolute right-[-120px] top-[-80px] h-96 w-96 rounded-full bg-cyan-400/[0.05] blur-[140px]" />

        <div className="absolute bottom-[-180px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/[0.04] blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.035),transparent_38%)]" />
      </div>

      {/* =====================================================
          TOP BORDER
      ====================================================== */}

      <div
        className="relative h-px w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">

        {/* ===================================================
            CTA SECTION
        ==================================================== */}

        <section
          className="relative py-20 sm:py-24 lg:py-28"
          aria-labelledby="footer-cta-heading"
        >
          <div className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.025] px-6 py-12 shadow-[0_30px_100px_rgba(0,0,0,.3)] sm:px-10 lg:px-16 lg:py-16">

            {/* CTA glow */}

            <div
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/[0.09] blur-[100px]"
              aria-hidden="true"
            />

            <div
              className="pointer-events-none absolute -bottom-24 left-1/3 h-60 w-60 rounded-full bg-cyan-400/[0.06] blur-[100px]"
              aria-hidden="true"
            />

            {/* Subtle grid */}

            <div
              className="pointer-events-none absolute inset-0 opacity-[0.035]"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">

              <div className="max-w-3xl">

                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-500/[0.07] px-3 py-1.5">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,.8)]"
                    aria-hidden="true"
                  />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-blue-200/80">
                    Start Something Great
                  </span>
                </div>

                <h2
                  id="footer-cta-heading"
                  className="max-w-3xl text-3xl font-black leading-[1.05] tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl xl:text-6xl"
                >
                  Have a project in mind?
                  <br />

                  <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    Let's build it.
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                  Tell us what you are building, what you want to improve,
                  or where your current website is falling short.
                  We will turn the idea into a clear digital direction.
                </p>
              </div>

              <Link
                to="/get-quote"
                aria-label="Start a project with WebQenzo"
                className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 text-sm font-bold text-white shadow-[0_15px_45px_rgba(37,99,235,.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(37,99,235,.3)] sm:w-auto"
              >
                <span
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                  aria-hidden="true"
                />

                <span className="relative">
                  Start a Project
                </span>

                <span
                  className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition duration-300 group-hover:rotate-45"
                  aria-hidden="true"
                >
                  <ArrowUpRight size={16} />
                </span>
              </Link>

            </div>
          </div>
        </section>

        {/* ===================================================
            MAIN FOOTER
        ==================================================== */}

        <section
          className="border-t border-white/[0.07] py-16 lg:py-20"
          aria-label="Footer navigation"
        >
          <div className="grid gap-14 lg:grid-cols-[1.25fr_1fr_1fr_1fr]">

            {/* =================================================
                BRAND
            ================================================== */}

            <div className="max-w-sm">

              <Link
                to="/"
                aria-label="WebQenzo home"
                className="group inline-flex items-center"
              >
                <span className="text-3xl font-black tracking-[-0.06em] text-white">
                  Web
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Qenzo
                  </span>
                </span>

                <span
                  className="ml-2 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,.8)]"
                  aria-hidden="true"
                />
              </Link>

              <p className="mt-5 text-sm font-medium text-slate-400">
                Websites That Grow Your Business.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                A digital agency focused on thoughtful design,
                modern development, strong performance, and
                websites built around real business goals.
              </p>

              {/* Contact mini cards */}

              <div className="mt-7 space-y-3">

                <a
                  href="mailto:hello@webqenzo.com"
                  aria-label="Email WebQenzo at hello@webqenzo.com"
                  className="group flex items-center gap-3 text-sm text-slate-500 transition hover:text-white"
                >
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] transition group-hover:border-blue-400/20 group-hover:bg-blue-500/[0.07]"
                    aria-hidden="true"
                  >
                    <Mail size={15} />
                  </span>

                  hello@webqenzo.com
                </a>

                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025]"
                    aria-hidden="true"
                  >
                    <MapPin size={15} />
                  </span>

                  India
                </div>

              </div>

            </div>

            {/* =================================================
                COMPANY
            ================================================== */}

            <FooterColumn
              title="Company"
              links={footerLinks.Company}
            />

            {/* =================================================
                SERVICES
            ================================================== */}

            <FooterColumn
              title="Services"
              links={footerLinks.Services}
            />

            {/* =================================================
                EXPLORE
            ================================================== */}

            <FooterColumn
              title="Explore"
              links={footerLinks.Explore}
            />

          </div>
        </section>

        {/* ===================================================
            FOOTER LOWER AREA
        ==================================================== */}

        <section className="border-t border-white/[0.07] py-7">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            {/* Copyright */}

            <p className="text-xs text-slate-600">
              © {currentYear} WebQenzo. All rights reserved.
            </p>

            {/* Center statement */}

            <div
              className="hidden items-center gap-3 md:flex"
              aria-hidden="true"
            >
              <span className="h-px w-8 bg-white/[0.08]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-700">
                Digital Experiences
              </span>

              <span className="h-px w-8 bg-white/[0.08]" />
            </div>

            {/* Legal */}

            <nav
              aria-label="Legal navigation"
              className="flex items-center gap-5 text-xs text-slate-600"
            >
              <Link
                to="/privacy-policy"
                className="transition hover:text-slate-300"
              >
                Privacy
              </Link>

              <Link
                to="/terms"
                className="transition hover:text-slate-300"
              >
                Terms
              </Link>

              <Link
                to="/contact"
                className="transition hover:text-slate-300"
              >
                Contact
              </Link>
            </nav>

          </div>
        </section>

        {/* ===================================================
            BRAND SIGNATURE
        ==================================================== */}

        <section
          className="border-t border-white/[0.05] py-8"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">

            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-slate-800">
              WebQenzo
            </span>

            <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-slate-800">
              Websites That Grow Your Business
            </span>

          </div>
        </section>

      </div>
    </footer>
  );
}

/* =========================================================
   REUSABLE FOOTER COLUMN
========================================================= */

function FooterColumn({ title, links }) {
  return (
    <nav aria-label={`${title} navigation`}>
      <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-300">
        {title}
      </h3>

      <div className="mt-5 flex flex-col gap-3.5">
        {links.map((link) => (
          <Link
            key={`${link.path}-${link.name}`}
            to={link.path}
            className="group inline-flex w-fit items-center gap-2 text-sm text-slate-500 transition duration-300 hover:translate-x-1 hover:text-white"
          >
            <span>{link.name}</span>

            <ArrowUpRight
              size={13}
              className="opacity-0 transition duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Footer;