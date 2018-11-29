import { SELECT_SHIP } from '../actions/types'
import { PLACE_SHIP_INIT, PLACE_SHIP, REMOVE_SHIP} from '../actions/types'

const name = {
  destroyer: ['1', '1'],
  submarine: ['2', '2', '2'],
  cruiser: ['3', '3', '3'],
  battleship: ['4', '4', '4', '4'],
  carrier: ['5', '5', '5', '5', '5']
}

const initialState = {
  type:[],
  place: [],
  locked: false
}

export default (state = initialState, { type, payload } = {}) => {
  switch(type) {
    case SELECT_SHIP:
      return {...state, type: name[payload.name], locked: true}
    case PLACE_SHIP_INIT:
      return {...state, place: state.place.concat([[payload.x,payload.y]])}
    case PLACE_SHIP:
      return {...state, locked: false, place:[]}
    case REMOVE_SHIP:
      return {...state, place:[]}
    default:
      return state
  }
}
