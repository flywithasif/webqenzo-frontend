import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Layers3,
  Palette,
  Sparkles,
  Zap,
  X,
  ExternalLink,
  Globe,
  Monitor,
  Smartphone,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

/* =========================================================
   WEBQENZO PREMIUM PORTFOLIO
========================================================= */

const projects = [
  {
    id: "01",
    name: "NOVA Commerce",
    category: "E-commerce",
    type: "Premium Fashion Store",
    description: "A refined fashion shopping experience featuring immersive product discovery, elegant editorial layouts and a seamless checkout journey.",
    url: "",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85",
    tags: ["E-commerce", "Fashion", "UI/UX"]
  },
  {
    id: "02",
    name: "Velora Living",
    category: "E-commerce",
    type: "Furniture & Interior",
    description: "A modern furniture storefront focused on premium product presentation, inspiration-led browsing and minimal visual design.",
    url: "",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    tags: ["Furniture", "Interior", "E-commerce"]
  },
  {
    id: "03",
    name: "PulseFit",
    category: "Web Application",
    type: "Fitness Platform",
    description: "A performance-focused fitness experience combining workout planning, progress tracking and personalized wellness journeys.",
    url: "",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",
    tags: ["Fitness", "Dashboard", "Web App"]
  },
  {
    id: "04",
    name: "Aurum Estates",
    category: "Corporate",
    type: "Luxury Real Estate",
    description: "An elegant property experience designed to showcase premium developments through cinematic imagery and refined typography.",
    url: "",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    tags: ["Real Estate", "Luxury", "Corporate"]
  },
  {
    id: "05",
    name: "Medicare Plus",
    category: "Corporate",
    type: "Healthcare Website",
    description: "A trustworthy healthcare platform with accessible information, intuitive appointment journeys and patient-first design.",
    url: "",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
    tags: ["Healthcare", "Medical", "Website"]
  },
  {
    id: "06",
    name: "EduNova",
    category: "Web Application",
    type: "Education Platform",
    description: "A modern learning platform bringing courses, student progress and educational resources into one engaging digital experience.",
    url: "",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=85",
    tags: ["Education", "Learning", "Platform"]
  },
  {
    id: "07",
    name: "Finora",
    category: "Web Application",
    type: "Fintech Dashboard",
    description: "A clean financial dashboard with clear data visualization, transaction insights and a streamlined money management experience.",
    url: "",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    tags: ["Fintech", "Dashboard", "Analytics"]
  },
  {
    id: "08",
    name: "CloudSync",
    category: "Web Application",
    type: "SaaS Platform",
    description: "A scalable SaaS product experience designed around productivity, collaboration and a frictionless modern interface.",
    url: "",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    tags: ["SaaS", "Product", "Web App"]
  },
  {
    id: "09",
    name: "Brew & Co.",
    category: "Landing Page",
    type: "Coffee Brand",
    description: "A character-driven brand website combining rich photography, storytelling and a memorable digital experience.",
    url: "",
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=85",
    tags: ["Branding", "Coffee", "Landing Page"]
  },
  {
    id: "10",
    name: "Luxe Beauty",
    category: "E-commerce",
    type: "Beauty & Cosmetics",
    description: "A premium beauty storefront built around product storytelling, visual discovery and a sophisticated shopping experience.",
    url: "",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=85",
    tags: ["Beauty", "Cosmetics", "E-commerce"]
  },
  {
    id: "11",
    name: "Travelora",
    category: "Web Application",
    type: "Travel Booking",
    description: "An inspiring travel discovery platform featuring destination exploration, curated experiences and effortless trip planning.",
    url: "",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
    tags: ["Travel", "Booking", "Platform"]
  },
  {
    id: "12",
    name: "UrbanNest",
    category: "Web Application",
    type: "Property Marketplace",
    description: "A property discovery experience featuring smart search, property listings, location insights and modern listing cards.",
    url: "",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=85",
    tags: ["Marketplace", "Property", "Web App"]
  },
  {
    id: "13",
    name: "TechSphere",
    category: "Corporate",
    type: "Technology Company",
    description: "A bold corporate website designed to communicate innovation, technical expertise and a forward-thinking brand identity.",
    url: "",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=85",
    tags: ["Technology", "Corporate", "Business"]
  },
  {
    id: "14",
    name: "FoodieHub",
    category: "E-commerce",
    type: "Restaurant & Food",
    description: "A digital restaurant experience featuring appetizing visuals, streamlined menu browsing and a convenient ordering journey.",
    url: "",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
    tags: ["Restaurant", "Food", "Ordering"]
  },
  {
    id: "15",
    name: "SkillUp",
    category: "Web Application",
    type: "Online Learning",
    description: "A focused online learning experience with course discovery, structured learning paths and engaging educational content.",
    url: "",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85",
    tags: ["Education", "Courses", "Platform"]
  },
  {
    id: "16",
    name: "AutoDrive",
    category: "Landing Page",
    type: "Automotive",
    description: "A premium automotive digital experience showcasing vehicle details, striking imagery and a conversion-focused enquiry journey.",
    url: "",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85",
    tags: ["Automotive", "Landing Page", "Premium"]
  }
];

const services = [
  {
    number: "01",
    icon: Palette,
    title: "Digital Design",
    description:
      "Distinctive visual identities and intuitive interfaces designed to create memorable digital experiences.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Web Development",
    description:
      "Modern, scalable and responsive websites engineered for performance and reliability.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "E-Commerce",
    description:
      "High-converting online stores with seamless shopping experiences and powerful functionality.",
  },
  {
    number: "04",
    icon: Zap,
    title: "Performance",
    description:
      "Optimised digital experiences built for speed, discoverability and long-term growth.",
  },
];

const principles = [
  "Designed around real business goals",
  "Every screen thoughtfully considered",
  "Performance meets visual excellence",
  "Built to scale with your business",
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
      <span className="h-px w-8 bg-blue-600" />
      {children}
    </div>
  );
}

function normalizeUrl(url) {
  if (!url) return "";

  return /^https?:\/\//i.test(url.trim())
    ? url.trim()
    : `https://${url.trim()}`;
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project, index }) {
  const projectNumber = Number(project.id);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.65, delay: index * 0.1 }}
      className="group"
    >
      <Link
        to={`/portfolio/project${projectNumber}`}
        className="block"
      >
        <div className="relative overflow-hidden border border-[#E4EAF5] bg-white transition-all duration-500 hover:border-blue-200 hover:shadow-[0_25px_80px_rgba(37,99,235,0.12)]">

          <div className="relative aspect-[1.15/1] overflow-hidden bg-[#EDF3FF]">

            {project.image ? (
              <img
                src={project.image}
                alt={`${project.name} website`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#EAF1FF] via-white to-[#DDE8FF]">
                <Globe size={42} className="text-blue-600" />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Project Preview
                </p>
                <h3 className="mt-2 text-xl font-bold text-[#071B49]">
                  {project.name}
                </h3>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-[#071B49]/80 via-transparent to-transparent opacity-80" />

            <div className="absolute left-5 top-5">
              <span className="border border-white/40 bg-white/90 px-4 py-2 text-xs font-semibold text-[#071B49] backdrop-blur">
                {project.category}
              </span>
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-7 sm:left-7 sm:right-7">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                  Selected project
                </p>

                <h3 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {project.name}
                </h3>
              </div>

              <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-white text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                <ArrowUpRight size={22} />
              </span>
            </div>
          </div>

          <div className="p-5 sm:p-7">

            <p className="text-sm font-semibold text-blue-600">
              {project.type}
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              {project.description}
            </p>

            {project.tags?.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#E5EAF4] bg-[#F8FAFF] px-3 py-1.5 text-xs text-slate-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">

              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#071B49] transition group-hover:text-blue-600">
                View Case Study
                <ArrowUpRight size={16} />
              </span>

              <span className="text-xs font-medium text-slate-400">
                Project {project.id}
              </span>

            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

/* =========================================================
   LIVE PREVIEW
========================================================= */

function LivePreviewModal({ project, onClose }) {
  if (!project) return null;

  const url = normalizeUrl(project.url);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#071B49]/70 p-3 backdrop-blur-md sm:p-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          onClick={(e) => e.stopPropagation()}
          className="flex h-[92vh] w-full max-w-[1500px] flex-col overflow-hidden bg-white shadow-2xl sm:h-[90vh]"
        >

          {/* Browser */}

          <div className="flex items-center gap-3 border-b border-slate-200 bg-[#F7F9FC] px-3 py-3 sm:px-5">

            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
            </div>

            <div className="flex flex-1 items-center gap-2 border border-slate-200 bg-white px-3 py-2">

              <Globe size={13} className="text-slate-400" />

              <span className="truncate text-xs text-slate-500">
                {url}
              </span>
            </div>

            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 border border-slate-200 px-3 py-2 text-xs font-semibold text-[#071B49] hover:bg-blue-50 sm:flex"
            >
              Open website
              <ExternalLink size={14} />
            </a>

            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center bg-[#071B49] text-white transition hover:bg-blue-600"
              aria-label="Close preview"
            >
              <X size={18} />
            </button>
          </div>

          {/* Title */}

          <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 sm:px-6">

            <div>
              <h3 className="text-sm font-bold text-[#071B49]">
                {project.name}
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                Live website preview
              </p>
            </div>

            <div className="flex items-center gap-2 text-slate-400">
              <Monitor size={15} className="hidden sm:block" />
              <Smartphone size={15} className="sm:hidden" />
            </div>
          </div>

          {/* iframe */}

          <div className="relative flex-1 bg-white">

            <iframe
              key={url}
              src={url}
              title={`${project.name} live preview`}
              className="h-full w-full border-0"
              loading="lazy"
              allow="fullscreen"
            />

            <div className="absolute bottom-4 left-4 right-4 flex justify-center">

              <div className="flex items-center gap-3 border border-slate-200 bg-white px-4 py-3 shadow-xl">

                <div className="flex h-9 w-9 items-center justify-center bg-blue-50 text-blue-600">
                  <Globe size={17} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-[#071B49]">
                    Preview not loading?
                  </p>

                  <p className="text-[10px] text-slate-400">
                    Some websites block embedded previews.
                  </p>
                </div>

                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-700"
                >
                  Open
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */


function ProjectDetailModal({ project, onClose, onPreview }) {
  if (!project) return null;

  const url = normalizeUrl(project.url);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/75 p-3 backdrop-blur-md sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-2xl border border-blue-100 bg-white text-slate-900 shadow-2xl sm:rounded-3xl"
          >
            {/* Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-100 bg-white/95 px-5 py-4 backdrop-blur-xl sm:px-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Layers3 size={19} />
                </div>

                <div>
                  <p className="text-xs font-bold text-blue-600">
                    PROJECT DETAILS
                  </p>
                  <p className="text-sm font-semibold text-slate-900">
                    {project.name}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
              >
                <X size={19} />
              </button>
            </div>

            {/* Project Hero */}
            <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1.1fr_.9fr]">

              <div>
                <span className="inline-flex rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                  {project.category}
                </span>

                <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  {project.name}
                </h2>

                <p className="mt-3 text-sm font-medium text-blue-600">
                  {project.type}
                </p>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {(project.tags || []).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">

                  <button
                    type="button"
                    onClick={() => onPreview(project)}
                    className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                  >
                    <Monitor size={16} />
                    Live Preview
                  </button>

                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50"
                  >
                    Open Website
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* Project image */}
              <div className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full min-h-[260px] w-full object-cover"
                  />
                ) : (
                  <div className="flex min-h-[260px] items-center justify-center bg-blue-50">
                    <Globe size={50} className="text-blue-300" />
                  </div>
                )}
              </div>
            </div>

            {/* Information sections */}
            <div className="grid gap-5 border-t border-slate-100 bg-slate-50/70 p-5 sm:grid-cols-2 sm:p-8">

              <div className="rounded-2xl border border-slate-100 bg-white p-5 sm:p-6">
                <div className="flex items-center gap-2 text-blue-600">
                  <Sparkles size={17} />
                  <h3 className="text-sm font-bold">Project Objective</h3>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {project.objective || project.description}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-5 sm:p-6">
                <div className="flex items-center gap-2 text-blue-600">
                  <Check size={17} />
                  <h3 className="text-sm font-bold">Key Features</h3>
                </div>

                <div className="mt-4 space-y-3">
                  {(project.features || []).map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                        <Check size={13} />
                      </span>

                      <span className="text-sm text-slate-600">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-5 sm:p-6 sm:col-span-2">
                <div className="flex items-center gap-2 text-blue-600">
                  <Code2 size={17} />
                  <h3 className="text-sm font-bold">Technology Stack</h3>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {(project.technologies || []).map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Live preview section */}
            <div className="border-t border-slate-100 p-5 sm:p-8">

              <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                    Website Preview
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-slate-900">
                    Experience the website
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => onPreview(project)}
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-xs font-semibold text-white transition hover:bg-blue-700"
                >
                  Open Full Preview
                  <ArrowUpRight size={15} />
                </button>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">

                <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                  <div className="ml-3 min-w-0 flex-1 truncate rounded-md bg-white px-3 py-1.5 text-xs text-slate-500">
                    {url}
                  </div>
                </div>

                <div className="relative h-[300px] bg-white sm:h-[450px]">

                  <iframe
                    src={url}
                    title={`${project.name} project preview`}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />

                  <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex justify-center">
                    <div className="pointer-events-auto flex items-center gap-3 rounded-xl border border-slate-200 bg-white/95 p-3 shadow-lg">

                      <div className="hidden sm:block">
                        <p className="text-xs font-semibold text-slate-900">
                          Preview unavailable?
                        </p>

                        <p className="mt-1 text-[10px] text-slate-500">
                          This website may restrict embedding.
                        </p>
                      </div>

                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white"
                      >
                        Open Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 bg-white px-5 py-5 sm:px-8">

              <p className="text-xs text-slate-500">
                WebQenzo · Digital Design & Development
              </p>

              <Link
                to="/get-quote"
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-xs font-semibold text-white transition hover:bg-blue-700"
              >
                Start a Similar Project
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");


  const [showAllProjects, setShowAllProjects] = useState(false);

  const filters = useMemo(() => {
    const categories = [
      ...new Set(projects.map((project) => project.category)),
    ];

    return ["All", ...categories];
  }, []);

  const visibleProjects = useMemo(() => {
    return activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );
  }, [activeFilter]);

  return (
    <main className="overflow-hidden bg-white text-[#071B49] selection:bg-blue-200">

      <SEO
        title="Our Portfolio | Premium Website Design & Development"
        description="Explore WebQenzo's website design and development portfolio. Discover premium digital experiences, e-commerce websites and custom web applications."
        path="/portfolio"
      />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#F5F8FF]">

        {/* Background elements */}

        <div className="pointer-events-none absolute right-[-15%] top-[-20%] h-[600px] w-[600px] rounded-full bg-blue-100/70 blur-[100px]" />

        <div className="pointer-events-none absolute left-[-15%] bottom-[-30%] h-[500px] w-[500px] rounded-full bg-[#DCE8FF]/60 blur-[100px]" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              "radial-gradient(#B8CCF7 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-5 pb-14 pt-16 sm:px-8 sm:pb-20 sm:pt-20 lg:grid-cols-[1.05fr_.95fr] lg:gap-10 lg:px-12 lg:py-20">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <Eyebrow>Selected work · WebQenzo</Eyebrow>

            <h1 className="mt-5 max-w-4xl text-[clamp(3.2rem,7.5vw,7.2rem)] font-bold leading-[0.91] tracking-[-0.075em] text-[#071B49]">

              We build

              <br />

              <span className="text-blue-600">
                digital
              </span>

              <br />

              experiences.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-500 sm:mt-9 sm:text-lg">

              Thoughtfully designed. Precisely engineered.

              <br className="hidden sm:block" />

              Built to make businesses stand out in a crowded digital world.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:mt-11">

              <Link
                to="/get-quote"
                className="group inline-flex min-h-14 items-center justify-center gap-3 bg-blue-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-[#071B49]"
              >
                Start your project

                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <a
                href="#selected-work"
                className="inline-flex min-h-14 items-center justify-center gap-3 border border-[#D8E2F3] bg-white px-7 py-4 text-sm font-semibold text-[#071B49] transition hover:border-blue-600 hover:text-blue-600"
              >
                Explore our work
                <ArrowDown size={16} />
              </a>
            </div>

            {/* Stats */}

            <div className="mt-8 grid grid-cols-3 border-t border-[#D8E2F3] pt-6 sm:mt-10">

              <div>
                <p className="text-2xl font-bold text-[#071B49] sm:text-3xl">
                  {projects.length.toString().padStart(2, "0")}
                </p>

                <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-400 sm:text-xs">
                  Projects
                </p>
              </div>

              <div className="border-l border-[#D8E2F3] pl-5 sm:pl-8">
                <p className="text-2xl font-bold text-blue-600 sm:text-3xl">
                  360°
                </p>

                <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-400 sm:text-xs">
                  Digital thinking
                </p>
              </div>

              <div className="border-l border-[#D8E2F3] pl-5 sm:pl-8">
                <p className="text-2xl font-bold text-[#071B49] sm:text-3xl">
                  100%
                </p>

                <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-400 sm:text-xs">
                  Purpose driven
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[650px] lg:ml-auto"
          >

            {/* Frame */}

            <div className="absolute -inset-4 border border-blue-200 sm:-inset-6" />

            <div className="relative overflow-hidden border border-[#DCE5F5] bg-white shadow-[0_30px_90px_rgba(7,27,73,0.12)]">

              {/* Browser bar */}

              <div className="flex items-center gap-3 border-b border-slate-100 bg-[#F8FAFF] px-4 py-4 sm:px-6">

                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                </div>

                <div className="flex-1 border border-slate-200 bg-white px-3 py-2 text-[10px] text-slate-400 sm:text-xs">
                  webqenzo.com
                </div>
              </div>

              {/* Visual */}

              <div className="relative min-h-[350px] overflow-hidden bg-[#071B49] p-6 sm:min-h-[470px] sm:p-10">

                {/* Background grid */}

                <div
                  className="absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* Blue circle */}

                <div className="absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-3xl" />

                <div className="relative flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 items-center justify-center bg-white text-blue-600">
                      <Code2 size={19} />
                    </div>

                    <span className="text-sm font-bold tracking-wide text-white">
                      WEBQENZO
                    </span>
                  </div>

                  <span className="border border-white/20 px-3 py-2 text-[9px] font-semibold uppercase tracking-widest text-blue-200 sm:text-xs">
                    Digital studio
                  </span>
                </div>

                <div className="relative py-12 sm:py-16">

                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-300 sm:text-xs">
                    Design · Development · Experience
                  </p>

                  <h2 className="mt-6 text-4xl font-bold leading-[0.95] tracking-[-0.07em] text-white sm:text-6xl lg:text-7xl">

                    Digital

                    <br />

                    <span className="text-blue-400">
                      excellence.
                    </span>
                  </h2>

                  <p className="mt-6 max-w-sm text-sm leading-7 text-blue-100/60">
                    We transform ambitious ideas into meaningful digital
                    experiences that move businesses forward.
                  </p>

                  {/* Decorative elements */}

                  <div className="mt-8 flex items-center gap-3">

                    <div className="h-10 w-10 bg-blue-600" />

                    <div className="h-10 w-10 border border-white/20 bg-white/5" />

                    <div className="h-10 w-10 border border-white/20 bg-white/5" />

                    <span className="ml-2 text-xs text-blue-200/50">
                      Crafted with purpose
                    </span>
                  </div>
                </div>

                <div className="relative flex items-center justify-between border-t border-white/10 pt-5">

                  <span className="text-xs text-blue-200/50">
                    A better digital experience
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center bg-blue-600 text-white">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </div>
            </div>

            {/* Floating label */}

            <div className="absolute -bottom-6 right-2 border border-blue-100 bg-white p-4 shadow-xl sm:-right-6">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center bg-blue-50 text-blue-600">
                  <Sparkles size={20} />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-blue-600">
                    Our philosophy
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#071B49]">
                    Design with purpose.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SELECTED WORK
      ====================================================== */}

      <section
        id="selected-work"
        className="scroll-mt-20 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-[1440px]">

          <div className="grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">

            <Reveal>

              <Eyebrow>Selected projects</Eyebrow>

              <h2 className="mt-6 text-4xl font-bold leading-[1.02] tracking-[-0.06em] text-[#071B49] sm:text-6xl">

                Made to make

                <br />

                <span className="text-blue-600">
                  an impact.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="max-w-lg text-sm leading-8 text-slate-500 lg:justify-self-end sm:text-base">

                Every project starts with a clear purpose.

                <br />

                Explore digital experiences designed to connect,
                perform and create lasting value.
              </p>
            </Reveal>
          </div>

          {/* PROJECTS */}

          {projects.length > 0 && (
            <>
              <div className="mt-5 flex gap-2 overflow-x-auto pb-3 sm:flex-wrap sm:overflow-visible">

                {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => { setActiveFilter(filter); setShowAllProjects(false); }}
                    className={`shrink-0 border px-5 py-3 text-xs font-semibold transition ${
                      activeFilter === filter
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-slate-200 bg-white text-slate-500 hover:border-blue-600 hover:text-blue-600"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between border-b border-slate-100 pb-4">

                <p className="text-sm text-slate-400">
                  Showing{" "}
                  <span className="font-bold text-[#071B49]">
                    {visibleProjects.length}
                  </span>{" "}
                  projects
                </p>

                <span className="hidden text-xs uppercase tracking-widest text-slate-400 sm:block">
                  Explore live experiences
                </span>
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:gap-7">

                {visibleProjects.slice(0, showAllProjects ? 16 : 8).map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    
                  />
                ))}
              </div>

              {activeFilter === "All" && (
                <div className="mt-12 flex flex-col items-center gap-4">

                  <p className="text-sm text-slate-400">
                    Showing {showAllProjects ? visibleProjects.length : Math.min(8, visibleProjects.length)} of {visibleProjects.length} projects
                  </p>

                  <button
                    type="button"
                    onClick={() => setShowAllProjects((previous) => !previous)}
                    className="inline-flex min-h-14 items-center gap-3 border border-blue-600 bg-blue-600 px-8 py-4 text-sm font-bold text-white transition hover:bg-[#071B49]"
                  >
                    {showAllProjects ? "Show Less Projects" : "Explore More Projects"}
                    <ArrowRight size={17} />
                  </button>

                </div>
              )}
            </>
          )}

          {/* PREMIUM EMPTY STATE */}

          {projects.length === 0 && (
            <Reveal className="mt-8">

              <div className="relative overflow-hidden border border-[#DCE5F5] bg-[#F5F8FF]">

                <div className="absolute right-0 top-0 h-full w-[40%] bg-gradient-to-l from-blue-100/60 to-transparent" />

                <div className="relative grid items-center gap-10 px-6 py-14 sm:px-12 sm:py-20 lg:grid-cols-[1fr_auto] lg:px-20">

                  <div>

                    <div className="inline-flex items-center gap-3 border border-blue-200 bg-white px-4 py-2">

                      <span className="h-2 w-2 bg-blue-600" />

                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">
                        Portfolio in progress
                      </span>
                    </div>

                    <h3 className="mt-5 text-4xl font-bold leading-[1.03] tracking-[-0.06em] text-[#071B49] sm:text-6xl">

                      A collection

                      <br />

                      of what's

                      <span className="text-blue-600">
                        possible.
                      </span>
                    </h3>

                    <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">

                      We're preparing a curated collection of our
                      digital projects. Each experience will showcase
                      our approach to design, technology and business.

                    </p>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">

                      <Link
                        to="/get-quote"
                        className="inline-flex min-h-12 items-center justify-center gap-3 bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#071B49]"
                      >
                        Let's build something
                        <ArrowUpRight size={17} />
                      </Link>

                      <Link
                        to="/services"
                        className="inline-flex min-h-12 items-center justify-center gap-3 border border-[#D8E2F3] bg-white px-6 py-3 text-sm font-semibold text-[#071B49] transition hover:border-blue-600 hover:text-blue-600"
                      >
                        Explore services
                        <ArrowRight size={17} />
                      </Link>
                    </div>
                  </div>

                  {/* Decorative visual */}

                  <div className="relative hidden h-[300px] w-[300px] items-center justify-center lg:flex">

                    <div className="absolute inset-0 border border-blue-200" />

                    <div className="absolute inset-8 border border-blue-300" />

                    <div className="absolute inset-16 bg-blue-600" />

                    <div className="relative flex h-20 w-20 items-center justify-center bg-white text-blue-600 shadow-xl">
                      <Layers3 size={32} />
                    </div>

                    <div className="absolute -right-4 top-10 bg-[#071B49] px-4 py-2 text-xs font-bold text-white">
                      WQ
                    </div>

                    <div className="absolute -bottom-4 left-10 bg-white px-4 py-2 text-xs font-bold text-blue-600 shadow-lg">
                      DIGITAL
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section className="bg-[#F5F8FF] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">

          {/* LEFT */}

          <Reveal>

            <Eyebrow>Our capabilities</Eyebrow>

            <h2 className="mt-5 text-4xl font-bold leading-[1.03] tracking-[-0.06em] text-[#071B49] sm:text-6xl">

              More than

              <br />

              just websites.

              <br />

              <span className="text-blue-600">
                Digital solutions.
              </span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-8 text-slate-500 sm:text-base">

              From the first idea to the final pixel,
              we bring together creativity, strategy
              and technology to build meaningful digital products.

            </p>

            <Link
              to="/services"
              className="mt-6 inline-flex items-center gap-3 text-sm font-bold text-blue-600 transition hover:gap-5"
            >
              Discover all services
              <ArrowRight size={17} />
            </Link>
          </Reveal>

          {/* RIGHT */}

          <div className="border-t border-[#D8E2F3]">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group border-b border-[#D8E2F3] py-5 transition-all duration-300 hover:bg-white hover:px-5 sm:py-4"
                >

                  <div className="grid gap-4 sm:grid-cols-[60px_1fr_auto] sm:items-center">

                    <span className="text-xs font-semibold text-blue-600">
                      / {service.number}
                    </span>

                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-[#071B49] sm:text-2xl">
                        {service.title}
                      </h3>

                      <p className="mt-2 max-w-md text-sm leading-7 text-slate-500">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center border border-blue-100 bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={21} strokeWidth={1.5} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR STANDARD
      ====================================================== */}

      <section className="bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

        <div className="mx-auto grid max-w-[1440px] items-start gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">

          <Reveal>

            <Eyebrow>The WebQenzo standard</Eyebrow>

            <h2 className="mt-5 text-4xl font-bold leading-[1.04] tracking-[-0.06em] text-[#071B49] sm:text-6xl">

              Details matter.

              <br />

              <span className="text-blue-600">
                Everything matters.
              </span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-8 text-slate-500 sm:text-base">

              Great digital experiences are built through
              thoughtful decisions at every level.
              We focus on the details that make your
              website easier to use, faster and more memorable.

            </p>
          </Reveal>

          <div className="divide-y divide-slate-100 border-y border-slate-100">

            {principles.map((principle, index) => (
              <Reveal key={principle} delay={index * 0.05}>

                <div className="flex items-center gap-4 py-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-blue-50 text-blue-600">
                    <Check size={18} strokeWidth={2.5} />
                  </div>

                  <p className="flex-1 text-sm font-semibold text-[#071B49] sm:text-base">
                    {principle}
                  </p>

                  <span className="text-xs font-semibold text-slate-300">
                    0{index + 1}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="px-5 pb-8 sm:px-8 sm:pb-10 lg:px-12">

        <div className="relative mx-auto max-w-[1440px] overflow-hidden bg-[#071B49] px-5 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">

          {/* Background */}

          <div className="absolute right-[-15%] top-[-30%] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[100px]" />

          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

            <Reveal>

              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">

                <Sparkles size={15} />

                Your next chapter starts here
              </div>

              <h2 className="mt-6 text-4xl font-bold leading-[1.02] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">

                Let's create

                <br />

                <span className="text-blue-400">
                  something great.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-8 text-blue-100/60 sm:text-base">

                Tell us about your vision, your business
                and what you want to achieve.
                Let's build something worth remembering.

              </p>
            </Reveal>

            <Link
              to="/get-quote"
              className="group inline-flex min-h-14 items-center justify-center gap-3 self-start bg-white px-7 py-4 text-sm font-bold text-[#071B49] transition hover:bg-blue-500 hover:text-white lg:self-end"
            >
              Start a conversation

              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          <div className="relative mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">

            <p className="text-xs text-blue-200/50">
              WebQenzo · Digital design & development
            </p>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-semibold text-white transition hover:text-blue-300"
            >
              Explore our services
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
</main>
  );
}

export default Portfolio;





