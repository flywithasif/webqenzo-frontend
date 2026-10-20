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
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const team = [
  {
    name: "Asif",
    role: "Developer",
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
    role: "Founder",
    designation: "CEO",
    number: "01",
    image: "/webqenzoteam.png",
    description:
      "Leading development and technical foundations behind digital experiences.",
    tags: ["Development", "Web Architecture"],
  },
  {
    name: "Deepak",
    role: "Strategy Head",
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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const viewport = { once: true, amount: 0.12 };

function Reveal({ children, className = "" }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, light = false }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`h-px w-8 ${
          light ? "bg-[#22D3EE]" : "bg-[#2563EB]"
        }`}
      />
      <span
        className={`text-[10px] font-bold uppercase tracking-[0.25em] sm:text-xs ${
          light ? "text-[#22D3EE]" : "text-[#2563EB]"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

function Heading({ children, light = false, className = "" }) {
  return (
    <h2
      className={`font-serif text-4xl font-normal leading-[1.12] tracking-[-0.045em] sm:text-5xl lg:text-6xl ${
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
      className={`group inline-flex min-h-14 items-center justify-center gap-5 px-6 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB] ${
        light
          ? "bg-white text-[#0A0D12] hover:bg-[#22D3EE]"
          : "bg-[#0A0D12] text-white hover:bg-[#17484F]"
      }`}
    >
      {children}
      <ArrowUpRight
        size={18}
        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </Link>
  );
}

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
            description: member.role,
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

      <main className="overflow-x-clip bg-white text-[#0A0D12] selection:bg-[#22D3EE]/25">
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-[#05070B] text-white">
          <div className="absolute inset-0 -z-10">
            <img
              src="/Every Angel.png"
              alt="Contemporary creative workspace for digital design and development"
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#05070B]/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#05070B] via-[#05070B]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-transparent" />
          </div>

          <div className="absolute left-5 top-0 hidden h-full w-px bg-white/15 lg:left-12 lg:block" />
          <div className="absolute right-5 top-0 hidden h-full w-px bg-white/15 lg:right-12 lg:block" />

          <div className="relative mx-auto grid min-h-[720px] max-w-[1440px] items-center gap-12 px-5 py-28 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:px-16 lg:py-32">
            <Reveal>
              <div className="inline-flex items-center gap-3 border border-white/20 bg-white/5 px-4 py-2.5 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#22D3EE]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">
                  Introducing WebQenzo
                </span>
              </div>

              <p className="mt-12 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#22D3EE]">
                Digital craftsmanship / Est. in purpose
              </p>

              <h1 className="mt-6 max-w-4xl font-serif text-[clamp(3.7rem,8vw,7.7rem)] leading-[0.98] tracking-[-0.065em]">
                We build
                <br />
                digital with
                <br />
                <span className="italic text-[#22D3EE]">
                  intention.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-sm leading-8 text-white/75 sm:text-base sm:leading-9">
                WebQenzo brings development, design, marketing and
                business thinking together to create thoughtful
                digital experiences for ambitious businesses.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink light>Let's build together</ButtonLink>

                <a
                  href="#our-approach"
                  className="inline-flex min-h-14 items-center justify-center gap-3 border border-white/30 px-6 text-sm font-semibold transition hover:border-[#22D3EE] hover:text-[#22D3EE]"
                >
                  Discover our approach
                  <ArrowRight size={17} />
                </a>
              </div>
            </Reveal>

            <Reveal className="relative mx-auto w-full max-w-[470px]">
              <div className="absolute -inset-5 border border-[#22D3EE]/25" />

              <div className="relative rounded-3xl border border-white/15 bg-[#0A0D12]/85 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop-blur-md sm:p-7">
                <div className="flex items-center justify-between border-b border-white/15 pb-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-[#22D3EE]">
                      Our philosophy
                    </p>
                    <h2 className="mt-2 font-serif text-2xl">
                      Built with purpose.
                    </h2>
                  </div>
                  <Layers3
                    size={28}
                    strokeWidth={1.3}
                    className="text-[#22D3EE]"
                  />
                </div>

                <div className="py-8">
                  {[
                    ["01", "Think clearly", "Understand the real objective"],
                    ["02", "Create carefully", "Design around real people"],
                    ["03", "Build properly", "Develop with attention to detail"],
                    ["04", "Keep improving", "Plan for what comes next"],
                  ].map(([number, title, description]) => (
                    <div
                      key={number}
                      className="flex gap-4 border-b border-white/10 py-5 last:border-0"
                    >
                      <span className="font-serif text-2xl text-[#22D3EE]">
                        {number}
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold">{title}</h3>
                        <p className="mt-1 text-xs leading-6 text-white/60">
                          {description}
                        </p>
                      </div>
                      <Check
                        size={16}
                        className="ml-auto mt-1 shrink-0 text-[#22D3EE]"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between bg-[#22D3EE] px-4 py-4 text-[#05070B]">
                  <span className="text-xs font-bold uppercase tracking-[0.12em]">
                    Thoughtful by design
                  </span>
                  <ArrowUpRight size={19} />
                </div>
              </div>
            </Reveal>

            <div className="absolute bottom-7 left-5 right-5 flex justify-between border-t border-white/20 pt-5 text-[10px] uppercase tracking-[0.2em] text-white/60 sm:left-8 sm:right-8 lg:left-16 lg:right-16">
              <span>Design / Development / Growth</span>
              <span className="hidden sm:block">Scroll to explore ↓</span>
            </div>
          </div>
        </section>

        {/* BRAND INTRODUCTION */}
        <section className="border-b border-[#E2E8F0] bg-[#F8FAFC]">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[.8fr_1.2fr] lg:gap-24 lg:px-12 lg:py-32">
            <Reveal>
              <Eyebrow>01 / Who we are</Eyebrow>
              <Heading className="mt-7">
                More than a website.
                <br />
                <span className="italic text-[#2563EB]">
                  A digital partnership.
                </span>
              </Heading>
            </Reveal>

            <Reveal>
              <p className="font-serif text-2xl leading-[1.5] tracking-tight sm:text-3xl">
                Your digital presence should reflect the quality
                of the business behind it.
              </p>

              <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">
                At WebQenzo, we bring together creative thinking
                and technical execution to help businesses present
                themselves with greater clarity, consistency and
                confidence online.
              </p>

              <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                Our focus is simple: understand the requirement,
                choose the right direction and build a digital
                experience around a meaningful business purpose.
              </p>

              <Link
                to="/get-quote"
                className="mt-7 inline-flex items-center gap-3 text-sm font-bold text-[#2563EB] hover:text-[#0A0D12]"
              >
                Start a conversation <ArrowRight size={17} />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* OUR APPROACH */}
        <section
          id="our-approach"
          className="scroll-mt-16 bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
        >
          <div className="mx-auto max-w-[1440px]">
            <div className="grid items-end gap-8 lg:grid-cols-2">
              <Reveal>
                <Eyebrow>02 / How we think</Eyebrow>
                <Heading className="mt-7">
                  Good ideas deserve
                  <br />
                  <span className="italic text-[#2563EB]">
                    thoughtful execution.
                  </span>
                </Heading>
              </Reveal>

              <Reveal>
                <p className="max-w-xl text-sm leading-8 text-slate-600 sm:text-base">
                  We do not approach every project with the same
                  template. We first understand what your business
                  needs, then build a direction that makes sense
                  for the audience, objectives and scope.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid gap-0 border-l border-t border-[#E2E8F0] sm:grid-cols-2 lg:grid-cols-4">
              {principles.map((item) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.number}>
                    <article className="group flex h-full min-h-[290px] flex-col border-b border-r border-[#E2E8F0] bg-white p-6 transition duration-300 hover:bg-[#F8FAFC] hover:shadow-[0_18px_45px_rgba(5,7,11,0.06)] sm:p-8">
                      <div className="flex items-center justify-between">
                        <Icon
                          size={25}
                          strokeWidth={1.5}
                          className="text-[#2563EB]"
                        />
                        <span className="font-serif text-2xl text-[#CBD5E1]">
                          {item.number}
                        </span>
                      </div>

                      <div className="mt-auto pt-12">
                        <h3 className="text-lg font-semibold tracking-tight">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">
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

        {/* VISUAL FEATURE */}
        <section className="px-5 pb-24 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-[1440px] overflow-hidden rounded-[28px] bg-[#0A0D12] shadow-[0_30px_90px_rgba(5,7,11,0.12)] lg:grid-cols-2">
            <div className="relative min-h-[340px] overflow-hidden sm:min-h-[500px]">
              <img
                src="/Every Angel.png"
                alt="Website interface design and digital analytics"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070B]/70 to-transparent" />
              <div className="absolute bottom-7 left-7 text-white sm:bottom-10 sm:left-10">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#22D3EE]">
                  Design with intention
                </p>
                <p className="mt-3 font-serif text-3xl sm:text-4xl">
                  Form meets function.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center px-7 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
              <Eyebrow light>03 / Digital craftsmanship</Eyebrow>

              <Heading light className="mt-7">
                A better experience,
                <br />
                <span className="italic text-[#22D3EE]">
                  from every angle.
                </span>
              </Heading>

              <p className="mt-6 text-sm leading-8 text-white/70 sm:text-base">
                We bring visual direction and technical thinking
                together, considering how your website looks,
                feels and functions across different devices.
              </p>

              <div className="mt-8 space-y-0 border-t border-white/15">
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
                      className="flex gap-4 border-b border-white/15 py-5"
                    >
                      <Icon
                        size={21}
                        className="mt-1 shrink-0 text-[#22D3EE]"
                      />
                      <div>
                        <h3 className="text-sm font-semibold">{item.title}</h3>
                        <p className="mt-2 text-xs leading-6 text-white/60">
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

        {/* CAPABILITIES */}
        <section className="border-y border-[#E2E8F0] bg-[#F8FAFC] py-24 sm:py-32">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20 lg:px-12">
            <Reveal>
              <Eyebrow>04 / What we do</Eyebrow>
              <Heading className="mt-7">
                Everything begins
                <br />
                <span className="italic text-[#2563EB]">
                  with your needs.
                </span>
              </Heading>

              <p className="mt-6 max-w-md text-sm leading-8 text-slate-600">
                From a focused landing page to a custom web
                application, we consider the right solution
                for your requirements.
              </p>

              <div className="mt-8">
                <ButtonLink>Discuss your project</ButtonLink>
              </div>
            </Reveal>

            <Reveal>
              <div className="grid gap-x-8 sm:grid-cols-2">
                {capabilities.map((item, index) => (
                  <div
                    key={item}
                    className="group flex items-center gap-3 border-b border-[#E2E8F0] py-5"
                  >
                    <span className="text-xs font-semibold text-[#2563EB]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-sm font-medium text-[#0A0D12] transition group-hover:translate-x-1">
                      {item}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-[#94A3B8] transition group-hover:text-[#2563EB]"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <Reveal>
              <Eyebrow>05 / Our working process</Eyebrow>
              <Heading className="mt-7 max-w-4xl">
                Clear thinking.
                <br />
                <span className="italic text-[#2563EB]">
                  A considered process.
                </span>
              </Heading>
              <p className="mt-6 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
                Each project follows a structured direction, with
                room for collaboration, feedback and refinement
                at agreed stages.
              </p>
            </Reveal>

            <div className="mt-14 grid border-l border-t border-[#E2E8F0] sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <Reveal key={step.number}>
                    <article className="flex h-full min-h-[235px] flex-col border-b border-r border-[#E2E8F0] p-6 sm:p-8">
                      <div className="flex items-center justify-between">
                        <Icon
                          size={24}
                          strokeWidth={1.5}
                          className="text-[#2563EB]"
                        />
                        <span className="font-serif text-3xl text-[#CBD5E1]">
                          {step.number}
                        </span>
                      </div>
                      <h3 className="mt-9 text-lg font-semibold">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {step.text}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>

            <div className="mt-8">
              <Link
                to="/process"
                className="inline-flex items-center gap-3 text-sm font-semibold text-[#2563EB] transition hover:gap-4"
              >
                Explore our complete process
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* DEVELOPMENT */}
        <section className="bg-[#F8FAFC] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <Eyebrow>06 / Development standards</Eyebrow>
              <Heading className="mt-7">
                The details matter.
                <br />
                <span className="italic text-[#2563EB]">
                  So does the foundation.
                </span>
              </Heading>

              <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">
                A professional website needs more than a good
                first impression. We consider usability,
                maintainability and implementation quality
                throughout development.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {standards.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border border-[#E2E8F0] bg-white p-4"
                  >
                    <BadgeCheck
                      size={18}
                      className="mt-0.5 shrink-0 text-[#2563EB]"
                    />
                    <span className="text-xs font-medium leading-6 text-[#0A0D12]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="relative">
              <div className="absolute -bottom-4 -right-4 h-full w-full border border-[#22D3EE]/50" />

              <div className="relative min-h-[430px] overflow-hidden rounded-2xl bg-[#0A0D12] shadow-[0_24px_70px_rgba(5,7,11,0.12)] sm:min-h-[560px]">
                <img
                  src="/Development.png"
                  alt="Software development and code on a computer screen"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-transparent" />

                <div className="absolute left-6 right-6 top-6 border border-white/20 bg-[#0A0D12]/70 p-5 backdrop-blur-md sm:left-8 sm:right-8 sm:top-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center bg-[#22D3EE] text-[#05070B]">
                      <Code2 size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Engineering mindset
                      </p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/60">
                        Thoughtfully implemented
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-7 left-6 right-6 text-white sm:bottom-10 sm:left-8 sm:right-8">
                  <Eyebrow light>Made with care</Eyebrow>
                  <h3 className="mt-5 font-serif text-3xl sm:text-4xl">
                    Design that works.
                    <br />
                    Code that supports it.
                  </h3>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* TEAM */}
        <section
          id="our-team"
          className="scroll-mt-20 bg-white py-24 sm:py-32"
        >
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="grid items-end gap-8 lg:grid-cols-[1fr_.65fr]">
              <Reveal>
                <Eyebrow> The people behind the work</Eyebrow>
                <Heading className="mt-7">
                  Different strengths.
                  <br />
                  <span className="italic text-[#2563EB]">
                    One shared vision.
                  </span>
                </Heading>
              </Reveal>

              <Reveal>
                <p className="max-w-lg text-sm leading-8 text-slate-600 sm:text-base">
                  Our team brings together development, advertising,
                  marketing and business analysis — different
                  disciplines working towards a more complete
                  digital experience.
                </p>
              </Reveal>
            </div>

            <Reveal className="mt-12">
              <div className="relative h-[250px] overflow-hidden rounded-[24px] sm:h-[360px] lg:h-[430px]">
                <img
                  src="/webqenzoteam.png"
                  alt="Creative team collaborating on digital projects"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>

            {/* Team Grid Cards */}
            <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <Reveal key={member.number || member.name}>
                  <article className="group flex flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#22D3EE] hover:shadow-[0_24px_60px_rgba(5,7,11,0.10)]">
                    
                    {/* Card Image Header with Fixed Aspect Ratio & Cover */}
                    <div className="relative h-[260px] w-full overflow-hidden bg-[#0A0D12] sm:h-[300px]">
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        className="h-full w-full object-cover object-[center_20%] transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#05070B]/90 via-[#05070B]/30 to-transparent" />
                      
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="inline-block rounded-[4px] bg-[#2563EB] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-white">
                          {member.role}
                        </span>
                        <h3 className="mt-2 font-serif text-2xl sm:text-3xl tracking-tight text-white">
                          {member.name}
                        </h3>
                        {member.designation && (
                          <p className="mt-0.5 text-xs text-slate-300">
                            {member.designation}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="flex flex-col p-5 sm:p-6">
                      <p className="text-xs sm:text-sm leading-6 text-slate-600">
                        {member.description}
                      </p>

                      {/* Core Focus Tags */}
                      <div className="mt-4 border-t border-[#E2E8F0] pt-3.5">
                        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
                          Core Focus
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {member.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md border border-[#E2E8F0] bg-slate-50 px-2 py-1 text-[9px] font-medium text-[#475569]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Footer / Action */}
                      <div className="mt-4 flex items-center justify-between border-t border-[#E2E8F0] pt-3.5 text-xs font-semibold text-slate-500">
                        <span>Webqenzo</span>
                        <span className="flex items-center gap-1 text-[#2563EB] transition group-hover:translate-x-1">
                          Consult &rarr;
                        </span>
                      </div>
                    </div>

                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* TRANSPARENCY */}
        <section className="border-y border-[#E2E8F0] bg-[#F8FAFC] py-20 sm:py-28">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20 lg:px-12">
            <Reveal>
              <Eyebrow>08 / Our commitment</Eyebrow>
              <Heading className="mt-7">
                Clear expectations.
                <br />
                <span className="italic text-[#2563EB]">
                  Honest collaboration.
                </span>
              </Heading>
              <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">
                Strong working relationships depend on clear
                communication, agreed deliverables and a shared
                understanding of the project.
              </p>
            </Reveal>

            <Reveal>
              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_20px_60px_rgba(5,7,11,0.05)] sm:p-9">
                {[
                  "Clearly defined project scope",
                  "Agreed deliverables and priorities",
                  "Transparent communication",
                  "Feedback at agreed milestones",
                  "Attention to quality and usability",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-[#E2E8F0] py-5 last:border-0 last:pb-0"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#EFF6FF] text-[#2563EB]">
                      <Check size={16} />
                    </span>
                    <span className="text-sm font-medium text-[#0A0D12]">
                      {item}
                    </span>
                    <span className="ml-auto text-[10px] text-[#94A3B8]">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative isolate overflow-hidden bg-[#05070B] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12 lg:py-40">
          <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:64px_64px]" />

          <div className="pointer-events-none absolute -right-32 -top-40 h-[480px] w-[480px] rounded-full border border-[#22D3EE]/30" />
          <div className="pointer-events-none absolute -bottom-64 -left-32 h-[500px] w-[500px] rounded-full border border-[#22D3EE]/20" />

          <Reveal className="relative mx-auto max-w-5xl text-center">
            <div className="flex justify-center">
              <Eyebrow light>Let's create something meaningful</Eyebrow>
            </div>

            <h2 className="mt-9 font-serif text-[clamp(3.2rem,7vw,7rem)] leading-[1.02] tracking-[-0.06em]">
              Your next chapter
              <br />
              <span className="italic text-[#22D3EE]">
                starts with a conversation.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/70 sm:text-base">
              Tell us about your business, your goals and the
              digital experience you want to create. Let's explore
              the right direction together.
            </p>

            <div className="mt-10 flex justify-center">
              <ButtonLink light>Start your project</ButtonLink>
            </div>

            <div className="mx-auto mt-14 flex max-w-2xl flex-wrap justify-center gap-x-7 gap-y-4 border-t border-white/20 pt-7">
              {[
                "Thoughtful design",
                "Purposeful development",
                "Clear communication",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 text-xs text-white/75"
                >
                  <Check size={15} className="text-[#22D3EE]" />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        {/* BRAND FOOTER STRIP */}
        <div className="bg-[#05070B] px-5 py-6 text-white sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-3 sm:flex-row">
            <Link
              to="/"
              className="text-sm font-bold uppercase tracking-[0.24em]"
            >
              WEBQENZO<span className="text-[#22D3EE]">.</span>
            </Link>

            <span className="text-center text-[10px] tracking-wide text-white/60 sm:text-right">
              Thoughtfully designed. Purposefully developed.
            </span>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;