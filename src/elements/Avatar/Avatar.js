import React from 'react'

const Avatar = (props) => {
  return (
    <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
        <img src={props.avatar} alt="avatar" style={{width: '24px', height: '24px', borderRadius: '50%'}}/>
    </div>
  )
}

export default Avatar