import React, { useState } from 'react'
// import styles from './Register.module.css'
import stepAvatar from '../Steps/stepAvatar/stepAvatar'
import stepName from '../Steps/stepName/stepName'
import stepPhoneEmail from '../Steps/stepPhoneEmail/stepPhoneEmail'
import stepOtp from '../Steps/stepOtp/stepOtp'
import stepUsername from '../Steps/stepUsername/stepUsername'


const steps = {
    1: stepPhoneEmail,
    2: stepOtp,
    3: stepName,
    4: stepAvatar,
    5: stepUsername,
}

const Register = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step];
    const Gonext = () => setStep(step + 1);
    
    return (
        <Step Gonext={Gonext} />
    )
}

export default Register