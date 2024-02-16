import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
function SingleUpdateProduct() {
const [products, setProducts] = useState({})
//     const [value, setValue] = useState(0)
//     const changeHandler = (event, newValue) =>{
//      setValue(newValue)
//    }
const {productId} = useParams()
useEffect(()=>{
    axios.get('http://localhost:4300/singleproduct'+productId)
    .then(result => setProducts(result.data))
    .catch(err => setProducts(err.message))
},[])


  const {name,title,description} = products

  console.log(products)
  return (
    <div>
        <h1>{name}</h1>
        <h1>{title}</h1>
        <h1>{description}</h1>
    </div>
  )
}

export default SingleUpdateProduct