import React from 'react'
import {getUserId} from "../reducers/users/selectore"
import {useDispatch, useSelector} from "react-redux"
import { push } from 'connected-react-router';
function Home() {
  const dispatch=useDispatch();
  const state = useSelector(state => state)
  const uid =getUserId(state);
  return (
    <div>
      aaaaaaaa
      {uid}

      <button onClick={()=>dispatch(push("/next"))}>NEXT</button>
     
    </div>
  )
}

export default Home
