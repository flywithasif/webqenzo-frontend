import { useEffect } from "react";
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
  Lightbulb,
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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const processSteps = [
  {
    number: "01",
    label: "Discover",
    title: "We start by understanding the business.",
    text: "Before designing anything, we understand your business, audience, goals, current digital presence and what you want the website to achieve.",
    icon: Search,
    deliverables: [
      "Business understanding",
      "Project goals",
      "Target audience",
      "Current website review",
      "Requirement discovery",
    ],
  },
  {
    number: "02",
    label: "Strategy",
    title: "We turn requirements into a clear direction.",
    text: "The project gets a structured direction before visual execution begins. We define priorities, content structure, important pages and the journey users should take.",
    icon: Target,
    deliverables: [
      "Site structure",
      "Page priorities",
      "Content direction",
      "Feature planning",
      "Project roadmap",
    ],
  },
  {
    number: "03",
    label: "Experience",
    title: "We design how the experience should work.",
    text: "Information hierarchy, navigation, sections, interactions and user flow are considered before polishing the visual layer.",
    icon: Workflow,
    deliverables: [
      "User journey",
      "Navigation structure",
      "Information hierarchy",
      "Wireframe direction",
      "Interaction planning",
    ],
  },
  {
    number: "04",
    label: "Design",
    title: "We create the visual identity of the experience.",
    text: "Typography, spacing, colors, components, imagery and interaction details come together into a coherent premium interface.",
    icon: Palette,
    deliverables: [
      "Visual direction",
      "UI system",
      "Responsive layouts",
      "Components",
      "Interaction details",
    ],
  },
  {
    number: "05",
    label: "Develop",
    title: "Design becomes a real digital product.",
    text: "The approved direction is translated into responsive, structured and maintainable frontend code with the appropriate technology stack.",
    icon: Code2,
    deliverables: [
      "Frontend development",
      "Responsive implementation",
      "Reusable components",
      "Integrations",
      "Technical structure",
    ],
  },
  {
    number: "06",
    label: "Validate",
    title: "Every important detail gets checked.",
    text: "Before launch, the experience is reviewed across layouts, interactions, responsiveness, content, links and important user journeys.",
    icon: TestTube2,
    deliverables: [
      "Responsive testing",
      "Browser checks",
      "Interaction checks",
      "Content review",
      "Final fixes",
    ],
  },
  {
    number: "07",
    label: "Launch",
    title: "We prepare the experience for the real world.",
    text: "Once the final experience is approved, launch-related details are prepared and the website moves from development into production.",
    icon: Rocket,
    deliverables: [
      "Final approval",
      "Production preparation",
      "Deployment",
      "Launch checks",
      "Handover",
    ],
  },
  {
    number: "08",
    label: "Grow",
    title: "The relationship does not have to end at launch.",
    text: "Websites can evolve. New sections, features, content, improvements and technical work can be planned as your business grows.",
    icon: Gauge,
    deliverables: [
      "Ongoing improvements",
      "New features",
      "Content updates",
      "Technical support",
      "Future roadmap",
    ],
  },
];

const principles = [
  {
    icon: MessageCircle,
    title: "Clear Communication",
    text: "Important decisions, requirements and project direction stay visible throughout the engagement.",
  },
  {
    icon: FileCheck2,
    title: "Defined Deliverables",
    text: "The work is structured around clear outputs so expectations remain easier to understand.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Control",
    text: "Responsive behaviour, interactions, content and important details are reviewed before launch.",
  },
  {
    icon: Users,
    title: "Collaborative Process",
    text: "The client remains part of the process through feedback, approvals and business context.",
  },
];

const clientSide = [
  "Share business information",
  "Provide required content and assets",
  "Give timely feedback",
  "Approve agreed project stages",
  "Communicate important business requirements",
];

const agencySide = [
  "Translate requirements into digital direction",
  "Create the agreed design and experience",
  "Develop the website",
  "Test and refine the implementation",
  "Prepare the final project for launch",
];

const faqs = [
  {
    question: "How does a project begin?",
    answer:
      "The project begins with understanding your business, goals, requirements and desired outcome. From there, the project direction and scope can be defined.",
  },
  {
    question: "Do I need to provide all website content?",
    answer:
      "Not necessarily at the beginning. Content requirements can be identified during planning, and the exact responsibilities can be discussed according to the project.",
  },
  {
    question: "When do development and design happen?",
    answer:
      "The typical approach is to establish the structure and visual direction before full development. This helps reduce unnecessary rework and keeps the implementation aligned with the approved experience.",
  },
  {
    question: "Can I request changes?",
    answer:
      "Yes. Feedback is part of the process. The number and nature of revision rounds should be defined according to the project scope.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Post-launch support can be planned depending on the project requirements, including updates, improvements and additional development work.",
  },
];

function Process() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://webqenzo.com/process#webpage",
          "url": "https://webqenzo.com/process",
          "name": "Web Design & Development Process | WebQenzo",
          "description":
            "Explore the WebQenzo website design and development process, from discovery and strategy through design, development, testing, launch and ongoing improvements.",
          "isPartOf": {
            "@type": "WebSite",
            "@id": "https://webqenzo.com/#website",
            "url": "https://webqenzo.com/",
            "name": "WebQenzo"
          },
          "about": {
            "@type": "Organization",
            "@id": "https://webqenzo.com/#organization",
            "name": "WebQenzo",
            "url": "https://webqenzo.com/",
            "email": "hello@webqenzo.com"
          },
          "inLanguage": "en"
        },
        {
          "@type": "HowTo",
          "@id": "https://webqenzo.com/process#how-to",
          "name": "WebQenzo Website Design and Development Process",
          "description":
            "A structured website project process covering discovery, strategy, experience design, visual design, development, validation, launch and ongoing improvements.",
          "url": "https://webqenzo.com/process",
          "step": processSteps.map((step) => ({
            "@type": "HowToStep",
            "position": Number(step.number),
            "name": step.label,
            "text": step.text
          }))
        },
        {
          "@type": "FAQPage",
          "@id": "https://webqenzo.com/process#faq",
          "url": "https://webqenzo.com/process",
          "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        },
        {
          "@type": "Organization",
          "@id": "https://webqenzo.com/#organization",
          "name": "WebQenzo",
          "url": "https://webqenzo.com/",
          "email": "hello@webqenzo.com"
        }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-page-schema", "process");
    script.textContent = JSON.stringify(structuredData);

    document.head.appendChild(script);

    return () => {
      const existingScript = document.head.querySelector(
        'script[data-page-schema="process"]'
      );

      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <>
      <SEO
        title="Web Design & Development Process"
        description="Explore the WebQenzo website design and development process, from discovery and strategy through UX, visual design, development, testing, launch and ongoing improvements."
        path="/process"
      />

      <main className="overflow-hidden bg-[#05070B] text-white">
      {/* =====================================================
          01 — HERO
      ====================================================== */}
      <section className="relative isolate min-h-[760px] overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-15%] top-[5%] h-[520px] w-[520px] rounded-full bg-blue-600/[0.09] blur-[130px]" />
          <div className="absolute right-[-10%] top-[15%] h-[500px] w-[500px] rounded-full bg-cyan-400/[0.08] blur-[130px]" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1500px] px-5 pb-24 pt-24 sm:px-8 lg:px-12 lg:pt-32">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_.9fr]">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="max-w-3xl"
            >
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-medium text-slate-300 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,.8)]" />
                The WebQenzo Method
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Our process
              </p>

              <h1 className="mt-5 text-5xl font-black leading-[0.94] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                From first
                <span className="block bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
                  conversation to launch.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                A structured process designed to make digital projects
                clearer, more collaborative and more intentional — without
                turning the experience into unnecessary complexity.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/get-quote"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#05070B] transition duration-300 hover:-translate-y-1"
                >
                  Start a Project
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#05070B] text-white">
                    <ArrowUpRight size={15} />
                  </span>
                </Link>

                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/[0.07]"
                >
                  See Our Work
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* 3D process object */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
                rotateY: 10,
                rotateX: 5,
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotateY: 0,
                rotateX: 0,
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[580px] [perspective:1800px]"
            >
              <div className="relative aspect-square [transform-style:preserve-3d]">
                <div className="absolute inset-[8%] rounded-[42px] border border-white/10 bg-white/[0.025] shadow-[0_50px_120px_rgba(0,0,0,.55)] backdrop-blur-xl" />

                <div className="absolute inset-[15%] rounded-[36px] border border-blue-400/20 bg-gradient-to-br from-blue-500/[0.12] via-transparent to-cyan-400/[0.08] [transform:translateZ(30px)]" />

                <div className="absolute inset-[23%] rounded-[32px] border border-white/10 bg-[#080D15]/95 p-6 shadow-[inset_0_0_80px_rgba(37,99,235,.08)] [transform:translateZ(70px)]">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-600">
                      Workflow
                    </span>

                    <Sparkles size={17} className="text-cyan-300" />
                  </div>

                  <div className="mt-8 space-y-2">
                    {[
                      "Discover",
                      "Strategy",
                      "Design",
                      "Develop",
                      "Validate",
                      "Launch",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5"
                      >
                        <span className="text-[9px] font-bold text-blue-400">
                          0{index + 1}
                        </span>
                        <span className="text-xs font-medium text-slate-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute left-0 top-[25%] rounded-2xl border border-white/10 bg-[#0B111C]/90 px-4 py-3 shadow-2xl backdrop-blur-xl [transform:translateZ(100px)]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                      <Target size={17} />
                    </div>

                    <div>
                      <p className="text-[10px] text-slate-600">
                        First principle
                      </p>
                      <p className="text-xs font-semibold text-white">
                        Understand first
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-[20%] right-0 rounded-2xl border border-white/10 bg-[#0B111C]/90 px-4 py-3 shadow-2xl backdrop-blur-xl [transform:translateZ(120px)]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                      <Rocket size={17} />
                    </div>

                    <div>
                      <p className="text-[10px] text-slate-600">
                        Final stage
                      </p>
                      <p className="text-xs font-semibold text-white">
                        Ready to launch
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          02 — PROCESS PHILOSOPHY
      ====================================================== */}
      <section className="border-y border-white/[0.07] bg-[#080C13]">
        <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                01 / Philosophy
              </p>

              <h2 className="mt-5 max-w-md text-4xl font-black tracking-[-0.05em] sm:text-5xl">
                A good process creates a better final product.
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="max-w-4xl"
            >
              <p className="text-xl leading-9 text-slate-300 sm:text-2xl">
                We do not want clients to feel like a project disappears into
                a black box and suddenly returns at the end.
              </p>

              <p className="mt-7 text-base leading-8 text-slate-500">
                The process is intentionally structured so the important
                decisions happen at the right stage. Business understanding
                informs strategy. Strategy informs design. Design informs
                development. Development is validated before launch.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          03 — TRUST PRINCIPLES
      ====================================================== */}
      <section className="bg-[#05070B]">
        <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
              02 / Trust framework
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] sm:text-6xl">
              Built around clarity, not confusion.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-500 sm:text-lg">
              Trust is created through the way a project is handled — not only
              through the final visual result.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.55, delay: index * 0.07 }}
                  className="group rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-7 transition duration-500 hover:-translate-y-2 hover:border-blue-400/20 hover:bg-white/[0.045]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] text-cyan-300">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-8 text-lg font-bold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          04 — COMPLETE PROCESS
      ====================================================== */}
      <section className="relative bg-[#070A10]">
        <div className="pointer-events-none absolute left-1/2 top-[12%] h-[900px] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent" />

        <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mb-20 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
              03 / The complete journey
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black tracking-[-0.05em] sm:text-6xl">
              Eight stages. One connected experience.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-500">
              Every stage has a purpose, and each stage informs the next.
            </p>
          </div>

          <div className="space-y-10">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const reverse = index % 2 !== 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.65 }}
                  className={`relative grid items-center gap-8 lg:grid-cols-2 lg:gap-20 ${
                    reverse ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-[38px] bg-blue-500/[0.035] blur-2xl" />

                    <div className="relative rounded-[32px] border border-white/[0.08] bg-[#090E17] p-8 shadow-[0_30px_80px_rgba(0,0,0,.28)] sm:p-10">
                      <div className="flex items-start justify-between">
                        <span className="text-5xl font-black tracking-[-0.07em] text-white/[0.08]">
                          {step.number}
                        </span>

                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] text-cyan-300">
                          <Icon size={21} />
                        </div>
                      </div>

                      <p className="mt-12 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
                        {step.label}
                      </p>

                      <h3 className="mt-4 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                        {step.title}
                      </h3>

                      <p className="mt-5 text-sm leading-7 text-slate-500">
                        {step.text}
                      </p>
                    </div>
                  </div>

                  <div className="relative rounded-[32px] border border-white/[0.07] bg-white/[0.02] p-8 sm:p-10">
                    <div className="flex items-center gap-3">
                      <Layers3 size={18} className="text-blue-300" />

                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                        Typical outputs
                      </span>
                    </div>

                    <div className="mt-8 space-y-3">
                      {step.deliverables.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 border-b border-white/[0.06] pb-3"
                        >
                          <Check size={15} className="text-cyan-300" />

                          <span className="text-sm text-slate-300">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          05 — PROJECT CONTROL
      ====================================================== */}
      <section className="border-y border-white/[0.07] bg-[#080C13]">
        <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                04 / Project control
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] sm:text-6xl">
                Fewer surprises. Better decisions.
              </h2>

              <p className="mt-6 max-w-lg text-base leading-8 text-slate-500">
                A structured project is easier to review, easier to improve and
                easier to move forward.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Lightbulb,
                  title: "Direction",
                  text: "Understand what we are building before execution gets deep.",
                },
                {
                  icon: BadgeCheck,
                  title: "Approval",
                  text: "Important project stages can be reviewed before moving ahead.",
                },
                {
                  icon: Layers3,
                  title: "Structure",
                  text: "Keep design, development and content decisions organized.",
                },
                {
                  icon: Gauge,
                  title: "Refinement",
                  text: "Use testing and feedback to improve the final experience.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[26px] border border-white/[0.08] bg-white/[0.025] p-7"
                  >
                    <Icon size={21} className="text-cyan-300" />

                    <h3 className="mt-7 text-lg font-bold">{item.title}</h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          06 — CLIENT + AGENCY RESPONSIBILITIES
      ====================================================== */}
      <section className="bg-[#05070B]">
        <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
              05 / Collaboration
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black tracking-[-0.05em] sm:text-6xl">
              Great digital work is collaborative.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-500">
              The strongest projects happen when business knowledge and
              digital expertise work together.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-5 lg:grid-cols-2">
            <div className="rounded-[32px] border border-white/[0.08] bg-gradient-to-br from-[#0B1220] to-[#080D15] p-8 sm:p-10">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">
                  <Users size={21} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-600">
                    Client side
                  </p>

                  <h3 className="mt-1 text-xl font-bold">
                    Your business expertise
                  </h3>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                {clientSide.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"
                  >
                    <Check size={15} className="text-cyan-300" />
                    <span className="text-sm text-slate-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-white/[0.08] bg-gradient-to-br from-[#09121A] to-[#080D15] p-8 sm:p-10">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                  <Code2 size={21} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-600">
                    WebQenzo side
                  </p>

                  <h3 className="mt-1 text-xl font-bold">
                    Our digital expertise
                  </h3>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                {agencySide.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"
                  >
                    <Check size={15} className="text-cyan-300" />
                    <span className="text-sm text-slate-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          07 — DESIGN APPROVAL
      ====================================================== */}
      <section className="bg-[#080C13]">
        <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_.85fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                06 / Design approval
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] sm:text-6xl">
                Direction before development.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500">
                Establishing the visual and structural direction before deep
                implementation helps the project remain aligned with the
                intended experience.
              </p>

              <div className="mt-9 space-y-4">
                {[
                  "Review the overall visual direction",
                  "Review important page structures",
                  "Discuss feedback",
                  "Refine the agreed direction",
                  "Move into implementation",
                ].map((item, index) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[10px] font-bold text-blue-300">
                      0{index + 1}
                    </div>

                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium design approval card */}
            <div className="relative [perspective:1400px]">
              <div className="relative rounded-[34px] border border-white/10 bg-[#05070B] p-4 shadow-[0_40px_100px_rgba(0,0,0,.5)] [transform:rotateY(-5deg)_rotateX(3deg)]">
                <div className="rounded-[26px] border border-white/[0.07] bg-[#0A0F18] p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                    </div>

                    <span className="text-[9px] uppercase tracking-[0.2em] text-slate-600">
                      Design review
                    </span>
                  </div>

                  <div className="mt-8 rounded-2xl border border-blue-400/10 bg-gradient-to-br from-blue-500/10 to-cyan-400/[0.04] p-6">
                    <div className="h-3 w-24 rounded-full bg-white/10" />

                    <div className="mt-5 h-24 rounded-xl border border-white/[0.06] bg-white/[0.025]" />

                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="h-14 rounded-xl bg-white/[0.03]" />
                      <div className="h-14 rounded-xl bg-white/[0.03]" />
                      <div className="h-14 rounded-xl bg-white/[0.03]" />
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between rounded-xl border border-cyan-400/10 bg-cyan-400/[0.03] px-4 py-3">
                    <span className="text-xs text-slate-400">
                      Direction reviewed
                    </span>

                    <span className="flex items-center gap-2 text-xs font-semibold text-cyan-300">
                      <Check size={14} />
                      Ready
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          08 — DEVELOPMENT + QA
      ====================================================== */}
      <section className="border-y border-white/[0.07] bg-[#05070B]">
        <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mb-14 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
              07 / Build & validate
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] sm:text-6xl">
              Development is only half the job.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-500">
              The implementation is followed by validation and refinement
              before the project is considered ready for launch.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {[
              {
                icon: Code2,
                title: "Build",
                items: [
                  "Component architecture",
                  "Responsive implementation",
                  "Interactions",
                  "Integrations",
                ],
              },
              {
                icon: TestTube2,
                title: "Test",
                items: [
                  "Screen sizes",
                  "Navigation",
                  "Forms",
                  "Important interactions",
                ],
              },
              {
                icon: Gauge,
                title: "Refine",
                items: [
                  "Visual details",
                  "Content issues",
                  "Responsive issues",
                  "Final polish",
                ],
              },
            ].map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="rounded-[30px] border border-white/[0.08] bg-white/[0.025] p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-8 text-2xl font-black">
                    {card.title}
                  </h3>

                  <div className="mt-7 space-y-3">
                    {card.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm text-slate-400"
                      >
                        <Check size={15} className="text-cyan-300" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          09 — LAUNCH
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#080C13]">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.06] blur-[120px]" />

        <div className="relative mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.06] text-cyan-300">
              <Rocket size={27} />
            </div>

            <p className="mt-8 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
              08 / Launch
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] sm:text-6xl">
              From approved experience to live website.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-500">
              Launch is treated as another project stage — with final checks,
              production preparation and handover considered before the
              website goes live.
            </p>

            <div className="mt-12 grid gap-3 sm:grid-cols-4">
              {[
                "Final review",
                "Production prep",
                "Launch",
                "Handover",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5"
                >
                  <span className="text-[10px] font-bold text-blue-400">
                    0{index + 1}
                  </span>

                  <p className="mt-3 text-sm font-semibold text-slate-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          10 — AFTER LAUNCH
      ====================================================== */}
      <section className="bg-[#05070B]">
        <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                09 / After launch
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] sm:text-6xl">
                Launch is a milestone, not necessarily the finish line.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Globe2,
                  title: "Content",
                  text: "Keep important business information current as your offering changes.",
                },
                {
                  icon: Layers3,
                  title: "Enhancement",
                  text: "Add new sections, pages or features when the business requires them.",
                },
                {
                  icon: Gauge,
                  title: "Optimization",
                  text: "Identify areas where the digital experience can continue to improve.",
                },
                {
                  icon: Rocket,
                  title: "Growth",
                  text: "Use the website as a foundation for the next stage of your digital presence.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[26px] border border-white/[0.08] bg-white/[0.025] p-7"
                  >
                    <Icon size={21} className="text-cyan-300" />

                    <h3 className="mt-7 text-lg font-bold">{item.title}</h3>

                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          11 — FAQ
      ====================================================== */}
      <section className="border-y border-white/[0.07] bg-[#080C13]">
        <div className="mx-auto max-w-[1100px] px-5 py-24 sm:px-8 lg:py-32">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
              10 / Common questions
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] sm:text-6xl">
              Before we begin.
            </h2>
          </div>

          <div className="mt-14 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.02]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 text-sm font-semibold text-slate-200 sm:p-7">
                  {faq.question}

                  <ChevronDown
                    size={18}
                    className="shrink-0 text-slate-500 transition group-open:rotate-180"
                  />
                </summary>

                <div className="px-6 pb-7 text-sm leading-7 text-slate-500 sm:px-7">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          12 — FINAL CTA
      ====================================================== */}
      <section className="bg-[#05070B]">
        <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#0D1726] via-[#09101B] to-[#071015] p-8 shadow-[0_40px_120px_rgba(0,0,0,.4)] sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-cyan-400/10 blur-[110px]" />

            <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                  11 / Your project
                </p>

                <h2 className="mt-5 max-w-4xl text-4xl font-black tracking-[-0.05em] sm:text-6xl">
                  Ready to turn an idea into a serious digital experience?
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500">
                  Tell us what you are building, what you want to improve and
                  what success looks like for your business.
                </p>
              </div>

              <Link
                to="/get-quote"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#05070B] transition duration-300 hover:-translate-y-1"
              >
                Start a Conversation

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#05070B] text-white transition group-hover:rotate-45">
                  <ArrowUpRight size={15} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}

export default Process;