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
<section className="relative overflow-hidden bg-[#070c14] text-white selection:bg-cyan-500/30 selection:text-cyan-200">
  {/* Ultra Luxury Synced Ambient Glows */}
  <div className="pointer-events-none absolute inset-0">
    {/* Left Halo Blue Sync */}
    <div className="absolute -left-36 top-10 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-600/20 via-cyan-500/10 to-transparent blur-[140px]" />

    {/* Right Halo Cyan Sync */}
    <div className="absolute right-[-100px] top-1/4 h-[650px] w-[650px] rounded-full bg-gradient-to-bl from-cyan-400/15 via-blue-700/10 to-transparent blur-[150px]" />

    {/* Grid Overlay for Tech Depth */}
    <div
      className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    />
  </div>

  {/* Main Container with py-10 */}
  <div className="relative mx-auto max-w-[1400px] px-5 py-10 sm:px-8 lg:px-10">
    <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
      
      {/* Left Content Column */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={reveal}
        className="z-10"
      >
        {/* Luxury Badge */}
        <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-transparent px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)]">
          <Sparkles size={14} className="animate-pulse text-cyan-400" />
          <span>Our Core Services</span>
        </div>

        {/* Dynamic Heading */}
        <h1 className="max-w-4xl text-[clamp(2.8rem,5.5vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.04em] text-slate-100">
          Digital{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(56,189,248,0.3)]">
            solutions
          </span>
          <br />
          built to matter<span className="text-cyan-400">.</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300/80 sm:text-lg">
          From strategy and interface design to development, performance, and launch,{" "}
          <span className="font-medium text-slate-100">WebQenzo</span> builds high-impact digital experiences around the way your business actually works.
        </p>

        {/* Visual Highlights Grid / Image Cards Banner */}
        <div className="mt-8 grid grid-cols-2 gap-4 max-w-lg">
          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Sparkles size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Quality</p>
                <p className="text-sm font-semibold text-white">World-Class UI</p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/30">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <ArrowUpRight size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Speed</p>
                <p className="text-sm font-semibold text-white">High Performing</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Column: High-End Visual Image Showcase + Capability Glass Overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <div className="relative rounded-[32px] border border-white/15 bg-slate-900/40 p-3 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          
          {/* Main Visual Image Showcase */}
          <div className="relative h-[220px] sm:h-[260px] w-full overflow-hidden rounded-[24px]">
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
              alt="Digital Solution Visual"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070c14] via-[#070c14]/40 to-transparent" />
            
            {/* Floating Metric Badge */}
            <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-slate-950/60 px-3.5 py-1.5 backdrop-blur-md">
              <span className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-200">
                <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                Premium Execution
              </span>
            </div>
          </div>

          {/* Capabilities Section Integrated inside Card */}
          <div className="px-3 pb-3 pt-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Capabilities
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-400">
                <ArrowDownRight size={16} />
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {[
                "Strategy",
                "UI/UX Design",
                "Web Dev",
                "E-commerce",
                "Performance",
                "Support",
              ].map((item, index) => (
                <div
                  key={item}
                  className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/5"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-semibold text-cyan-400/70">
                      0{index + 1}
                    </span>
                    <span className="text-xs font-medium text-slate-300 group-hover:text-white">
                      {item}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={13}
                    className="text-slate-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Scroll Indicator */}
    <div className="mt-8 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
      <span className="h-px w-10 bg-gradient-to-r from-cyan-500/50 to-transparent" />
      <span>Scroll to explore services</span>
    </div>
  </div>
</section>

      {/* =========================================================
    WEBSITE SHOWCASE — INFINITE MARQUEE
========================================================= */}

{/* =========================================================
    WEBSITE SHOWCASE — INFINITE RIGHT TO LEFT MARQUEE
========================================================= */}

<section
  className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
  aria-label="Website showcase"
>
  {/* =======================================================
      SECTION HEADER
  ======================================================== */}

  <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
        On the screen
      </p>

      <h2 className="mt-3 text-3xl font-bold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-4xl lg:text-5xl">
        Where your customers
        <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
          actually are.
        </span>
      </h2>

      <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
        Your website should look exceptional on every screen.
        We design digital experiences that feel smooth, modern,
        and built around the way your customers actually browse.
      </p>
    </div>
  </div>

  {/* =======================================================
      MARQUEE AREA
  ======================================================== */}

  <div className="relative mt-12 overflow-hidden sm:mt-14 lg:mt-16">
    {/* LEFT FADE */}

    <div
      className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-white via-white/90 to-transparent sm:w-24 lg:w-40"
      aria-hidden="true"
    />

    {/* RIGHT FADE */}

    <div
      className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-white via-white/90 to-transparent sm:w-24 lg:w-40"
      aria-hidden="true"
    />

    {/* =====================================================
        MARQUEE TRACK
    ====================================================== */}

    <div className="website-showcase-marquee flex w-max items-start gap-5 pl-5 sm:gap-6 sm:pl-8 lg:gap-7 lg:pl-10">

      {/* ===================================================
          FIRST SET — 20 IMAGES
      ==================================================== */}

      {[
        "01.webp",
        "02.webp",
        "03.webp",
        "04.webp",
        "05.webp",
        "06.webp",
        "07.webp",
        "08.webp",
        "09.webp",
        "10.webp",
        "11.webp",
        "12.webp",
        "13.webp",
        "14.webp",
        "15.webp",
        "16.webp",
        "17.webp",
        "18.webp",
        "19.webp",
        "20.webp",
      ].map((image, index) => (
        <div
          key={`showcase-first-${image}`}
          className="group relative w-[205px] shrink-0 sm:w-[240px] md:w-[265px] lg:w-[285px]"
        >
          <div className="relative aspect-[9/16] overflow-hidden rounded-[24px] border border-slate-200 bg-slate-100 shadow-[0_12px_35px_rgba(15,23,42,0.10)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_25px_55px_rgba(15,23,42,0.16)]">

            <img
              src={`/showcase/${image}`}
              alt={`WebQenzo website showcase ${index + 1}`}
              loading={index < 6 ? "eager" : "lazy"}
              decoding="async"
              draggable="false"
              className="h-full w-full select-none object-cover object-top transition-transform duration-700 group-hover:scale-[1.015]"
            />

            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.08] via-transparent to-white/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden="true"
            />
          </div>
        </div>
      ))}

      {/* ===================================================
          SECOND SET — SAME 20 IMAGES
          Required for seamless infinite loop
      ==================================================== */}

      {[
        "01.webp",
        "02.webp",
        "03.webp",
        "04.webp",
        "05.webp",
        "06.webp",
        "07.webp",
        "08.webp",
        "09.webp",
        "10.webp",
        "11.webp",
        "12.webp",
        "13.webp",
        "14.webp",
        "15.webp",
        "16.webp",
        "17.webp",
        "18.webp",
        "19.webp",
        "20.webp",
      ].map((image, index) => (
        <div
          key={`showcase-second-${image}`}
          className="group relative w-[205px] shrink-0 sm:w-[240px] md:w-[265px] lg:w-[285px]"
        >
          <div className="relative aspect-[9/16] overflow-hidden rounded-[24px] border border-slate-200 bg-slate-100 shadow-[0_12px_35px_rgba(15,23,42,0.10)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_25px_55px_rgba(15,23,42,0.16)]">

            <img
              src={`/showcase/${image}`}
              alt={`WebQenzo website showcase ${index + 1}`}
              loading="lazy"
              decoding="async"
              draggable="false"
              className="h-full w-full select-none object-cover object-top transition-transform duration-700 group-hover:scale-[1.015]"
            />

            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.08] via-transparent to-white/[0.04] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden="true"
            />
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* =======================================================
      BOTTOM LABEL
  ======================================================== */}

  <div className="mx-auto mt-9 flex max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-10">
    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
      WebQenzo Showcase
    </span>

    <span className="text-[10px] font-semibold text-slate-400">
      20+ Digital Experiences
    </span>
  </div>

  {/* =======================================================
      MARQUEE ANIMATION
  ======================================================== */}

  <style>{`
    .website-showcase-marquee {
      animation: webqenzoShowcaseMove 70s linear infinite;
      will-change: transform;
    }

    .website-showcase-marquee:hover {
      animation-play-state: paused;
    }

    @keyframes webqenzoShowcaseMove {
      from {
        transform: translate3d(0, 0, 0);
      }

      to {
        transform: translate3d(-50%, 0, 0);
      }
    }

    @media (max-width: 640px) {
      .website-showcase-marquee {
        animation-duration: 50s;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .website-showcase-marquee {
        animation-play-state: paused;
      }
    }
  `}</style>
</section>
      {/* =====================================================
          02 — INDUSTRIES
      ====================================================== */}


      <section className="relative overflow-hidden bg-gradient-to-b from-blue-700 via-blue-600 to-indigo-700 py-10 text-white selection:bg-cyan-300 selection:text-slate-900">
  {/* Soft Light Blue Synced Ambient Lighting */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -left-32 top-10 h-[550px] w-[550px] rounded-full bg-cyan-400/20 blur-[120px]" />
    <div className="absolute right-[-100px] top-1/3 h-[550px] w-[550px] rounded-full bg-blue-400/15 blur-[130px]" />

    {/* Subtle Pattern Grid */}
    <div
      className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    />
  </div>

  <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
    {/* Section Header */}
    <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
          Built for business
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
          Different industries<span className="text-cyan-300">.</span>
          <br />
          One standard of quality.
        </h2>
      </div>

      <p className="max-w-md text-sm leading-6 text-blue-100/90">
        Every business has different customers, goals and challenges.
        The website should reflect that.
      </p>
    </div>

    {/* Cards Grid with Flat Design & Dark Blue Borders */}
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {[
        ...industries,
        {
          name: "Sales CRM",
          text: "Streamline sales pipelines, customer interactions, and lead management in real-time.",
          icon: <Sparkles size={20} />,
        },
        {
          name: "Admin Panel",
          text: "Powerful, intuitive control centers to manage operations, users, and platform data seamlessly.",
          icon: <ArrowUpRight size={20} />,
        },
      ].map((industry) => (
        <div
          key={industry.name}
          className="group relative flex h-full flex-col justify-between rounded-2xl border-2 border-blue-900/80 bg-white p-6 transition-colors duration-300 hover:border-blue-950"
        >
          {/* Top Row: Icon & Arrow */}
          <div className="flex items-start justify-between">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
              {industry.icon}
            </span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors duration-300 group-hover:bg-blue-900 group-hover:text-white">
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </div>

          {/* Bottom Content Area */}
          <div className="mt-6">
            <h3 className="text-xl font-bold tracking-tight text-slate-900">
              {industry.name}
            </h3>

            <p className="mt-2.5 text-xs leading-relaxed text-slate-600">
              {industry.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* =====================================================
          03 — CORE SERVICES
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-12 text-slate-900 selection:bg-blue-600 selection:text-white">
  {/* Subtle Ambient Background Accents */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-blue-50/60 blur-[120px]" />
    <div className="absolute right-[-100px] bottom-10 h-[500px] w-[500px] rounded-full bg-cyan-50/50 blur-[130px]" />
  </div>

  <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
    {/* Section Header */}
    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 backdrop-blur-sm">
          <Sparkles size={14} className="text-blue-600" />
          <span>Core Capabilities</span>
        </div>

        <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-slate-900 sm:text-4xl lg:text-5xl">
          Everything you need to build a{" "}
          <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            serious digital presence.
          </span>
        </h2>
      </div>

      <p className="max-w-md text-sm leading-relaxed text-slate-600 lg:text-base">
        High-impact engineering, intuitive interfaces, and scalable systems custom-built to elevate your business operations and drive real growth.
      </p>
    </div>

    {/* Luxury Services Grid */}
    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[
        ...coreServices,
        {
          number: "05",
          title: "Sales CRM & Admin Panel",
          description:
            "Custom enterprise-grade control centers, automated sales pipelines, and real-time operational analytics built for complete control.",
          icon: Sparkles,
        },
        {
          number: "06",
          title: "Meta Ads & Performance Marketing",
          description:
            "Data-driven Facebook & Instagram ad campaigns engineered to maximize ROI, target precise audiences, and scale customer acquisition.",
          icon: ArrowUpRight,
        },
        {
          number: "07",
          title: "Business Mail & System Integrations",
          description:
            "Professional GSuite/Microsoft 365 domain setup, automated workflow integrations, and secure email infrastructure for seamless operations.",
          icon: Sparkles,
        },
      ].map((service) => {
        const Icon = service.icon;

        return (
          <motion.div
            key={service.number || service.title}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="group relative flex flex-col justify-between rounded-3xl border-2 border-blue-900/80 bg-[#f0f5ff] p-7 transition-all duration-300 hover:border-blue-950 hover:bg-[#e6efff] sm:p-8"
          >
            <div>
              {/* Card Top Meta Bar */}
              <div className="flex items-center justify-between border-b border-blue-200/60 pb-5">
                <span className="font-mono text-xs font-bold tracking-wider text-blue-800/80">
                  [{service.number}]
                </span>

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-200 bg-white text-blue-700 shadow-sm transition-all duration-300 group-hover:bg-blue-900 group-hover:text-white">
                  <Icon size={20} />
                </div>
              </div>

              {/* Service Title & Description */}
              <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                {service.title}
              </h3>

              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
            </div>

            {/* Bottom Link CTA */}
            <div className="mt-8 pt-4">
              <Link
                to="/get-quote"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-900 transition-colors group-hover:text-blue-700"
              >
                <span>Discuss this service</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1.5"
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

      <section className="relative overflow-hidden bg-[#fafcff] py-12 text-slate-900 selection:bg-blue-600 selection:text-white">
  {/* International Ambient Blue Texture & Subtle Grid Layer */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[130px]" />
    <div className="absolute right-[-100px] top-10 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[140px]" />

    {/* Modern Micro Grid Overlay */}
    <div
      className="absolute inset-0 opacity-[0.035] mix-blend-multiply"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15,23,42,1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,1) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    />
  </div>

  <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      
      {/* Left Column: High-End Visual Showcase Card */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <div className="group relative rounded-[32px] border border-blue-900/15 bg-white p-3 shadow-[0_20px_50px_rgba(15,23,42,0.08)] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(37,99,235,0.15)] sm:p-4">
          
          {/* Main Visual Image Showcase */}
          <div className="relative h-[360px] sm:h-[420px] w-full overflow-hidden rounded-[24px] bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
              alt="High Performance Business Website Interface"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

            {/* Top Floating Badge */}
            <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-slate-950/60 px-4 py-1.5 backdrop-blur-md">
              <span className="flex items-center gap-2 text-xs font-semibold tracking-wider text-white">
                <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                Interactive UI Prototype
              </span>
            </div>

            {/* Bottom Floating Metric Glass Card */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                  Performance Guaranteed
                </p>
                <p className="mt-1 text-sm font-bold text-white sm:text-base">
                  Fast, Secure & Conversion Focused
                </p>
              </div>

              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-md">
                <Sparkles size={18} />
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Column: High Impact Content Pitch */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="z-10"
      >
        {/* Luxury Badge Tag */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 backdrop-blur-sm">
          <span className="font-mono font-bold text-blue-900">01</span>
          <span className="h-3 w-px bg-blue-300" />
          <span>Business Websites</span>
        </div>

        {/* Headline */}
        <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.04em] text-slate-900 sm:text-4xl lg:text-5xl lg:leading-[1.1]">
          Your business deserves more than a{" "}
          <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
            digital brochure.
          </span>
        </h2>

        {/* Lead Paragraph */}
        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
          We engineer bespoke business websites that clearly articulate your value proposition, build unquestionable credibility, and convert visitors into high-value leads.
        </p>

        {/* Features Checklist Grid */}
        <div className="mt-8 grid gap-3.5 sm:grid-cols-2">
          {websiteFeatures.map((feature) => (
            <div
              key={feature}
              className="group flex items-center gap-3 rounded-xl border border-blue-100/80 bg-white p-3 shadow-sm transition-all duration-300 hover:border-blue-300 hover:bg-blue-50/50"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white shadow-md shadow-blue-600/20">
                <Check size={14} />
              </span>

              <span className="text-xs font-semibold text-slate-800 sm:text-sm">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Primary CTA */}
        <div className="mt-10">
          <Link
            to="/get-quote"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-blue-900 px-7 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-950/20 transition-all duration-300 hover:bg-blue-800 hover:shadow-xl hover:shadow-blue-900/30"
          >
            <span>Start a business website</span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
              <ArrowUpRight size={16} />
            </span>
          </Link>
        </div>
      </motion.div>

    </div>
  </div>
</section>
      {/* =====================================================
          05 — ECOMMERCE
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-b from-blue-700 via-blue-600 to-indigo-700 py-12 text-white selection:bg-cyan-300 selection:text-slate-900">
  {/* Ambient Halo Lighting & Subtle Texture Grid */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -left-32 top-10 h-[550px] w-[550px] rounded-full bg-cyan-400/25 blur-[130px]" />
    <div className="absolute right-[-100px] top-1/3 h-[550px] w-[550px] rounded-full bg-blue-400/20 blur-[140px]" />

    {/* Micro Pattern Grid Overlay */}
    <div
      className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    />
  </div>

  <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
    <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
      
      {/* Left Column: Copy & Feature List */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="z-10"
      >
        {/* Luxury Section Tag */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200 backdrop-blur-md">
          <span className="font-mono font-bold text-cyan-300">02</span>
          <span className="h-3 w-px bg-cyan-300/40" />
          <span>E-commerce Solutions</span>
        </div>

        {/* Heading */}
        <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl lg:leading-[1.1]">
          Turn your products into a{" "}
          <span className="bg-gradient-to-r from-cyan-200 via-white to-cyan-300 bg-clip-text text-transparent">
            seamless experience.
          </span>
        </h2>

        {/* Lead Text */}
        <p className="mt-5 max-w-xl text-base leading-relaxed text-blue-100/90 sm:text-lg">
          Your online store should do more than just display inventory. We craft digital storefronts that simplify product discovery, establish trust, and turn visitors into loyal repeat buyers.
        </p>

        {/* Feature Highlights Grid */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {ecommerceFeatures.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md transition-all duration-300 hover:border-cyan-300/40 hover:bg-white/10"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/30">
                <Check size={14} className="stroke-[3]" />
              </span>
              <span className="text-xs font-semibold text-slate-100 sm:text-sm">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-9">
          <Link
            to="/get-quote"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-slate-950 hover:shadow-xl hover:shadow-cyan-400/20"
          >
            <span>Build an E-commerce Store</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white transition-all duration-300 group-hover:bg-slate-950 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-0.5">
              <ArrowUpRight size={16} />
            </span>
          </Link>
        </div>
      </motion.div>

      {/* Right Column: High-End E-commerce Visual Showcase */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <div className="group relative rounded-[32px] border border-white/20 bg-slate-950/40 p-3.5 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.3)] transition-all duration-500 hover:border-cyan-300/40 sm:p-4">
          
          {/* Main E-commerce Showcase Image */}
          <div className="relative h-[380px] sm:h-[440px] w-full overflow-hidden rounded-[24px]">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop"
              alt="Luxury E-commerce Store Experience"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

            {/* Top Left Store Status Badge */}
            <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-slate-950/70 px-4 py-1.5 backdrop-blur-md">
              <span className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-100">
                <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                Live Storefront Engine
              </span>
            </div>

            {/* Bottom Floating Conversion Metrics Glass Box */}
            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
              <div className="border-r border-white/10 pr-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">
                  Checkout Speed
                </p>
                <p className="mt-1 text-base font-extrabold text-white sm:text-lg">
                  Sub-1s Instant
                </p>
              </div>

              <div className="pl-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">
                  Conversion Rate
                </p>
                <p className="mt-1 text-base font-extrabold text-white sm:text-lg">
                  2.8x Industry Avg
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
          06 — BOOKING
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-12 text-slate-900 selection:bg-blue-600 selection:text-white">
  {/* Subtle Ambient Light Accents */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-50/70 blur-[120px]" />
    <div className="absolute right-[-100px] bottom-10 h-[500px] w-[500px] rounded-full bg-cyan-50/60 blur-[130px]" />
  </div>

  <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      
      {/* Left Column: Interactive Booking Widget Preview */}
      <div className="order-2 lg:order-1 z-10">
        <div className="relative rounded-[32px] border-2 border-blue-900/80 bg-[#f0f5ff] p-3 shadow-xl">
          <div className="rounded-[24px] border border-blue-200 bg-white p-6 sm:p-8 shadow-sm">
            
            {/* Widget Top Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 border border-blue-100">
                  <CalendarCheck2 size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-700">
                    Live Demo
                  </p>
                  <h3 className="text-base font-bold text-slate-900">
                    Schedule Discovery Call
                  </h3>
                </div>
              </div>

              <span className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Available Today
              </span>
            </div>

            {/* Date Picker Bar */}
            <div className="mt-6 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/60 p-2.5">
              <span className="text-xs font-bold text-slate-700">
                Oct 2026
              </span>
              <div className="flex items-center gap-1">
                {["19 Mon", "20 Tue", "21 Wed", "22 Thu"].map((day, idx) => (
                  <button
                    key={day}
                    type="button"
                    className={`rounded-lg px-2.5 py-1 text-[11px] font-medium transition-all ${
                      idx === 1
                        ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-600/20"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slot Selection Grid */}
            <div className="mt-6">
              <p className="text-xs font-semibold text-slate-500">Select Time Slot</p>
              <div className="mt-3 grid grid-cols-3 gap-2.5">
                {[
                  "10:00 AM",
                  "11:30 AM",
                  "01:00 PM",
                  "02:30 PM",
                  "04:00 PM",
                  "05:30 PM",
                ].map((time, index) => (
                  <button
                    key={time}
                    type="button"
                    className={`rounded-xl border py-2.5 text-center text-xs font-semibold transition-all duration-300 ${
                      index === 3
                        ? "border-blue-700 bg-blue-700 text-white font-bold shadow-md shadow-blue-900/20"
                        : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50/50"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Action Button */}
            <button
              type="button"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-900 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-blue-950 hover:scale-[1.01]"
            >
              <span>Confirm Instant Booking</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Right Column: High-Impact Heading & Feature Grid */}
      <div className="order-1 lg:order-2 z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 backdrop-blur-sm">
          <Sparkles size={14} className="text-blue-600" />
          
        </div>

        <h2 className="mt-5 text-[clamp(2.4rem,4.5vw,4.2rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-slate-900">
          Make booking as easy as{" "}
          <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            sending a message.
          </span>
        </h2>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600">
          Tailored booking workflows engineered for doctors, consultants, fitness studios, salons, and modern service providers looking to automate client acquisition.
        </p>

        {/* Feature Cards Grid */}
        <div className="mt-8 grid gap-3.5 sm:grid-cols-2">
          {[
            "Custom Appointment Flows",
            "Multi-Service Selection",
            "Real-Time Time Slots",
            "Automated Lead Capture",
          ].map((item) => (
            <div
              key={item}
              className="group flex items-center gap-3.5 rounded-2xl border-2 border-blue-900/80 bg-[#f0f5ff] p-4 transition-all duration-300 hover:bg-[#e6efff] hover:border-blue-950"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-200 bg-white text-blue-700 shadow-sm transition-transform duration-300 group-hover:scale-105">
                <CalendarCheck2 size={18} />
              </div>

              <p className="text-sm font-bold text-slate-900">
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

      <section className="relative overflow-hidden bg-gradient-to-b from-blue-700 via-blue-600 to-indigo-700 py-12 text-white selection:bg-cyan-300 selection:text-slate-900">
  {/* Soft Light Ambient Synced Glows */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -left-36 top-10 h-[550px] w-[550px] rounded-full bg-cyan-400/25 blur-[120px]" />
    <div className="absolute right-[-100px] bottom-10 h-[550px] w-[550px] rounded-full bg-blue-400/20 blur-[130px]" />

    {/* Micro Mesh Pattern Overlay */}
    <div
      className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    />
  </div>

  <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
    <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
      
      {/* Left Column: Heading & Executive Intro */}
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200 backdrop-blur-md">
          <Sparkles size={14} className="text-cyan-300" />
          
        </div>

        <h2 className="mt-5 text-[clamp(2.5rem,4.5vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-white">
          Design that makes your brand feel{" "}
          <span className="text-cyan-300">
            instantly established.
          </span>
        </h2>

        <p className="mt-6 max-w-lg text-sm sm:text-base leading-relaxed text-blue-100/90">
          We combine behavioral psychology, precision typography, and seamless interaction design to build digital experiences that command authority and drive conversions.
        </p>
      </div>

      {/* Right Column: High-End Feature Cards */}
      <div className="grid gap-6 sm:grid-cols-2">
        
        {/* Card 1: Brand Identity */}
        <div className="group relative flex flex-col justify-between rounded-3xl border-2 border-blue-900/80 bg-[#f0f5ff] p-7 transition-all duration-300 hover:border-blue-950 hover:bg-[#e6efff] sm:p-8">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-200 bg-white text-blue-700 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Palette size={22} />
            </div>

            <h3 className="mt-8 text-2xl font-bold tracking-tight text-slate-900">
              Visual Systems
            </h3>

            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
              Cohesive color theories, bespoke typography, and grid alignment engineered to reflect world-class brand prestige.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-blue-900 uppercase tracking-wider">
            <span>Precision Driven</span>
            <ArrowUpRight size={14} />
          </div>
        </div>

        {/* Card 2: User Experience */}
        <div className="group relative flex flex-col justify-between rounded-3xl border-2 border-blue-900/80 bg-[#f0f5ff] p-7 transition-all duration-300 hover:border-blue-950 hover:bg-[#e6efff] sm:p-8">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-200 bg-white text-blue-700 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <PenTool size={22} />
            </div>

            <h3 className="mt-8 text-2xl font-bold tracking-tight text-slate-900">
              Conversion UX
            </h3>

            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
              Frictionless navigation and intentional user journeys designed to guide visitors directly toward meaningful actions.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-blue-900 uppercase tracking-wider">
            <span>High Retention</span>
            <ArrowUpRight size={14} />
          </div>
        </div>

        {/* Card 3: Full Width Responsive Device Adaptability */}
        <div className="group relative rounded-3xl border-2 border-blue-900/80 bg-[#f0f5ff] p-7 transition-all duration-300 hover:border-blue-950 hover:bg-[#e6efff] sm:col-span-2 sm:p-8">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-200 bg-white text-blue-700 shadow-sm transition-transform duration-300 group-hover:scale-105">
                <Monitor size={22} />
              </div>

              <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-900">
                Adaptive Multi-Device Engineering
              </h3>

              <p className="mt-3 max-w-xl text-xs sm:text-sm leading-relaxed text-slate-600">
                From mobile screens to ultra-wide displays, every interface dynamically recalibrates layout density without compromising visual fidelity.
              </p>
            </div>

            {/* Screen Mock Indicators */}
            <div className="flex items-end gap-2.5">
              <div className="flex h-16 w-10 flex-col justify-between rounded-xl border border-blue-300 bg-white p-1.5 shadow-sm">
                <div className="h-1.5 w-full rounded-full bg-blue-200" />
                <div className="h-3 w-full rounded-md bg-blue-600/20" />
              </div>
              <div className="flex h-20 w-14 flex-col justify-between rounded-xl border border-blue-300 bg-white p-2 shadow-sm">
                <div className="h-2 w-full rounded-full bg-blue-200" />
                <div className="h-4 w-full rounded-md bg-blue-600/30" />
              </div>
              <div className="flex h-28 w-24 flex-col justify-between rounded-xl border-2 border-blue-400 bg-white p-2.5 shadow-md">
                <div className="h-2.5 w-3/4 rounded-full bg-blue-600" />
                <div className="h-8 w-full rounded-md bg-blue-100" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>


    

      <section className="bg-[#F7F8FA] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl">
            

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

      

      


      


      <section className="relative overflow-hidden bg-gradient-to-b from-blue-700 via-blue-600 to-indigo-700 py-12 text-white selection:bg-cyan-300 selection:text-slate-900">
  {/* Light Ambient Synced Glows */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/25 blur-[140px]" />
    <div className="absolute -left-32 top-10 h-[400px] w-[400px] rounded-full bg-blue-400/20 blur-[120px]" />

    {/* Micro Pattern Overlay */}
    <div
      className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    />
  </div>

  <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8 lg:px-10">
    {/* Top Badge */}
    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200 backdrop-blur-md">
      <Sparkles size={14} className="text-cyan-300" />
      <span>Architecting Digital Distinction</span>
    </div>

    {/* Dynamic Heading */}
    <h2 className="mt-6 text-[clamp(2.5rem,5.5vw,5.5rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-white">
      Your digital presence <br className="hidden sm:block" />
      deserves an <span className="text-cyan-300">unfair advantage.</span>
    </h2>

    {/* World-Class Subtext */}
    <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-blue-100/90 sm:text-base lg:text-lg">
      Partner with WebQenzo to engineer high-converting digital infrastructure, tailor-made interfaces, and scalable systems built for global market dominance.
    </p>

    {/* Primary & Secondary CTAs */}
    <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row sm:items-center">
      <Link
        to="/get-quote"
        className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-blue-950 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-xl transition-all duration-300 hover:bg-slate-950 hover:scale-[1.02]"
      >
        <span>Initiate Strategy Call</span>

        <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-blue-800 text-cyan-300 transition-transform duration-300 group-hover:rotate-45 group-hover:bg-cyan-400 group-hover:text-slate-950">
          <ArrowUpRight size={15} />
        </span>
      </Link>

      <Link
        to="/portfolio"
        className="inline-flex items-center justify-center gap-2.5 rounded-2xl border-2 border-white/30 bg-white/10 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white/20"
      >
        <span>Explore Case Studies</span>
        <ArrowRight size={16} />
      </Link>
    </div>

    {/* Executive Trust Badges */}
    <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-blue-400/20 pt-8 text-xs font-semibold text-blue-100/80">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-cyan-300" />
        <span>24/7 Dedicated Support</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-cyan-300" />
        <span>Custom Enterprise Architecture</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-cyan-300" />
        <span>100% Precision Guarantee</span>
      </div>
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