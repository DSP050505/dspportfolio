import React from 'react';
import styles from '../styles/Projects.module.css';

const projects = [
  {
    title: 'FarmaConnect – Agricultural Marketplace',
    image: require('../assets/images/farmaconnect.png'),
    description: 'A real-time agricultural marketplace with role-based authentication, real-time price negotiation, and secure payment processing.',
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Socket.IO', 'Stripe', 'Render', 'Vercel'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Amazon Clone – Fullstack E-Commerce',
    image: require('../assets/images/amazonclone.png'),
    description: 'A responsive full-stack e-commerce platform with user authentication, real-time cart, and secure payment using React.js and Firebase.',
    tech: ['React.js', 'Firebase', 'HTML', 'CSS', 'JavaScript'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Social Media Database Project',
    image: require('../assets/images/socialmedia.png'),
    description: 'A social media database schema to manage user interactions, posts, comments, likes, and messaging.',
    tech: ['DBMS', 'SQL'],
    github: '#',
    demo: ''
  }
];

const Projects = () => (
  <section className={styles.projects}>
    <h1>Projects</h1>
    <div className={styles.grid}>
      {projects.map((proj, idx) => (
        <div key={idx} className={styles.card}>
          <img src={proj.image} alt={proj.title} className={styles.projectImg} />
          <h3>{proj.title}</h3>
          <p>{proj.description}</p>
          <div className={styles.tech}>
            {proj.tech.map(t => <span key={t} className={styles.techTag}>{t}</span>)}
          </div>
          <div className={styles.links}>
            {proj.github && <a href={proj.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
            {proj.demo && <a href={proj.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects; 