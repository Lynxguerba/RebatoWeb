import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import PortalLoader from './components/PortalLoader';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';

function App() {
  const [loading, setLoading] = useState(true);

  // Fallback to clear loading just in case the animation doesn't trigger onComplete
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <PortalLoader onComplete={() => setLoading(false)} />}
      
      {/* Hide the main app until the loader is done */}
      <div className={loading ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 transition-opacity duration-500'}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="certificates" element={<Certificates />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
