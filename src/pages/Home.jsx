import { motion } from "framer-motion";
import SEO from "../components/SEO";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Layers3,
  Monitor,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <SEO
        title="Premium Website Design & Development"
        description="WebQenzo creates premium, modern and high-performance websites for businesses, brands and startups."
        path="/"
      />

      <main className="home-page overflow-x-clip">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative isolate overflow-hidden bg-[#070B14] text-white">
  {/* Background */}
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[120px]" />
    <div className="absolute -right-24 top-20 h-[460px] w-[460px] rounded-full bg-cyan-500/15 blur-[130px]" />
    <div
      className="absolute inset-0 opacity-[0.045]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
    />
    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#070B14] to-transparent" />
  </div>

  <div className="relative mx-auto max-w-[1440px] px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20 lg:px-12 lg:pb-24 lg:pt-24">
    <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-12 xl:gap-16">

      {/* LEFT: Hero content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="mx-auto w-full max-w-2xl lg:mx-0"
      >
        <div className="mb-6 inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.045] px-3.5 py-2">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-300 sm:text-xs sm:tracking-[0.2em]">
            WebQenzo · Digital Experiences
          </span>
        </div>

        <h1 className="max-w-[760px] text-[clamp(2.8rem,6.1vw,5.65rem)] font-semibold leading-[1.04] tracking-[-0.065em]">
          Websites that
          <br />
          make your brand
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            impossible to ignore.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:mt-7 sm:text-lg sm:leading-8">
          We design and develop high-performance websites that turn first
          impressions into lasting trust — and visitors into customers.
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row sm:mt-9">
          <Link
            to="/get-quote"
            className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#07101E] shadow-[0_8px_35px_rgba(255,255,255,0.08)] transition duration-300 hover:-translate-y-1 hover:bg-cyan-50 hover:shadow-[0_12px_40px_rgba(34,211,238,0.15)]"
          >
            Let's Build Your Website
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0B1220] text-white transition-transform duration-300 group-hover:translate-x-1">
              <ArrowUpRight size={17} />
            </span>
          </Link>

          <Link
            to="/portfolio"
            className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.035] px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.07]"
          >
            Explore Our Work
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Trust points */}
        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs font-medium text-slate-400 sm:gap-x-6 sm:text-sm">
          {[
            "Responsive by design",
            "Performance focused",
            "Built for growth",
          ].map((item) => (
            <span key={item} className="inline-flex items-center gap-2">
              <Check size={15} className="shrink-0 text-cyan-400" />
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      {/* RIGHT: Premium website showcase */}
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
        className="relative mx-auto w-full max-w-[650px] min-w-0 lg:ml-auto"
      >
        {/* Decorative glow */}
        <div className="pointer-events-none absolute inset-8 rounded-full bg-blue-500/20 blur-[80px]" />

        {/* Top floating badge */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-1 -top-5 z-20 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#111827]/95 p-3 shadow-2xl backdrop-blur-xl sm:flex md:-right-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
            <Code2 size={19} />
          </div>
          <div>
            <p className="text-[10px] font-medium uppercase tracking-widest text-slate-500">
              Development
            </p>
            <p className="mt-1 text-xs font-semibold text-white">
              Clean. Modern. Scalable.
            </p>
          </div>
        </motion.div>

        {/* Main browser frame */}
        <div className="relative rounded-[22px] border border-white/[0.13] bg-[#111722] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.48)] sm:rounded-[28px] sm:p-3">
          {/* Browser toolbar */}
          <div className="flex h-10 items-center gap-2 px-2 sm:h-12 sm:px-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B6B]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#F6C85F]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#51CF93]" />

            <div className="ml-2 flex h-7 min-w-0 flex-1 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.035] px-2 sm:ml-4">
              <span className="truncate text-[9px] text-slate-500 sm:text-[11px]">
                webqenzo.com / your-next-project
              </span>
            </div>

            <span className="ml-1 hidden text-[10px] text-slate-600 sm:block">
              ↗
            </span>
          </div>

          {/* Website preview */}
          <div className="overflow-hidden rounded-[15px] bg-[#F5F7FC]">
            {/* Preview navbar */}
            <div className="flex h-12 items-center justify-between border-b border-slate-200/80 bg-white px-3 sm:h-14 sm:px-6">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#101C39] text-xs font-bold text-white">
                  N
                </div>
                <span className="text-[11px] font-bold tracking-tight text-[#101C39] sm:text-sm">
                  NEXORA
                </span>
              </div>

              <div className="hidden items-center gap-4 text-[9px] font-medium text-slate-500 sm:flex lg:gap-5">
                <span>Solutions</span>
                <span>Our Work</span>
                <span>About Us</span>
              </div>

              <div className="rounded-full bg-[#101C39] px-3 py-2 text-[8px] font-semibold text-white sm:px-4 sm:text-[9px]">
                Get Started ↗
              </div>
            </div>

            {/* Preview hero */}
            <div className="relative overflow-hidden bg-gradient-to-br from-white via-[#F2F6FF] to-[#E5F0FF] px-4 py-7 sm:px-7 sm:py-10 md:px-9 md:py-12">
              <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-blue-200/70 sm:h-64 sm:w-64" />
              <div className="pointer-events-none absolute -right-5 top-4 h-36 w-36 rounded-full border border-blue-200/50 sm:h-48 sm:w-48" />

              <div className="relative grid grid-cols-[1.05fr_0.95fr] items-center gap-2 sm:gap-5">
                <div className="min-w-0">
                  <div className="mb-3 inline-flex rounded-full border border-blue-100 bg-white/80 px-2.5 py-1.5 text-[7px] font-bold uppercase tracking-widest text-blue-600 sm:mb-4 sm:text-[9px]">
                    Built for what's next
                  </div>

                  <h2 className="text-[clamp(1.2rem,3.2vw,2.65rem)] font-bold leading-[1.08] tracking-[-0.06em] text-[#101C39]">
                    Think bigger.
                    <br />
                    <span className="text-blue-600">Grow faster.</span>
                  </h2>

                  <p className="mt-3 max-w-[230px] text-[8px] leading-4 text-slate-500 sm:mt-4 sm:text-[10px] sm:leading-5">
                    A digital experience designed to move your business
                    forward.
                  </p>

                  <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#101C39] px-3 py-2 text-[8px] font-semibold text-white sm:mt-6 sm:px-4 sm:py-2.5 sm:text-[10px]">
                    Discover More <ArrowRight size={11} />
                  </div>

                  <div className="mt-5 flex items-center gap-2 sm:mt-7">
                    <div className="flex -space-x-1.5">
                      <span className="h-5 w-5 rounded-full border-2 border-white bg-blue-300" />
                      <span className="h-5 w-5 rounded-full border-2 border-white bg-cyan-300" />
                      <span className="h-5 w-5 rounded-full border-2 border-white bg-violet-300" />
                    </div>
                    <span className="text-[7px] text-slate-500 sm:text-[9px]">
                      Made for real businesses
                    </span>
                  </div>
                </div>

                {/* Abstract product dashboard */}
                <div className="relative min-w-0">
                  <div className="absolute inset-1 rounded-2xl bg-blue-400/20 blur-xl" />

                  <div className="relative rotate-2 rounded-xl border border-white bg-white p-2 shadow-xl sm:rounded-2xl sm:p-3">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                      <div>
                        <div className="h-1.5 w-12 rounded-full bg-slate-200 sm:w-16" />
                        <div className="mt-1.5 h-2 w-16 rounded-full bg-[#101C39] sm:w-20" />
                      </div>
                      <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-50 text-blue-600 sm:h-8 sm:w-8">
                        <Monitor size={15} />
                      </div>
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <div className="rounded-lg bg-blue-50 p-2 sm:p-3">
                        <div className="h-1 w-8 rounded bg-blue-200" />
                        <div className="mt-2 h-3 w-10 rounded bg-blue-600 sm:w-12" />
                        <div className="mt-2 h-1 w-7 rounded bg-blue-200" />
                      </div>
                      <div className="rounded-lg bg-cyan-50 p-2 sm:p-3">
                        <div className="h-1 w-8 rounded bg-cyan-200" />
                        <div className="mt-2 h-3 w-8 rounded bg-cyan-500 sm:w-10" />
                        <div className="mt-2 h-1 w-6 rounded bg-cyan-200" />
                      </div>
                    </div>

                    {/* Decorative chart */}
                    <div className="mt-2 rounded-lg border border-slate-100 p-2 sm:mt-3 sm:p-3">
                      <div className="mb-2 flex items-center justify-between">
                        <div className="h-1.5 w-12 rounded-full bg-slate-200" />
                        <div className="h-1.5 w-6 rounded-full bg-blue-100" />
                      </div>
                      <div className="flex h-14 items-end gap-1.5 sm:h-20 sm:gap-2">
                        {[32, 48, 38, 66, 52, 80, 63, 100].map(
                          (height, index) => (
                            <div
                              key={index}
                              className={`flex-1 rounded-t-sm ${
                                index === 7 ? "bg-cyan-500" : "bg-blue-500/75"
                              }`}
                              style={{ height: `${height}%` }}
                            />
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Small floating stat */}
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 3.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-3 -left-3 rounded-xl border border-slate-100 bg-white p-2.5 shadow-lg sm:-bottom-4 sm:-left-5 sm:p-3"
                  >
                    <div className="text-[7px] font-medium text-slate-400 sm:text-[9px]">
                      User experience
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span className="text-[10px] font-bold text-[#101C39] sm:text-xs">
                        Made to impress
                      </span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Preview footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 bg-white px-4 py-3 sm:px-6 sm:py-4">
              <span className="text-[8px] font-semibold uppercase tracking-widest text-slate-400 sm:text-[9px]">
                Designed with purpose
              </span>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                <span className="text-[8px] font-medium text-slate-500 sm:text-[9px]">
                  Responsive on every screen
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom floating card */}
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-5 right-2 z-20 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#111827]/95 p-3 shadow-2xl backdrop-blur-xl sm:flex md:right-5"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
            <Sparkles size={18} />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-slate-500">
              Design approach
            </p>
            <p className="mt-1 text-xs font-semibold text-white">
              Every pixel has a purpose.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>

    {/* Bottom industry strip */}
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45, duration: 0.6 }}
      className="mt-16 border-t border-white/10 pt-6 sm:mt-20 sm:pt-8"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-xs">
          Digital solutions for ambitious brands
        </p>

        <div className="flex flex-wrap gap-x-5 gap-y-3 text-xs font-medium text-slate-400 sm:gap-x-7 sm:text-sm">
          {[
            "Healthcare",
            "Fitness",
            "Legal",
            "Finance",
            "Events",
            "E-commerce",
          ].map((industry) => (
            <span
              key={industry}
              className="transition-colors hover:text-cyan-300"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
</section>



<section className="relative overflow-hidden bg-white py-16 text-slate-900 sm:py-20 lg:py-24">
  <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">

    {/* LEFT: Images */}
    <div className="relative mx-auto w-full max-w-xl pb-12 sm:pb-16">
      <div className="grid grid-cols-[0.78fr_1fr] items-start gap-3 sm:gap-5">
        <div className="mt-8 overflow-hidden rounded-2xl sm:mt-10">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85"
            alt="Modern professional office"
            className="h-56 w-full object-cover sm:h-72 lg:h-80"
            loading="lazy"
          />
        </div>

        <div className="relative overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85"
            alt="Digital design and website development workspace"
            className="h-[340px] w-full object-cover sm:h-[440px] lg:h-[500px]"
            loading="lazy"
          />

          {/* Experience badge */}
          <div className="absolute right-0 top-0 rounded-bl-2xl bg-indigo-600 px-4 py-4 text-white shadow-xl sm:px-5 sm:py-5">
            <p className="text-2xl font-extrabold sm:text-3xl">05+</p>
            <p className="mt-1 text-xs font-medium leading-4 sm:text-sm">
              Years of Work
              <br />
              Experience
            </p>
          </div>
        </div>
      </div>

      {/* Customer card */}
      <div className="absolute bottom-0 left-2 flex max-w-[95%] items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-[0_12px_45px_rgba(15,23,42,0.12)] sm:left-8 sm:gap-4 sm:p-4">
        <div>
          <p className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            30K
          </p>
          <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
            Happy customers worldwide
          </p>
        </div>

        <div className="flex shrink-0 -space-x-2">
          {[
            { name: "A", color: "bg-indigo-500" },
            { name: "S", color: "bg-violet-500" },
            { name: "R", color: "bg-slate-700" },
          ].map((person) => (
            <div
              key={person.name}
              className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white sm:h-10 sm:w-10 ${person.color}`}
            >
              {person.name}
            </div>
          ))}
          <div className="flex h-8 items-center justify-center rounded-full border-2 border-white bg-slate-950 px-2 text-[10px] font-bold text-white sm:h-10 sm:px-2.5 sm:text-xs">
            62+
          </div>
        </div>
      </div>
    </div>

    {/* RIGHT: Content */}
    <div className="w-full min-w-0">

      <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
        We Build Websites That{" "}
        <span className="text-indigo-600">Grow Businesses.</span>
      </h2>

      <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
        WebQenzo helps businesses build a powerful online presence through
        custom web development, strategic digital experiences, and creative
        design that supports real business growth.
      </p>

      {/* Mission card */}
      <div className="mt-7 flex items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3 shadow-sm sm:mt-8 sm:p-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-200 sm:h-14 sm:w-14">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              className="h-7 w-7"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="5.5" />
              <circle cx="12" cy="12" r="2" />
              <path d="M13.5 10.5 21 3m-4 0h4v4" />
            </svg>
          </div>

          <div>
            <p className="text-xs text-slate-500">What drives us</p>
            <p className="text-base font-bold sm:text-lg">Our Mission</p>
          </div>
        </div>

        <div className="flex shrink-0 gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white sm:h-12 sm:w-12">
            <ArrowUpRight size={21} />
          </div>
          <div className="hidden h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white sm:flex sm:h-12 sm:w-12">
            <Sparkles size={20} />
          </div>
        </div>
      </div>

      {/* Mission description */}
      <div className="mt-6 border-l-4 border-fuchsia-500 pl-3 sm:mt-7">
        <h3 className="text-lg font-bold tracking-tight sm:text-xl">
          Building Digital Success From Day One
        </h3>
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base sm:leading-7">
        Our mission is to empower businesses with modern websites, thoughtful
        branding, and digital experiences that improve visibility, attract
        customers, and support sustainable growth.
      </p>

      {/* Services */}
      <div className="mt-5 space-y-3">
        {[
          "Custom Website Design & Development",
          "Responsive Design for Every Screen",
          "Performance-Focused Digital Experiences",
        ].map((service) => (
          <div key={service} className="flex items-start gap-2.5">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-indigo-200 text-indigo-600">
              <Check size={13} strokeWidth={2.5} />
            </span>
            <span className="text-sm leading-6 text-slate-600 sm:text-base">
              {service}
            </span>
          </div>
        ))}
      </div>

      {/* CTA buttons */}
      <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row sm:mt-8">
        <Link
          to="/about"
          className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200/60 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
        >
          About Us
          <ArrowUpRight size={17} />
        </Link>

        <Link
          to="/get-quote"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-indigo-300 hover:bg-indigo-50"
        >
          Get In Touch
          <ArrowUpRight size={17} className="text-indigo-600" />
        </Link>
      </div>
    </div>
  </div>
</section>




      {/* =====================================================
          INTRO SECTION
      ====================================================== */}
      {/* ============================================================
    WHAT WE DO — PREMIUM SECOND SECTION
============================================================ */}

<section className="relative overflow-hidden bg-[#FBFCFE] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">

  {/* ==========================================================
      SUBTLE BACKGROUND GLOW
  =========================================================== */}

  <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-blue-100/40 blur-[130px]" />

  <div className="pointer-events-none absolute right-[-180px] top-[35%] h-[500px] w-[500px] rounded-full bg-cyan-100/30 blur-[150px]" />

  <div className="pointer-events-none absolute bottom-[-200px] left-[35%] h-[420px] w-[420px] rounded-full bg-blue-50/70 blur-[130px]" />


  {/* ==========================================================
      MAIN CONTAINER
  =========================================================== */}

  <div className="relative mx-auto max-w-[1280px]">


    {/* ========================================================
        TOP INTRO
    ========================================================= */}

    <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:gap-20">


      {/* LEFT */}
      <div>

        {/* Eyebrow */}
        <div className="flex items-center gap-3">

          <span className="h-px w-8 bg-blue-600" />

          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-blue-600">
            What we do
          </p>

        </div>


        {/* Heading */}
        <h2 className="mt-6 max-w-[760px] text-4xl font-semibold leading-[1.04] tracking-[-0.055em] text-[#09182F] sm:text-5xl lg:text-[56px] xl:text-[64px]">

          Your website should

          <br />

          <span className="relative inline-block">
            work as hard
          </span>

          <br className="hidden sm:block" />

          <span className="bg-gradient-to-r from-[#087FF5] via-[#159BE8] to-[#2563EB] bg-clip-text text-transparent">
            as your business.
          </span>

        </h2>

      </div>


      {/* RIGHT */}
      <div className="lg:pb-2">

        <p className="max-w-[560px] text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">

          From first impression to final conversion, we create
          digital experiences that communicate trust, showcase
          your brand and give your customers a reason to take action.

        </p>


        <Link
          to="/services"
          className="group mt-7 inline-flex items-center gap-3 text-sm font-semibold text-[#09182F]"
        >

          <span className="border-b border-[#09182F]/30 pb-1 transition-colors duration-300 group-hover:border-blue-600 group-hover:text-blue-600">
            Explore our services
          </span>

          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all duration-300 group-hover:border-blue-200 group-hover:bg-blue-50">

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-600"
            />

          </span>

        </Link>

      </div>

    </div>


    {/* ========================================================
        PREMIUM DIVIDER
    ========================================================= */}

    <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent lg:mt-20" />


    {/* ========================================================
        FEATURE CARDS
    ========================================================= */}

    <div className="mt-10 grid gap-5 md:grid-cols-3 lg:mt-12">


      {/* ======================================================
          CARD 01 — STRATEGY
      ======================================================= */}

      <div className="group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-[0_10px_40px_rgba(15,23,42,0.035)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_25px_70px_rgba(37,99,235,0.10)] sm:p-8">

        {/* Blue glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-blue-100/50 blur-3xl transition-all duration-500 group-hover:bg-blue-100/80" />


        {/* Number */}
        <div className="relative flex items-center justify-between">

          <span className="text-[11px] font-bold tracking-[0.2em] text-slate-300">
            01
          </span>

          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            Foundation
          </span>

        </div>


        {/* Icon */}
        <div className="relative mt-9 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white text-blue-600 shadow-[0_8px_25px_rgba(37,99,235,0.08)] transition-all duration-500 group-hover:scale-105 group-hover:border-blue-200 group-hover:shadow-[0_12px_30px_rgba(37,99,235,0.14)]">

          <Layers3 size={23} strokeWidth={1.8} />

        </div>


        {/* Content */}
        <div className="relative">

          <h3 className="mt-7 text-xl font-semibold tracking-[-0.025em] text-[#0B1B33]">
            Strategy First
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Every page has a purpose. We structure your website
            around your business goals and customer journey.
          </p>

        </div>


        {/* Bottom line */}
        <div className="mt-8 flex items-center gap-2">

          <span className="h-1 w-1 rounded-full bg-blue-600" />

          <span className="text-xs font-medium text-slate-400">
            Purpose-driven structure
          </span>

        </div>

      </div>


      {/* ======================================================
          CARD 02 — DESIGN
      ======================================================= */}

      <div className="group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-[0_10px_40px_rgba(15,23,42,0.035)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-[0_25px_70px_rgba(8,145,178,0.10)] sm:p-8">

        {/* Cyan glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-100/50 blur-3xl transition-all duration-500 group-hover:bg-cyan-100/80" />


        {/* Number */}
        <div className="relative flex items-center justify-between">

          <span className="text-[11px] font-bold tracking-[0.2em] text-slate-300">
            02
          </span>

          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            Experience
          </span>

        </div>


        {/* Icon */}
        <div className="relative mt-9 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-white text-cyan-600 shadow-[0_8px_25px_rgba(8,145,178,0.08)] transition-all duration-500 group-hover:scale-105 group-hover:border-cyan-200 group-hover:shadow-[0_12px_30px_rgba(8,145,178,0.14)]">

          <Monitor size={23} strokeWidth={1.8} />

        </div>


        {/* Content */}
        <div className="relative">

          <h3 className="mt-7 text-xl font-semibold tracking-[-0.025em] text-[#0B1B33]">
            Premium Design
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Clean layouts, thoughtful spacing and refined interactions
            designed to make your brand feel established.
          </p>

        </div>


        {/* Bottom line */}
        <div className="mt-8 flex items-center gap-2">

          <span className="h-1 w-1 rounded-full bg-cyan-500" />

          <span className="text-xs font-medium text-slate-400">
            Designed to build trust
          </span>

        </div>

      </div>


      {/* ======================================================
          CARD 03 — PERFORMANCE
      ======================================================= */}

      <div className="group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-[0_10px_40px_rgba(15,23,42,0.035)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_25px_70px_rgba(37,99,235,0.10)] sm:p-8">

        {/* Blue glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-blue-100/50 blur-3xl transition-all duration-500 group-hover:bg-blue-100/80" />


        {/* Number */}
        <div className="relative flex items-center justify-between">

          <span className="text-[11px] font-bold tracking-[0.2em] text-slate-300">
            03
          </span>

          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            Technology
          </span>

        </div>


        {/* Icon */}
        <div className="relative mt-9 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white text-blue-600 shadow-[0_8px_25px_rgba(37,99,235,0.08)] transition-all duration-500 group-hover:scale-105 group-hover:border-blue-200 group-hover:shadow-[0_12px_30px_rgba(37,99,235,0.14)]">

          <Code2 size={23} strokeWidth={1.8} />

        </div>


        {/* Content */}
        <div className="relative">

          <h3 className="mt-7 text-xl font-semibold tracking-[-0.025em] text-[#0B1B33]">
            Built for Performance
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Lightweight interfaces and clean code keep the experience
            smooth without unnecessary visual or technical overhead.
          </p>

        </div>


        {/* Bottom line */}
        <div className="mt-8 flex items-center gap-2">

          <span className="h-1 w-1 rounded-full bg-blue-600" />

          <span className="text-xs font-medium text-slate-400">
            Fast, scalable &amp; reliable
          </span>

        </div>

      </div>

    </div>


    {/* ========================================================
        BOTTOM MICRO TRUST ROW
    ========================================================= */}

    <div className="mt-10 flex flex-col gap-4 border-t border-slate-200/80 pt-7 sm:flex-row sm:items-center sm:justify-between">

      <div className="flex items-center gap-3">

        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600">

          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M12 3 4 7v5c0 5 3.5 8 8 9 4.5-1 8-4 8-9V7l-8-4Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>

        </span>

        <span className="text-xs font-medium text-slate-500 sm:text-sm">
          Thoughtful strategy. Refined design. Reliable technology.
        </span>

      </div>


      <div className="flex items-center gap-2">

        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

        <span className="text-xs font-medium text-slate-400">
          Built for modern businesses
        </span>

      </div>

    </div>

  </div>

</section>

{/* ============================================================
    END — WHAT WE DO SECTION
============================================================ */}



      {/* ============================================================
    PREMIUM SHOWCASE SECTION
============================================================ */}

<section className="relative overflow-hidden bg-[#060B21] py-20 text-white sm:py-24 lg:py-28">

  {/* Background Glow */}
  <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[140px]" />

  <div className="pointer-events-none absolute -bottom-40 right-[-100px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />

  {/* Subtle Background Grid */}
  <div
    className="pointer-events-none absolute inset-0 opacity-[0.035]"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
      backgroundSize: "60px 60px",
    }}
  />

  <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">

    <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">

      {/* ======================================================
          LEFT CONTENT
      ======================================================= */}

      <div className="max-w-2xl">

        {/* Rating */}
        <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2">

          <div className="flex items-center gap-0.5 text-yellow-400">
            <span className="text-lg">★</span>
            <span className="text-lg">★</span>
            <span className="text-lg">★</span>
            <span className="text-lg">★</span>
            <span className="text-lg">★</span>
          </div>

          <span className="text-sm font-medium text-white/80 sm:text-base">
            Trusted by Growing Businesses
          </span>

          <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />

          <span className="text-sm font-medium text-blue-300 sm:text-base">
            98% Client Satisfaction
          </span>

        </div>


        {/* Main Heading */}
        <h2 className="max-w-[720px] text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-[52px] xl:text-[60px]">

          Digital Experiences That Turn Ideas Into{" "}

          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Growth
          </span>

        </h2>


        {/* Description */}
        <p className="mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">

          We design and develop premium, high-performance websites and
          digital solutions that blend exceptional UI/UX, powerful
          technology, and seamless functionality.

        </p>


        {/* What We Build */}
        <div className="mt-8">

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
            What We Build
          </p>

          <div className="grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">

            {/* Item 1 */}
            <div className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/10">

              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-blue-400">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="4" width="18" height="14" rx="2" />
                  <path d="M8 21h8" />
                  <path d="M12 18v3" />
                </svg>
              </div>

              <span className="text-sm font-medium text-white/85">
                Business Websites
              </span>

            </div>


            {/* Item 2 */}
            <div className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/10">

              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-blue-400">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M6 4h12l1 4H5l1-4Z" />
                  <path d="M5 8h14l-1 12H6L5 8Z" />
                  <path d="M9 12h6" />
                </svg>
              </div>

              <span className="text-sm font-medium text-white/85">
                E-commerce Experiences
              </span>

            </div>


            {/* Item 3 */}
            <div className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/10">

              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-blue-400">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="M8 8h8" />
                  <path d="M8 12h5" />
                  <path d="M8 16h3" />
                </svg>
              </div>

              <span className="text-sm font-medium text-white/85">
                Web Applications
              </span>

            </div>


            {/* Item 4 */}
            <div className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/10">

              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-blue-400">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M12 3v18" />
                  <path d="M3 12h18" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>

              <span className="text-sm font-medium text-white/85">
                Custom Digital Solutions
              </span>

            </div>

          </div>

        </div>


        {/* CTA */}
        <div className="mt-9">

          <a
            href="/portfolio"
            className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-7 py-4 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(37,99,235,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(37,99,235,0.4)]"
          >

            Explore Our Work

            <svg
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>

          </a>

        </div>


        {/* Bottom Statement */}
        <p className="mt-8 border-l-2 border-blue-500/50 pl-4 text-sm italic leading-6 text-white/45">
          Built with purpose. Designed for impact. Engineered for growth.
        </p>

      </div>


      {/* ======================================================
          RIGHT — DESKTOP IMAGE MARQUEE
      ======================================================= */}

      <div className="relative hidden h-[680px] lg:block">

        {/* Top Fade */}
        <div className="pointer-events-none absolute left-0 right-0 top-0 z-30 h-28 bg-gradient-to-b from-[#060B21] to-transparent" />

        {/* Bottom Fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-30 h-28 bg-gradient-to-t from-[#060B21] to-transparent" />


        {/* Center Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />


        {/* Two Columns */}
        <div className="relative z-10 grid h-full grid-cols-2 gap-5 xl:gap-6">


          {/* ================================================
              COLUMN 1 — MOVES UP
          ================================================= */}

          <div className="showcase-column overflow-hidden">

            <div className="showcase-track showcase-up">

              {/* First Set */}
              <div className="flex flex-col gap-5">

                <img
                  src="/showcase/img1.jpg"
                  alt="WebQenzo website showcase 1"
                  className="showcase-image"
                />

                <img
                  src="/showcase/img2.jpg"
                  alt="WebQenzo website showcase 2"
                  className="showcase-image"
                />

                <img
                  src="/showcase/img3.jpg"
                  alt="WebQenzo website showcase 3"
                  className="showcase-image"
                />

                <img
                  src="/showcase/img4.jpg"
                  alt="WebQenzo website showcase 4"
                  className="showcase-image"
                />

                <img
                  src="/showcase/img5.jpg"
                  alt="WebQenzo website showcase 5"
                  className="showcase-image"
                />

              </div>


              {/* Duplicate Set */}
              <div className="flex flex-col gap-5">

                <img
                  src="/showcase/img1.jpg"
                  alt="WebQenzo website showcase 1"
                  className="showcase-image"
                />

                <img
                  src="/showcase/img2.jpg"
                  alt="WebQenzo website showcase 2"
                  className="showcase-image"
                />

                <img
                  src="/showcase/img3.jpg"
                  alt="WebQenzo website showcase 3"
                  className="showcase-image"
                />

                <img
                  src="/showcase/img4.jpg"
                  alt="WebQenzo website showcase 4"
                  className="showcase-image"
                />

                <img
                  src="/showcase/img5.jpg"
                  alt="WebQenzo website showcase 5"
                  className="showcase-image"
                />

              </div>

            </div>

          </div>


          {/* ================================================
              COLUMN 2 — MOVES DOWN
          ================================================= */}

          <div className="showcase-column overflow-hidden">

            <div className="showcase-track showcase-down">

              {/* First Set */}
              <div className="flex flex-col gap-5">

                <img
                  src="/showcase/img6.jpg"
                  alt="WebQenzo website showcase 6"
                  className="showcase-image"
                />

                <img
                  src="/showcase/img7.jpg"
                  alt="WebQenzo website showcase 7"
                  className="showcase-image"
                />

                <img
                  src="/showcase/img8.jpg"
                  alt="WebQenzo website showcase 8"
                  className="showcase-image"
                />

                <img
                  src="/showcase/img9.jpg"
                  alt="WebQenzo website showcase 9"
                  className="showcase-image"
                />

                <img
                  src="/showcase/img10.jpg"
                  alt="WebQenzo website showcase 10"
                  className="showcase-image"
                />

              </div>


              {/* Duplicate Set */}
              <div className="flex flex-col gap-5">

                <img
                  src="/showcase/img6.jpg"
                  alt="WebQenzo website showcase 6"
                  className="showcase-image"
                />

                <img
                  src="/showcase/img7.jpg"
                  alt="WebQenzo website showcase 7"
                  className="showcase-image"
                />

                <img
                  src="/showcase/img8.jpg"
                  alt="WebQenzo website showcase 8"
                  className="showcase-image"
                />

                <img
                  src="/showcase/img9.jpg"
                  alt="WebQenzo website showcase 9"
                  className="showcase-image"
                />

                <img
                  src="/showcase/img10.jpg"
                  alt="WebQenzo website showcase 10"
                  className="showcase-image"
                />

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ======================================================
          MOBILE IMAGE MARQUEE
      ======================================================= */}

      <div className="relative block w-full overflow-hidden lg:hidden">

        {/* LEFT FADE */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-16 bg-gradient-to-r from-[#060B21] to-transparent" />

        {/* RIGHT FADE */}
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-16 bg-gradient-to-l from-[#060B21] to-transparent" />


        {/* =======================
            MOBILE ROW 1
            LEFT → RIGHT
        ======================== */}

        <div className="showcase-mobile-window">

          <div className="showcase-mobile-track showcase-mobile-left">

            {/* Set 1 */}
            <div className="flex gap-4">

              <img
                src="/showcase/img1.jpg"
                alt="WebQenzo showcase 1"
                className="showcase-mobile-image"
              />

              <img
                src="/showcase/img2.jpg"
                alt="WebQenzo showcase 2"
                className="showcase-mobile-image"
              />

              <img
                src="/showcase/img3.jpg"
                alt="WebQenzo showcase 3"
                className="showcase-mobile-image"
              />

              <img
                src="/showcase/img4.jpg"
                alt="WebQenzo showcase 4"
                className="showcase-mobile-image"
              />

              <img
                src="/showcase/img5.jpg"
                alt="WebQenzo showcase 5"
                className="showcase-mobile-image"
              />

            </div>


            {/* Duplicate */}
            <div className="flex gap-4">

              <img
                src="/showcase/img1.jpg"
                alt="WebQenzo showcase 1"
                className="showcase-mobile-image"
              />

              <img
                src="/showcase/img2.jpg"
                alt="WebQenzo showcase 2"
                className="showcase-mobile-image"
              />

              <img
                src="/showcase/img3.jpg"
                alt="WebQenzo showcase 3"
                className="showcase-mobile-image"
              />

              <img
                src="/showcase/img4.jpg"
                alt="WebQenzo showcase 4"
                className="showcase-mobile-image"
              />

              <img
                src="/showcase/img5.jpg"
                alt="WebQenzo showcase 5"
                className="showcase-mobile-image"
              />

            </div>

          </div>

        </div>


        {/* =======================
            MOBILE ROW 2
            RIGHT → LEFT
        ======================== */}

        <div className="showcase-mobile-window mt-5">

          <div className="showcase-mobile-track showcase-mobile-right">

            {/* Set 1 */}
            <div className="flex gap-4">

              <img
                src="/showcase/img6.jpg"
                alt="WebQenzo showcase 6"
                className="showcase-mobile-image"
              />

              <img
                src="/showcase/img7.jpg"
                alt="WebQenzo showcase 7"
                className="showcase-mobile-image"
              />

              <img
                src="/showcase/img8.jpg"
                alt="WebQenzo showcase 8"
                className="showcase-mobile-image"
              />

              <img
                src="/showcase/img9.jpg"
                alt="WebQenzo showcase 9"
                className="showcase-mobile-image"
              />

              <img
                src="/showcase/img10.jpg"
                alt="WebQenzo showcase 10"
                className="showcase-mobile-image"
              />

            </div>


            {/* Duplicate */}
            <div className="flex gap-4">

              <img
                src="/showcase/img6.jpg"
                alt="WebQenzo showcase 6"
                className="showcase-mobile-image"
              />

              <img
                src="/showcase/img7.jpg"
                alt="WebQenzo showcase 7"
                className="showcase-mobile-image"
              />

              <img
                src="/showcase/img8.jpg"
                alt="WebQenzo showcase 8"
                className="showcase-mobile-image"
              />

              <img
                src="/showcase/img9.jpg"
                alt="WebQenzo showcase 9"
                className="showcase-mobile-image"
              />

              <img
                src="/showcase/img10.jpg"
                alt="WebQenzo showcase 10"
                className="showcase-mobile-image"
              />

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>


  {/* ============================================================
      ANIMATION CSS
  ============================================================ */}

  <style>{`

    /* ==========================================================
       DESKTOP
    ========================================================== */

    .showcase-column {
      position: relative;
      height: 100%;
    }

    .showcase-track {
      display: flex;
      flex-direction: column;
      gap: 20px;
      will-change: transform;
    }

    .showcase-image {
      width: 100%;
      height: 220px;
      flex-shrink: 0;
      display: block;
      object-fit: cover;
      border-radius: 18px;
      border: 1px solid rgba(255,255,255,0.10);
      box-shadow:
        0 20px 50px rgba(0,0,0,0.25);
      transition:
        transform 0.5s ease,
        border-color 0.5s ease,
        box-shadow 0.5s ease;
    }

    .showcase-image:hover {
      transform: scale(1.025);
      border-color: rgba(96,165,250,0.4);
      box-shadow:
        0 25px 60px rgba(0,0,0,0.4);
    }


    /* LEFT COLUMN — UP */

    .showcase-up {
      animation: showcaseUp 32s linear infinite;
    }

    @keyframes showcaseUp {

      0% {
        transform: translateY(0);
      }

      100% {
        transform: translateY(calc(-50% - 10px));
      }

    }


    /* RIGHT COLUMN — DOWN */

    .showcase-down {
      animation: showcaseDown 36s linear infinite;
    }

    @keyframes showcaseDown {

      0% {
        transform: translateY(calc(-50% - 10px));
      }

      100% {
        transform: translateY(0);
      }

    }


    /* ==========================================================
       MOBILE
    ========================================================== */

    .showcase-mobile-window {
      width: 100%;
      overflow: hidden;
    }

    .showcase-mobile-track {
      display: flex;
      width: max-content;
      gap: 16px;
      will-change: transform;
    }

    .showcase-mobile-image {
      width: 270px;
      height: 190px;
      flex-shrink: 0;
      display: block;
      object-fit: cover;
      border-radius: 16px;
      border: 1px solid rgba(255,255,255,0.10);
      box-shadow:
        0 15px 40px rgba(0,0,0,0.3);
    }


    /* Mobile Row 1 */

    .showcase-mobile-left {
      animation: showcaseMobileLeft 28s linear infinite;
    }

    @keyframes showcaseMobileLeft {

      0% {
        transform: translateX(0);
      }

      100% {
        transform: translateX(calc(-50% - 8px));
      }

    }


    /* Mobile Row 2 */

    .showcase-mobile-right {
      animation: showcaseMobileRight 30s linear infinite;
    }

    @keyframes showcaseMobileRight {

      0% {
        transform: translateX(calc(-50% - 8px));
      }

      100% {
        transform: translateX(0);
      }

    }


    /* ==========================================================
       HOVER PAUSE
    ========================================================== */

    .showcase-track:hover,
    .showcase-mobile-track:hover {
      animation-play-state: paused;
    }


    /* ==========================================================
       REDUCED MOTION
    ========================================================== */

    @media (prefers-reduced-motion: reduce) {

      .showcase-up,
      .showcase-down,
      .showcase-mobile-left,
      .showcase-mobile-right {
        animation: none;
      }

    }


    /* ==========================================================
       TABLET / SMALL LAPTOP
    ========================================================== */

    @media (min-width: 1024px) and (max-width: 1200px) {

      .showcase-image {
        height: 190px;
      }

    }


    /* ==========================================================
       MOBILE
    ========================================================== */

    @media (max-width: 640px) {

      .showcase-mobile-image {
        width: 250px;
        height: 175px;
      }

    }


    /* ==========================================================
       SMALL PHONES
    ========================================================== */

    @media (max-width: 400px) {

      .showcase-mobile-image {
        width: 220px;
        height: 155px;
      }

    }

  `}</style>

</section>




{/* ============================================================
    WEBQENZO — SIMPLE PROCESS / POWERFUL RESULTS SECTION
    Paste this section directly inside Home.jsx
============================================================ */}

<section className="relative overflow-hidden bg-[#F3F7FC] py-20 sm:py-24 lg:py-28">

  {/* ==========================================================
      BACKGROUND DECORATION
  =========================================================== */}

  <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-200/30 blur-[120px]" />

  <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-200/20 blur-[130px]" />

  {/* Main Container */}
  <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10 xl:px-14">

    <div className="grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16 xl:gap-20">

      {/* ======================================================
          LEFT SIDE
      ======================================================= */}

      <div className="max-w-[650px]">

        {/* Small Label */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">

          <span className="h-2 w-2 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.6)]" />

          <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
            Our Process
          </span>

        </div>


        {/* Heading */}
        <h2 className="max-w-[620px] text-4xl font-bold leading-[1.06] tracking-[-0.045em] text-[#081B33] sm:text-5xl lg:text-[52px] xl:text-[60px]">

          Simple process.

          <br />

          <span className="bg-gradient-to-r from-[#0EA5E9] via-[#1683F8] to-[#2563EB] bg-clip-text text-transparent">
            Powerful results.
          </span>

        </h2>


        {/* Description */}
        <p className="mt-6 max-w-[590px] text-base leading-7 text-[#52657D] sm:text-lg sm:leading-8">

          From strategy to launch, we handle the complete digital
          journey for your business. You bring the vision — we turn
          it into a professional digital experience.

        </p>


        {/* ======================================================
            PROCESS STEPS
        ======================================================= */}

        <div className="relative mt-9">

          {/* Vertical Line */}
          <div className="absolute left-[19px] top-7 h-[calc(100%-55px)] w-px bg-gradient-to-b from-blue-300 via-blue-200 to-transparent" />


          {/* STEP 01 */}
          <div className="group relative flex gap-5 pb-7">

            {/* Icon */}
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 text-white shadow-[0_8px_20px_rgba(16,185,129,0.25)] transition duration-300 group-hover:scale-110">

              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.4L21 7H6" />
                <circle cx="10" cy="20" r="1.5" />
                <circle cx="18" cy="20" r="1.5" />
              </svg>

            </div>


            {/* Content */}
            <div className="pt-0.5">

              <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
                Step 01
              </p>

              <h3 className="mt-1 text-lg font-bold text-[#0B1F3A] sm:text-xl">
                Tell us about your business
              </h3>

              <p className="mt-1.5 max-w-[510px] text-sm leading-6 text-[#61738A] sm:text-base">
                Share your goals, requirements, and vision with our team.
              </p>

            </div>

          </div>


          {/* STEP 02 */}
          <div className="group relative flex gap-5 pb-7">

            {/* Icon */}
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-[0_8px_20px_rgba(37,99,235,0.25)] transition duration-300 group-hover:scale-110">

              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
                <circle cx="8" cy="5" r="1.5" fill="currentColor" />
                <circle cx="16" cy="12" r="1.5" fill="currentColor" />
                <circle cx="10" cy="19" r="1.5" fill="currentColor" />
              </svg>

            </div>


            {/* Content */}
            <div className="pt-0.5">

              <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
                Step 02
              </p>

              <h3 className="mt-1 text-lg font-bold text-[#0B1F3A] sm:text-xl">
                We design &amp; build
              </h3>

              <p className="mt-1.5 max-w-[510px] text-sm leading-6 text-[#61738A] sm:text-base">
                We create a modern, responsive website tailored to your brand and customers.
              </p>

            </div>

          </div>


          {/* STEP 03 */}
          <div className="group relative flex gap-5">

            {/* Icon */}
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-[0_8px_20px_rgba(14,165,233,0.25)] transition duration-300 group-hover:scale-110">

              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>

            </div>


            {/* Content */}
            <div className="pt-0.5">

              <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
                Step 03
              </p>

              <h3 className="mt-1 text-lg font-bold text-[#0B1F3A] sm:text-xl">
                Launch with confidence
              </h3>

              <p className="mt-1.5 max-w-[510px] text-sm leading-6 text-[#61738A] sm:text-base">
                We test, optimize, and deliver a polished digital experience ready for your audience.
              </p>

            </div>

          </div>

        </div>


        {/* ======================================================
            CTA + TRUST
        ======================================================= */}

        <div className="mt-9 flex flex-col gap-6 sm:flex-row sm:items-center">

          {/* CTA */}
          <a
            href="/get-quote"
            className="group inline-flex w-fit items-center gap-3 rounded-xl bg-gradient-to-r from-[#1478F2] to-[#2563EB] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(37,99,235,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(37,99,235,0.35)]"
          >

            Start Your Project

            <svg
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>

          </a>


          {/* Trust */}
          <div className="flex items-center gap-3">

            {/* Avatar circles */}
            <div className="flex -space-x-2">

              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#F3F7FC] bg-gradient-to-br from-slate-300 to-slate-500 text-xs font-bold text-white">
                W
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#F3F7FC] bg-gradient-to-br from-blue-300 to-blue-600 text-xs font-bold text-white">
                Q
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#F3F7FC] bg-gradient-to-br from-cyan-300 to-cyan-600 text-xs font-bold text-white">
                Z
              </div>

            </div>


            <div>

              <p className="text-sm font-semibold text-[#40536B]">
                Trusted by growing businesses
              </p>

              <p className="text-xs text-[#7A8A9E]">
                Building brands. Creating digital experiences.

              </p>

            </div>

          </div>

        </div>

      </div>


      {/* ======================================================
          RIGHT SIDE — FEATURE CARDS
      ======================================================= */}

      <div className="grid gap-5 sm:grid-cols-2">

        {/* ====================================================
            CARD 01 — PERFORMANCE
        ===================================================== */}

        <div className="group relative overflow-hidden rounded-[26px] border border-[#D7E1EE] bg-white/90 p-6 shadow-[0_20px_60px_rgba(30,64,175,0.10)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(30,64,175,0.16)] sm:p-7">

          {/* Card Glow */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-200/30 blur-3xl transition duration-500 group-hover:bg-emerald-200/50" />


          <div className="relative">

            {/* Top */}
            <div className="flex items-start justify-between gap-4">

              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-500 text-white shadow-[0_10px_25px_rgba(16,185,129,0.22)]">

                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z" />
                </svg>

              </div>


              {/* Badge */}
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                Performance
              </span>

            </div>


            {/* Title */}
            <h3 className="mt-6 text-xl font-bold tracking-tight text-[#0A1D35] sm:text-[22px]">
              Built for performance
            </h3>


            {/* Description */}
            <p className="mt-3 text-sm leading-6 text-[#63758C]">
              Fast, responsive, and carefully developed websites designed to give your customers a smooth experience.
            </p>


            {/* Performance Visual */}
            <div className="mt-7 flex items-center gap-5">

              {/* Circle */}
              <div className="relative flex h-[108px] w-[108px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 p-[5px]">

                <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-white">

                  <span className="text-3xl font-bold text-[#102849]">
                    98
                  </span>

                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8190A3]">
                    Score
                  </span>

                </div>

              </div>


              {/* Metrics */}
              <div className="space-y-2">

                <p className="text-sm font-bold text-emerald-500">
                  Excellent Performance
                </p>

                <p className="text-sm font-semibold text-cyan-500">
                  Fast Loading
                </p>

                <p className="text-sm font-semibold text-blue-500">
                  Optimized UX
                </p>

              </div>

            </div>


            {/* Bottom */}
            <div className="mt-7 rounded-xl border border-emerald-100 bg-emerald-50/70 px-4 py-3">

              <div className="flex items-center gap-2">

                <svg
                  className="h-4 w-4 text-emerald-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="m20 6-11 11-5-5" />
                </svg>

                <span className="text-xs font-semibold text-emerald-700">
                  Built for speed &amp; scalability
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* ====================================================
            CARD 02 — EXPERIENCE
        ===================================================== */}

        <div className="group relative overflow-hidden rounded-[26px] border border-[#D7E1EE] bg-white/90 p-6 shadow-[0_20px_60px_rgba(30,64,175,0.10)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(30,64,175,0.16)] sm:p-7">

          {/* Card Glow */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-200/30 blur-3xl transition duration-500 group-hover:bg-violet-200/50" />


          <div className="relative">

            {/* Top */}
            <div className="flex items-start justify-between gap-4">

              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-[0_10px_25px_rgba(139,92,246,0.25)]">

                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="7" y="2" width="10" height="20" rx="2" />
                  <path d="M11 18h2" />
                </svg>

              </div>


              {/* Badge */}
              <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-violet-600">
                Experience
              </span>

            </div>


            {/* Title */}
            <h3 className="mt-6 text-xl font-bold tracking-tight text-[#0A1D35] sm:text-[22px]">
              Designed for your customers
            </h3>


            {/* Description */}
            <p className="mt-3 text-sm leading-6 text-[#63758C]">
              Every WebQenzo website combines modern design with simple navigation to create an experience people enjoy using.
            </p>


            {/* Features */}
            <div className="mt-7 space-y-4">

              {/* Feature 1 */}
              <div className="flex items-center gap-3">

                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-600">

                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path d="m5 12 4 4L19 6" />
                  </svg>

                </span>

                <span className="text-sm font-medium text-[#53667E]">
                  Mobile-first experience
                </span>

              </div>


              {/* Feature 2 */}
              <div className="flex items-center gap-3">

                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-600">

                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path d="m5 12 4 4L19 6" />
                  </svg>

                </span>

                <span className="text-sm font-medium text-[#53667E]">
                  Clear &amp; intuitive navigation
                </span>

              </div>


              {/* Feature 3 */}
              <div className="flex items-center gap-3">

                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-600">

                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path d="m5 12 4 4L19 6" />
                  </svg>

                </span>

                <span className="text-sm font-medium text-[#53667E]">
                  Conversion-focused layouts
                </span>

              </div>


              {/* Feature 4 */}
              <div className="flex items-center gap-3">

                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-600">

                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path d="m5 12 4 4L19 6" />
                  </svg>

                </span>

                <span className="text-sm font-medium text-[#53667E]">
                  Modern visual design
                </span>

              </div>

            </div>


            {/* Bottom */}
            <div className="mt-7 rounded-xl border border-violet-100 bg-violet-50/70 px-4 py-3">

              <div className="flex items-center gap-2">

                <svg
                  className="h-4 w-4 text-violet-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="m20 6-11 11-5-5" />
                </svg>

                <span className="text-xs font-semibold text-violet-700">
                  Made for modern customers
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

{/* ============================================================
    END — WEBQENZO SIMPLE PROCESS SECTION
============================================================ */}

{/* ============================================================
    WHY CHOOSE WEBQENZO
============================================================ */}

<section className="relative overflow-hidden bg-[#060B21] py-20 text-white sm:py-24 lg:py-28">

  {/* Background Glow */}
  <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[130px]" />

  <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

  {/* Subtle Grid */}
  <div
    className="pointer-events-none absolute inset-0 opacity-[0.025]"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
      backgroundSize: "60px 60px",
    }}
  />

  <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">

    {/* ========================================================
        SECTION HEADER
    ========================================================= */}

    <div className="mb-12 grid gap-6 lg:mb-14 lg:grid-cols-[1fr_auto] lg:items-end">

      {/* Left */}
      <div>

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
          Why Choose WebQenzo
        </p>

        <h2 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-[56px]">
          Built for{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Unmatched Quality
          </span>
        </h2>

      </div>


      {/* Right */}
      <p className="max-w-xl text-base leading-7 text-white/55 lg:pb-2 lg:text-right">
        Designed following the highest standards, we build digital
        experiences that maximize your brand's impact, performance,
        and growth.
      </p>

    </div>


    {/* ========================================================
        FEATURE GRID
    ========================================================= */}

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">


      {/* ======================================================
          CARD 1
      ======================================================= */}

      <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.07] hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]">

        {/* Hover Glow */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/10 blur-3xl transition duration-500 group-hover:bg-blue-500/20" />

        {/* Icon */}
        <div className="relative mb-8 flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-500/10 text-blue-400 transition duration-300 group-hover:scale-105 group-hover:bg-blue-500/15">

          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <rect x="3" y="4" width="18" height="14" rx="2" />
            <path d="M8 21h8" />
            <path d="M12 18v3" />
          </svg>

        </div>

        <h3 className="relative text-lg font-semibold text-white">
          User-Friendly Design
        </h3>

        <p className="relative mt-3 text-sm leading-6 text-white/55">
          Beautiful interfaces built around your users, making navigation
          intuitive while creating a smooth and engaging experience.
        </p>

      </div>


      {/* ======================================================
          CARD 2
      ======================================================= */}

      <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.07] hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]">

        <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-500/10 blur-3xl transition duration-500 group-hover:bg-cyan-500/20" />

        <div className="relative mb-8 flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-500/10 text-blue-400 transition duration-300 group-hover:scale-105 group-hover:bg-blue-500/15">

          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <rect x="3" y="5" width="14" height="14" rx="2" />
            <rect x="17" y="8" width="4" height="8" rx="1" />
            <path d="M7 9h6" />
            <path d="M7 13h4" />
          </svg>

        </div>

        <h3 className="relative text-lg font-semibold text-white">
          Responsive & Mobile-Optimized
        </h3>

        <p className="relative mt-3 text-sm leading-6 text-white/55">
          Seamless experiences across desktops, tablets, and smartphones,
          built to look and perform beautifully on every screen.
        </p>

      </div>


      {/* ======================================================
          CARD 3
      ======================================================= */}

      <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.07] hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]">

        <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/10 blur-3xl transition duration-500 group-hover:bg-blue-500/20" />

        <div className="relative mb-8 flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-500/10 text-blue-400 transition duration-300 group-hover:scale-105 group-hover:bg-blue-500/15">

          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <rect x="4" y="4" width="6" height="6" rx="1.5" />
            <rect x="14" y="4" width="6" height="6" rx="1.5" />
            <rect x="4" y="14" width="6" height="6" rx="1.5" />
            <rect x="14" y="14" width="6" height="6" rx="1.5" />
          </svg>

        </div>

        <h3 className="relative text-lg font-semibold text-white">
          Custom Solutions
        </h3>

        <p className="relative mt-3 text-sm leading-6 text-white/55">
          Flexible features and custom-built solutions designed around
          your brand, business goals, and unique requirements.
        </p>

      </div>


      {/* ======================================================
          CARD 4
      ======================================================= */}

      <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.07] hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]">

        <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-500/10 blur-3xl transition duration-500 group-hover:bg-cyan-500/20" />

        <div className="relative mb-8 flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-500/10 text-blue-400 transition duration-300 group-hover:scale-105 group-hover:bg-blue-500/15">

          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M13 2 3 14h8l-1 8 11-14h-8l0-6Z" />
          </svg>

        </div>

        <h3 className="relative text-lg font-semibold text-white">
          Fast Loading Times
        </h3>

        <p className="relative mt-3 text-sm leading-6 text-white/55">
          Performance-focused development keeps your website fast,
          responsive, and ready to deliver better user experiences.
        </p>

      </div>


      {/* ======================================================
          CARD 5
      ======================================================= */}

      <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.07] hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]">

        <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/10 blur-3xl transition duration-500 group-hover:bg-blue-500/20" />

        <div className="relative mb-8 flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-500/10 text-blue-400 transition duration-300 group-hover:scale-105 group-hover:bg-blue-500/15">

          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <rect x="5" y="5" width="10" height="10" rx="2" />
            <path d="M9 15v4" />
            <path d="M15 9h4" />
            <path d="m15 5 4 4-4 4" />
            <path d="m9 19-4-4 4-4" />
          </svg>

        </div>

        <h3 className="relative text-lg font-semibold text-white">
          Continuous Improvements
        </h3>

        <p className="relative mt-3 text-sm leading-6 text-white/55">
          We continuously refine and improve your digital product to
          keep it secure, modern, efficient, and competitive.
        </p>

      </div>


      {/* ======================================================
          CARD 6
      ======================================================= */}

      <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.07] hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]">

        <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-500/10 blur-3xl transition duration-500 group-hover:bg-cyan-500/20" />

        <div className="relative mb-8 flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-500/10 text-blue-400 transition duration-300 group-hover:scale-105 group-hover:bg-blue-500/15">

          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="12" cy="12" r="8" />
            <path d="M4 12h16" />
            <path d="M12 4c2.2 2.2 3.3 4.9 3.3 8S14.2 17.8 12 20" />
            <path d="M12 4c-2.2 2.2-3.3 4.9-3.3 8S9.8 17.8 12 20" />
          </svg>

        </div>

        <h3 className="relative text-lg font-semibold text-white">
          Cross-Browser Compatibility
        </h3>

        <p className="relative mt-3 text-sm leading-6 text-white/55">
          Your website is carefully tested to provide a consistent and
          reliable experience across modern browsers and devices.
        </p>

      </div>


      {/* ======================================================
          CARD 7
      ======================================================= */}

      <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.07] hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]">

        <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/10 blur-3xl transition duration-500 group-hover:bg-blue-500/20" />

        <div className="relative mb-8 flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-500/10 text-blue-400 transition duration-300 group-hover:scale-105 group-hover:bg-blue-500/15">

          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M12 3a9 9 0 1 0 9 9" />
            <path d="M12 7v5l3 2" />
            <path d="M16 3h5v5" />
            <path d="m21 3-5 5" />
          </svg>

        </div>

        <h3 className="relative text-lg font-semibold text-white">
          Easy to Scale
        </h3>

        <p className="relative mt-3 text-sm leading-6 text-white/55">
          Our solutions are built with a scalable foundation so your
          digital presence can grow alongside your business.
        </p>

      </div>


      {/* ======================================================
          CARD 8
      ======================================================= */}

      <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/[0.07] hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]">

        <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-500/10 blur-3xl transition duration-500 group-hover:bg-cyan-500/20" />

        <div className="relative mb-8 flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-500/10 text-blue-400 transition duration-300 group-hover:scale-105 group-hover:bg-blue-500/15">

          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M20 12a8 8 0 0 1-8 8H6l-3 2 1-4a8 8 0 1 1 16-6Z" />
            <path d="M8 12h.01" />
            <path d="M12 12h.01" />
            <path d="M16 12h.01" />
          </svg>

        </div>

        <h3 className="relative text-lg font-semibold text-white">
          Reliable Support
        </h3>

        <p className="relative mt-3 text-sm leading-6 text-white/55">
          From launch to long-term growth, we're here to help with
          guidance, improvements, questions, and technical support.
        </p>

      </div>

    </div>

  </div>

</section>







{/* ============================================================
    CUSTOMER STORIES
============================================================ */}

<section className="relative overflow-hidden bg-[#F7F9FC] py-20 sm:py-24 lg:py-28">

  {/* Soft Background Glow */}
  <div className="pointer-events-none absolute left-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-blue-100/70 blur-[120px]" />

  <div className="pointer-events-none absolute bottom-[-180px] right-[-100px] h-[420px] w-[420px] rounded-full bg-cyan-100/60 blur-[120px]" />


  <div className="relative">

    {/* ========================================================
        SECTION HEADER
    ========================================================= */}

    <div className="mx-auto max-w-[900px] px-5 text-center sm:px-8">

      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-blue-600 sm:text-sm">
        Customer Stories
      </p>

      <h2 className="text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#07152F] sm:text-5xl lg:text-[58px]">
        What{" "}
        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          Clients
        </span>{" "}
        Are Saying.
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#526078] sm:text-lg sm:leading-8">
        See how growing businesses are using WebQenzo to build better
        digital experiences, improve their online presence, and grow
        with confidence.
      </p>

    </div>


    {/* ========================================================
        MARQUEE
    ========================================================= */}

    <div className="customer-marquee-wrapper mt-14">

      <div className="customer-marquee-track">

        {/* ======================================================
            SET 1
        ======================================================= */}

        <div className="customer-card-group">


          {/* CARD 1 */}
          <article className="customer-story-card">

            <div className="customer-card-top">

              <div className="customer-avatar">
                AK
              </div>

              <div>
                <h3 className="customer-name">
                  Aarav Khanna
                </h3>

                <p className="customer-category">
                  Clothing & Fashion
                </p>
              </div>

            </div>

            <div className="customer-stars">
              ★★★★★
            </div>

            <p className="customer-review">
              WebQenzo completely changed the way our brand looks online.
              The website feels premium, clean and our customers are
              finding products much more easily now.
            </p>

          </article>


          {/* CARD 2 */}
          <article className="customer-story-card">

            <div className="customer-card-top">

              <div className="customer-avatar">
                PS
              </div>

              <div>
                <h3 className="customer-name">
                  Priya Sharma
                </h3>

                <p className="customer-category">
                  Beauty & Cosmetics
                </p>
              </div>

            </div>

            <div className="customer-stars">
              ★★★★★
            </div>

            <p className="customer-review">
              We wanted something elegant without making the website
              complicated. The final experience feels smooth, modern and
              perfectly matches our brand.
            </p>

          </article>


          {/* CARD 3 */}
          <article className="customer-story-card">

            <div className="customer-card-top">

              <div className="customer-avatar">
                RM
              </div>

              <div>
                <h3 className="customer-name">
                  Rohan Mehta
                </h3>

                <p className="customer-category">
                  Home & Furniture
                </p>
              </div>

            </div>

            <div className="customer-stars">
              ★★★★★
            </div>

            <p className="customer-review">
              The biggest improvement for us was the overall user
              experience. Customers can browse our collections much
              more comfortably, especially on mobile.
            </p>

          </article>


          {/* CARD 4 */}
          <article className="customer-story-card">

            <div className="customer-card-top">

              <div className="customer-avatar">
                NS
              </div>

              <div>
                <h3 className="customer-name">
                  Neha Singh
                </h3>

                <p className="customer-category">
                  Jewellery
                </p>
              </div>

            </div>

            <div className="customer-stars">
              ★★★★★
            </div>

            <p className="customer-review">
              I loved how much attention was given to small details.
              The product pages feel much more refined and the entire
              store looks more trustworthy.
            </p>

          </article>


          {/* CARD 5 */}
          <article className="customer-story-card">

            <div className="customer-card-top">

              <div className="customer-avatar">
                VK
              </div>

              <div>
                <h3 className="customer-name">
                  Vikram Kapoor
                </h3>

                <p className="customer-category">
                  Electronics
                </p>
              </div>

            </div>

            <div className="customer-stars">
              ★★★★★
            </div>

            <p className="customer-review">
              Our old website felt outdated and difficult to manage.
              The new experience is faster, cleaner and much easier
              for our team to maintain.
            </p>

          </article>


          {/* CARD 6 */}
          <article className="customer-story-card">

            <div className="customer-card-top">

              <div className="customer-avatar">
                AS
              </div>

              <div>
                <h3 className="customer-name">
                  Ananya Sharma
                </h3>

                <p className="customer-category">
                  Lifestyle
                </p>
              </div>

            </div>

            <div className="customer-stars">
              ★★★★★
            </div>

            <p className="customer-review">
              The website finally feels like our brand. Everything is
              simple, elegant and easy to navigate without losing the
              premium look we wanted.
            </p>

          </article>


          {/* CARD 7 */}
          <article className="customer-story-card">

            <div className="customer-card-top">

              <div className="customer-avatar">
                AK
              </div>

              <div>
                <h3 className="customer-name">
                  Aditya Kumar
                </h3>

                <p className="customer-category">
                  Fitness & Wellness
                </p>
              </div>

            </div>

            <div className="customer-stars">
              ★★★★★
            </div>

            <p className="customer-review">
              The website gives our business a much more professional
              presence. The mobile experience especially feels much
              smoother than our previous website.
            </p>

          </article>


          {/* CARD 8 */}
          <article className="customer-story-card">

            <div className="customer-card-top">

              <div className="customer-avatar">
                RG
              </div>

              <div>
                <h3 className="customer-name">
                  Riya Gupta
                </h3>

                <p className="customer-category">
                  Food & Beverage
                </p>
              </div>

            </div>

            <div className="customer-stars">
              ★★★★★
            </div>

            <p className="customer-review">
              We wanted a website that looked premium but was still
              practical for our customers. The final result feels
              balanced and easy to use.
            </p>

          </article>


          {/* CARD 9 */}
          <article className="customer-story-card">

            <div className="customer-card-top">

              <div className="customer-avatar">
                MS
              </div>

              <div>
                <h3 className="customer-name">
                  Manish Sharma
                </h3>

                <p className="customer-category">
                  Real Estate
                </p>
              </div>

            </div>

            <div className="customer-stars">
              ★★★★★
            </div>

            <p className="customer-review">
              The new website presents our projects much better.
              Visitors can understand what we offer quickly and the
              overall experience feels considerably more polished.
            </p>

          </article>


          {/* CARD 10 */}
          <article className="customer-story-card">

            <div className="customer-card-top">

              <div className="customer-avatar">
                SK
              </div>

              <div>
                <h3 className="customer-name">
                  Simran Kaur
                </h3>

                <p className="customer-category">
                  Fashion & Lifestyle
                </p>
              </div>

            </div>

            <div className="customer-stars">
              ★★★★★
            </div>

            <p className="customer-review">
              The design feels modern without being overdone. We had
              a few custom requirements and the final website matched
              our vision really well.
            </p>

          </article>

        </div>


        {/* ======================================================
            DUPLICATE SET — REQUIRED FOR INFINITE MARQUEE
        ======================================================= */}

        <div className="customer-card-group" aria-hidden="true">


          {/* CARD 1 */}
          <article className="customer-story-card">

            <div className="customer-card-top">

              <div className="customer-avatar">
                AK
              </div>

              <div>
                <h3 className="customer-name">
                  Aarav Khanna
                </h3>

                <p className="customer-category">
                  Clothing & Fashion
                </p>
              </div>

            </div>

            <div className="customer-stars">
              ★★★★★
            </div>

            <p className="customer-review">
              WebQenzo completely changed the way our brand looks online.
              The website feels premium, clean and our customers are
              finding products much more easily now.
            </p>

          </article>


          {/* CARD 2 */}
          <article className="customer-story-card">

            <div className="customer-card-top">

              <div className="customer-avatar">
                PS
              </div>

              <div>
                <h3 className="customer-name">
                  Priya Sharma
                </h3>

                <p className="customer-category">
                  Beauty & Cosmetics
                </p>
              </div>

            </div>

            <div className="customer-stars">
              ★★★★★
            </div>

            <p className="customer-review">
              We wanted something elegant without making the website
              complicated. The final experience feels smooth, modern and
              perfectly matches our brand.
            </p>

          </article>


          {/* CARD 3 */}
          <article className="customer-story-card">

            <div className="customer-card-top">

              <div className="customer-avatar">
                RM
              </div>

              <div>
                <h3 className="customer-name">
                  Rohan Mehta
                </h3>

                <p className="customer-category">
                  Home & Furniture
                </p>
              </div>

            </div>

            <div className="customer-stars">
              ★★★★★
            </div>

            <p className="customer-review">
              The biggest improvement for us was the overall user
              experience. Customers can browse our collections much
              more comfortably, especially on mobile.
            </p>

          </article>


          {/* CARD 4 */}
          <article className="customer-story-card">

            <div className="customer-card-top">

              <div className="customer-avatar">
                NS
              </div>

              <div>
                <h3 className="customer-name">
                  Neha Singh
                </h3>

                <p className="customer-category">
                  Jewellery
                </p>
              </div>

            </div>

            <div className="customer-stars">
              ★★★★★
            </div>

            <p className="customer-review">
              I loved how much attention was given to small details.
              The product pages feel much more refined and the entire
              store looks more trustworthy.
            </p>

          </article>


          {/* CARD 5 */}
          <article className="customer-story-card">

            <div className="customer-card-top">

              <div className="customer-avatar">
                VK
              </div>

              <div>
                <h3 className="customer-name">
                  Vikram Kapoor
                </h3>

                <p className="customer-category">
                  Electronics
                </p>
              </div>

            </div>

            <div className="customer-stars">
              ★★★★★
            </div>

            <p className="customer-review">
              Our old website felt outdated and difficult to manage.
              The new experience is faster, cleaner and much easier
              for our team to maintain.
            </p>

          </article>


          {/* CARD 6 */}
          <article className="customer-story-card">

            <div className="customer-card-top">

              <div className="customer-avatar">
                AS
              </div>

              <div>
                <h3 className="customer-name">
                  Ananya Sharma
                </h3>

                <p className="customer-category">
                  Lifestyle
                </p>
              </div>

            </div>

            <div className="customer-stars">
              ★★★★★
            </div>

            <p className="customer-review">
              The website finally feels like our brand. Everything is
              simple, elegant and easy to navigate without losing the
              premium look we wanted.
            </p>

          </article>


          {/* CARD 7 */}
          <article className="customer-story-card">

            <div className="customer-card-top">

              <div className="customer-avatar">
                AK
              </div>

              <div>
                <h3 className="customer-name">
                  Aditya Kumar
                </h3>

                <p className="customer-category">
                  Fitness & Wellness
                </p>
              </div>

            </div>

            <div className="customer-stars">
              ★★★★★
            </div>

            <p className="customer-review">
              The website gives our business a much more professional
              presence. The mobile experience especially feels much
              smoother than our previous website.
            </p>

          </article>


          {/* CARD 8 */}
          <article className="customer-story-card">

            <div className="customer-card-top">

              <div className="customer-avatar">
                RG
              </div>

              <div>
                <h3 className="customer-name">
                  Riya Gupta
                </h3>

                <p className="customer-category">
                  Food & Beverage
                </p>
              </div>

            </div>

            <div className="customer-stars">
              ★★★★★
            </div>

            <p className="customer-review">
              We wanted a website that looked premium but was still
              practical for our customers. The final result feels
              balanced and easy to use.
            </p>

          </article>


          {/* CARD 9 */}
          <article className="customer-story-card">

            <div className="customer-card-top">

              <div className="customer-avatar">
                MS
              </div>

              <div>
                <h3 className="customer-name">
                  Manish Sharma
                </h3>

                <p className="customer-category">
                  Real Estate
                </p>
              </div>

            </div>

            <div className="customer-stars">
              ★★★★★
            </div>

            <p className="customer-review">
              The new website presents our projects much better.
              Visitors can understand what we offer quickly and the
              overall experience feels considerably more polished.
            </p>

          </article>


          {/* CARD 10 */}
          <article className="customer-story-card">

            <div className="customer-card-top">

              <div className="customer-avatar">
                SK
              </div>

              <div>
                <h3 className="customer-name">
                  Simran Kaur
                </h3>

                <p className="customer-category">
                  Fashion & Lifestyle
                </p>
              </div>

            </div>

            <div className="customer-stars">
              ★★★★★
            </div>

            <p className="customer-review">
              The design feels modern without being overdone. We had
              a few custom requirements and the final website matched
              our vision really well.
            </p>

          </article>

        </div>

      </div>

    </div>


    {/* ========================================================
        BOTTOM TRUST LINE
    ========================================================= */}

    <div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-5 text-center text-sm text-[#68758A]">

      <span className="flex items-center gap-2">
        <span className="flex text-yellow-500">
          ★★★★★
        </span>
        Rated by Growing Businesses
      </span>

      <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />

      <span>
        Premium Design
      </span>

      <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />

      <span>
        Reliable Development
      </span>

    </div>

  </div>


  {/* ============================================================
      MARQUEE CSS
  ============================================================ */}

  <style>{`

    /* ==========================================================
       MARQUEE WRAPPER
    ========================================================== */

    .customer-marquee-wrapper {
      width: 100%;
      overflow: hidden;
      position: relative;
      padding: 10px 0 20px;
    }


    /* Fade edges */

    .customer-marquee-wrapper::before,
    .customer-marquee-wrapper::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100px;
      z-index: 10;
      pointer-events: none;
    }

    .customer-marquee-wrapper::before {
      left: 0;
      background: linear-gradient(
        to right,
        #F7F9FC,
        rgba(247,249,252,0)
      );
    }

    .customer-marquee-wrapper::after {
      right: 0;
      background: linear-gradient(
        to left,
        #F7F9FC,
        rgba(247,249,252,0)
      );
    }


    /* ==========================================================
       TRACK
    ========================================================== */

    .customer-marquee-track {
      display: flex;
      width: max-content;
      animation: customerStoriesScroll 65s linear infinite;
      will-change: transform;
    }


    .customer-card-group {
      display: flex;
      flex-shrink: 0;
      gap: 20px;
      padding-right: 20px;
    }


    /* ==========================================================
       CARD
    ========================================================== */

    .customer-story-card {
      width: 370px;
      min-height: 300px;
      flex-shrink: 0;

      border: 1px solid #E7EBF2;
      border-radius: 20px;

      background: #FFFFFF;

      padding: 26px;

      box-shadow:
        0 10px 35px rgba(15, 23, 42, 0.055);

      transition:
        transform 0.4s ease,
        box-shadow 0.4s ease,
        border-color 0.4s ease;
    }


    .customer-story-card:hover {
      transform: translateY(-6px);

      border-color: #C8D8F7;

      box-shadow:
        0 22px 55px rgba(15, 23, 42, 0.11);
    }


    /* ==========================================================
       CARD TOP
    ========================================================== */

    .customer-card-top {
      display: flex;
      align-items: center;
      gap: 13px;
    }


    /* ==========================================================
       AVATAR
    ========================================================== */

    .customer-avatar {
      width: 50px;
      height: 50px;

      flex-shrink: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50%;

      background:
        linear-gradient(
          135deg,
          #2563EB,
          #06B6D4
        );

      color: white;

      font-size: 14px;
      font-weight: 700;

      box-shadow:
        0 8px 20px rgba(37, 99, 235, 0.2);
    }


    /* ==========================================================
       NAME
    ========================================================== */

    .customer-name {
      margin: 0;

      color: #07152F;

      font-size: 16px;
      font-weight: 700;

      line-height: 1.3;
    }


    /* ==========================================================
       CATEGORY
    ========================================================== */

    .customer-category {
      margin-top: 4px;

      color: #7A879A;

      font-size: 12px;
      font-weight: 500;
    }


    /* ==========================================================
       STARS
    ========================================================== */

    .customer-stars {
      margin-top: 22px;

      color: #F59E0B;

      font-size: 15px;
      letter-spacing: 2px;
    }


    /* ==========================================================
       REVIEW
    ========================================================== */

    .customer-review {
      margin-top: 13px;

      color: #536176;

      font-size: 14px;

      line-height: 1.75;
    }


    /* ==========================================================
       ANIMATION
    ========================================================== */

    @keyframes customerStoriesScroll {

      0% {
        transform: translateX(0);
      }

      100% {
        transform: translateX(-50%);
      }

    }


    /* ==========================================================
       HOVER PAUSE
    ========================================================== */

    .customer-marquee-wrapper:hover .customer-marquee-track {
      animation-play-state: paused;
    }


    /* ==========================================================
       TABLET
    ========================================================== */

    @media (max-width: 1024px) {

      .customer-story-card {
        width: 330px;
        min-height: 300px;
      }

      .customer-marquee-track {
        animation-duration: 58s;
      }

    }


    /* ==========================================================
       MOBILE
    ========================================================== */

    @media (max-width: 640px) {

      .customer-marquee-wrapper {
        padding-top: 8px;
      }

      .customer-marquee-wrapper::before,
      .customer-marquee-wrapper::after {
        width: 45px;
      }

      .customer-card-group {
        gap: 14px;
        padding-right: 14px;
      }

      .customer-story-card {
        width: 290px;
        min-height: 290px;

        padding: 22px;

        border-radius: 18px;
      }

      .customer-avatar {
        width: 46px;
        height: 46px;
      }

      .customer-review {
        font-size: 13px;
        line-height: 1.7;
      }

      .customer-marquee-track {
        animation-duration: 48s;
      }

    }


    /* ==========================================================
       SMALL PHONE
    ========================================================== */

    @media (max-width: 380px) {

      .customer-story-card {
        width: 270px;
        padding: 20px;
      }

    }


    /* ==========================================================
       REDUCED MOTION
    ========================================================== */

    @media (prefers-reduced-motion: reduce) {

      .customer-marquee-track {
        animation: none;
      }

    }

  `}</style>

</section>


{/* =========================================================
    WEBQENZO — GLOBAL REACH
========================================================= */}

<section className="relative overflow-hidden bg-[#0F172A] py-20 sm:py-24 lg:py-28">

  {/* Background Glow */}
  <div className="pointer-events-none absolute -top-48 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#2563EB]/15 blur-[140px]" />

  <div className="pointer-events-none absolute -bottom-60 -right-40 h-[500px] w-[500px] rounded-full bg-[#06B6D4]/10 blur-[130px]" />

  {/* Subtle Grid */}
  <div
    className="pointer-events-none absolute inset-0 opacity-[0.035]"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
      backgroundSize: "60px 60px",
    }}
  />

  <div className="relative z-10 mx-auto max-w-[1500px]">

    {/* =====================================================
        HEADER
    ===================================================== */}

    <div className="px-5 text-center">

      {/* Badge */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-white/[0.06] px-4 py-2 backdrop-blur-md">

        <span className="h-2.5 w-2.5 rounded-full bg-[#06B6D4] shadow-[0_0_14px_#06B6D4]" />

        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300 sm:text-sm">
          Global Reach
        </span>

      </div>

      {/* Heading */}
      <h2 className="mx-auto max-w-6xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl xl:text-[68px]">

        Websites for{" "}

        <span className="bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#2563EB] bg-clip-text text-transparent">
          Businesses Everywhere
        </span>

      </h2>

      {/* Description */}
      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
        WebQenzo helps businesses build a powerful digital presence
        for customers in India and across the world.
      </p>


      {/* =====================================================
          STATS
      ===================================================== */}

      <div className="mt-9 flex flex-wrap items-center justify-center gap-4">

        {/* 15+ Countries */}
        <div className="flex min-w-[190px] items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.08] px-5 py-4 text-left shadow-[0_15px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl">

          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-[#2563EB]/15 text-xl">
            🌍
          </div>

          <div>
            <div className="text-lg font-bold leading-tight text-white">
              15+
            </div>

            <div className="mt-1 text-xs font-medium text-slate-400">
              Countries Reached
            </div>
          </div>

        </div>


        {/* Global */}
        <div className="flex min-w-[190px] items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.08] px-5 py-4 text-left shadow-[0_15px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl">

          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-[#06B6D4]/10 text-xl text-cyan-300">
            ✦
          </div>

          <div>
            <div className="text-lg font-bold leading-tight text-white">
              Global
            </div>

            <div className="mt-1 text-xs font-medium text-slate-400">
              Digital Presence
            </div>
          </div>

        </div>

      </div>

    </div>


    {/* =====================================================
        COUNTRY MARQUEE
    ===================================================== */}

    <div className="relative mt-14">

      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/80 to-transparent sm:w-36" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-[#0F172A] via-[#0F172A]/80 to-transparent sm:w-36" />


      {/* Marquee */}
      <div className="overflow-hidden">

        <div
          className="flex w-max items-center gap-4"
          style={{
            animation: "webqenzoGlobalCountries 35s linear infinite",
          }}
        >

          {/* =================================================
              SET 1
          ================================================= */}

          {[
            ["in", "India"],
            ["sa", "Saudi Arabia"],
            ["ae", "Dubai"],
            ["kw", "Kuwait"],
            ["qa", "Qatar"],
            ["us", "United States"],
            ["gb", "United Kingdom"],
            ["de", "Germany"],
            ["gb", "London"],
            ["ir", "Iran"],
            ["sg", "Singapore"],
            ["ca", "Canada"],
            ["au", "Australia"],
            ["fr", "France"],
            ["it", "Italy"],
            ["jp", "Japan"],
          ].map(([code, name], index) => (

            <div
              key={`country-1-${index}`}
              className="
                flex
                h-[58px]
                flex-shrink-0
                items-center
                gap-3
                rounded-xl
                border
                border-white/10
                bg-white/[0.09]
                px-5
                shadow-[0_10px_35px_rgba(0,0,0,0.10)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-white/20
                hover:bg-white/[0.14]
              "
            >

              {/* REAL FLAG */}
              <img
                src={`https://flagcdn.com/w40/${code}.png`}
                alt={`${name} flag`}
                className="h-5 w-7 rounded-[3px] object-cover shadow-sm"
                loading="lazy"
              />

              {/* Country */}
              <span className="whitespace-nowrap text-sm font-semibold text-white/90 sm:text-[15px]">
                {name}
              </span>

            </div>

          ))}


          {/* =================================================
              SET 2 — SEAMLESS LOOP
          ================================================= */}

          {[
            ["in", "India"],
            ["sa", "Saudi Arabia"],
            ["ae", "Dubai"],
            ["kw", "Kuwait"],
            ["qa", "Qatar"],
            ["us", "United States"],
            ["gb", "United Kingdom"],
            ["de", "Germany"],
            ["gb", "London"],
            ["ir", "Iran"],
            ["sg", "Singapore"],
            ["ca", "Canada"],
            ["au", "Australia"],
            ["fr", "France"],
            ["it", "Italy"],
            ["jp", "Japan"],
          ].map(([code, name], index) => (

            <div
              key={`country-2-${index}`}
              className="
                flex
                h-[58px]
                flex-shrink-0
                items-center
                gap-3
                rounded-xl
                border
                border-white/10
                bg-white/[0.09]
                px-5
                shadow-[0_10px_35px_rgba(0,0,0,0.10)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-white/20
                hover:bg-white/[0.14]
              "
            >

              {/* REAL FLAG */}
              <img
                src={`https://flagcdn.com/w40/${code}.png`}
                alt={`${name} flag`}
                className="h-5 w-7 rounded-[3px] object-cover shadow-sm"
                loading="lazy"
              />

              {/* Country */}
              <span className="whitespace-nowrap text-sm font-semibold text-white/90 sm:text-[15px]">
                {name}
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>


    {/* =====================================================
        BOTTOM TEXT
    ===================================================== */}

    <div className="mt-10 px-5 text-center">

      <p className="text-sm text-slate-500">
        From local businesses to global brands —{" "}

        <span className="font-semibold text-slate-300">
          WebQenzo builds digital experiences without borders.
        </span>

      </p>

    </div>

  </div>


  {/* =====================================================
      MARQUEE ANIMATION
  ===================================================== */}

  <style>{`

    @keyframes webqenzoGlobalCountries {

      from {
        transform: translateX(0);
      }

      to {
        transform: translateX(-50%);
      }

    }

    @media (max-width: 640px) {

      @keyframes webqenzoGlobalCountries {

        from {
          transform: translateX(0);
        }

        to {
          transform: translateX(-50%);
        }

      }

    }

    @media (prefers-reduced-motion: reduce) {

      [style*="webqenzoGlobalCountries"] {
        animation-play-state: paused !important;
      }

    }

  `}</style>

</section>

      <style>{`
        .home-page,
        .home-page * {
          box-sizing: border-box;
        }

        .home-page {
          width: 100%;
          max-width: 100%;
          overflow-x: clip;
        }

        .home-page img,
        .home-page video,
        .home-page svg {
          max-width: 100%;
        }

        .home-page h1,
        .home-page h2,
        .home-page h3,
        .home-page p,
        .home-page a,
        .home-page span {
          overflow-wrap: anywhere;
        }

        @media (max-width: 767px) {
          .home-page section {
            max-width: 100%;
          }

          .home-page section > div {
            min-width: 0;
          }

          .home-page [class*="grid-cols-"] {
            min-width: 0;
          }

          .home-page [class*="text-[clamp("] {
            font-size: clamp(2.25rem, 11vw, 3.6rem);
          }

          .home-page [class*="rounded-[28px]"],
          .home-page [class*="rounded-[24px]"] {
            border-radius: 1.25rem;
          }

          .home-page .showcase-image {
            max-width: 100%;
          }

          .home-page .showcase-mobile-image {
            width: min(250px, 72vw);
            height: auto;
            aspect-ratio: 10 / 7;
          }

          .home-page [class*="px-5"] {
            padding-left: max(1rem, env(safe-area-inset-left));
            padding-right: max(1rem, env(safe-area-inset-right));
          }

          .home-page [class*="gap-14"],
          .home-page [class*="gap-16"],
          .home-page [class*="gap-20"] {
            gap: 2rem;
          }
        }

        @media (max-width: 400px) {
          .home-page .showcase-mobile-image {
            width: min(220px, 68vw);
          }

          .home-page a,
          .home-page button {
            max-width: 100%;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .home-page section > div {
            max-width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .home-page *,
          .home-page *::before,
          .home-page *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      </main>
    </>
  );
}

export default Home;
