import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor:"#f00",
    color:"#000",
    fontsize: 16,
    height :40,
    marginTop:20,
    width : 150
    
  },
}));

export default function DeleteButton(props) {
  const classes = useStyles();

  return (
  
      <Button
        variant="contained"
        className={classes.button}
        endIcon={<DeleteIcon/>}
        onClick={()=>props.onClick()}
      >
          {props.label}
      </Button>
  );
}