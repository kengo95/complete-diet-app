import * as Action from "./actions"
import initialstate from "../store/initialstate"

const userReduser =(state=initialstate.users , action)=>{
  switch(action.type){
    case Action.SIGNIN:
      return{
        ...state,
        ...action.payload
      }
    case Action.GETFOODLIST:
      return{
        ...state,
        list:[...action.payload]
      }
    case Action.SIGNOUt:
      return{
        ...state,
        ...action.payload
      }

      default:{
        return state
      }
  }
}

export default userReduser