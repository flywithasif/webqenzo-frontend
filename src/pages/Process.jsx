import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Compass,
  Layers3,
  MessageCircle,
  PenTool,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  Zap,
} from "lucide-react";

import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const BLUE = "#2563EB";
const NAVY = "#07142B";

const images = {
  hero: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=90",
  studio:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=90",
  design:
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=90",
  development:
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=90",
};

const steps = [
  {
    number: "01",
    name: "Discovery",
    eyebrow: "Understand",
    title: "Before we build, we understand.",
    description:
      "Every successful digital experience starts with a deeper understanding. We explore your business, your audience, your ambitions, and what success actually means to you.",
    icon: Search,
    outputs: [
      "Business discovery",
      "Audience research",
      "Project requirements",
      "Goals and success criteria",
    ],
  },
  {
    number: "02",
    name: "Strategy",
    eyebrow: "Define",
    title: "A direction worth believing in.",
    description:
      "We turn discovery into direction. Every decision is shaped around your business objectives, positioning, customer expectations, and the opportunities your digital presence can unlock.",
    icon: Compass,
    outputs: [
      "Website architecture",
      "Content direction",
      "Feature planning",
      "Project roadmap",
    ],
  },
  {
    number: "03",
    name: "Experience",
    eyebrow: "Structure",
    title: "Designed around how people think.",
    description:
      "Before the visual layer, we define the experience. We map journeys, simplify navigation, and create intuitive pathways that make every interaction feel natural.",
    icon: Workflow,
    outputs: [
      "User journeys",
      "Navigation planning",
      "Wireframe direction",
      "Interaction strategy",
    ],
  },
  {
    number: "04",
    name: "Visual Design",
    eyebrow: "Create",
    title: "An identity that feels unmistakable.",
    description:
      "We transform strategy into visual expression. Typography, composition, color, imagery, and interaction come together to create a digital identity that feels considered and distinctive.",
    icon: PenTool,
    outputs: [
      "Creative direction",
      "Interface design",
      "Responsive layouts",
      "Design refinement",
    ],
  },
  {
    number: "05",
    name: "Development",
    eyebrow: "Engineer",
    title: "Every detail, engineered with intent.",
    description:
      "Design becomes reality through thoughtful engineering. We develop responsive, functional, and scalable digital experiences with performance and maintainability in mind.",
    icon: Code2,
    outputs: [
      "Frontend engineering",
      "Responsive development",
      "Functional integrations",
      "Reusable components",
    ],
  },
  {
    number: "06",
    name: "Quality Assurance",
    eyebrow: "Refine",
    title: "Nothing overlooked. Nothing rushed.",
    description:
      "We test the experience across devices, browsers, and essential user journeys. Every detail is reviewed to ensure the finished product feels as polished as intended.",
    icon: ShieldCheck,
    outputs: [
      "Cross-device testing",
      "Browser compatibility",
      "Functional validation",
      "Final refinements",
    ],
  },
  {
    number: "07",
    name: "Launch",
    eyebrow: "Deliver",
    title: "Ready for the world. Ready for business.",
    description:
      "We prepare your digital experience for launch, coordinate the final checks, and make sure everything is ready for a confident release.",
    icon: Rocket,
    outputs: [
      "Final approval",
      "Deployment preparation",
      "Launch verification",
      "Project handover",
    ],
  },
  {
    number: "08",
    name: "Evolution",
    eyebrow: "Grow",
    title: "The launch is just the beginning.",
    description:
      "Your business evolves. Your digital experience should too. We create foundations that allow your website to grow, adapt, and become even more valuable over time.",
    icon: Zap,
    outputs: [
      "Future enhancements",
      "Feature expansion",
      "Content improvements",
      "Growth planning",
    ],
  },
];

const principles = [
  {
    number: "01",
    icon: Target,
    title: "Purpose before pixels.",
    description:
      "Every creative decision starts with a clear understanding of what your business needs to achieve.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Craft in every detail.",
    description:
      "Typography, spacing, interactions, and engineering receive the same thoughtful attention.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Clarity throughout.",
    description:
      "Transparent communication, defined milestones, and collaborative decisions keep every project aligned.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Built with intention.",
    description:
      "A considered balance of aesthetics, usability, performance, and long-term flexibility.",
  },
];

const faqs = [
  {
    question: "How do we get started?",
    answer:
      "We begin with a conversation about your business, your vision, your audience, and your requirements. From there, we establish the right scope and direction for your project.",
  },
  {
    question: "How long does a website project take?",
    answer:
      "Every project is different. The timeline depends on the scope, complexity, content readiness, and feedback cycles. We discuss an estimated schedule during planning.",
  },
  {
    question: "Will I be involved in the design process?",
    answer:
      "Absolutely. Your perspective is essential. We involve you at important milestones so you can review the direction, share feedback, and make informed decisions.",
  },
  {
    question: "Can I request design revisions?",
    answer:
      "Yes. Feedback is an essential part of the process. We work through revisions at defined milestones to make sure the final experience aligns with your vision and business goals.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Every project is designed with responsive behaviour in mind. We test across screen sizes to ensure the experience feels intuitive on mobile, tablet, and desktop.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We provide the necessary handover and can continue supporting your website through improvements, updates, maintenance, and future feature development.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={reveal}
      transition={{
        duration: reduceMotion ? 0 : 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children, dark = false }) {
  return (
    <div
      className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] ${
        dark ? "text-blue-300" : "text-blue-600"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
      {children}
    </div>
  );
}

function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const active = steps[activeStep];
  const ActiveIcon = active.icon;

  return (
    <>
      <SEO
        title="Web Design & Development Process"
        description="Discover WebQenzo's premium website design and development process. From strategy and UI/UX design to engineering, testing and launch."
      />

      <main className="overflow-hidden bg-white text-[#07142B] selection:bg-blue-200 selection:text-blue-950">

        {/* ==================================================
            HERO
        ================================================== */}

        <section className="relative overflow-hidden bg-[#F5F8FC]">

          <div className="pointer-events-none absolute -right-36 -top-36 h-[450px] w-[450px] rounded-full bg-blue-100/70 blur-[100px]" />

          <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

            <div className="grid items-center gap-9 lg:grid-cols-[1.05fr_.95fr] lg:gap-12">

              <Reveal>
                <div className="max-w-2xl">

                  <SectionLabel>How we bring ideas to life</SectionLabel>

                  <h1 className="mt-5 text-[clamp(3rem,7.5vw,6.5rem)] font-semibold leading-[0.94] tracking-[-0.075em]">
                    Good work is
                    <br />
                    never{" "}
                    <span className="font-serif font-normal italic text-blue-600">
                      accidental.
                    </span>
                  </h1>

                  <p className="mt-6 max-w-lg text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8">
                    Thoughtful strategy. Distinctive design. Purposeful
                    development. Every digital experience we create follows
                    a process built around clarity, craft, and results.
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-3">

                    <Link
                      to="/get-quote"
                      className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                      Start a project
                      <ArrowUpRight
                        size={17}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>

                    <a
                      href="#our-process"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
                    >
                      Explore our process
                      <ArrowRight size={16} />
                    </a>

                  </div>

                  <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 border-t border-slate-200 pt-5">

                    <div>
                      <p className="text-xl font-semibold tracking-tight">
                        08
                      </p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-slate-500">
                        Defined stages
                      </p>
                    </div>

                    <div className="h-10 w-px bg-slate-200" />

                    <div>
                      <p className="text-xl font-semibold tracking-tight">
                        01
                      </p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-slate-500">
                        Shared vision
                      </p>
                    </div>

                    <div className="h-10 w-px bg-slate-200" />

                    <div>
                      <p className="text-xl font-semibold tracking-tight">
                        ∞
                      </p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-slate-500">
                        Possibilities
                      </p>
                    </div>

                  </div>

                </div>
              </Reveal>

              <Reveal delay={0.12}>

                <div className="relative">

                  <div className="relative overflow-hidden rounded-[24px] sm:rounded-[30px]">

                    <img
                      src={images.hero}
                      alt="Creative digital workspace"
                      className="h-[340px] w-full object-cover sm:h-[440px] lg:h-[510px]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#07142B]/75 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7">

                      <div className="flex items-end justify-between gap-4">

                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-200">
                            Our approach
                          </span>

                          <h2 className="mt-2 max-w-sm text-2xl font-medium leading-tight tracking-tight text-white sm:text-3xl">
                            Design with meaning.
                            <br />
                            Build with purpose.
                          </h2>
                        </div>

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur">
                          <ArrowUpRight size={20} />
                        </div>

                      </div>

                    </div>

                  </div>

                  <div className="absolute -bottom-4 -left-2 rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-xl sm:-left-5 sm:px-5">

                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <Sparkles size={18} />
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-slate-900">
                          Thoughtfully crafted
                        </p>
                        <p className="mt-0.5 text-[10px] text-slate-500">
                          From concept to creation
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

              </Reveal>

            </div>

          </div>

        </section>

        {/* ==================================================
            INTRODUCTION
        ================================================== */}

        <section className="py-14 sm:py-20">

          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

            <Reveal>

              <div className="grid gap-6 lg:grid-cols-[.65fr_1.35fr] lg:gap-12">

                <div>
                  <SectionLabel>The philosophy</SectionLabel>
                </div>

                <div>

                  <h2 className="max-w-4xl text-[clamp(2rem,4.5vw,4.25rem)] font-medium leading-[1.08] tracking-[-0.06em]">
                    Great digital experiences aren't just created.
                    <span className="text-blue-600">
                      {" "}They're carefully considered.
                    </span>
                  </h2>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">

                    <p className="text-sm leading-7 text-slate-600">
                      We believe exceptional work comes from asking the
                      right questions, challenging assumptions, and
                      making every decision with intention.
                    </p>

                    <p className="text-sm leading-7 text-slate-600">
                      Our process gives creativity room to flourish
                      while keeping projects focused, organised, and
                      moving towards meaningful outcomes.
                    </p>

                  </div>

                </div>

              </div>

            </Reveal>

          </div>

        </section>

        {/* ==================================================
            PROCESS EXPLORER
        ================================================== */}

        <section
          id="our-process"
          className="scroll-mt-20 border-y border-slate-100 bg-[#F8FAFC] py-14 sm:py-20"
        >

          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

            <Reveal>

              <div className="mb-8 flex flex-wrap items-end justify-between gap-5">

                <div>
                  <SectionLabel>Our methodology</SectionLabel>

                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.055em] sm:text-5xl">
                    Eight steps.
                    <span className="text-blue-600"> One vision.</span>
                  </h2>
                </div>

                <p className="max-w-sm text-sm leading-6 text-slate-500">
                  A structured approach that turns complex ideas
                  into exceptional digital experiences.
                </p>

              </div>

            </Reveal>

            <div className="grid gap-5 lg:grid-cols-[.72fr_1.28fr]">

              {/* PROCESS NAVIGATION */}

              <Reveal>

                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-1 lg:gap-1.5">

                  {steps.map((step, index) => {

                    const isActive = activeStep === index;

                    return (
                      <button
                        key={step.number}
                        onClick={() => setActiveStep(index)}
                        className={`group flex items-center gap-3 rounded-xl border p-3 text-left transition-all duration-300 sm:p-3 lg:px-4 lg:py-3.5 ${
                          isActive
                            ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-600/10"
                            : "border-transparent bg-white text-slate-600 hover:border-slate-200 hover:text-blue-600"
                        }`}
                      >

                        <span
                          className={`text-xs font-semibold ${
                            isActive
                              ? "text-blue-100"
                              : "text-slate-400"
                          }`}
                        >
                          {step.number}
                        </span>

                        <span className="min-w-0 flex-1">

                          <span className="block truncate text-[11px] font-semibold sm:text-xs">
                            {step.name}
                          </span>

                          <span
                            className={`mt-0.5 hidden text-[10px] sm:block ${
                              isActive
                                ? "text-blue-100"
                                : "text-slate-400"
                            }`}
                          >
                            {step.eyebrow}
                          </span>

                        </span>

                        <ArrowRight
                          size={14}
                          className={`hidden transition-transform lg:block ${
                            isActive
                              ? "translate-x-0 text-white"
                              : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                          }`}
                        />

                      </button>
                    );
                  })}

                </div>

              </Reveal>

              {/* ACTIVE STEP */}

              <Reveal delay={0.08}>

                <div className="relative min-h-[370px] overflow-hidden rounded-2xl bg-white p-5 shadow-[0_12px_50px_rgba(15,23,42,0.04)] sm:p-8 lg:p-9">

                  <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-blue-50 blur-3xl" />

                  <AnimatePresence mode="wait">

                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="relative"
                    >

                      <div className="flex items-start justify-between gap-4">

                        <div>

                          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                            Phase {active.number}
                            <span className="text-slate-300">/ 08</span>
                          </div>

                          <h3 className="mt-4 max-w-xl text-2xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
                            {active.title}
                          </h3>

                        </div>

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 sm:h-14 sm:w-14">
                          <ActiveIcon size={23} strokeWidth={1.6} />
                        </div>

                      </div>

                      <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                        {active.description}
                      </p>

                      <div className="mt-6 border-t border-slate-100 pt-5">

                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                          What this stage delivers
                        </p>

                        <div className="mt-4 grid gap-3 sm:grid-cols-2">

                          {active.outputs.map((output) => (

                            <div
                              key={output}
                              className="flex items-center gap-2.5 text-xs font-medium text-slate-700"
                            >
                              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                                <Check size={12} strokeWidth={2.5} />
                              </div>

                              {output}
                            </div>

                          ))}

                        </div>

                      </div>

                      <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-4">

                        <span className="text-xs text-slate-400">
                          {active.number} — {active.name}
                        </span>

                        <button
                          onClick={() =>
                            setActiveStep((prev) =>
                              prev === steps.length - 1 ? 0 : prev + 1
                            )
                          }
                          className="group inline-flex items-center gap-2 text-xs font-semibold text-blue-600 transition hover:text-blue-800"
                        >
                          Next stage

                          <ArrowRight
                            size={15}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </button>

                      </div>

                    </motion.div>

                  </AnimatePresence>

                </div>

              </Reveal>

            </div>

          </div>

        </section>

        {/* ==================================================
            DARK EDITORIAL SECTION
        ================================================== */}

        <section className="bg-[#07142B] py-14 text-white sm:py-20">

          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

            <div className="grid items-center gap-8 lg:grid-cols-[1fr_.95fr] lg:gap-12">

              <Reveal>

                <div>

                  <SectionLabel dark>More than a service</SectionLabel>

                  <h2 className="mt-4 max-w-xl text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[1.02] tracking-[-0.065em]">
                    A partnership
                    <br />
                    built on{" "}
                    <span className="font-serif italic text-blue-300">
                      possibilities.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300">
                    The best projects aren't built through transactions.
                    They're built through collaboration, trust, shared
                    ambition, and a willingness to create something
                    that genuinely matters.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">

                    {[
                      "Open communication",
                      "Shared decisions",
                      "Clear milestones",
                    ].map((item) => (

                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] font-medium text-slate-300"
                      >
                        {item}
                      </span>

                    ))}

                  </div>

                </div>

              </Reveal>

              <Reveal delay={0.1}>

                <div className="relative">

                  <img
                    src={images.studio}
                    alt="Creative team collaborating on a project"
                    className="h-[320px] w-full rounded-2xl object-cover sm:h-[410px]"
                  />

                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#07142B]/45 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between sm:bottom-6 sm:left-6 sm:right-6">

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-blue-200">
                        Together, we create
                      </p>
                      <p className="mt-1 text-xl font-medium text-white">
                        Something meaningful.
                      </p>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur">
                      <Sparkles size={17} />
                    </div>

                  </div>

                </div>

              </Reveal>

            </div>

          </div>

        </section>

        {/* ==================================================
            PRINCIPLES
        ================================================== */}

        <section className="py-14 sm:py-20">

          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

            <Reveal>

              <div className="mb-8 grid gap-4 sm:grid-cols-[1fr_.6fr] sm:items-end">

                <div>

                  <SectionLabel>What guides us</SectionLabel>

                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.055em] sm:text-5xl">
                    The details
                    <span className="text-blue-600"> matter.</span>
                  </h2>

                </div>

                <p className="text-sm leading-6 text-slate-500">
                  The principles behind every decision, every design,
                  and every line of code.
                </p>

              </div>

            </Reveal>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

              {principles.map((item, index) => {

                const Icon = item.icon;

                return (
                  <Reveal key={item.number} delay={index * 0.06}>

                    <div className="group h-full rounded-2xl border border-slate-100 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-[0_15px_35px_rgba(15,23,42,0.05)] sm:p-6">

                      <div className="flex items-center justify-between">

                        <span className="text-[10px] font-semibold tracking-[0.15em] text-slate-400">
                          {item.number}
                        </span>

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                          <Icon size={18} strokeWidth={1.7} />
                        </div>

                      </div>

                      <h3 className="mt-5 text-lg font-semibold tracking-tight">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-slate-500">
                        {item.description}
                      </p>

                    </div>

                  </Reveal>
                );
              })}

            </div>

          </div>

        </section>

        {/* ==================================================
            DESIGN + DEVELOPMENT
        ================================================== */}

        <section className="border-y border-slate-100 bg-[#F8FAFC] py-14 sm:py-20">

          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

            <Reveal>

              <div className="mb-8 flex flex-wrap items-end justify-between gap-4">

                <div>

                  <SectionLabel>Where creativity meets technology</SectionLabel>

                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.055em] sm:text-5xl">
                    Beautiful by design.
                    <br className="hidden sm:block" />
                    <span className="text-blue-600">
                      Powerful by nature.
                    </span>
                  </h2>

                </div>

              </div>

            </Reveal>

            <div className="grid gap-4 md:grid-cols-2">

              <Reveal>

                <div className="group relative overflow-hidden rounded-2xl">

                  <img
                    src={images.design}
                    alt="Design team creating a digital experience"
                    className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-[1.04] sm:h-[380px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#07142B]/90 via-[#07142B]/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">

                    <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-200">
                      <PenTool size={14} />
                      01 / Design
                    </div>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      A digital experience
                      <br />
                      worth remembering.
                    </h3>

                    <p className="mt-2 max-w-md text-xs leading-6 text-slate-200">
                      Visual storytelling, intuitive interfaces,
                      and a brand presence that stands apart.
                    </p>

                  </div>

                </div>

              </Reveal>

              <Reveal delay={0.08}>

                <div className="group relative overflow-hidden rounded-2xl">

                  <img
                    src={images.development}
                    alt="Software development and engineering"
                    className="h-[300px] w-full object-cover transition duration-700 group-hover:scale-[1.04] sm:h-[380px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#07142B]/90 via-[#07142B]/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">

                    <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-200">
                      <Code2 size={14} />
                      02 / Development
                    </div>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      Engineered for
                      <br />
                      what comes next.
                    </h3>

                    <p className="mt-2 max-w-md text-xs leading-6 text-slate-200">
                      Reliable code, thoughtful architecture,
                      performance, and technology built to scale.
                    </p>

                  </div>

                </div>

              </Reveal>

            </div>

          </div>

        </section>

        {/* ==================================================
            COLLABORATION
        ================================================== */}

        <section className="py-14 sm:py-20">

          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

            <Reveal>

              <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">

                <div>

                  <SectionLabel>Built together</SectionLabel>

                  <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-5xl">
                    You're not
                    <br />
                    on the sidelines.
                  </h2>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-slate-500">
                    You're part of the creative process. Your
                    perspective shapes the work, from the first
                    conversation to the final launch.
                  </p>

                  <Link
                    to="/get-quote"
                    className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600"
                  >
                    Let's work together
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>

                </div>

                <div className="grid gap-3 sm:grid-cols-2">

                  {[
                    {
                      title: "Stay informed",
                      text: "Regular updates and clear communication at every milestone.",
                    },
                    {
                      title: "Make decisions",
                      text: "Your input helps shape the creative direction and experience.",
                    },
                    {
                      title: "Review progress",
                      text: "See the work evolve and provide feedback when it matters.",
                    },
                    {
                      title: "Move forward",
                      text: "A shared understanding keeps the project moving confidently.",
                    },
                  ].map((item, index) => (

                    <Reveal key={item.title} delay={index * 0.05}>

                      <div className="rounded-xl border border-slate-100 bg-[#F8FAFC] p-5">

                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                          <Check size={15} />
                        </div>

                        <h3 className="mt-4 text-sm font-semibold">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-xs leading-6 text-slate-500">
                          {item.text}
                        </p>

                      </div>

                    </Reveal>

                  ))}

                </div>

              </div>

            </Reveal>

          </div>

        </section>

        {/* ==================================================
            FAQ
        ================================================== */}

        <section className="border-t border-slate-100 bg-[#F8FAFC] py-14 sm:py-20">

          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

            <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]">

              <Reveal>

                <div>

                  <SectionLabel>Questions & answers</SectionLabel>

                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.055em] sm:text-5xl">
                    Things worth
                    <br />
                    <span className="text-blue-600">knowing.</span>
                  </h2>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-slate-500">
                    A few details about working together and
                    what you can expect along the way.
                  </p>

                </div>

              </Reveal>

              <Reveal delay={0.08}>

                <div className="divide-y divide-slate-200 border-t border-slate-200">

                  {faqs.map((faq, index) => {

                    const isOpen = openFaq === index;

                    return (
                      <div key={faq.question}>

                        <button
                          onClick={() =>
                            setOpenFaq(isOpen ? -1 : index)
                          }
                          className="flex w-full items-center justify-between gap-4 py-5 text-left"
                        >

                          <span className="text-sm font-semibold text-slate-800 sm:text-base">
                            {faq.question}
                          </span>

                          <span
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                              isOpen
                                ? "bg-blue-600 text-white"
                                : "bg-white text-slate-500"
                            }`}
                          >
                            <ChevronDown
                              size={16}
                              className={`transition-transform ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </span>

                        </button>

                        <AnimatePresence initial={false}>

                          {isOpen && (

                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >

                              <p className="max-w-xl pb-5 text-sm leading-7 text-slate-500">
                                {faq.answer}
                              </p>

                            </motion.div>

                          )}

                        </AnimatePresence>

                      </div>
                    );
                  })}

                </div>

              </Reveal>

            </div>

          </div>

        </section>

        {/* ==================================================
            FINAL CTA
        ================================================== */}

        <section className="px-5 py-8 sm:px-8 sm:py-12 lg:px-12">

          <Reveal>

            <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[24px] bg-blue-600 px-6 py-10 text-white sm:rounded-[30px] sm:px-10 sm:py-14 lg:px-14">

              <div className="pointer-events-none absolute -right-24 -top-36 h-[400px] w-[400px] rounded-full border border-white/10" />

              <div className="pointer-events-none absolute -right-12 -top-24 h-[300px] w-[300px] rounded-full border border-white/10" />

              <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-blue-500/40 to-transparent" />

              <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">

                <div>

                  <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-100">
                    <Sparkles size={14} />
                    Your next chapter starts here
                  </div>

                  <h2 className="mt-4 text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[1.02] tracking-[-0.065em]">
                    Let's create
                    <br />
                    something{" "}
                    <span className="font-serif font-normal italic text-blue-200">
                      extraordinary.
                    </span>
                  </h2>

                  <p className="mt-4 max-w-lg text-sm leading-7 text-blue-100">
                    Have a vision worth bringing to life? Let's
                    explore what we can create together, with
                    thoughtful design, clear strategy, and
                    purposeful execution.
                  </p>

                </div>

                <Link
                  to="/get-quote"
                  className="group flex h-28 w-28 shrink-0 flex-col items-center justify-center gap-2 rounded-full bg-white text-center text-xs font-semibold text-blue-600 shadow-xl transition duration-300 hover:-translate-y-1 sm:h-36 sm:w-36 sm:text-sm"
                >

                  <ArrowUpRight
                    size={24}
                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />

                  Start a project

                </Link>

              </div>

              <div className="relative mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/20 pt-5">

                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-blue-100 sm:text-[10px]">
                  WebQenzo — Digital experiences, considered.
                </span>

                <span className="text-[10px] text-blue-100">
                  Strategy / Design / Development
                </span>

              </div>

            </div>

          </Reveal>

        </section>

      </main>
    </>
  );
}

export default Process;