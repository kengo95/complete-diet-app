import { push } from "connected-react-router";
import { db ,FirebaseTimestamp} from "../../firebase"
import { fetchProductAction ,deletProductAction } from "./actions";


export const deleteProduct = (id) =>{
  return async (dispatch ,getState)=>{
    db.collection('products').doc(id).delete()
    .then(()=>{
      const nowProduct =getState().products.list;
      const newProduct =nowProduct.filter(product =>product.id !== id)
      dispatch(deletProductAction(newProduct))
      dispatch(push("/"))
    })
  }
}

export const fetchProducts=()=>{
  return async (dispatch)=>{
    db.collection('products').get()
    .then(snapshots =>{
      const productList=[]
      snapshots.forEach(snapshot=>{
        const data =snapshot.data();
        productList.push(data)
      });
    
      dispatch(fetchProductAction(productList));
      
    })
  }
}


export const addProject=(id,image ,weight,name,text,kal,protein,fat,carbo)=>{
  
  return async(dispatch)=>{
    const timestamp=FirebaseTimestamp.now();
    const data={
      image:image,
      name:name,
      weight:weight,
      text:text,
      kal:kal,
      protein:protein,
      fat:fat,
      carbo:carbo
    };
    
    if (id === "") {
      const ref = db.collection('products').doc()
      data.created_at = timestamp;
      id = ref.id;
      data.id = id;
    }
  

    return db.collection('products').doc(id).set(data,{merge: true})
    .then(()=>dispatch(push("/")))
  }
}