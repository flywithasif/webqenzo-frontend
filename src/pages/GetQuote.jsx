import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Clock3,
  Code2,
  FileText,
  Globe2,
  Layers3,
  Mail,
  MessageCircle,
  Palette,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  UserRound,
  WalletCards,
  X,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const services = [
  "Business Website",
  "E-commerce Website",
  "Landing Page",
  "Booking / Appointment Website",
  "UI/UX Design",
  "Website Redesign",
  "Custom Web Application",
  "SEO & Performance",
  "Maintenance & Support",
  "Not Sure Yet",
];

const budgets = [
  "₹5,000 – ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000+",
  "Let's discuss",
];

const timelines = [
  "As soon as possible",
  "1–2 weeks",
  "2–4 weeks",
  "1–2 months",
  "Flexible",
  "Not sure yet",
];

const expectations = [
  {
    icon: MessageCircle,
    title: "Clear conversation",
    text: "We first understand what you actually need instead of immediately pushing a predefined package.",
  },
  {
    icon: FileText,
    title: "Clear scope",
    text: "The project can be discussed around requirements, deliverables, priorities and practical expectations.",
  },
  {
    icon: ShieldCheck,
    title: "Professional handling",
    text: "Your business information and project requirements should be treated with care and professionalism.",
  },
  {
    icon: Target,
    title: "Business-focused direction",
    text: "The conversation stays connected to what the website needs to accomplish for your business.",
  },
];

const afterSubmit = [
  {
    number: "01",
    title: "We review",
    text: "Your project information and requirements are reviewed.",
  },
  {
    number: "02",
    title: "We understand",
    text: "The important goals, scope and priorities are clarified.",
  },
  {
    number: "03",
    title: "We discuss",
    text: "The next steps, project direction and practical expectations can be discussed.",
  },
  {
    number: "04",
    title: "We plan",
    text: "If the project is a fit, the next stage can be structured around your requirements.",
  },
];

const faqs = [
  {
    question: "Do I need to know exactly what website I want?",
    answer:
      "No. You can describe your business, what you currently have and what you want to improve. The project direction can be clarified during the initial discussion.",
  },
  {
    question: "Is the quote request free?",
    answer:
      "The enquiry form is intended to start a project conversation. Pricing and scope can be discussed after understanding the requirements.",
  },
  {
    question: "Can I request only a redesign?",
    answer:
      "Yes. Website redesign and UI/UX work can be discussed separately from a complete new website project.",
  },
  {
    question: "Can you build an e-commerce website?",
    answer:
      "Yes. E-commerce requirements can be discussed including product presentation, shopping experience, integrations and the technology or platform appropriate for the project.",
  },
  {
    question: "What if my budget is not fixed?",
    answer:
      "That's completely fine. You can select 'Let's discuss' and explain your requirements so the conversation can focus on the project scope first.",
  },
];

function FieldLabel({ children, required = false }) {
  return (
    <label className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
      {children}
      {required && <span className="ml-1 text-cyan-300">*</span>}
    </label>
  );
}

function GetQuote() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ContactPage",
          "@id": "https://webqenzo.com/get-quote#contact-page",
          "url": "https://webqenzo.com/get-quote",
          "name": "Get a Website Quote from WebQenzo",
          "description":
            "Start a website project with WebQenzo. Share your business, website requirements, budget and timeline to begin a project conversation.",
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
          }
        },
        {
          "@type": "FAQPage",
          "@id": "https://webqenzo.com/get-quote#faq",
          "url": "https://webqenzo.com/get-quote",
          "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-page-schema", "get-quote");
    script.textContent = JSON.stringify(structuredData);

    document.head.appendChild(script);

    return () => {
      const existingScript = document.head.querySelector(
        'script[data-page-schema="get-quote"]'
      );

      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    website: "",
    message: "",
  });

  const updateField = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const resetForm = () => {
    setSubmitted(false);
    setForm({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      timeline: "",
      website: "",
      message: "",
    });
  };

  return (
    <>
      <SEO
        title="Get a Website Quote — Web Design & Development"
        description="Start your website project with WebQenzo. Share your business goals, website requirements, budget and timeline to discuss a professional web design and development project."
        path="/get-quote"
      />

      <main className="overflow-hidden bg-[#05070B] text-white">
      {/* =====================================================
          01 — CINEMATIC HERO
      ====================================================== */}
      <section className="relative isolate min-h-[720px] overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-15%] top-[-10%] h-[600px] w-[600px] rounded-full bg-blue-600/[0.11] blur-[150px]" />

          <div className="absolute right-[-12%] top-[10%] h-[550px] w-[550px] rounded-full bg-cyan-400/[0.08] blur-[150px]" />

          <div className="absolute bottom-[-25%] left-[35%] h-[500px] w-[500px] rounded-full bg-indigo-500/[0.07] blur-[150px]" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1500px] px-5 pb-20 pt-24 sm:px-8 lg:px-12 lg:pt-32">
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="max-w-3xl"
            >
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-medium text-slate-300 backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,.8)]" />
                Start a project with WebQenzo
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Get a Quote
              </p>

              <h1 className="mt-5 text-5xl font-black leading-[0.94] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                Let's build something
                <span className="block bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
                  worth remembering.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                Tell us about your business, your idea or the digital
                experience you want to improve. The more context you share,
                the better we can understand where to begin.
              </p>

              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-cyan-300" />
                  Professional enquiry
                </span>

                <span className="flex items-center gap-2">
                  <MessageCircle size={16} className="text-cyan-300" />
                  Clear communication
                </span>

                <span className="flex items-center gap-2">
                  <Target size={16} className="text-cyan-300" />
                  Business-focused
                </span>
              </div>
            </motion.div>

            {/* 3D enquiry visual */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
                rotateY: 9,
                rotateX: 4,
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
              className="relative mx-auto w-full max-w-[570px] [perspective:1800px]"
            >
              <div className="relative aspect-square [transform-style:preserve-3d]">
                <div className="absolute inset-[7%] rounded-[44px] border border-white/10 bg-white/[0.025] shadow-[0_50px_120px_rgba(0,0,0,.55)] backdrop-blur-xl" />

                <div className="absolute inset-[14%] rounded-[38px] border border-blue-400/20 bg-gradient-to-br from-blue-500/[0.13] via-transparent to-cyan-400/[0.08] [transform:translateZ(35px)]" />

                <div className="absolute inset-[22%] rounded-[32px] border border-white/10 bg-[#080D15]/95 p-6 shadow-[inset_0_0_80px_rgba(37,99,235,.08)] [transform:translateZ(75px)]">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-600">
                      Project Brief
                    </span>

                    <Sparkles size={17} className="text-cyan-300" />
                  </div>

                  <div className="mt-9 space-y-3">
                    {[
                      ["01", "Business"],
                      ["02", "Goals"],
                      ["03", "Scope"],
                      ["04", "Budget"],
                      ["05", "Timeline"],
                    ].map(([number, title]) => (
                      <div
                        key={number}
                        className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5"
                      >
                        <span className="text-[9px] font-bold text-blue-400">
                          {number}
                        </span>

                        <span className="text-xs font-medium text-slate-300">
                          {title}
                        </span>

                        <Check
                          size={13}
                          className="ml-auto text-cyan-300"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="h-px bg-white/10" />

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-[9px] uppercase tracking-[0.2em] text-slate-600">
                        WebQenzo
                      </span>

                      <span className="text-[9px] text-slate-600">
                        Digital Brief
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute -left-1 top-[18%] rounded-2xl border border-white/10 bg-[#0B111C]/90 px-4 py-3 shadow-2xl backdrop-blur-xl [transform:translateZ(110px)] sm:-left-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                      <BriefcaseBusiness size={17} />
                    </div>

                    <div>
                      <p className="text-[10px] text-slate-600">
                        First step
                      </p>

                      <p className="text-xs font-semibold text-white">
                        Tell us your idea
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-1 bottom-[18%] rounded-2xl border border-white/10 bg-[#0B111C]/90 px-4 py-3 shadow-2xl backdrop-blur-xl [transform:translateZ(125px)] sm:-right-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                      <Rocket size={17} />
                    </div>

                    <div>
                      <p className="text-[10px] text-slate-600">
                        Next step
                      </p>

                      <p className="text-xs font-semibold text-white">
                        Shape the project
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
          02 — TRUST STRIP
      ====================================================== */}
      <section className="border-y border-white/[0.07] bg-[#080C13]">
        <div className="mx-auto grid max-w-[1500px] gap-px px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
          {[
            ["01", "Understand", "Your business first"],
            ["02", "Clarify", "Requirements & scope"],
            ["03", "Create", "Design & development"],
            ["04", "Grow", "Launch & improvement"],
          ].map(([number, title, text]) => (
            <div
              key={number}
              className="flex items-center gap-4 border-white/[0.07] py-7 md:border-r md:px-7 lg:py-9"
            >
              <span className="text-xs font-bold text-blue-400">{number}</span>

              <div>
                <p className="text-sm font-bold text-white">{title}</p>
                <p className="mt-1 text-xs text-slate-600">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          03 — MAIN FORM
      ====================================================== */}
      <section
        aria-labelledby="project-enquiry-heading"
        className="relative bg-[#05070B]"
      >
        <div className="pointer-events-none absolute left-1/2 top-[15%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/[0.045] blur-[130px]" />

        <div className="relative mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          {!submitted ? (
            <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
              {/* Form intro */}
              <div className="lg:sticky lg:top-28 lg:self-start">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                  Project enquiry
                </p>

                <h2
                  id="project-enquiry-heading"
                  className="mt-5 text-4xl font-black tracking-[-0.05em] sm:text-5xl"
                >
                  Tell us what you're building.
                </h2>

                <p className="mt-6 text-sm leading-7 text-slate-500">
                  You do not need to write a perfect project brief. Just give
                  us enough information to understand your business and what
                  you are looking for.
                </p>

                <div className="mt-10 space-y-4">
                  {[
                    {
                      icon: ShieldCheck,
                      title: "Your information",
                      text: "Used to understand your enquiry and project requirements.",
                    },
                    {
                      icon: MessageCircle,
                      title: "Your conversation",
                      text: "Focused on requirements, scope and practical next steps.",
                    },
                    {
                      icon: BadgeCheck,
                      title: "Your expectations",
                      text: "We aim to keep project discussions clear and realistic.",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="flex gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/[0.07] text-cyan-300">
                          <Icon size={18} />
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-slate-200">
                            {item.title}
                          </p>

                          <p className="mt-1 text-xs leading-6 text-slate-600">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Actual form */}
              <form
                aria-label="WebQenzo project enquiry form"
                onSubmit={handleSubmit}
                className="rounded-[36px] border border-white/[0.09] bg-gradient-to-br from-[#0B111B] to-[#070A10] p-6 shadow-[0_40px_120px_rgba(0,0,0,.38)] sm:p-9 lg:p-12"
              >
                {/* Section A */}
                <div>
                  <div className="flex items-center gap-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-xs font-bold text-blue-300">
                      01
                    </span>

                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-600">
                        About you
                      </p>

                      <h3 className="mt-1 text-xl font-bold">
                        Let's put a name to the project.
                      </h3>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <div>
                      <FieldLabel required>Full name</FieldLabel>

                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        placeholder="Your name"
                        className="w-full rounded-2xl border border-white/[0.08] bg-white/[0.035] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-cyan-400/40 focus:bg-white/[0.05]"
                      />
                    </div>

                    <div>
                      <FieldLabel required>Email address</FieldLabel>

                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder="you@company.com"
                        className="w-full rounded-2xl border border-white/[0.08] bg-white/[0.035] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-cyan-400/40 focus:bg-white/[0.05]"
                      />
                    </div>

                    <div>
                      <FieldLabel>Phone / WhatsApp</FieldLabel>

                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full rounded-2xl border border-white/[0.08] bg-white/[0.035] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-cyan-400/40 focus:bg-white/[0.05]"
                      />
                    </div>

                    <div>
                      <FieldLabel>Company / Brand</FieldLabel>

                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) =>
                          updateField("company", e.target.value)
                        }
                        placeholder="Your business / brand"
                        className="w-full rounded-2xl border border-white/[0.08] bg-white/[0.035] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-cyan-400/40 focus:bg-white/[0.05]"
                      />
                    </div>
                  </div>
                </div>

                <div className="my-12 h-px bg-white/[0.07]" />

                {/* Section B */}
                <div>
                  <div className="flex items-center gap-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-xs font-bold text-blue-300">
                      02
                    </span>

                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-600">
                        Project
                      </p>

                      <h3 className="mt-1 text-xl font-bold">
                        What do you need?
                      </h3>
                    </div>
                  </div>

                  <div className="mt-8">
                    <FieldLabel required>Primary service</FieldLabel>

                    <div className="grid gap-2 sm:grid-cols-2">
                      {services.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => updateField("service", service)}
                          className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition ${
                            form.service === service
                              ? "border-cyan-400/30 bg-cyan-400/[0.07] text-white"
                              : "border-white/[0.07] bg-white/[0.02] text-slate-500 hover:border-white/[0.14] hover:bg-white/[0.04] hover:text-slate-300"
                          }`}
                        >
                          <span>{service}</span>

                          {form.service === service && (
                            <Check size={15} className="text-cyan-300" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="my-12 h-px bg-white/[0.07]" />

                {/* Section C */}
                <div>
                  <div className="flex items-center gap-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-xs font-bold text-blue-300">
                      03
                    </span>

                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-600">
                        Scope
                      </p>

                      <h3 className="mt-1 text-xl font-bold">
                        Help us understand the project.
                      </h3>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <div>
                      <FieldLabel>Approximate budget</FieldLabel>

                      <div className="relative">
                        <WalletCards
                          size={17}
                          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"
                        />

                        <select
                          value={form.budget}
                          onChange={(e) =>
                            updateField("budget", e.target.value)
                          }
                          className="w-full appearance-none rounded-2xl border border-white/[0.08] bg-white/[0.035] px-11 py-3.5 text-sm text-slate-300 outline-none focus:border-cyan-400/40"
                        >
                          <option value="" className="bg-[#080D15]">
                            Select a range
                          </option>

                          {budgets.map((budget) => (
                            <option
                              key={budget}
                              value={budget}
                              className="bg-[#080D15]"
                            >
                              {budget}
                            </option>
                          ))}
                        </select>

                        <ChevronDown
                          size={16}
                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-600"
                        />
                      </div>
                    </div>

                    <div>
                      <FieldLabel>Preferred timeline</FieldLabel>

                      <div className="relative">
                        <Clock3
                          size={17}
                          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"
                        />

                        <select
                          value={form.timeline}
                          onChange={(e) =>
                            updateField("timeline", e.target.value)
                          }
                          className="w-full appearance-none rounded-2xl border border-white/[0.08] bg-white/[0.035] px-11 py-3.5 text-sm text-slate-300 outline-none focus:border-cyan-400/40"
                        >
                          <option value="" className="bg-[#080D15]">
                            Select timeline
                          </option>

                          {timelines.map((timeline) => (
                            <option
                              key={timeline}
                              value={timeline}
                              className="bg-[#080D15]"
                            >
                              {timeline}
                            </option>
                          ))}
                        </select>

                        <ChevronDown
                          size={16}
                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-600"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <FieldLabel>Existing website</FieldLabel>

                      <div className="relative">
                        <Globe2
                          size={17}
                          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"
                        />

                        <input
                          type="url"
                          value={form.website}
                          onChange={(e) =>
                            updateField("website", e.target.value)
                          }
                          placeholder="https://yourwebsite.com"
                          className="w-full rounded-2xl border border-white/[0.08] bg-white/[0.035] px-11 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-700 focus:border-cyan-400/40 focus:bg-white/[0.05]"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <FieldLabel required>
                        Tell us about your project
                      </FieldLabel>

                      <textarea
                        required
                        rows={7}
                        value={form.message}
                        onChange={(e) =>
                          updateField("message", e.target.value)
                        }
                        placeholder="What does your business do? What do you want to build or improve? Who is the website for? What would you like it to achieve?"
                        className="w-full resize-none rounded-2xl border border-white/[0.08] bg-white/[0.035] px-4 py-4 text-sm leading-7 text-white outline-none transition placeholder:text-slate-700 focus:border-cyan-400/40 focus:bg-white/[0.05]"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="mt-10 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.025] p-5">
                  <div className="flex gap-3">
                    <ShieldCheck
                      size={18}
                      className="mt-0.5 shrink-0 text-cyan-300"
                    />

                    <p className="text-xs leading-6 text-slate-500">
                      By submitting this enquiry, you are starting a project
                      conversation with WebQenzo. Please share only the
                      information relevant to your project requirements.
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="group mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-sm font-bold text-[#05070B] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(255,255,255,.08)]"
                >
                  Send Project Enquiry

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#05070B] text-white transition group-hover:translate-x-1">
                    <Send size={14} />
                  </span>
                </button>
              </form>
            </div>
          ) : (
            /* =================================================
               SUCCESS STATE
            ================================================== */
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto max-w-5xl"
            >
              <div className="relative overflow-hidden rounded-[40px] border border-cyan-400/15 bg-gradient-to-br from-[#0B1522] via-[#080D15] to-[#071015] p-8 text-center shadow-[0_40px_120px_rgba(0,0,0,.45)] sm:p-14 lg:p-20">
                <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/[0.07] blur-[100px]" />

                <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-[26px] border border-cyan-400/20 bg-cyan-400/[0.08]">
                  <Check size={35} className="text-cyan-300" />
                </div>

                <p className="relative mt-8 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                  Enquiry prepared
                </p>

                <h2 className="relative mt-5 text-4xl font-black tracking-[-0.05em] sm:text-6xl">
                  Thank you, {form.name || "there"}.
                </h2>

                <p className="relative mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400">
                  Your project brief has been captured in this frontend
                  experience. Once the WebQenzo backend is connected, this
                  enquiry can be securely sent and stored automatically.
                </p>

                <div className="relative mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-4">
                  {afterSubmit.map((item) => (
                    <div
                      key={item.number}
                      className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 text-left"
                    >
                      <span className="text-[10px] font-bold text-blue-400">
                        {item.number}
                      </span>

                      <p className="mt-3 text-sm font-bold text-white">
                        {item.title}
                      </p>

                      <p className="mt-2 text-xs leading-6 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="relative mt-10 flex flex-wrap justify-center gap-3">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.07]"
                  >
                    <ArrowRight size={16} className="rotate-180" />
                    Submit another enquiry
                  </button>

                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#05070B]"
                  >
                    Explore our work
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* =====================================================
          04 — WHY THIS FORM
      ====================================================== */}
      <section className="border-y border-white/[0.07] bg-[#080C13]">
        <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                Why we ask
              </p>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] sm:text-6xl">
                Better questions create better project conversations.
              </h2>

              <p className="mt-6 max-w-lg text-base leading-8 text-slate-500">
                The form is intentionally detailed enough to understand your
                project without turning the first interaction into a lengthy
                technical document.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {expectations.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-7 transition duration-500 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.045]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/[0.08] text-blue-300">
                      <Icon size={20} />
                    </div>

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
          05 — WHAT HAPPENS NEXT
      ====================================================== */}
      <section className="bg-[#05070B]">
        <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
              After your enquiry
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black tracking-[-0.05em] sm:text-6xl">
              What happens after you click send?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-500">
              The enquiry is the beginning of the conversation, not the end of
              it.
            </p>
          </div>

          <div className="relative mx-auto mt-16 grid max-w-6xl gap-4 md:grid-cols-4">
            <div className="pointer-events-none absolute left-[12%] right-[12%] top-12 hidden h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent md:block" />

            {afterSubmit.map((item) => (
              <div
                key={item.number}
                className="relative rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-7"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/10 bg-blue-500/[0.07] text-xs font-bold text-blue-300">
                  {item.number}
                </div>

                <h3 className="mt-8 text-xl font-black">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          06 — TRUST / TRANSPARENCY
      ====================================================== */}
      <section className="border-y border-white/[0.07] bg-[#080C13]">
        <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-5xl rounded-[38px] border border-white/[0.08] bg-gradient-to-br from-[#0B1220] to-[#071015] p-8 shadow-[0_35px_100px_rgba(0,0,0,.4)] sm:p-12 lg:p-16">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/[0.07] text-cyan-300">
              <ShieldCheck size={25} />
            </div>

            <p className="mt-10 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
              Transparency matters
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              We would rather understand the project properly than promise
              something too early.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400">
              Every project is different. Requirements, complexity, number of
              pages, integrations, content and desired functionality can all
              affect the scope. That is why project discussions should happen
              around the actual requirements instead of assumptions.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {[
                "Scope before assumptions",
                "Requirements before estimates",
                "Communication before execution",
                "Quality before unnecessary speed",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3"
                >
                  <Check size={16} className="text-cyan-300" />

                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          07 — SERVICES SNAPSHOT
      ====================================================== */}
      <section className="bg-[#05070B]">
        <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                What we can build
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.05em] sm:text-6xl">
                Different business. Different digital requirement.
              </h2>
            </div>

            <Link
              to="/services"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-5 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
            >
              Explore services
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Globe2,
                title: "Business Websites",
                text: "Professional digital presence for businesses and brands.",
              },
              {
                icon: Layers3,
                title: "E-commerce",
                text: "Product-focused shopping experiences built around your brand.",
              },
              {
                icon: Palette,
                title: "UI / UX",
                text: "Thoughtful interfaces and experiences designed around users.",
              },
              {
                icon: Code2,
                title: "Web Applications",
                text: "Custom digital products for more complex requirements.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-7"
                >
                  <Icon size={22} className="text-cyan-300" />

                  <h3 className="mt-8 text-xl font-bold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          08 — FAQ
      ====================================================== */}
      <section className="border-y border-white/[0.07] bg-[#080C13]">
        <div className="mx-auto max-w-[1050px] px-5 py-24 sm:px-8 lg:py-32">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
              Frequently asked
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] sm:text-6xl">
              Before you send your enquiry.
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
          09 — FINAL CTA
      ====================================================== */}
      <section className="bg-[#05070B]">
        <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#0D1726] via-[#09101B] to-[#071015] p-8 text-center shadow-[0_40px_120px_rgba(0,0,0,.4)] sm:p-14 lg:p-20">
            <div className="pointer-events-none absolute left-1/2 top-[-100px] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-[110px]" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] text-cyan-300">
                <Sparkles size={24} />
              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
                Your next digital chapter
              </p>

              <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black tracking-[-0.05em] sm:text-6xl">
                The first step is simply starting the conversation.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-500">
                You bring the business idea. We can explore what the digital
                experience should become.
              </p>

              <a
                href="#top"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#05070B] transition hover:-translate-y-1"
              >
                Start Your Enquiry
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}

export default GetQuote;