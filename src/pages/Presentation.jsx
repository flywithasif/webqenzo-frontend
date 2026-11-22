import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Workflow,
  ArrowUpRight,
  Maximize2,
  Minimize2,
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
      "â€œWebQenzo completely transformed our online presence. Our site looks exceptionally premium, and customer inquiries tripled within weeks.â€ â€” Aarav K.",
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
    subtitle: "Letâ€™s Build Something Iconic",
    category: "Partnership",
    content:
      "Speak directly with our technical strategists. Share your vision, and weâ€™ll architect the perfect digital roadmap.",
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
      "Thank you for reviewing our capabilities. Letâ€™s start your project today and shape the future of your brand together! âœ¨",
    highlights: ["www.webqenzo.com", "Let's Build", "Shaping Digital Futures"],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
  },
];

function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const slide = slidesData[currentSlide];
  const progress = ((currentSlide + 1) / slidesData.length) * 100;

  const prevSlide = useCallback(() => setCurrentSlide((p) => Math.max(0, p - 1)), []);
  const nextSlide = useCallback(() => setCurrentSlide((p) => Math.min(slidesData.length - 1, p + 1)), []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.target instanceof HTMLElement && ["INPUT", "TEXTAREA", "SELECT"].includes(event.target.tagName)) return;
      if (event.key === "ArrowRight" || event.key === "PageDown") nextSlide();
      if (event.key === "ArrowLeft" || event.key === "PageUp") prevSlide();
      if (event.key === "Home") setCurrentSlide(0);
      if (event.key === "End") setCurrentSlide(slidesData.length - 1);
      if (event.key === "Escape" && isFullscreen) setIsFullscreen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, isFullscreen]);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch {
      setIsFullscreen(Boolean(document.fullscreenElement));
    }
  };

  return (
    <>
      <SEO
        title="WebQenzo â€” Digital Studio Presentation"
        description="Discover WebQenzo's digital strategy, design, engineering, services and delivery standards."
        path="/presentation"
      />
      <main className="relative min-h-screen min-h-dvh overflow-hidden bg-[#050914] text-white selection:bg-cyan-400 selection:text-[#06101e]">
        {/* Cinematic atmosphere */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -left-[20%] -top-[30%] h-[75vw] w-[75vw] rounded-full bg-blue-700/15 blur-[150px]" />
          <div className="absolute -right-[20%] top-[25%] h-[65vw] w-[65vw] rounded-full bg-cyan-500/10 blur-[150px]" />
          <div className="absolute bottom-[-40%] left-[25%] h-[60vw] w-[60vw] rounded-full bg-indigo-500/10 blur-[140px]" />
          <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050914]/20 to-[#050914]" />
        </div>

        {/* Premium navigation */}
        <header className="relative z-20 border-b border-white/[0.08] bg-[#050914]/65 backdrop-blur-2xl">
          <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
            <Link to="/" className="group flex items-center gap-3" aria-label="WebQenzo home">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/25 bg-gradient-to-br from-blue-500/20 to-cyan-400/10 shadow-[0_0_30px_rgba(14,165,233,0.12)]">
                <span className="text-sm font-black tracking-tighter text-cyan-300">WQ</span>
                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" />
              </div>
              <div>
                <div className="text-sm font-black tracking-[0.18em] sm:text-base">WEBQENZO</div>
                <div className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.28em] text-slate-500">Digital Experience Studio</div>
              </div>
            </Link>
            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 md:flex">
              <Workflow size={14} className="text-cyan-300" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Studio Presentation</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 font-mono text-[10px] text-slate-300 sm:px-4 sm:text-xs">
                <span className="text-cyan-300">{String(currentSlide + 1).padStart(2, "0")}</span><span className="text-slate-600"> / {String(slidesData.length).padStart(2, "0")}</span>
              </div>
              <button onClick={toggleFullscreen} className="hidden h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-200 sm:flex" aria-label="Toggle fullscreen">
                {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
              </button>
              <Link to="/" className="rounded-full border border-white/10 px-3 py-2 text-[10px] font-semibold text-slate-400 transition hover:border-white/25 hover:text-white sm:px-4 sm:text-xs">EXIT</Link>
            </div>
          </div>
        </header>

        {/* Main slide */}
        <section className="relative z-10 flex min-h-[calc(100dvh-150px)] items-center px-4 py-7 sm:px-8 sm:py-10 lg:px-12">
          <div className="mx-auto w-full max-w-[1600px]">
            <AnimatePresence mode="wait">
              <motion.article key={currentSlide} initial={{ opacity: 0, y: 18, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -12, filter: "blur(5px)" }} transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }} className="relative grid overflow-hidden rounded-[28px] border border-white/[0.09] bg-[#0b1220]/70 shadow-[0_40px_120px_rgba(0,0,0,0.5)] backdrop-blur-xl lg:min-h-[640px] lg:grid-cols-[0.95fr_1.05fr] xl:rounded-[36px]">
                {/* Editorial text panel */}
                <div className="relative flex flex-col justify-between p-6 sm:p-10 lg:p-12 xl:p-16">
                  <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-cyan-400/70 via-blue-500/30 to-transparent" />
                  <div>
                    <div className="mb-8 flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-200 sm:text-[10px]">
                        <Sparkles size={12} /> {slide.category}
                      </span>
                      <span className="font-mono text-[10px] tracking-widest text-slate-600">CHAPTER {String(currentSlide + 1).padStart(2, "02")}</span>
                    </div>
                    <p className="mb-3 max-w-xl text-[10px] font-bold uppercase tracking-[0.3em] text-blue-300 sm:text-xs">{slide.subtitle}</p>
                    <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl xl:text-[clamp(3.4rem,5.5vw,6rem)]">
                      {slide.title}
                    </h1>
                    <div className="my-7 h-px w-20 bg-gradient-to-r from-cyan-300 to-transparent sm:my-9" />
                    <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 xl:text-lg">{slide.content}</p>
                  </div>

                  <div className="mt-10">
                    <div className="mb-4 flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.22em] text-slate-500">
                      <span>Key capabilities</span><span>01 â€” 03</span>
                    </div>
                    <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                      {slide.highlights.map((item, index) => (
                        <div key={`${slide.id}-${index}`} className="group flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-3 transition duration-300 hover:border-cyan-300/20 hover:bg-cyan-300/[0.04]">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-400/10 text-cyan-300"><CheckCircle2 size={14} /></div>
                          <span className="text-xs font-medium leading-5 text-slate-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Cinematic visual panel */}
                <div className="relative min-h-[280px] overflow-hidden border-t border-white/[0.07] lg:min-h-full lg:border-l lg:border-t-0">
                  <motion.img key={slide.image} src={slide.image} alt={slide.title} initial={{ scale: 1.08, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#07101f]/15 via-[#07101f]/25 to-[#050914]/90" />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0b1220]/45 lg:to-[#0b1220]/20" />
                  <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-2 backdrop-blur-xl sm:left-8 sm:top-8">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#67e8f9]" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/70">WebQenzo / Studio</span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.25em] text-cyan-200/80">Digital excellence</p>
                        <p className="max-w-sm text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl">Designed to make a lasting impression.</p>
                      </div>
                      <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.05] backdrop-blur-xl sm:flex"><ArrowUpRight size={19} className="text-white" /></div>
                    </div>
                  </div>
                  <div className="absolute right-0 top-0 h-32 w-32 border-r border-t border-cyan-300/20" />
                  <div className="absolute bottom-0 left-0 h-24 w-24 border-b border-l border-cyan-300/20" />
                </div>
              </motion.article>
            </AnimatePresence>

            {/* Navigation system */}
            <div className="mx-auto mt-5 flex max-w-[1600px] flex-col gap-4 sm:mt-7">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.22em] text-slate-500 sm:text-[10px]"><span>Presentation progress</span><span className="text-cyan-300">{Math.round(progress)}%</span></div>
                <div className="hidden font-mono text-[10px] text-slate-600 sm:block">â† â†’ NAVIGATE Â· HOME / END</div>
              </div>
              <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/[0.07]">
                <motion.div className="h-full bg-gradient-to-r from-blue-500 via-cyan-300 to-blue-500" animate={{ width: `${progress}%` }} transition={{ duration: 0.45 }} />
              </div>
              <div className="flex items-center justify-between gap-3">
                <button type="button" onClick={prevSlide} disabled={currentSlide === 0} className="group flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 text-xs font-semibold text-slate-300 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 sm:px-6">
                  <ChevronLeft size={16} /><span>Previous</span>
                </button>
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: slidesData.length }).map((_, index) => (
                    <button key={index} onClick={() => setCurrentSlide(index)} aria-label={`Go to slide ${index + 1}`} className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? "w-7 bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.45)]" : "w-1.5 bg-white/20 hover:bg-white/50"}`} />
                  ))}
                </div>
                <button type="button" onClick={nextSlide} disabled={currentSlide === slidesData.length - 1} className="group flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 text-xs font-bold text-white shadow-[0_8px_30px_rgba(14,165,233,0.2)] transition hover:shadow-[0_8px_40px_rgba(14,165,233,0.35)] disabled:cursor-not-allowed disabled:opacity-30 sm:px-6">
                  <span>Next</span><ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <footer className="relative z-10 border-t border-white/[0.06] px-5 py-4 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-3 text-[9px] uppercase tracking-[0.2em] text-slate-600 sm:text-[10px]">
            <span>WEBQENZO Â© {new Date().getFullYear()}</span><span className="hidden sm:block">Digital experiences engineered for growth</span><span>Confidential Â· Studio Deck</span>
          </div>
        </footer>
      </main>
    </>
  );
}

export default Presentation;


