/* eslint-disable react/prop-types */

import { BsArrowRight } from "react-icons/bs"

const ProductCards = ({ product }) => {
  return (
   <div className="prod-group">
     <div className="prod-wrapper">
      <img className="prod-img" src={product.image} alt="productimg" />
    </div>
    <div className="prod-text">
     <div style={{display:"flex" ,justifyContent:"space-between" ,alignItems:"center"}}>
     <div>
        <h2 style={{fontSize:"16px" ,width:"max-content",marginRight:"15px"}}> {product.title.substring(0,15)}</h2>
       
      </div>
      {/* {width:"7rem",position:"relative",gap:"10px", display:"flex" ,justifyContent:"flex-end" ,fontSize: "0.875rem",lineHeight: "1.25rem"} */}
      <div style={{display:"flex" ,gap:"0.5rem" ,position:"relative" ,overflow:"hidden" ,width:"8rem"}}>
           <div className="prod-pp">
            <p style={{color: "gray" ,textDecoration:"line-through"}}>${product.oldPrice}</p>
            <p style={{fontWeight:"600"}}>${product.price}</p>
           </div>
        <p className="prod-p" >add to cart
        <span>
          <BsArrowRight/>
        </span>
        </p>
      </div>
     </div>
     <div>
      <p style={{height:"0.5rem"}}>{product.category}</p>
     </div>
     <div style={{position:"absolute",top:"4px",right:"0"}}>
      {product.isNew && (
        <p style={{background:"black" ,color:"white",fontWeight:"bold" ,padding:"0.5rem 2rem"}}>  Sale</p>
      )}
     </div>
    </div>
   </div>
  )
}

export default ProductCards
