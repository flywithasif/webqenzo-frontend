import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Process", path: "/process" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-[100] border-b border-white/[0.07] bg-[#05070B]/85 backdrop-blur-2xl">
      <nav className="mx-auto flex h-[78px] max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12">

        {/* =====================================================
            LOGO
        ====================================================== */}
        <Link
          to="/"
          onClick={closeMenu}
          className="group relative flex items-center"
        >
          {/* Logo glow */}
          <span className="pointer-events-none absolute -inset-3 rounded-full bg-blue-500/[0.07] opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />

          <span className="relative text-[25px] font-black tracking-[-0.055em] text-white">
            Web
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Qenzo
            </span>
          </span>

          {/* Small cyan indicator */}
          <span className="ml-2 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,.8)]" />
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `group relative rounded-full px-4 py-2.5 text-[13px] font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-white/[0.08] text-white shadow-[inset_0_0_20px_rgba(255,255,255,.025)]"
                    : "text-slate-500 hover:bg-white/[0.045] hover:text-slate-200"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  {/* Active underline glow */}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 shadow-[0_0_10px_rgba(34,211,238,.45)]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* =====================================================
            DESKTOP CTA
        ====================================================== */}
        <div className="hidden lg:block">
          <Link
            to="/get-quote"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/10 bg-white/[0.055] px-4 py-2.5 text-[13px] font-semibold text-white shadow-[0_8px_30px_rgba(0,0,0,.2)] transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-white/[0.09] hover:shadow-[0_12px_40px_rgba(37,99,235,.14)]"
          >
            {/* Button shine */}
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

            <span className="relative">
              Let's Talk
            </span>

            <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-[0_0_18px_rgba(37,99,235,.25)] transition-all duration-300 group-hover:rotate-45 group-hover:shadow-[0_0_25px_rgba(34,211,238,.3)]">
              <ArrowUpRight size={15} />
            </span>
          </Link>
        </div>

        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200 transition duration-300 hover:border-white/20 hover:bg-white/[0.08] lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}
      <div
        className={`overflow-hidden border-t border-white/[0.07] bg-[#05070B]/95 backdrop-blur-2xl transition-all duration-300 lg:hidden ${
          isOpen
            ? "max-h-[520px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[1500px] px-5 py-5 sm:px-8">

          {/* Mobile navigation */}
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `group flex items-center justify-between rounded-2xl border px-4 py-3.5 text-sm font-medium transition ${
                    isActive
                      ? "border-blue-400/15 bg-white/[0.07] text-white"
                      : "border-transparent text-slate-500 hover:border-white/[0.06] hover:bg-white/[0.035] hover:text-slate-200"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>

                    {isActive ? (
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,.8)]" />
                    ) : (
                      <ArrowUpRight
                        size={15}
                        className="text-slate-700 transition group-hover:text-slate-400"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile CTA */}
          <Link
            to="/get-quote"
            onClick={closeMenu}
            className="group mt-4 flex items-center justify-center gap-3 rounded-2xl border border-blue-400/20 bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3.5 text-sm font-bold text-white shadow-[0_12px_35px_rgba(37,99,235,.18)] transition duration-300 hover:-translate-y-0.5"
          >
            Start a Project

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition group-hover:rotate-45">
              <ArrowUpRight size={15} />
            </span>
          </Link>

          {/* Mobile brand line */}
          <div className="mt-5 flex items-center justify-center gap-3">
            <div className="h-px flex-1 bg-white/[0.06]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-700">
              WebQenzo
            </span>

            <div className="h-px flex-1 bg-white/[0.06]" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;