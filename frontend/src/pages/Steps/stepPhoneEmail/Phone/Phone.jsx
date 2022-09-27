import React, { useState } from 'react'
import Card from '../../../../components/shared/Card/Card'
import Button from '../../../../components/shared/Button/Button'
import TextInput from '../../../../components/shared/TextInput/TextInput'

const Phone = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
      <div>
        <Card title="Enter your phone number" image="call">
          <TextInput value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          <div style={{ marginTop: "10px" }}>
              <Button text="Get OTP" />
          </div>
          <p style={{ color: "#c4c5c5", width: "70%", margin: "0 auto", marginTop: "35  px" }} >By entering your number, you’re agreeing to our Terms of Services and Privacy Policies. Thanks !</p>
        </Card>
      </div>
  )
}

export default Phone