import {REMOVE_SHIP} from './types'

export const removeShip = (ship) => {
  return {
    type: REMOVE_SHIP,
    payload: ship
  }
}
