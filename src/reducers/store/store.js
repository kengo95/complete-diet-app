import {createStore as reduxCreateStore ,  combineReducers, applyMiddleware}  from "redux";
import {connectRouter , routerMiddleware} from "connected-react-router";
import thunk from "redux-thunk"
import userReduser from "../users/reducer";
import { ProductReducer } from "../products/reducer";
export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      router:connectRouter(history),
      users:userReduser,
      products:ProductReducer
    }),applyMiddleware(
      routerMiddleware(history),
      thunk
    )
  )
}

