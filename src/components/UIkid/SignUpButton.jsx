import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';


const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor:"#f1d625",
    color:"#000",
    fontsize: 16,
    height :40,
    marginTop:20,
    width : 150
    
  },
}));

export default function SignUpButton(props) {
  const classes = useStyles();

  return (
  
      <Button
        variant="contained"
        className={classes.button}
        endIcon={<PermIdentityIcon/>}
        onClick={()=>props.onClick()}
      >
          {props.label}
      </Button>
  );
}