import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  CalendarCheck2,
  Check,
  Code2,
  CreditCard,
  Globe2,
  Layers3,
  LifeBuoy,
  LineChart,
  Monitor,
  Palette,
  PenTool,
  Search,
  Settings2,
  ShoppingBag,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const reveal = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const industries = [
  {
    name: "Healthcare",
    icon: "✦",
    text: "Professional websites for doctors, clinics and healthcare brands.",
  },
  {
    name: "Fitness",
    icon: "↗",
    text: "High-energy digital experiences for gyms and fitness businesses.",
  },
  {
    name: "Legal",
    icon: "◇",
    text: "Trust-focused websites for advocates and law firms.",
  },
  {
    name: "Finance",
    icon: "◌",
    text: "Credible digital platforms for CA and accounting firms.",
  },
  {
    name: "Events",
    icon: "✦",
    text: "Visual websites for DJs, artists and event businesses.",
  },
  {
    name: "Commerce",
    icon: "□",
    text: "Conversion-focused storefronts for modern brands.",
  },
];

const coreServices = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "Professional websites designed around your business, services and customer journey.",
    icon: Globe2,
  },
  {
    number: "02",
    title: "E-commerce Websites",
    description:
      "Modern online stores designed to showcase products and make purchasing simple.",
    icon: ShoppingBag,
  },
  {
    number: "03",
    title: "Booking Websites",
    description:
      "Appointment and booking experiences that make it easier for customers to take action.",
    icon: CalendarCheck2,
  },
  {
    number: "04",
    title: "Portfolio Websites",
    description:
      "Premium personal and professional websites built to showcase expertise and work.",
    icon: BriefcaseBusiness,
  },
  {
    number: "05",
    title: "Website Redesign",
    description:
      "Transform an outdated website into a modern, responsive and credible experience.",
    icon: Layers3,
  },
  {
    number: "06",
    title: "Custom Web Applications",
    description:
      "Purpose-built web applications for workflows, dashboards and business-specific requirements.",
    icon: Code2,
  },
];

const websiteFeatures = [
  "Custom UI design",
  "Responsive on every device",
  "Business-focused page structure",
  "WhatsApp integration",
  "Contact forms",
  "Google Maps integration",
  "Basic SEO foundation",
  "Fast deployment",
];

const ecommerceFeatures = [
  "Product catalogue",
  "Product detail pages",
  "Collections & categories",
  "Shopping cart",
  "Payment gateway integration",
  "Order flow",
  "Customer-friendly checkout",
  "Mobile-first shopping experience",
];

const technologies = [
  "React.js",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Git / GitHub",
];

function Services() {
  return (
    <main className="overflow-hidden bg-[#F7F8FA] text-[#0B1220]">
      {/* =====================================================
          SEO
      ====================================================== */}

      <SEO
        title="Web Design & Development Services"
        description="Explore WebQenzo web design and development services including business websites, e-commerce, booking websites, UI/UX design, redesigns and custom web applications."
        path="/services"
      />

      {/* =====================================================
          01 — HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#060B14] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />

          <div className="absolute right-[-180px] top-[-100px] h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[130px]" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-5 pb-24 pt-20 sm:px-8 lg:px-10 lg:pb-32 lg:pt-28">
          <div className="grid items-end gap-16 lg:grid-cols-[1fr_0.75fr]">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={reveal}
            >
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                <Sparkles size={14} className="text-cyan-400" />
                What we build
              </div>

              <h1 className="max-w-5xl text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
                Digital
                <br />

                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  solutions
                </span>

                <br />

                built to matter.
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                From strategy and interface design to development,
                performance and launch, WebQenzo builds digital
                experiences around the way your business actually works.
              </p>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.25,
                duration: 0.7,
              }}
              className="lg:pb-2"
            >
              <div className="rounded-[28px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Capabilities
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400">
                    <ArrowDownRight size={17} />
                  </span>
                </div>

                <div className="mt-8 space-y-4">
                  {[
                    "Strategy",
                    "UI / UX Design",
                    "Web Development",
                    "E-commerce",
                    "Performance",
                    "Support",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0"
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-[10px] text-slate-600">
                          0{index + 1}
                        </span>

                        <span className="text-sm font-medium text-slate-300">
                          {item}
                        </span>
                      </div>

                      <ArrowUpRight
                        size={15}
                        className="text-slate-600"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-20 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-slate-600">
            <span className="h-px w-10 bg-slate-700" />
            Scroll to explore
          </div>
        </div>
      </section>

      {/* =====================================================
          02 — INDUSTRIES
      ====================================================== */}

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Built for business
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Different industries.
                <br />
                One standard of quality.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              Every business has different customers, goals and challenges.
              The website should reflect that.
            </p>
          </div>

          <div className="grid border-l border-t border-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="group border-b border-r border-slate-200 p-7 transition-all duration-300 hover:bg-[#F7F8FA] sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0B1220] text-sm text-white shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:shadow-blue-900/20">
                    {industry.icon}
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-600"
                  />
                </div>

                <h3 className="mt-8 text-xl font-semibold">
                  {industry.name}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
                  {industry.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          03 — CORE SERVICES
      ====================================================== */}

      <section className="bg-[#F7F8FA] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              Core services
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Everything you need to build a serious digital presence.
            </h2>
          </div>

          <div className="mt-16 grid gap-4 lg:grid-cols-2">
            {coreServices.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.number}
                  whileHover={{
                    y: -6,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                  }}
                  className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:border-blue-200 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-9"
                >
                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/[0.06] opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-xs text-slate-400">
                        {service.number}
                      </span>

                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/20">
                        <Icon size={20} />
                      </div>
                    </div>

                    <h3 className="mt-12 text-2xl font-semibold tracking-[-0.03em]">
                      {service.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                      {service.description}
                    </p>

                    <Link
                      to="/get-quote"
                      className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#0B1220] transition-colors hover:text-blue-600"
                    >
                      Discuss this service

                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          04 — BUSINESS WEBSITE
      ====================================================== */}

      <section className="bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              <span>01</span>
              Business websites
            </div>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              Your business deserves more than a digital brochure.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-500">
              We create professional business websites that explain what
              you do, establish credibility and make it easy for customers
              to contact you.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {websiteFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-sm text-slate-600"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Check size={12} />
                  </span>

                  {feature}
                </div>
              ))}
            </div>

            <div className="mt-9">
              <Link
                to="/get-quote"
                className="group inline-flex items-center gap-2 rounded-full bg-[#0B1220] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-600"
              >
                Start a business website

                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          <div className="rounded-[30px] bg-[#060B14] p-3 shadow-2xl shadow-slate-300/30 sm:p-4">
            <div className="overflow-hidden rounded-[22px] bg-white">
              <div className="flex h-12 items-center gap-2 border-b border-slate-100 px-5">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />

                <div className="ml-4 h-6 flex-1 rounded-md bg-slate-50" />
              </div>

              <div className="p-7 sm:p-10">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-black">
                    STUDIO.
                  </div>

                  <div className="hidden gap-4 text-[9px] text-slate-400 sm:flex">
                    <span>Work</span>
                    <span>Services</span>
                    <span>About</span>
                  </div>

                  <div className="h-6 w-16 rounded-full bg-[#0B1220]" />
                </div>

                <div className="mt-14 max-w-md">
                  <div className="h-2 w-20 rounded-full bg-blue-100" />

                  <div className="mt-5 space-y-2">
                    <div className="h-8 w-full rounded-md bg-[#0B1220]" />
                    <div className="h-8 w-[75%] rounded-md bg-[#0B1220]" />
                  </div>

                  <div className="mt-5 space-y-2">
                    <div className="h-2 w-full rounded-full bg-slate-100" />
                    <div className="h-2 w-[80%] rounded-full bg-slate-100" />
                  </div>

                  <div className="mt-7 h-9 w-28 rounded-full bg-blue-600" />
                </div>

                <div className="mt-14 grid grid-cols-3 gap-3">
                  <div className="h-20 rounded-2xl bg-slate-50" />
                  <div className="h-20 rounded-2xl bg-blue-50" />
                  <div className="h-20 rounded-2xl bg-slate-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          05 — ECOMMERCE
      ====================================================== */}

      <section className="bg-[#0B1220] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                02 / E-commerce
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                Turn your products into an experience.
              </h2>

              <p className="mt-6 text-base leading-7 text-slate-400">
                Your store should do more than display products. It should
                make discovery simple, build confidence and make checkout
                feel effortless.
              </p>

              <div className="mt-9 space-y-3">
                {ecommerceFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <Check size={15} className="text-cyan-400" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-blue-600/10 blur-3xl" />

              <div className="relative rounded-[30px] border border-white/10 bg-white/[0.04] p-3">
                <div className="rounded-[22px] bg-[#F7F8FA] p-5 text-[#0B1220] sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black tracking-tight">
                      NORDEN
                    </span>

                    <div className="flex gap-3">
                      <div className="h-7 w-7 rounded-full bg-slate-200" />
                      <div className="h-7 w-7 rounded-full bg-slate-200" />
                    </div>
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl bg-white p-3 shadow-sm"
                      >
                        <div className="aspect-square rounded-xl bg-gradient-to-br from-slate-100 to-blue-50" />

                        <div className="mt-3 h-2 w-16 rounded-full bg-slate-200" />
                        <div className="mt-2 h-2 w-10 rounded-full bg-[#0B1220]" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          06 — BOOKING
      ====================================================== */}

      <section className="bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="rounded-[30px] border border-slate-200 bg-[#F7F8FA] p-5 sm:p-8">
                <div className="rounded-[22px] bg-white p-5 shadow-sm sm:p-7">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-slate-400">
                        APPOINTMENT
                      </p>

                      <h3 className="mt-1 text-xl font-semibold">
                        Choose your time
                      </h3>
                    </div>

                    <CalendarCheck2
                      className="text-blue-600"
                      size={24}
                    />
                  </div>

                  <div className="mt-7 grid grid-cols-3 gap-2">
                    {[
                      "10:00",
                      "11:30",
                      "12:00",
                      "14:00",
                      "15:30",
                      "17:00",
                    ].map((time, index) => (
                      <div
                        key={time}
                        className={`rounded-xl border px-3 py-3 text-center text-xs font-medium ${
                          index === 3
                            ? "border-blue-600 bg-blue-600 text-white"
                            : "border-slate-200 text-slate-500"
                        }`}
                      >
                        {time}
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="mt-6 flex w-full items-center justify-center rounded-xl bg-[#0B1220] py-3 text-sm font-semibold text-white"
                  >
                    Confirm appointment
                  </button>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                03 / Booking
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                Make booking as easy as sending a message.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-500">
                Perfect for doctors, consultants, salons, fitness
                businesses, service providers and appointment-based
                businesses.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Appointment flows",
                  "Service selection",
                  "Time slots",
                  "Lead forms",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/40"
                  >
                    <CalendarCheck2
                      size={18}
                      className="text-blue-600"
                    />

                    <p className="mt-3 text-sm font-semibold">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          07 — DESIGN
      ====================================================== */}

      <section className="bg-[#F7F8FA] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                04 / UI & UX
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                Design that makes your brand feel established.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] bg-[#0B1220] p-8 text-white transition duration-300 hover:-translate-y-1">
                <Palette
                  size={22}
                  className="text-cyan-400"
                />

                <h3 className="mt-12 text-2xl font-semibold">
                  Visual Identity
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Typography, spacing, colors and layouts that create
                  a consistent digital presence.
                </p>
              </div>

              <div className="rounded-[28px] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50">
                <PenTool
                  size={22}
                  className="text-blue-600"
                />

                <h3 className="mt-12 text-2xl font-semibold">
                  User Experience
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Clear navigation and intentional page structure so
                  visitors know exactly what to do next.
                </p>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-white p-8 sm:col-span-2">
                <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
                  <div>
                    <Monitor
                      size={22}
                      className="text-blue-600"
                    />

                    <h3 className="mt-8 text-2xl font-semibold">
                      Responsive by Design
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                      From a 320px phone screen to a 1920px desktop,
                      your website adapts without losing its visual quality.
                    </p>
                  </div>

                  <div className="flex items-end gap-2">
                    <div className="h-20 w-12 rounded-t-xl border-2 border-slate-200 bg-slate-50" />
                    <div className="h-28 w-20 rounded-t-xl border-2 border-slate-200 bg-slate-50" />
                    <div className="h-36 w-28 rounded-t-xl border-2 border-slate-200 bg-slate-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          08 — REDESIGN
      ====================================================== */}

      <section className="bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              05 / Redesign
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              If your website looks outdated,
              your customers notice.
            </h2>
          </div>

          <div className="mt-16 grid items-center gap-5 lg:grid-cols-[1fr_auto_1fr]">
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Before
              </p>

              <div className="mt-7 space-y-4">
                <div className="h-5 w-32 rounded bg-slate-200" />

                <div className="h-3 w-full rounded bg-slate-200" />

                <div className="h-3 w-[75%] rounded bg-slate-200" />

                <div className="grid grid-cols-2 gap-3">
                  <div className="h-32 rounded-xl bg-slate-200" />
                  <div className="h-32 rounded-xl bg-slate-200" />
                </div>
              </div>
            </div>

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#0B1220] text-white shadow-lg">
              <ArrowRight size={18} />
            </div>

            <div className="rounded-[28px] bg-[#0B1220] p-7 text-white shadow-2xl shadow-slate-300/20">
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                After
              </p>

              <div className="mt-7">
                <div className="flex items-center justify-between">
                  <div className="h-5 w-32 rounded bg-white" />
                  <div className="h-6 w-14 rounded-full bg-blue-600" />
                </div>

                <div className="mt-7 h-8 w-[80%] rounded bg-white" />

                <div className="mt-3 h-3 w-[55%] rounded bg-white/20" />

                <div className="mt-7 grid grid-cols-3 gap-2">
                  <div className="h-24 rounded-xl bg-white/10" />
                  <div className="h-24 rounded-xl bg-blue-600/40" />
                  <div className="h-24 rounded-xl bg-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          09 — CUSTOM APPLICATIONS
      ====================================================== */}

      <section className="bg-[#060B14] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                06 / Custom applications
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                When a website isn't enough.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-400">
                We can build custom web applications around specific
                business workflows, customer journeys and operational
                requirements.
              </p>

              <div className="mt-9 flex flex-wrap gap-2">
                {[
                  "Dashboards",
                  "Customer portals",
                  "Internal tools",
                  "CRUD systems",
                  "Lead systems",
                  "Custom workflows",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-slate-400 transition hover:border-cyan-400/20 hover:bg-cyan-400/[0.05] hover:text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.035] p-5">
              <div className="rounded-[22px] bg-[#101722] p-5 sm:p-7">
                <div className="flex items-center gap-3 border-b border-white/10 pb-5">
                  <div className="h-9 w-9 rounded-xl bg-blue-600" />

                  <div>
                    <div className="h-2 w-20 rounded bg-white/20" />
                    <div className="mt-2 h-1.5 w-12 rounded bg-white/10" />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="h-24 rounded-2xl bg-white/[0.04]" />
                  <div className="h-24 rounded-2xl bg-blue-600/10" />
                  <div className="h-24 rounded-2xl bg-cyan-500/10" />
                </div>

                <div className="mt-4 rounded-2xl bg-white/[0.04] p-4">
                  <div className="h-2 w-24 rounded bg-white/20" />

                  <div className="mt-5 space-y-3">
                    <div className="h-2 w-full rounded bg-white/10" />
                    <div className="h-2 w-[85%] rounded bg-white/10" />
                    <div className="h-2 w-[70%] rounded bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          10 — SEO + PERFORMANCE
      ====================================================== */}

      <section className="bg-[#F7F8FA] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              07 / Performance
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              Beautiful is only half the job.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-500">
              A premium website should also feel fast, work on mobile,
              have a clean technical foundation and be ready for search.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ZapIcon,
                title: "Fast",
                text: "Lightweight interfaces without unnecessary overhead.",
              },
              {
                icon: Smartphone,
                title: "Responsive",
                text: "Designed for phones, tablets and desktops.",
              },
              {
                icon: Search,
                title: "SEO Ready",
                text: "Clean structure and foundational SEO practices.",
              },
              {
                icon: BarChart3,
                title: "Measurable",
                text: "Prepared for analytics and future optimization.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[26px] border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/40"
                >
                  <Icon
                    size={21}
                    className="text-blue-600 transition duration-300 group-hover:scale-110"
                  />

                  <h3 className="mt-10 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          11 — INTEGRATIONS
      ====================================================== */}

      <section className="bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                08 / Integrations
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                Connect your website to the tools your business already uses.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["WhatsApp", LifeBuoy],
                ["Payment Gateways", CreditCard],
                ["Google Maps", Globe2],
                ["Contact Forms", PenTool],
                ["Analytics", LineChart],
                ["Business Tools", Settings2],
              ].map(([name, Icon]) => (
                <div
                  key={name}
                  className="group flex items-center justify-between rounded-2xl border border-slate-200 p-5 transition duration-300 hover:border-blue-200 hover:bg-blue-50/40"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={18} />
                    </div>

                    <span className="text-sm font-semibold">
                      {name}
                    </span>
                  </div>

                  <ArrowUpRight
                    size={16}
                    className="text-slate-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          12 — TECHNOLOGY
      ====================================================== */}

      <section className="bg-[#F7F8FA] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              09 / Technology
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              Modern tools.
              <br />
              Clean implementation.
            </h2>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 overflow-hidden rounded-[28px] border border-slate-200 bg-white sm:grid-cols-4">
            {technologies.map((technology, index) => (
              <div
                key={technology}
                className="group flex min-h-32 items-center justify-center border-b border-r border-slate-200 p-5 text-center text-sm font-semibold text-slate-700 transition duration-300 hover:bg-[#0B1220] hover:text-white"
              >
                <div>
                  <span className="mb-2 block font-mono text-[9px] text-slate-400">
                    0{index + 1}
                  </span>

                  {technology}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          13 — MAINTENANCE
      ====================================================== */}

      <section className="bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="rounded-[36px] bg-[#0B1220] p-8 text-white sm:p-12 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <LifeBuoy
                    size={21}
                    className="text-cyan-400"
                  />
                </div>

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  10 / Maintenance & support
                </p>

                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                  Launch day isn't the end.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
                  Websites evolve. Content changes, products get added,
                  businesses grow and new requirements appear. We can
                  continue supporting your digital presence after launch.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Content updates",
                  "Bug fixes",
                  "Performance checks",
                  "Feature updates",
                  "Security maintenance",
                  "Technical support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-4 text-sm text-slate-300 transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.06]"
                  >
                    <Check
                      size={15}
                      className="text-cyan-400"
                    />

                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          14 — PRICING
      ====================================================== */}

      <section className="bg-[#F7F8FA] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              Starting points
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              Choose the kind of digital experience you need.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-500">
              Final pricing depends on the scope, functionality,
              content and integrations required for your project.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              {
                name: "Business",
                price: "₹5,000+",
                text: "For businesses that need a professional digital presence.",
              },
              {
                name: "E-commerce",
                price: "Custom",
                text: "For brands selling products online with a complete storefront.",
              },
              {
                name: "Custom",
                price: "Let's talk",
                text: "For applications, advanced workflows and unique requirements.",
              },
            ].map((plan, index) => (
              <div
                key={plan.name}
                className={`group rounded-[28px] border p-7 transition duration-300 hover:-translate-y-1 ${
                  index === 1
                    ? "border-blue-200 bg-[#0B1220] text-white shadow-xl shadow-blue-900/10 hover:shadow-2xl"
                    : "border-slate-200 bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/50"
                }`}
              >
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.15em] ${
                    index === 1
                      ? "text-cyan-400"
                      : "text-blue-600"
                  }`}
                >
                  {plan.name}
                </p>

                <p className="mt-7 text-3xl font-semibold">
                  {plan.price}
                </p>

                <p
                  className={`mt-4 text-sm leading-6 ${
                    index === 1
                      ? "text-slate-400"
                      : "text-slate-500"
                  }`}
                >
                  {plan.text}
                </p>

                <Link
                  to="/get-quote"
                  className={`mt-8 inline-flex items-center gap-2 text-sm font-semibold transition ${
                    index === 1
                      ? "text-white hover:text-cyan-300"
                      : "text-[#0B1220] hover:text-blue-600"
                  }`}
                >
                  Discuss your project

                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          15 — FINAL CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#060B14] px-5 py-28 text-white sm:px-8 lg:px-10 lg:py-36">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Start something meaningful
          </p>

          <h2 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            Your next website
            <br />
            should feel different.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Tell us what you're building, what you're trying to achieve
            and where you want to go next.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/get-quote"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0B1220] transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Start Your Project

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0B1220] text-white transition group-hover:rotate-45">
                <ArrowUpRight size={15} />
              </span>
            </Link>

            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.06]"
            >
              Explore Our Work

              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ZapIcon({ size = 24, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M13 2L4 14H11L10 22L20 9H13L13 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Services;