import React from 'react'
import styled from 'styled-components'
import AddTaskSVG from '../../assests/AddTaskSVG';

const AddTask = styled.div`
height: 32px;
  width: 46px;
  border-radius: 6px;
  background-color: #FFFFFF;
  box-shadow: 0 2px 7px 0 rgba(0,0,0,0.2);
  display: flex;
  justify-content: center;
  position: absolute;
    top: 36px;
    left: 1157px;
`;

const Plus = styled.div`
font-size: 25px;
  color: #8E8E8E;
`


const AddTaskList = () => {
  return (
    <AddTask>
        <Plus>
        +
        </Plus>
        
    </AddTask>
    
  )
}

export default AddTaskList