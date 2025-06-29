import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div>© {new Date().getFullYear()} Devi Sri Prasad Dola. All rights reserved.</div>
    <div className={styles.socials}>
      <a href="https://github.com/DSP050505" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/dola-devi-sri-prasad-301a50315/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="mailto:doladevisriprasad050505@gmail.com">Email</a>
    </div>
  </footer>
);

export default Footer; 