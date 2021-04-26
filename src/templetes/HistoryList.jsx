import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../firebase';
import { getUserId } from '../reducers/users/selectore';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { DeletFoodButton, BackButton } from '../components/UIkid';
import { push } from 'connected-react-router';
function HistoryList() {
  const selector =useSelector((state)=>state);
  const dispatch =useDispatch();
  const uid = getUserId(selector);
  const [historyLists , setHistoryLists]=useState([]);
  const dateToString = (time) => {
    const newtimestamp =time.toDate();
    return newtimestamp.getFullYear() + '-'
        + ('00' + (newtimestamp.getMonth()+1)).slice(-2) + '-'
        + ('00' + newtimestamp.getDate()).slice(-2)
};
const removeHistoryList=(id)=>{
  return  db.collection('users').doc(uid).collection('history').doc(id).delete()
  .then(()=>{
    const newList=historyLists.filter(list =>list.id !== id)
    setHistoryLists(newList)
  })
}

  useEffect(()=>{
    db.collection('users').doc(uid).collection('history').get()
    .then((snapshots)=>{
      const list=[];
      snapshots.forEach(snapshot=>{
        const data=snapshot.data();
        list.push(data);
      })
      setHistoryLists(list)
    })
 },[])
 const useStyles = makeStyles({
  table: {
    maxWidth: 980,
    padding:20,
    margin:"auto"
  },
});
const classes = useStyles();
  return (
    <div>
      <h2 className="title">履歴</h2>
      <div className="height20"></div>
      <TableContainer className={classes.table} component={Paper}>
      <Table aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell>日付</TableCell>
            <TableCell align="right">カロリー&nbsp;(kcal)</TableCell>
            <TableCell align="right">脂質&nbsp;(g)</TableCell>
            <TableCell align="right">炭水化物&nbsp;(g)</TableCell>
            <TableCell align="right">タンパク質&nbsp;(g)</TableCell>
            <TableCell align="right">&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {historyLists.map((historyList,index) => (
            <TableRow key={index}>
              <TableCell align="right">{dateToString(historyList.created_at)}</TableCell>
              <TableCell align="right">{historyList.kal}</TableCell>
              <TableCell align="right">{historyList.fat}</TableCell>
              <TableCell align="right">{historyList.carbo}</TableCell>
              <TableCell align="right">{historyList.protein}</TableCell>
              <TableCell align="right"><DeletFoodButton label={"消去"} onClick={()=>removeHistoryList(historyList.id)} /></TableCell>
          </TableRow>
              
          ))}
    
        </TableBody>
      </Table>
    </TableContainer>
    <BackButton label={"トップに戻る"} onClick={()=>dispatch(push('/'))}/>
    </div>
  )
}

export default HistoryList
