import ProductShow from "./ProductShow/ProductShow";
import ProductContext from "../../context/products";
import { useContext } from "react";

const ProductList = () => {
  //filtered products pulled from useContext
  const { products } = useContext(ProductContext);
  //productList created to hold all the products which will be shown as cards
  const renderedProducts = products.map((product) => {
    return <ProductShow key={product.id} product={product} />;
  });
  //html format of productList
  return <div>{renderedProducts}</div>;
};
//ProductList exported here
export default ProductList;
