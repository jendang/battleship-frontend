import {PLACE_SHIP_INIT} from './types'

export const placeShipInit = (x,y,ship) => {
  //console.log('LOOOOOOK HEEEEERE');
  return {
    type: PLACE_SHIP_INIT,
    payload: {
      x,
      y,
      ship
    }
  }
}
