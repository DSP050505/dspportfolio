import React from 'react';
import styles from '../styles/Experience.module.css';
import { FaBook, FaChartLine, FaTrophy, FaMedal } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const achievements = [
  { date: 'March 2022', desc: 'Secured 93% in CBSE 12th Board', icon: <FaBook color="#00ffe0" size={28} /> },
  { date: 'April 2022', desc: 'Secured 98.41 percentile in JEE Mains', icon: <FaChartLine color="#00ffe0" size={28} /> },
  { date: 'May 2022', desc: 'Secured Top 5% in JEE Advanced Examination', icon: <FaChartLine color="#00ffe0" size={28} /> },
  { date: 'October 2023', desc: 'Won First Prize in Innothon organised by Hitachi', icon: <FaTrophy color="#00ffe0" size={28} /> },
  { date: 'October 2024', desc: 'Won 3rd Prize in Innothon organised by Hitachi', icon: <FaTrophy color="#00ffe0" size={28} /> },
  { date: 'July 2025', desc: 'Secured Top 3.4% in Amazon HackOn 5.0', icon: <FaMedal color="#00ffe0" size={28} />, linkToProject: true },
];

const Achievements = () => {
  const navigate = useNavigate();

  const handleAmazonClick = () => {
    navigate('/projects', { state: { scrollTo: 'amazon-clone' } });
  };

  return (
    <section className={styles.experience}>
      <h1 className={styles.title}>Achievements</h1>
      <div className={styles.timelineClassic} style={{position: 'relative', paddingLeft: 60}}>
        <div className={styles.timelineLine} style={{height: `${achievements.length * 70}px`, left: 30}}></div>
        {achievements.map((ach, idx) => {
          const clickable = ach.linkToProject;
          return (
            <div
              className={styles.timelineEntry}
              key={idx}
              style={{marginBottom: idx === achievements.length - 1 ? 0 : '1.5rem', alignItems: 'flex-start', cursor: clickable ? 'pointer' : 'default'}}
              onClick={clickable ? handleAmazonClick : undefined}
            >
              <div style={{position: 'relative', width: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                {ach.icon}
              </div>
              <div className={styles.timelineText}>
                <span className={styles.timelineDate}>{ach.date}</span>
                <span className={styles.timelineDesc}>{ach.desc}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements; 