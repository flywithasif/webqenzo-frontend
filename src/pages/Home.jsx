import { motion } from "framer-motion";
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

    </main>
  );
}

export default Home;