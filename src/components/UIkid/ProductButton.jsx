import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor:"#f1d625",
    color:"#000",
    fontsize: 16,
    height :40,
    width : 150,
    marginBottom:20
  },
}));

export default function ProductButton(props) {
  const classes = useStyles();
  const dispatch =useDispatch()
  return (
  
      <Button
        variant="contained"
        className={classes.button}
        onClick={()=>dispatch(push("/product/"+props.id))}
      >
          {props.label}
      </Button>
  );
}