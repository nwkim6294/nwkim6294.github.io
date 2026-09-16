import { motion } from 'framer-motion';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
        >
          <p className={styles.label}>// 연락처</p>
          <h2 className={styles.title}>함께 만들어가겠습니다</h2>
          <p className={styles.desc}>
            새로운 프로젝트, 협업, 취업 제안을 기다리고 있습니다.<br />
          </p>
          <a href="mailto:nwkim6294@gmail.com" className={styles.email}>
            nwkim6294@gmail.com
          </a>
          <div className={styles.socials}>
            <a href="https://github.com/nwkim6294" target="_blank" rel="noreferrer" className={styles.socialBtn}>GitHub</a>
            <a href="https://linkedin.com/in/나운-김-460a69367" target="_blank" rel="noreferrer" className={styles.socialBtn}>LinkedIn</a>
            <a href="/resume.pdf" download className={styles.resumeBtn}>이력서 다운로드 ↓</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
