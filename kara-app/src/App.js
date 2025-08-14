import styles from './App.module.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { Route, Routes } from "react-router-dom";

import HomePage from './pages/HomePage';
import MyStoryPage from './pages/MyStoryPage';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <div className={styles.Main}> {/* Use div instead of Container */}
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/mystory" element={<MyStoryPage />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/contactme" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
