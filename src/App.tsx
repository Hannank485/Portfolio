import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import BorderTransition from "./animation/BorderTransition";
import "./App.css";
import { useEffect, useState } from "react";
import FirstAnimation from "./animation/FirstAnimation";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import { AnimatePresence, easeInOut, motion } from "motion/react";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Project from "./Pages/Project";
function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Add this!
  }, [location.pathname]);

  // To prevent the border animation from working on first render of website
  const [overlayType, setOverlayType] = useState<"first" | "page">("first");
  const [hasAnimatedOnce, setHasAnimatedOnce] = useState<boolean>(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [open, isOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!hasAnimatedOnce) {
      setOverlayType("first");
      setHasAnimatedOnce(true);
    } else {
      setOverlayType("page");
    }
    setShowOverlay(true);
  }, [location.pathname]);

  const handleOpen = () => {
    isOpen((prev) => !prev);
  };

  const onFinish = () => {
    setShowOverlay(false);
  };
  const closeSidebar = () => {
    isOpen(false);
  };
  return (
    <div
      className=" min-h-screen flex flex-col justify-between  bg-Bg
"
    >
      <div className="fixed inset-0 z-50 max-w-screen-2xl  pointer-events-none">
        <AnimatePresence>
          {showOverlay && overlayType === "first" && (
            <FirstAnimation setFinish={onFinish} />
          )}

          {showOverlay && overlayType === "page" && (
            <BorderTransition
              setFinish={onFinish}
              sidebar={closeSidebar}
              key={location.pathname}
            />
          )}
        </AnimatePresence>
      </div>
      <Navbar setOpen={handleOpen} />
      <div className="overflow-x-hidden flex-1 flex">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.main
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="min-h-full flex flex-1"
                >
                  <Home />
                </motion.main>
              }
            />
            <Route
              path="/about"
              element={
                <motion.main
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="min-h-full flex w-full max-w-full flex-1"
                >
                  <About />
                </motion.main>
              }
            />
            <Route
              path="/contact"
              element={
                <motion.main
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="min-h-full flex w-full max-w-full flex-1"
                >
                  <Contact />
                </motion.main>
              }
            />
            <Route
              path="/project"
              element={
                <motion.main
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="min-h-full flex w-full max-w-full flex-1"
                >
                  <Project />
                </motion.main>
              }
            />
            {/* <Route
              path="*"
              element={
                <motion.main
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="min-h-full flex w-full max-w-full flex-1"
                >
                  <Home />
                </motion.main>
              }
            /> */}
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
      <AnimatePresence>
        {open && (
          <div className="fixed md:hidden inset-0 z-40 overflow-x-hidden ">
            <motion.div
              className="absolute inset-0 z-30 bg-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.25 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: easeInOut }}
              onClick={handleOpen}
            ></motion.div>
            <Sidebar setOpen={handleOpen} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
