import { LOCK_BOARD } from './types'

export const lockBoard = (row, col) => {
  return {
    type: 'LOCK_BOARD',
    payload: {
      row,
      col
    }
  }
}
