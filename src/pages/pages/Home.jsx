import React from 'react';
import styles from '../styles/Home.module.css';

const Home = () => (
  <section className={styles.hero}>
    <div className={styles.heroContent}>
      <img src={require('../assets/images/profile-placeholder.png')} alt="Profile" className={styles.profileImg} onError={e => e.target.src = 'https://via.placeholder.com/120'} />
      <h1>Devi Sri Prasad Dola</h1>
      <h2>Electrical and Electronics Engineering Student</h2>
      <p>BTech | NIT Warangal | Full Stack Developer | Passionate about building impactful digital solutions.</p>
      <a href="/resume/resume.pdf" className={styles.resumeBtn} download>Download Resume</a>
    </div>
  </section>
);

export default Home; 