import React from 'react';
import styles from '../styles/Contact.module.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => (
  <div className={styles.contactBg}>
    <div className={styles.contactCardCentered}>
      <h1 className={styles.title}>Contact Us</h1>
      <form className={styles.formCentered} autoComplete="off">
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name" autoComplete="off" />
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" placeholder="you@email.com" autoComplete="off" />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Type your message..." rows={4}></textarea>
        <button type="submit" className={styles.sendBtnCentered}>Send</button>
        <div className={styles.socialsCentered}>
          <a href="https://github.com/DSP050505" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/dola-devi-sri-prasad-301a50315/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://www.instagram.com/mudbloodfr_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </form>
    </div>
  </div>
);

export default Contact; 