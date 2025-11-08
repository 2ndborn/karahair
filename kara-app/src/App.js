import styles from './App.module.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { Route, Routes, useLocation } from "react-router-dom";

import HomePage from './pages/HomePage';
import MyStoryPage from './pages/MyStoryPage';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import { AnimatePresence } from 'motion/react';
import ScrollToTop from './components/ScrollToTopComponent';
import NotFoundComponent from './components/NotFoundComponent';

function App() {
  const location = useLocation();
  return (
    <div className={styles.App}>
      <ScrollToTop />
      <NavBar />
      <div className={styles.Main}>
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo({ top: 0, behavior: "auto" })}>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/mystory" element={<MyStoryPage />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/gallery" element={<Gallery />} />
            <Route exact path="/contactme" element={<Contact />} />
            <Route path="*" element={<NotFoundComponent />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}

export default App;
