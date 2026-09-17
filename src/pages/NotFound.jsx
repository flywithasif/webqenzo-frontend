import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Home, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-[calc(100vh-78px)] overflow-hidden bg-[#05070B] text-white">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/[0.08] blur-[140px]" />

        <div className="absolute bottom-[-15%] left-[20%] h-[400px] w-[400px] rounded-full bg-cyan-400/[0.05] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-78px)] max-w-[1500px] items-center justify-center px-5 py-20 sm:px-8 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-4xl text-center"
        >

          {/* 404 */}
          <div className="relative mx-auto w-fit">

            <span className="select-none text-[150px] font-black leading-none tracking-[-0.1em] text-white/[0.035] sm:text-[220px] lg:text-[280px]">
              404
            </span>

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl font-black tracking-[-0.07em] text-white sm:text-7xl">
                404
              </span>
            </div>

          </div>

          <p className="mt-2 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
            Page not found
          </p>

          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-[-0.05em] sm:text-6xl">
            Looks like this page
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              took a different route.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            The page you are looking for doesn't exist or may have moved.
            Let's get you back to the WebQenzo experience.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-wrap justify-center gap-3">

            <Link
              to="/"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#05070B] transition duration-300 hover:-translate-y-1"
            >
              <Home size={16} />

              Back Home

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#05070B] text-white transition group-hover:rotate-45">
                <ArrowUpRight size={14} />
              </span>
            </Link>

            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-6 py-3.5 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.07] hover:text-white"
            >
              <Search size={16} />
              Explore Work
            </Link>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-6 py-3.5 text-sm font-semibold text-slate-500 transition hover:bg-white/[0.06] hover:text-white"
            >
              <ArrowLeft size={16} />
              Go Back
            </button>

          </div>

          {/* Brand signature */}
          <div className="mx-auto mt-16 flex max-w-md items-center gap-4">
            <div className="h-px flex-1 bg-white/[0.07]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-700">
              WebQenzo
            </span>

            <div className="h-px flex-1 bg-white/[0.07]" />
          </div>

        </motion.div>
      </div>
    </main>
  );
}

export default NotFound;