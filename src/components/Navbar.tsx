import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: '소개',    href: '#about'    },
  { label: '기술',    href: '#skills'   },
  { label: '프로젝트', href: '#projects' },
  { label: '연락처',  href: '#contact'  },
] as const;

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a
          href="#hero"
          className={styles.logo}
          onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
        >
          <span className={styles.logoAccent}>&lt;</span>NW<span className={styles.logoAccent}>/&gt;</span>
        </a>
        <ul className={styles.links}>
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
