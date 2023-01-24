import React from 'react'
import styled from 'styled-components'

const Date = styled.div`
height: 16px;
width: 94px;
color: #373737;
font-family: "SF Pro Display";
font-size: 13px;
font-weight: bold;
letter-spacing: 0;
line-height: 15px;
`;


const StartDueDate = (props) => {
  return (
    
<Date>{props.startDate}</Date>
   
    
  )
}

export default StartDueDate