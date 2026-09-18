import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Clock3,
  MapPin,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

function Contact() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "@id": "https://webqenzo.com/contact#contact-page",
      url: "https://webqenzo.com/contact",
      name: "Contact WebQenzo",
      description:
        "Get in touch with WebQenzo for premium website design, web development, business websites and digital projects.",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://webqenzo.com/#website",
        url: "https://webqenzo.com/",
        name: "WebQenzo",
      },
      about: {
        "@type": "Organization",
        "@id": "https://webqenzo.com/#organization",
        name: "WebQenzo",
        url: "https://webqenzo.com/",
        email: "hello@webqenzo.com",
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-page-schema", "contact");
    script.textContent = JSON.stringify(structuredData);

    document.head.appendChild(script);

    return () => {
      const existingScript = document.head.querySelector(
        'script[data-page-schema="contact"]'
      );

      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <>
      <SEO
        title="Contact WebQenzo — Start Your Website Project"
        description="Contact WebQenzo for premium website design and development. Tell us about your business, website idea or digital project and let's build something great."
        path="/contact"
      />

      <main className="bg-[#05070B] text-white">
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative overflow-hidden border-b border-white/[0.07]">
          {/* Ambient lights */}
          <div className="pointer-events-none absolute left-1/2 top-[-220px] h-[560px] w-[760px] -translate-x-1/2 rounded-full bg-blue-600/[0.09] blur-[150px]" />

          <div className="pointer-events-none absolute right-[-140px] top-[180px] h-[360px] w-[360px] rounded-full bg-cyan-400/[0.055] blur-[130px]" />

          <div className="pointer-events-none absolute bottom-[-180px] left-[-120px] h-[320px] w-[320px] rounded-full bg-blue-500/[0.035] blur-[120px]" />

          <div className="relative mx-auto max-w-[1300px] px-5 pb-20 pt-20 sm:px-8 lg:px-12 lg:pb-28 lg:pt-28">
            <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
              {/* Left */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400"
                >
                  <Sparkles size={14} className="text-cyan-300" />
                  Start a conversation
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.08 }}
                  className="max-w-4xl text-5xl font-black leading-[0.93] tracking-[-0.06em] sm:text-6xl lg:text-8xl"
                >
                  Let's build
                  <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
                    something great.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.16 }}
                  className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
                >
                  Have a website idea, a business that needs a better digital
                  presence, or an existing website that needs a serious
                  upgrade? Tell us what you're building.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.24 }}
                  className="mt-9 flex flex-wrap gap-3"
                >
                  <Link
                    to="/get-quote"
                    className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3.5 text-sm font-bold text-white shadow-[0_18px_45px_rgba(37,99,235,.2)] transition duration-300 hover:-translate-y-1"
                  >
                    Start a Project
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition duration-300 group-hover:rotate-45">
                      <ArrowUpRight size={15} />
                    </span>
                  </Link>

                  <a
                    href="mailto:hello@webqenzo.com"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
                  >
                    Email Us
                    <Mail size={16} />
                  </a>
                </motion.div>
              </div>

              {/* Right — 3D Contact Object */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, rotateY: 8 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.9, delay: 0.12 }}
                className="relative mx-auto w-full max-w-[520px]"
              >
                <div className="absolute inset-8 rounded-[40px] bg-blue-500/[0.12] blur-[70px]" />

                <div className="relative rounded-[34px] border border-white/[0.1] bg-[#0A0F18] p-4 shadow-[0_35px_100px_rgba(0,0,0,.55)]">
                  {/* Window bar */}
                  <div className="flex items-center justify-between border-b border-white/[0.07] px-3 pb-4">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                    </div>

                    <span className="text-[9px] uppercase tracking-[0.22em] text-slate-600">
                      WebQenzo / Connect
                    </span>
                  </div>

                  {/* Card */}
                  <div className="p-5 sm:p-7">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.22em] text-slate-600">
                          Project Brief
                        </p>

                        <h2 className="mt-2 text-xl font-bold">
                          Your next website
                        </h2>
                      </div>

                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.06] text-cyan-300">
                        <MessageCircle size={20} />
                      </div>
                    </div>

                    <div className="mt-7 space-y-3">
                      <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                        <div className="h-2 w-24 rounded-full bg-white/10" />
                        <div className="mt-3 h-2 w-40 rounded-full bg-white/[0.05]" />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                          <div className="h-2 w-16 rounded-full bg-blue-400/30" />
                          <div className="mt-3 h-2 w-20 rounded-full bg-white/[0.05]" />
                        </div>

                        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
                          <div className="h-2 w-16 rounded-full bg-cyan-300/25" />
                          <div className="mt-3 h-2 w-20 rounded-full bg-white/[0.05]" />
                        </div>
                      </div>

                      <div className="rounded-2xl border border-blue-400/15 bg-gradient-to-r from-blue-500/[0.1] to-cyan-400/[0.06] p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-slate-300">
                            Let's create
                          </span>

                          <ArrowUpRight
                            size={15}
                            className="text-cyan-300"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating status */}
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-5 -left-4 rounded-2xl border border-white/10 bg-[#0A0F18]/95 px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,.4)] sm:-left-8"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/[0.08] text-emerald-300">
                      <CheckCircle2 size={16} />
                    </span>

                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-600">
                        Next step
                      </p>

                      <p className="mt-0.5 text-xs font-semibold text-slate-300">
                        Share your idea
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT OPTIONS
        ====================================================== */}
        <section aria-labelledby="contact-options-heading">
          <h2 id="contact-options-heading" className="sr-only">
            Contact options
          </h2>

          <div className="mx-auto max-w-[1300px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <div className="grid gap-5 md:grid-cols-3">
              <ContactCard
                icon={Mail}
                label="Email"
                title="hello@webqenzo.com"
                description="For project enquiries, collaborations and general questions."
                href="mailto:hello@webqenzo.com"
              />

              <ContactCard
                icon={MessageCircle}
                label="WhatsApp"
                title="Start a conversation"
                description="Prefer a quick conversation? Reach out directly on WhatsApp."
                href="#"
              />

              <ContactCard
                icon={Clock3}
                label="Response"
                title="Project enquiries"
                description="Share your requirements and we'll review the details with you."
                href="/get-quote"
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            WHAT TO SEND
        ====================================================== */}
        <section
          aria-labelledby="project-context-heading"
          className="border-y border-white/[0.07] bg-[#070A10]"
        >
          <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">
                  Before we start
                </p>

                <h2
                  id="project-context-heading"
                  className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-5xl"
                >
                  The more context,
                  <br />
                  the better.
                </h2>

                <p className="mt-6 max-w-md text-sm leading-7 text-slate-500">
                  You don't need a perfect brief. Even a rough idea is enough
                  to start the conversation.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "What your business does",
                  "What you want to build",
                  "Your target audience",
                  "Reference websites you like",
                  "Your preferred timeline",
                  "Approximate budget",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-5 py-4"
                  >
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-cyan-300"
                    />

                    <span className="text-sm text-slate-400">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            LOCATION / WORKING STYLE
        ====================================================== */}
        <section aria-labelledby="working-style-heading">
          <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <h2 id="working-style-heading" className="sr-only">
              WebQenzo working style
            </h2>

            <div className="grid gap-6 lg:grid-cols-3">
              <InfoCard
                icon={MapPin}
                title="Based in India"
                text="WebQenzo works with businesses and founders looking to build a stronger digital presence."
              />

              <InfoCard
                icon={Clock3}
                title="Flexible collaboration"
                text="Project communication can be handled remotely through the channels agreed for the project."
              />

              <InfoCard
                icon={Sparkles}
                title="Built around your goals"
                text="Every project starts by understanding the business, audience and outcome behind the website."
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}
        <section
          aria-labelledby="contact-cta-heading"
          className="border-t border-white/[0.07]"
        >
          <div className="mx-auto max-w-[1000px] px-5 py-20 text-center sm:px-8 lg:py-32">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">
              Ready when you are
            </p>

            <h2
              id="contact-cta-heading"
              className="mt-5 text-4xl font-black tracking-[-0.05em] sm:text-6xl"
            >
              Your idea deserves
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                a serious digital home.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Tell us what you're building. We'll take it from there.
            </p>

            <Link
              to="/get-quote"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 text-sm font-bold text-white shadow-[0_20px_50px_rgba(37,99,235,.2)] transition duration-300 hover:-translate-y-1"
            >
              Start Your Project
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition group-hover:rotate-45">
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

/* =========================================================
   CONTACT CARD
========================================================= */

function ContactCard({
  icon: Icon,
  label,
  title,
  description,
  href,
}) {
  return (
    <a
      href={href}
      className="group rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-7 transition duration-500 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.04]"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-cyan-300">
          <Icon size={20} />
        </div>

        <ArrowUpRight
          size={18}
          className="text-slate-700 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"
        />
      </div>

      <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-600">
        {label}
      </p>

      <h3 className="mt-2 text-lg font-bold text-white">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-slate-500">
        {description}
      </p>
    </a>
  );
}

/* =========================================================
   INFO CARD
========================================================= */

function InfoCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-7">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-cyan-300">
        <Icon size={19} />
      </div>

      <h3 className="mt-6 text-lg font-bold">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-slate-500">{text}</p>
    </div>
  );
}

export default Contact;