import {PLACE_SHIP} from './types'

export const placeShip = (x,y,ship) => {
  //console.log('LOOOOOOK HEEEEERE');
  return {
    type: PLACE_SHIP,
    payload: {
      x,
      y,
      ship
    }
  }
}
