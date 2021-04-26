import * as Action from "./actions"
import initialstate from "../store/initialstate"

export const ProductReducer=(state = initialstate.products , action)=>{
  switch(action.type){
    case Action.FETCH_PRODUCT:
      return{
        ...state,
        list:[...action.payload]
      };
    case Action.DELETE_PRODUCT:
      return{
        ...state,
        list:[...action.payload]
      };
      default:
        return state
  }
}