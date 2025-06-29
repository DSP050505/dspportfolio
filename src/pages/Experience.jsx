import React from 'react';
import styles from '../styles/Experience.module.css';
import { FaDownload } from 'react-icons/fa';

const Experience = () => (
  <section className={styles.experience}>
    <h1 className={styles.title}>Experience</h1>
    <div className={styles.resumeBtnWrapper}>
      <a href="/resume/resume.pdf" download className={styles.resumeBtn}>
        <FaDownload className={styles.downloadIcon} /> Download Resume
      </a>
    </div>
    <div className={styles.timelineClassic}>
      <div className={styles.timelineLine}></div>
      <div className={styles.timelineEntry}>
        <div className={styles.timelineDot}></div>
        <div className={styles.timelineText}>
          <span className={styles.timelineDate}>2022 – Present</span>
          <span className={styles.timelineDesc}>Yet to receive my first job offer</span>
        </div>
      </div>
    </div>
  </section>
);

export default Experience; 