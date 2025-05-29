import styles from './App.module.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import { Route, Routes } from "react-router-dom";

import HomePage from './pages/HomePage';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/mystory' element={<h2>My Story</h2>} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
