
import { push } from 'connected-react-router';
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import UploadButtons from '../components/products/iamgearea';

import {BackButton, SaveButton, Text} from "../components/UIkid/index"
import { db } from '../firebase';
import { addProject } from '../reducers/products/operation';
const Products= ()=> {

let id =window.location.pathname.split("/products/edit")[1];

if(id !==""){
  id=id.split("/")[1]
}
  const dispatch =useDispatch()
  const [name,setName]=useState("");
  const [image,setImage]=useState([]);
  const [text,setText]=useState("");
  const [weight,setWeight]=useState("");
  const [kal,setKal]=useState("");
  const [protein,setProtein]=useState("");
  const [fat,setFat]=useState("")
  const [carbo,setCarbo]=useState("")
  const inputName=useCallback((e)=>setName(e.target.value),[setName])
  const inputText=useCallback((e)=>setText(e.target.value),[setText])
  const inputWeight=useCallback((e)=>setWeight(e.target.value),[setWeight])
  const inputKal=useCallback((e)=>setKal(e.target.value),[setKal])
  const inputProtein=useCallback((e)=>setProtein(e.target.value),[setProtein])
  const inputFat=useCallback((e)=>setFat(e.target.value),[setFat])
  const inputCarbo=useCallback((e)=>setCarbo(e.target.value),[setCarbo])

  useEffect(()=>{
    if (id !==""){
      db.collection("products").doc(id).get()
      .then(snapshot=>{
        const data =snapshot.data()
        setName(data.name)
        setImage(data.image)
        setText(data.text)
        setKal(data.kal)
        setProtein(data.protein)
        setFat(data.fat)
        setCarbo(data.carbo)
      })
    }
  },[])
  return (
   <div className="container">
     <h2 className="title"> フードを追加</h2>
    <UploadButtons image={image} setImage={setImage} />
     <Text fullWidth={true} label={"食材"} margin="dense" multiline={false}
      required={true} rows={1} value={name} type={"text"} onChange={inputName}
       />
     <Text fullWidth={true} label={"何g"} margin="dense" multiline={false}
      required={true} rows={1} value={weight} type={"text"} onChange={inputWeight}
       />
     <Text fullWidth={true} label={"カロリー"} margin="dense" multiline={false}
      required={true} rows={1} value={kal} type={"text"} onChange={inputKal}
       />
     <Text fullWidth={true} label={"タンパク質"} margin="dense" multiline={false}
      required={true} rows={1} value={protein} type={"text"} onChange={inputProtein}
       />
     <Text fullWidth={true} label={"脂質"} margin="dense" multiline={false}
      required={true} rows={1} value={fat} type={"text"} onChange={inputFat}
       />
     <Text fullWidth={true} label={"炭水化物"} margin="dense" multiline={false}
      required={true} rows={1} value={carbo} type={"text"} onChange={inputCarbo}
       />
    <Text fullWidth={true} label={"レシピ"} margin="dense" multiline={true}
      required={true} rows={10} value={text} type={"text"} onChange={inputText}
       />
      <div className="flex-wrap">
        <div className="button-wrap-child">
          <SaveButton label={"保存"} onClick={()=>dispatch(addProject(id,image ,weight,name,text,kal,protein,fat,carbo))}/>
        </div>
        <div className="button-wrap-child">
          <BackButton label={"トップに戻る"} onClick={()=>dispatch(push('/'))}/>
        </div>
      </div>
    </div>
  )
}


export default Products