import React, { useState } from 'react'
import stepPhoneEmail from '../Steps/stepPhoneEmail/StepPhoneEmail'
import StepOtp from '../Steps/stepOtp/StepOtp'

const steps = {
    1: stepPhoneEmail,
    2: StepOtp
}

const Authenticate = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step];
    const gonext = () => setStep(step + 1);
    
    return (
        <Step gonext={gonext} />
    )
}

export default Authenticate