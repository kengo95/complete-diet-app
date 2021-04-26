
import { push } from 'connected-react-router';
import React, { useState,useCallback } from 'react'
import {useDispatch} from "react-redux"
import {Text , SignUpButton, SignInButtons} from "../components/UIkid/index"
import { signUp } from '../reducers/users/operation';
function SignIn() {
  const dispatch =useDispatch();
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [verification,setVerification]=useState("");
  const inputUserName =useCallback((e) => {setUsername(e.target.value)},[setUsername])
  const inputEmail =useCallback((e) => {setEmail(e.target.value)},[setEmail])
  const inputPassword =useCallback((e) => {setPassword(e.target.value)},[setPassword  ])
  const inputVerification =useCallback((e) => {setVerification(e.target.value)},[setVerification])
  return (
    <div className="container">
      <h2 className="title">新規登録</h2>
      <Text fullWidth={true} label={"ユーザー名"} margin="dense" multiline={false}
      required={true} rows={1} value={username} type={"text"} onChange={inputUserName}
       />
      <Text fullWidth={true} label={"メールアドレス"} margin="dense" multiline={false}
      required={true} rows={1} value={email} type={"email"} onChange={inputEmail}
       />
      <Text fullWidth={true} label={"パスワード"} margin="dense" multiline={false}
      required={true} rows={1} value={password} type={"password"} onChange={inputPassword}
       />
      <Text fullWidth={true} label={"確認用パスワード"} margin="dense" multiline={false}
      required={true} rows={1} value={verification} type={"password"} onChange={inputVerification}
       />

      <div>
      <SignUpButton onClick={()=>dispatch(signUp(username,email,password,verification))} label={"登録"}/>
      </div>
      <div className="signin-button">
      <p className="p-text">アカウントを持っている方はこちら</p>
       <SignInButtons onClick={()=>dispatch(push("/signip"))} label={"ログイン"}/>
      </div>
    </div>
  )
}

export default SignIn