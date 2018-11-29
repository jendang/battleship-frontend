import {PLACE_SHIP_INIT,PLACE_SHIP, REMOVE_SHIP} from '../actions/types'
import {leftFree,rightFree,topFree,bottomFree} from '../lib/functions'
const initialState = [
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']
]

export default (state= initialState, {type,payload}) => {
  switch (type) {
    //case SELECT_SHIP:
    //  return state
    case PLACE_SHIP_INIT:
      const {x,y,ship}=payload
      const length=ship.type.length
      //const left=leftFree(state,x,y,length)
      //console.log(`====================== ${left}`);
      const newState=state.map((row, rowIndex)=>
        row.map((v,index)=>{
          if (rowIndex===x && index===y)
            return ship.type[0]
          //console.log(rowIndex===(x-(length-1)),index);
          //console.log(rowIndex===(x-(length-1)) && (index===y) && leftFree(state, x,y,length))
          //console.log('=========================================');
          if ((rowIndex===(x-(length-1)) && (index===y) && topFree(state, x,y,length)) ||
              (rowIndex===(x+(length-1)) && (index===y) && bottomFree(state, x,y,length)) ||
              (rowIndex===x && (index===y-(length-1)) && leftFree(state, x,y,length)) ||
              (rowIndex===x && (index===y+(length-1)) && rightFree(state, x,y,length)))
            return 'h'
          return v
        }))
      //newState[payload.x][payload.y]=payload.ship[0]
      //console.log(state);
      return newState

    case PLACE_SHIP:
      const xx=payload.x,yy=payload.y,shipp=payload.ship
      const value = shipp.type[0]
      const initPlace = shipp.place[0]
      const newStatee = state.map((row, i) =>
        row.map((v,j)=>{
          if (v==='h') {
            if (i===xx& j===yy) return value
            else return '0'
          }
          console.log(`${yy<initPlace[1]}`);
          if (yy < initPlace[1] && (j >= yy) && (j<initPlace[1]) && (i===initPlace[0])) {
            return value
          }
          if (yy > initPlace[1] && (j <= yy) && (j>initPlace[1]) && (i===initPlace[0])) {
            return value
          }
          if (xx < initPlace[0] && (i >= xx) && (i<initPlace[0]) && (j===initPlace[1])) {
            return value
          }
          if (xx > initPlace[0] && (i <= xx) && (i>initPlace[0]) && (j===initPlace[1])) {
            return value
          }

          return v
        }))

      return newStatee

    case REMOVE_SHIP:
      return state.map(row =>
        row.map(v => {
          if (v===payload)
            return '0'
          return v
        }))
    default:
      return state

  }
}
