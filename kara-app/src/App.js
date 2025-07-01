import styles from './App.module.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { Route, Routes } from "react-router-dom";

import HomePage from './pages/HomePage';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <div className={styles.Main}> {/* Use div instead of Container */}
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/mystory" element={<h2>My Story</h2>} />
          <Route exact path="/contactme" element={<h2>Contact Me</h2>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
