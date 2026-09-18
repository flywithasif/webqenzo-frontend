import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Layers3,
  Sparkles,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "./SEO";

function CaseStudyLayout({ project }) {
  /*
   * =========================================================
   * SEO
   * =========================================================
   *
   * This component is shared by all portfolio case studies.
   * SEO is generated dynamically from the project data so each
   * case-study page can have its own title, description and
   * canonical URL.
   */

  const projectName = project?.name || "WebQenzo";

  const projectSlug =
    project?.slug ||
    project?.id ||
    projectName
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const canonicalPath = `/portfolio/${projectSlug}`;

  const seoTitle = `${projectName} Website Case Study`;

  const seoDescription = project?.shortDescription
    ? `${project.shortDescription} Explore the design approach, features, technology and digital experience created by WebQenzo.`
    : `Explore the ${projectName} website case study by WebQenzo, including project objectives, design system, features, technology and digital experience.`;

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        path={canonicalPath}
      />

      <main className="bg-[#05070B] text-white">
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative overflow-hidden border-b border-white/[0.07]">
          <div
            className="pointer-events-none absolute left-1/2 top-[-220px] h-[600px] w-[800px] -translate-x-1/2 rounded-full blur-[160px]"
            style={{
              backgroundColor: `${project.accent}14`,
            }}
          />

          <div className="relative mx-auto max-w-[1300px] px-5 pb-20 pt-16 sm:px-8 lg:px-12 lg:pb-28 lg:pt-20">
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-white"
            >
              <ArrowLeft
                size={16}
                className="transition group-hover:-translate-x-1"
              />
              Back to Portfolio
            </Link>

            <div className="mt-14 grid items-end gap-12 lg:grid-cols-[1fr_0.75fr]">
              {/* LEFT */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400"
                >
                  <Sparkles size={13} className="text-cyan-300" />
                  {project.label || "Concept Case Study"}
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.08 }}
                  className="mt-7 text-5xl font-black tracking-[-0.06em] sm:text-6xl lg:text-8xl"
                >
                  {project.name}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.16 }}
                  className="mt-6 max-w-2xl text-lg leading-8 text-slate-400"
                >
                  {project.shortDescription}
                </motion.p>
              </div>

              {/* META */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.18 }}
                className="grid grid-cols-2 gap-3"
              >
                <MetaCard
                  label="Industry"
                  value={project.industry}
                />

                <MetaCard
                  label="Type"
                  value={project.type}
                />

                <MetaCard
                  label="Focus"
                  value={project.focus}
                />

                <MetaCard
                  label="Platform"
                  value={project.platform}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            HERO MOCKUP
        ====================================================== */}
        <section>
          <div className="mx-auto max-w-[1300px] px-5 py-14 sm:px-8 lg:px-12 lg:py-24">
            <BrowserMockup project={project} />
          </div>
        </section>

        {/* =====================================================
            OVERVIEW
        ====================================================== */}
        <section className="border-y border-white/[0.07] bg-[#070A10]">
          <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <SectionLabel>Overview</SectionLabel>

                <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-5xl">
                  {project.overviewTitle}
                </h2>
              </div>

              <div className="space-y-6 text-sm leading-8 text-slate-400">
                {project.overview?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            OBJECTIVES
        ====================================================== */}
        <section>
          <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <div className="mb-12 max-w-2xl">
              <SectionLabel>Project objectives</SectionLabel>

              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-5xl">
                What the experience needed to achieve.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {project.objectives?.map((item, index) => (
                <FeatureCard
                  key={item.title}
                  number={`0${index + 1}`}
                  title={item.title}
                  text={item.text}
                />
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            DESIGN SYSTEM
        ====================================================== */}
        <section className="border-y border-white/[0.07] bg-[#070A10]">
          <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <SectionLabel>Design system</SectionLabel>

                <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-5xl">
                  {project.designTitle}
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-8 text-slate-500">
                  {project.designDescription}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {project.designSystem?.map((item) => (
                  <SystemCard
                    key={item.title}
                    title={item.title}
                    text={item.text}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            KEY FEATURES
        ====================================================== */}
        <section>
          <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <div className="max-w-2xl">
              <SectionLabel>Key features</SectionLabel>

              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-5xl">
                Built around the user journey.
              </h2>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {project.features?.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{
                    opacity: 0,
                    x: index % 2 ? 15 : -15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                  }}
                  className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-5 py-4"
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-cyan-300"
                  />

                  <span className="text-sm text-slate-400">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            TECHNOLOGY
        ====================================================== */}
        <section className="border-y border-white/[0.07] bg-[#070A10]">
          <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <SectionLabel>Technology</SectionLabel>

                <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-5xl">
                  Modern foundations.
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {project.technology?.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5"
                  >
                    <Code2
                      size={18}
                      className="text-cyan-300"
                    />

                    <h3 className="mt-4 font-bold">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-xs text-slate-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            DELIVERABLES
        ====================================================== */}
        <section>
          <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <div className="rounded-[32px] border border-white/[0.08] bg-gradient-to-br from-white/[0.045] to-transparent p-7 sm:p-10 lg:p-12">
              <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <SectionLabel>Deliverables</SectionLabel>

                  <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-5xl">
                    A complete digital experience.
                  </h2>
                </div>

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/[0.07] text-cyan-300">
                  <Layers3 size={23} />
                </div>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {project.deliverables?.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/[0.07] bg-white/[0.025] px-4 py-4 text-sm text-slate-400"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROJECT NOTE
        ====================================================== */}
        <section className="border-y border-white/[0.07] bg-[#070A10]">
          <div className="mx-auto max-w-[1000px] px-5 py-16 text-center sm:px-8 lg:py-24">
            <Target
              size={28}
              className="mx-auto text-cyan-300"
            />

            <h2 className="mt-6 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
              Concept project, built to demonstrate capability.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-slate-500">
              This project is presented as a design and development concept.
              It should not be interpreted as a claim of work completed for a
              real client unless explicitly stated.
            </p>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}
        <section>
          <div className="mx-auto max-w-[1000px] px-5 py-20 text-center sm:px-8 lg:py-32">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">
              Your project
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] sm:text-6xl">
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Tell us what you're building and let's explore the right digital
              direction.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                to="/get-quote"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 text-sm font-bold text-white shadow-[0_20px_50px_rgba(37,99,235,.2)] transition duration-300 hover:-translate-y-1"
              >
                Start a Project

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </span>
              </Link>

              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.07]"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

/* =========================================================
   BROWSER MOCKUP
========================================================= */

function BrowserMockup({ project }) {
  return (
    <div className="relative mx-auto max-w-[1100px]">
      <div
        className="absolute inset-10 rounded-[50px] blur-[90px]"
        style={{
          backgroundColor: `${project.accent}12`,
        }}
      />

      <div className="relative overflow-hidden rounded-[28px] border border-white/[0.1] bg-[#0B1019] shadow-[0_40px_120px_rgba(0,0,0,.55)]">
        {/* Browser bar */}
        <div className="flex h-12 items-center gap-3 border-b border-white/[0.07] px-4">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          </div>

          <div className="mx-auto hidden w-1/2 rounded-lg border border-white/[0.06] bg-white/[0.025] px-4 py-1.5 text-center text-[9px] text-slate-600 sm:block">
            {project.name.toLowerCase()}.webqenzo.demo
          </div>
        </div>

        {/* Website preview */}
        <div
          className="min-h-[430px] p-5 sm:p-8"
          style={{
            background: project.previewBackground || "#F8FAFC",
            color: project.previewText || "#0F172A",
          }}
        >
          <div className="flex items-center justify-between">
            <div className="text-lg font-black tracking-tight">
              {project.name}
            </div>

            <div className="hidden items-center gap-5 text-[9px] font-semibold opacity-50 sm:flex">
              <span>Home</span>
              <span>Services</span>
              <span>About</span>
              <span>Contact</span>
            </div>

            <div
              className="rounded-lg px-3 py-2 text-[9px] font-bold text-white"
              style={{
                backgroundColor: project.accent,
              }}
            >
              Explore
            </div>
          </div>

          <div className="mt-10 grid items-center gap-8 sm:grid-cols-2">
            <div>
              <div
                className="text-[9px] font-bold uppercase tracking-[0.2em]"
                style={{
                  color: project.accent,
                }}
              >
                {project.industry}
              </div>

              <h3 className="mt-3 text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl">
                {project.previewTitle || project.name}
              </h3>

              <p className="mt-4 max-w-sm text-xs leading-6 opacity-55">
                {project.previewDescription ||
                  project.shortDescription}
              </p>

              <div className="mt-6 flex gap-2">
                <div
                  className="rounded-lg px-4 py-2 text-[9px] font-bold text-white"
                  style={{
                    backgroundColor: project.accent,
                  }}
                >
                  Get Started
                </div>

                <div className="rounded-lg border border-current/10 px-4 py-2 text-[9px] font-bold opacity-60">
                  Learn More
                </div>
              </div>
            </div>

            <div className="rounded-[24px] border border-black/[0.07] bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,.08)]">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold opacity-45">
                  Experience
                </span>

                <Layers3
                  size={14}
                  style={{
                    color: project.accent,
                  }}
                />
              </div>

              <div className="mt-5 space-y-3">
                <PreviewLine />
                <PreviewLine />
                <PreviewLine
                  highlight
                  accent={project.accent}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PreviewLine({ highlight = false, accent }) {
  return (
    <div
      className="rounded-xl p-3"
      style={{
        backgroundColor: highlight
          ? `${accent}12`
          : "#F8FAFC",
      }}
    >
      <div
        className="h-2 w-20 rounded-full"
        style={{
          backgroundColor: highlight
            ? `${accent}45`
            : "#E2E8F0",
        }}
      />

      <div
        className="mt-2 h-2 w-32 rounded-full"
        style={{
          backgroundColor: highlight
            ? `${accent}20`
            : "#F1F5F9",
        }}
      />
    </div>
  );
}

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function SectionLabel({ children }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">
      {children}
    </p>
  );
}

function MetaCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">
      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600">
        {label}
      </p>

      <p className="mt-2 text-xs font-semibold text-slate-300">
        {value}
      </p>
    </div>
  );
}

function FeatureCard({ number, title, text }) {
  return (
    <div className="rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-7">
      <span className="text-xs font-bold tracking-[0.2em] text-cyan-300">
        {number}
      </span>

      <h3 className="mt-7 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-slate-500">
        {text}
      </p>
    </div>
  );
}

function SystemCard({ title, text }) {
  return (
    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
      <h3 className="font-bold">{title}</h3>

      <p className="mt-2 text-xs leading-6 text-slate-600">
        {text}
      </p>
    </div>
  );
}

export default CaseStudyLayout;