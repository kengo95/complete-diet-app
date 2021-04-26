import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { deleteProduct } from '../../reducers/products/operation';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginTop:21
  },
}));

export default function BasicButtonGroup(props) {
  const classes = useStyles();
  const dispatch=useDispatch();
  return (
    <div className={classes.root}>
      <ButtonGroup color="primary" aria-label="large outlined primary button group" >
        {props.number !=="" &&(
          <Button onClick={()=>props.onClick()} >計算する</Button>

        )}
        <Button onClick={()=>props.onClickReset()}>リセット</Button>
        <Button  onClick={()=>dispatch(push("/products/edit/"+props.id))}> 編集する</Button>
        <Button onClick={()=>dispatch(deleteProduct(props.id)) }>削除</Button>
      </ButtonGroup>
    </div>
  );
}
