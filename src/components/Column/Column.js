import React from 'react'
import AddTask from '../AddTask/AddTask'
import './Column.css'





const Column = (props) => {

  return (
    <div className='column' style={{ height: props.height }}>
      <div className="column-container">
       
        {props.children}
      </div>
     
      <AddTask />
    </div>
  )
}

export default Column