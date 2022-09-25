import React from 'react'
import styles from './Home.module.css'
import { Link, useNavigate } from 'react-router-dom'
import Card from '../../components/shared/Card/Card'
import Button from '../../components/shared/Button/Button'

const Home = () => {
  const navigate = useNavigate();
  const startRegister = () => {
      navigate('/register');
  }

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Techfellows !" image="logo">
          <p className={styles.paragraph}>
          Just Register or Login yourself, Create or Join a room, Talk while doing Coding in an Integrated Editor with your Techie fellows :)
          </p>
          <Button onClick={startRegister} text="Register Yourself" />
          <div>
            <span className={styles.alreadyregistered}> Already Registered? </span>
            <Link to = "/login" className={styles.signintext} >Sign In</Link>
          </div>
      </Card>
    </div>
  )
}

export default Home