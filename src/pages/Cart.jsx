// import { useSelector } from "react-redux"

import { ToastContainer } from "react-toastify"
import CartItem from "../components/CartItem"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react";

const Cart = () => {

  const productData =useSelector((state)=>state.shopit.productData);
  const [totalAmt, setTotalAmt]=useState("");

  useEffect(()=>{
    let price =0;
    productData.map((item)=>{
      price +=item.price * item.quantity;
      return price
  
    }); 
       setTotalAmt(price.toFixed(2));
  },[productData]);



  return (
    <div>
          <div className="cart-wrapper">
            <img style={{width:"100%" ,height:"15rem" ,objectFit:"cover"}}  src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="cartImg" />
            
            <div className="cartItemwrapper">
              <CartItem/>
              <div className="cart-productItem">
                <div className="prodItem-total">
                  <h2 style={{fontWeight:"bold ",textAlign:"start"}}>cart totals</h2>
                  <p style={{display:"flex",alignItems:"center",gap:"0.5rem" ,fontSize:"1rem",lineHeight:"1.5rem"}}>
                    Subtotal
                    <span style={{fontWeight:"bold"}}> 
                      ${totalAmt}
                    </span>
                  </p>
                  <p style={{display:"flex",alignItems:"center",gap:"0.5rem" ,fontSize:"1rem",lineHeight:"1.5rem"}}>
                    Shipping
                    <span style={{textAlign:"start"}}> 
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, assumenda.
                    </span>
                  </p>
                </div>
                <p style={{display:"flex", justifyContent:"space-between" ,marginTop:"0.6rem"}}>

                  Total <span style={{fontSize:"1.25rem",fontWeight:"bold"}}> ${totalAmt}</span>
                </p>

                <button className="checkout-btn"> Proceed To Checkout</button>
              </div>
            </div>
            </div> 
            <ToastContainer
position="top-left"
autoClose={3000}
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

export default Cart
