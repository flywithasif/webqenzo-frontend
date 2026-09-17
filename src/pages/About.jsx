import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  Code2,
  Eye,
  Globe2,
  Layers3,
  LockKeyhole,
  MessageCircle,
  Palette,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Transparent Communication",
    text: "Clear scope, clear communication and clear expectations throughout the project.",
  },
  {
    icon: Eye,
    title: "Design With Purpose",
    text: "Every section is designed to support usability, clarity and the business objective.",
  },
  {
    icon: Code2,
    title: "Clean Development",
    text: "Structured, maintainable and responsive code is treated as part of the product quality.",
  },
  {
    icon: LockKeyhole,
    title: "Respect for Your Business",
    text: "Your brand, content, requirements and project information are handled professionally.",
  },
];

const values = [
  {
    number: "01",
    title: "Clarity Before Code",
    text: "We first understand what the business needs from the website. Development comes after direction.",
  },
  {
    number: "02",
    title: "Premium Without Noise",
    text: "Luxury does not mean unnecessary effects. We focus on hierarchy, spacing, typography and meaningful interactions.",
  },
  {
    number: "03",
    title: "Business First",
    text: "A website should not only look impressive. It should communicate the offer and make the next action obvious.",
  },
  {
    number: "04",
    title: "Built for Growth",
    text: "The foundation should make it easier to expand the website, add features and evolve the digital experience.",
  },
];

const capabilities = [
  "Business websites",
  "E-commerce experiences",
  "Landing pages",
  "Booking platforms",
  "UI/UX design",
  "Website redesign",
  "Custom web applications",
  "SEO-ready architecture",
  "Performance-focused frontend",
  "Responsive development",
  "Third-party integrations",
  "Ongoing website support",
];

const standards = [
  "Responsive across modern screen sizes",
  "Semantic and structured frontend",
  "Reusable component architecture",
  "Accessible interaction patterns",
  "Performance-conscious implementation",
  "Clean visual hierarchy",
  "Conversion-focused page structure",
  "Scalable project organization",
];

function About() {
  return (
    <main className="overflow-hidden bg-[#05070B] text-white">
      {/* =========================================================
          01 — HERO
      ========================================================= */}
      <section className="relative isolate min-h-[760px] overflow-hidden">
        {/* Ambient luxury lighting */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-12%] top-[8%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
          <div className="absolute right-[-8%] top-[20%] h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[120px]" />
          <div className="absolute bottom-[-25%] left-[35%] h-[450px] w-[450px] rounded-full bg-indigo-500/10 blur-[140px]" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1500px] px-5 pb-24 pt-24 sm:px-8 lg:px-12 lg:pt-32">
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="max-w-3xl"
            >
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-medium text-slate-300 backdrop-blur-xl">
                <span className="flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,.8)]" />
                Inside WebQenzo
              </div>

              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
                Digital craftsmanship
              </p>

              <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl lg:text-8xl">
                We build digital
                <span className="block bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
                  experiences with intent.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                WebQenzo is a digital web development agency focused on
                creating modern, premium and business-oriented digital
                experiences — from strategy and design to development and
                continuous improvement.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/get-quote"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#05070B] transition duration-300 hover:-translate-y-1"
                >
                  Start a Project
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#05070B] text-white">
                    <ArrowUpRight size={15} />
                  </span>
                </Link>

                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:border-white/20 hover:bg-white/[0.07]"
                >
                  Explore Our Work
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* 3D identity card */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotateY: 8, rotateX: 4 }}
              animate={{ opacity: 1, y: 0, rotateY: 0, rotateX: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto w-full max-w-[600px] [perspective:1800px]"
            >
              <div className="relative aspect-square [transform-style:preserve-3d]">
                <div className="absolute inset-[7%] rounded-[42px] border border-white/10 bg-white/[0.025] shadow-[0_50px_120px_rgba(0,0,0,.55)] backdrop-blur-2xl" />

                <div className="absolute inset-[13%] rounded-[36px] border border-blue-400/20 bg-gradient-to-br from-blue-500/[0.12] via-transparent to-cyan-400/[0.08] [transform:translateZ(35px)]" />

                <div className="absolute inset-[20%] rounded-[30px] border border-white/10 bg-[#080D16]/90 p-7 shadow-[inset_0_0_80px_rgba(37,99,235,.08)] [transform:translateZ(70px)]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                      WebQenzo
                    </span>
                    <Sparkles size={17} className="text-cyan-300" />
                  </div>

                  <div className="mt-16">
                    <p className="text-xs uppercase tracking-[0.2em] text-blue-300">
                      Digital Agency
                    </p>

                    <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
                      Build.
                      <br />
                      Refine.
                      <br />
                      Grow.
                    </h2>
                  </div>

                  <div className="absolute bottom-7 left-7 right-7">
                    <div className="h-px bg-white/10" />
                    <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                      <span>Websites That Grow Your Business</span>
                      <span>01</span>
                    </div>
                  </div>
                </div>

                {/* Floating specification cards */}
                <div className="absolute -left-2 top-[18%] rounded-2xl border border-white/10 bg-[#0B111C]/90 px-4 py-3 shadow-2xl backdrop-blur-xl [transform:translateZ(100px)] sm:-left-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                      <Code2 size={17} />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-500">Approach</p>
                      <p className="text-xs font-semibold text-white">
                        Design + Code
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-2 bottom-[18%] rounded-2xl border border-white/10 bg-[#0B111C]/90 px-4 py-3 shadow-2xl backdrop-blur-xl [transform:translateZ(120px)] sm:-right-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                      <Rocket size={17} />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-500">Mindset</p>
                      <p className="text-xs font-semibold text-white">
                        Built to evolve
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          02 — WHO WE ARE
      ========================================================= */}
      <section className="border-y border-white/[0.07] bg-[#070A10]">
        <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[.7fr_1.3fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                01 / Who we are
              </p>

              <h2 className="mt-5 max-w-md text-4xl font-black tracking-[-0.045em] sm:text-5xl">
                A digital partner, not just a website vendor.
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="max-w-4xl"
            >
              <p className="text-xl leading-9 text-slate-300 sm:text-2xl">
                WebQenzo exists to help businesses build a stronger digital
                presence through thoughtful design, reliable development and
                technology that serves a real business purpose.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <p className="text-sm leading-7 text-slate-500">
                  We look at a website as more than a collection of pages. It
                  is often the first serious interaction a customer has with a
                  business.
                </p>

                <p className="text-sm leading-7 text-slate-500">
                  That is why our approach combines visual quality with
                  structure, usability, responsiveness, performance and a
                  clear conversion journey.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          03 — FOUNDER / HUMAN SIDE
      ========================================================= */}
      <section className="relative bg-[#05070B]">
        <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-br from-[#0B1220] to-[#070A10] p-8 shadow-[0_35px_100px_rgba(0,0,0,.45)] sm:p-10">
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/10 blur-[80px]" />

                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                    <Users className="text-cyan-300" size={26} />
                  </div>

                  <p className="mt-12 text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                    Founder perspective
                  </p>

                  <h3 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                    Build something you would trust yourself.
                  </h3>

                  <p className="mt-6 text-sm leading-7 text-slate-400">
                    WebQenzo is built around a simple idea: businesses deserve
                    digital work that feels considered, transparent and
                    professional — not rushed, generic or unnecessarily
                    complicated.
                  </p>

                  <div className="mt-10 flex items-center gap-3">
                    <div className="h-px flex-1 bg-white/10" />
                    <span className="text-[10px] uppercase tracking-[0.25em] text-slate-600">
                      WebQenzo
                    </span>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                02 / The philosophy
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] sm:text-6xl">
                Technology should make your business feel more capable.
              </h2>

              <p className="mt-7 text-base leading-8 text-slate-400 sm:text-lg">
                Our work sits at the intersection of design, development and
                business thinking. The goal is not to add technology for the
                sake of technology. The goal is to use the right technology to
                create a better experience.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  "Understand the business",
                  "Define the digital experience",
                  "Design the visual system",
                  "Develop the experience",
                  "Refine the details",
                  "Prepare it for growth",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-white/[0.07] pb-4"
                  >
                    <span className="text-xs font-bold text-blue-400">
                      0{index + 1}
                    </span>
                    <span className="text-sm font-medium text-slate-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          04 — TRUST
      ========================================================= */}
      <section className="bg-[#080C13]">
        <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
              03 / Built on trust
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] sm:text-6xl">
              Trust is part of the product.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
              A premium website is not enough if the working relationship is
              unclear. We want clients to understand what is being built,
              why it is being built and what happens next.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {trustPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, delay: index * 0.07 }}
                  className="group rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-7 transition duration-500 hover:-translate-y-2 hover:border-blue-400/25 hover:bg-white/[0.045]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-300 transition duration-500 group-hover:scale-110 group-hover:bg-blue-500/10">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-8 text-lg font-bold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          05 — CAPABILITIES
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#05070B]">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.045] blur-[120px]" />

        <div className="relative mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                04 / Capabilities
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] sm:text-6xl">
                From first idea to digital product.
              </h2>

              <p className="mt-6 max-w-lg text-base leading-8 text-slate-500">
                Our capabilities cover the major layers required to create a
                serious modern web presence.
              </p>
            </div>

            <div className="grid gap-x-10 gap-y-0 sm:grid-cols-2">
              {capabilities.map((item, index) => (
                <div
                  key={item}
                  className="group flex items-center gap-4 border-b border-white/[0.07] py-5"
                >
                  <span className="text-[11px] font-bold text-blue-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex-1 text-sm font-medium text-slate-300 transition group-hover:text-white">
                    {item}
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="text-slate-700 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          06 — VALUES
      ========================================================= */}
      <section className="border-y border-white/[0.07] bg-[#080C13]">
        <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                05 / Our principles
              </p>

              <h2 className="mt-5 max-w-2xl text-4xl font-black tracking-[-0.05em] sm:text-6xl">
                Standards that shape every project.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-500">
              These principles help keep the work focused, professional and
              aligned with the business instead of chasing unnecessary trends.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.08] md:grid-cols-2">
            {values.map((item) => (
              <div
                key={item.number}
                className="bg-[#080C13] p-8 transition duration-500 hover:bg-[#0B111B] sm:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-bold text-blue-400">
                    {item.number}
                  </span>

                  <Sparkles size={17} className="text-slate-700" />
                </div>

                <h3 className="mt-14 text-2xl font-black tracking-[-0.03em]">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          07 — DESIGN + DEVELOPMENT
      ========================================================= */}
      <section className="bg-[#05070B]">
        <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[32px] border border-white/[0.08] bg-gradient-to-br from-[#0B1220] to-[#070A10] p-8 sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">
                <Palette size={22} />
              </div>

              <p className="mt-10 text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                Creative direction
              </p>

              <h3 className="mt-4 text-3xl font-black tracking-[-0.04em]">
                Design that communicates value.
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Visual systems are created around your positioning, audience,
                content and business objective. Typography, spacing, imagery,
                components and interaction all work together.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Visual hierarchy",
                  "Responsive layouts",
                  "Premium UI systems",
                  "Interaction design",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                    <Check size={16} className="text-cyan-300" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/[0.08] bg-gradient-to-br from-[#09121A] to-[#070A10] p-8 sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                <Code2 size={22} />
              </div>

              <p className="mt-10 text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                Engineering mindset
              </p>

              <h3 className="mt-4 text-3xl font-black tracking-[-0.04em]">
                Code that supports the experience.
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Development is structured around reusable components,
                maintainability, responsiveness and performance-conscious
                implementation.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "Component-based development",
                  "Responsive implementation",
                  "Clean project structure",
                  "Scalable foundations",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                    <Check size={16} className="text-cyan-300" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          08 — QUALITY STANDARD
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#080C13]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

        <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                06 / Quality standard
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] sm:text-6xl">
                Details matter.
              </h2>

              <p className="mt-6 max-w-lg text-base leading-8 text-slate-500">
                The difference between an average website and a premium
                digital experience is often found in the details people do
                not consciously notice.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {standards.map((item, index) => (
                <div
                  key={item}
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition duration-300 hover:border-blue-400/20 hover:bg-white/[0.045]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035]">
                    <BadgeCheck size={17} className="text-cyan-300" />
                  </div>

                  <div>
                    <span className="text-[10px] font-bold text-blue-400">
                      0{index + 1}
                    </span>

                    <p className="mt-1 text-sm font-medium text-slate-300">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          09 — HOW WE THINK ABOUT YOUR BUSINESS
      ========================================================= */}
      <section className="bg-[#05070B]">
        <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
              07 / Business perspective
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black tracking-[-0.05em] sm:text-6xl">
              We design around the journey, not just the homepage.
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl gap-4 md:grid-cols-5">
            {[
              { icon: Search, title: "Discover", text: "Understand" },
              { icon: Target, title: "Position", text: "Differentiate" },
              { icon: Palette, title: "Design", text: "Communicate" },
              { icon: Code2, title: "Build", text: "Deliver" },
              { icon: Rocket, title: "Grow", text: "Improve" },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="relative rounded-[26px] border border-white/[0.08] bg-white/[0.025] p-6 text-center"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">
                    <Icon size={20} />
                  </div>

                  <p className="mt-6 text-lg font-bold">{item.title}</p>

                  <p className="mt-1 text-xs text-slate-600">{item.text}</p>

                  {index !== 4 && (
                    <div className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#080C13] text-slate-600 md:flex">
                      <ArrowRight size={12} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          10 — TECH / DIGITAL FOUNDATION
      ========================================================= */}
      <section className="border-y border-white/[0.07] bg-[#080C13]">
        <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_.9fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                08 / Digital foundation
              </p>

              <h2 className="mt-5 max-w-2xl text-4xl font-black tracking-[-0.05em] sm:text-6xl">
                Modern technology. Practical implementation.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500">
                The technology stack is selected according to the project's
                requirements instead of forcing every business into the same
                solution.
              </p>

              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "React",
                  "Vite",
                  "Tailwind CSS",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Mongoose",
                  "REST APIs",
                  "Git",
                  "Responsive UI",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-xs font-medium text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[32px] border border-white/[0.08] bg-[#05070B] p-6 shadow-[0_30px_100px_rgba(0,0,0,.4)]">
                <div className="rounded-[24px] border border-white/[0.07] bg-[#080D15] p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600">
                      Architecture
                    </span>
                    <Layers3 size={18} className="text-blue-300" />
                  </div>

                  <div className="mt-8 space-y-3">
                    {[
                      ["Experience", "UI / UX"],
                      ["Frontend", "React"],
                      ["Backend", "Node + Express"],
                      ["Database", "MongoDB"],
                      ["Delivery", "Production-ready structure"],
                    ].map(([left, right]) => (
                      <div
                        key={left}
                        className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3"
                      >
                        <span className="text-xs text-slate-500">{left}</span>
                        <span className="text-xs font-semibold text-slate-200">
                          {right}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          11 — WHAT CLIENTS CAN EXPECT
      ========================================================= */}
      <section className="bg-[#05070B]">
        <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
              09 / Working relationship
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.05em] sm:text-6xl">
              What you should expect from us.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: MessageCircle,
                title: "Communication",
                text: "Questions, decisions and project direction should remain clear instead of becoming confusing midway through the project.",
              },
              {
                icon: BriefcaseBusiness,
                title: "Professional Process",
                text: "Projects are approached with structure so design, development and revisions have a clear direction.",
              },
              {
                icon: Zap,
                title: "Attention to Detail",
                text: "Small details in spacing, responsiveness, interaction and presentation are treated as part of the final quality.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[30px] border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-8"
                >
                  <Icon size={24} className="text-cyan-300" />

                  <h3 className="mt-10 text-2xl font-black tracking-[-0.03em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          12 — TRANSPARENCY
      ========================================================= */}
      <section className="bg-[#080C13]">
        <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-5xl rounded-[36px] border border-white/[0.08] bg-gradient-to-br from-[#0B1220] via-[#080D15] to-[#071015] p-8 shadow-[0_40px_120px_rgba(0,0,0,.4)] sm:p-12 lg:p-16">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
              <ShieldCheck size={25} />
            </div>

            <p className="mt-10 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
              10 / Transparency
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              No inflated promises. Just clear work.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400">
              We believe trust grows when expectations are realistic. Project
              scope, requirements, timelines and deliverables should be
              discussed clearly rather than hidden behind complicated language
              or unrealistic promises.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {[
                "Clear project scope",
                "Clear deliverables",
                "Clear communication",
                "No unnecessary complexity",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3 text-sm text-slate-300"
                >
                  <Check size={16} className="text-cyan-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          13 — WHY WEBQENZO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#05070B]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,.10),transparent_38%)]" />

        <div className="relative mx-auto max-w-[1500px] px-5 py-24 text-center sm:px-8 lg:px-12 lg:py-36">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
            11 / Why WebQenzo
          </p>

          <h2 className="mx-auto mt-6 max-w-5xl text-5xl font-black tracking-[-0.06em] sm:text-7xl lg:text-8xl">
            Your website should feel like your business has
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              moved forward.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
            Better positioning. Better experience. Better digital presence.
            Built with intention from the first screen to the smallest detail.
          </p>
        </div>
      </section>

      {/* =========================================================
          14 — CTA
      ========================================================= */}
      <section className="border-t border-white/[0.08] bg-[#070A10]">
        <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#0D1726] via-[#09101B] to-[#071015] p-8 sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-cyan-400/10 blur-[110px]" />

            <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                  12 / Let's build
                </p>

                <h2 className="mt-5 max-w-4xl text-4xl font-black tracking-[-0.05em] sm:text-6xl">
                  Have a business that deserves a better digital presence?
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500">
                  Tell us what you are building, what you want to improve and
                  where you want to go next. We can start from there.
                </p>
              </div>

              <Link
                to="/get-quote"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#05070B] transition duration-300 hover:-translate-y-1"
              >
                Start a Conversation
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#05070B] text-white transition group-hover:rotate-45">
                  <ArrowUpRight size={15} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;