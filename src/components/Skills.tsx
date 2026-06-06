import { motion } from 'framer-motion';
import styles from './Skills.module.css';

interface Category {
  label: string;
  color: string;
  skills: string[];
}

const CATEGORIES: Category[] = [
  {
    label: 'Backend',
    color: '#6366f1',
    skills: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'Node.js', 'Express', 'WebSocket', 'REST API'],
  },
  {
    label: 'Database',
    color: '#22c55e',
    skills: ['MySQL', 'MongoDB', 'MariaDB', 'AWS RDS'],
  },
  {
    label: 'AI / LLM',
    color: '#f59e0b',
    skills: ['YOLOv4', 'OpenCV', 'HyperCLOVA X', 'Clova Speech'],
  },
  {
    label: 'Frontend',
    color: '#38bdf8',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    label: 'DevOps / Cloud',
    color: '#ec4899',
    skills: ['AWS EC2', 'Docker', 'Git', 'GitHub Actions', 'Linux', 'Figma'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>// 기술 스택</p>
        <h2 className={styles.title}>도구를 능숙하게<br />다룹니다.</h2>

        <div className={styles.grid}>
          {CATEGORIES.map((cat, ci) => (
            <motion.div
              key={cat.label}
              className={styles.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
            >
              <span className={styles.catLabel} style={{ color: cat.color }}>
                {cat.label}
              </span>
              <div className={styles.pills}>
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className={styles.pill}
                    style={{ '--pill-color': cat.color } as React.CSSProperties}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}