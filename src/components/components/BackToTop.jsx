import React, { useState, useEffect } from 'react';
import styles from '../styles/BackToTop.module.css';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return visible ? (
    <button className={styles.backToTop} onClick={scrollToTop} aria-label="Back to top">
      ↑
    </button>
  ) : null;
};

export default BackToTop; 