import { useEffect, useState } from "react"
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../redux/shopitSlice";
import { ToastContainer, toast } from "react-toastify";


const Produc = () => {

const dispatch = useDispatch();
const [details , setDetails]= useState({});
let [ baseQty ,setBaseQty]=useState(1);
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
          <button onClick={()=>setBaseQty(baseQty ===1? baseQty=1: baseQty-1)}>-</button>
          <span>{baseQty}</span>
          <button onClick={()=>setBaseQty(baseQty + 1)}>+</button>
          </div>
        </div>

        <button onClick={()=>dispatch(
                   addToCart({
                    _id: details._id,
                    title: details.title,
                    image: details.image,
                    price: details.price,
                    quantity: baseQty,
                    description: details.description,
                   })

        ) & toast.success( `${details.title} is added`, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          })
        } className="cart-btn">
          add to cart
        </button>
       </div>

       <p>Category: <span style={{textTransform:"capitalize"}}>{details.category}</span></p>

     </div>


      
    </div>
    <ToastContainer
position="top-left"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </div>
  )
}

export default Produc
