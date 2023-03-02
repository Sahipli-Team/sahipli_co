import { createContext, useState } from "react";
import axios from "axios";

const ProductContext = createContext();

function Provider({ children }) {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:3001/products");
    setProducts(response.data);
  };

  const createProduct = async (
    date,
    title,
    category,
    price,
    description,
    image
  ) => {
    const response = await axios.post("http://localhost:3001/products", {
      date,
      title,
      category,
      price,
      description,
      image,
    });
    const updatedProducts = [...products, response.data];
    setProducts(updatedProducts);
  };

  const deleteProductById = async (id) => {
    await axios.delete(`http://localhost:3001/products/${id}`);
    const updatedProducts = products.filter((product) => {
      return product.id !== id;
    });
    setProducts(updatedProducts);
  };

  const valueToShare = {
    products,
    fetchProducts,
    createProduct,
    deleteProductById,
  };
  return (
    <ProductContext.Provider value={valueToShare}>
      {children}
    </ProductContext.Provider>
  );
}

export { Provider };
export default ProductContext;
