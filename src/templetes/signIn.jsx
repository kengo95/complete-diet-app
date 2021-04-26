import { push } from 'connected-react-router';
import React, { useState,useCallback } from 'react'
import {useDispatch} from "react-redux"
import {NewPersonButton, SignInButtons, Text} from "../components/UIkid/index"
import { signIn } from '../reducers/users/operation';
function SignIn() {
  const dispatch =useDispatch();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const inputEmail =useCallback((e) => {setEmail(e.target.value)},[setEmail])
  const inputPassword =useCallback((e) => {setPassword(e.target.value)},[setPassword  ])
  
  return (
    <div className="container">
      <h2 className="title">ログイン</h2>
    
      <Text fullWidth={true} label={"メールアドレス"} margin="dense" multiline={false}
      required={true} rows={1} value={email} type={"email"} onChange={inputEmail}
       />
      <Text fullWidth={true} label={"パスワード"} margin="dense" multiline={false}
      required={true} rows={1} value={password} type={"password"} onChange={inputPassword}
       />
      <div>
       <SignInButtons onClick={()=>dispatch(signIn(email,password))} label={"ログイン"}/>
      </div>
      <div className="signin-button">
      <p className="p-text">アカウントを持っていない方はこちら</p>
       <NewPersonButton onClick={()=>dispatch(push("/signup"))} label={"新規登録"}/>
      </div>
      

       
    </div>
  )
}

export default SignIn