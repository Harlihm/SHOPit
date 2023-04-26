/* eslint-disable react/prop-types */

const ProductCards = ({ product }) => {
  return (
   <div className="prod-group">
     <div className="prod-wrapper">
      <img className="prod-img" src={product.image} alt="productimg" />
    </div>
    <div className="prod-text">
     <div style={{display:"flex" ,justifyContent:"space-between" ,alignItems:"center"}}>
     <div>
        <h2 style={{fontSize:"16px"}}> {product.title.substring(0,15)}</h2>
       
      </div>
      {/* {width:"7rem",position:"relative",gap:"10px", display:"flex" ,justifyContent:"flex-end" ,fontSize: "0.875rem",lineHeight: "1.25rem"} */}
      <div style={{display:"flex" ,gap:"0.5rem" ,position:"relative" ,overflow:"hidden"}}>
           <div className="prod-pp">
            <p style={{color: "gray" ,textDecoration:"line-through"}}>${product.oldPrice}</p>
            <p style={{fontWeight:"600"}}>${product.price}</p>
           </div>
        <p className="prod-p" >add to cart</p>
      </div>
     </div>
    </div>
   </div>
  )
}

export default ProductCards
