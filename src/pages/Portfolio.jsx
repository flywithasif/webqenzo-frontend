import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Code2,
  Layers3,
  Palette,
  Search,
  Sparkles,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const projects = [
  {
    id: "01",
    name: "MediCare",
    category: "Healthcare",
    type: "Healthcare & Patient Experience",
    description:
      "A calm, credible digital experience designed to make healthcare services easier to understand and access.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=85",
    theme: "bg-[#0B132B]",
    tags: ["Healthcare", "UX Strategy", "Responsive"],
    path: "/portfolio/medicare",
  },
  {
    id: "02",
    name: "FitZone",
    category: "Fitness",
    type: "Fitness & Membership",
    description:
      "A high-energy digital presence for fitness brands, built around programs, facilities and membership enquiries.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85",
    theme: "bg-[#0B132B]",
    tags: ["Fitness", "Membership", "Lead Generation"],
    path: "/portfolio/fitzone",
  },
  {
    id: "03",
    name: "LexPro",
    category: "Legal",
    type: "Legal & Professional Services",
    description:
      "A confident, understated interface that communicates expertise, professionalism and trust from the first visit.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1400&q=85",
    theme: "bg-[#0B132B]",
    tags: ["Legal", "Brand Authority", "Enquiries"],
    path: "/portfolio/lexpro",
  },
  {
    id: "04",
    name: "FinEdge",
    category: "Finance",
    type: "Finance & Advisory",
    description:
      "A clear, structured experience that makes complex financial services feel approachable and professional.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
    theme: "bg-[#0B132B]",
    tags: ["Finance", "Clarity", "Trust"],
    path: "/portfolio/finedge",
  },
  {
    id: "05",
    name: "BeatHouse",
    category: "Events",
    type: "Music, Events & Entertainment",
    description:
      "A bold visual direction for entertainment brands, designed to bring events, media and enquiries together.",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=85",
    theme: "bg-[#0B132B]",
    tags: ["Events", "Visual Storytelling", "Media"],
    path: "/portfolio/beathouse",
  },
  {
    id: "06",
    name: "ThreadRare",
    category: "E-commerce",
    type: "Fashion & Digital Commerce",
    description:
      "A considered storefront concept combining strong product imagery, refined merchandising and a smoother shopping journey.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=85",
    theme: "bg-[#0B132B]",
    tags: ["Fashion", "E-commerce", "Product UX"],
    path: "/portfolio/threadrare",
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

const services = [
  {
    number: "01",
    icon: Palette,
    title: "Digital Design",
    description:
      "Distinctive visual systems, thoughtful layouts and intuitive user experiences.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Web Development",
    description:
      "Responsive, maintainable websites built around your business requirements.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Digital Commerce",
    description:
      "Product discovery, storefront experiences and considered shopping journeys.",
  },
  {
    number: "04",
    icon: Zap,
    title: "Performance & SEO",
    description:
      "A strong technical foundation for accessibility, discoverability and speed.",
  },
];

const principles = [
  "Designed around real business goals",
  "Consistent across screen sizes",
  "Clear, intuitive user journeys",
  "Built for maintainability",
];

function SectionLabel({ children }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-8 bg-cyan-400" />
      <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-400 sm:text-xs">
        {children}
      </span>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
      className="group min-w-0"
    >
      <Link
        to={project.path}
        aria-label={`Explore the ${project.name} project`}
        className="block"
      >
        <div className="relative aspect-[1.13/1] overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 bg-[#0B132B] shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
          <img
            src={project.image}
            alt={`${project.name} ${project.type} design concept`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/90 via-[#030712]/30 to-transparent" />

          <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[10px] font-semibold tracking-wide text-white backdrop-blur-md sm:left-6 sm:top-6 sm:text-xs">
            {project.category}
          </span>

          <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-cyan-400 text-[#030712] shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 sm:bottom-6 sm:right-6 sm:h-12 sm:w-12">
            <ArrowUpRight size={20} strokeWidth={2.5} />
          </span>

          <span className="absolute bottom-5 left-4 text-xs font-medium text-slate-300 sm:bottom-7 sm:left-6">
            Selected concept · {project.id}
          </span>
        </div>
      </Link>

      <div className="flex items-start justify-between gap-4 pt-5 sm:pt-6">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-cyan-400 sm:text-xs">
            {project.type}
          </p>
          <Link to={project.path} className="group/title inline-block">
            <h3 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-white transition-colors group-hover/title:text-cyan-300 sm:text-3xl">
              {project.name}
            </h3>
          </Link>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-400 sm:text-[15px] sm:leading-7">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-medium text-slate-300 sm:text-xs backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <Link
          to={project.path}
          aria-label={`Read the ${project.name} case study`}
          className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition hover:border-cyan-400 hover:bg-cyan-400 hover:text-[#030712] sm:h-11 sm:w-11"
        >
          <ChevronRight size={18} />
        </Link>
      </div>
    </motion.article>
  );
}

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter]
  );

  return (
    <main className="overflow-hidden bg-[#030712] text-white selection:bg-cyan-500/30">
      <SEO
        title="Our Portfolio | Premium Website Design & Development"
        description="Explore WebQenzo's website design and development concepts across healthcare, fitness, legal, finance, events and e-commerce."
        path="/portfolio"
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#030712] text-white">
        <div className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[150px] sm:h-[700px] sm:w-[700px]" />
        <div className="pointer-events-none absolute -bottom-48 -left-40 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-500/15 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.035] -z-10"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28 lg:grid-cols-[1.02fr_.98fr] lg:gap-16 lg:px-14 lg:pb-28 lg:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <SectionLabel>Selected work · WebQenzo</SectionLabel>

            <h1 className="max-w-3xl text-[clamp(3.2rem,7.3vw,6.8rem)] font-bold leading-[0.94] tracking-[-0.075em] text-white">
              Good design.
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                Lasting impact.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-slate-300 sm:mt-9 sm:text-lg sm:leading-8">
              We create thoughtful digital experiences that bring together
              brand identity, useful functionality and a clear purpose.
              Explore concepts across industries, each with its own direction.
            </p>

            <div className="mt-8 flex flex-col gap-3.5 sm:mt-10 sm:flex-row">
              <Link
                to="/get-quote"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-7 py-3.5 text-sm font-semibold text-[#030712] shadow-[0_10px_30px_rgba(34,211,238,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(34,211,238,0.4)]"
              >
                Discuss your project
                <ArrowUpRight size={17} strokeWidth={2.5} />
              </Link>

              <a
                href="#selected-work"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:border-cyan-400/40 hover:bg-white/[0.08]"
              >
                Explore our work
                <ArrowDown size={16} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/10 pt-6 sm:mt-14">
              <div>
                <p className="text-2xl font-bold tracking-tight text-white">
                  06
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-slate-400 sm:text-xs">
                  Featured concepts
                </p>
              </div>
              <span className="h-10 w-px bg-white/10" />
              <div>
                <p className="text-2xl font-bold tracking-tight text-white">
                  06
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-slate-400 sm:text-xs">
                  Industry directions
                </p>
              </div>
              <span className="h-10 w-px bg-white/10" />
              <div>
                <p className="text-sm font-bold text-cyan-400">
                  Strategy first
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-slate-400 sm:text-xs">
                  Purposeful design
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="relative mx-auto w-full max-w-[620px] lg:ml-auto"
          >
            <div className="absolute -inset-4 rounded-[2rem] border border-cyan-500/20 sm:-inset-6 sm:rounded-[2.5rem]" />

            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#0B132B] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:rounded-[2rem] sm:p-4">
              <div className="flex items-center gap-2 rounded-t-xl border-b border-white/10 bg-[#0A101D] px-4 py-3 sm:rounded-t-2xl sm:px-5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                <div className="ml-3 flex-1 truncate rounded-md bg-white/5 px-3 py-1.5 text-[9px] text-slate-400 sm:text-[10px]">
                  webqenzo.com / selected-work
                </div>
              </div>

              <div className="relative overflow-hidden rounded-b-xl sm:rounded-b-2xl">
                <img
                  src={projects[5].image}
                  alt="Fashion e-commerce visual concept"
                  fetchPriority="high"
                  className="h-[300px] w-full object-cover opacity-85 sm:h-[420px] lg:h-[460px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-8">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-medium backdrop-blur-md sm:text-xs">
                    <Sparkles size={12} className="text-cyan-400" />
                    Featured concept
                  </span>
                  <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-5xl">
                    ThreadRare
                  </h2>
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <p className="text-xs text-slate-300 sm:text-sm">
                      Fashion · Digital commerce
                    </p>
                    <Link
                      to="/portfolio/threadrare"
                      aria-label="Explore ThreadRare"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-[#030712] transition hover:scale-110"
                    >
                      <ArrowUpRight size={19} strokeWidth={2.5} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 right-2 hidden rounded-2xl border border-white/10 bg-[#0B132B]/90 p-4 shadow-2xl backdrop-blur-md sm:block lg:-right-5">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-400">
                Our design principle
              </p>
              <p className="mt-1.5 text-sm font-semibold text-white">
                Form follows purpose.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section
        id="selected-work"
        className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-32 bg-[#060B21]"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-6 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <div>
              <SectionLabel>The portfolio</SectionLabel>
              <h2 className="max-w-3xl text-4xl font-bold leading-[1.03] tracking-[-0.055em] text-white sm:text-6xl">
                Different industries.
                <br />
                <span className="text-slate-500">One thoughtful approach.</span>
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 lg:justify-self-end">
              Every business has different needs. Browse our concepts to see
              how layout, visual language and user experience can adapt to
              different audiences and goals.
            </p>
          </div>

          <div className="mt-9 flex gap-2 overflow-x-auto pb-3 sm:mt-12 sm:flex-wrap sm:overflow-visible">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={isActive}
                  className={`shrink-0 rounded-full border px-4 py-2.5 text-xs font-semibold transition sm:px-5 sm:text-sm ${
                    isActive
                      ? "border-cyan-400 bg-cyan-400 text-[#030712] shadow-lg shadow-cyan-500/20"
                      : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-cyan-400/40 hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-between border-b border-white/10 pb-4">
            <p className="text-xs text-slate-400 sm:text-sm">
              Showing{" "}
              <span className="font-semibold text-white">
                {visibleProjects.length.toString().padStart(2, "0")}
              </span>{" "}
              {activeFilter === "All"
                ? "selected concepts"
                : `${activeFilter} concept${visibleProjects.length === 1 ? "" : "s"}`}
            </p>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.17em] text-slate-400 sm:block">
              Explore each project
            </span>
          </div>

          <div className="mt-8 grid gap-x-7 gap-y-12 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-10 lg:gap-y-20">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="border-y border-white/10 bg-[#030712] px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionLabel>Our approach</SectionLabel>
            <h2 className="text-4xl font-bold leading-[1.04] tracking-[-0.055em] text-white sm:text-6xl">
              Premium isn't
              <br />
              just a look.
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                It's how it works.
              </span>
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-slate-300 sm:mt-8 sm:text-base sm:leading-8">
              A polished website should feel considered at every level:
              clear messaging, useful interactions, consistent visual
              decisions and a structure that supports the business.
            </p>

            <Link
              to="/services"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition hover:gap-3"
            >
              Explore our services
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.06] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] sm:p-7 backdrop-blur-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-widest text-slate-400">
                      {service.number}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                      <Icon size={19} />
                    </span>
                  </div>
                  <h3 className="mt-7 text-xl font-bold tracking-tight text-white sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-32 bg-[#060B21]">
        <div className="mx-auto grid max-w-[1440px] items-start gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionLabel>Built with intention</SectionLabel>
            <h2 className="text-4xl font-bold leading-[1.04] tracking-[-0.055em] text-white sm:text-6xl">
              Details matter.
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                So does the bigger picture.
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              Our focus is on creating a coherent experience—not just a
              collection of attractive sections. Design choices should make
              the website easier to understand, navigate and use.
            </p>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {principles.map((principle, index) => (
              <div
                key={principle}
                className="flex items-center gap-4 py-5 sm:py-6"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                  <Check size={17} strokeWidth={2.5} />
                </span>
                <p className="flex-1 text-sm font-medium text-white sm:text-base">
                  {principle}
                </p>
                <span className="text-xs font-medium text-slate-500">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-12 sm:px-8 sm:pb-16 lg:px-14 bg-[#030712]">
        <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[1.5rem] border border-white/15 bg-gradient-to-br from-[#0B132B] via-[#070D1D] to-[#030712] px-6 py-14 text-white sm:rounded-[2rem] sm:px-12 sm:py-20 lg:px-20 lg:py-24 shadow-[0_30px_100px_rgba(0,0,0,0.8)]">
          <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-white/10 sm:h-[480px] sm:w-[480px]" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-500/20 blur-[120px]" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.23em] text-cyan-400 sm:text-xs">
                <Sparkles size={14} />
                Your next chapter starts here
              </p>
              <h2 className="mt-5 text-4xl font-bold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl text-white">
                Let's make your
                <br />
                next move count.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:mt-7 sm:text-base sm:leading-8">
                Tell us about your business, your audience and what you want
                to achieve. Let's explore the right digital direction for you.
              </p>
            </div>

            <Link
              to="/get-quote"
              className="inline-flex min-h-14 items-center justify-center gap-3 self-start rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-7 py-4 text-sm font-bold text-[#030712] shadow-[0_10px_30px_rgba(34,211,238,0.3)] transition hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(34,211,238,0.4)] lg:self-end"
            >
              Start a conversation
              <ArrowUpRight size={18} strokeWidth={2.5} />
            </Link>
          </div>

          <div className="relative mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
            <p className="text-xs text-slate-400">
              WebQenzo · Digital design & development
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-semibold text-white transition hover:text-cyan-400"
            >
              Discover our services
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Portfolio;