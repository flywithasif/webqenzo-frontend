import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  Code2,
  Globe2,
  Layers3,
  Monitor,
  MousePointer2,
  Palette,
  Rocket,
  Search,
  Smartphone,
  Sparkles,
  Store,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "01",
    name: "MediCare",
    category: "Healthcare",
    type: "Doctor / Clinic Website",
    description:
      "A clean, trust-focused healthcare experience designed around services, credibility and easy patient contact.",
    accent: "blue",
    tags: ["Healthcare", "Responsive", "Booking Ready"],
  },
  {
    id: "02",
    name: "FitZone",
    category: "Fitness",
    type: "Gym / Fitness Website",
    description:
      "A bold digital experience designed to communicate energy, programs, facilities and membership intent.",
    accent: "cyan",
    tags: ["Fitness", "Membership", "Lead Generation"],
  },
  {
    id: "03",
    name: "LexPro",
    category: "Legal",
    type: "Advocate / Law Firm Website",
    description:
      "A refined professional interface focused on authority, clarity, services and consultation enquiries.",
    accent: "silver",
    tags: ["Legal", "Professional", "Enquiry"],
  },
  {
    id: "04",
    name: "FinEdge",
    category: "Finance",
    type: "CA / Accounting Website",
    description:
      "A structured financial-services website designed to communicate expertise without unnecessary complexity.",
    accent: "blue",
    tags: ["Finance", "Services", "Trust"],
  },
  {
    id: "05",
    name: "BeatHouse",
    category: "Events",
    type: "DJ / Event Website",
    description:
      "A visual-first event experience built around atmosphere, media, upcoming events and enquiries.",
    accent: "cyan",
    tags: ["Events", "Creative", "Media"],
  },
  {
    id: "06",
    name: "ThreadRare",
    category: "E-commerce",
    type: "Fashion E-commerce",
    description:
      "A modern storefront concept focused on product discovery, visual merchandising and a smooth shopping journey.",
    accent: "blue",
    tags: ["E-commerce", "Fashion", "Shopify"],
  },
];

const filters = [
  "All",
  "Healthcare",
  "Fitness",
  "Legal",
  "Finance",
  "Events",
  "E-commerce",
];

const deliverables = [
  {
    icon: Palette,
    title: "UI / UX Design",
    text: "Visual systems, page hierarchy, interaction patterns and responsive layouts.",
  },
  {
    icon: Code2,
    title: "Frontend Development",
    text: "Modern, responsive interfaces built with clean and maintainable code.",
  },
  {
    icon: Store,
    title: "E-commerce",
    text: "Product experiences, collections, storefronts and conversion-focused shopping flows.",
  },
  {
    icon: Search,
    title: "SEO Foundation",
    text: "Semantic structure, metadata foundations and search-friendly page architecture.",
  },
  {
    icon: Zap,
    title: "Performance",
    text: "Lightweight experiences designed to feel fast across modern devices.",
  },
  {
    icon: Rocket,
    title: "Launch",
    text: "Deployment-ready builds with the final checks needed before going live.",
  },
];

const technologies = [
  "React.js",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Git / GitHub",
];

function BrowserMockup({ project, large = false }) {
  return (
    <div
      className={`group relative ${
        large ? "perspective-[1800px]" : ""
      }`}
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -inset-10 rounded-full bg-blue-500/10 opacity-60 blur-3xl transition duration-700 group-hover:bg-cyan-400/10" />

      {/* Back layer */}
      <div className="absolute inset-x-8 -bottom-5 top-8 rounded-[28px] border border-white/5 bg-white/[0.025] rotate-[-2deg]" />

      {/* Main browser */}
      <div
        className={`relative overflow-hidden rounded-[26px] border border-white/10 bg-[#101722] p-2 shadow-2xl shadow-black/50 transition duration-700 group-hover:-translate-y-2 group-hover:rotate-[0.3deg] ${
          large ? "sm:p-3" : ""
        }`}
      >
        {/* Browser top */}
        <div className="flex h-9 items-center gap-1.5 px-2 sm:h-11 sm:px-3">
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />

          <div className="ml-3 flex h-6 flex-1 items-center rounded-md border border-white/5 bg-white/[0.03] px-3">
            <span className="truncate text-[8px] text-slate-600">
              webqenzo.com / {project.name.toLowerCase()}
            </span>
          </div>
        </div>

        {/* Fake website */}
        <div className="overflow-hidden rounded-[20px] bg-[#F8FAFC] text-[#0B1220]">

          {/* Website nav */}
          <div className="flex h-12 items-center justify-between border-b border-slate-200 bg-white px-4 sm:h-14 sm:px-6">
            <div className="text-xs font-black tracking-[-0.04em] sm:text-sm">
              {project.name.toUpperCase()}
            </div>

            <div className="hidden items-center gap-5 text-[8px] font-medium text-slate-400 sm:flex">
              <span>Services</span>
              <span>About</span>
              <span>Work</span>
            </div>

            <div className="h-6 w-16 rounded-full bg-[#0B1220]" />
          </div>

          {/* Website body */}
          <div className="grid min-h-[270px] grid-cols-[1.05fr_0.95fr] gap-3 p-5 sm:min-h-[380px] sm:p-8">

            <div className="flex flex-col justify-center">

              <div className="mb-4 h-1.5 w-16 rounded-full bg-blue-100" />

              <div className="space-y-2">
                <div className="h-5 w-full rounded-md bg-[#0B1220] sm:h-7" />
                <div className="h-5 w-[78%] rounded-md bg-[#0B1220] sm:h-7" />
                <div className="h-5 w-[55%] rounded-md bg-blue-600 sm:h-7" />
              </div>

              <div className="mt-5 space-y-1.5">
                <div className="h-1.5 w-full rounded-full bg-slate-200" />
                <div className="h-1.5 w-[82%] rounded-full bg-slate-200" />
                <div className="h-1.5 w-[68%] rounded-full bg-slate-200" />
              </div>

              <div className="mt-6 h-8 w-24 rounded-full bg-[#0B1220]" />

            </div>

            <div className="relative flex items-center justify-center">

              <div className="absolute h-36 w-36 rounded-full bg-blue-500/10 blur-3xl sm:h-52 sm:w-52" />

              <div className="relative aspect-[0.78] w-[72%] rotate-3 rounded-[18px] border border-slate-200 bg-white p-2 shadow-xl transition duration-700 group-hover:rotate-0">

                <div className="h-full rounded-xl bg-gradient-to-br from-slate-100 via-white to-blue-50 p-3">

                  <div className="flex justify-between">
                    <div className="h-2.5 w-10 rounded bg-[#0B1220]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />
                  </div>

                  <div className="mt-8">
                    <div className="h-2.5 w-16 rounded bg-[#0B1220]" />
                    <div className="mt-2 h-1.5 w-12 rounded bg-slate-200" />
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-1.5">
                    <div className="h-12 rounded-lg bg-blue-500/10" />
                    <div className="h-12 rounded-lg bg-cyan-500/10" />
                  </div>

                  <div className="mt-2 h-8 rounded-lg bg-slate-100" />

                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Floating UI */}
      <div className="absolute -right-2 -top-4 hidden rounded-2xl border border-white/10 bg-[#111827]/90 p-3 shadow-2xl backdrop-blur-xl sm:block">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500/10">
            <Monitor size={15} className="text-blue-400" />
          </div>

          <div>
            <p className="text-[8px] uppercase tracking-wider text-slate-600">
              Experience
            </p>
            <p className="text-[10px] font-semibold text-white">
              {project.category}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <main className="overflow-hidden bg-[#F7F8FA] text-[#0B1220]">

      {/* =====================================================
          01 — CINEMATIC HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#05070B] text-white">

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-[-15%] top-[10%] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[140px]" />

          <div className="absolute right-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[130px]" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-5 pb-24 pt-20 sm:px-8 lg:px-10 lg:pb-32 lg:pt-28">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl"
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              <Sparkles size={13} className="text-cyan-400" />
              Selected work
            </div>

            <h1 className="text-[clamp(4rem,9vw,9rem)] font-semibold leading-[0.82] tracking-[-0.075em]">
              Work that
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                speaks.
              </span>
            </h1>

            <p className="mt-9 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Explore digital experiences designed by WebQenzo across
              healthcare, fitness, legal, finance, events and commerce.
              Every project starts with the business—not the template.
            </p>
          </motion.div>

          {/* Hero project */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="mt-20"
          >
            <BrowserMockup project={projects[5]} large />
          </motion.div>

          <div className="mt-10 flex flex-col justify-between gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-600">
                Featured concept
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-300">
                ThreadRare — Fashion E-commerce
              </p>
            </div>

            <Link
              to="/get-quote"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              Build something like this
              <ArrowUpRight
                size={16}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

        </div>
      </section>


      {/* =====================================================
          02 — CAPABILITY STATEMENT
      ====================================================== */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

        <div className="mx-auto max-w-[1200px]">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Our portfolio
              </p>

              <p className="mt-5 font-mono text-xs text-slate-400">
                2026 / WEBQENZO
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl">
                We don't design websites to fill a screen.
                We design them to give a business a stronger digital presence.
              </h2>

              <p className="mt-7 max-w-3xl text-base leading-7 text-slate-500">
                Strategy, visual design, responsive development, content
                structure, performance and launch are considered as one
                connected experience.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          03 — CASE STUDIES
      ====================================================== */}
      <section className="bg-[#F7F8FA] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">

        <div className="mx-auto max-w-[1400px]">

          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Case studies
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
                Selected work.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              Concept projects created to demonstrate how WebQenzo can
              approach different industries and digital requirements.
            </p>

          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">

            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group"
              >
                <BrowserMockup project={project} />

                <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] text-slate-400">
                        {project.id}
                      </span>

                      <span className="h-px w-6 bg-slate-300" />

                      <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-600">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                      {project.name}
                    </h3>

                    <p className="mt-2 text-xs font-medium text-slate-400">
                      {project.type}
                    </p>

                    <p className="mt-4 max-w-lg text-sm leading-6 text-slate-500">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-medium text-slate-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/get-quote"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:bg-[#0B1220] hover:text-white"
                    aria-label={`Discuss ${project.name}`}
                  >
                    <ArrowUpRight size={17} />
                  </Link>

                </div>
              </motion.article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          04 — PROJECT EXPLORER
      ====================================================== */}
      <section className="border-y border-slate-200 bg-white">

        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-10">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Explore by industry
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
                Find your kind of project.
              </h2>
            </div>

            <div className="flex h-11 items-center gap-2 rounded-full border border-slate-200 bg-[#F7F8FA] px-4">
              <MousePointer2 size={15} className="text-slate-400" />

              <span className="text-xs font-medium text-slate-500">
                Interactive portfolio
              </span>
            </div>

          </div>

          <div className="mt-10 flex flex-wrap gap-2">

            {filters.map((filter, index) => (
              <button
                key={filter}
                type="button"
                className={`rounded-full px-5 py-2.5 text-xs font-semibold transition ${
                  index === 0
                    ? "bg-[#0B1220] text-white"
                    : "border border-slate-200 bg-white text-slate-500 hover:border-blue-200 hover:text-blue-600"
                }`}
              >
                {filter}
              </button>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          05 — TRANSFORMATION
      ====================================================== */}
      <section className="bg-[#05070B] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32">

        <div className="mx-auto max-w-[1400px]">

          <div className="grid items-center gap-14 lg:grid-cols-[0.75fr_1.25fr]">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                The transformation
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
                From ordinary
                <br />
                to intentional.
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-slate-400">
                A strong website is not about adding more elements.
                It is about knowing what deserves attention—and what doesn't.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-7">

                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                  Before
                </p>

                <div className="mt-8 space-y-3">
                  <div className="h-3 w-32 rounded bg-white/10" />
                  <div className="h-8 w-full rounded bg-white/10" />
                  <div className="h-8 w-[70%] rounded bg-white/10" />

                  <div className="grid grid-cols-2 gap-2 pt-5">
                    <div className="h-24 rounded-xl bg-white/5" />
                    <div className="h-24 rounded-xl bg-white/5" />
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["Generic", "Unclear", "Outdated"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] text-slate-500"
                    >
                      {item}
                    </span>
                  ))}
                </div>

              </div>

              <div className="rounded-[30px] border border-blue-400/20 bg-gradient-to-br from-blue-500/10 to-cyan-400/5 p-7">

                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  After
                </p>

                <div className="mt-8 space-y-3">
                  <div className="h-3 w-32 rounded bg-white/40" />
                  <div className="h-8 w-full rounded bg-white" />
                  <div className="h-8 w-[70%] rounded bg-blue-500" />

                  <div className="grid grid-cols-2 gap-2 pt-5">
                    <div className="h-24 rounded-xl bg-white/10" />
                    <div className="h-24 rounded-xl bg-cyan-400/10" />
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["Clear", "Premium", "Purposeful"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[9px] text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          06 — DELIVERABLES
      ====================================================== */}
      <section className="bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32">

        <div className="mx-auto max-w-[1400px]">

          <div className="max-w-3xl">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              What goes into a project
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
              More than a pretty homepage.
            </h2>

          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[30px] border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">

            {deliverables.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group bg-white p-8 transition duration-300 hover:bg-[#F7F8FA]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 transition group-hover:bg-[#0B1220] group-hover:text-white">
                    <Icon size={19} />
                  </div>

                  <h3 className="mt-10 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          07 — TECHNOLOGY
      ====================================================== */}
      <section className="bg-[#0B1220] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32">

        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Under the interface
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                Design backed by modern development.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                The visual layer is only one part of a professional digital
                product. We also care about structure, responsiveness,
                maintainability and performance.
              </p>

            </div>

            <div className="grid grid-cols-2 overflow-hidden rounded-[30px] border border-white/10 sm:grid-cols-4">

              {technologies.map((technology, index) => (
                <div
                  key={technology}
                  className="flex min-h-32 items-center justify-center border-b border-r border-white/10 p-5 text-center transition duration-300 hover:bg-white/[0.05]"
                >
                  <div>
                    <span className="mb-3 block font-mono text-[9px] text-slate-600">
                      0{index + 1}
                    </span>

                    <span className="text-xs font-semibold text-slate-300">
                      {technology}
                    </span>
                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          08 — PROCESS
      ====================================================== */}
      <section className="bg-[#F7F8FA] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">

        <div className="mx-auto max-w-[1400px]">

          <div className="text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              How the work happens
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
              From first conversation
              <br />
              to final launch.
            </h2>

          </div>

          <div className="mx-auto mt-16 max-w-5xl">

            {[
              [
                "01",
                "Discover",
                "Understand the business, audience, goals and requirements.",
              ],
              [
                "02",
                "Structure",
                "Define pages, content hierarchy and the customer journey.",
              ],
              [
                "03",
                "Design",
                "Create a visual direction that fits the business and audience.",
              ],
              [
                "04",
                "Develop",
                "Turn the approved experience into a responsive website.",
              ],
              [
                "05",
                "Refine",
                "Check responsiveness, interactions, forms and performance.",
              ],
              [
                "06",
                "Launch",
                "Prepare the final build and take the experience live.",
              ],
            ].map(([number, title, text], index) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group grid grid-cols-[70px_1fr] gap-5 border-t border-slate-200 py-7 sm:grid-cols-[100px_0.6fr_1fr] sm:gap-8"
              >
                <span className="font-mono text-xs text-slate-400">
                  {number}
                </span>

                <h3 className="text-xl font-semibold">
                  {title}
                </h3>

                <p className="col-start-2 text-sm leading-6 text-slate-500 sm:col-start-auto">
                  {text}
                </p>
              </motion.div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          09 — QUALITY
      ====================================================== */}
      <section className="bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32">

        <div className="mx-auto max-w-[1200px]">

          <div className="rounded-[36px] border border-slate-200 bg-[#F7F8FA] p-8 sm:p-12 lg:p-16">

            <div className="grid gap-12 lg:grid-cols-2">

              <div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B1220] text-white">
                  <BarChart3 size={20} />
                </div>

                <h2 className="mt-8 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                  Quality is in the details.
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-500">
                  We pay attention to the details visitors may never
                  consciously notice—but absolutely experience.
                </p>

              </div>

              <div className="grid gap-3 sm:grid-cols-2">

                {[
                  ["Responsive", "Every screen size"],
                  ["Accessible", "Clear interactions"],
                  ["Consistent", "Unified visual system"],
                  ["Performant", "Lightweight experience"],
                  ["Maintainable", "Clean structure"],
                  ["Scalable", "Ready to evolve"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <Check size={16} className="text-blue-600" />
                    <h3 className="mt-4 text-sm font-semibold">
                      {title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-400">
                      {text}
                    </p>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          10 — FINAL CTA
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#05070B] px-5 py-28 text-white sm:px-8 lg:px-10 lg:py-40">

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

          <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/10" />

          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

        </div>

        <div className="relative mx-auto max-w-4xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Your project could be next
          </p>

          <h2 className="mt-6 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
            Let's create
            <br />
            something remarkable.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Tell us what you are building, who you want to reach and
            what you want your website to achieve.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/get-quote"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0B1220] transition duration-300 hover:-translate-y-1"
            >
              Start Your Project

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0B1220] text-white">
                <ArrowUpRight size={15} />
              </span>
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.05]"
            >
              Explore Services
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Portfolio;