import ProductShow from "./ProductShow/ProductShow";
import ProductContext from "../../context/products";
import { useContext } from "react";

const ProductList = () => {
  const { products } = useContext(ProductContext);
  const renderedProducts = products.map((product) => {
    return <ProductShow key={product.id} product={product} />;
  });
  return <div>{renderedProducts}</div>;
};
export default ProductList;
