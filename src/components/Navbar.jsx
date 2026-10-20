import { useEffect, useState } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-[100] border-b transition-all duration-300 ${
        isScrolled
          ? "border-blue-100/90 bg-white/95 shadow-[0_8px_35px_rgba(15,45,100,0.08)] backdrop-blur-2xl"
          : "border-slate-100 bg-white/90 backdrop-blur-xl"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-[1500px] items-center justify-between px-5 transition-all duration-300 sm:px-8 lg:px-12 ${
          isScrolled ? "h-[68px]" : "h-[78px]"
        }`}
      >
        {/* LOGO */}
        <Link
          to="/"
          onClick={closeMenu}
          className="group relative flex shrink-0 items-center"
          aria-label="WebQenzo Home"
        >
          <span className="pointer-events-none absolute -inset-3 rounded-full bg-blue-400/10 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />

          <span
            className={`relative font-black tracking-[-0.055em] text-[#101C45] transition-all duration-300 ${
              isScrolled ? "text-[23px]" : "text-[25px]"
            }`}
          >
            Web
            <span className="bg-gradient-to-r from-[#2457FF] via-[#168BFA] to-[#08C5EE] bg-clip-text text-transparent">
              Qenzo
            </span>
          </span>

          <span className="ml-2 h-1.5 w-1.5 rounded-full bg-[#08C5EE] shadow-[0_0_12px_rgba(8,197,238,0.45)]" />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `group relative rounded-full px-4 py-2.5 text-[13px] font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-blue-50 text-[#2457FF]"
                    : "text-slate-600 hover:bg-slate-50 hover:text-[#2457FF]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#2457FF] to-[#08C5EE]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* DESKTOP CTA */}
        <div className="hidden lg:block">
          <Link
            to="/get-quote"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#2457FF] to-[#08C5EE] px-5 py-2.5 text-[13px] font-bold text-white shadow-[0_8px_24px_rgba(36,87,255,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(8,145,238,0.30)]"
          >
            <span>Let's Talk</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={15} />
            </span>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setIsOpen((previous) => !previous)}
          className={`flex h-10 w-10 items-center justify-center rounded-full border transition duration-300 lg:hidden ${
            isOpen
              ? "border-blue-200 bg-blue-50 text-[#2457FF]"
              : "border-slate-200 bg-white text-[#101C45] hover:border-blue-200 hover:bg-blue-50"
          }`}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden border-t border-slate-100 bg-white/98 transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[1500px] px-5 py-5 sm:px-8">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `group flex items-center justify-between rounded-2xl border px-4 py-3.5 text-sm font-semibold transition ${
                    isActive
                      ? "border-blue-100 bg-blue-50 text-[#2457FF]"
                      : "border-transparent text-slate-600 hover:border-slate-100 hover:bg-slate-50 hover:text-[#2457FF]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive ? (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#08C5EE]" />
                    ) : (
                      <ArrowUpRight
                        size={15}
                        className="text-slate-400 transition group-hover:text-[#2457FF]"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* MOBILE CTA */}
          <Link
            to="/get-quote"
            onClick={closeMenu}
            className="group mt-4 flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#2457FF] to-[#08C5EE] px-5 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(36,87,255,0.18)] transition duration-300 hover:-translate-y-0.5"
          >
            Start a Project
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition group-hover:rotate-45">
              <ArrowUpRight size={15} />
            </span>
          </Link>

          {/* MOBILE FOOTER LABEL */}
          <div className="mt-5 flex items-center justify-center gap-3">
            <div className="h-px flex-1 bg-slate-100" />
            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400">
              WebQenzo
            </span>
            <div className="h-px flex-1 bg-slate-100" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;