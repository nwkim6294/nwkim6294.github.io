import { motion } from 'framer-motion';
import styles from './Hero.module.css';

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
}

const CODE_SNIPPET = `const developer = {
  name: "김나운",
  role: "Backend Developer",
  stack: [ "Java", "Spring Boot", 
           "Python", "FastAPI",
           "MySQL", "React"],
  interests: ["서버 아키텍처", "AI 연동",
               "시스템 설계"],
  available: true,
};`;

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5 }}
          >
            <span className={styles.dot} />
            현재 기회를 찾고 있습니다
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .65, delay: .15 }}
          >
            안녕하세요,<br />
            <span className={styles.name}>김나운</span>
            <span>입니다.</span>
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6, delay: .3 }}
          >
            사람과 서비스 사이의 흐름을 만듭니다.<br />
            보이지 않는 연결을 설계하는 개발자입니다.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5, delay: .45 }}
          >
            <button className={styles.btnPrimary} onClick={() => scrollTo('#projects')}>
              프로젝트 보기
            </button>
            <button className={styles.btnGhost} onClick={() => scrollTo('#about')}>
              더 알아보기 →
            </button>
          </motion.div>
        </div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .7, delay: .25 }}
        >
          <div className={styles.codeCard}>
            <div className={styles.codeBar}>
              <span className={styles.dot1} />
              <span className={styles.dot2} />
              <span className={styles.dot3} />
              <span className={styles.filename}>developer.ts</span>
            </div>
            <pre className={styles.code}>{CODE_SNIPPET}</pre>
          </div>
        </motion.div>
      </div>

      <div className={styles.scrollHint}>
        <span>스크롤</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
