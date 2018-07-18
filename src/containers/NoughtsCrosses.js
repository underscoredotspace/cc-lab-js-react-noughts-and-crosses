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

  checkForWin(player) {
    const grid = this.state.grid
    const wins = [
      [1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 0, 0, 1, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 0, 0, 1, 0],
      [0, 0, 1, 0, 0, 1, 0, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 1],
      [0, 0, 1, 0, 1, 0, 1, 0, 0]
    ]

    for (const win of wins) {
      let gameWon = true
      for (const ndx in grid) {
        const box = grid[ndx]
        if (win[ndx] === 0) {
          continue
        } else if (box !== player) {
          gameWon = false
          break
        }
      }

      if (gameWon) {
        console.log('Yay!', player)
      }
    }
  }

  handleBoxClick(index) {
    let { player, grid } = this.state
    if (grid[index]) return

    grid[index] = player
    player === 'o' ? (player = 'x') : (player = 'o')

    this.setState({ player, grid }, () =>
      window.getSelection().removeAllRanges()
    )
  }

  componentDidUpdate(prevProps, prevState) {
    const { player } = prevState
    this.checkForWin(player)
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
