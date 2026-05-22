import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import MainLayout from './layouts/MainLayout';
import PortalLoader from './components/PortalLoader';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import BlueprintDesign from './pages/BlueprintDesign';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminMessages from './pages/AdminMessages';

function App() {
  const [loading, setLoading] = useState(true);

  // Fallback to clear loading just in case the animation doesn't trigger onComplete
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <PortalLoader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="app-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full min-h-screen"
          >
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="projects" element={<Projects />} />
                  <Route path="certificates" element={<Certificates />} />
                  <Route path="blueprint" element={<BlueprintDesign />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="admin/login" element={<AdminLogin />} />
                  <Route path="admin/messages" element={<AdminMessages />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
