import { motion } from "framer-motion";
import SEO from "../components/SEO";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  Check,
  Code2,
  Dumbbell,
  HeartPulse,
  Monitor,
  MousePointer2,
  Palette,
  Play,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Stethoscope,
  Scale,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "01",
    name: "MediCare",
    category: "Healthcare",
    type: "Doctor / Clinic Website",
    description:
      "A clean, trust-focused healthcare experience designed around services, credibility and easy patient contact.",
    accent: "blue",
    tags: ["Healthcare", "Responsive", "Booking Ready"],
    path: "/portfolio/medicare",
  },
  {
    id: "02",
    name: "FitZone",
    category: "Fitness",
    type: "Gym / Fitness Website",
    description:
      "A bold digital experience designed to communicate energy, programs, facilities and membership intent.",
    accent: "cyan",
    tags: ["Fitness", "Membership", "Lead Generation"],
    path: "/portfolio/fitzone",
  },
  {
    id: "03",
    name: "LexPro",
    category: "Legal",
    type: "Advocate / Law Firm Website",
    description:
      "A refined professional interface focused on authority, clarity, services and consultation enquiries.",
    accent: "silver",
    tags: ["Legal", "Professional", "Enquiry"],
    path: "/portfolio/lexpro",
  },
  {
    id: "04",
    name: "FinEdge",
    category: "Finance",
    type: "CA / Accounting Website",
    description:
      "A structured financial-services website designed to communicate expertise without unnecessary complexity.",
    accent: "blue",
    tags: ["Finance", "Services", "Trust"],
    path: "/portfolio/finedge",
  },
  {
    id: "05",
    name: "BeatHouse",
    category: "Events",
    type: "DJ / Event Website",
    description:
      "A visual-first event experience built around atmosphere, media, upcoming events and enquiries.",
    accent: "cyan",
    tags: ["Events", "Creative", "Media"],
    path: "/portfolio/beathouse",
  },
  {
    id: "06",
    name: "ThreadRare",
    category: "E-commerce",
    type: "Fashion E-commerce",
    description:
      "A modern storefront concept focused on product discovery, visual merchandising and a smooth shopping journey.",
    accent: "blue",
    tags: ["E-commerce", "Fashion", "Shopify"],
    path: "/portfolio/threadrare",
  },
];

const filters = [
  "All",
  "Healthcare",
  "Fitness",
  "Legal",
  "Finance",
  "Events",
  "E-commerce",
];

const deliverables = [
  {
    icon: Palette,
    title: "UI / UX Design",
    text: "Visual systems, page hierarchy, interaction patterns and responsive layouts.",
  },
  {
    icon: Code2,
    title: "Frontend Development",
    text: "Modern, responsive interfaces built with clean and maintainable code.",
  },
  {
    icon: Store,
    title: "E-commerce",
    text: "Product experiences, collections, storefronts and conversion-focused shopping flows.",
  },
  {
    icon: Search,
    title: "SEO Foundation",
    text: "Semantic structure, metadata foundations and search-friendly page architecture.",
  },
  {
    icon: Zap,
    title: "Performance",
    text: "Lightweight experiences designed to feel fast across modern devices.",
  },
  {
    icon: Rocket,
    title: "Launch",
    text: "Deployment-ready builds with the final checks needed before going live.",
  },
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

/* =========================================================
   PROJECT PREVIEWS
========================================================= */

function HealthcarePreview() {
  return (
    <div className="h-full bg-[#f8fbff]">

      <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white">
            <HeartPulse size={14} />
          </div>

          <span className="text-[11px] font-bold text-slate-900">
            MEDICARE
          </span>
        </div>

        <div className="hidden gap-5 text-[8px] font-medium text-slate-400 sm:flex">
          <span>Doctors</span>
          <span>Services</span>
          <span>About</span>
          <span>Contact</span>
        </div>

        <div className="flex items-center gap-1.5 rounded-full bg-blue-600 px-3 py-1.5 text-[7px] font-bold text-white">
          <CalendarDays size={9} />
          Book Visit
        </div>
      </div>

      <div className="grid min-h-[300px] gap-6 p-5 sm:min-h-[390px] sm:grid-cols-[1.1fr_.9fr] sm:p-8">

        <div className="flex flex-col justify-center">

          <span className="mb-4 w-fit rounded-full bg-blue-50 px-3 py-1.5 text-[7px] font-bold uppercase tracking-wider text-blue-600">
            Trusted healthcare
          </span>

          <div className="max-w-[300px]">
            <h3 className="text-xl font-bold leading-tight tracking-[-0.05em] text-slate-900 sm:text-3xl">
              Better care.
              <br />
              <span className="text-blue-600">Closer to you.</span>
            </h3>

            <p className="mt-3 max-w-[250px] text-[8px] leading-5 text-slate-400">
              Professional healthcare services designed around patients,
              clarity and easy access.
            </p>
          </div>

          <div className="mt-5 flex gap-2">
            <div className="rounded-full bg-blue-600 px-4 py-2 text-[7px] font-bold text-white">
              Find a Doctor
            </div>

            <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[7px] font-bold text-slate-500">
              Our Services
            </div>
          </div>

          <div className="mt-7 grid grid-cols-3 gap-2">
            {[
              ["24/7", "Support"],
              ["15+", "Doctors"],
              ["10k+", "Patients"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-xl border border-slate-200 bg-white p-3"
              >
                <p className="text-[11px] font-bold text-slate-900">
                  {value}
                </p>
                <p className="mt-1 text-[7px] text-slate-400">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center">

          <div className="absolute h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative w-[82%] rounded-[22px] border border-blue-100 bg-white p-4 shadow-xl">

            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                <Stethoscope size={18} className="text-blue-600" />
              </div>

              <div>
                <p className="text-[9px] font-bold text-slate-900">
                  Dr. Sarah Wilson
                </p>
                <p className="mt-1 text-[7px] text-slate-400">
                  Senior Physician
                </p>
              </div>

              <div className="ml-auto rounded-full bg-emerald-50 px-2 py-1 text-[6px] font-bold text-emerald-600">
                Available
              </div>
            </div>

            <div className="mt-4 rounded-xl bg-blue-50 p-3">
              <div className="flex items-center justify-between">
                <span className="text-[7px] font-semibold text-blue-700">
                  Appointment
                </span>
                <CalendarDays size={12} className="text-blue-500" />
              </div>

              <div className="mt-3 flex gap-2">
                <div className="rounded-lg bg-white px-3 py-2 text-[7px] font-semibold text-slate-600">
                  10:30 AM
                </div>
                <div className="rounded-lg bg-blue-600 px-3 py-2 text-[7px] font-semibold text-white">
                  Confirm
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="h-10 rounded-lg bg-slate-50" />
              <div className="h-10 rounded-lg bg-cyan-50" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

function FitnessPreview() {
  return (
    <div className="h-full bg-[#f8fafc]">

      <div className="flex items-center justify-between bg-[#0b1220] px-5 py-4 text-white">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-400 text-[#0b1220]">
            <Dumbbell size={14} />
          </div>

          <span className="text-[11px] font-black tracking-[-0.04em]">
            FITZONE
          </span>
        </div>

        <div className="hidden gap-5 text-[8px] text-slate-500 sm:flex">
          <span>Programs</span>
          <span>Trainers</span>
          <span>Facilities</span>
        </div>

        <div className="rounded-full bg-cyan-400 px-3 py-1.5 text-[7px] font-black text-[#0b1220]">
          JOIN NOW
        </div>
      </div>

      <div className="relative min-h-[300px] overflow-hidden bg-[#0b1220] p-5 sm:min-h-[390px] sm:p-8">

        <div className="absolute right-[-80px] top-[-80px] h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative grid h-full gap-6 sm:grid-cols-[1fr_.8fr]">

          <div className="flex flex-col justify-center">

            <span className="w-fit rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-[7px] font-bold uppercase tracking-widest text-cyan-400">
              Train harder
            </span>

            <h3 className="mt-5 text-3xl font-black uppercase leading-[0.9] tracking-[-0.07em] text-white sm:text-5xl">
              Stronger
              <br />
              <span className="text-cyan-400">every day.</span>
            </h3>

            <p className="mt-4 max-w-[260px] text-[8px] leading-5 text-slate-500">
              Training programs, expert coaches and an environment built
              for serious progress.
            </p>

            <div className="mt-5 flex gap-2">
              <div className="rounded-full bg-cyan-400 px-4 py-2 text-[7px] font-black text-[#0b1220]">
                VIEW MEMBERSHIPS
              </div>

              <div className="rounded-full border border-white/10 px-4 py-2 text-[7px] font-semibold text-white">
                EXPLORE GYM
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">

            <div className="absolute h-48 w-48 rounded-full border border-cyan-400/10" />

            <div className="relative w-[75%] rotate-[-4deg] rounded-[24px] border border-white/10 bg-white/[0.05] p-4 shadow-2xl">

              <div className="flex items-center justify-between">
                <span className="text-[7px] font-bold uppercase tracking-widest text-cyan-400">
                  Today's Progress
                </span>
                <TrendingUp size={12} className="text-cyan-400" />
              </div>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-3xl font-black text-white">
                  82%
                </span>
                <span className="mb-1 text-[7px] text-slate-500">
                  completed
                </span>
              </div>

              <div className="mt-3 h-2 rounded-full bg-white/10">
                <div className="h-full w-[82%] rounded-full bg-cyan-400" />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2">
                <div className="rounded-xl bg-white/[0.05] p-3">
                  <p className="text-[6px] uppercase text-slate-600">
                    Workout
                  </p>
                  <p className="mt-1 text-[10px] font-bold text-white">
                    48 min
                  </p>
                </div>

                <div className="rounded-xl bg-white/[0.05] p-3">
                  <p className="text-[6px] uppercase text-slate-600">
                    Calories
                  </p>
                  <p className="mt-1 text-[10px] font-bold text-white">
                    426
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LegalPreview() {
  return (
    <div className="h-full bg-[#f8f8f6]">

      <div className="flex items-center justify-between border-b border-[#deded8] bg-[#f8f8f6] px-5 py-4">
        <div>
          <p className="font-serif text-[13px] font-bold tracking-[-0.04em] text-[#171717]">
            LEXPRO
          </p>
          <p className="mt-0.5 text-[6px] uppercase tracking-[0.25em] text-[#9b917f]">
            Law & Advisory
          </p>
        </div>

        <div className="hidden gap-5 text-[8px] text-[#77746d] sm:flex">
          <span>Practice Areas</span>
          <span>Our Firm</span>
          <span>Insights</span>
        </div>

        <div className="flex items-center gap-1.5 border border-[#b5aa96] px-3 py-1.5 text-[7px] font-semibold text-[#4d473c]">
          Consultation
          <ArrowUpRight size={9} />
        </div>
      </div>

      <div className="grid min-h-[300px] gap-6 p-5 sm:min-h-[390px] sm:grid-cols-[1.1fr_.9fr] sm:p-8">

        <div className="flex flex-col justify-center">

          <p className="text-[7px] font-semibold uppercase tracking-[0.25em] text-[#a09279]">
            Counsel with clarity
          </p>

          <h3 className="mt-5 max-w-[340px] font-serif text-3xl font-bold leading-[0.95] tracking-[-0.05em] text-[#171717] sm:text-5xl">
            Experience.
            <br />
            <span className="text-[#857862]">Strategy.</span>
            <br />
            Resolution.
          </h3>

          <p className="mt-4 max-w-[270px] text-[8px] leading-5 text-[#858178]">
            A professional legal experience built around trust, clarity
            and meaningful client conversations.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <div className="bg-[#171717] px-4 py-2 text-[7px] font-semibold text-white">
              Book Consultation
            </div>

            <div className="text-[7px] font-semibold text-[#857862]">
              View Practice Areas →
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">

          <div className="absolute h-52 w-52 rounded-full bg-[#b6a98f]/10 blur-3xl" />

          <div className="relative w-[78%] border border-[#d8d3c9] bg-white p-5 shadow-xl">

            <div className="flex items-center justify-between border-b border-[#eeeae3] pb-4">
              <Scale size={19} className="text-[#8c7e66]" />

              <span className="text-[7px] uppercase tracking-widest text-[#aaa59b]">
                Established practice
              </span>
            </div>

            <div className="mt-5">
              <p className="font-serif text-lg font-bold text-[#202020]">
                Practice Areas
              </p>

              <div className="mt-4 space-y-2">
                {[
                  "Corporate Law",
                  "Civil Litigation",
                  "Property Law",
                  "Legal Advisory",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between border-b border-[#f0ede7] py-2"
                  >
                    <span className="text-[7px] font-medium text-[#68645d]">
                      {item}
                    </span>
                    <ArrowUpRight size={9} className="text-[#a09279]" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

function FinancePreview() {
  return (
    <div className="h-full bg-[#f7f9fc]">

      <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white">
            <TrendingUp size={14} />
          </div>

          <span className="text-[11px] font-black text-slate-900">
            FINEDGE
          </span>
        </div>

        <div className="hidden gap-5 text-[8px] text-slate-400 sm:flex">
          <span>Services</span>
          <span>Insights</span>
          <span>About</span>
        </div>

        <div className="rounded-full bg-slate-900 px-3 py-1.5 text-[7px] font-bold text-white">
          CONSULT
        </div>
      </div>

      <div className="grid min-h-[300px] gap-5 p-5 sm:min-h-[390px] sm:grid-cols-[.9fr_1.1fr] sm:p-8">

        <div className="flex flex-col justify-center">

          <span className="text-[7px] font-bold uppercase tracking-[0.25em] text-blue-600">
            Financial clarity
          </span>

          <h3 className="mt-4 text-3xl font-bold leading-[0.95] tracking-[-0.06em] text-slate-900 sm:text-5xl">
            Numbers
            <br />
            that move
            <br />
            <span className="text-blue-600">business forward.</span>
          </h3>

          <p className="mt-4 max-w-[270px] text-[8px] leading-5 text-slate-400">
            Accounting, tax and advisory services presented through a
            clear and professional digital experience.
          </p>

          <div className="mt-5 rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-100">
            <div className="flex items-center gap-2">
              <ShieldCheck size={12} className="text-blue-600" />
              <span className="text-[7px] font-semibold text-slate-600">
                Professional financial advisory
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">

          <div className="w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">

            <div className="flex items-start justify-between">
              <div>
                <p className="text-[7px] uppercase tracking-widest text-slate-400">
                  Business overview
                </p>
                <p className="mt-2 text-xl font-bold text-slate-900">
                  ₹24.8L
                </p>
                <p className="mt-1 text-[7px] font-semibold text-emerald-500">
                  +12.8% this year
                </p>
              </div>

              <div className="rounded-lg bg-blue-50 p-2">
                <BarChart3 size={14} className="text-blue-600" />
              </div>
            </div>

            <div className="mt-7 flex h-28 items-end gap-2">
              {[28, 42, 35, 55, 48, 68, 60, 82, 74, 92].map(
                (height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-blue-600 to-cyan-400"
                    style={{ height: `${height}%` }}
                  />
                )
              )}
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="rounded-lg bg-slate-50 p-2">
                <p className="text-[6px] text-slate-400">Revenue</p>
                <p className="mt-1 text-[8px] font-bold">₹18.2L</p>
              </div>

              <div className="rounded-lg bg-slate-50 p-2">
                <p className="text-[6px] text-slate-400">Growth</p>
                <p className="mt-1 text-[8px] font-bold">18.4%</p>
              </div>

              <div className="rounded-lg bg-slate-50 p-2">
                <p className="text-[6px] text-slate-400">Clients</p>
                <p className="mt-1 text-[8px] font-bold">126</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

function EventsPreview() {
  return (
    <div className="h-full bg-[#09090d] text-white">

      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-fuchsia-500">
            <Play size={13} fill="white" />
          </div>

          <span className="text-[11px] font-black tracking-[-0.04em]">
            BEATHOUSE
          </span>
        </div>

        <div className="hidden gap-5 text-[8px] text-slate-500 sm:flex">
          <span>Events</span>
          <span>Artists</span>
          <span>Media</span>
        </div>

        <div className="rounded-full border border-fuchsia-400/30 px-3 py-1.5 text-[7px] font-bold text-fuchsia-300">
          GET TICKETS
        </div>
      </div>

      <div className="relative min-h-[300px] overflow-hidden p-5 sm:min-h-[390px] sm:p-8">

        <div className="absolute left-[-80px] top-[-100px] h-72 w-72 rounded-full bg-fuchsia-600/10 blur-3xl" />

        <div className="absolute bottom-[-100px] right-[-80px] h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative grid h-full items-center gap-8 sm:grid-cols-[1fr_.8fr]">

          <div>

            <p className="text-[7px] font-bold uppercase tracking-[0.3em] text-fuchsia-400">
              Next event
            </p>

            <h3 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.07em] sm:text-6xl">
              Feel
              <br />
              the
              <br />
              <span className="text-fuchsia-400">sound.</span>
            </h3>

            <p className="mt-4 max-w-[260px] text-[8px] leading-5 text-slate-500">
              Live music, unforgettable nights and artists that turn
              every event into an experience.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <div className="rounded-full bg-fuchsia-500 px-4 py-2 text-[7px] font-black">
                EXPLORE EVENTS
              </div>

              <div className="text-[7px] font-semibold text-slate-400">
                24 OCT 2026
              </div>
            </div>

            <div className="mt-7 flex items-center gap-1">
              {[20, 32, 15, 42, 25, 48, 18, 36, 52, 28, 44, 22, 38, 30].map(
                (height, index) => (
                  <div
                    key={index}
                    className="w-1 rounded-full bg-gradient-to-t from-fuchsia-500 to-cyan-400"
                    style={{ height: `${height}px` }}
                  />
                )
              )}
            </div>
          </div>

          <div className="flex justify-center">

            <div className="relative w-[80%] rotate-3 overflow-hidden rounded-[20px] border border-white/10 bg-gradient-to-br from-fuchsia-600/30 via-purple-900/30 to-cyan-500/20 p-5 shadow-2xl">

              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

              <div className="relative">

                <div className="flex items-center justify-between">
                  <span className="text-[6px] font-bold uppercase tracking-widest text-white/50">
                    Live experience
                  </span>

                  <Sparkles size={12} className="text-fuchsia-300" />
                </div>

                <div className="mt-16">
                  <p className="text-[8px] font-bold uppercase tracking-widest text-fuchsia-300">
                    Saturday Night
                  </p>

                  <p className="mt-2 text-2xl font-black uppercase leading-none">
                    Neon
                    <br />
                    Frequency
                  </p>
                </div>

                <div className="mt-10 flex justify-between border-t border-white/10 pt-4">
                  <span className="text-[7px] text-white/50">
                    Gurgaon
                  </span>

                  <span className="text-[7px] font-bold">
                    10:00 PM
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function EcommercePreview() {
  return (
    <div className="h-full bg-[#fafafa]">

      <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-black tracking-[-0.06em] text-slate-900">
            THREAD<span className="text-blue-600">RARE</span>
          </span>
        </div>

        <div className="hidden gap-5 text-[8px] font-medium text-slate-400 sm:flex">
          <span>New Arrivals</span>
          <span>Men</span>
          <span>Women</span>
          <span>Collections</span>
        </div>

        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white">
          <ShoppingBag size={12} />
        </div>
      </div>

      <div className="min-h-[300px] bg-[#f3f4f6] p-5 sm:min-h-[390px] sm:p-8">

        <div className="grid gap-6 sm:grid-cols-[.95fr_1.05fr]">

          <div className="flex flex-col justify-center">

            <span className="w-fit rounded-full bg-white px-3 py-1.5 text-[7px] font-bold uppercase tracking-widest text-slate-500 shadow-sm">
              New collection
            </span>

            <h3 className="mt-5 text-3xl font-black leading-[0.9] tracking-[-0.07em] text-slate-900 sm:text-5xl">
              Wear
              <br />
              your
              <br />
              <span className="text-blue-600">identity.</span>
            </h3>

            <p className="mt-4 max-w-[250px] text-[8px] leading-5 text-slate-400">
              Contemporary essentials created for everyday movement,
              expression and personal style.
            </p>

            <div className="mt-5 flex gap-2">
              <div className="rounded-full bg-slate-900 px-4 py-2 text-[7px] font-bold text-white">
                SHOP NOW
              </div>

              <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[7px] font-bold text-slate-500">
                VIEW COLLECTION
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">

            <div className="relative overflow-hidden rounded-[20px] bg-[#e4e7ec] p-4">

              <div className="flex h-full flex-col justify-between">

                <div className="flex justify-between">
                  <span className="rounded-full bg-white px-2 py-1 text-[6px] font-bold">
                    NEW
                  </span>

                  <div className="h-6 w-6 rounded-full bg-white/70" />
                </div>

                <div className="mx-auto flex h-40 w-24 items-center justify-center rounded-[35%] bg-gradient-to-b from-slate-800 to-slate-950 shadow-2xl">
                  <div className="h-10 w-12 rounded-b-xl border-b border-white/10" />
                </div>

                <div>
                  <p className="text-[8px] font-bold text-slate-800">
                    Essential Oversized Tee
                  </p>
                  <p className="mt-1 text-[8px] font-semibold text-slate-500">
                    ₹990
                  </p>
                </div>

              </div>
            </div>

            <div className="mt-8 relative overflow-hidden rounded-[20px] bg-[#dfe8f5] p-4">

              <div className="flex h-full flex-col justify-between">

                <div className="flex justify-end">
                  <div className="rounded-full bg-white p-1.5">
                    <ShoppingBag size={9} />
                  </div>
                </div>

                <div className="mx-auto flex h-36 w-24 items-center justify-center rounded-[28%] bg-gradient-to-b from-blue-500 to-blue-700 shadow-xl">
                  <div className="h-12 w-14 rounded-b-xl border-b border-white/20" />
                </div>

                <div>
                  <p className="text-[8px] font-bold text-slate-800">
                    Signature Hoodie
                  </p>
                  <p className="mt-1 text-[8px] font-semibold text-blue-600">
                    ₹1,490
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

function PreviewContent({ project }) {
  switch (project.category) {
    case "Healthcare":
      return <HealthcarePreview />;

    case "Fitness":
      return <FitnessPreview />;

    case "Legal":
      return <LegalPreview />;

    case "Finance":
      return <FinancePreview />;

    case "Events":
      return <EventsPreview />;

    case "E-commerce":
      return <EcommercePreview />;

    default:
      return <HealthcarePreview />;
  }
}

/* =========================================================
   BROWSER MOCKUP
========================================================= */

function BrowserMockup({ project, large = false }) {
  return (
    <div
      className={`group relative ${
        large ? "perspective-[1800px]" : ""
      }`}
    >

      {/* Glow */}
      <div className="pointer-events-none absolute -inset-10 rounded-full bg-blue-500/10 opacity-70 blur-3xl transition duration-700 group-hover:bg-cyan-400/10" />

      {/* Back 3D layer */}
      <div className="absolute inset-x-8 -bottom-5 top-8 rotate-[-2deg] rounded-[28px] border border-white/5 bg-white/[0.025] transition duration-700 group-hover:rotate-[-1deg]" />

      {/* Browser */}
      <div
        className={`relative overflow-hidden rounded-[26px] border border-white/10 bg-[#101722] p-2 shadow-2xl shadow-black/50 transition duration-700 group-hover:-translate-y-2 group-hover:rotate-[0.25deg] ${
          large ? "sm:p-3" : ""
        }`}
      >

        {/* Browser bar */}
        <div className="flex h-9 items-center gap-1.5 px-2 sm:h-11 sm:px-3">

          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />

          <div className="ml-3 flex h-6 flex-1 items-center rounded-md border border-white/5 bg-white/[0.03] px-3">

            <span className="truncate text-[8px] text-slate-600">
              webqenzo.com / {project.name.toLowerCase()}
            </span>

          </div>
        </div>

        {/* Actual project preview */}
        <div className="overflow-hidden rounded-[20px]">
          <PreviewContent project={project} />
        </div>
      </div>

      {/* Floating category card */}
      <div className="absolute -right-2 -top-4 hidden rounded-2xl border border-white/10 bg-[#111827]/95 p-3 shadow-2xl backdrop-blur-xl sm:block">

        <div className="flex items-center gap-2.5">

          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500/10">
            <Monitor size={15} className="text-blue-400" />
          </div>

          <div>
            <p className="text-[8px] uppercase tracking-wider text-slate-600">
              Experience
            </p>

            <p className="text-[10px] font-semibold text-white">
              {project.category}
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}

/* =========================================================
   PORTFOLIO
========================================================= */

function Portfolio() {
  return (
    <main className="overflow-hidden bg-[#F7F8FA] text-[#0B1220]">
      <SEO
        title="Web Design Portfolio"
        description="Explore WebQenzo's portfolio of premium website concepts, digital experiences and modern web design projects across multiple industries."
        path="/portfolio"
      />

      {/* =====================================================
          01 — HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#05070B] text-white">

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-[-15%] top-[10%] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[140px]" />

          <div className="absolute right-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[130px]" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />

        </div>

        <div className="relative mx-auto max-w-[1400px] px-5 pb-24 pt-20 sm:px-8 lg:px-10 lg:pb-32 lg:pt-28">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl"
          >

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">

              <Sparkles size={13} className="text-cyan-400" />

              Selected work

            </div>

            <h1 className="text-[clamp(4rem,9vw,9rem)] font-semibold leading-[0.82] tracking-[-0.075em]">

              Work that

              <br />

              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                speaks.
              </span>

            </h1>

            <p className="mt-9 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Explore digital experiences designed by WebQenzo across
              healthcare, fitness, legal, finance, events and commerce.
              Every project starts with the business—not the template.
            </p>

          </motion.div>

          {/* Featured ThreadRare */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="mt-20"
          >
            <BrowserMockup project={projects[5]} large />
          </motion.div>

          <div className="mt-10 flex flex-col justify-between gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center">

            <div>

              <p className="text-xs uppercase tracking-[0.18em] text-slate-600">
                Featured concept
              </p>

              <p className="mt-1 text-sm font-semibold text-slate-300">
                ThreadRare — Fashion E-commerce
              </p>

            </div>

            <Link
              to="/get-quote"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              Build something like this

              <ArrowUpRight
                size={16}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

          </div>

        </div>
      </section>

      {/* =====================================================
          02 — CAPABILITY
      ====================================================== */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

        <div className="mx-auto max-w-[1200px]">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Our portfolio
              </p>

              <p className="mt-5 font-mono text-xs text-slate-400">
                2026 / WEBQENZO
              </p>

            </div>

            <div>

              <h2 className="text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl">
                We don't design websites to fill a screen.
                We design them to give a business a stronger digital presence.
              </h2>

              <p className="mt-7 max-w-3xl text-base leading-7 text-slate-500">
                Strategy, visual design, responsive development, content
                structure, performance and launch are considered as one
                connected experience.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          03 — CASE STUDIES
      ====================================================== */}

      <section className="bg-[#F7F8FA] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">

        <div className="mx-auto max-w-[1400px]">

          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Case studies
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
                Selected work.
              </h2>

            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              Concept projects created to demonstrate how WebQenzo can
              approach different industries and digital requirements.
            </p>

          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">

            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
                className="group"
              >

                {/* Entire preview clickable */}
                <Link
                  to={project.path}
                  className="block"
                  aria-label={`View ${project.name} case study`}
                >
                  <BrowserMockup project={project} />
                </Link>

                <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                  <div>

                    <div className="flex items-center gap-3">

                      <span className="font-mono text-[10px] text-slate-400">
                        {project.id}
                      </span>

                      <span className="h-px w-6 bg-slate-300" />

                      <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-600">
                        {project.category}
                      </span>

                    </div>

                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                      {project.name}
                    </h3>

                    <p className="mt-2 text-xs font-medium text-slate-400">
                      {project.type}
                    </p>

                    <p className="mt-4 max-w-lg text-sm leading-6 text-slate-500">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">

                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-medium text-slate-500"
                        >
                          {tag}
                        </span>
                      ))}

                    </div>

                  </div>

                  <Link
                    to={project.path}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:bg-[#0B1220] hover:text-white"
                    aria-label={`View ${project.name} case study`}
                  >
                    <ArrowUpRight size={17} />
                  </Link>

                </div>

              </motion.article>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          04 — PROJECT EXPLORER
      ====================================================== */}

      <section className="border-y border-slate-200 bg-white">

        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-10">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Explore by industry
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
                Find your kind of project.
              </h2>

            </div>

            <div className="flex h-11 items-center gap-2 rounded-full border border-slate-200 bg-[#F7F8FA] px-4">

              <MousePointer2 size={15} className="text-slate-400" />

              <span className="text-xs font-medium text-slate-500">
                Interactive portfolio
              </span>

            </div>

          </div>

          <div className="mt-10 flex flex-wrap gap-2">

            {filters.map((filter, index) => (
              <button
                key={filter}
                type="button"
                className={`rounded-full px-5 py-2.5 text-xs font-semibold transition ${
                  index === 0
                    ? "bg-[#0B1220] text-white"
                    : "border border-slate-200 bg-white text-slate-500 hover:border-blue-200 hover:text-blue-600"
                }`}
              >
                {filter}
              </button>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          05 — TRANSFORMATION
      ====================================================== */}

      <section className="bg-[#05070B] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32">

        <div className="mx-auto max-w-[1400px]">

          <div className="grid items-center gap-14 lg:grid-cols-[0.75fr_1.25fr]">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                The transformation
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
                From ordinary
                <br />
                to intentional.
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-slate-400">
                A strong website is not about adding more elements.
                It is about knowing what deserves attention—and what doesn't.
              </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {/* BEFORE */}
              <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-7">

                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                  Before
                </p>

                <div className="mt-8 space-y-3">

                  <div className="h-3 w-32 rounded bg-white/10" />

                  <div className="h-8 w-full rounded bg-white/10" />

                  <div className="h-8 w-[70%] rounded bg-white/10" />

                  <div className="grid grid-cols-2 gap-2 pt-5">
                    <div className="h-24 rounded-xl bg-white/5" />
                    <div className="h-24 rounded-xl bg-white/5" />
                  </div>

                </div>

                <div className="mt-7 flex flex-wrap gap-2">

                  {["Generic", "Unclear", "Outdated"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] text-slate-500"
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </div>

              {/* AFTER */}
              <div className="rounded-[30px] border border-blue-400/20 bg-gradient-to-br from-blue-500/10 to-cyan-400/5 p-7">

                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  After
                </p>

                <div className="mt-8 space-y-3">

                  <div className="h-3 w-32 rounded bg-white/40" />

                  <div className="h-8 w-full rounded bg-white" />

                  <div className="h-8 w-[70%] rounded bg-blue-500" />

                  <div className="grid grid-cols-2 gap-2 pt-5">
                    <div className="h-24 rounded-xl bg-white/10" />
                    <div className="h-24 rounded-xl bg-cyan-400/10" />
                  </div>

                </div>

                <div className="mt-7 flex flex-wrap gap-2">

                  {["Clear", "Premium", "Purposeful"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[9px] text-slate-300"
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          06 — DELIVERABLES
      ====================================================== */}

      <section className="bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32">

        <div className="mx-auto max-w-[1400px]">

          <div className="max-w-3xl">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              What goes into a project
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
              More than a pretty homepage.
            </h2>

          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[30px] border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">

            {deliverables.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group bg-white p-8 transition duration-300 hover:bg-[#F7F8FA]"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 transition group-hover:bg-[#0B1220] group-hover:text-white">
                    <Icon size={19} />
                  </div>

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
          07 — TECHNOLOGY
      ====================================================== */}

      <section className="bg-[#0B1220] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32">

        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Under the interface
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                Design backed by modern development.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                The visual layer is only one part of a professional digital
                product. We also care about structure, responsiveness,
                maintainability and performance.
              </p>

            </div>

            <div className="grid grid-cols-2 overflow-hidden rounded-[30px] border border-white/10 sm:grid-cols-4">

              {technologies.map((technology, index) => (
                <div
                  key={technology}
                  className="flex min-h-32 items-center justify-center border-b border-r border-white/10 p-5 text-center transition duration-300 hover:bg-white/[0.05]"
                >

                  <div>

                    <span className="mb-3 block font-mono text-[9px] text-slate-600">
                      0{index + 1}
                    </span>

                    <span className="text-xs font-semibold text-slate-300">
                      {technology}
                    </span>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          08 — PROCESS
      ====================================================== */}

      <section className="bg-[#F7F8FA] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">

        <div className="mx-auto max-w-[1400px]">

          <div className="text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              How the work happens
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
              From first conversation
              <br />
              to final launch.
            </h2>

          </div>

          <div className="mx-auto mt-16 max-w-5xl">

            {[
              [
                "01",
                "Discover",
                "Understand the business, audience, goals and requirements.",
              ],
              [
                "02",
                "Structure",
                "Define pages, content hierarchy and the customer journey.",
              ],
              [
                "03",
                "Design",
                "Create a visual direction that fits the business and audience.",
              ],
              [
                "04",
                "Develop",
                "Turn the approved experience into a responsive website.",
              ],
              [
                "05",
                "Refine",
                "Check responsiveness, interactions, forms and performance.",
              ],
              [
                "06",
                "Launch",
                "Prepare the final build and take the experience live.",
              ],
            ].map(([number, title, text], index) => (
              <motion.div
                key={number}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -20 : 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="group grid grid-cols-[70px_1fr] gap-5 border-t border-slate-200 py-7 sm:grid-cols-[100px_0.6fr_1fr] sm:gap-8"
              >

                <span className="font-mono text-xs text-slate-400">
                  {number}
                </span>

                <h3 className="text-xl font-semibold">
                  {title}
                </h3>

                <p className="col-start-2 text-sm leading-6 text-slate-500 sm:col-start-auto">
                  {text}
                </p>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          09 — QUALITY
      ====================================================== */}

      <section className="bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32">

        <div className="mx-auto max-w-[1200px]">

          <div className="rounded-[36px] border border-slate-200 bg-[#F7F8FA] p-8 sm:p-12 lg:p-16">

            <div className="grid gap-12 lg:grid-cols-2">

              <div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B1220] text-white">
                  <BarChart3 size={20} />
                </div>

                <h2 className="mt-8 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                  Quality is in the details.
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-500">
                  We pay attention to the details visitors may never
                  consciously notice—but absolutely experience.
                </p>

              </div>

              <div className="grid gap-3 sm:grid-cols-2">

                {[
                  ["Responsive", "Every screen size"],
                  ["Accessible", "Clear interactions"],
                  ["Consistent", "Unified visual system"],
                  ["Performant", "Lightweight experience"],
                  ["Maintainable", "Clean structure"],
                  ["Scalable", "Ready to evolve"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-white p-5"
                  >

                    <Check size={16} className="text-blue-600" />

                    <h3 className="mt-4 text-sm font-semibold">
                      {title}
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                      {text}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          10 — FINAL CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#05070B] px-5 py-28 text-white sm:px-8 lg:px-10 lg:py-40">

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

          <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/10" />

          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

        </div>

        <div className="relative mx-auto max-w-4xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Your project could be next
          </p>

          <h2 className="mt-6 text-5xl font-semibold leading-[0.92] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
            Let's create
            <br />
            something remarkable.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Tell us what you are building, who you want to reach and
            what you want your website to achieve.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/get-quote"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#0B1220] transition duration-300 hover:-translate-y-1"
            >
              Start Your Project

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0B1220] text-white">
                <ArrowUpRight size={15} />
              </span>
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.05]"
            >
              Explore Services
              <ArrowRight size={16} />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Portfolio;