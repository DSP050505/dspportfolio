import React from 'react';
import styles from '../styles/Home.module.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiCplusplus, SiJquery, SiBootstrap, SiExpress, SiPostgresql, SiOracle, SiPostman } from 'react-icons/si';

const techStack = [
  { name: 'C++', icon: <SiCplusplus color="#00599C" /> },
  { name: 'Python', icon: <FaPython color="#3776AB" /> },
  { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
  { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
  { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
  { name: 'Bootstrap', icon: <SiBootstrap color="#7952B3" /> },
  { name: 'jQuery', icon: <SiJquery color="#0769AD" /> },
  { name: 'React.js', icon: <FaReact color="#61DAFB" /> },
  { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
  { name: 'Express.js', icon: <SiExpress color="#000" /> },
  { name: 'Oracle SQL', icon: <SiOracle color="#F80000" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" /> },
  { name: 'Git', icon: <FaGitAlt color="#F05032" /> },
  { name: 'GitHub', icon: <FaGithub color="#181717" /> },
  { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
  
];

const Home = () => (
  <div className={styles.landingWrapper}>
    <section className={styles.heroSection}>
      <div className={styles.heroBanner}>
        <h1 className={styles.cornerTitle}>WELCOME TO MY CORNER OF THE INTERNET</h1>
      </div>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <span className={styles.hello}>Hello! I&apos;m</span>
          <h1 className={styles.name}>Devi Sri Prasad Dola</h1>
          <h2 className={styles.subtitle}>Full Stack Enthusiast | EEE Undergrad @ NIT Warangal</h2>
          <p className={styles.bio}>Passionate about building real-world digital products with clean design, scalable architecture, and a user-first mindset.</p>
          <div className={styles.socials}>
            <a href="https://www.linkedin.com/in/dola-devi-sri-prasad-301a50315/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://github.com/DSP050505" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="mailto:doladevisriprasad050505@gmail.com" aria-label="Email"><FaEnvelope /></a>
          </div>
        </div>
        <div className={styles.heroImageWrapper}>
          <img src={require('../assets/images/profile-placeholder.png')} alt="Profile" className={styles.profileImg} onError={e => e.target.src = 'https://via.placeholder.com/320'} />
        </div>
      </div>
      <svg className={styles.curve} viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,60 Q720,140 1440,60 L1440,120 L0,120 Z" fill="#f8f9fa" stroke="none"/>
      </svg>
    </section>
    <section className={styles.techStackSection}>
      <h2 className={styles.techStackTitle}>Tech Stack</h2>
      <div className={styles.techStackRow}>
        {techStack.map((tech, idx) => (
          <div className={styles.techItem} key={tech.name} title={tech.name}>
            <span className={styles.techIcon}>{tech.icon}</span>
            <span className={styles.techName}>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Home; 