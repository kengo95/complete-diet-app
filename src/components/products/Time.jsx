import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { FirebaseTimestamp } from '../../firebase'
import { getUserName } from '../../reducers/users/selectore';

function Time() {
  const selctor=useSelector((state)=>state)
  const username =getUserName(selctor)
  const [data ,setData]=useState("")
  const dateToString = (time) => {
    return time.getFullYear() + '-'
        + ('00' + (time.getMonth()+1)).slice(-2) + '-'
        + ('00' + time.getDate()).slice(-2)
};
  useEffect(()=>{
    const timestamp =FirebaseTimestamp.now()
    const newtimestamp =timestamp.toDate();
    const time = dateToString(newtimestamp);
    setData(time);
  },[])
  return (
    <div>
      <p>
      Today : {data}     
      </p> 
  </div>
  )
}

export default Time
