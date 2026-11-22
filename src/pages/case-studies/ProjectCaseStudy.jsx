import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ExternalLink,
  Globe,
  Layers,
  Monitor,
  Smartphone,
  Code2,
  Sparkles,
} from "lucide-react";
import SEO from "../../components/SEO";

export default function ProjectCaseStudy({ project }) {
  const url = project.url || "";

  return (
    <main className="min-h-screen bg-white text-[#071B49]">

      <SEO
        title={`${project.name} | WebQenzo Case Study`}
        description={project.description}
        path={`/portfolio/${project.slug}`}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#F5F8FF]">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-200/40 blur-[120px]" />

        <div className="relative mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-20 lg:px-12">

          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:gap-4"
          >
            <ArrowLeft size={16} />
            Back to portfolio
          </Link>

          <div className="mt-10 max-w-4xl">

            <div className="inline-flex items-center gap-2 border border-blue-200 bg-white px-4 py-2 text-xs font-semibold text-blue-600">
              <Sparkles size={14} />
              {project.category}
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              {project.type}
            </p>

            <h1 className="mt-4 text-5xl font-bold tracking-[-0.07em] text-[#071B49] sm:text-7xl lg:text-8xl">
              {project.name}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              {url && (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-blue-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-[#071B49]"
                >
                  Open Website
                  <ExternalLink size={17} />
                </a>
              )}

              <Link
                to="/get-quote"
                className="inline-flex items-center gap-3 border border-[#D8E2F3] bg-white px-6 py-4 text-sm font-bold text-[#071B49] transition hover:border-blue-600 hover:text-blue-600"
              >
                Start a Similar Project
                <ArrowUpRight size={17} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* WEBSITE PREVIEW */}
      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12">

        <div className="mx-auto max-w-[1440px]">

          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Live Experience
              </p>

              <h2 className="mt-2 text-2xl font-bold text-[#071B49]">
                Website Preview
              </h2>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Monitor size={17} />
              Interactive preview
            </div>
          </div>

          <div className="overflow-hidden border border-slate-200 bg-white shadow-[0_25px_80px_rgba(7,27,73,0.10)]">

            {/* Browser bar */}
            <div className="flex items-center gap-3 border-b border-slate-200 bg-[#F8FAFF] px-4 py-3">

              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
              </div>

              <div className="flex min-w-0 flex-1 items-center gap-2 border border-slate-200 bg-white px-3 py-2">

                <Globe size={14} className="shrink-0 text-slate-400" />

                <span className="truncate text-xs text-slate-500">
                  {url || `${project.name} website preview`}
                </span>
              </div>

              {url && (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden items-center gap-2 text-xs font-semibold text-blue-600 sm:flex"
                >
                  Open
                  <ExternalLink size={14} />
                </a>
              )}
            </div>

            {/* Independently scrollable website */}
            <div className="relative h-[65vh] min-h-[400px] max-h-[850px] bg-white sm:h-[75vh]">

              {url ? (
                <div className="flex flex-col items-center justify-center min-h-[400px] bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-8 text-center">
    <div className="w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6">
        <Globe className="w-10 h-10 text-blue-500" />
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mb-3">
        Live Website Preview
    </h3>

    <p className="text-gray-600 max-w-md mb-6">
        This website does not allow embedding inside external websites.
        You can visit the live project directly to explore its complete experience.
    </p>

    <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all"
    >
        Visit Live Website
        <ExternalLink className="w-4 h-4" />
    </a>

    <p className="text-sm text-gray-500 mt-5 break-all">
        {project.url}
    </p>
</div>
              ) : (
                <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-[#F5F8FF] via-white to-[#E8F0FF] px-6 text-center">

                  <div className="flex h-20 w-20 items-center justify-center bg-blue-600 text-white shadow-xl shadow-blue-600/20">
                    <Globe size={35} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-[#071B49]">
                    {project.name}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">
                    Website preview will appear here when a live website URL is configured for this project.
                  </p>

                  <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="border border-blue-100 bg-white px-3 py-2 text-xs font-semibold text-blue-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

          {url && (
            <p className="mt-3 text-xs text-slate-400">
              Some websites restrict iframe embedding. If the preview does not load,
              use the Open Website button.
            </p>
          )}

        </div>
      </section>

      {/* PROJECT INFORMATION */}
      <section className="bg-[#F5F8FF] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">

        <div className="mx-auto max-w-[1440px]">

          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Project Overview
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.06em] text-[#071B49] sm:text-5xl">
                About the project
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-500">
                {project.overview}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="border border-blue-100 bg-white p-5">
                  <Layers size={20} className="text-blue-600" />

                  <p className="mt-4 text-xs text-slate-400">
                    Project Type
                  </p>

                  <p className="mt-2 text-sm font-bold text-[#071B49]">
                    {project.type}
                  </p>
                </div>

                <div className="border border-blue-100 bg-white p-5">
                  <Monitor size={20} className="text-blue-600" />

                  <p className="mt-4 text-xs text-slate-400">
                    Category
                  </p>

                  <p className="mt-2 text-sm font-bold text-[#071B49]">
                    {project.category}
                  </p>
                </div>

              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">

              {/* OBJECTIVES */}
              <div className="border border-blue-100 bg-white p-6 sm:p-8">

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center bg-blue-50 text-blue-600">
                    <Sparkles size={18} />
                  </div>

                  <h3 className="text-lg font-bold">
                    Project Objectives
                  </h3>
                </div>

                <div className="mt-6 space-y-4">

                  {project.objectives.map((item) => (
                    <div key={item} className="flex items-start gap-3">

                      <Check size={17} className="mt-1 shrink-0 text-blue-600" />

                      <p className="text-sm leading-7 text-slate-500">
                        {item}
                      </p>
                    </div>
                  ))}

                </div>
              </div>

              {/* SOLUTIONS */}
              <div className="border border-blue-100 bg-white p-6 sm:p-8">

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center bg-blue-50 text-blue-600">
                    <Code2 size={18} />
                  </div>

                  <h3 className="text-lg font-bold">
                    What We Built
                  </h3>
                </div>

                <div className="mt-6 space-y-4">

                  {project.solutions.map((item) => (
                    <div key={item} className="flex items-start gap-3">

                      <Check size={17} className="mt-1 shrink-0 text-blue-600" />

                      <p className="text-sm leading-7 text-slate-500">
                        {item}
                      </p>
                    </div>
                  ))}

                </div>
              </div>

            </div>
          </div>

          {/* FEATURES */}
          <div className="mt-12 border border-blue-100 bg-white p-6 sm:p-10">

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-blue-50 text-blue-600">
                <Check size={19} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                  Project Capabilities
                </p>

                <h3 className="mt-1 text-2xl font-bold text-[#071B49]">
                  Key Features
                </h3>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {project.features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-start gap-4 border border-slate-100 bg-[#F8FAFF] p-5"
                >

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-blue-600 text-xs font-bold text-white">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>

                  <p className="text-sm font-semibold leading-7 text-[#071B49]">
                    {feature}
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* TECHNOLOGY */}
          <div className="mt-8 border border-blue-100 bg-white p-6 sm:p-10">

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-blue-50 text-blue-600">
                <Code2 size={19} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                  Development
                </p>

                <h3 className="mt-1 text-2xl font-bold text-[#071B49]">
                  Technologies
                </h3>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">

              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="border border-slate-200 bg-[#F8FAFF] px-5 py-3 text-sm font-semibold text-[#071B49] transition hover:border-blue-600 hover:text-blue-600"
                >
                  {technology}
                </span>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12">

        <div className="mx-auto max-w-[1440px] bg-[#071B49] p-8 sm:p-12 lg:p-16">

          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                Your next digital project
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.06em] text-white sm:text-6xl">
                Let's build something
                <span className="text-blue-400"> great.</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-8 text-blue-100/60">
                Have an idea? Let's turn it into a memorable digital experience.
              </p>
            </div>

            <Link
              to="/get-quote"
              className="inline-flex min-h-14 items-center justify-center gap-3 bg-white px-7 py-4 text-sm font-bold text-[#071B49] transition hover:bg-blue-500 hover:text-white"
            >
              Start Your Project
              <ArrowUpRight size={18} />
            </Link>

          </div>
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="border-t border-slate-100 px-5 py-8 sm:px-8 lg:px-12">

        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4">

          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-blue-600"
          >
            <ArrowLeft size={16} />
            All Projects
          </Link>

          <Link
            to={`/portfolio/project${project.next}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:gap-4"
          >
            Next Project
            <ArrowRight size={16} />
          </Link>

        </div>
      </section>

    </main>
  );
}

