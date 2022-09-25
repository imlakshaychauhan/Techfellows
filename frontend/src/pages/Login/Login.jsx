import React, { useState } from 'react'
import stepPhoneEmail from '../Steps/stepPhoneEmail/stepPhoneEmail'
import stepOtp from '../Steps/stepOtp/stepOtp'


const steps = {
    1: stepPhoneEmail,
    2: stepOtp
}

const Login = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step];
    const Gonext = () => setStep(step + 1);

  return (
    <Step Gonext = {Gonext} />
  )
}

export default Login