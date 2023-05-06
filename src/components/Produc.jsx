import { useEffect, useState } from "react"
import { MdOutlineStar } from "react-icons/md";
import { useLocation } from "react-router-dom";


const Produc = () => {


const [details , setDetails]= useState({});
const location =useLocation();

  useEffect(()=>{
       setDetails(location.state.item);

  },[location.state.item]);

  return (
    <div>
    <div style={{maxWidth:"1280px" ,margin:"0.5rem auto",display:"flex" ,gap:"1.5rem", justifyContent:"space-between"}}>
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
      
     <div style={{width:"60%" ,display:"flex", flexDirection:"column", justifyContent:"center",gap:"0.5rem", alignItems:"flex-start"}}>


 <div >

 <h2 style={{textAlign:"Start"}}>{details.title}</h2>
 <div style={{display:"flex",alignItems:"center" ,gap:"0.5rem"}}>
 <p style={{textDecoration:"line-through", color:"gray",fontSize:"15px", fontWeight:"bold"}}>
  ${details.oldPrice}
</p>
<p style={{fontSize:"20px" ,fontWeight:"bolder"}}>
  ${details.price}
</p>
 </div>

</div>



<div className="ratings">
<div style={{display:"flex"}}>
<MdOutlineStar/>
  <MdOutlineStar/>
  <MdOutlineStar/>
  <MdOutlineStar/>
  <MdOutlineStar/>
</div>
<p>(1 customer review)</p>

</div>
    <p style={{textAlign:"start"}} >{details.description}</p>
       <div style={{display:"flex",gap:"0.5rem"}}>
       <div className="prod-quantity">
          <p className="quanitiy">Quantity</p>
          <div className="quantity-btn">
          <button>-</button>
          <span>{1}</span>
          <button>+</button>
          </div>
        </div>

        <button className="cart-btn">
          add to cart
        </button>
       </div>

       <p>Category: <span style={{textTransform:"capitalize"}}>{details.category}</span></p>

     </div>


      
    </div>
    </div>
  )
}

export default Produc
