import React from 'react'
import SigniferMessage from '../../assests/SigniferMessage'
import SigniferSubtasks from '../../assests/SigniferSubtasks'
import styled from 'styled-components'

const Oval = styled.div`
    height: 5px;
    width: 5px;
    background-color: #A3A3A3;
    border-radius: 50%;
`;

const Number = styled.div`
height: 14px;
width: 7px;
color: #8E8E8E;
font-family: "SF Pro Display";
font-size: 12px;
letter-spacing: 0;
line-height: 14px;
`;

const SigniferGroup = (props) => {
    return (
        <div style={{display: 'flex', alignItems: 'center', alignContent: 'center', width: '60px', justifyContent: 'space-around'}}>
        <div><SigniferMessage/></div>
        <Number>{props.numberOne}</Number>
        <Oval></Oval>
        <div><SigniferSubtasks/></div>
        <Number>{props.numberTwo}</Number>
        </div>

    )
}

export default SigniferGroup