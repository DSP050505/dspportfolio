import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can add logic to send the form data
  };

  return (
    <section className={styles.contact}>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required />
        <button type="submit">Send</button>
      </form>
      {submitted && <div className={styles.success}>Thank you! I will get back to you soon.</div>}
      <div className={styles.socials}>
        <a href="https://github.com/DSP050505" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/dola-devi-sri-prasad-301a50315/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:doladevisriprasad050505@gmail.com">Email</a>
      </div>
    </section>
  );
};

export default Contact; 