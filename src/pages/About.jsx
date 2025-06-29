import React from 'react';
import styles from '../styles/About.module.css';
import { FaUniversity, FaSchool } from 'react-icons/fa';

const education = [
  {
    school: 'National Institute of Technology, Warangal',
    degree: 'B.Tech in Electrical and Electronics Engineering',
    period: 'Nov 2022 - Present',
    details: 'CGPA: 8.05',
    icon: <FaUniversity size={28} color="#0072b1" />,
  },
  {
    school: 'Narayana English Medium College',
    degree: 'Central Board of Secondary Education',
    period: 'June 2020 - June 2022',
    details: 'Percentage: 93.00',
    icon: <FaSchool size={26} color="#0072b1" />,
  },
  {
    school: 'Sri Chaitanya Techno School',
    degree: 'Board of Secondary Education, Andhra Pradesh',
    period: 'June 2019 - May 2020',
    details: 'Percentage: 97.00',
    icon: <FaSchool size={26} color="#0072b1" />,
  }
];

const NeuralBg = () => (
  <svg className={styles.neuralBg} viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <g stroke="#00ffe0" strokeWidth="1.2" opacity="0.18">
      <circle cx="120" cy="320" r="4" fill="#00ffe0" opacity="0.7" />
      <circle cx="300" cy="180" r="4" fill="#00ffe0" opacity="0.7" />
      <circle cx="500" cy="100" r="4" fill="#00ffe0" opacity="0.7" />
      <circle cx="700" cy="200" r="4" fill="#00ffe0" opacity="0.7" />
      <circle cx="900" cy="120" r="4" fill="#00ffe0" opacity="0.7" />
      <circle cx="1050" cy="300" r="4" fill="#00ffe0" opacity="0.7" />
      <circle cx="800" cy="400" r="4" fill="#00ffe0" opacity="0.7" />
      <circle cx="400" cy="400" r="4" fill="#00ffe0" opacity="0.7" />
      <line x1="120" y1="320" x2="300" y2="180" />
      <line x1="300" y1="180" x2="500" y2="100" />
      <line x1="500" y1="100" x2="700" y2="200" />
      <line x1="700" y1="200" x2="900" y2="120" />
      <line x1="900" y1="120" x2="1050" y2="300" />
      <line x1="1050" y1="300" x2="800" y2="400" />
      <line x1="800" y1="400" x2="400" y2="400" />
      <line x1="400" y1="400" x2="120" y2="320" />
      <line x1="300" y1="180" x2="700" y2="200" />
      <line x1="500" y1="100" x2="900" y2="120" />
      <line x1="700" y1="200" x2="1050" y2="300" />
    </g>
  </svg>
);

const About = () => (
  <section className={styles.aboutSection}>
    <NeuralBg />
    <h1 className={styles.title}>About Me</h1>
    <div className={styles.bioBox}>
      <p className={styles.bio}>
        I'm Devi Sri Prasad Dola, a passionate full stack development enthusiast and Electrical Engineering student at NIT Warangal. I enjoy creating practical digital solutions and have hands-on experience building full-fledged web applications using React, Node.js, PostgreSQL, and more.<br /><br />
        From real-time marketplaces to e-commerce platforms, I focus on crafting user-friendly and scalable systems. My work has been recognized in innovation competitions like Hitachi Innothon, and I've also been a top performer in Amazon HackOn. I thrive in fast-paced, problem-solving environments and love turning ideas into impactful software.
      </p>
    </div>
    <h2 className={styles.eduTitle}>Education</h2>
    <div className={styles.eduCardsRow}>
      {education.map((edu, idx) => (
        <div key={idx} className={styles.eduCard}>
          <div className={styles.eduIcon}>{edu.icon}</div>
          <div className={styles.eduInfo}>
            <div className={styles.eduSchool}>{edu.school}</div>
            <div className={styles.eduDegree}>{edu.degree}</div>
            <div className={styles.eduPeriod}>{edu.period}</div>
            <div className={styles.eduDetails}>{edu.details}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default About; 