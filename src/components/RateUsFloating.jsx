import React, { useEffect, useState } from 'react';
import { FaRocket } from 'react-icons/fa';
import styles from '../styles/RateUsFloating.module.css';
import { useNavigate } from 'react-router-dom';

const RateUsFloating = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let showTimeout, hideTimeout;
    const loop = () => {
      showTimeout = setTimeout(() => {
        setVisible(true);
        hideTimeout = setTimeout(() => {
          setVisible(false);
          loop();
        }, 5000); // visible for 5s
      }, 3000); // every 3s
    };
    loop();
    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  const handleClick = () => {
    navigate('/rate');
  };

  return (
    <div
      className={styles.floatingRateUs + (visible ? ' ' + styles.visible : '')}
      onClick={handleClick}
      tabIndex={0}
      role="button"
      aria-label="Rate Us"
    >
      <FaRocket className={styles.rocketIcon} />
      <span className={styles.text}>Rate us</span>
    </div>
  );
};

export default RateUsFloating; 