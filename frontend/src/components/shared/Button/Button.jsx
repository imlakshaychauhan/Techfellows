import React from 'react'
import styles from './Button.module.css'

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
        <span>{text}</span>
        <img src="./images/next-arrow.png" alt="next" className={styles.arrow} />
    </button>
  )
}

export default Button