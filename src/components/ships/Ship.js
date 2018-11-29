import React, { PureComponent } from 'react'
import './Ship.css'
import PropTypes from 'prop-types'
import { selectShip } from '../../actions/selectShip'
import { removeShip } from '../../actions/removeShip'
import { connect } from 'react-redux'
import {existsOnBoard} from '../../lib/functions'

class Ship extends PureComponent {
  static propTypes = {
    length: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    selectShip: PropTypes.func.isRequired,
    place: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
  }

  handleClick = () => {
    if (!this.props.locked){
      this.props.selectShip(this.props.name,this.props.value)
      if (existsOnBoard(this.props.shipBoard, this.props.value))
        this.props.removeShip(this.props.value)
    }
  }


  render () {
    console.log(this.props.place);
    return (
      <div className={`${this.props.name}`} onClick={this.handleClick}></div>
    )
  }
}

const mapStateToProps = ({ ship: { type,place,locked },shipBoard }) => ({ type,place,locked, shipBoard })

export default connect(mapStateToProps, { selectShip, removeShip })(Ship)
