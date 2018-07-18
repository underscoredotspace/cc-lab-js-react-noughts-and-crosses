import React, { Component } from 'react'
import CurrentPlayer from '../components/CurrentPlayer'
import Grid from '../components/Grid'

export default class NoughtsCrosses extends Component {
  constructor(props) {
    super(props)

    this.state = {
      player: 'o',
      grid: new Array(9).fill(null)
    }
  }

  render() {
    return (
      <div>
        <CurrentPlayer player={this.state.player} />
        <Grid grid={this.state.grid} />
      </div>
    )
  }
}
