import { MAKE_GUESS } from './types'

export const makeGuess = (row, col) => {
  return {
    type: MAKE_GUESS,
    payload: {
      row,
      col
    }
  }
}
