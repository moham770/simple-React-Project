import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Product } from "./Product"


export const ProductDetails = () => {
    const param =useParams()
    console.log(param)

    const [ product ,setProduct] =useState({})
    const api_url ='https://fakestoreapi.com/products'
    useEffect(()=>{
        fetch(`${api_url}/${param.productId}`).then((res)=>res.json()).then((product)=>setProduct(product))
    },[])
    
  return (
    <>
    <Product product={product} showButton={false}/>
  </>
  )
}
