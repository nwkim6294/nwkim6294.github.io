import { motion } from 'framer-motion';
import styles from './About.module.css';

const EDUCATION = [
  {
    school: '광운대학교',
    major: '정보융합학부',
    degree: '학사 (편입)',
    period: '2023.03 — 2025.02',
  },
  {
    school: '한양여자대학교',
    major: '컴퓨터정보과',
    degree: '전문학사',
    period: '2019.03 — 2023.01',
  },
] as const;

const AWARDS = [
  {
    title: '2021 이브와 공모전 입선',
    org: '한컴인텔리전스',
    date: '2021.12',
    desc: 'DREAMY — 특수학교 학생 출결 관리 시스템',
  },
] as const;

const STATS = [
  { number: '5',    label: '프로젝트' },
  { number: '3',    label: '학회 발표' },
  { number: '1',    label: '수상' },
] as const;

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>// 소개</p>

        <div className={styles.topGrid}>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .65 }}
          >
            <h2 className={styles.title}>코드로 아이디어를<br />현실로 만듭니다.</h2>
            <p className={styles.bio}>
              백엔드 개발자를 목표로, API 설계·서버 구축·AI 연동에
              집중해온 개발자입니다. 산업용 로봇 이상 탐지,
              협동로봇 자동화, AI 회의 보조 등 다양한 프로젝트에서
              서버 및 시스템 설계를 담당했습니다.
            </p>
            <p className={styles.bio} style={{ marginTop: '12px' }}>
              광운대학교 정보융합학부를 졸업했으며 여러 학회와 전시에 참여하며 경험을 쌓았습니다.
            </p>

            <div className={styles.stats}>
              {STATS.map((s) => (
                <div key={s.label} className={styles.stat}>
                  <span className={styles.statNum}>{s.number}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles.imageWrap}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .65, delay: .1 }}
          >
          <img
            src={`${import.meta.env.BASE_URL}profile.png`}
            alt="김나운 프로필 사진"
            className={styles.profileImg}
          />
          </motion.div>
        </div>

        {/* 학력 */}
        <motion.div
          className={styles.block}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
        >
          <h3 className={styles.blockTitle}>학력</h3>
          <div className={styles.eduList}>
            {EDUCATION.map((e) => (
              <div key={e.school} className={styles.eduItem}>
                <div className={styles.eduLeft}>
                  <span className={styles.eduSchool}>{e.school}</span>
                  <span className={styles.eduMajor}>{e.major} · {e.degree}</span>
                </div>
                <span className={styles.eduPeriod}>{e.period}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 교육이수 */}
        <motion.div
          className={styles.block}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5, delay: .05 }}
        >
          <h3 className={styles.blockTitle}>교육이수</h3>
          <div className={styles.eduList}>
            <div className={styles.eduItem}>
              <div className={styles.eduLeft}>
                <span className={styles.eduSchool}>이젠아카데미DX교육센터</span>
                <span className={styles.eduMajor}>백엔드 웹개발자 부트캠프 (Java · Python · AI챗봇) · 900H</span>
              </div>
              <span className={styles.eduPeriod}>2025.06 — 2025.12</span>
            </div>
          </div>
        </motion.div>

        {/* 수상 & 어학 */}
        <div className={styles.bottomGrid}>
          <motion.div
            className={styles.block}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .5, delay: .05 }}
          >
            <h3 className={styles.blockTitle}>수상</h3>
            {AWARDS.map((a) => (
              <div key={a.title} className={styles.awardItem}>
                <div className={styles.awardBadge}>🏆</div>
                <div>
                  <p className={styles.awardTitle}>{a.title}</p>
                  <p className={styles.awardMeta}>{a.org} · {a.date}</p>
                  <p className={styles.awardDesc}>{a.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className={styles.block}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .5, delay: .1 }}
          >
            <h3 className={styles.blockTitle}>어학</h3>
            <div className={styles.langItem}>
              <div className={styles.langInfo}>
                <span className={styles.langName}>영어 — OPIc</span>
                <span className={styles.langScore}>IM2</span>
              </div>
              <div className={styles.langBar}>
                <div className={styles.langFill} style={{ width: '62%' }} />
              </div>
              <p className={styles.langNote}>Intermediate Mid 2 수준</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
