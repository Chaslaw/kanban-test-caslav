import React from 'react'
import styled from 'styled-components'

const OvalOne = styled.div`
    height: 8px;
    width: 8px;
    background-color: #4B9AE5;
    border-radius: 50%;
`;

const OvalTwo = styled.div`
    height: 8px;
    width: 8px;
    background-color: #F47075;
    border-radius: 50%;
`;

const OvalThree = styled.div`
    height: 8px;
    width: 8px;
    background-color: #64CD7C;
    border-radius: 50%;
`;

const OvalFour = styled.div`
    height: 8px;
    width: 8px;
    background-color: #FFC23C;
    border-radius: 50%;
`;

const OvalFive = styled.div`
    height: 8px;
    width: 8px;
    background-color: #B06AD1;
    border-radius: 50%;
`;

const NumThree = styled.div`
height: 14px;
  width: 15px;
  color: #8E8E8E;
  font-family: "SF Pro Display";
  font-size: 12px;
  letter-spacing: 0;
  line-height: 14px;
`;

const LabelsGroup = () => {
  return (
 
      <div style={{ display: 'flex', width: '100px', justifyContent: 'space-around', width: '61px', alignItems: 'center' }}>
        <OvalOne />
        <OvalTwo />
        <OvalThree />
        <OvalFour />
        <OvalFive />
        <NumThree>+3</NumThree>
      </div>

  )
}

export default LabelsGroup