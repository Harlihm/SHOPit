import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";


const Produc = () => {
const [details , setDetails]= useState();
const location =useLocation();
console.log(location.state.item);

  useEffect(()=>{
       setDetails(location.state.item);

  },[]);

  return (
    <div>
      <dov className="produc-wrapper">
        <img src={details.image} alt="productimagr" />
      </dov>
    </div>
  )
}

export default Produc
