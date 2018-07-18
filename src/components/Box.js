import React from 'react'

const Box = props => {
  const win = props.win === 1 ? ' win' : ''

  return (
    <div
      className={`grid__box${win}`}
      onClick={() => props.handleClick(props.index)}
    >
      {props.value}
    </div>
  )
}

export default Box
