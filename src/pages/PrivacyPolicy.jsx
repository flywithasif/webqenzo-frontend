import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Database,
  Mail,
  Cookie,
  UserCheck,
} from "lucide-react";

const sections = [
  {
    icon: Database,
    title: "Information We Collect",
    text: "When you contact WebQenzo, request a quote, or interact with our website, we may collect information such as your name, email address, phone number, company or brand name, project requirements, and other information you voluntarily provide.",
  },
  {
    icon: UserCheck,
    title: "How We Use Information",
    text: "Information provided to us may be used to understand your project requirements, communicate with you, prepare proposals or quotations, improve our services, and provide support related to your request.",
  },
  {
    icon: Lock,
    title: "Data Protection",
    text: "We take reasonable measures to protect information submitted through our website. However, no internet transmission or electronic storage system can be guaranteed to be completely secure.",
  },
  {
    icon: Mail,
    title: "Communication",
    text: "If you submit your contact details, WebQenzo may use them to respond to your enquiry or project request. We do not intend to use your information for unrelated communication without a relevant reason.",
  },
  {
    icon: Cookie,
    title: "Cookies",
    text: "Our website may use cookies or similar technologies to support functionality, understand website usage, and improve the overall browsing experience. You can manage cookies through your browser settings.",
  },
  {
    icon: ShieldCheck,
    title: "Third-Party Services",
    text: "Certain website functionality may rely on third-party services or providers. Where applicable, those services may process information according to their own privacy policies and terms.",
  },
];

function PrivacyPolicy() {
  return (
    <main className="bg-[#05070B] text-white">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden border-b border-white/[0.07]">
        {/* Background glow */}
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
              <ShieldCheck size={14} className="text-cyan-300" />
              Privacy & Data
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-7xl"
            >
              Privacy Policy
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
                built around trust.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
            >
              This Privacy Policy explains how WebQenzo may collect, use,
              protect, and handle information when you use our website or
              contact us regarding our services.
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
      <section className="relative">
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">
                Our approach
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                Clear information.
                <br />
                Responsible handling.
              </h2>
            </div>

            <div className="space-y-5 text-[15px] leading-8 text-slate-400">
              <p>
                At WebQenzo, we believe that a professional digital
                relationship starts with transparency.
              </p>

              <p>
                This policy describes the general way information may be
                handled when you browse our website, contact us, submit a
                project enquiry, or use features provided through the website.
              </p>

              <p>
                We only ask for information that is reasonably relevant to
                communicating with you or understanding your requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          POLICY CARDS
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
          DATA RETENTION
      ====================================================== */}
      <section>
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="rounded-[32px] border border-white/[0.08] bg-gradient-to-br from-white/[0.045] to-transparent p-7 sm:p-10 lg:p-12">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">
                Data retention
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                Information is retained only as reasonably necessary.
              </h2>

              <p className="mt-6 text-sm leading-8 text-slate-400">
                Information may be retained for as long as reasonably
                necessary to respond to enquiries, maintain business records,
                provide requested services, resolve issues, comply with
                applicable obligations, or protect legitimate business
                interests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          YOUR RIGHTS
      ====================================================== */}
      <section className="border-y border-white/[0.07] bg-[#070A10]">
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">
                Your information
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                Questions about your data?
              </h2>
            </div>

            <div className="space-y-5 text-sm leading-8 text-slate-400">
              <p>
                If you have questions about information you have submitted to
                WebQenzo, you can contact us and ask about the information
                associated with your enquiry.
              </p>

              <p>
                Depending on applicable law and circumstances, you may also
                have rights relating to access, correction, deletion, or
                restriction of certain personal information.
              </p>
            </div>
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
            Need clarification?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
            If you have any questions regarding this Privacy Policy or the
            information you have shared with WebQenzo, please contact us.
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

export default PrivacyPolicy;