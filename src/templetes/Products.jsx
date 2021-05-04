import { push } from 'connected-react-router';
import React, { useEffect, useState ,useCallback} from 'react'
import { useDispatch } from 'react-redux';
import { DeleteButton ,Table  ,Text ,BasicButtonGroup, SaveButton} from '../components/UIkid';
import { db} from '../firebase';
import img from "../assetes/image/noimage.png"
import { foodAdd } from '../reducers/users/operation';

function Products() {
  const dispatch=useDispatch();
  let urlId =window.location.pathname.split("/product/")[1];
  const [data,setData]=useState();
  const [id,setID]=useState();
  const [name,setName]=useState("");
  const [imageUrl,setImageUrl]=useState("");
  const [text,setText]=useState("");
  const [weight,setWeight]=useState();
  const [kal,setKal]=useState();
  const [protein,setProtein]=useState();
  const [fat,setFat]=useState()
  const [carbo,setCarbo]=useState()
  const [number ,setNumber]=useState("")
  const inputNumber=useCallback((e)=>setNumber(e.target.value),[setNumber])

  const onClickReset=useCallback(
    ()=>{
      return(
        setWeight(data.weight),
        setKal(data.kal),
        setFat(data.fat),
        setCarbo(data.carbo),
        setProtein(data.protein)
  
      )
    }
  )
  
  const chngeValue =useCallback(
    ()=>{
      return(
        setWeight(number*weight),
        setKal(number*kal),
        setFat(number*fat),
        setCarbo(number*carbo),
        setProtein(number*protein),
        setNumber("")
      )
      
    }
  )
  useEffect(()=>{
    db.collection("products").doc(urlId).get()
    .then(snapshot=>{
      const productData =snapshot.data()
      setData(productData)
      setID(productData.id)
      setName(productData.name)
      setText(productData.text)
      if(productData.image.length >0){
        setImageUrl(productData.image[0].path)
      }else{
        setImageUrl("")
      }
        setWeight(Number(productData.weight))
        setKal(Number(productData.kal))
        setProtein(Number(productData.protein))
        setFat(Number(productData.fat))
        setCarbo(Number(productData.carbo))
      })
      
    },[])
  
    return (
    <div className="p-container">
      <h2 className="title">{name}</h2>
      <div className="wrap-container">
        <img src="egg.jpg" alt=""/>
      {imageUrl ==="" &&  <div className="wrap-left-box"><img src={img} alt=""/> </div> } 
      {imageUrl !=="" &&  <div className="wrap-left-box"><img src={imageUrl} alt=""/> </div> } 
      <div className="wrap-right-box">
        <Table name={name} weight={weight} kal={kal} fat={fat} carbo={carbo} protein={protein}/>
      </div>        
      </div>
      {text !=="" &&(
      <div className="container-under">
      <p> {text}</p>
      </div>

      )}
      <div className="wrap-container">
        <div className="wrap-left-text-box">
        <Text fullWidth={false} label={"何g"} margin="dense" multiline={false}
        required={true} rows={1} value={number} type={"text"} onChange={inputNumber}
       />
        </div>
        <div className="wrap-right-button-box">
        <BasicButtonGroup number={number} id={id} onClick={()=>chngeValue()}  onClickReset={()=>onClickReset()}/>
        </div>
        
      </div>
      <div>
      <SaveButton label={"追加"} onClick={()=>dispatch(foodAdd(name , weight, kal , fat, protein , carbo))}/>
      </div>
    </div>
  )
}

export default Products
