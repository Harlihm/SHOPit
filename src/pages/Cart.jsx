// import { useSelector } from "react-redux"

import CartItem from "../components/CartItem"

const Cart = () => {
// const productData = useSelector((state)=> state.shopit.productData);


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
                    Subtotal {" "}
                    <span style={{fontWeight:"bold"}}> 
                      ${200}
                    </span>
                  </p>
                  <p style={{display:"flex",alignItems:"center",gap:"0.5rem" ,fontSize:"1rem",lineHeight:"1.5rem"}}>
                    Shipping {" "}
                    <span style={{textAlign:"start"}}> 
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, assumenda.
                    </span>
                  </p>
                </div>
                <p style={{display:"flex", justifyContent:"space-between" ,marginTop:"0.6rem"}}>

                  Total <span style={{fontSize:"1.25rem",fontWeight:"bold"}}> ${1000}</span>
                </p>

                <button> proceed to checkout</button>
              </div>
            </div>
            </div> 
    </div>
  )
}

export default Cart
