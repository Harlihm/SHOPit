import { useEffect, useState } from "react"
import Banner from "../components/Banner"
import Product from "../components/Product"
import { useLoaderData } from "react-router-dom"

const Home = () => {
const [products , setProducts]=useState([]);

const data =useLoaderData();

useEffect(()=>{
setProducts(data.data)
},[data])

  return (
    <div>
      <div>
        <Banner/>
        <Product products={products}/>
        
      </div>
    </div>
  )
}

export default Home
