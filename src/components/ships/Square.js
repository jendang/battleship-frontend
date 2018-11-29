import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { placeShipInit } from '../../actions/placeShipInit'
import {placeShip} from '../../actions/placeShip'
import { connect } from 'react-redux'
import {free, shipCanFit} from '../../lib/functions'
import './Square.css'

class Square extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    placeShipInit: PropTypes.func.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    locked: PropTypes.bool,
    highlight: PropTypes.bool,
    init: PropTypes.bool
    //ship: PropTypes.arrayOf(PropTypes.string)
  }

  handleClick = () => {
    const { value, x, y, placeShipInit, ship, board, init, placeShip} = this.props
    console.log(this.props.locked)
    console.log(value, typeof(value));
    console.log(x,y);
    console.log(`==============${init}`);
    const ok = free(board, x, y) && shipCanFit(board,x,y, ship.type.length)
    if(!this.props.locked && ok) {
      if (!init) placeShipInit(x,y, ship)
    }
    if (!this.props.locked && free(board, x, y) && init &&(value==='h'))
      placeShip(x,y,ship)
  }

  render () {
    //console.log(this.props.value);
    return (
      <div className={`Square v${this.props.value}`} onClick={this.handleClick}/>
    )
  }
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    locked: state.shipSquare.locked,
    init: state.shipSquare.init,
    board: state.shipBoard,
    ship: state.ship,
  }
}


export default connect (mapStateToProps, { placeShipInit, placeShip })(Square)
