import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  addHistory, deletFoodList, getFoodList } from '../../reducers/users/operation';
import { getUserId ,getUserFoodList, getUserName } from '../../reducers/users/selectore'
//----------------------material ui import---------------------------
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { DeletFoodButton, FoodSaveButton , HistoryButton } from '../UIkid';
import { db } from '../../firebase';
import { push } from 'connected-react-router';
//-----------------------material ui imort--------------------------
//----------------------materiau ui 定義 ----------------------
const useStyles = makeStyles({
  table: {
    maxWidth: 980,
    padding:20,
    margin:"auto"
  },
});
function FoodSum() {
  const selector = useSelector((state)=>state);
  const uid =getUserId(selector)
  const dispatch =useDispatch();
  const classes = useStyles();
  let foodlist =getUserFoodList(selector)
  const username =getUserName(selector)
  const totalKal=(props)=>{
    const sumKal=(props).reduce((p, x) => p + x.kal, 0)
    return sumKal
  }
  const totalFat=(props)=>{
    const sumFat=(props).reduce((p, x) => p + x.fat, 0)
    return sumFat
  }
  const totalCarbo=(props)=>{
    const sumCarbo=(props).reduce((p, x) => p + x.carbo, 0)
    return sumCarbo
  }
  const totalProtein=(props)=>{
    const sumProtein=(props).reduce((p, x) => p + x.protein, 0)
    return sumProtein
  }
  const removeFoodList=(id)=>{
     return  db.collection('users').doc(uid).collection('food').doc(id).delete()
      .then(()=>{
        dispatch(getFoodList(uid))
      })
  }
  const totalKalNumber=totalKal(foodlist);
  const totalFatNumber=totalFat(foodlist);
  const totalCarboNumber=totalCarbo(foodlist);
  const totalProteinNumber=totalProtein(foodlist);
  const deletelist=useCallback(()=>{
    dispatch(addHistory(totalKalNumber,totalFatNumber,totalCarboNumber,totalProteinNumber))
    dispatch(deletFoodList(foodlist))
  },[foodlist])
  useEffect(()=>{
    dispatch(getFoodList(uid))
  },[])
  return (
    <div>

      {/*------------------------ marerial ui ----------------------------------------*/}
    <TableContainer className={classes.table} component={Paper}>
      <Table aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell>名前&nbsp;&nbsp;</TableCell>
            <TableCell align="right">カロリー&nbsp;(kcal)</TableCell>
            <TableCell align="right">脂質&nbsp;(g)</TableCell>
            <TableCell align="right">炭水化物&nbsp;(g)</TableCell>
            <TableCell align="right">タンパク質&nbsp;(g)</TableCell>
            <TableCell align="right">&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {foodlist.map((food,index) => (
            <TableRow key={index}>
              <TableCell>{food.name}&nbsp;&nbsp;{food.weight}g</TableCell>
              <TableCell align="right">{food.kal}</TableCell>
              <TableCell align="right">{food.fat}</TableCell>
              <TableCell align="right">{food.carbo}</TableCell>
              <TableCell align="right">{food.protein}</TableCell>
              <TableCell align="right"><DeletFoodButton label={"消去"} onClick={()=>removeFoodList(food.id)} /></TableCell>
          </TableRow>
              
          ))}
          <TableRow>
            <TableCell >合計</TableCell>
            <TableCell align="right">{totalKal(foodlist)}</TableCell>
            <TableCell align="right">{totalFat(foodlist)}</TableCell>
            <TableCell align="right">{totalCarbo(foodlist)}</TableCell>
            <TableCell align="right">{totalProtein(foodlist)}</TableCell>
            <TableCell align="right">&nbsp;</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
{/*------------------------ marerial ui ----------------------------------------*/}
        <div className="button-wrap"> 
            <div className="button-wrap-child">
              <FoodSaveButton label={"保存する"} onClick={()=>deletelist()}/>           
             </div>
            <div className="button-wrap-child">
            <HistoryButton  label={"履歴"} onClick={()=>dispatch(push('/history'))} />
            </div>
        </div>    
    </div>
  )
}

export default FoodSum
