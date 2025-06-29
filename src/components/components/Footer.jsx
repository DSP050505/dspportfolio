import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div>© {new Date().getFullYear()} Devi Sri Prasad Dola. All rights reserved.</div>
    <div className={styles.socials}>
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="mailto:dd22eeb0b31@student.nitw.ac.in">Email</a>
    </div>
  </footer>
);

export default Footer; 