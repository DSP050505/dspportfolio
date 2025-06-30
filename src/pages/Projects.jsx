import React, { useRef, useEffect } from 'react';
import styles from '../styles/Projects.module.css';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaStripe, FaServer } from 'react-icons/fa';
import { SiExpress, SiPostgresql, SiSocketdotio, SiFirebase, SiVercel, SiRender } from 'react-icons/si';
import { useLocation } from 'react-router-dom';

const techIcons = {
  'React.js': <FaReact color="#00d8ff" />, // React blue
  'Node.js': <FaNodeJs color="#3c873a" />, // Node green
  'Express.js': <SiExpress color="#fff" />, // White for Express
  'PostgreSQL': <SiPostgresql color="#336791" />,
  'Socket.IO': <SiSocketdotio color="#fff" />,
  'Stripe': <FaStripe color="#635bff" />,
  'Render': <SiRender color="#00ffe0" />,
  'Vercel': <SiVercel color="#fff" />,
  'Firebase': <SiFirebase color="#ffcb2b" />,
  'HTML': <FaHtml5 color="#e34f26" />,
  'CSS': <FaCss3Alt color="#1572b6" />,
  'CSS3': <FaCss3Alt color="#1572b6" />,
  'JavaScript': <FaJs color="#f7df1e" />,
  'DBMS': <FaDatabase color="#00ffe0" />,
  'SQL': <FaDatabase color="#00ffe0" />,
};

const projects = [
  {
    title: 'FarmaConnect – Agricultural Marketplace',
    image: require('../assets/images/farmaconnect.png'),
    description: 'A real-time agricultural marketplace with role-based authentication, real-time price negotiation, and secure payment processing.',
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Socket.IO', 'Stripe', 'Render', 'Vercel'],
    github: 'https://github.com/DSP050505/Farmaconnect',
    demo: 'https://farmaconnect.vercel.app/'
  },
  {
    title: 'Amazon Clone – Fullstack E-Commerce',
    image: require('../assets/images/amazonclone.png'),
    description: 'A responsive full-stack e-commerce platform with user authentication, real-time cart, and secure payment using React.js and Firebase.',
    tech: ['React.js', 'Firebase', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/DSP050505/Ecommerce-Amazon-Clone',
    demo: 'https://clone-3e435.web.app/'
  },
  {
    title: 'Social Media Database Project',
    image: require('../assets/images/socialmedia.png'),
    description: 'A social media database schema to manage user interactions, posts, comments, likes, and messaging.',
    tech: ['DBMS', 'SQL'],
    github: 'https://github.com/DSP050505/Social_media_database_project',
    demo: ''
  }
];

const ProjectCard = React.forwardRef(({ project, reverse, id }, ref) => (
  <motion.div
    ref={ref}
    className={styles.projectRow + ' ' + (reverse ? styles.reverse : '')}
    id={id}
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
  >
    <div className={styles.projectImgCol}>
      <img src={project.image} alt={project.title} className={styles.projectImg} />
    </div>
    <div className={styles.projectInfoCol}>
      <h2 className={styles.projectTitle}>{project.title}</h2>
      <p className={styles.projectDesc}>{project.description}</p>
      <div className={styles.techRow}>
        {project.tech.map(t => (
          <span key={t} className={styles.techTag}>
            {techIcons[t] || <FaServer color="#00ffe0" />} {t}
          </span>
        ))}
      </div>
      <div className={styles.linksRow}>
        {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
        {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
      </div>
    </div>
  </motion.div>
));

const Projects = () => {
  const location = useLocation();
  const amazonRef = useRef(null);

  useEffect(() => {
    if (location.state && location.state.scrollTo === 'amazon-clone' && amazonRef.current) {
      amazonRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [location]);

  return (
    <section className={styles.projects}>
      <h1 className={styles.sectionTitle}>Projects</h1>
      <div className={styles.projectsStack}>
        <ProjectCard project={projects[0]} reverse={false} />
        <ProjectCard project={projects[1]} reverse={true} ref={amazonRef} id="amazon-clone" />
        <ProjectCard project={projects[2]} reverse={false} />
      </div>
    </section>
  );
};

export default Projects; 