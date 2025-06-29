import React from 'react';
import styles from '../styles/Experience.module.css';

const experiences = [
  {
    title: 'Centre for Career Planning and Development, Training and Placement Associate',
    period: 'March 2023 - Present',
    details: 'Planning and Placement Associate at NIT Warangal.'
  },
  {
    title: 'Electrical Engineering Society, Additional Secretary',
    period: 'July 2023 - April 2025',
    details: 'Organizing and managing society events.'
  }
];

const achievements = [
  {
    title: 'Top 3.4% in Amazon HackOn 5.0 – Idea submission round qualifier',
    date: 'July 2025'
  },
  {
    title: 'Winner of Inauzhon 2023.24 organized by Hitachi Company',
    date: 'October 2023, NITW'
  }
];

const Experience = () => (
  <section className={styles.experience}>
    <h1>Experience</h1>
    <div className={styles.timeline}>
      {experiences.map((exp, idx) => (
        <div key={idx} className={styles.expCard}>
          <h3>{exp.title}</h3>
          <span>{exp.period}</span>
          <p>{exp.details}</p>
        </div>
      ))}
    </div>
    <h2>Achievements</h2>
    <ul className={styles.achievements}>
      {achievements.map((ach, idx) => (
        <li key={idx}><strong>{ach.title}</strong> – {ach.date}</li>
      ))}
    </ul>
  </section>
);

export default Experience; 