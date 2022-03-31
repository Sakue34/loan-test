import React from 'react'
import landingPageIllustration from '../images/calculatorIllustration.svg';
const Calculator = () => {
  return (
    <div style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
        <img width="70%" height="auto" src={landingPageIllustration} alt="" style={{padding: '3rem'}}/>
    </div>
  )
}

export default Calculator