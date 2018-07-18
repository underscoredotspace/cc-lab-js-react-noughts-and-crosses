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

    this.handleBoxClick = this.handleBoxClick.bind(this)
  }

  handleBoxClick(index) {
    if (this.state.grid[index]) {
      return
    }
    let player
    let grid = this.state.grid
    grid[index] = this.state.player

    this.state.player === 'o' ? (player = 'x') : (player = 'o')

    this.setState({ player, grid })
  }

  render() {
    return (
      <div>
        <CurrentPlayer player={this.state.player} />
        <Grid handleBoxClick={this.handleBoxClick} grid={this.state.grid} />
      </div>
    )
  }
}
