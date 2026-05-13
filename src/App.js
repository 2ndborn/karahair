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
import Loader from '../src/components/Loader';
import { useEffect, useState } from 'react';

function App() {
  const [isLoaded, setIsLoader] = useState(true);
  const location = useLocation();
  useEffect(() => {
    setIsLoader(true);
    const timer = setTimeout(() => {
      setIsLoader(false)
    }, 1000);
    return () => clearTimeout(timer)
  }, [location.pathname]);

  return (
    <div className={styles.App}>
      {/* <ScrollToTop /> */}
        <AnimatePresence mode="wait" >
      {isLoaded ? (
        <Loader />
      ) : (
        <>
      <NavBar />
      <div className={styles.Main}>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/mystory" element={<MyStoryPage />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/gallery" element={<Gallery />} />
            <Route exact path="/contactme" element={<Contact />} />
            <Route path="*" element={<NotFoundComponent />} />
          </Routes>
      </div>
      <Footer />
      </>
          )}
        </AnimatePresence>
    </div>
  );
}

export default App;
