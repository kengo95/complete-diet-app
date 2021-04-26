export const FETCH_PRODUCT ="FETCH_PRODUCT"
export const fetchProductAction =( projectState)=>{
  return{
    type :"FETCH_PRODUCT",
    payload:projectState

  }
}
export const DELETE_PRODUCT ="DELETE_PRODUCT"
export const deletProductAction =( projectState)=>{
  return{
    type :"DELETE_PRODUCT",
    payload:projectState

  }
}

