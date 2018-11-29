import {BOARD_SENT} from './types'
import * as request from 'superagent'
import {baseUrl} from '../constants'

export const sendBoard=(gameId, board)=> (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .patch(`${baseUrl}/games/${gameId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({board})
    .then(result => {
      dispatch({
        type: BOARD_SENT,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}
