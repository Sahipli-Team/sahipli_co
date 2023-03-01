import ProductDelete from "./ProductDelete/ProductDelete"
import ProductDetails from "./ProductDetails/ProductDetails"
import ProductEdit from "./ProductEdit/ProductEdit"

const ProductList = () => {
  return (
    <>
      <div>
        <ProductDelete/> <ProductEdit/>
      </div>
      <div> 
        <ProductDetails/>
      </div>
    </>
  )
}
export default ProductList