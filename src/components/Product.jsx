import ProductCards from "./ProductCards"

const Product = () => {
  return (
    <div className="product-wrapper">
      <div className="product-text">
        <h1>Shopping everyday</h1>
        <span className="line"></span>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis et vero suscipit unde eum quo dolor hic eos, cum dolorum dignissimos explicabo quod quia adipisci ullam saepe accusamus aut amet a, quisquam quibusdam voluptas praesentium! Vero autem, a praesentium enim assumenda vitae aliquid laborum reiciendis quia quas, ex sint. Reiciendis!2222222222222222222222222222222222222222222222222222222222</p>
      </div>
      <div className="product-card">
        <ProductCards/>
      </div>
    </div>
  )
}

export default Product
