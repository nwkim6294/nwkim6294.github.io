import { motion } from 'framer-motion';
import styles from './Hero.module.css';

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
}

const PREVIEW = [
  { num: '01', title: 'AI기반 회의록 관리 시스템 (DialoG)', result: 'STT 스트리밍 · WebSocket 500ms · AI 비용 80%↓' },
  { num: '02', title: 'AI 여행 플랫폼 (TripMoa)',           result: '진행중 · 동선 최적화 30%↑ · LangChain + HyperCLOVA X' },
  { num: '03', title: 'Robot Arm AI 이상 탐지 솔루션',       result: '데이터 수집 100회/s · 학회 발표 · SW등록' },
  { num: '04', title: '협동로봇 결제·포장 로봇시스템',       result: 'YOLOv4 90% · CRNN 96% · 로보월드 전시' },
];

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        {/* Left */}
        <div className={styles.left}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .45 }}
          >
            <span className={styles.dot} />
            구직 중입니다
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6, delay: .12 }}
          >
            김나운
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .55, delay: .25 }}
          >
            Java·Spring Boot로 백엔드를 설계하고<br />
            Python·FastAPI로 AI를 서비스에 직접 연결하는<br />
            <strong>백엔드 개발자</strong>입니다.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .45, delay: .38 }}
          >
            <button className={styles.btnPrimary} onClick={() => scrollTo('#projects')}>
              프로젝트 보기
            </button>
            <button className={styles.btnGhost} onClick={() => scrollTo('#contact')}>
              연락하기 →
            </button>
          </motion.div>
        </div>

        {/* Right: project preview list */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .65, delay: .2 }}
        >
          {PREVIEW.map((p, i) => (
            <motion.button
              key={p.num}
              className={styles.previewRow}
              onClick={() => scrollTo('#projects')}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: .45, delay: .3 + i * .07 }}
            >
              <span className={styles.previewNum}>{p.num}</span>
              <span className={styles.previewText}>
                <span className={styles.previewTitle}>{p.title}</span>
                <span className={styles.previewResult}>{p.result}</span>
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
