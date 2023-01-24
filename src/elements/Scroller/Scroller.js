import React from 'react'
import styled from 'styled-components'

const ScrollBar = styled.div`
height: 225px;
width: 6px;
opacity: 0.5;
border-radius: 3px;
background-color: black;
border: 1px solid #f36;
position: absolute;
left: 272px;
background: white;
top: 47px;
`;

const Scroller = () => {
  return (
    <ScrollBar></ScrollBar>
    )
}

export default Scroller