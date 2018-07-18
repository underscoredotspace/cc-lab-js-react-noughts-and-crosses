import React from 'react'

const Grid = props => {
  return (
    <div className="grid">
      {props.grid.map(box => {
        return <div>{box}</div>
      })}
    </div>
  )
}

export default Grid
