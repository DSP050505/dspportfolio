import React, { useRef, useState } from 'react';
import styles from '../styles/Contact.module.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setError('');
    setSending(true);
    setSent(false);
    emailjs.sendForm(
      'service_d09wa9c',
      'template_um9wgzm',
      form.current,
      'KbWBGoyFUOS7C0htE'
    )
    .then((result) => {
      setSent(true);
      setSending(false);
      form.current.reset();
    }, (error) => {
      setError('Failed to send message. Please try again.');
      setSending(false);
    });
  };

  // Simple email format validation
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className={styles.contactBg}>
      <div className={styles.contactCardCentered}>
        <h1 className={styles.title}>Contact Me</h1>
        <form ref={form} className={styles.formCentered} autoComplete="off" onSubmit={sendEmail}>
          <label htmlFor="from_name">Full Name</label>
          <input type="text" id="from_name" name="from_name" placeholder="Your Name" autoComplete="off" required />
          <label htmlFor="from_email">E-mail</label>
          <input type="email" id="from_email" name="from_email" placeholder="you@email.com" autoComplete="off" required pattern="[^\s@]+@[^\s@]+\.[^\s@]+" />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Type your message..." rows={4} required></textarea>
          <button type="submit" className={styles.sendBtnCentered} disabled={sending}>{sending ? 'Sending...' : 'Send'}</button>
          {sent && <div className={styles.success}>Message sent! Thank you.</div>}
          {error && <div className={styles.error}>{error}</div>}
          <div className={styles.socialsCentered}>
            <a href="https://github.com/DSP050505" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/dola-devi-sri-prasad-301a50315/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://www.instagram.com/mudbloodfr_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact; 