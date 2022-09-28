import React, { useState } from 'react'
import Card from '../../../components/shared/Card/Card'
import Button from '../../../components/shared/Button/Button'
import TextInput from '../../../components/shared/TextInput/TextInput'
import styles from './StepOtp.module.css'

const StepOtp = ({Gonext}) => {
  const [otp, setOtp] = useState('');
  return (
    <div className={styles.cardWrapper}>
        <Card title="Enter the code we just texted you" image="lock-emoji">
          <TextInput value={otp} onChange={(e) => setOtp(e.target.value)} />
          <div style={{ marginTop: "10px" }}>
              <Button text="Next" arrow="true" />
          </div>
          <p style={{ color: "#c4c5c5", width: "70%", margin: "0 auto", marginTop: "35  px" }} >By entering your number, you’re agreeing to our Terms of Services and Privacy Policies. Thanks !</p>
        </Card>
    </div>
  )
}

export default StepOtp;