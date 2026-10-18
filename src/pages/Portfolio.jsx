
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
    theme: "bg-[#EAF2FF]",
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
    theme: "bg-[#F2F0EA]",
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
    theme: "bg-[#EEEAE3]",
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
    theme: "bg-[#E9F1EF]",
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
    theme: "bg-[#F1E9F5]",
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
    theme: "bg-[#F3EDE6]",
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
      <span className="h-px w-8 bg-blue-700" />
      <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-blue-800 sm:text-xs">
        {children}
      </span>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay: (index % 2) * 0.08 }}
      className="group min-w-0"
    >
      <Link
        to={project.path}
        aria-label={`Explore the ${project.name} project`}
        className="block"
      >
        <div
          className={`relative aspect-[1.13/1] overflow-hidden rounded-[1.25rem] sm:rounded-[1.65rem] ${project.theme}`}
        >
          <img
            src={project.image}
            alt={`${project.name} ${project.type} design concept`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#07132B]/45 via-transparent to-white/10" />

          <span className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/90 px-3 py-1.5 text-[10px] font-semibold tracking-wide text-slate-800 backdrop-blur-md sm:left-6 sm:top-6 sm:text-xs">
            {project.category}
          </span>

          <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#123D91] shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:bg-blue-700 group-hover:text-white sm:bottom-6 sm:right-6 sm:h-12 sm:w-12">
            <ArrowUpRight size={20} />
          </span>

          <span className="absolute bottom-5 left-4 text-xs font-medium text-white/90 sm:bottom-7 sm:left-6">
            Selected concept · {project.id}
          </span>
        </div>
      </Link>

      <div className="flex items-start justify-between gap-4 pt-5 sm:pt-6">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-slate-400 sm:text-xs">
            {project.type}
          </p>
          <Link to={project.path} className="group/title inline-block">
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.055em] text-[#101B32] transition-colors group-hover/title:text-blue-700 sm:text-3xl">
              {project.name}
            </h3>
          </Link>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-medium text-slate-600 sm:text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <Link
          to={project.path}
          aria-label={`Read the ${project.name} case study`}
          className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-blue-700 hover:bg-blue-700 hover:text-white sm:h-11 sm:w-11"
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
    <main className="overflow-hidden bg-white text-[#101B32]">
      <SEO
        title="Our Portfolio | Premium Website Design & Development"
        description="Explore WebQenzo's website design and development concepts across healthcare, fitness, legal, finance, events and e-commerce."
        path="/portfolio"
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#F7F9FD]">
        <div className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[420px] w-[420px] rounded-full bg-blue-200/40 blur-[100px] sm:h-[600px] sm:w-[600px]" />
        <div className="pointer-events-none absolute -bottom-48 -left-40 -z-10 h-[360px] w-[360px] rounded-full bg-indigo-100/70 blur-[100px]" />

        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28 lg:grid-cols-[1.02fr_.98fr] lg:gap-16 lg:px-14 lg:pb-28 lg:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <SectionLabel>Selected work · WebQenzo</SectionLabel>

            <h1 className="max-w-3xl text-[clamp(3.2rem,7.3vw,6.8rem)] font-semibold leading-[0.94] tracking-[-0.075em] text-[#101B32]">
              Good design.
              <br />
              <span className="text-blue-700">Lasting impact.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-slate-600 sm:mt-9 sm:text-lg sm:leading-8">
              We create thoughtful digital experiences that bring together
              brand identity, useful functionality and a clear purpose.
              Explore concepts across industries, each with its own direction.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
              <Link
                to="/get-quote"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-blue-700 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(29,78,216,0.18)] transition hover:-translate-y-0.5 hover:bg-blue-800"
              >
                Discuss your project
                <ArrowUpRight size={17} />
              </Link>

              <a
                href="#selected-work"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/70 px-7 py-3.5 text-sm font-semibold text-[#101B32] transition hover:border-blue-400 hover:text-blue-700"
              >
                Explore our work
                <ArrowDown size={16} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-slate-200 pt-6 sm:mt-14">
              <div>
                <p className="text-2xl font-semibold tracking-tight text-[#101B32]">
                  06
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-slate-500 sm:text-xs">
                  Featured concepts
                </p>
              </div>
              <span className="h-10 w-px bg-slate-200" />
              <div>
                <p className="text-2xl font-semibold tracking-tight text-[#101B32]">
                  06
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-slate-500 sm:text-xs">
                  Industry directions
                </p>
              </div>
              <span className="h-10 w-px bg-slate-200" />
              <div>
                <p className="text-sm font-semibold text-blue-800">
                  Strategy first
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-slate-500 sm:text-xs">
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
            <div className="absolute -inset-4 rounded-[2rem] border border-blue-100 sm:-inset-6 sm:rounded-[2.5rem]" />

            <div className="relative overflow-hidden rounded-[1.5rem] bg-[#E6EDF8] p-3 shadow-[0_30px_90px_rgba(20,45,90,0.13)] sm:rounded-[2rem] sm:p-4">
              <div className="flex items-center gap-2 rounded-t-xl border-b border-slate-200/80 bg-white px-4 py-3 sm:rounded-t-2xl sm:px-5">
                <span className="h-2 w-2 rounded-full bg-slate-300" />
                <span className="h-2 w-2 rounded-full bg-slate-300" />
                <span className="h-2 w-2 rounded-full bg-slate-300" />
                <div className="ml-3 flex-1 truncate rounded-md bg-slate-50 px-3 py-1.5 text-[9px] text-slate-500 sm:text-[10px]">
                  webqenzo.com / selected-work
                </div>
              </div>

              <div className="relative overflow-hidden rounded-b-xl sm:rounded-b-2xl">
                <img
                  src={projects[5].image}
                  alt="Fashion e-commerce visual concept"
                  fetchPriority="high"
                  className="h-[300px] w-full object-cover sm:h-[420px] lg:h-[460px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101B32]/75 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-8">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-[10px] font-medium backdrop-blur-md sm:text-xs">
                    <Sparkles size={12} />
                    Featured concept
                  </span>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] sm:text-5xl">
                    ThreadRare
                  </h2>
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <p className="text-xs text-white/80 sm:text-sm">
                      Fashion · Digital commerce
                    </p>
                    <Link
                      to="/portfolio/threadrare"
                      aria-label="Explore ThreadRare"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-blue-800 transition hover:bg-blue-100"
                    >
                      <ArrowUpRight size={19} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 right-2 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_15px_45px_rgba(20,45,90,0.12)] sm:block lg:-right-5">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Our design principle
              </p>
              <p className="mt-1.5 text-sm font-semibold text-[#101B32]">
                Form follows purpose.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section
        id="selected-work"
        className="scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-32"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-6 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <div>
              <SectionLabel>The portfolio</SectionLabel>
              <h2 className="max-w-3xl text-4xl font-semibold leading-[1.03] tracking-[-0.065em] sm:text-6xl">
                Different industries.
                <br />
                <span className="text-slate-400">One thoughtful approach.</span>
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:justify-self-end">
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
                      ? "border-blue-700 bg-blue-700 text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-between border-b border-slate-200 pb-4">
            <p className="text-xs text-slate-500 sm:text-sm">
              Showing{" "}
              <span className="font-semibold text-[#101B32]">
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
      <section className="border-y border-slate-200 bg-[#F7F9FD] px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionLabel>Our approach</SectionLabel>
            <h2 className="text-4xl font-semibold leading-[1.04] tracking-[-0.065em] sm:text-6xl">
              Premium isn't
              <br />
              just a look.
              <br />
              <span className="text-blue-700">It's how it works.</span>
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-slate-600 sm:mt-8 sm:text-base sm:leading-8">
              A polished website should feel considered at every level:
              clear messaging, useful interactions, consistent visual
              decisions and a structure that supports the business.
            </p>

            <Link
              to="/services"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-800 transition hover:gap-3"
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
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(20,45,90,0.06)] sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-widest text-slate-400">
                      {service.number}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <Icon size={19} />
                    </span>
                  </div>
                  <h3 className="mt-7 text-xl font-semibold tracking-[-0.04em] sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] items-start gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionLabel>Built with intention</SectionLabel>
            <h2 className="text-4xl font-semibold leading-[1.04] tracking-[-0.065em] sm:text-6xl">
              Details matter.
              <br />
              <span className="text-blue-700">So does the bigger picture.</span>
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Our focus is on creating a coherent experience—not just a
              collection of attractive sections. Design choices should make
              the website easier to understand, navigate and use.
            </p>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {principles.map((principle, index) => (
              <div
                key={principle}
                className="flex items-center gap-4 py-5 sm:py-6"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                  <Check size={17} />
                </span>
                <p className="flex-1 text-sm font-medium text-[#101B32] sm:text-base">
                  {principle}
                </p>
                <span className="text-xs font-medium text-slate-400">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-8 sm:px-8 sm:pb-12 lg:px-14">
        <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[1.5rem] bg-[#102D68] px-6 py-14 text-white sm:rounded-[2rem] sm:px-12 sm:py-20 lg:px-20 lg:py-24">
          <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-white/10 sm:h-[480px] sm:w-[480px]" />
          <div className="pointer-events-none absolute -right-5 -top-16 h-60 w-60 rounded-full border border-white/10 sm:h-[360px] sm:w-[360px]" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-blue-400/20 blur-[90px]" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.23em] text-blue-200 sm:text-xs">
                <Sparkles size={14} />
                Your next chapter starts here
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.065em] sm:text-6xl lg:text-7xl">
                Let's make your
                <br />
                next move count.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-blue-100/80 sm:mt-7 sm:text-base sm:leading-8">
                Tell us about your business, your audience and what you want
                to achieve. Let's explore the right digital direction for you.
              </p>
            </div>

            <Link
              to="/get-quote"
              className="inline-flex min-h-14 items-center justify-center gap-3 self-start rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#102D68] transition hover:-translate-y-1 hover:bg-blue-50 lg:self-end"
            >
              Start a conversation
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="relative mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-5">
            <p className="text-xs text-blue-100/70">
              WebQenzo · Digital design & development
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-semibold text-white transition hover:text-blue-200"
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
