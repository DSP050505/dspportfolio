import React from 'react';
import styles from '../styles/About.module.css';

const skills = [
  'C++', 'Python', 'JavaScript', 'HTML5', 'CSS3',
  'Bootstrap', 'jQuery', 'React.js',
  'Node.js', 'Express.js',
  'Oracle SQL', 'PostgreSQL',
  'Git', 'GitHub', 'Postman', 'DBMS', 'Operating Systems'
];

const education = [
  {
    school: 'National Institute of Technology, Warangal',
    degree: 'B.Tech in Electrical and Electronics Engineering',
    period: 'Nov 2022 - Present',
    details: 'CGPA: 8.05'
  },
  {
    school: 'Narayana English Medium College',
    degree: 'Central Board of Secondary Education',
    period: 'June 2020 - June 2022',
    details: 'Percentage: 93.00'
  },
  {
    school: 'Sri Chaitanya Techno School',
    degree: 'Board of Secondary Education, Andhra Pradesh',
    period: 'June 2019 - May 2020',
    details: 'Percentage: 97.00'
  }
];

const About = () => (
  <section className={styles.about}>
    <h1>About Me</h1>
    <p>Hi! I'm Devi Sri Prasad Dola, a passionate full stack developer and EEE student at NIT Warangal. I love building scalable web apps and learning new technologies.</p>
    <h2>Skills</h2>
    <div className={styles.skills}>
      {skills.map(skill => <span key={skill} className={styles.skillTag}>{skill}</span>)}
    </div>
    <h2>Education</h2>
    <div className={styles.education}>
      {education.map((edu, idx) => (
        <div key={idx} className={styles.eduCard}>
          <h3>{edu.school}</h3>
          <p>{edu.degree}</p>
          <span>{edu.period}</span>
          <span>{edu.details}</span>
        </div>
      ))}
    </div>
  </section>
);

export default About; 