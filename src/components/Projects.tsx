import { motion } from 'framer-motion';
import styles from './Projects.module.css';

interface PLink { label: string; href: string; type: 'github' | 'youtube' | 'demo'; }

interface Project {
  number: string;
  title: string;
  subtitle: string;
  events: string[];
  desc: string;
  role: string[];
  tags: string[];
  gradient: string;
  links: PLink[];
}

interface MiniProject {
  title: string;
  year: string;
  event: string;
  tags: string[];
  links: PLink[];
  award?: string;
}

const MINI_PROJECTS: MiniProject[] = [
  {
    title: '아동 안전을 위한 인공지능 모니터링 시스템',
    year: '2021',
    event: '2021년도 대한전기학회 산업전기위원회 추계학술대회',
    tags: ['Python', 'Raspberry Pi', 'Google Cloud API', 'AWS IoT', 'MQTT'],
    links: [],
  },
  {
    title: '학생 안전 관리 시스템 (DREAMY)',
    year: '2021',
    event: '2021년 이브와 ICT멘토링',
    award: '2021 이브와 공모전 입선 🏆',
    tags: ['Node.js', 'MySQL', 'MQTT', 'Vue.js', 'Arduino ESP32'],
    links: [{ label: 'YouTube', href: 'https://www.youtube.com/watch?v=7rJORjFjFyQ', type: 'youtube' }],
  },
];

const PROJECTS: Project[] = [
  {
    number: '01',
    title: 'AI기반 회의록 관리 시스템 (DialoG)',
    subtitle: '팀 프로젝트',
    events: ['이젠아카데미DX교육센터 백엔드 웹개발자 부트캠프'],
    desc: '회의 내용을 실시간 텍스트화하고, 회의록·일정을 자동 생성하며 챗봇으로 회의 내용을 검색·질의할 수 있는 웹 서비스입니다.',
    role: [
      '실시간 STT 서버 개발 — CLOVA Speech API + gRPC 스트리밍으로 48kHz→16kHz PCM 변환 후 10ms 프레임 단위 전송, WebSocket으로 500ms 이내 실시간 텍스트 변환 처리',
      '화자 구분(Diarization) 시스템 구현 — 최대 10인 참가자의 발화 로그를 화자별로 매핑·분리하는 식별 로직 설계',
      '프론트엔드 기본 구조 설계 + Docker 환경 구축 — 전체 HTML/CSS/JS 구조 설계, 실시간 음성 녹음·STT 처리 화면 구현, AWS EC2 + Docker Compose + Caddy HTTPS 기반 실서비스 배포',
      'STT·백엔드 서버 연결 — 스트리밍 서버와 Spring Boot 백엔드 간 3개 API 엔드포인트 연동, Template 페르소나 적용으로 AI API 비용 약 80% 절감, Redis 캐싱으로 챗봇 응답 레이턴시 단축, 핵심 기능 목표 달성도 90%',
    ],
    tags: ['Python', 'FastAPI', 'CLOVA Speech', 'CLOVA Chatbot', 'HyperCLOVA X', 'WebSocket', 'gRPC', 'Spring Boot', 'Spring Security', 'Redis', 'Docker', 'AWS EC2'],
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    links: [
      { label: 'GitHub',    href: 'https://github.com/DialoG1125',               type: 'github'  },
      { label: 'YouTube',   href: 'https://www.youtube.com/watch?v=CXcnrlnhUwg', type: 'youtube' },
    ],
  },
  {
    number: '02',
    title: 'AI 여행 플랫폼 (TripMoa)',
    subtitle: '팀 프로젝트 · 진행중',
    events: ['🚧 진행중'],
    desc: '여행 일정 자동 생성·관리부터 동행자 매칭, 정산까지 여행의 전 과정을 지원하는 AI 기반 여행 커뮤니티 플랫폼입니다.',
    role: [
      'AI 일정 생성 서버 개발 (FastAPI) — LangChain + HyperCLOVA X로 장소별 체류시간·페이스 산정, Nearest Neighbor TSP + Haversine으로 하루 동선을 최적화해 이동 거리 30% 이상 단축',
      'ODsay 대중교통 API + NAVER Map Geocoding API 연동 — 실제 이동시간 계산 및 주소→좌표 변환, 핀 장소 고정·충돌 검사 로직 구현',
      'Spring Boot AI 클라이언트 개발 — Python AI 서버와 RestTemplate으로 통신, 일정 생성·장소 검색·OCR LLM 분석 3개 엔드포인트 프록시 처리',
      '프론트엔드 AI 일정 생성 UI 개발 (React/TypeScript) — 장소 검색·핀 고정·숙소·출발지·교통수단 설정 모달 구현, 생성된 타임라인 DayView 렌더링',
    ],
    tags: ['Python', 'FastAPI', 'LangChain', 'HyperCLOVA X', 'Spring Boot', 'React', 'TypeScript', 'NAVER Map API', 'ODsay API', 'Docker'],
    gradient: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
    links: [
      { label: 'GitHub', href: 'https://github.com/TripMoa', type: 'github' },
    ],
  },
  {
    number: '03',
    title: 'Robot Arm 센싱을 통한 AI 예시보전 솔루션 개발 및 구현',
    subtitle: '팀 프로젝트',
    events: ['산학연계 SW프로젝트', '2024년 대한산업공학회 추계학술대회', 'SW등록 C-2024-040063'],
    desc: '산업용 로봇 팔(UR3e)의 6축 센서 데이터를 CAE+GRU 모델로 분석해 이상 동작을 실시간으로 탐지·시각화하는 AI 솔루션입니다.',
    role: [
      '데이터 수집 파이프라인 구축 — WISE-2410·EVA-2210 하드웨어 연동, Modbus로 UR3e 6축 센서 데이터 초당 100회 실시간 수집',
      'WISE-PaaS/Dashboard 구성 — SingleStat·Graph·Thermometer 6개 패널로 센서 데이터 시각화·이상 탐지 현황 표시 (AI 모델: 타 팀원 담당, CAE MSE 0.0095 / GRU MSE 0.00004 달성)',
      'LINE 실시간 알림 연동 (WISE-PaaS/Notification) — 이상 감지 시 담당자에게 즉시 푸시 발송, 팀장으로 일정·역할 분배 총괄',
    ],
    tags: ['Python', 'Flask', 'MySQL', 'TensorFlow', 'CAE', 'GRU', 'WISE-PaaS', 'Modbus', 'AWS EC2'],
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    links: [
      { label: 'GitHub',  href: 'https://github.com/nwkim6294/KW_Aius',          type: 'github'  },
      { label: 'YouTube', href: 'https://www.youtube.com/watch?v=b-ltp2Gh6-s',   type: 'youtube' },
    ],
  },
  {
    number: '04',
    title: '협동로봇 기반 객체 인식을 활용한 결제 및 포장 지원 로봇시스템',
    subtitle: '팀 프로젝트',
    events: ['2024년도 한국생산제조학회 추계학술대회', '2024 로보월드', '2024 CO-SHOW'],
    desc: 'YOLOv4·CRNN으로 상품을 인식하고, 키오스크 결제부터 로봇 팔 포장까지 전 과정을 자동화한 협동로봇 시스템입니다.',
    role: [
      'React 기반 키오스크 UI 제작 — 상품 인식·결제·포장 3단계 화면 흐름 설계 및 구현, YOLOv4 인식 결과를 실시간 표시 (전 클래스 평균 정확도 90% 이상, CRNN 필기체 인증 96.057% 달성)',
      'Node.js 백엔드 서버 개발 — 키오스크·로봇·서버 간 REST API 설계, 팀장으로 일정·역할 분배 총괄',
      'Socket.IO 실시간 통신 구현 — UR3e 로봇 제어 명령 및 상태를 클라이언트에 100ms 이내 실시간 동기화, 상품 인식 소요 약 8초',
    ],
    tags: ['React', 'Node.js', 'Socket.IO', 'YOLOv4', 'CRNN', 'UR3e', 'Axios'],
    gradient: 'linear-gradient(135deg, #22c55e 0%, #06b6d4 100%)',
    links: [
      { label: '2024 로보월드', href: 'https://www.youtube.com/watch?v=K_iIgnoDD0o', type: 'youtube' },
      { label: '2024 CO-SHOW', href: 'https://www.youtube.com/watch?v=814huLgABlY',  type: 'youtube' },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>// 프로젝트</p>
        <h2 className={styles.title}>직접 만든<br />것들입니다.</h2>

        <div className={styles.list}>
          {PROJECTS.map((p) => (
            <motion.article
              key={p.number}
              className={styles.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* 왼쪽 컬러 패널 */}
              <div className={styles.panel} style={{ background: p.gradient }}>
                <span className={styles.num}>{p.number}</span>
              </div>

              {/* 오른쪽 정보 */}
              <div className={styles.info}>
                <div className={styles.eventRow}>
                  {p.events.map((e) => (
                    <span
                      key={e}
                      className={`${styles.event} ${e.includes('진행중') ? styles.eventInProgress : ''}`}
                    >{e}</span>
                  ))}
                </div>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardSub}>{p.subtitle}</p>
                <p className={styles.desc}>{p.desc}</p>

                {/* 담당 역할 */}
                <div className={styles.roleBox}>
                  <span className={styles.roleLabel}>담당 역할</span>
                  <ul className={styles.roleList}>
                    {p.role.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>
                </div>

                {/* 기술 태그 */}
                <div className={styles.tags}>
                  {p.tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
                </div>

                {/* 링크 */}
                {p.links.length > 0 && (
                  <div className={styles.links}>
                    {p.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className={styles[l.type]}
                      >
                        {l.type === 'youtube' ? '▶ ' : l.type === 'github' ? '↗ ' : '→ '}
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* 기타 프로젝트 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.miniSection}
        >
          <p className={styles.miniLabel}>// 기타 프로젝트</p>
          <div className={styles.miniGrid}>
            {MINI_PROJECTS.map((p) => (
              <div key={p.title} className={styles.miniCard}>
                <div className={styles.miniTop}>
                  <span className={styles.miniYear}>{p.year}</span>
                  {p.award && <span className={styles.miniAward}>{p.award}</span>}
                </div>
                <p className={styles.miniTitle}>{p.title}</p>
                <p className={styles.miniEvent}>{p.event}</p>
                <div className={styles.miniTags}>
                  {p.tags.map((t) => <span key={t} className={styles.miniTag}>{t}</span>)}
                </div>
                {p.links.length > 0 && (
                  <div className={styles.miniLinks}>
                    {p.links.map((l) => (
                      <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className={styles[l.type]}>
                        ▶ {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
