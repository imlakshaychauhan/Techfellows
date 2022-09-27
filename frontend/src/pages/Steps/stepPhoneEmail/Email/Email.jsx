import React from 'react'
import Card from '../../../../components/shared/Card/Card'
import styles from './Email.module.css'
import Button from '../../../../components/shared/Button/Button'
import { useState } from 'react'
import TextInput from '../../../../components/shared/TextInput/TextInput'

const Email = () => {
  const [emailAdress, setEmailAdress] = useState("");
  return (
    <div className={styles.cardWrapper}>
      <Card title="Enter your Email Address" image="mail-emoji">
        <TextInput value={emailAdress} onChange={(e) => setEmailAdress(e.target.value)} />
          <div className='actionBtnWrapper' style={{ marginTop: "10px" }}>
              <Button text="Get OTP" />
          </div>
          <p style={{ color: "#c4c5c5", width: "70%", margin: "0 auto", marginTop: "35  px" }} >By entering your Email, you’re agreeing to our Terms of Services and Privacy Policies. Thanks !</p>
      </Card>
    </div>
  )
}

export default Email