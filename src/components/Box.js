import React from 'react'

const Box = props => {
  return (
    <div className="grid__box" onClick={() => props.handleClick(props.index)}>
      {props.value}
    </div>
  )
}

export default Box
