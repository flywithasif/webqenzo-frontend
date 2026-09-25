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
   ADMIN COMPONENTS
========================================================= */

import ProtectedAdminRoute from "./admin/components/ProtectedAdminRoute";
import AdminLayout from "./admin/components/AdminLayout";

/* =========================================================
   PUBLIC PAGES
========================================================= */

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const About = lazy(() => import("./pages/About"));
const Process = lazy(() => import("./pages/Process"));
const GetQuote = lazy(() => import("./pages/GetQuote"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));
const Contact = lazy(() => import("./pages/Contact"));

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
   ADMIN PAGES
========================================================= */

const AdminLogin = lazy(() =>
  import("./admin/pages/AdminLogin")
);

const AdminDashboard = lazy(() =>
  import("./admin/pages/AdminDashboard")
);

const AdminQuotes = lazy(() =>
  import("./admin/pages/AdminQuotes")
);

const AdminContacts = lazy(() =>
  import("./admin/pages/AdminContacts")
);

const AdminTeam = lazy(() =>
  import("./admin/pages/AdminTeam")
);

/* =========================================================
   ADMIN LEADS
========================================================= */

/*
  Super Admin:
  /admin/leads

  Team Admin:
  /admin/my-leads
*/

const AdminLeads = lazy(() =>
  import("./admin/pages/AdminLeads")
);

const AdminMyLeads = lazy(() =>
  import("./admin/pages/AdminMyLeads")
);

/* =========================================================
   LOADING SCREEN
========================================================= */

function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#05070B]">
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
   PUBLIC PAGE TRANSITION
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
   PUBLIC WEBSITE
========================================================= */

function PublicWebsite() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <PageTransition>

        <Suspense fallback={<PageLoader />}>

          <Routes>

            {/* =================================================
                MAIN PAGES
            ================================================= */}

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

            {/* =================================================
                LEGAL / CONTACT
            ================================================= */}

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

            {/* =================================================
                CASE STUDIES
            ================================================= */}

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

            {/* =================================================
                PUBLIC 404
            ================================================= */}

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
   ADMIN PANEL
========================================================= */

function AdminPanel() {
  return (
    <Suspense fallback={<PageLoader />}>

      <Routes>

        {/* =================================================
            ADMIN LOGIN
        ================================================= */}

        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        {/* =================================================
            PROTECTED ADMIN ROUTES
        ================================================= */}

        <Route element={<ProtectedAdminRoute />}>

          <Route
            path="/admin"
            element={<AdminLayout />}
          >

            {/* =================================================
                DASHBOARD
            ================================================= */}

            <Route
              index
              element={<AdminDashboard />}
            />

            {/* =================================================
                QUOTES
            ================================================= */}

            <Route
              path="quotes"
              element={<AdminQuotes />}
            />

            {/* =================================================
                CONTACTS
            ================================================= */}

            <Route
              path="contacts"
              element={<AdminContacts />}
            />

            {/* =================================================
                ADD LEADS
                SUPER ADMIN
            ================================================= */}

            <Route
              path="leads"
              element={<AdminLeads />}
            />

            {/* =================================================
                MY LEADS
                TEAM ADMIN
            ================================================= */}

            <Route
              path="my-leads"
              element={<AdminMyLeads />}
            />

            {/* =================================================
                TEAM
                SUPER ADMIN
            ================================================= */}

            <Route
              path="team"
              element={<AdminTeam />}
            />

          </Route>

        </Route>

      </Routes>

    </Suspense>
  );
}

/* =========================================================
   APP ROUTER
========================================================= */

function AppRouter() {
  const location = useLocation();

  /*
    Admin and public website are completely separated.

    /admin/*
       → AdminPanel

    Everything else
       → PublicWebsite
  */

  const isAdminRoute =
    location.pathname === "/admin" ||
    location.pathname.startsWith("/admin/");

  return isAdminRoute ? (
    <AdminPanel />
  ) : (
    <PublicWebsite />
  );
}

/* =========================================================
   APP
========================================================= */

function App() {
  return (
    <BrowserRouter>

      <AppRouter />

    </BrowserRouter>
  );
}

export default App;