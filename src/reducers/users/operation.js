import { auth, db, FirebaseTimestamp } from "../../firebase"
import { push } from "connected-react-router";
import { getFoodListAction, signinAction } from "./actions";
import { shallowEqual } from "react-redux";



export const addHistory=(kal , fat, protein , carbo)=>{
  return async(dispatch ,getState)=>{
   
    const timestamp =FirebaseTimestamp.now();
    const newTimestamp=timestamp.toDate();
    const uid =getState().users.uid;
    const data={

      kal:kal,
      fat:fat,
      protein:protein,
      carbo:carbo
    };
    const ref =db.collection('users').doc(uid).collection('history').doc()
    const id=ref.id
    data.id=id
    data.created_at=newTimestamp;

    return db.collection('users').doc(uid).collection('history').doc(id).set(data)
    .then(()=>{
      dispatch(push('/history'))
    })
  }

}


// ----------------------fooodcollection----------------------------
export const foodAdd=(name , weight, kal , fat, protein , carbo)=>{
  return async(dispatch ,getState)=>{
    const timestamp =FirebaseTimestamp.now();
    const uid =getState().users.uid;
    const data={
      name:name,
      weight:weight,
      kal:kal,
      fat:fat,
      protein:protein,
      carbo:carbo
    };
    const ref =db.collection('users').doc(uid).collection('food').doc()
    const id=ref.id
    data.id=id
    data.created_at=timestamp

    return db.collection('users').doc(uid).collection('food').doc(id).set(data)
    .then(dispatch(push("/")))
  }

}

export const getFoodList=(uid)=>{
  return async(dispatch ,getState)=>{
    db.collection('users').doc(uid).collection('food').get()
    .then(snapshots=>{
      const foodList=[];
      snapshots.forEach(snapshot=>{
        const data =snapshot.data();
        foodList.push(data);
      })
      dispatch(getFoodListAction(foodList))

    })
  }
}

export const deletFoodList=(products)=>{
  return async(dispatch,getState)=>{
    const uid=getState().users.uid;
    const userRef=db.collection('users').doc(uid);
    const batch = db.batch();
    for(const product of products){
      batch.delete(
        userRef.collection('food').doc(product.id)
      )
    }
    batch.commit()
    .then(()=>{
      console.log("成功")
    })
    .catch(()=>{
      console.log("失敗")
    })
  }
}


// ----------------------signin関係----------------------------
export const signIn =(email,password)=>{
  if(email==="" || password===""){
    alert("未入力です")
    return <></>
  }
  return async(dispatch)=>{
    auth.signInWithEmailAndPassword(email,password)
    .then(result =>{
      const user =result.user;
      if(user){
        const uid=user.uid
        db.collection('users').doc(uid).get()
        .then(snapshot=>{
          const data= snapshot.data();
          dispatch(signinAction({uid:uid,username:data.username}))
          dispatch(push("/"))
        })
      }
    })
    .catch(()=>{
      alert("登録されていません")
      return <></>
    })
  }
}

export const signUp = (username,email,password,verification) =>{
  return async(dispatch)=>{
      if (username ==="" || email==="" || password==="" || verification ===""){
        alert("未入力あり")
        return false
      }
      if(password !== verification){
        alert("パスワード間違えてるよ")
        return false
      }

      return auth.createUserWithEmailAndPassword(email,password)
      .then(result=>{
        const user=result.user
        const uid = user.uid
        const timestamp =FirebaseTimestamp.now();
      
        const profile={
          created_at:timestamp,
          uid:uid,
          updated_at:timestamp,
          username:username,
          email:email
        }

        db.collection("users").doc(uid).set(profile)
        .then(()=>{
          dispatch(signinAction({uid:uid,username:username}))
          dispatch(push("/"))
        })
      })
    

  }
}

export const listenAuthState = () => {
  return async (dispatch) => {
      return auth.onAuthStateChanged(user => {
          if (user) {
            db.collection('users').doc(user.uid).get()
                  .then(snapshot => {
                      const data = snapshot.data()
                      if (!data) {
                          throw new Error('ユーザーデータが存在しません。')
                      }
                      dispatch(signinAction({
                          customer_id: (data.customer_id) ? data.customer_id : "",
                          email: data.email,
                          isSignedIn: true,
                          payment_method_id: (data.payment_method_id) ? data.payment_method_id : "",
                          role: data.role,
                          uid: user.uid,
                          username: data.username,
                      }))
                  })
          } else {
              dispatch(push('/signin'))
          }
      })
  }
};