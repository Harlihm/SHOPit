import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";


const Produc = () => {


const [details , setDetails]= useState({});
const location =useLocation();

  useEffect(()=>{
       setDetails(location.state.item);

  },[]);

  return (
    <div>
             <div style={{maxWidth:"1280px" ,margin:"auto 0.5rem",display:"flex" ,gap:"0.5rem"}}>
                  <div style={{width:"40%",position:"relative"}} className="produc-wrapper-img">
                    <img style={{width:"100%",height:"550px" ,objectFit:"cover"}} src={details.image} alt="productimager" />
                  <div style={{position:"absolute",top:"4px",right:"0"}}>
                    {details.isNew && (
                     <p style={{backgroundColor:"black",color:"white",fontWeight:"bold", padding:"0.5rem 2rem"}}>

                           Sale
                     </p>

                    )}
             </div>
      
      </div>
      
     <div style={{width:"60%"}}>
<div>
  <h2 style={{}}>{details.title}</h2>
 <div>
 <p style={{textDecoration:"line-through", color:"gray", fontWeight:"bold"}}>
  ${details.oldPrice}
</p>
<p>
  ${details.price}
</p>
 </div>
</div>


     </div>
      
    </div>
    </div>
  )
}

export default Produc
