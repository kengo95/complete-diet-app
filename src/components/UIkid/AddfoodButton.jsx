import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FastfoodIcon from '@material-ui/icons/Fastfood';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor:"#f00",
    color:"#000",
    fontsize: 16,
    height :40,
    width : 180
    
  },
}));

export default function AddFoodButton(props) {
  const classes = useStyles();

  return (
  
      <Button
        variant="contained"
        className={classes.button}
        endIcon={<FastfoodIcon/>}
        onClick={()=>props.onClick()}
      >
          {props.label}
      </Button>
  );
}