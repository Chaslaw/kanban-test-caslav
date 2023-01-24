import React from 'react'
import SvgDots from '../../assests/SvgDots'
import './ColumnHeader.css'

const ColumnHeader = ({ headers }) => {
  return (
    <div className='header-container'>
      {headers.map((head) => {
        return (
        <div key={head.id}  className='column-header'>
            <div className='name-number'>
              <div className='column-name'>{head.title}</div>
              <div className='header-number'>{head.number}</div>
            </div>
            <div className='threedot-box'>
              <SvgDots />
            </div>

          </div>

        )
      }
      )}
    </div>



  )
}

export default ColumnHeader