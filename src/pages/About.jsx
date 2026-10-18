
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  Code2,
  Eye,
  Layers3,
  LockKeyhole,
  MessageCircle,
  Palette,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Transparent Communication",
    text: "Clear scope, honest communication and defined expectations throughout your project.",
  },
  {
    icon: Eye,
    title: "Design With Purpose",
    text: "Every section supports usability, clarity and your business objectives.",
  },
  {
    icon: Code2,
    title: "Clean Development",
    text: "Maintainable, scalable and responsive code built with care.",
  },
  {
    icon: LockKeyhole,
    title: "Respect for Your Business",
    text: "Your brand, content and project requirements receive professional attention.",
  },
];

const values = [
  {
    number: "01",
    title: "Clarity Before Code",
    text: "We understand your business goals before choosing the right design and technology.",
  },
  {
    number: "02",
    title: "Premium Without Noise",
    text: "Thoughtful spacing, refined typography and purposeful interactions create lasting impressions.",
  },
  {
    number: "03",
    title: "Business First",
    text: "Your website should communicate your offer clearly and make the next action obvious.",
  },
  {
    number: "04",
    title: "Built for Growth",
    text: "Flexible foundations make it easier to expand features and evolve your digital experience.",
  },
];

const capabilities = [
  "Business websites",
  "E-commerce experiences",
  "Landing pages",
  "Booking platforms",
  "UI/UX design",
  "Website redesign",
  "Custom web applications",
  "SEO-ready architecture",
  "Performance-focused frontend",
  "Responsive development",
  "Third-party integrations",
  "Ongoing website support",
];

const standards = [
  "Responsive across screen sizes",
  "Semantic and structured frontend",
  "Reusable component architecture",
  "Accessible interactions",
  "Performance-conscious development",
  "Clean visual hierarchy",
  "Conversion-focused structure",
  "Scalable project organization",
];

const workflow = [
  "Understand the business",
  "Define the digital experience",
  "Design the visual system",
  "Develop the experience",
  "Refine the details",
  "Prepare it for growth",
];

const technologies = [
  "React",
  "Vite",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "Mongoose",
  "REST APIs",
  "Git",
  "Responsive UI",
];

const businessJourney = [
  { icon: Search, title: "Discover", text: "Understand" },
  { icon: Target, title: "Position", text: "Differentiate" },
  { icon: Palette, title: "Design", text: "Communicate" },
  { icon: Code2, title: "Build", text: "Deliver" },
  { icon: Rocket, title: "Grow", text: "Improve" },
];

const expectations = [
  {
    icon: MessageCircle,
    title: "Communication",
    text: "Clear questions, decisions and project direction from beginning to end.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional Process",
    text: "A structured approach keeps design, development and revisions aligned.",
  },
  {
    icon: Zap,
    title: "Attention to Detail",
    text: "Spacing, responsiveness, interactions and presentation all matter.",
  },
];

const transparencyPoints = [
  "Clear project scope",
  "Clear deliverables",
  "Clear communication",
  "No unnecessary complexity",
];

const SectionLabel = ({ children }) => (
  <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-blue-700 sm:text-sm">
    {children}
  </p>
);

const SectionTitle = ({ children, className = "" }) => (
  <h2
    className={`text-3xl font-bold leading-tight tracking-[-0.045em] text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl ${className}`}
  >
    {children}
  </h2>
);

const Reveal = ({ children, className = "" }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.12 }}
    className={className}
  >
    {children}
  </motion.div>
);

const Surface = ({ children, className = "" }) => (
  <div
    className={`rounded-3xl border border-blue-100 bg-white shadow-[0_12px_45px_rgba(15,45,100,0.055)] transition duration-300 hover:border-blue-200 hover:shadow-[0_22px_60px_rgba(15,45,100,0.10)] ${className}`}
  >
    {children}
  </div>
);

function About() {
  return (
    <main className="overflow-x-clip bg-white text-slate-900">
      <SEO
        title="About WebQenzo"
        description="Discover WebQenzo, a digital web development agency focused on premium websites, thoughtful design, clean development and business-oriented digital experiences."
        path="/about"
      />

      {/* HERO */}
      <section
        aria-labelledby="about-hero-title"
        className="relative isolate overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white"
      >
        <div
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-200/50 blur-[100px] sm:h-96 sm:w-96" />
          <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-sky-200/40 blur-[110px] sm:h-[500px] sm:w-[500px]" />
          <div
            className="absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)",
              backgroundSize: "54px 54px",
              maskImage:
                "linear-gradient(to bottom, black, transparent 80%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-[1440px] px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:px-12 lg:pb-32 lg:pt-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
            <Reveal className="min-w-0">
              <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-semibold text-blue-800 shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
                Inside WebQenzo
                <ArrowUpRight size={14} />
              </div>

              <SectionLabel>Digital craftsmanship</SectionLabel>

              <h1
                id="about-hero-title"
                className="max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-7xl xl:text-[88px]"
              >
                We build digital
                <span className="mt-2 block bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 bg-clip-text pb-2 text-transparent">
                  experiences with intent.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
                WebQenzo is a digital web development agency focused on
                creating modern, premium and business-oriented digital
                experiences — from strategy and design to development and
                continuous improvement.
              </p>

              <div className="mt-9 flex flex-col gap-3 min-[420px]:flex-row sm:mt-10">
                <Link
                  to="/get-quote"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-blue-700 px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(29,78,216,0.20)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-[0_15px_40px_rgba(29,78,216,0.28)]"
                >
                  Start a Project
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </span>
                </Link>

                <Link
                  to="/portfolio"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 transition hover:border-blue-300 hover:bg-blue-50"
                >
                  Explore Our Work
                  <ArrowRight size={16} className="text-blue-700" />
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-blue-100 pt-6 text-xs font-medium text-slate-500 sm:gap-x-7">
                <span className="flex items-center gap-2">
                  <BadgeCheck size={16} className="text-blue-700" />
                  Purposeful design
                </span>
                <span className="flex items-center gap-2">
                  <BadgeCheck size={16} className="text-blue-700" />
                  Responsive development
                </span>
              </div>
            </Reveal>

            {/* Premium identity visual */}
            <Reveal className="mx-auto w-full max-w-[540px] min-w-0">
              <div className="relative px-3 py-8 sm:px-7 sm:py-10">
                <div
                  className="absolute inset-6 rounded-[36px] bg-blue-200/60 blur-2xl sm:inset-10"
                  aria-hidden="true"
                />

                <div className="relative rounded-[28px] border border-white bg-white/80 p-3 shadow-[0_35px_100px_rgba(30,64,175,0.15)] backdrop-blur-xl sm:rounded-[36px] sm:p-5">
                  <div className="overflow-hidden rounded-[22px] border border-blue-100 bg-gradient-to-br from-white via-blue-50 to-sky-50 p-5 sm:rounded-[28px] sm:p-8">
                    <div className="flex items-center justify-between gap-3 border-b border-blue-100 pb-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 text-white shadow-lg shadow-blue-700/20">
                          <Layers3 size={20} />
                        </div>
                        <div>
                          <p className="text-sm font-black tracking-tight text-slate-900">
                            WEBQENZO
                          </p>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                            Digital Studio
                          </p>
                        </div>
                      </div>
                      <Sparkles size={20} className="text-blue-600" />
                    </div>

                    <div className="py-10 sm:py-14">
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-700">
                        Our approach
                      </p>
                      <h2 className="mt-4 text-4xl font-black leading-[1.04] tracking-[-0.055em] text-slate-950 sm:text-6xl">
                        Build.
                        <br />
                        Refine.
                        <br />
                        <span className="text-blue-700">Grow.</span>
                      </h2>
                      <p className="mt-5 max-w-xs text-sm leading-7 text-slate-600">
                        Digital experiences designed around people and
                        business goals.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-blue-100 bg-white p-4">
                        <Code2 size={20} className="text-blue-700" />
                        <p className="mt-4 text-xs font-bold text-slate-900">
                          Design + Code
                        </p>
                        <p className="mt-1 text-[11px] text-slate-500">
                          Thoughtfully integrated
                        </p>
                      </div>
                      <div className="rounded-2xl border border-blue-100 bg-blue-700 p-4 text-white">
                        <Rocket size={20} />
                        <p className="mt-4 text-xs font-bold">
                          Built to evolve
                        </p>
                        <p className="mt-1 text-[11px] text-blue-100">
                          Ready for what's next
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -left-1 top-[17%] hidden rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-xl shadow-blue-900/5 sm:block">
                  <p className="text-[10px] font-semibold text-slate-500">
                    Our focus
                  </p>
                  <p className="mt-1 text-xs font-bold text-blue-800">
                    Quality in every detail
                  </p>
                </div>

                <div className="absolute -right-1 bottom-[12%] hidden rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-xl shadow-blue-900/5 sm:block">
                  <p className="text-[10px] font-semibold text-slate-500">
                    Our mindset
                  </p>
                  <p className="mt-1 text-xs font-bold text-blue-800">
                    Business first
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section
        aria-labelledby="who-title"
        className="border-y border-blue-100 bg-white"
      >
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[.75fr_1.25fr] lg:gap-20 lg:px-12 lg:py-28">
          <Reveal>
            <SectionLabel>01 / Who we are</SectionLabel>
            <SectionTitle className="max-w-md">
              A digital partner, not just a website vendor.
            </SectionTitle>
          </Reveal>

          <Reveal>
            <p
              id="who-title"
              className="text-xl leading-9 text-slate-700 sm:text-2xl sm:leading-10"
            >
              WebQenzo helps businesses build a stronger digital presence
              through thoughtful design, reliable development and technology
              that serves a real business purpose.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <p className="text-sm leading-8 text-slate-600">
                A website is often the first serious interaction a customer
                has with a business. That first impression deserves care.
              </p>
              <p className="text-sm leading-8 text-slate-600">
                We combine visual quality with usability, responsiveness,
                performance and a clear customer journey.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section
        aria-labelledby="philosophy-title"
        className="bg-gradient-to-b from-blue-50/70 to-white"
      >
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[.85fr_1.15fr] lg:gap-20 lg:px-12 lg:py-28">
          <Reveal>
            <Surface className="overflow-hidden p-6 sm:p-9">
              <div className="rounded-2xl bg-gradient-to-br from-blue-700 to-blue-900 p-6 text-white sm:p-9">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                  <Users size={26} />
                </div>
                <p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                  Our philosophy
                </p>
                <h3 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                  Build something you would trust yourself.
                </h3>
                <p className="mt-5 text-sm leading-7 text-blue-100">
                  Digital work should feel considered, transparent and
                  professional — never rushed or unnecessarily complicated.
                </p>
                <div className="mt-8 flex items-center justify-between border-t border-white/20 pt-5 text-xs text-blue-200">
                  <span>Thoughtful by design</span>
                  <Sparkles size={17} />
                </div>
              </div>
            </Surface>
          </Reveal>

          <Reveal>
            <SectionLabel>02 / The philosophy</SectionLabel>
            <SectionTitle id="philosophy-title">
              Technology should make your business more capable.
            </SectionTitle>
            <p className="mt-6 text-base leading-8 text-slate-600">
              Our work sits at the intersection of design, development and
              business thinking. The goal is not to add technology for its own
              sake, but to create better experiences using the right tools.
            </p>

            <div className="mt-9 space-y-0">
              {workflow.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-blue-100 py-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-blue-800">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold text-slate-800">
                    {item}
                  </span>
                  <Check size={16} className="ml-auto text-blue-700" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRUST */}
      <section
        aria-labelledby="trust-title"
        className="bg-white"
      >
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <Reveal className="max-w-3xl">
            <SectionLabel>03 / Built on trust</SectionLabel>
            <SectionTitle id="trust-title">
              Trust is part of the product.
            </SectionTitle>
            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              We want clients to understand what is being built, why it
              matters and what happens next.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {trustPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title}>
                  <Surface className="group h-full p-6 sm:p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition duration-300 group-hover:bg-blue-700 group-hover:text-white">
                      <Icon size={22} />
                    </div>
                    <p className="mt-6 text-xs font-bold text-blue-700">
                      0{index + 1}
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </Surface>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section
        aria-labelledby="capabilities-title"
        className="border-y border-blue-100 bg-blue-50/60"
      >
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[.8fr_1.2fr] lg:gap-16 lg:px-12 lg:py-28">
          <Reveal>
            <SectionLabel>04 / Capabilities</SectionLabel>
            <SectionTitle id="capabilities-title">
              From first idea to digital product.
            </SectionTitle>
            <p className="mt-6 max-w-lg text-base leading-8 text-slate-600">
              Our capabilities cover the essential layers required to create
              a modern and professional web presence.
            </p>

            <Link
              to="/get-quote"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-blue-800 hover:text-blue-950"
            >
              Discuss your project <ArrowRight size={16} />
            </Link>
          </Reveal>

          <Reveal>
            <div className="grid gap-x-8 sm:grid-cols-2">
              {capabilities.map((item, index) => (
                <div
                  key={item}
                  className="group flex min-w-0 items-center gap-3 border-b border-blue-200/70 py-4"
                >
                  <span className="text-[11px] font-bold text-blue-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-sm font-medium text-slate-700 transition group-hover:text-blue-800">
                    {item}
                  </span>
                  <ArrowUpRight
                    size={15}
                    className="shrink-0 text-blue-300 transition group-hover:text-blue-700"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section
        aria-labelledby="values-title"
        className="bg-white"
      >
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <Reveal className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <SectionLabel>05 / Our principles</SectionLabel>
              <SectionTitle id="values-title" className="max-w-3xl">
                Standards that shape every project.
              </SectionTitle>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-600">
              A considered approach keeps the work focused, professional and
              aligned with the business.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((item) => (
              <Reveal key={item.number}>
                <Surface className="h-full p-7 sm:p-9">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-blue-700">
                      {item.number}
                    </span>
                    <Sparkles size={19} className="text-blue-300" />
                  </div>
                  <h3 className="mt-9 text-2xl font-bold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </Surface>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN + DEVELOPMENT */}
      <section
        aria-labelledby="design-title"
        className="bg-gradient-to-b from-white to-blue-50/70"
      >
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <Reveal>
            <SectionLabel>06 / Design + development</SectionLabel>
            <SectionTitle id="design-title" className="max-w-4xl">
              Creative thinking backed by engineering.
            </SectionTitle>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <Surface className="h-full overflow-hidden">
                <div className="h-1.5 bg-gradient-to-r from-blue-700 to-sky-400" />
                <div className="p-7 sm:p-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Palette size={23} />
                  </div>
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                    Creative direction
                  </p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                    Design that communicates value.
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Visual systems shaped around your positioning, audience,
                    content and business objectives.
                  </p>
                  <div className="mt-7 space-y-3">
                    {[
                      "Visual hierarchy",
                      "Responsive layouts",
                      "Premium UI systems",
                      "Interaction design",
                    ].map((item) => (
                      <p key={item} className="flex items-center gap-3 text-sm text-slate-700">
                        <Check size={16} className="shrink-0 text-blue-700" />
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </Surface>
            </Reveal>

            <Reveal>
              <Surface className="h-full overflow-hidden">
                <div className="h-1.5 bg-gradient-to-r from-sky-400 to-blue-700" />
                <div className="p-7 sm:p-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-blue-700">
                    <Code2 size={23} />
                  </div>
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                    Engineering mindset
                  </p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                    Code that supports the experience.
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Development focused on reusable components,
                    maintainability, responsiveness and performance.
                  </p>
                  <div className="mt-7 space-y-3">
                    {[
                      "Component-based development",
                      "Responsive implementation",
                      "Clean project structure",
                      "Scalable foundations",
                    ].map((item) => (
                      <p key={item} className="flex items-center gap-3 text-sm text-slate-700">
                        <Check size={16} className="shrink-0 text-blue-700" />
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </Surface>
            </Reveal>
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section
        aria-labelledby="quality-title"
        className="bg-white"
      >
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <SectionLabel>07 / Quality standard</SectionLabel>
              <SectionTitle id="quality-title">
                Details make the difference.
              </SectionTitle>
              <p className="mt-6 text-base leading-8 text-slate-600">
                The difference between an average website and a premium
                experience is often found in the details people notice without
                consciously thinking about them.
              </p>
            </Reveal>

            <div className="grid gap-3 sm:grid-cols-2">
              {standards.map((item, index) => (
                <Reveal key={item}>
                  <div className="flex h-full items-center gap-4 rounded-2xl border border-blue-100 bg-white p-4 shadow-sm transition hover:border-blue-300 hover:shadow-md sm:p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <BadgeCheck size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-blue-700">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="mt-1 text-sm font-semibold leading-6 text-slate-800">
                        {item}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS JOURNEY */}
      <section
        aria-labelledby="journey-title"
        className="border-y border-blue-100 bg-blue-50/60"
      >
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <Reveal className="mx-auto max-w-4xl text-center">
            <SectionLabel>08 / Business perspective</SectionLabel>
            <SectionTitle id="journey-title">
              We design around the journey, not just the homepage.
            </SectionTitle>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {businessJourney.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title}>
                  <Surface className="relative h-full p-6 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                      <Icon size={22} />
                    </div>
                    <p className="mt-5 text-lg font-bold text-slate-950">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">{item.text}</p>
                    {index < businessJourney.length - 1 && (
                      <ArrowRight
                        size={15}
                        className="absolute -right-2.5 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-blue-50 text-blue-700 lg:block"
                      />
                    )}
                  </Surface>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section
        aria-labelledby="technology-title"
        className="bg-white"
      >
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1fr_.9fr] lg:gap-16 lg:px-12 lg:py-28">
          <Reveal>
            <SectionLabel>09 / Digital foundation</SectionLabel>
            <SectionTitle id="technology-title">
              Modern technology. Practical implementation.
            </SectionTitle>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Technology is selected according to the project's needs rather
              than forcing every business into the same solution.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-blue-100 bg-blue-50/70 px-3.5 py-2 text-xs font-semibold text-blue-900 transition hover:border-blue-300 hover:bg-blue-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <Surface className="overflow-hidden p-4 sm:p-6">
              <div className="rounded-2xl bg-gradient-to-br from-blue-700 to-blue-950 p-5 text-white sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                      Digital architecture
                    </p>
                    <h3 className="mt-2 text-2xl font-bold">The foundation</h3>
                  </div>
                  <Layers3 size={25} />
                </div>

                <div className="mt-7 space-y-3">
                  {[
                    ["Experience", "UI / UX"],
                    ["Frontend", "React"],
                    ["Backend", "Node + Express"],
                    ["Database", "MongoDB"],
                    ["Delivery", "Structured implementation"],
                  ].map(([left, right]) => (
                    <div
                      key={left}
                      className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-white/15 bg-white/[0.08] px-4 py-3"
                    >
                      <span className="text-xs text-blue-100">{left}</span>
                      <span className="text-xs font-semibold text-white">
                        {right}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Surface>
          </Reveal>
        </div>
      </section>

      {/* EXPECTATIONS */}
      <section
        aria-labelledby="expectations-title"
        className="bg-gradient-to-b from-white to-blue-50/60"
      >
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <Reveal>
            <SectionLabel>10 / Working relationship</SectionLabel>
            <SectionTitle id="expectations-title" className="max-w-4xl">
              What you should expect from us.
            </SectionTitle>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {expectations.map((item) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title}>
                  <Surface className="h-full p-7 sm:p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                      <Icon size={23} />
                    </div>
                    <h3 className="mt-7 text-xl font-bold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </Surface>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRANSPARENCY */}
      <section
        aria-labelledby="transparency-title"
        className="bg-white"
      >
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <Reveal>
            <div className="overflow-hidden rounded-[28px] border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-50 p-6 sm:rounded-[36px] sm:p-10 lg:p-14">
              <div className="grid items-start gap-10 lg:grid-cols-[1fr_.8fr] lg:gap-14">
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/15">
                    <ShieldCheck size={26} />
                  </div>
                  <SectionLabel>11 / Transparency</SectionLabel>
                  <SectionTitle id="transparency-title">
                    No inflated promises. Just clear work.
                  </SectionTitle>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                    Trust grows when expectations are realistic. Project
                    scope, timelines, requirements and deliverables should be
                    discussed clearly from the start.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {transparencyPoints.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-blue-100 bg-white px-4 py-4 text-sm font-semibold text-slate-800 shadow-sm"
                    >
                      <Check size={17} className="shrink-0 text-blue-700" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section
        aria-labelledby="brand-statement-title"
        className="relative overflow-hidden bg-blue-50/70"
      >
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/50 blur-[100px] sm:h-[500px] sm:w-[500px]" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-5 py-24 text-center sm:px-8 sm:py-28 lg:px-12 lg:py-36">
          <Reveal>
            <SectionLabel>12 / Why WebQenzo</SectionLabel>
            <h2
              id="brand-statement-title"
              className="mx-auto max-w-5xl text-4xl font-black leading-[1.06] tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-8xl"
            >
              Your website should feel like your business has
              <span className="mt-2 block bg-gradient-to-r from-blue-800 via-blue-600 to-sky-500 bg-clip-text pb-2 text-transparent">
                moved forward.
              </span>
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Better positioning. Better experience. A stronger digital
              presence — built with intention from the first screen to the
              smallest detail.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        aria-labelledby="about-cta-title"
        className="bg-white"
      >
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <Reveal>
            <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-blue-800 via-blue-700 to-blue-950 p-7 text-white shadow-[0_30px_80px_rgba(30,64,175,0.20)] sm:rounded-[36px] sm:p-10 lg:p-16">
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border-[45px] border-white/[0.06]"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-sky-400/15 blur-[100px]"
                aria-hidden="true"
              />

              <div className="relative grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-200">
                    13 / Let's build
                  </p>
                  <h2
                    id="about-cta-title"
                    className="mt-5 max-w-4xl text-3xl font-black leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl"
                  >
                    Have a business that deserves a better digital presence?
                  </h2>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base sm:leading-8">
                    Tell us what you are building, what you want to improve
                    and where you want to go next. We can start from there.
                  </p>
                </div>

                <Link
                  to="/get-quote"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-blue-900 transition duration-300 hover:-translate-y-1 hover:bg-blue-50"
                >
                  Start a Conversation
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-700 text-white transition group-hover:rotate-45">
                    <ArrowUpRight size={15} />
                  </span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export default About;
