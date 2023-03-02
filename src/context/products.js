import { createContext, useState } from "react";
import axios from "axios";

const ProductContext = createContext();

function Provider({ children }) {
  const [products, setProducts] = useState([]);

  const createProduct = async (
    date,
    title,
    category,
    price,
    description,
    image) => {
      const response = await axios.post('http://localhost:3001/products',{
        date,
        title,
        category,
        price,
        description,
        image
      })
      const updatedProducts = [...products, response.data]
      setProducts(updatedProducts)
    }
  const valueToShare = {
    products,
    createProduct,
  };
  return (
    <ProductContext.Provider value={valueToShare}>
      {children}
    </ProductContext.Provider>
  );
}

export { Provider };
export default ProductContext;
