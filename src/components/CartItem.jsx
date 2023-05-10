import { useDispatch, useSelector } from "react-redux";
import { MdOutlineClose } from "react-icons/md"
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { decrementQuantity, deleteItem, increamentQuantity, resetCart } from "../redux/shopitSlice";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";


const CartItem = () => {
const productData = useSelector((state)=> state.shopit.productData);
const dispatch =useDispatch();

  return (
    <div style={{display:"flex",alignItems:"flex-start",flexDirection:"column",width:"66.67%",paddingRight:"2.5rem"}}>
      <div style={{width:"100%"}}>
        <h2 style={{fontSize:"1.25rem",textAlign:"start"}}>shopping cart</h2>

      </div>
      <div>

        {  productData.map((item)=>(
            <div key={item._id} className="cart-saleswrapper"> 
                <div className="cart-sales">
                    <MdOutlineClose onClick={()=>dispatch(deleteItem(item._id))& toast.error(`${item.title} is removed`)} className="removecart"/>
                    <img style={{width:"8rem", height:"8rem",objectFit:"cover"}}
                     src={item.image} alt="prodcutimg" />
                </div>
                <h2 style={{width:"13rem",fontWeight:"normal",fontSize:"16px"}}>{item.title}</h2>
                <p style={{width:"2.5rem"}}>${item.price}</p>
                <div className="prod-quantity">
          <p className="quanitiy">Quantity</p>
          <div className="quantity-btn">
          <button onClick={()=>dispatch(
            decrementQuantity({
                _id:item._id,
                title: item.title,
                image: item.image,
                price: item.price,
                quantity: 1,
                description: item.description,

            })
          )}>-</button>
          <span>{item.quantity}</span>
          <button  onClick={()=>dispatch(
            increamentQuantity({
                _id:item._id,
                title: item.title,
                image: item.image,
                price: item.price,
                quantity: 1,
                description: item.description,

            })
          )}>+</button>
          </div>
        </div>
          <p style={{width:"3.5rem"}}>${item.quantity * item.price}</p>
            </div>
          ))
        }
      </div>
      <button onClick={()=>dispatch(resetCart()) & toast.error("Your Cart Is Empty")} className="resetcart">
        Reset cart
      </button>
      <Link  to="/">
      <div style={{marginTop:"1rem"}}>
        <BsFillArrowLeftCircleFill/> Go shopping
      </div>
      </Link>
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

export default CartItem
