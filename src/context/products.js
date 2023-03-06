import { createContext, useEffect, useState } from "react";
import axios from "axios";

const ProductContext = createContext();

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState(data);
  const [search, setSearch] = useState("");

  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:3001/products");
    setData(response.data);
    console.log(response.data);
    setProducts(data);
  };

  useEffect(() => {
    let newData = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase().trim())
    );
    setProducts(newData);
  }, [search, data]);

  const editProductById = async (
    id,
    date,
    newTitle,
    newCategory,
    newPrice,
    newDescription,
    newImage
  ) => {
    const response = await axios.put(`http://localhost:3001/products/${id}`, {
      date,
      title: newTitle,
      category: newCategory,
      price: newPrice,
      description: newDescription,
      image: newImage,
    });
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, ...response.data };
      }
      return product;
    });
    setProducts(updatedProducts);
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
    editProductById,
    setSearch,
  };
  return (
    <ProductContext.Provider value={valueToShare}>
      {children}
    </ProductContext.Provider>
  );
}

export { Provider };
export default ProductContext;
