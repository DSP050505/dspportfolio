import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>About</NavLink>
      <NavLink to="/experience" className={({ isActive }) => isActive ? styles.active : ''}>Experience</NavLink>
      <NavLink to="/projects" className={({ isActive }) => isActive ? styles.active : ''}>Projects</NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ''}>Contact</NavLink>
    </nav>
  </header>
);

export default Header; 