import {
  ArrowUpRight,
  ChevronUp,
  Code2,
  Globe2,
  Layers3,
  Mail,
  Palette,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const exploreLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Process", path: "/process" },
  { name: "Get a Quote", path: "/get-quote" },
];

const serviceLinks = [
  "Business Websites",
  "E-commerce",
  "Landing Pages",
  "Booking Websites",
  "UI / UX Design",
  "Website Redesign",
  "Web Applications",
  "SEO & Performance",
  "Maintenance & Support",
];

const companyLinks = [
  { name: "About WebQenzo", path: "/about" },
  { name: "Our Process", path: "/process" },
  { name: "Our Work", path: "/portfolio" },
  { name: "Start a Project", path: "/get-quote" },
];

const workLinks = [
  "MediCare",
  "FitZone",
  "LexPro",
  "FinEdge",
  "BeatHouse",
  "ThreadRare",
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#030509] text-white">

      {/* =====================================================
          AMBIENT LIGHTING
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[5%] h-[500px] w-[500px] rounded-full bg-blue-600/[0.06] blur-[140px]" />

        <div className="absolute right-[-10%] top-[15%] h-[450px] w-[450px] rounded-full bg-cyan-400/[0.05] blur-[140px]" />

        <div className="absolute bottom-[-15%] left-[35%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.035] blur-[150px]" />
      </div>

      {/* =====================================================
          01 — PREMIUM CTA
      ====================================================== */}
      <section className="relative border-b border-white/[0.07]">
        <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

          <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-gradient-to-br from-[#0C1626] via-[#080E17] to-[#061015] shadow-[0_40px_120px_rgba(0,0,0,.45)]">

            {/* CTA glow */}
            <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />

            <div className="pointer-events-none absolute -bottom-32 left-[30%] h-80 w-80 rounded-full bg-cyan-400/[0.07] blur-[110px]" />

            {/* Decorative lines */}
            <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />

            <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-end lg:p-16">

              <div className="max-w-4xl">

                <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400 backdrop-blur-xl">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,.8)]" />
                  Start something meaningful
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                  Your next digital chapter
                </p>

                <h2 className="mt-5 text-4xl font-black leading-[1] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                  Have an idea
                  <span className="block bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
                    worth building?
                  </span>
                </h2>

                <p className="mt-7 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                  Tell us about your business, your idea or the digital
                  experience you want to improve. Let's explore what the right
                  solution could look like.
                </p>
              </div>

              <Link
                to="/get-quote"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#030509] shadow-[0_15px_45px_rgba(255,255,255,.06)] transition duration-300 hover:-translate-y-1"
              >
                Start a Project

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#030509] text-white transition duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={15} />
                </span>
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          02 — BRAND + MAIN NAVIGATION
      ====================================================== */}
      <section className="relative border-b border-white/[0.07]">
        <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

          <div className="grid gap-16 lg:grid-cols-[1.35fr_.65fr]">

            {/* BRAND */}
            <div>

              <Link
                to="/"
                onClick={scrollToTop}
                className="group inline-flex items-center"
              >
                <span className="text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl">
                  Web
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Qenzo
                  </span>
                </span>

                <span className="ml-3 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,.8)]" />
              </Link>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.25em] text-slate-600">
                Websites That Grow Your Business
              </p>

              <p className="mt-7 max-w-xl text-sm leading-7 text-slate-500">
                WebQenzo is a digital web development agency focused on
                creating modern, premium and business-oriented digital
                experiences through thoughtful design and structured
                development.
              </p>

              {/* Philosophy line */}
              <div className="mt-10 flex max-w-xl items-center gap-4">

                <div className="h-px flex-1 bg-gradient-to-r from-blue-400/40 to-transparent" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-700">
                  Idea · Design · Develop · Grow
                </span>

              </div>

              {/* Small capability cards */}
              <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">

                {[
                  {
                    icon: Globe2,
                    title: "Web",
                  },
                  {
                    icon: Palette,
                    title: "Design",
                  },
                  {
                    icon: Code2,
                    title: "Code",
                  },
                  {
                    icon: Rocket,
                    title: "Growth",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.04]"
                    >
                      <Icon
                        size={17}
                        className="text-cyan-300"
                      />

                      <p className="mt-4 text-xs font-semibold text-slate-400">
                        {item.title}
                      </p>
                    </div>
                  );
                })}

              </div>
            </div>

            {/* QUICK CONTACT / CTA */}
            <div className="lg:pl-8">

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                Let's connect
              </p>

              <h3 className="mt-4 text-2xl font-black tracking-[-0.035em]">
                Ready when you are.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Start with a conversation about your business and what you
                want to build.
              </p>

              <Link
                to="/get-quote"
                className="group mt-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-blue-400/25 hover:bg-white/[0.07]"
              >
                Get a Quote

                <ArrowUpRight
                  size={16}
                  className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <div className="mt-9 flex items-start gap-3 border-t border-white/[0.07] pt-7">
                <ShieldCheck
                  size={17}
                  className="mt-0.5 shrink-0 text-cyan-300"
                />

                <p className="text-xs leading-6 text-slate-600">
                  Clear communication, defined project requirements and
                  business-focused digital work.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          03 — NAVIGATION GRID
      ====================================================== */}
      <section className="relative border-b border-white/[0.07]">
        <div className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

            {/* Explore */}
            <div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold text-blue-400">
                  01
                </span>

                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
                  Explore
                </h3>
              </div>

              <div className="mt-6 space-y-3">
                {exploreLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={scrollToTop}
                    className="group flex w-fit items-center gap-2 text-sm text-slate-600 transition hover:text-white"
                  >
                    {link.name}

                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold text-blue-400">
                  02
                </span>

                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
                  Services
                </h3>
              </div>

              <div className="mt-6 space-y-3">
                {serviceLinks.map((service) => (
                  <Link
                    key={service}
                    to="/services"
                    onClick={scrollToTop}
                    className="group flex w-fit items-center gap-2 text-sm text-slate-600 transition hover:text-white"
                  >
                    {service}

                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Work */}
            <div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold text-blue-400">
                  03
                </span>

                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
                  Selected Work
                </h3>
              </div>

              <div className="mt-6 space-y-3">
                {workLinks.map((work) => (
                  <Link
                    key={work}
                    to="/portfolio"
                    onClick={scrollToTop}
                    className="group flex w-fit items-center gap-2 text-sm text-slate-600 transition hover:text-white"
                  >
                    {work}

                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold text-blue-400">
                  04
                </span>

                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
                  Company
                </h3>
              </div>

              <div className="mt-6 space-y-3">
                {companyLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={scrollToTop}
                    className="group flex w-fit items-center gap-2 text-sm text-slate-600 transition hover:text-white"
                  >
                    {link.name}

                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          04 — TRUST BAND
      ====================================================== */}
      <section className="border-b border-white/[0.07] bg-[#05080D]">
        <div className="mx-auto max-w-[1500px] px-5 py-8 sm:px-8 lg:px-12">

          <div className="grid gap-6 md:grid-cols-3">

            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025]">
                <ShieldCheck
                  size={17}
                  className="text-cyan-300"
                />
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-300">
                  Transparent Approach
                </p>

                <p className="mt-1 text-[11px] text-slate-700">
                  Clear requirements & communication
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025]">
                <Layers3
                  size={17}
                  className="text-cyan-300"
                />
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-300">
                  Structured Development
                </p>

                <p className="mt-1 text-[11px] text-slate-700">
                  Built with scalability in mind
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025]">
                <Sparkles
                  size={17}
                  className="text-cyan-300"
                />
              </div>

              <div>
                <p className="text-xs font-semibold text-slate-300">
                  Detail-Focused Design
                </p>

                <p className="mt-1 text-[11px] text-slate-700">
                  Experience matters at every level
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          05 — LARGE BRAND STATEMENT
      ====================================================== */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

          <div className="relative">

            <div className="pointer-events-none absolute -left-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-blue-500/[0.05] blur-[80px]" />

            <p className="relative text-[clamp(3rem,9vw,9rem)] font-black leading-[0.8] tracking-[-0.075em] text-white/[0.035]">
              WEBQENZO
            </p>

            <div className="relative -mt-3 flex flex-col justify-between gap-5 sm:-mt-6 sm:flex-row sm:items-center">

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-700">
                Websites That Grow Your Business
              </p>

              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-700">
                  Idea · Design · Develop · Grow
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          06 — BOTTOM LEGAL BAR
      ====================================================== */}
      <section className="border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-5 px-5 py-7 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <p className="text-xs text-slate-700">
              © {new Date().getFullYear()} WebQenzo. All rights reserved.
            </p>

            <span className="hidden h-1 w-1 rounded-full bg-slate-800 sm:block" />

            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-800">
              Websites That Grow Your Business
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5">

            {/* Future legal pages */}
            <Link
              to="/privacy-policy"
              className="text-xs text-slate-700 transition hover:text-slate-300"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-xs text-slate-700 transition hover:text-slate-300"
            >
              Terms
            </Link>

            <Link
              to="/contact"
              className="text-xs text-slate-700 transition hover:text-slate-300"
            >
              Contact
            </Link>

            {/* Back to top */}
            <button
              type="button"
              onClick={scrollToTop}
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] text-slate-500 transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.06] hover:text-white"
              aria-label="Back to top"
            >
              <ChevronUp
                size={16}
                className="transition group-hover:-translate-y-0.5"
              />
            </button>

          </div>
        </div>
      </section>

    </footer>
  );
}

export default Footer;