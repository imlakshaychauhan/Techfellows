import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {

  const brandStyle = {
    color: "#fff",
    fontWeight: "bold",
    fontSize: "22px",
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    textDecoration: "underline"
  };

  const logoText =  {
    marginLeft: "10px",
  };

  return (
    <nav className={`${styles.navbar} container`}>
      <Link style={brandStyle} to="/">
        <img src="/images/logo.png" alt="logo" />
        <span style={logoText}>Techfellows</span>
      </Link>
    </nav>
  )
}

export default Navigation