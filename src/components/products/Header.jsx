import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import logo from "../../assetes/image/logo.png"
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { getUserIsSignedIn, getUserName } from '../../reducers/users/selectore';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { auth } from '../../firebase';
import {signoutAction } from '../../reducers/users/actions';
const useStyles = makeStyles({
  
    root: {
      flexGrow: 1,
    },
    appbar:{
      backgroundColor:"#fff",
    },
    logo:{
      height:60,
      width:150
    },
    toolbar:{
      maxWidth:1024,
      margin :"0 auto",
      width :"100%",
      color: "#444"
    },
    iconbutton:{
      padding:0,
      color:"gray"

    },
    icon:{
      marginLeft:"auto",
      width:180
    },
    iconTitle:{
      fontSize:14
    }


});

 function Header() {
  
  const classes = useStyles();
  const dispatch =useDispatch();
  const selector =useSelector((state)=>state);
  let isSignedin=getUserIsSignedIn(selector)
  let username =getUserName(selector)
  const logout=()=>{
      auth.signOut()
      .then(()=>{
        dispatch(signoutAction())
       dispatch(push("/signin")) 
      })
  }
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="fixed">
        <Toolbar className="classes.toolbar">
          <div >
            <img  className={classes.logo} src={logo} alt="logo" onClick={()=>dispatch(push("/"))}/>
          </div>
          {isSignedin === true && (
          <div className={classes.icon}>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                className={classes.iconbutton}
              >
                <p className={classes.iconTitle}>アカウント名：{username}</p>
                <AccountCircle />
              </IconButton>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                className={classes.iconbutton}
                onClick={()=>logout()}
              >
                <p className={classes.iconTitle}>ログアウト</p>
                <ExitToAppIcon  />
              </IconButton>
          </div>

          )}
        </Toolbar>
      </AppBar>
    </div>
          )}

export default Header
