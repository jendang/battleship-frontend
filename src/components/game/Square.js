import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
//import { makeGuess } from '../../actions/makeGuess'
import { connect } from 'react-redux'
import './Square.css'

class Square extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }

  handleClick = () => {
    const { x, y, makeGuess} = this.props
    return makeGuess(x,y)
  }

  render () {
    return (
      <div className={`BoardSquare value-${this.props.value}`}/>
    )
  }
}

export default connect (null)(Square)
