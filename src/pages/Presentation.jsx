import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const slidesData = [
  {
    id: 1,
    title: "Welcome to WebQenzo",
    subtitle: "Premium Website Design & Development Studio",
    category: "Introduction",
    content:
      "We architect elite digital experiences engineered to establish market authority, build absolute trust, and scale high-growth businesses.",
    highlights: ["Global Standards", "Modern UI/UX", "Growth Focused"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    title: "Who We Are",
    subtitle: "Your Elite Digital Growth Partner",
    category: "Introduction",
    content:
      "WebQenzo is a premier web engineering and digital branding studio transforming ambitious startups and enterprises into dominant digital brands.",
    highlights: ["Expert Engineers", "Visionary Designers", "Strategic Growth Partners"],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    title: "Our Core Mission",
    subtitle: "Engineering Digital Excellence",
    category: "Introduction",
    content:
      "Bridging the gap between complex software architecture and effortless human experiences to make your brand unforgettable.",
    highlights: ["Purpose-Driven", "Result-Oriented", "Frictionless UX"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    title: "The WebQenzo Advantage",
    subtitle: "Why Market Leaders Choose Us",
    category: "Introduction",
    content:
      "We don't just write code. We build high-conversion digital assets engineered to turn casual traffic into loyal, high-value customers.",
    highlights: ["Conversion Optimized", "Sub-Second Load", "Scalable Infrastructure"],
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    title: "Our Guiding Principles",
    subtitle: "Built on Precision & Trust",
    category: "Introduction",
    content:
      "Absolute transparency, relentless performance tuning, pixel-perfect design systems, and long-term partnership commitment.",
    highlights: ["Total Transparency", "Uncompromised Quality", "24/7 Reliability"],
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 6,
    title: "Custom Website Design",
    subtitle: "Tailored UI/UX Aesthetics",
    category: "Services",
    content:
      "Bespoke user interfaces crafted from raw wireframes to reflect your unique brand identity and captivate your target audience instantly.",
    highlights: ["Figma Prototyping", "Brand Alignment", "Interactive Motion"],
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 7,
    title: "High-Performance Engineering",
    subtitle: "Clean & Scalable Codebase",
    category: "Services",
    content:
      "Engineered using modern stacks (React, Next.js, Tailwind CSS) guaranteeing lightning-fast execution and impenetrable security.",
    highlights: ["Optimized Bundles", "SEO Architecture", "Secure Core"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 8,
    title: "E-Commerce Ecosystems",
    subtitle: "Shopify & Custom Stores",
    category: "Services",
    content:
      "Robust online retail platforms equipped with streamlined checkout funnels, secure payment gateways, and automated inventory sync.",
    highlights: ["High Conversion Funnels", "Secure Checkout", "Catalog Sync"],
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 9,
    title: "Web Applications & SaaS",
    subtitle: "Dynamic Cloud Platforms",
    category: "Services",
    content:
      "Scalable web applications built to handle immense traffic loads, complex business logic, and real-time data synchronization.",
    highlights: ["Cloud Native", "API Integrations", "Enterprise Security"],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 10,
    title: "Performance Marketing",
    subtitle: "Data-Driven Growth Engines",
    category: "Services",
    content:
      "Targeted multi-channel ad campaigns designed to generate high-intent leads, sales volume, and maximum return on ad spend (ROAS).",
    highlights: ["ROAS Focused", "Precision Targeting", "Real-Time Tracking"],
    image:
      "https://images.unsplash.com/photo-1533750349077-cdcd1063ca3b?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 11,
    title: "Meta Advertising",
    subtitle: "Facebook & Instagram Mastery",
    category: "Services",
    content:
      "Engaging social ad funnels powered by compelling creative psychology, rigorous audience testing, and continuous optimization.",
    highlights: ["Creative Strategy", "Retargeting Loops", "Ad Scaling"],
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 12,
    title: "SEO & Organic Dominance",
    subtitle: "Climb Search Rankings",
    category: "Services",
    content:
      "Comprehensive search engine optimization strategies that secure top positions on Google and drive sustainable organic revenue.",
    highlights: ["Keyword Authority", "Technical SEO", "Content Funnels"],
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 13,
    title: "Website Transformation",
    subtitle: "Revamp Legacy Platforms",
    category: "Services",
    content:
      "Convert slow, outdated websites into ultra-modern digital masterpieces aligned with contemporary design and speed benchmarks.",
    highlights: ["UX Audit", "Zero-Loss Migration", "Instant Uplift"],
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 14,
    title: "Branding & Identity Systems",
    subtitle: "Memorable Visual Assets",
    category: "Services",
    content:
      "Crafting distinctive brand marks, color palettes, and typographic hierarchies that communicate instant corporate authority.",
    highlights: ["Logo Engineering", "Brand Guidelines", "Asset Libraries"],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 15,
    title: "Managed Support & Security",
    subtitle: "24/7 Operational Peace",
    category: "Services",
    content:
      "Continuous security patching, automated daily backups, and uptime monitoring ensuring your digital ecosystem stays bulletproof.",
    highlights: ["Automated Backups", "Uptime Guards", "Dedicated SLA"],
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 16,
    title: "The WebQenzo Workflow",
    subtitle: "Systematic Execution Model",
    category: "System Workflow",
    content:
      "Our streamlined 3-step execution pipeline eliminates ambiguity and guarantees precision delivery on strict timelines.",
    highlights: ["Agile Sprints", "Milestone Tracking", "Client Portal Access"],
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 17,
    title: "Phase 1: Discovery & Strategy",
    subtitle: "Architecting the Blueprint",
    category: "System Workflow",
    content:
      "Deep analysis of your market positioning, competitor research, audience personas, and technical architecture mapping.",
    highlights: ["Scope Definition", "Competitor Matrix", "Tech Stack Selection"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 18,
    title: "Phase 2: UI/UX Prototyping",
    subtitle: "Visualizing the Experience",
    category: "System Workflow",
    content:
      "Interactive Figma prototypes simulating user journeys so you experience your platform before a single line of code is written.",
    highlights: ["Wireframing", "High-Fidelity UI", "Interactive Testing"],
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 19,
    title: "Phase 3: Development & Integration",
    subtitle: "Building the Core Engine",
    category: "System Workflow",
    content:
      "Writing clean, modular code paired with rigorous cross-browser testing and responsive layout optimizations.",
    highlights: ["Component Driven", "Mobile Responsive", "API Piping"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 20,
    title: "Quality Assurance & Stress Test",
    subtitle: "Zero-Defect Guarantee",
    category: "System Workflow",
    content:
      "Exhaustive audits covering performance bottlenecks, accessibility compliance, security vulnerabilities, and link integrity.",
    highlights: ["Load Testing", "Security Scans", "UI Polish"],
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 21,
    title: "Seamless Production Go-Live",
    subtitle: "Zero-Downtime Launch",
    category: "System Workflow",
    content:
      "Expert DNS routing, SSL provisioning, and production deployment executed smoothly without disrupting your business.",
    highlights: ["DNS Configuration", "SSL Deployment", "Instant Activation"],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 22,
    title: "Post-Launch Optimization",
    subtitle: "Continuous Scale & Growth",
    category: "System Workflow",
    content:
      "Continuous analytics monitoring, conversion rate optimization (CRO), and iterative feature upgrades to compound growth.",
    highlights: ["Analytics Tracking", "CRO Audits", "Feature Expansion"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 23,
    title: "Elite Performance Standards",
    subtitle: "Lightning-Fast Speed Metrics",
    category: "Standards",
    content:
      "Our platforms consistently aim for 95+ Google Lighthouse scores, eliminating bounce rates caused by laggy load times.",
    highlights: ["Optimized Assets", "Edge Caching", "Minimal DOM Size"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 24,
    title: "Mobile-First Architecture",
    subtitle: "Immersive on Every Screen",
    category: "Standards",
    content:
      "Designed for thumb-friendly navigation and lightning response across smartphones, tablets, laptops, and ultra-wide displays.",
    highlights: ["Adaptive Grids", "Touch Optimized", "Retina Ready"],
    image:
      "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 25,
    title: "Enterprise-Grade Security",
    subtitle: "Impenetrable Defense Systems",
    category: "Standards",
    content:
      "Fortified with strict encryption protocols, secure token authentication, and proactive vulnerability protection.",
    highlights: ["Data Encryption", "DDoS Mitigation", "Secure Auth"],
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 26,
    title: "Cloud Scalability",
    subtitle: "Built for Massive Traffic",
    category: "Standards",
    content:
      "Modular architecture designed to scale seamlessly from 100 daily visitors to 100,000 concurrent users without degradation.",
    highlights: ["Cloud Infrastructure", "Auto-Scaling", "Zero Bottlenecks"],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 27,
    title: "Universal Browser Compatibility",
    subtitle: "Flawless Execution Everywhere",
    category: "Standards",
    content:
      "Rigorously tested across Chrome, Safari, Firefox, Edge, and mobile WebViews for consistent rendering.",
    highlights: ["Cross-Browser QA", "Standard Compliant", "Modern Polyfills"],
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 28,
    title: "WCAG Accessibility Compliant",
    subtitle: "Inclusivity by Design",
    category: "Standards",
    content:
      "Engineered with semantic HTML and screen-reader friendliness so every user can navigate your platform comfortably.",
    highlights: ["Screen Reader Ready", "High Contrast", "Keyboard Navigable"],
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 29,
    title: "Global Reach",
    subtitle: "Serving Enterprises Worldwide",
    category: "Global",
    content:
      "WebQenzo aims to deliver high-impact digital solutions for clients across international markets.",
    highlights: ["International Markets", "Global Standards", "Cross-Border Expertise"],
    image:
      "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 30,
    title: "Key International Hubs",
    subtitle: "Bridging Continents",
    category: "Global",
    content:
      "Serving businesses across India, the United States, the United Kingdom, Dubai (UAE), Canada, and Europe.",
    highlights: ["North America", "Middle East", "Europe & Asia"],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 31,
    title: "Healthcare & Wellness",
    subtitle: "Trusted Digital Ecosystems",
    category: "Industries",
    content:
      "Building secure, patient-centric portals and booking engines for clinics, wellness brands, and medical practitioners.",
    highlights: ["Patient Portals", "Secure Data", "Trust UI"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 32,
    title: "E-Commerce & Retail",
    subtitle: "High-Volume Storefronts",
    category: "Industries",
    content:
      "Empowering fashion, jewelry, home decor, and consumer brands with high-converting e-commerce experiences.",
    highlights: ["Fast Checkout", "Inventory Sync", "High Conversion"],
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 33,
    title: "SaaS & Technology Startups",
    subtitle: "Innovative Tech Platforms",
    category: "Industries",
    content:
      "Delivering sleek marketing landing pages and intuitive user dashboards for cutting-edge software enterprises.",
    highlights: ["Product Showcases", "Conversion Funnels", "Sleek Aesthetics"],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 34,
    title: "Legal & Corporate Advisory",
    subtitle: "Establishing Authority",
    category: "Industries",
    content:
      "Designing sophisticated, high-credibility digital portfolios and lead capture workflows for professional corporate firms.",
    highlights: ["Corporate Trust", "Lead Capture", "Professional Polish"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 35,
    title: "Client Success Stories",
    subtitle: "Proven Business Impact",
    category: "Success",
    content:
      "“WebQenzo completely transformed our online presence. Our site looks exceptionally premium, and customer inquiries tripled within weeks.” — Aarav K.",
    highlights: ["Verified Reviews", "Measurable ROI", "Long-Term Partners"],
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 36,
    title: "98% Client Satisfaction",
    subtitle: "Exceeding Expectations",
    category: "Success",
    content:
      "Our commitment to excellence and transparent communication is central to our client satisfaction goals.",
    highlights: ["Client Feedback", "Transparent Comms", "Reliable Delivery"],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 37,
    title: "Investment & Value",
    subtitle: "Customized Pricing Models",
    category: "Partnership",
    content:
      "Flexible project scopes and investment plans tailored precisely to your startup budget without compromising on engineering quality.",
    highlights: ["Transparent Pricing", "Scalable Scopes", "Maximum ROI"],
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 38,
    title: "Ready to Accelerate?",
    subtitle: "Your Next Growth Milestone",
    category: "Partnership",
    content:
      "Don't let an outdated digital footprint stall your momentum. Partner with WebQenzo and turn your website into a revenue engine.",
    highlights: ["Free Consultation", "Custom Roadmap", "Instant Kickoff"],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 39,
    title: "Connect With Our Team",
    subtitle: "Let’s Build Something Iconic",
    category: "Partnership",
    content:
      "Speak directly with our technical strategists. Share your vision, and we’ll architect the perfect digital roadmap.",
    highlights: ["Direct Consultation", "Quick Response", "Expert Guidance"],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 40,
    title: "Thank You",
    subtitle: "WebQenzo Studio Deck",
    category: "Conclusion",
    content:
      "Thank you for reviewing our capabilities. Let’s start your project today and shape the future of your brand together! ✨",
    highlights: ["www.webqenzo.com", "Let's Build", "Shaping Digital Futures"],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
  },
];

function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = slidesData[currentSlide];

  const prevSlide = useCallback(() => {
    setCurrentSlide((previous) => Math.max(0, previous - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((previous) =>
      Math.min(slidesData.length - 1, previous + 1)
    );
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        event.target instanceof HTMLElement &&
        ["INPUT", "TEXTAREA", "SELECT"].includes(event.target.tagName)
      ) {
        return;
      }

      if (event.key === "ArrowRight") nextSlide();
      if (event.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextSlide, prevSlide]);

  return (
    <>
      <SEO
        title="High-End Company Presentation | WebQenzo"
        description="Explore WebQenzo's 40-slide presentation showcasing web design, development, digital services, workflow, and technical standards."
        path="/presentation"
      />

      <main className="relative flex min-h-screen min-h-dvh flex-col overflow-x-clip bg-[#050811] text-white selection:bg-blue-600 selection:text-white">
        {/* Background */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-600/15 blur-[100px] sm:h-[500px] sm:w-[500px]" />
          <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px] sm:h-[500px] sm:w-[500px]" />

          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Header */}
        <header className="relative z-10 flex w-full flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-[#0A0E1A]/95 px-3 py-3 shadow-xl backdrop-blur-xl sm:px-6 sm:py-4">
          <Link
            to="/"
            className="flex min-w-0 items-center gap-2 text-base font-black tracking-tight sm:gap-3 sm:text-xl"
            aria-label="WebQenzo home"
          >
            <span className="h-2.5 w-2.5 shrink-0 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />

            <span>WEBQENZO</span>

            <span className="hidden rounded border border-cyan-500/20 bg-cyan-500/10 px-2 py-1 font-mono text-[10px] text-cyan-400 min-[400px]:inline sm:text-xs">
              STUDIO DECK
            </span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-4">
            <span className="hidden items-center gap-2 font-mono text-xs text-slate-400 md:flex">
              <Workflow size={14} className="text-cyan-400" />
              Interactive Presentation System
            </span>

            <span className="whitespace-nowrap rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1.5 font-mono text-[10px] font-bold text-cyan-300 sm:px-3 sm:text-xs">
              Slide {currentSlide + 1} / {slidesData.length}
            </span>

            <Link
              to="/"
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white sm:px-4"
            >
              Exit ✕
            </Link>
          </div>
        </header>

        {/* Main content */}
        <section className="relative z-10 flex w-full flex-1 flex-col items-center justify-center px-3 py-5 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
          <div className="grid w-full max-w-7xl grid-cols-1 items-stretch gap-5 overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-[#0D1526]/95 via-[#0A101D]/95 to-[#060B14]/95 p-4 shadow-[0_25px_80px_rgba(0,0,0,0.5)] backdrop-blur-2xl sm:gap-8 sm:rounded-3xl sm:p-6 md:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:p-10 xl:p-12">
            {/* Slide text */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25 }}
                className="flex min-w-0 flex-col justify-between gap-7"
              >
                <div>
                  <div className="mb-5 flex flex-wrap items-center gap-3 sm:mb-6">
                    <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-cyan-400 sm:px-4 sm:text-xs">
                      <Sparkles size={13} className="shrink-0" />
                      {slide.category}
                    </span>

                    <span className="font-mono text-[10px] text-slate-500 sm:text-xs">
                      INDEX: {String(currentSlide + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h2 className="text-[10px] font-bold uppercase leading-relaxed tracking-[0.18em] text-blue-400 sm:text-xs sm:tracking-[0.22em]">
                    {slide.subtitle}
                  </h2>

                  <h1 className="mt-3 break-words text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl md:text-5xl xl:text-6xl">
                    {slide.title}
                  </h1>

                  <p className="mt-4 max-w-2xl break-words text-sm leading-7 text-slate-300 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
                    {slide.content}
                  </p>
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-1 gap-2 border-t border-white/10 pt-5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-1 xl:grid-cols-3">
                  {slide.highlights.map((item, index) => (
                    <div
                      key={`${slide.id}-${index}`}
                      className="flex min-w-0 items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 backdrop-blur-sm sm:items-center"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-cyan-400 sm:mt-0"
                      />

                      <span className="break-words text-xs font-semibold leading-5 text-slate-200 sm:text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slide image */}
            <div className="group relative isolate min-h-[220px] w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900 sm:min-h-[300px] sm:rounded-2xl lg:min-h-[420px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={slide.image}
                  src={slide.image}
                  alt={slide.title}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </AnimatePresence>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060B14] via-transparent to-black/30" />

              <div className="absolute inset-x-2 bottom-2 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-white/15 bg-slate-950/85 p-3 backdrop-blur-md sm:inset-x-4 sm:bottom-4 sm:gap-3 sm:rounded-xl sm:p-4">
                <div className="flex min-w-0 items-center gap-2">
                  <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-cyan-400" />

                  <span className="break-words font-mono text-[10px] text-cyan-300 sm:text-xs">
                    WebQenzo Architecture v2.6
                  </span>
                </div>

                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 sm:text-[10px]">
                  Verified System
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation footer */}
        <footer className="relative z-10 w-full border-t border-white/10 bg-[#0A0E1A]/95 px-3 py-4 shadow-2xl backdrop-blur-xl sm:px-6 sm:py-5">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 sm:gap-5">
            {/* Progress bar */}
            <div
              className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800 sm:h-2"
              role="progressbar"
              aria-label="Presentation progress"
              aria-valuemin={0}
              aria-valuemax={slidesData.length}
              aria-valuenow={currentSlide + 1}
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 transition-all duration-300"
                style={{
                  width: `${((currentSlide + 1) / slidesData.length) * 100}%`,
                }}
              />
            </div>

            {/* Buttons */}
            <div className="flex w-full items-center justify-between gap-3">
              <button
                type="button"
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="inline-flex min-h-11 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-3 text-xs font-bold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30 sm:flex-none sm:gap-2 sm:px-6 sm:text-sm"
                aria-label="Go to previous slide"
              >
                <ChevronLeft size={18} className="shrink-0" />
                <span>Back Slide</span>
              </button>

              <span className="shrink-0 font-mono text-[10px] text-slate-400 sm:text-xs">
                {currentSlide + 1} / {slidesData.length}
              </span>

              <button
                type="button"
                onClick={nextSlide}
                disabled={currentSlide === slidesData.length - 1}
                className="inline-flex min-h-11 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-3 py-3 text-xs font-bold text-white shadow-lg transition hover:shadow-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-30 sm:flex-none sm:gap-2 sm:px-8 sm:text-sm"
                aria-label="Go to next slide"
              >
                <span>Next Slide</span>
                <ChevronRight size={18} className="shrink-0" />
              </button>
            </div>

            <p className="text-center text-[10px] text-slate-500">
              Use ← → arrow keys to navigate
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}

export default Presentation;