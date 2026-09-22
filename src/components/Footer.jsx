import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  Company: [
    { name: "About", path: "/about" },
    { name: "Process", path: "/process" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ],

  Services: [
    { name: "Web Development", path: "/services" },
    { name: "E-commerce", path: "/services" },
    { name: "UI/UX Design", path: "/services" },
    { name: "Website Redesign", path: "/services" },
  ],

  Explore: [
    { name: "Get a Quote", path: "/get-quote" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms", path: "/terms" },
  ],
};

const instagramUrl =
  "https://www.instagram.com/webqenzo?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==";

const InstagramIcon = ({ size = 16 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
    />

    <circle
      cx="12"
      cy="12"
      r="4"
    />

    <circle
      cx="17.5"
      cy="6.5"
      r="0.8"
      fill="currentColor"
      stroke="none"
    />
  </svg>
);

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden bg-[#05070B] text-white"
      aria-label="WebQenzo website footer"
    >
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-600/[0.045] blur-[130px]" />

        <div className="absolute right-[-160px] top-[-100px] h-[400px] w-[400px] rounded-full bg-cyan-400/[0.03] blur-[150px]" />

        <div className="absolute bottom-[-120px] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/[0.025] blur-[130px]" />
      </div>

      {/* TOP LINE */}

      <div
        className="relative h-px bg-gradient-to-r from-transparent via-blue-500/25 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
        {/* ===================================================
            CTA
        ==================================================== */}

        <section className="py-10 sm:py-12 lg:py-14">
          <div className="relative overflow-hidden rounded-[28px] border border-white/[0.075] bg-[#0A0D12]">
            {/* GRID */}

            <div
              className="pointer-events-none absolute inset-0 opacity-[0.022]"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />

            {/* GLOW */}

            <div
              className="pointer-events-none absolute right-[-100px] top-[-120px] h-80 w-80 rounded-full bg-blue-500/[0.06] blur-[110px]"
              aria-hidden="true"
            />

            <div className="relative flex flex-col gap-7 px-6 py-8 sm:px-9 sm:py-9 lg:flex-row lg:items-center lg:justify-between lg:px-11 lg:py-10">
              <div className="max-w-3xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-500/[0.06] px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,.7)]" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-blue-200/80">
                    Start Something Great
                  </span>
                </div>

                <h2 className="text-3xl font-black leading-[1.02] tracking-[-0.045em] text-white sm:text-4xl lg:text-[44px]">
                  Have a project in mind?
                  <br />

                  <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    Let's build it.
                  </span>
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500">
                  Tell us what you are building, what you want to improve,
                  or where your current website is falling short.
                </p>
              </div>

              <Link
                to="/get-quote"
                className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3.5 text-sm font-bold text-white shadow-[0_12px_35px_rgba(37,99,235,.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(37,99,235,.25)]"
              >
                <span>Start a Project</span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ===================================================
            MAIN FOOTER
        ==================================================== */}

        <section className="border-t border-white/[0.065] py-10 lg:py-12">
          <div className="grid gap-10 lg:grid-cols-[1.5fr_0.8fr_0.9fr_0.9fr] lg:gap-12">
            {/* =================================================
                BRAND
            ================================================== */}

            <div className="max-w-[400px]">
              <Link
                to="/"
                className="group inline-flex items-center"
                aria-label="WebQenzo Home"
              >
                <span className="text-[30px] font-black tracking-[-0.065em] text-white">
                  Web
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Qenzo
                  </span>
                </span>

                <span className="ml-2 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,.8)]" />
              </Link>

              <p className="mt-4 text-sm font-semibold text-slate-300">
                Websites That Grow Your Business.
              </p>

              <p className="mt-3 max-w-[390px] text-[13px] leading-6 text-slate-500">
                A digital agency focused on thoughtful design,
                modern development, strong performance, and
                websites built around real business goals.
              </p>
            </div>

            {/* =================================================
                COMPANY
            ================================================== */}

            <FooterColumn
              title="Company"
              links={footerLinks.Company}
            />

            {/* =================================================
                SERVICES
            ================================================== */}

            <FooterColumn
              title="Services"
              links={footerLinks.Services}
            />

            {/* =================================================
                EXPLORE
            ================================================== */}

            <div>
              <FooterColumn
                title="Explore"
                links={footerLinks.Explore}
              />

              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="group mt-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.08em] text-slate-500 transition duration-300 hover:border-blue-400/20 hover:bg-blue-500/[0.05] hover:text-white"
              >
                <InstagramIcon size={13} />

                Instagram

                <ArrowUpRight
                  size={12}
                  className="transition group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </section>

        {/* ===================================================
            CONTACT BAR
        ==================================================== */}

        <section className="border-t border-white/[0.065] py-5">
          <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
            {/* PHONE */}

            <a
              href="tel:+917042266256"
              className="group inline-flex items-center gap-2 text-xs font-medium text-slate-500 transition hover:text-white"
              aria-label="Call WebQenzo"
            >
              <Phone
                size={14}
                className="text-slate-600 transition group-hover:text-blue-400"
              />

              <span>7042266256</span>
            </a>

            <span
              className="hidden h-3 w-px bg-white/[0.08] sm:block"
              aria-hidden="true"
            />

            {/* EMAIL */}

            <a
              href="mailto:hello@webqenzo.com"
              className="group inline-flex items-center gap-2 text-xs font-medium text-slate-500 transition hover:text-white"
              aria-label="Email WebQenzo"
            >
              <Mail
                size={14}
                className="text-slate-600 transition group-hover:text-blue-400"
              />

              <span>hello@webqenzo.com</span>
            </a>

            <span
              className="hidden h-3 w-px bg-white/[0.08] sm:block"
              aria-hidden="true"
            />

            {/* INSTAGRAM */}

            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-xs font-medium text-slate-500 transition hover:text-white"
              aria-label="WebQenzo Instagram"
            >
              <span className="text-slate-600 transition group-hover:text-blue-400">
                <InstagramIcon size={14} />
              </span>

              <span>@webqenzo</span>

              <ArrowUpRight
                size={11}
                className="text-slate-700 transition group-hover:text-blue-400"
              />
            </a>

            <span
              className="hidden h-3 w-px bg-white/[0.08] sm:block"
              aria-hidden="true"
            />

            {/* LOCATION */}

            <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-500">
              <MapPin
                size={14}
                className="text-slate-600"
              />

              <span>India</span>
            </div>
          </div>
        </section>

        {/* ===================================================
            BOTTOM BAR
        ==================================================== */}

        <section className="border-t border-white/[0.065]">
          <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
            {/* COPYRIGHT */}

            <p className="text-[11px] text-slate-600">
              © {currentYear} WebQenzo. All rights reserved.
            </p>

            {/* CENTER */}

            <div className="hidden items-center gap-3 md:flex">
              <span className="h-px w-6 bg-white/[0.08]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-slate-700">
                Digital Experiences
              </span>

              <span className="h-px w-6 bg-white/[0.08]" />
            </div>

            {/* LEGAL */}

            <nav
              className="flex items-center gap-5 text-[11px] text-slate-600"
              aria-label="Legal navigation"
            >
              <Link
                to="/privacy-policy"
                className="transition hover:text-slate-300"
              >
                Privacy
              </Link>

              <Link
                to="/terms"
                className="transition hover:text-slate-300"
              >
                Terms
              </Link>

              <Link
                to="/contact"
                className="transition hover:text-slate-300"
              >
                Contact
              </Link>
            </nav>
          </div>
        </section>

        {/* ===================================================
            SIGNATURE
        ==================================================== */}

        <div className="flex items-center justify-between border-t border-white/[0.035] py-3.5">
          <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-slate-800">
            WebQenzo
          </span>

          <span className="text-[8px] font-medium uppercase tracking-[0.22em] text-slate-800">
            Websites That Grow Your Business
          </span>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   FOOTER COLUMN
========================================================= */

function FooterColumn({ title, links }) {
  return (
    <nav aria-label={`${title} navigation`}>
      <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-300">
        {title}
      </h3>

      <div className="mt-5 flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={`${link.path}-${link.name}`}
            to={link.path}
            className="group inline-flex w-fit items-center gap-2 text-[13px] text-slate-500 transition duration-300 hover:translate-x-0.5 hover:text-white"
          >
            <span>{link.name}</span>

            <ArrowUpRight
              size={12}
              className="opacity-0 transition duration-300 group-hover:opacity-100"
            />
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Footer;