import React, { useState ,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function SingleProduct() {
    const [products,setProducts] = useState({})
    const {productId} = useParams()
    useEffect(()=>{
        axios.get('http://localhost:4300/singleproduct'+productId)
        .then(result => setProducts(result.data))
        .catch(err => setProducts(err.message))
    },[])
    console.log(productId)
    console.log(products)
    const {name,category,title,price,description,tags} = products
  return (
    <div>
        <h1>{name}</h1>
        <h1>{title}</h1>
        <h1>{category}</h1>
        <h1>{price}</h1>
        <h1>{description}</h1>
        <h1>{tags}</h1>
        </div>
  )
}

export default SingleProduct