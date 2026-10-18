import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  ChevronDown,
  Code2,
  FileCheck2,
  Gauge,
  Globe2,
  Layers3,
  MessageCircle,
  Palette,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TestTube2,
  Users,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const processSteps = [
  {
    number: "01",
    label: "Discover",
    title: "First, we understand your vision.",
    text: "We learn about your business, audience, goals and the opportunities that will make your digital presence stand out.",
    icon: Search,
    deliverables: ["Business discovery", "Audience research", "Project goals", "Requirement planning"],
  },
  {
    number: "02",
    label: "Strategy",
    title: "A clear plan. A stronger direction.",
    text: "We map the structure, content and priorities of your website before visual design begins.",
    icon: Target,
    deliverables: ["Site structure", "Content direction", "Feature planning", "Project roadmap"],
  },
  {
    number: "03",
    label: "Experience",
    title: "Designed around your customers.",
    text: "We plan intuitive navigation, meaningful interactions and a seamless journey from first visit to action.",
    icon: Workflow,
    deliverables: ["User journey", "Navigation", "Wireframe direction", "Interaction planning"],
  },
  {
    number: "04",
    label: "Design",
    title: "Distinctive design. Timeless appeal.",
    text: "Carefully considered typography, spacing, color and visual details create a cohesive premium experience.",
    icon: Palette,
    deliverables: ["Visual direction", "UI system", "Responsive layouts", "Design refinement"],
  },
  {
    number: "05",
    label: "Develop",
    title: "Beautifully designed. Expertly built.",
    text: "We turn the approved design into a responsive, maintainable website built around your requirements.",
    icon: Code2,
    deliverables: ["Frontend development", "Responsive implementation", "Integrations", "Reusable components"],
  },
  {
    number: "06",
    label: "Validate",
    title: "Every detail earns its place.",
    text: "We review the experience across devices, browsers, interactions, content and important user journeys.",
    icon: TestTube2,
    deliverables: ["Responsive testing", "Browser checks", "Link validation", "Final refinements"],
  },
  {
    number: "07",
    label: "Launch",
    title: "Ready for the world to see.",
    text: "After approval, we prepare the website for production and check the essential details before launch.",
    icon: Rocket,
    deliverables: ["Final approval", "Deployment preparation", "Launch checks", "Project handover"],
  },
  {
    number: "08",
    label: "Evolve",
    title: "Built to grow with your ambition.",
    text: "Your digital presence can continue to evolve with new features, improvements and changing business needs.",
    icon: Gauge,
    deliverables: ["Future improvements", "New features", "Content updates", "Growth planning"],
  },
];

const principles = [
  {
    icon: MessageCircle,
    title: "Transparent communication",
    text: "Clear conversations and visible decisions throughout the project.",
  },
  {
    icon: FileCheck2,
    title: "Defined deliverables",
    text: "A structured scope that keeps expectations and priorities aligned.",
  },
  {
    icon: ShieldCheck,
    title: "Quality by design",
    text: "Careful attention to responsiveness, usability and technical details.",
  },
  {
    icon: Users,
    title: "True collaboration",
    text: "Your knowledge and feedback remain part of every important decision.",
  },
];

const clientSide = [
  "Share business goals and requirements",
  "Provide available content and assets",
  "Give feedback at agreed milestones",
  "Approve the agreed project stages",
];

const agencySide = [
  "Translate requirements into a clear plan",
  "Design and develop the agreed experience",
  "Test and refine the implementation",
  "Prepare the project for launch",
];

const faqs = [
  {
    question: "How does a project begin?",
    answer:
      "We begin by understanding your business, goals, requirements and desired outcome. This helps us define a suitable direction and project scope.",
  },
  {
    question: "Do I need all my content ready?",
    answer:
      "Not necessarily. We can identify the required content during planning and agree on responsibilities based on the project.",
  },
  {
    question: "When does development begin?",
    answer:
      "We generally establish the structure and visual direction before full development, helping keep the finished website aligned with the approved experience.",
  },
  {
    question: "Can I request changes?",
    answer:
      "Yes. Feedback is part of the process. Revision rounds and their scope are agreed upon according to the project requirements.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Ongoing support, updates and improvements can be discussed and planned according to your needs.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function Process() {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://webqenzo.com/process#webpage",
          url: "https://webqenzo.com/process",
          name: "Web Design & Development Process | WebQenzo",
          description:
            "Discover the WebQenzo website design and development process, from discovery to launch and ongoing improvements.",
          isPartOf: {
            "@type": "WebSite",
            "@id": "https://webqenzo.com/#website",
            url: "https://webqenzo.com/",
            name: "WebQenzo",
          },
          inLanguage: "en",
        },
        {
          "@type": "HowTo",
          name: "WebQenzo Website Design and Development Process",
          step: processSteps.map((step) => ({
            "@type": "HowToStep",
            position: Number(step.number),
            name: step.label,
            text: step.text,
          })),
        },
        {
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.pageSchema = "process";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => script.remove();
  }, []);

  return (
    <>
      <SEO
        title="Web Design & Development Process"
        description="Discover the WebQenzo website design and development process, from strategy and premium UI/UX design to development, testing and launch."
      />

      <main className="overflow-hidden bg-white text-slate-900">
        {/* HERO */}
        <section className="relative isolate border-b border-blue-100/70">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.13),_transparent_45%),linear-gradient(to_bottom,_#f8fbff,_#ffffff)]" />
          <div className="absolute right-[-8rem] top-20 -z-10 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-32">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 shadow-sm">
                <Sparkles size={14} />
                The WebQenzo Process
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
                Thoughtful strategy.
                <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 bg-clip-text pb-2 text-transparent">
                  Exceptional digital.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                Great websites are never accidental. Discover our considered
                approach to creating refined digital experiences, built around
                your brand, your customers and your ambition.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/get-quote"
                  className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-blue-700 px-7 text-sm font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:bg-blue-800"
                >
                  Discuss your project
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
                <a
                  href="#our-process"
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
                >
                  Explore our approach
                  <ArrowRight size={17} />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
                <span className="inline-flex items-center gap-2">
                  <BadgeCheck size={17} className="text-blue-600" />
                  Clear project stages
                </span>
                <span className="inline-flex items-center gap-2">
                  <BadgeCheck size={17} className="text-blue-600" />
                  Responsive by design
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative mx-auto w-full max-w-lg"
            >
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-blue-100 via-white to-sky-100 blur-xl" />

              <div className="relative rounded-[2rem] border border-white bg-white p-5 shadow-2xl shadow-blue-950/10 sm:p-7">
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                      Our framework
                    </p>
                    <h2 className="mt-2 text-xl font-semibold tracking-tight">
                      From vision to launch
                    </h2>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Layers3 size={23} />
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {processSteps.slice(0, 5).map((step, index) => {
                    const Icon = step.icon;

                    return (
                      <div
                        key={step.number}
                        className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-3.5 transition hover:border-blue-200 hover:bg-blue-50/50"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                          <Icon size={20} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-slate-900">
                            {step.label}
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            {[
                              "Understand the opportunity",
                              "Set the right direction",
                              "Map the experience",
                              "Craft the visual identity",
                              "Build with precision",
                            ][index]}
                          </p>
                        </div>
                        <span className="text-xs font-semibold tracking-widest text-blue-600">
                          {step.number}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 flex items-center gap-3 rounded-2xl bg-blue-700 p-4 text-white">
                  <Globe2 size={22} />
                  <div>
                    <p className="text-sm font-semibold">
                      Made for your next chapter
                    </p>
                    <p className="mt-1 text-xs text-blue-100">
                      Designed with clarity and purpose.
                    </p>
                  </div>
                  <ArrowUpRight size={19} className="ml-auto" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROCESS STEPS */}
        <section id="our-process" className="scroll-mt-20 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="mx-auto mb-14 max-w-3xl text-center sm:mb-20"
            >
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
                A considered approach
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl md:text-5xl">
                Eight stages. One clear vision.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
                Every stage has a purpose. Together, they help transform an
                initial idea into a considered, functional digital experience.
              </p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.article
                    key={step.number}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.12 }}
                    variants={fadeUp}
                    transition={{ delay: (index % 4) * 0.06 }}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[1.65rem] border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/[0.06] sm:p-7"
                  >
                    <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-blue-50/80 transition group-hover:bg-blue-100/70" />

                    <div className="relative flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-white text-blue-700 shadow-sm">
                        <Icon size={22} strokeWidth={1.8} />
                      </div>
                      <span className="text-3xl font-light tracking-tight text-blue-100 transition group-hover:text-blue-200">
                        {step.number}
                      </span>
                    </div>

                    <p className="relative mt-7 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                      {step.label}
                    </p>
                    <h3 className="relative mt-3 text-xl font-semibold leading-snug tracking-tight text-slate-950">
                      {step.title}
                    </h3>
                    <p className="relative mt-3 text-sm leading-7 text-slate-600">
                      {step.text}
                    </p>

                    <div className="relative mt-6 border-t border-slate-100 pt-5">
                      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                        Key focus
                      </p>
                      <ul className="space-y-2.5">
                        {step.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-slate-600"
                          >
                            <Check
                              size={15}
                              className="mt-0.5 shrink-0 text-blue-600"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="border-y border-blue-100/70 bg-[#F6F9FF] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
                  What guides us
                </p>
                <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl">
                  Premium work begins with the right principles.
                </h2>
                <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
                  The process is not just about deliverables. It is about
                  thoughtful decisions, shared expectations and consistent
                  attention to detail.
                </p>
                <Link
                  to="/get-quote"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:gap-3"
                >
                  Start a conversation <ArrowRight size={17} />
                </Link>
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-2">
                {principles.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      transition={{ delay: index * 0.07 }}
                      className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition hover:shadow-lg hover:shadow-blue-950/[0.05] sm:p-7"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                        <Icon size={22} strokeWidth={1.8} />
                      </div>
                      <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* COLLABORATION */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
                Better together
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                A partnership built on clarity.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                The best outcomes happen when responsibilities are understood
                and both sides work toward the same vision.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-7 sm:p-9">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Users size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                      Your contribution
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-slate-950">
                      Your business expertise
                    </h3>
                  </div>
                </div>
                <ul className="mt-7 space-y-4">
                  {clientSide.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                      <Check size={18} className="mt-0.5 shrink-0 text-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.75rem] border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-7 sm:p-9">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-white">
                    <Code2 size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                      Our contribution
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-slate-950">
                      Our design expertise
                    </h3>
                  </div>
                </div>
                <ul className="mt-7 space-y-4">
                  {agencySide.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                      <Check size={18} className="mt-0.5 shrink-0 text-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-slate-100 bg-slate-50/70 py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700">
                Helpful answers
              </p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
                A few things you may be wondering.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Every project is different. Here is a little more about how we
                approach the journey.
              </p>
              <div className="mt-7 flex items-center gap-3 text-sm text-slate-500">
                <MessageCircle size={18} className="text-blue-700" />
                Have another question?
              </div>
              <Link
                to="/get-quote"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:gap-3"
              >
                Talk to our team <ArrowRight size={17} />
              </Link>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className={`overflow-hidden rounded-2xl border bg-white transition ${
                      isOpen ? "border-blue-200 shadow-sm" : "border-slate-200"
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                    >
                      <span className="text-sm font-semibold leading-6 text-slate-900 sm:text-base">
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={19}
                        className={`shrink-0 text-blue-700 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                        <p className="border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 px-6 py-14 text-center shadow-2xl shadow-blue-900/15 sm:px-12 sm:py-20">
            <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/10" />
            <div className="absolute -bottom-36 -left-20 h-80 w-80 rounded-full border border-white/10" />
            <div className="relative mx-auto max-w-3xl">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white">
                <Sparkles size={25} />
              </div>
              <h2 className="mt-7 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
                Your next chapter starts with a conversation.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-blue-100 sm:text-base sm:leading-8">
                Tell us what you are building. Together, we can shape a digital
                experience that reflects the quality and ambition of your brand.
              </p>
              <Link
                to="/get-quote"
                className="group mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-7 text-sm font-semibold text-blue-800 transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                Let&apos;s discuss your project
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Process;