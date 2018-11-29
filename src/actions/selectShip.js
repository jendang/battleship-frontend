import { SELECT_SHIP } from './types'

export const selectShip = (name,value) => {
  console.log(`==============${value}`);
  return {
    type: SELECT_SHIP,
    payload: {
      name,
      value
    }
  }
}
