import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { makeGuess } from '../../actions/makeGuess'
import { connect } from 'react-redux'
import './GuessSquare.css'

class GuessSquare extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    makeGuess: PropTypes.func.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }

  handleClick = () => {
    const { x, y, makeGuess} = this.props
    return makeGuess(x,y)
  }

  render () {
    return (
      <div className="GuessSquare" onClick={this.handleClick}/>
    )
  }
}

export default connect (null, { makeGuess })(GuessSquare)
