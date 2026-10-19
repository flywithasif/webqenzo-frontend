
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Compass,
  Layers3,
  MessageCircle,
  MoveUpRight,
  PenTool,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const BLUE = "#2563EB";

const images = {
  hero: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=85",
  studio: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85",
  code: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=85",
  workspace: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=85",
};

const steps = [
  {
    number: "01",
    name: "Discovery",
    eyebrow: "Understand",
    title: "Every great idea begins with understanding.",
    description:
      "Before a single pixel is designed, we immerse ourselves in your business, your audience, and the ambition behind your brand.",
    icon: Search,
    outputs: [
      "Business & brand discovery",
      "Audience understanding",
      "Project requirements",
      "Goals & success criteria",
    ],
  },
  {
    number: "02",
    name: "Strategy",
    eyebrow: "Define",
    title: "A thoughtful direction, built on purpose.",
    description:
      "We transform insights into a clear digital direction, connecting your business objectives with the experience your customers deserve.",
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
    title: "Intuitive by nature. Intentional by design.",
    description:
      "We shape the journey before the visuals, creating intuitive pathways that make every interaction feel effortless.",
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
    title: "Where your identity becomes an experience.",
    description:
      "Through expressive typography, refined composition, and purposeful details, we create a digital presence that feels unmistakably yours.",
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
    title: "Beautiful on the surface. Precise underneath.",
    description:
      "Approved designs become carefully engineered digital experiences, balancing performance, responsiveness, and maintainability.",
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
    title: "The smallest details make the difference.",
    description:
      "We review the details that shape the entire experience, from visual consistency to functionality across devices.",
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
    title: "A confident beginning, not just a finish line.",
    description:
      "Once approved, we prepare your website for its debut, ensuring the essential launch details are considered.",
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
    title: "Created for today. Ready for what comes next.",
    description:
      "Your business never stands still. Your digital presence should have the flexibility to evolve alongside it.",
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
    icon: Target,
    number: "01",
    title: "Purpose before pixels.",
    text: "Every creative decision begins with a clear understanding of what your business needs to achieve.",
  },
  {
    icon: Layers3,
    number: "02",
    title: "Craft in every detail.",
    text: "From typography to technical implementation, the smallest details receive thoughtful attention.",
  },
  {
    icon: MessageCircle,
    number: "03",
    title: "Clarity throughout.",
    text: "Open communication, defined milestones, and collaborative decisions keep everyone aligned.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Built with intention.",
    text: "A considered balance of aesthetics, usability, responsiveness, and long-term flexibility.",
  },
];

const faqs = [
  {
    question: "How do we get started?",
    answer:
      "We begin with a conversation about your business, vision, audience, and requirements. From there, we establish the right scope and direction for your project.",
  },
  {
    question: "How long does a website project take?",
    answer:
      "Every project is different. The timeline depends on its scope, complexity, content readiness, and feedback cycles. We discuss an estimated schedule during planning.",
  },
  {
    question: "Will I be involved in the design process?",
    answer:
      "Absolutely. Your perspective is essential. We involve you at important milestones to review the direction and provide feedback.",
  },
  {
    question: "Can I request design revisions?",
    answer:
      "Yes. Feedback and refinement are part of our collaborative process. Revision rounds and their scope are agreed upon for each project.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Responsive design is part of our approach. We plan and review experiences across mobile, tablet, and desktop screen sizes.",
  },
  {
    question: "What happens after the website launches?",
    answer:
      "We provide the agreed handover and can discuss future enhancements, ongoing support, and updates based on your business needs.",
  },
];

const fade = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      variants={fade}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, light = false }) {
  return (
    <div
      className={`flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] sm:text-xs ${
        light ? "text-cyan-200" : "text-[#2563EB]"
      }`}
    >
      <span
        className={`h-px w-7 ${
          light ? "bg-cyan-300" : "bg-[#2563EB]"
        }`}
      />
      {children}
    </div>
  );
}

function SectionHeading({ label, title, description }) {
  return (
    <Reveal className="max-w-3xl">
      <Eyebrow>{label}</Eyebrow>
      <h2 className="mt-7 text-4xl font-semibold leading-[1.12] tracking-[-0.055em] text-[#05070B] sm:text-5xl lg:text-[62px]">
        {title}
      </h2>
      {description && (
        <p className="mt-6 max-w-xl text-base leading-8 text-slate-500">
          {description}
        </p>
      )}
    </Reveal>
  );
}

function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const reduceMotion = useReducedMotion();

  const active = steps[activeStep];
  const ActiveIcon = active.icon;

  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://webqenzo.com/process#webpage",
          url: "https://webqenzo.com/process",
          name: "Web Design & Development Process | WebQenzo",
          description:
            "Explore WebQenzo's website design and development process, from discovery and strategy to design, development, testing and launch.",
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
          step: steps.map((step, index) => ({
            "@type": "HowToStep",
            position: index + 1,
            name: step.name,
            text: step.description,
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
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => script.remove();
  }, []);

  return (
    <>
      <SEO
        title="Web Design & Development Process"
        description="Discover WebQenzo's premium website design and development process. From strategy and UI/UX design to engineering, testing and launch."
      />

      <main className="overflow-hidden bg-white text-[#05070B] selection:bg-blue-200">
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-[#F8FAFC]">
          <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[55%] bg-[radial-gradient(ellipse_at_top_right,rgba(18,59,206,0.08),transparent_65%)]" />

          <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-5 pb-20 pt-20 sm:px-10 sm:pb-28 sm:pt-24 lg:min-h-[760px] lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:px-16 lg:py-24">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85 }}
              className="relative z-10"
            >
              <Eyebrow>Inside the WebQenzo studio</Eyebrow>

              <h1 className="mt-9 max-w-[720px] text-[clamp(3.5rem,6.4vw,6.9rem)] font-semibold leading-[0.99] tracking-[-0.075em]">
                Behind every
                <br />
                remarkable
                <br />
                <span className="font-serif font-normal italic tracking-[-0.065em] text-[#2563EB]">
                  digital experience.
                </span>
              </h1>

              <p className="mt-9 max-w-[490px] text-base leading-8 text-[#66728A] sm:text-lg">
                Great digital experiences don't happen by chance.
                They're imagined with purpose, designed with care,
                and engineered with precision.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link
                  to="/get-quote"
                  className="group inline-flex min-h-14 items-center gap-7 bg-[#2563EB] px-7 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(18,59,206,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1D4ED8]"
                >
                  Start your project
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                <a
                  href="#our-process"
                  className="group inline-flex items-center gap-3 text-sm font-semibold text-[#05070B]"
                >
                  Explore our process
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 transition group-hover:border-cyan-400 group-hover:text-blue-600">
                    <ArrowRight size={16} />
                  </span>
                </a>
              </div>

              <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-5 border-t border-[#E2E8F0] pt-7">
                <div>
                  <span className="block text-3xl font-semibold tracking-tight">
                    08
                  </span>
                  <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Considered stages
                  </span>
                </div>
                <div className="h-10 w-px bg-slate-200" />
                <div>
                  <span className="block text-3xl font-semibold tracking-tight">
                    01
                  </span>
                  <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Shared vision
                  </span>
                </div>
                <div className="h-10 w-px bg-slate-200" />
                <div>
                  <span className="block text-3xl font-semibold tracking-tight">
                    ∞
                  </span>
                  <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Room to evolve
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative mx-auto w-full max-w-[650px] lg:ml-auto"
            >
              <div className="relative">
                <div className="absolute -right-5 -top-5 hidden h-full w-full border border-[#CBD5E1] sm:block" />

                <div className="relative aspect-[4/4.7] overflow-hidden bg-[#E2E8F0] sm:aspect-[5/5.2]">
                  <img
                    src={images.hero}
                    alt="Creative development workspace with laptop and code"
                    fetchPriority="high"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070B]/65 via-transparent to-transparent" />

                  <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between gap-4 text-white sm:bottom-10 sm:left-10 sm:right-10">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-200">
                        The art of building digital
                      </span>
                      <p className="mt-2 max-w-xs text-2xl font-medium leading-tight tracking-tight sm:text-3xl">
                        Ideas made tangible.
                      </p>
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/50">
                      <ArrowUpRight size={22} />
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-3 flex items-center gap-4 bg-white px-5 py-4 shadow-[0_20px_60px_rgba(7,27,69,0.12)] sm:-left-10 sm:px-7 sm:py-5">
                  <div className="flex h-11 w-11 items-center justify-center bg-[#EFF6FF] text-[#2563EB]">
                    <Sparkles size={21} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">
                      The WebQenzo Approach
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Strategy · Design · Engineering
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="border-t border-[#E2E8F0] bg-white">
            <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-5 px-5 py-6 sm:px-10 lg:px-16">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Our creative philosophy
              </span>
              <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs font-medium text-[#344566] sm:gap-x-12">
                <span>01 / Think strategically</span>
                <span>02 / Design intentionally</span>
                <span>03 / Build beautifully</span>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="px-5 py-24 sm:px-10 sm:py-32 lg:px-16">
          <div className="mx-auto grid max-w-[1312px] gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:gap-24">
            <Reveal>
              <Eyebrow>Our perspective</Eyebrow>
              <div className="mt-8 flex h-16 w-16 items-center justify-center border border-cyan-100 text-[#2563EB]">
                <MoveUpRight size={30} strokeWidth={1.3} />
              </div>
            </Reveal>

            <Reveal>
              <h2 className="text-4xl font-semibold leading-[1.15] tracking-[-0.055em] sm:text-5xl lg:text-[58px]">
                We don't just build websites.
                <span className="font-serif font-normal italic text-[#2563EB]">
                  {" "}We shape how brands are experienced.
                </span>
              </h2>
              <p className="mt-8 max-w-xl text-base leading-8 text-slate-500">
                A successful website is more than a beautiful interface.
                It's a considered balance of business thinking, visual
                storytelling, intuitive experience, and reliable engineering.
              </p>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-500">
                Our process brings these disciplines together through
                clear decisions, meaningful collaboration, and attention
                to the details that matter.
              </p>
            </Reveal>
          </div>
        </section>

        {/* INTERACTIVE PROCESS */}
        <section
          id="our-process"
          className="scroll-mt-24 bg-[#F8FAFC] px-5 py-24 sm:px-10 sm:py-32 lg:px-16"
        >
          <div className="mx-auto max-w-[1312px]">
            <div className="flex flex-wrap items-end justify-between gap-8">
              <SectionHeading
                label="The methodology"
                title={
                  <>
                    A refined process.
                    <br />
                    <span className="font-serif font-normal italic text-[#2563EB]">
                      An exceptional outcome.
                    </span>
                  </>
                }
                description="Eight purposeful stages. Each one designed to bring greater clarity, creativity, and confidence to your project."
              />
              <span className="pb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                01 — 08 / The journey
              </span>
            </div>

            <div className="mt-16 grid overflow-hidden border border-[#E2E8F0] bg-white lg:grid-cols-[0.42fr_0.58fr]">
              {/* Stage navigation */}
              <div className="border-b border-[#E2E8F0] lg:border-b-0 lg:border-r">
                {steps.map((step, index) => {
                  const selected = activeStep === index;
                  const Icon = step.icon;

                  return (
                    <button
                      key={step.number}
                      type="button"
                      onClick={() => setActiveStep(index)}
                      aria-pressed={selected}
                      className={`group flex w-full items-center gap-4 border-b border-[#E2E8F0] px-5 py-5 text-left transition-all duration-300 last:border-b-0 sm:px-8 ${
                        selected
                          ? "bg-[#2563EB] text-white"
                          : "bg-white text-[#05070B] hover:bg-[#EFF6FF]"
                      }`}
                    >
                      <span
                        className={`text-xs font-semibold ${
                          selected ? "text-cyan-200" : "text-slate-400"
                        }`}
                      >
                        {step.number}
                      </span>

                      <Icon
                        size={19}
                        strokeWidth={1.7}
                        className={selected ? "text-white" : "text-[#2563EB]"}
                      />

                      <span className="flex-1 text-sm font-semibold sm:text-base">
                        {step.name}
                      </span>

                      <ArrowUpRight
                        size={17}
                        className={`transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                          selected ? "opacity-100" : "opacity-30"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Stage detail */}
              <div className="relative flex min-h-[590px] flex-col overflow-hidden p-7 sm:p-11 lg:p-14">
                <div className="pointer-events-none absolute -right-10 top-4 text-[170px] font-semibold leading-none tracking-[-0.1em] text-[#F1F5F9] sm:text-[230px]">
                  {active.number}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.number}
                    initial={reduceMotion ? false : { opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? {} : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.28 }}
                    className="relative z-10 flex h-full flex-col"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-[0.23em] text-[#2563EB]">
                        Phase {active.number} / {active.eyebrow}
                      </span>
                      <div className="flex h-12 w-12 items-center justify-center border border-cyan-100 text-[#2563EB]">
                        <ActiveIcon size={23} strokeWidth={1.5} />
                      </div>
                    </div>

                    <h3 className="mt-12 max-w-xl text-3xl font-semibold leading-[1.16] tracking-[-0.05em] sm:text-4xl lg:text-[45px]">
                      {active.title}
                    </h3>

                    <p className="mt-6 max-w-lg text-base leading-8 text-slate-500">
                      {active.description}
                    </p>

                    <div className="mt-12 border-t border-[#E3E8F2] pt-7">
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2563EB]">
                        What this stage includes
                      </p>

                      <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        {active.outputs.map((output) => (
                          <div
                            key={output}
                            className="flex items-start gap-3 text-sm text-[#42516C]"
                          >
                            <Check
                              size={17}
                              className="mt-0.5 shrink-0 text-[#2563EB]"
                            />
                            {output}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto flex items-center justify-between gap-5 pt-12">
                      <span className="text-xs font-medium text-slate-400">
                        {active.number} of 08
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          setActiveStep((current) => (current + 1) % steps.length)
                        }
                        className="group inline-flex items-center gap-3 text-sm font-semibold text-[#2563EB]"
                      >
                        {activeStep === 7 ? "Back to beginning" : "Next stage"}
                        <span className="flex h-10 w-10 items-center justify-center border border-cyan-200 transition group-hover:bg-[#2563EB] group-hover:text-white">
                          <ArrowRight size={17} />
                        </span>
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <p className="mt-6 text-xs leading-6 text-slate-400">
              Every project is unique. Our approach is adapted to the
              agreed scope, requirements, and business objectives.
            </p>
          </div>
        </section>

        {/* EDITORIAL IMAGE SECTION */}
        <section className="bg-[#05070B] text-white">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[370px] overflow-hidden lg:min-h-[650px]">
              <img
                src={images.studio}
                alt="Creative professionals collaborating on a digital project"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[#05070B]/25" />
              <div className="absolute bottom-8 left-8 border-l-2 border-white pl-5 sm:bottom-12 sm:left-12">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em]">
                  Better thinking. Better experiences.
                </span>
              </div>
            </div>

            <div className="flex items-center px-7 py-20 sm:px-12 sm:py-24 lg:px-16">
              <Reveal className="max-w-[570px]">
                <Eyebrow light>More than a workflow</Eyebrow>

                <h2 className="mt-9 text-4xl font-semibold leading-[1.12] tracking-[-0.055em] sm:text-5xl lg:text-[60px]">
                  Creativity is powerful.
                  <span className="font-serif font-normal italic text-[#22D3EE]">
                    {" "}Clarity makes it meaningful.
                  </span>
                </h2>

                <p className="mt-8 text-base leading-8 text-[#CBD5E1]">
                  The strongest digital experiences emerge when ideas,
                  expertise, and perspective come together. That's why
                  collaboration is at the heart of how we work.
                </p>

                <div className="mt-12 grid grid-cols-2 gap-7 border-t border-white/20 pt-9">
                  <div>
                    <span className="text-3xl font-semibold">01</span>
                    <p className="mt-3 text-sm leading-6 text-cyan-200">
                      A shared understanding of your vision
                    </p>
                  </div>
                  <div>
                    <span className="text-3xl font-semibold">02</span>
                    <p className="mt-3 text-sm leading-6 text-cyan-200">
                      A clear direction for every decision
                    </p>
                  </div>
                </div>

                <Link
                  to="/get-quote"
                  className="group mt-12 inline-flex items-center gap-4 border-b border-cyan-300 pb-3 text-sm font-semibold transition hover:gap-6"
                >
                  Let's collaborate
                  <ArrowUpRight size={18} />
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="px-5 py-24 sm:px-10 sm:py-32 lg:px-16">
          <div className="mx-auto max-w-[1312px]">
            <SectionHeading
              label="The WebQenzo standard"
              title={
                <>
                  The thinking behind
                  <br />
                  <span className="font-serif font-normal italic text-[#2563EB]">
                    everything we create.
                  </span>
                </>
              }
              description="Not just a list of steps. A set of principles that shape how we approach every digital experience."
            />

            <div className="mt-16 grid border-l border-t border-[#E2E8F0] md:grid-cols-2">
              {principles.map((item) => {
                const Icon = item.icon;

                return (
                  <Reveal
                    key={item.number}
                    className="group border-b border-r border-[#E2E8F0] p-7 transition-colors duration-300 hover:bg-[#F7F9FF] sm:p-11"
                  >
                    <div className="flex items-start justify-between">
                      <Icon
                        size={29}
                        strokeWidth={1.4}
                        className="text-[#2563EB]"
                      />
                      <span className="text-xs font-semibold text-slate-400">
                        / {item.number}
                      </span>
                    </div>

                    <h3 className="mt-12 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-5 max-w-sm text-sm leading-8 text-slate-500">
                      {item.text}
                    </p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* DESIGN & DEVELOPMENT */}
        <section className="bg-[#F8FAFC] px-5 py-24 sm:px-10 sm:py-32 lg:px-16">
          <div className="mx-auto max-w-[1312px]">
            <div className="grid items-end gap-8 lg:grid-cols-2">
              <SectionHeading
                label="Two disciplines. One vision."
                title={
                  <>
                    Art meets
                    <br />
                    <span className="font-serif font-normal italic text-[#2563EB]">
                      engineering.
                    </span>
                  </>
                }
              />

              <Reveal className="lg:pb-2">
                <p className="max-w-lg text-base leading-8 text-slate-500">
                  A remarkable website needs more than visual appeal.
                  We bring creative thinking and technical execution
                  together to create digital experiences that feel
                  as good as they function.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              <Reveal>
                <div className="group relative aspect-[1.22/1] overflow-hidden bg-[#DCE4F2]">
                  <img
                    src={images.workspace}
                    alt="Digital creative team working together on website design"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070B]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8 text-white sm:bottom-10 sm:left-10">
                    <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-200">
                      The creative discipline
                    </span>
                    <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                      Design with intention.
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-7 text-white/80">
                      Thoughtful interfaces, distinctive aesthetics,
                      and intuitive experiences.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="group relative aspect-[1.22/1] overflow-hidden bg-[#DCE4F2]">
                  <img
                    src={images.code}
                    alt="Professional web development code on a computer screen"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070B]/85 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8 text-white sm:bottom-10 sm:left-10">
                    <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-200">
                      The technical discipline
                    </span>
                    <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                      Built with precision.
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-7 text-white/80">
                      Responsive engineering, functional detail,
                      and considered technical foundations.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* PARTNERSHIP */}
        <section className="px-5 py-24 sm:px-10 sm:py-32 lg:px-16">
          <div className="mx-auto max-w-[1312px]">
            <SectionHeading
              label="A collaborative partnership"
              title={
                <>
                  Your vision.
                  <br />
                  <span className="font-serif font-normal italic text-[#2563EB]">
                    Our expertise.
                  </span>
                </>
              }
              description="A great partnership is built on shared understanding, clear responsibilities, and meaningful collaboration."
            />

            <div className="mt-14 grid border border-[#E2E8F0] lg:grid-cols-2">
              <div className="p-7 sm:p-12">
                <div className="flex items-center justify-between">
                  <Users
                    size={30}
                    strokeWidth={1.5}
                    className="text-[#2563EB]"
                  />
                  <span className="text-xs font-semibold text-slate-400">
                    01 / You
                  </span>
                </div>

                <h3 className="mt-10 text-3xl font-semibold tracking-tight">
                  Your perspective.
                </h3>
                <p className="mt-4 max-w-md text-sm leading-8 text-slate-500">
                  You bring the knowledge, ambition, and unique
                  understanding of your business.
                </p>

                <div className="mt-9 space-y-5 border-t border-slate-200 pt-8">
                  {[
                    "Share your goals and requirements",
                    "Provide available brand assets and content",
                    "Review key milestones",
                    "Share feedback and approvals",
                  ].map((item) => (
                    <div key={item} className="flex gap-3 text-sm text-slate-600">
                      <Check size={17} className="shrink-0 text-[#2563EB]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#2563EB] p-7 text-white sm:p-12">
                <div className="flex items-center justify-between">
                  <Code2 size={30} strokeWidth={1.5} />
                  <span className="text-xs font-semibold text-cyan-200">
                    02 / WebQenzo
                  </span>
                </div>

                <h3 className="mt-10 text-3xl font-semibold tracking-tight">
                  Our craftsmanship.
                </h3>
                <p className="mt-4 max-w-md text-sm leading-8 text-cyan-100">
                  We bring creative direction, digital expertise,
                  and a structured approach to execution.
                </p>

                <div className="mt-9 space-y-5 border-t border-white/25 pt-8">
                  {[
                    "Translate your vision into a clear plan",
                    "Design the agreed digital experience",
                    "Develop, test, and refine the website",
                    "Prepare for launch and handover",
                  ].map((item) => (
                    <div key={item} className="flex gap-3 text-sm text-cyan-50">
                      <Check size={17} className="shrink-0 text-white" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-[#E2E8F0] bg-[#F8FAFC] px-5 py-24 sm:px-10 sm:py-32 lg:px-16">
          <div className="mx-auto grid max-w-[1312px] gap-14 lg:grid-cols-[0.42fr_0.58fr] lg:gap-20">
            <div>
              <SectionHeading
                label="Good to know"
                title={
                  <>
                    Questions,
                    <br />
                    <span className="font-serif font-normal italic text-[#2563EB]">
                      answered.
                    </span>
                  </>
                }
                description="A little more clarity on what working together looks like."
              />

              <Link
                to="/get-quote"
                className="group mt-9 inline-flex items-center gap-3 text-sm font-semibold text-[#2563EB]"
              >
                <MessageCircle size={18} />
                Have another question?
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>

            <div className="border-t border-[#E2E8F0]">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className="border-b border-[#E2E8F0]"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      aria-controls={`process-faq-${index}`}
                      className="group flex w-full items-center justify-between gap-6 py-7 text-left"
                    >
                      <span
                        className={`text-base font-semibold leading-7 tracking-tight transition-colors sm:text-lg ${
                          isOpen
                            ? "text-[#2563EB]"
                            : "text-[#05070B] group-hover:text-[#2563EB]"
                        }`}
                      >
                        {faq.question}
                      </span>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center border transition-colors ${
                          isOpen
                            ? "border-[#2563EB] bg-[#2563EB] text-white"
                            : "border-slate-200 text-[#2563EB]"
                        }`}
                      >
                        <ChevronDown
                          size={17}
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`process-faq-${index}`}
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-xl pb-7 pr-10 text-sm leading-8 text-slate-500">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative isolate overflow-hidden bg-[#2563EB] px-5 py-24 text-white sm:px-10 sm:py-32 lg:px-16">
          <div className="pointer-events-none absolute -right-32 -top-52 h-[600px] w-[600px] rounded-full border border-white/15" />
          <div className="pointer-events-none absolute -right-16 -top-36 h-[470px] w-[470px] rounded-full border border-white/15" />
          <div className="pointer-events-none absolute -bottom-64 left-[-150px] h-[500px] w-[500px] rounded-full border border-white/10" />

          <div className="relative mx-auto max-w-[1312px]">
            <Reveal>
              <Eyebrow light>The next chapter begins here</Eyebrow>

              <div className="mt-10 grid items-end gap-12 lg:grid-cols-[1fr_auto]">
                <div>
                  <h2 className="max-w-[960px] text-[clamp(3.5rem,7.5vw,7.5rem)] font-semibold leading-[1.01] tracking-[-0.075em]">
                    Let's create
                    <br />
                    something
                    <br />
                    <span className="font-serif font-normal italic text-[#A5F3FC]">
                      extraordinary.
                    </span>
                  </h2>

                  <p className="mt-9 max-w-xl text-base leading-8 text-cyan-100">
                    Have a vision worth bringing to life? Let's explore
                    what we can create together, with thoughtful design,
                    clear strategy, and purposeful execution.
                  </p>
                </div>

                <Link
                  to="/get-quote"
                  className="group flex h-36 w-36 shrink-0 flex-col items-center justify-center gap-3 rounded-full bg-white text-center text-sm font-semibold text-[#2563EB] shadow-[0_25px_60px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:-translate-y-2 sm:h-44 sm:w-44"
                >
                  <ArrowUpRight
                    size={27}
                    strokeWidth={1.5}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                  Start a project
                </Link>
              </div>

              <div className="mt-20 flex flex-wrap items-center justify-between gap-5 border-t border-white/25 pt-7">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
                  WebQenzo — Digital experiences, considered.
                </span>
                <span className="text-xs text-cyan-200">
                  Strategy / Design / Development
                </span>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}

export default Process;
