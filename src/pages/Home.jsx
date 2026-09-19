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

      <main className="overflow-hidden">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative bg-[#060B14] text-white">

        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute right-[-120px] top-[-100px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:px-10 lg:pb-28 lg:pt-24">

          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

            {/* =================================================
                LEFT CONTENT
            ================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-2xl"
            >

              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium tracking-wide text-slate-300"
              >
                <Sparkles size={14} className="text-cyan-400" />

                PREMIUM WEB DEVELOPMENT STUDIO

                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="text-[clamp(3.2rem,6vw,5.7rem)] font-semibold leading-[0.94] tracking-[-0.055em]"
              >
                Digital
                <br />

                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  experiences
                </span>

                <br />

                that move
                <br />

                businesses.
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="mt-7 max-w-xl text-base leading-7 text-slate-400 sm:text-lg"
              >
                We design and build premium, high-performance websites
                that make businesses look credible, professional and
                ready to grow.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="mt-9 flex flex-col gap-3 sm:flex-row"
              >

                <Link
                  to="/get-quote"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#0B1220] transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-xl"
                >
                  Start Your Project

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0B1220] text-white transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowUpRight size={15} />
                  </span>
                </Link>

                <Link
                  to="/portfolio"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.07]"
                >
                  Explore Our Work

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

              </motion.div>

              {/* Small trust points */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65, duration: 0.7 }}
                className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs text-slate-500"
              >
                <span className="flex items-center gap-2">
                  <Check size={14} className="text-cyan-400" />
                  Mobile-first
                </span>

                <span className="flex items-center gap-2">
                  <Check size={14} className="text-cyan-400" />
                  Performance focused
                </span>

                <span className="flex items-center gap-2">
                  <Check size={14} className="text-cyan-400" />
                  Built for growth
                </span>
              </motion.div>

            </motion.div>


            {/* =================================================
                RIGHT — WEBSITE BROWSER MOCKUP
            ================================================== */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                delay: 0.25,
                duration: 0.9,
                ease: "easeOut",
              }}
              className="relative"
            >

              {/* Floating card — top */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-2 -top-7 z-20 hidden rounded-2xl border border-white/10 bg-[#111827]/90 p-3 shadow-2xl backdrop-blur-xl sm:block lg:-right-5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/15">
                    <Code2 size={17} className="text-blue-400" />
                  </div>

                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
                      Development
                    </p>
                    <p className="text-xs font-semibold text-white">
                      Clean & scalable
                    </p>
                  </div>
                </div>
              </motion.div>


              {/* Browser */}
              <div className="relative rounded-[24px] border border-white/10 bg-[#101722] p-2 shadow-2xl shadow-black/40 sm:p-3">

                {/* Browser bar */}
                <div className="flex h-10 items-center gap-2 px-2 sm:h-11">

                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />

                  <div className="ml-3 flex h-7 flex-1 items-center rounded-lg border border-white/5 bg-white/[0.03] px-3">
                    <span className="truncate text-[9px] text-slate-600 sm:text-[10px]">
                      webqenzo.com / selected-work
                    </span>
                  </div>

                </div>


                {/* Fake Website */}
                <div className="overflow-hidden rounded-[17px] bg-[#F7F8FA]">

                  {/* Fake website navbar */}
                  <div className="flex h-12 items-center justify-between border-b border-slate-200 bg-white px-4 sm:h-14 sm:px-6">

                    <div className="text-sm font-black tracking-tight text-[#0B1220]">
                      NEXORA
                    </div>

                    <div className="hidden gap-4 text-[8px] font-medium text-slate-400 sm:flex">
                      <span>Solutions</span>
                      <span>Work</span>
                      <span>About</span>
                    </div>

                    <div className="h-6 w-16 rounded-full bg-[#0B1220]" />

                  </div>


                  {/* Fake website hero */}
                  <div className="grid min-h-[320px] grid-cols-2 gap-3 p-5 sm:min-h-[390px] sm:p-8">

                    <div className="flex flex-col justify-center">

                      <div className="mb-3 h-2 w-20 rounded-full bg-blue-100" />

                      <div className="space-y-2">
                        <div className="h-5 w-full rounded-md bg-[#0B1220] sm:h-7" />
                        <div className="h-5 w-[82%] rounded-md bg-[#0B1220] sm:h-7" />
                        <div className="h-5 w-[62%] rounded-md bg-blue-600 sm:h-7" />
                      </div>

                      <div className="mt-5 space-y-1.5">
                        <div className="h-1.5 w-full rounded-full bg-slate-200" />
                        <div className="h-1.5 w-[82%] rounded-full bg-slate-200" />
                        <div className="h-1.5 w-[70%] rounded-full bg-slate-200" />
                      </div>

                      <div className="mt-6 h-8 w-24 rounded-full bg-[#0B1220]" />

                    </div>


                    {/* Visual */}
                    <div className="relative flex items-center justify-center">

                      <div className="absolute h-40 w-40 rounded-full bg-blue-500/10 blur-2xl sm:h-56 sm:w-56" />

                      <div className="relative h-40 w-32 rotate-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl sm:h-52 sm:w-40">

                        <div className="h-full rounded-xl bg-gradient-to-br from-slate-100 via-white to-blue-50 p-3">

                          <div className="flex items-center justify-between">
                            <div className="h-3 w-10 rounded bg-[#0B1220]" />
                            <div className="h-3 w-3 rounded-full bg-blue-500" />
                          </div>

                          <div className="mt-8">
                            <div className="h-3 w-16 rounded bg-[#0B1220]" />
                            <div className="mt-2 h-2 w-12 rounded bg-slate-200" />
                          </div>

                          <div className="mt-6 flex gap-1.5">
                            <div className="h-10 flex-1 rounded-lg bg-blue-500/10" />
                            <div className="h-10 flex-1 rounded-lg bg-cyan-500/10" />
                          </div>

                          <div className="mt-2 h-8 rounded-lg bg-slate-100" />

                        </div>

                      </div>

                    </div>

                  </div>


                  {/* Fake bottom section */}
                  <div className="border-t border-slate-200 bg-white px-5 py-4 sm:px-8">

                    <div className="flex items-center justify-between">

                      <div className="flex gap-2">
                        <div className="h-6 w-16 rounded-md bg-slate-100" />
                        <div className="h-6 w-16 rounded-md bg-slate-100" />
                        <div className="h-6 w-16 rounded-md bg-slate-100" />
                      </div>

                      <div className="hidden items-center gap-1 text-[9px] font-semibold text-blue-600 sm:flex">
                        Explore
                        <ArrowRight size={10} />
                      </div>

                    </div>

                  </div>

                </div>
              </div>


              {/* Floating card — bottom */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-3 z-20 hidden rounded-2xl border border-white/10 bg-[#111827]/90 p-3 shadow-2xl backdrop-blur-xl sm:block lg:-left-6"
              >
                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10">
                    <Monitor size={17} className="text-cyan-400" />
                  </div>

                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
                      Experience
                    </p>

                    <p className="text-xs font-semibold text-white">
                      Designed to convert
                    </p>
                  </div>

                </div>
              </motion.div>

            </motion.div>

          </div>


          {/* =================================================
              BOTTOM LABELS
          ================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-20 border-t border-white/10 pt-7"
          >

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                Built for ambitious businesses
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-slate-500">

                <span>Healthcare</span>
                <span>Fitness</span>
                <span>Legal</span>
                <span>Finance</span>
                <span>Events</span>
                <span>E-commerce</span>

              </div>

            </div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          INTRO SECTION
      ====================================================== */}
      <section className="bg-[#F7F8FA] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">

        <div className="mx-auto max-w-[1200px]">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                What we do
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#0B1220] sm:text-4xl lg:text-5xl">
                Your website should work as hard as your business.
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
                From first impression to final conversion, we create
                digital experiences that communicate trust, showcase
                your brand and give your customers a reason to take action.
              </p>

              <Link
                to="/services"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0B1220]"
              >
                Explore our services

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

          </div>


          {/* Feature cards */}
          <div className="mt-14 grid gap-4 md:grid-cols-3">

            <div className="rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <Layers3 size={21} />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-[#0B1220]">
                Strategy First
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Every page has a purpose. We structure your website
                around your business goals and customer journey.
              </p>
            </div>


            <div className="rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                <Monitor size={21} />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-[#0B1220]">
                Premium Design
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Clean layouts, thoughtful spacing and refined interactions
                designed to make your brand feel established.
              </p>
            </div>


            <div className="rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <Code2 size={21} />
              </div>

              <h3 className="mt-6 text-lg font-semibold text-[#0B1220]">
                Built for Performance
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Lightweight interfaces and clean code keep the experience
                smooth without unnecessary visual or technical overhead.
              </p>
            </div>

          </div>

        </div>
      </section>



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

      </main>
    </>
  );
}

export default Home;