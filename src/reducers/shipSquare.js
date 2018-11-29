import {PLACE_SHIP} from '../actions/types'
import {SELECT_SHIP, PLACE_SHIP_INIT} from '../actions/types'
const initialState= {
  locked: true,
  init: false
}
export default (state=initialState, {type,payload}) => {
  switch (type) {
    case SELECT_SHIP:
      return {...state, locked: false}
    case PLACE_SHIP_INIT:
      return {...state, init:true}
    case PLACE_SHIP:
      return {...state, locked: true, init: false}
    default:
      return state
  }
}
