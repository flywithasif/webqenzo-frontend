import { motion } from "framer-motion";
import {
  FileText,
  CheckCircle2,
  CreditCard,
  Code2,
  ShieldCheck,
  AlertCircle,
  Mail,
} from "lucide-react";

const sections = [
  {
    icon: CheckCircle2,
    title: "Services",
    text: "WebQenzo provides website design, development, UI/UX, e-commerce, landing pages, custom web applications, SEO and performance-related services, maintenance, and other digital services as agreed with the client.",
  },
  {
    icon: FileText,
    title: "Project Scope",
    text: "The scope, features, deliverables, timelines, revisions, and other project requirements should be agreed upon before development begins. Work outside the agreed scope may require additional discussion and charges.",
  },
  {
    icon: CreditCard,
    title: "Pricing & Payments",
    text: "Project pricing is based on the requirements, complexity, functionality, design, integrations, and other agreed deliverables. Payment terms will be communicated before a project is started.",
  },
  {
    icon: Code2,
    title: "Development & Delivery",
    text: "WebQenzo will work toward delivering the agreed project according to the approved scope. Timelines can be affected by delayed feedback, content, approvals, third-party services, or changes in requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Client Responsibilities",
    text: "Clients are responsible for providing accurate information, required content, access credentials where necessary, approvals, and feedback within a reasonable timeframe.",
  },
  {
    icon: AlertCircle,
    title: "Third-Party Services",
    text: "Websites may depend on third-party services such as hosting providers, payment gateways, domain registrars, APIs, plugins, applications, analytics platforms, or other external systems. Their availability and policies are outside WebQenzo's direct control.",
  },
];

function Terms() {
  return (
    <main className="bg-[#05070B] text-white">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden border-b border-white/[0.07]">
        <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/[0.08] blur-[140px]" />

        <div className="pointer-events-none absolute right-[-120px] top-[180px] h-[300px] w-[300px] rounded-full bg-cyan-400/[0.05] blur-[120px]" />

        <div className="relative mx-auto max-w-[1200px] px-5 pb-20 pt-20 sm:px-8 lg:px-12 lg:pb-28 lg:pt-28">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400"
            >
              <FileText size={14} className="text-cyan-300" />
              Legal & Agreement
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-7xl"
            >
              Terms &
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
                Conditions.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
            >
              These Terms & Conditions describe the general terms that apply
              when you use the WebQenzo website or engage WebQenzo for digital
              design and development services.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3 text-xs text-slate-500"
            >
              <span className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2">
                Last updated: September 2026
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2">
                WebQenzo
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}
      <section>
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">
                Agreement
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                Clear expectations.
                <br />
                Better projects.
              </h2>
            </div>

            <div className="space-y-5 text-[15px] leading-8 text-slate-400">
              <p>
                By using the WebQenzo website or engaging our services, you
                acknowledge that you have read and understood these general
                terms.
              </p>

              <p>
                Individual projects may have additional written agreements,
                proposals, quotations, specifications, or payment terms that
                apply specifically to that project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CORE TERMS
      ====================================================== */}
      <section className="border-y border-white/[0.07] bg-[#070A10]">
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-5 md:grid-cols-2">
            {sections.map((section, index) => {
              const Icon = section.icon;

              return (
                <motion.article
                  key={section.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.05,
                  }}
                  className="group rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-7 transition duration-500 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.04] sm:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-cyan-300 transition duration-500 group-hover:border-cyan-300/20 group-hover:bg-cyan-300/[0.06]">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold tracking-[-0.025em]">
                    {section.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {section.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          INTELLECTUAL PROPERTY
      ====================================================== */}
      <section>
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">
                Ownership
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                Intellectual Property
              </h2>
            </div>

            <div className="space-y-5 text-sm leading-8 text-slate-400">
              <p>
                Ownership and usage rights for project-specific designs,
                source code, assets, content, and other deliverables will
                depend on the terms agreed for the particular project.
              </p>

              <p>
                Third-party assets, libraries, fonts, plugins, frameworks,
                stock materials, and other external resources remain subject
                to their respective licenses and terms.
              </p>

              <p>
                WebQenzo may retain rights to reusable development methods,
                internal systems, general techniques, and pre-existing
                components unless otherwise agreed in writing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          REVISIONS
      ====================================================== */}
      <section className="border-y border-white/[0.07] bg-[#070A10]">
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="rounded-[32px] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-10 lg:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">
              Changes & revisions
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-[-0.04em] sm:text-4xl">
              Every project needs a defined scope.
            </h2>

            <div className="mt-7 max-w-3xl space-y-5 text-sm leading-8 text-slate-500">
              <p>
                Revisions within the agreed project scope will be handled
                according to the project agreement or quotation.
              </p>

              <p>
                Significant changes to functionality, structure, design,
                integrations, content, or requirements after approval may
                affect project cost and delivery timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LIABILITY
      ====================================================== */}
      <section>
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">
                Responsibility
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                External systems & limitations
              </h2>
            </div>

            <div className="space-y-5 text-sm leading-8 text-slate-500">
              <p>
                WebQenzo is not responsible for outages, failures, policy
                changes, security incidents, pricing changes, or interruptions
                caused by third-party providers or services outside our direct
                control.
              </p>

              <p>
                Clients should maintain appropriate backups and access to
                their business-critical data and third-party accounts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          POLICY CHANGES
      ====================================================== */}
      <section className="border-y border-white/[0.07] bg-[#070A10]">
        <div className="mx-auto max-w-[1000px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">
              Updates
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
              Changes to these terms
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-500">
              WebQenzo may update these Terms & Conditions when necessary.
              Updated terms will be reflected on this page with an updated
              revision date.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ====================================================== */}
      <section>
        <div className="mx-auto max-w-[900px] px-5 py-20 text-center sm:px-8 lg:py-28">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/[0.07] text-cyan-300">
            <Mail size={22} />
          </div>

          <h2 className="mt-7 text-3xl font-black tracking-[-0.04em] sm:text-5xl">
            Have a question?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
            If you have questions about these Terms & Conditions or a WebQenzo
            project, contact us before proceeding.
          </p>

          <a
            href="mailto:hello@webqenzo.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3.5 text-sm font-bold text-white shadow-[0_15px_40px_rgba(37,99,235,.18)] transition duration-300 hover:-translate-y-1"
          >
            Contact WebQenzo
            <Mail size={16} />
          </a>
        </div>
      </section>
    </main>
  );
}

export default Terms;