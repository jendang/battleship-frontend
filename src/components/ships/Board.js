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
    //console.log(value);
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
      <div className="Board">
        { this.props.board.map(this.renderRow) }
      </div>
    )
  }
}

const mapStateToProps = ({ shipBoard}) => ({ board: shipBoard })

export default connect (mapStateToProps)(Board)
