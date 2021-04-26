export const SIGNIN ="SIGNIN"
export const signinAction =(userState)=>{
  return {
    type : "SIGNIN",
    payload:{
      isSignIn:true,
      uid:userState.uid,
      username:userState.username
    }
  }
  }
export const GETFOODLIST ="GETFOODLIST "
export const  getFoodListAction=(userState)=>{
  return {
    type : "GETFOODLIST ",
    payload:userState
  }
  }
export const SIGNOUt ="SIGNOUT"
export const signoutAction =()=>{
  return {
    type : "SIGNOUT",
    payload:{
      isSignIn:false,
      uid:"",
      username:""
    }
  }
  }