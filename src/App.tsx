import { useMouseSpotlight } from './hooks/useMouseSpotlight';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import styles from './App.module.css';

export default function App() {
  useMouseSpotlight();

  return (
    <>
      <div id="dot-grid" />
      <div id="spotlight" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className={styles.footer}>
        <div className={styles.inner}>
          <span>© 2026 김나운. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
