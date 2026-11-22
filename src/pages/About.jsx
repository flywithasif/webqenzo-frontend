import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  Code2,
  Compass,
  Eye,
  Layers3,
  MonitorSmartphone,
  Palette,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

/* =========================================================
   DATA
========================================================= */

const team = [
  {
    name: "Asif",
    role: "Development",
    designation: "Full Stack Developer",
    number: "04",
    image: "/Asif.png",
    description:
      "Building robust full-stack architectures, scalable backend systems, and seamless user experiences.",
    tags: ["Full Stack", "UI/UX"],
  },
  {
    name: "Kunal",
    role: "Marketing",
    designation: "Marketing Lead",
    number: "03",
    image: "/Kunal.png",
    description:
      "Supporting marketing initiatives, business outreach and client opportunities.",
    tags: ["Meta Ads", "Campaigns"],
  },
  {
    name: "Anni",
    role: "Leadership",
    designation: "CEO",
    number: "01",
    image: "/webqenzoteam.png",
    description:
      "Leading development and technical foundations behind digital experiences.",
    tags: ["Development", "Web Architecture"],
  },
  {
    name: "Deepak",
    role: "Strategy",
    designation: "Business & Strategy Consultant",
    number: "02",
    image: "/webqenzoteam.png",
    description:
      "Driving strategic expansion, client partnerships, and brand positioning.",
    tags: ["Business Strategy", "Brand Expansion"],
  },
];

const capabilities = [
  "Business websites",
  "Custom web applications",
  "E-commerce development",
  "Landing pages",
  "UI/UX design",
  "Website redesign",
  "Responsive development",
  "Performance optimisation",
  "Third-party integrations",
  "SEO-ready architecture",
  "Booking platforms",
  "Website improvements",
];

const principles = [
  {
    number: "01",
    icon: Compass,
    title: "Clarity before code",
    text: "We understand your business objectives before choosing the right digital direction.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Design with intention",
    text: "Every visual decision has a purpose, from typography and spacing to the customer journey.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Quality in every detail",
    text: "We pay attention to responsive layouts, usability, implementation and the details that matter.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Built for what's next",
    text: "We consider maintainability and future requirements while building your digital presence.",
  },
];

const standards = [
  "Responsive layouts",
  "Structured frontend",
  "Reusable components",
  "Accessible interactions",
  "Performance-conscious code",
  "Clear visual hierarchy",
  "Business-focused content",
  "Maintainable architecture",
];

const steps = [
  {
    number: "01",
    title: "Understand",
    text: "Discover your business, audience and goals.",
    icon: Eye,
  },
  {
    number: "02",
    title: "Plan",
    text: "Define the right structure and direction.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Design",
    text: "Create a distinctive digital experience.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Develop",
    text: "Build, test and refine the website.",
    icon: Code2,
  },
];

/* =========================================================
   ANIMATIONS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const viewport = {
  once: true,
  amount: 0.12,
};

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   COMPONENTS
========================================================= */

function Eyebrow({ children, light = false }) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          light ? "bg-[#2563EB]" : "bg-[#2563EB]"
        }`}
      />

      <span
        className={`text-[10px] font-bold uppercase tracking-[0.22em] ${
          light ? "text-[#2563EB]" : "text-[#2563EB]"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

function Heading({
  children,
  light = false,
  className = "",
}) {
  return (
    <h2
      className={`font-serif text-4xl font-normal leading-[1.08] tracking-[-0.055em] sm:text-5xl lg:text-[64px] ${
        light ? "text-white" : "text-[#0A0D12]"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

function ButtonLink({ children, light = false }) {
  return (
    <Link
      to="/get-quote"
      className={`group inline-flex min-h-12 items-center justify-center gap-4 rounded-sm px-6 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${
        light
          ? "bg-white text-[#0A0D12] hover:bg-[#2563EB]"
          : "bg-[#2563EB] text-white hover:bg-[#1748C8]"
      }`}
    >
      {children}

      <ArrowUpRight
        size={17}
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </Link>
  );
}

function SectionNumber({ children, light = false }) {
  return (
    <span
      className={`text-[10px] font-semibold tracking-[0.18em] ${
        light ? "text-white/40" : "text-slate-400"
      }`}
    >
      {children}
    </span>
  );
}

/* =========================================================
   ABOUT PAGE
========================================================= */

function About() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "AboutPage",
          "@id": "https://webqenzo.com/about#webpage",
          url: "https://webqenzo.com/about",
          name: "About WebQenzo",
          description:
            "Discover WebQenzo's approach to web development, digital design, business strategy and collaboration.",
          isPartOf: {
            "@type": "WebSite",
            "@id": "https://webqenzo.com/#website",
            url: "https://webqenzo.com/",
            name: "WebQenzo",
          },
          inLanguage: "en",
        },
        {
          "@type": "ItemList",
          name: "WebQenzo Team",
          itemListElement: team.map((member, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: member.name,
            description: member.designation,
          })),
        },
      ],
    };

    const existing = document.querySelector(
      'script[data-page-schema="about"]'
    );

    if (existing) existing.remove();

    const script = document.createElement("script");

    script.type = "application/ld+json";
    script.dataset.pageSchema = "about";
    script.textContent = JSON.stringify(structuredData);

    document.head.appendChild(script);

    return () => script.remove();
  }, []);

  return (
    <>
      <SEO
        title="About WebQenzo | Digital Design & Development Agency"
        description="Meet WebQenzo, a digital team focused on thoughtful web design, full-stack development, marketing and business-oriented digital experiences."
        path="/about"
      />

      <main className="overflow-x-clip bg-white text-[#0A0D12] selection:bg-[#2563EB]/20">

        {/* =================================================
            01 — HERO
        ================================================= */}

        <section className="relative isolate overflow-hidden bg-[#05070B] text-white">

          {/* Background */}

          <div className="absolute inset-0 -z-10">

            <img
              src="/Every Angel.png"
              alt=""
              fetchPriority="high"
              className="h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-[#05070B]/50" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#05070B] via-[#05070B]/85 to-[#05070B]/20" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-[#05070B]/20" />

          </div>

          {/* Decorative borders */}

          <div className="absolute left-5 top-0 hidden h-full w-px bg-white/10 lg:block lg:left-12" />

          <div className="absolute right-5 top-0 hidden h-full w-px bg-white/10 lg:block lg:right-12" />

          {/* Hero content */}

          <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-5 pb-24 pt-24 sm:px-8 sm:pb-28 sm:pt-32 lg:grid-cols-[1.15fr_.85fr] lg:px-16 lg:py-32">

            <Reveal>

              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5 backdrop-blur-md">

                <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">
                  A digital creative studio
                </span>

              </div>

              <p className="mt-9 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#2563EB] sm:text-xs">
                Design / Development / Strategy
              </p>

              <h1 className="mt-5 max-w-4xl font-serif text-[clamp(3.5rem,8vw,7.6rem)] leading-[0.94] tracking-[-0.075em]">

                We build

                <br />

                digital with

                <br />

                <span className="italic text-[#2563EB]">
                  intention.
                </span>

              </h1>

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
                We bring development, design, marketing and
                business thinking together to create thoughtful
                digital experiences for ambitious businesses.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <ButtonLink light>
                  Let's build together
                </ButtonLink>

                <a
                  href="#about-us"
                  className="inline-flex min-h-12 items-center gap-3 border border-white/20 px-5 text-xs font-semibold text-white transition hover:border-[#2563EB] hover:text-[#2563EB]"
                >
                  Discover WebQenzo

                  <ArrowRight size={16} />
                </a>

              </div>

              {/* Hero footer */}

              <div className="mt-10 flex items-center gap-5 border-t border-white/15 pt-5">

                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                    Our focus
                  </p>

                  <p className="mt-1 text-xs font-medium text-white/80">
                    Purposeful digital experiences
                  </p>
                </div>

                <div className="h-9 w-px bg-white/15" />

                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                    Our approach
                  </p>

                  <p className="mt-1 text-xs font-medium text-white/80">
                    Thoughtful. Practical. Creative.
                  </p>
                </div>

              </div>

            </Reveal>

            {/* Hero visual */}

            <Reveal delay={0.12}>

              <div className="relative mx-auto w-full max-w-[470px]">

                <div className="absolute -inset-3 rounded-2xl border border-[#2563EB]/20" />

                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0A0D12]/90 shadow-[0_35px_100px_rgba(0,0,0,0.4)] backdrop-blur-xl">

                  {/* Header */}

                  <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

                    <div className="flex items-center gap-2">

                      <span className="h-2 w-2 rounded-full bg-[#2563EB]" />

                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
                        Our philosophy
                      </span>

                    </div>

                    <Layers3
                      size={19}
                      strokeWidth={1.5}
                      className="text-[#2563EB]"
                    />

                  </div>

                  {/* Statement */}

                  <div className="px-5 py-6 sm:px-7 sm:py-8">

                    <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
                      Built with
                      <br />
                      <span className="italic text-[#2563EB]">
                        purpose.
                      </span>
                    </h2>

                    <p className="mt-3 max-w-xs text-xs leading-6 text-white/50">
                      Every project starts with a question.
                      Every solution starts with understanding.
                    </p>

                  </div>

                  {/* Principles */}

                  <div className="px-5 sm:px-7">

                    {[
                      {
                        number: "01",
                        title: "Think clearly",
                        text: "Understand the real objective.",
                      },
                      {
                        number: "02",
                        title: "Create carefully",
                        text: "Design around real people.",
                      },
                      {
                        number: "03",
                        title: "Build properly",
                        text: "Develop with attention to detail.",
                      },
                      {
                        number: "04",
                        title: "Keep improving",
                        text: "Plan for what comes next.",
                      },
                    ].map((item) => (

                      <div
                        key={item.number}
                        className="flex items-center gap-4 border-t border-white/10 py-4"
                      >

                        <span className="font-serif text-xl text-[#2563EB]">
                          {item.number}
                        </span>

                        <div className="flex-1">

                          <h3 className="text-xs font-semibold text-white">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-[10px] text-white/50">
                            {item.text}
                          </p>

                        </div>

                        <Check
                          size={15}
                          className="text-[#2563EB]"
                        />

                      </div>

                    ))}

                  </div>

                  {/* Bottom */}

                  <div className="mx-5 mb-5 mt-4 flex items-center justify-between bg-[#2563EB] px-4 py-3 sm:mx-7 sm:mb-7">

                    <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#05070B]">
                      Thoughtful by design
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="text-[#05070B]"
                    />

                  </div>

                </div>

              </div>

            </Reveal>

          </div>

          {/* Bottom hero bar */}

          <div className="absolute bottom-0 left-0 right-0 border-t border-white/10">

            <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-8 lg:px-16">

              <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/40 sm:text-[10px]">
                Digital experiences / Built with intention
              </span>

              <a
                href="#about-us"
                className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/70 transition hover:text-[#2563EB]"
              >
                Scroll to discover

                <ArrowRight size={14} />
              </a>

            </div>

          </div>

        </section>

        {/* =================================================
            02 — WHO WE ARE
        ================================================= */}

        <section
          id="about-us"
          className="scroll-mt-20 border-b border-slate-100 bg-[#F8FAFC]"
        >

          <div className="mx-auto grid max-w-[1440px] gap-7 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[.7fr_1.3fr] lg:gap-16 lg:px-12 lg:py-24">

            <Reveal>

              <Eyebrow>01 / Who we are</Eyebrow>

              <Heading className="mt-5">
                More than a website.
                <br />

                <span className="italic text-[#2563EB]">
                  A digital partnership.
                </span>
              </Heading>

            </Reveal>

            <Reveal>

              <p className="max-w-3xl font-serif text-2xl leading-[1.5] tracking-tight sm:text-3xl lg:text-[38px]">
                Your digital presence should reflect the quality
                of the business behind it.
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">

                <p className="text-sm leading-7 text-slate-600">
                  At WebQenzo, we bring together creative
                  thinking and technical execution to help
                  businesses present themselves with greater
                  clarity, consistency and confidence online.
                </p>

                <p className="text-sm leading-7 text-slate-600">
                  Our focus is simple: understand the requirement,
                  choose the right direction and build a digital
                  experience around a meaningful business purpose.
                </p>

              </div>

              <Link
                to="/get-quote"
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#2563EB] transition hover:gap-3"
              >
                Start a conversation

                <ArrowRight size={16} />
              </Link>

            </Reveal>

          </div>

        </section>

        {/* =================================================
            03 — OUR PHILOSOPHY
        ================================================= */}

        <section className="bg-white py-16 sm:py-20 lg:py-24">

          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

            <div className="grid items-end gap-6 lg:grid-cols-[1fr_.7fr]">

              <Reveal>

                <Eyebrow>02 / Our philosophy</Eyebrow>

                <Heading className="mt-5">
                  Good ideas deserve
                  <br />

                  <span className="italic text-[#2563EB]">
                    thoughtful execution.
                  </span>
                </Heading>

              </Reveal>

              <Reveal>

                <p className="max-w-lg text-sm leading-7 text-slate-600">
                  We don't approach every project with the same
                  template. We first understand what your business
                  needs, then build a direction that makes sense
                  for the audience, objectives and scope.
                </p>

              </Reveal>

            </div>

            {/* Principles */}

            <div className="mt-10 grid grid-cols-1 border-l border-t border-slate-200 sm:grid-cols-2 lg:grid-cols-4">

              {principles.map((item, index) => {

                const Icon = item.icon;

                return (

                  <Reveal key={item.number} delay={index * 0.05}>

                    <article className="group flex min-h-[245px] flex-col border-b border-r border-slate-200 p-5 transition duration-300 hover:bg-[#F8FAFC] sm:p-6">

                      <div className="flex items-center justify-between">

                        <Icon
                          size={23}
                          strokeWidth={1.5}
                          className="text-[#2563EB]"
                        />

                        <SectionNumber>
                          {item.number}
                        </SectionNumber>

                      </div>

                      <div className="mt-auto pt-9">

                        <h3 className="text-base font-semibold tracking-tight">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-xs leading-6 text-slate-500">
                          {item.text}
                        </p>

                      </div>

                    </article>

                  </Reveal>

                );

              })}

            </div>

          </div>

        </section>

        {/* =================================================
            04 — DESIGN AND TECHNOLOGY
        ================================================= */}

        <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">

          <div className="mx-auto grid max-w-[1440px] overflow-hidden rounded-xl bg-[#0A0D12] lg:grid-cols-2">

            {/* Visual */}

            <div className="relative min-h-[330px] overflow-hidden sm:min-h-[440px]">

              <img
                src="/Every Angel.png"
                alt="Digital interface design and creative workspace"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#05070B]/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8">

                <Eyebrow light>
                  Digital craftsmanship
                </Eyebrow>

                <h3 className="mt-4 font-serif text-3xl text-white sm:text-4xl">
                  Form meets function.
                </h3>

              </div>

            </div>

            {/* Content */}

            <div className="flex flex-col justify-center px-6 py-10 sm:px-9 sm:py-12 lg:px-12">

              <Reveal>

                <Eyebrow light>
                  03 / Design & technology
                </Eyebrow>

                <Heading light className="mt-5">
                  A better experience,
                  <br />

                  <span className="italic text-[#2563EB]">
                    from every angle.
                  </span>
                </Heading>

                <p className="mt-5 text-sm leading-7 text-white/60">
                  We bring visual direction and technical
                  thinking together, considering how your
                  website looks, feels and functions across
                  different devices.
                </p>

              </Reveal>

              <div className="mt-6 divide-y divide-white/10 border-t border-white/10">

                {[
                  {
                    icon: Palette,
                    title: "Visual identity",
                    text: "Consistent colour, typography and composition.",
                  },
                  {
                    icon: MonitorSmartphone,
                    title: "Responsive experience",
                    text: "Layouts designed for desktop and mobile.",
                  },
                  {
                    icon: Code2,
                    title: "Technical foundations",
                    text: "Maintainable implementation built around the project.",
                  },
                ].map((item) => {

                  const Icon = item.icon;

                  return (

                    <div
                      key={item.title}
                      className="flex gap-4 py-4"
                    >

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white/5 text-[#2563EB]">

                        <Icon size={18} />

                      </div>

                      <div>

                        <h3 className="text-xs font-semibold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-xs leading-6 text-white/50">
                          {item.text}
                        </p>

                      </div>

                    </div>

                  );

                })}

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            05 — CAPABILITIES
        ================================================= */}

        <section className="border-y border-slate-200 bg-[#F8FAFC] py-16 sm:py-20">

          <div className="mx-auto grid max-w-[1440px] gap-8 px-5 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-14 lg:px-12">

            <Reveal>

              <Eyebrow>04 / What we do</Eyebrow>

              <Heading className="mt-5">
                Everything begins
                <br />

                <span className="italic text-[#2563EB]">
                  with your needs.
                </span>
              </Heading>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
                From a focused landing page to a custom web
                application, we consider the right solution
                for your requirements.
              </p>

              <div className="mt-6">

                <ButtonLink>
                  Discuss your project
                </ButtonLink>

              </div>

            </Reveal>

            <Reveal>

              <div className="grid gap-x-7 sm:grid-cols-2">

                {capabilities.map((item, index) => (

                  <div
                    key={item}
                    className="group flex items-center gap-3 border-b border-slate-200 py-4"
                  >

                    <span className="text-[10px] font-semibold text-[#2563EB]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="flex-1 text-xs font-medium text-[#0A0D12] transition group-hover:translate-x-1">
                      {item}
                    </span>

                    <ArrowUpRight
                      size={14}
                      className="text-slate-400 transition group-hover:text-[#2563EB]"
                    />

                  </div>

                ))}

              </div>

            </Reveal>

          </div>

        </section>

        {/* =================================================
            06 — PROCESS
        ================================================= */}

        <section className="bg-white py-16 sm:py-20">

          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

            <Reveal>

              <Eyebrow>05 / Our process</Eyebrow>

              <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_.7fr]">

                <Heading>
                  Clear thinking.
                  <br />

                  <span className="italic text-[#2563EB]">
                    A considered process.
                  </span>
                </Heading>

                <p className="max-w-lg text-sm leading-7 text-slate-600">
                  Each project follows a structured direction,
                  with room for collaboration, feedback and
                  refinement at agreed stages.
                </p>

              </div>

            </Reveal>

            <div className="mt-9 grid grid-cols-1 border-l border-t border-slate-200 sm:grid-cols-2 lg:grid-cols-4">

              {steps.map((step, index) => {

                const Icon = step.icon;

                return (

                  <Reveal key={step.number} delay={index * 0.05}>

                    <article className="flex min-h-[220px] flex-col border-b border-r border-slate-200 p-5 sm:p-6">

                      <div className="flex items-center justify-between">

                        <Icon
                          size={23}
                          strokeWidth={1.5}
                          className="text-[#2563EB]"
                        />

                        <SectionNumber>
                          {step.number}
                        </SectionNumber>

                      </div>

                      <div className="mt-auto pt-8">

                        <h3 className="text-base font-semibold">
                          {step.title}
                        </h3>

                        <p className="mt-2 text-xs leading-6 text-slate-500">
                          {step.text}
                        </p>

                      </div>

                    </article>

                  </Reveal>

                );

              })}

            </div>

            <Link
              to="/process"
              className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#2563EB] transition hover:gap-3"
            >
              Explore our complete process

              <ArrowRight size={15} />

            </Link>

          </div>

        </section>

        {/* =================================================
            07 — DEVELOPMENT STANDARDS
        ================================================= */}

        <section className="bg-[#F8FAFC] py-16 sm:py-20">

          <div className="mx-auto grid max-w-[1440px] items-center gap-9 px-5 sm:px-8 lg:grid-cols-2 lg:gap-14 lg:px-12">

            {/* Content */}

            <Reveal>

              <Eyebrow>06 / Development standards</Eyebrow>

              <Heading className="mt-5">
                The details matter.
                <br />

                <span className="italic text-[#2563EB]">
                  So does the foundation.
                </span>
              </Heading>

              <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600">
                A professional website needs more than a good
                first impression. We consider usability,
                maintainability and implementation quality
                throughout development.
              </p>

              <div className="mt-6 grid gap-2 sm:grid-cols-2">

                {standards.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 border border-slate-200 bg-white px-3 py-3"
                  >

                    <BadgeCheck
                      size={16}
                      className="shrink-0 text-[#2563EB]"
                    />

                    <span className="text-[11px] font-medium text-slate-700">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </Reveal>

            {/* Image */}

            <Reveal delay={0.1}>

              <div className="relative">

                <div className="absolute -bottom-3 -right-3 h-full w-full border border-[#2563EB]/30" />

                <div className="relative min-h-[380px] overflow-hidden rounded-xl bg-[#0A0D12] sm:min-h-[470px]">

                  <img
                    src="/Development.png"
                    alt="Software development and engineering workspace"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070B]/90 via-transparent to-[#05070B]/10" />

                  <div className="absolute left-5 right-5 top-5 rounded-lg border border-white/15 bg-[#0A0D12]/70 p-4 backdrop-blur-md sm:left-7 sm:right-7 sm:top-7">

                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded bg-[#2563EB] text-[#05070B]">

                        <Code2 size={18} />

                      </div>

                      <div>

                        <p className="text-xs font-semibold text-white">
                          Engineering mindset
                        </p>

                        <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-white/50">
                          Thoughtfully implemented
                        </p>

                      </div>

                    </div>

                  </div>

                  <div className="absolute bottom-6 left-5 right-5 sm:bottom-8 sm:left-7 sm:right-7">

                    <Eyebrow light>
                      Made with care
                    </Eyebrow>

                    <h3 className="mt-4 font-serif text-3xl text-white sm:text-4xl">
                      Design that works.
                      <br />

                      Code that supports it.
                    </h3>

                  </div>

                </div>

              </div>

            </Reveal>

          </div>

        </section>

        {/* =================================================
            08 — TEAM
        ================================================= */}

        <section
          id="our-team"
          className="scroll-mt-20 bg-white py-16 sm:py-20"
        >

          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

            {/* Team heading */}

            <div className="grid items-end gap-6 lg:grid-cols-[1fr_.7fr]">

              <Reveal>

                <Eyebrow>07 / The people behind the work</Eyebrow>

                <Heading className="mt-5">
                  Different strengths.
                  <br />

                  <span className="italic text-[#2563EB]">
                    One shared vision.
                  </span>
                </Heading>

              </Reveal>

              <Reveal>

                <p className="max-w-lg text-sm leading-7 text-slate-600">
                  Our team brings together development,
                  advertising, marketing and business analysis.
                  Different disciplines working towards a more
                  complete digital experience.
                </p>

              </Reveal>

            </div>

            {/* Team image */}

            <Reveal className="mt-8">

              <div className="relative h-[220px] overflow-hidden rounded-xl sm:h-[320px] lg:h-[380px]">

                <img
                  src="/webqenzoteam.png"
                  alt="WebQenzo team"
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#05070B]/65 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between sm:bottom-7 sm:left-7 sm:right-7">

                  <div>

                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
                      The team
                    </p>

                    <h3 className="mt-2 font-serif text-3xl text-white sm:text-4xl">
                      A collective of ideas.
                    </h3>

                  </div>

                  <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur sm:flex">

                    <Users size={20} />

                  </div>

                </div>

              </div>

            </Reveal>

            {/* Team members */}

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {team.map((member, index) => (

                <Reveal key={member.name} delay={index * 0.05}>

                  <article className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_45px_rgba(15,23,42,0.07)]">

                    {/* Photo */}

                    <div className="relative h-[270px] overflow-hidden bg-[#0A0D12] sm:h-[310px]">

                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        className="h-full w-full object-cover object-[center_20%] transition duration-700 group-hover:scale-[1.04]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#05070B]/90 via-[#05070B]/10 to-transparent" />

                      {/* Number */}

                      <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/20 text-[10px] font-semibold text-white backdrop-blur">
                        {member.number}
                      </span>

                      {/* Name */}

                      <div className="absolute bottom-4 left-4 right-4">

                        <span className="inline-flex rounded-sm bg-[#2563EB] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-white">
                          {member.role}
                        </span>

                        <h3 className="mt-2 font-serif text-2xl tracking-tight text-white">
                          {member.name}
                        </h3>

                        <p className="mt-1 text-[10px] text-white/70">
                          {member.designation}
                        </p>

                      </div>

                    </div>

                    {/* Card details */}

                    <div className="p-4 sm:p-5">

                      <p className="min-h-[66px] text-xs leading-6 text-slate-600">
                        {member.description}
                      </p>

                      <div className="mt-4 border-t border-slate-100 pt-3">

                        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
                          Core focus
                        </p>

                        <div className="mt-2 flex flex-wrap gap-1.5">

                          {member.tags.map((tag) => (

                            <span
                              key={tag}
                              className="rounded-sm border border-slate-200 bg-slate-50 px-2 py-1 text-[9px] font-medium text-slate-600"
                            >
                              {tag}
                            </span>

                          ))}

                        </div>

                      </div>

                      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">

                        <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                          WebQenzo
                        </span>

                        <span className="flex items-center gap-1 text-[10px] font-semibold text-[#2563EB] transition group-hover:gap-2">
                          Our team

                          <ArrowRight size={13} />

                        </span>

                      </div>

                    </div>

                  </article>

                </Reveal>

              ))}

            </div>

          </div>

        </section>

        {/* =================================================
            09 — OUR COMMITMENT
        ================================================= */}

        <section className="border-y border-slate-200 bg-[#F8FAFC] py-16 sm:py-20">

          <div className="mx-auto grid max-w-[1440px] gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:gap-14 lg:px-12">

            <Reveal>

              <Eyebrow>08 / Our commitment</Eyebrow>

              <Heading className="mt-5">
                Clear expectations.
                <br />

                <span className="italic text-[#2563EB]">
                  Honest collaboration.
                </span>
              </Heading>

              <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600">
                Strong working relationships depend on clear
                communication, agreed deliverables and a shared
                understanding of the project.
              </p>

            </Reveal>

            <Reveal>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-[0_15px_45px_rgba(15,23,42,0.04)] sm:p-7">

                {[
                  "Clearly defined project scope",
                  "Agreed deliverables and priorities",
                  "Transparent communication",
                  "Feedback at agreed milestones",
                  "Attention to quality and usability",
                ].map((item, index) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-slate-100 py-4 last:border-0 last:pb-0"
                  >

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-blue-50 text-blue-600">

                      <Check size={15} />

                    </span>

                    <span className="flex-1 text-xs font-medium text-slate-700">
                      {item}
                    </span>

                    <span className="text-[9px] font-semibold text-slate-300">
                      0{index + 1}
                    </span>

                  </div>

                ))}

              </div>

            </Reveal>

          </div>

        </section>

        {/* =================================================
            10 — FINAL CTA
        ================================================= */}

        <section className="relative isolate overflow-hidden bg-[#05070B] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12">

          {/* Grid background */}

          <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:50px_50px]" />

          {/* Decorative circles */}

          <div className="pointer-events-none absolute -right-48 -top-48 h-[550px] w-[550px] rounded-full border border-[#2563EB]/15" />

          <div className="pointer-events-none absolute -right-24 -top-24 h-[400px] w-[400px] rounded-full border border-[#2563EB]/15" />

          <div className="pointer-events-none absolute -bottom-64 -left-48 h-[500px] w-[500px] rounded-full border border-[#2563EB]/10" />

          <Reveal className="relative mx-auto max-w-5xl text-center">

            <div className="flex justify-center">

              <Eyebrow light>
                Let's create something meaningful
              </Eyebrow>

            </div>

            <h2 className="mt-8 font-serif text-[clamp(3rem,7vw,7rem)] leading-[1.02] tracking-[-0.065em]">

              Your next chapter

              <br />

              <span className="italic text-[#2563EB]">
                starts with a conversation.
              </span>

            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
              Tell us about your business, your goals and the
              digital experience you want to create. Let's
              explore the right direction together.
            </p>

            <div className="mt-8 flex justify-center">

              <ButtonLink light>
                Start your project
              </ButtonLink>

            </div>

            {/* Bottom promises */}

            <div className="mx-auto mt-12 flex max-w-2xl flex-wrap justify-center gap-x-7 gap-y-4 border-t border-white/15 pt-6">

              {[
                "Thoughtful design",
                "Purposeful development",
                "Clear communication",
              ].map((item) => (

                <span
                  key={item}
                  className="flex items-center gap-2 text-[10px] text-white/60 sm:text-xs"
                >

                  <Check
                    size={14}
                    className="text-[#2563EB]"
                  />

                  {item}

                </span>

              ))}

            </div>

          </Reveal>

        </section>

        {/* =================================================
            BRAND STRIP
        ================================================= */}

        <div className="bg-[#05070B] px-5 py-5 text-white sm:px-8 lg:px-12">

          <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-3 sm:flex-row">

            <Link
              to="/"
              className="text-sm font-bold uppercase tracking-[0.24em]"
            >
              WEBQENZO
              <span className="text-[#2563EB]">.</span>
            </Link>

            <span className="text-center text-[9px] uppercase tracking-[0.14em] text-white/40 sm:text-right sm:text-[10px]">
              Thoughtfully designed. Purposefully developed.
            </span>

          </div>

        </div>

      </main>
    </>
  );
}

export default About;
