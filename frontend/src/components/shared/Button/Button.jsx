import React from 'react'
import styles from './Button.module.css'

const Button = ({ text, onClick, arrow }) => {
  return (
    <button onClick={onClick} className={styles.button}>
        <span>{text}</span>
        {arrow ? <img src="./images/next-arrow.png" alt="next" className={styles.arrow} /> : null}
    </button>
  )
}

export default Button