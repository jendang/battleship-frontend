import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Square from './Square'
import './Board.css'
import { connect } from 'react-redux'

export class Board extends PureComponent {
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
    return (
      <Square
        key={ index }
        value={ value }
        x={ rowIndex }
        y={ index }
      />
    )
  }

  render() {
    console.log(this.props.board);
    return (
      <div className="MainBoard">
        { this.props.board.map(this.renderRow) }
      </div>
    )
  }
}

export default connect (null)(Board)
