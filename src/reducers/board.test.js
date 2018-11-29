import board from './board'

describe('board reducer', () => {
  const reducer = board
  const initialState = []

  it('returns an empty array for the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })
})
