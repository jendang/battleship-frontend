import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import GuessSquare from './GuessSquare'
import Square from './Square'
import './GuessBoard.css'
import { connect } from 'react-redux'

export class GuessBoard extends PureComponent {
  static propTypes = {
    board: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.string)
    ).isRequired
  }

  renderRow = (row, index) => {
    return (
      <div key={ index } className="row">
        { row.map(this.renderSquare(index)) }
      </div>
    )
  }

  renderSquare = rowIndex => (value, index) => {
    if (!this.props.player) return(
      <Square
        key={ index }
        value={ value }
        x={ rowIndex }
        y={ index }
      />
    )
    return (
      <GuessSquare
        key={ index }
        value={ value }
        x={ rowIndex }
        y={ index }
      />
    )
  }

  render() {
    return (
      <div className="GuessBoard">
        { this.props.board.map(this.renderRow) }
      </div>
    )
  }
}

export default connect (null)(GuessBoard)
