import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  height: 36px;
  width: 236px;
  color: #373737;
  font-family: "SF Pro Display";
  font-size: 14px;
  letter-spacing: 0.3px;
  line-height: 18px;
`;

const CardTitle = (props) => {
  return (
    <div>
      <Title>{props.title}</Title>
    </div>
)
}
export default CardTitle