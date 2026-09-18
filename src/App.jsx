import { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* =========================================================
   LAZY LOADED PAGES
   Pages will load only when the user needs them.
========================================================= */

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const About = lazy(() => import("./pages/About"));
const Process = lazy(() => import("./pages/Process"));
const GetQuote = lazy(() => import("./pages/GetQuote"));

const PrivacyPolicy = lazy(() =>
  import("./pages/PrivacyPolicy")
);

const Terms = lazy(() =>
  import("./pages/Terms")
);

const Contact = lazy(() =>
  import("./pages/Contact")
);

/* =========================================================
   CASE STUDIES
========================================================= */

const MediCare = lazy(() =>
  import("./pages/case-studies/MediCare")
);

const FitZone = lazy(() =>
  import("./pages/case-studies/FitZone")
);

const LexPro = lazy(() =>
  import("./pages/case-studies/LexPro")
);

const FinEdge = lazy(() =>
  import("./pages/case-studies/FinEdge")
);

const BeatHouse = lazy(() =>
  import("./pages/case-studies/BeatHouse")
);

const ThreadRare = lazy(() =>
  import("./pages/case-studies/ThreadRare")
);

/* =========================================================
   404
========================================================= */

const NotFound = lazy(() =>
  import("./pages/NotFound")
);

/* =========================================================
   SCROLL TO TOP
========================================================= */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

/* =========================================================
   PAGE TRANSITION
========================================================= */

function PageTransition({ children }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{
          opacity: 0,
          y: 8,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: -8,
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

/* =========================================================
   PREMIUM LOADING SCREEN
========================================================= */

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-[#05070B]">
      <div className="flex flex-col items-center">

        <div className="relative flex h-14 w-14 items-center justify-center">

          <div className="absolute inset-0 rounded-full border border-blue-400/10" />

          <div className="absolute inset-0 animate-spin rounded-full border border-transparent border-t-blue-500 border-r-cyan-400" />

          <div className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,.8)]" />

        </div>

        <span className="mt-5 text-[9px] font-semibold uppercase tracking-[0.3em] text-slate-600">
          WebQenzo
        </span>

      </div>
    </div>
  );
}

/* =========================================================
   APP CONTENT
========================================================= */

function AppContent() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <PageTransition>
        <Suspense fallback={<PageLoader />}>
          <Routes>

            {/* Main Pages */}

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/services"
              element={<Services />}
            />

            <Route
              path="/portfolio"
              element={<Portfolio />}
            />

            <Route
              path="/about"
              element={<About />}
            />

            <Route
              path="/process"
              element={<Process />}
            />

            <Route
              path="/get-quote"
              element={<GetQuote />}
            />

            {/* Legal / Contact */}

            <Route
              path="/privacy-policy"
              element={<PrivacyPolicy />}
            />

            <Route
              path="/terms"
              element={<Terms />}
            />

            <Route
              path="/contact"
              element={<Contact />}
            />

            {/* Portfolio Case Studies */}

            <Route
              path="/portfolio/medicare"
              element={<MediCare />}
            />

            <Route
              path="/portfolio/fitzone"
              element={<FitZone />}
            />

            <Route
              path="/portfolio/lexpro"
              element={<LexPro />}
            />

            <Route
              path="/portfolio/finedge"
              element={<FinEdge />}
            />

            <Route
              path="/portfolio/beathouse"
              element={<BeatHouse />}
            />

            <Route
              path="/portfolio/threadrare"
              element={<ThreadRare />}
            />

            {/* 404 */}

            <Route
              path="*"
              element={<NotFound />}
            />

          </Routes>
        </Suspense>
      </PageTransition>

      <Footer />
    </>
  );
}

/* =========================================================
   APP
========================================================= */

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#F7F8FA] text-[#0B1220]">
        <AppContent />
      </div>
    </BrowserRouter>
  );
}

export default App;