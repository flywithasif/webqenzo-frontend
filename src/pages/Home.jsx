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

      </main>
    </>
  );
}

export default Home;
