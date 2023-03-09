import { createContext, useEffect, useState } from "react";
import axios from "axios";

const ProductContext = createContext();

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState(data);
  const [search, setSearch] = useState("");
  //products fetched from data base
  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:3001/products");
    setData(response.data);
    console.log(response.data);
    setProducts(data);
  };
  //It'll filter the data fetched from db according to the input value, each time search and data values changed
  useEffect(() => {
    let newData = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase().trim())
    );
    setProducts(newData);
  }, [search, data]);
  //editProduct will set the new values which are taken from the user and update the db
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
  //createProduct will save a new product to the db according to the user input values
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
  //deleteProductById will delete the chosen product according to the product's id
  const deleteProductById = async (id) => {
    await axios.delete(`http://localhost:3001/products/${id}`);
    const updatedProducts = products.filter((product) => {
      return product.id !== id;
    });
    setProducts(updatedProducts);
  };
  //those are the list of methods and variables can be used with useContext
  const valueToShare = {
    products,
    fetchProducts,
    createProduct,
    deleteProductById,
    editProductById,
    setSearch,
  };
  //It defines that all the children subcomponents of Provider can use valueToShare
  return (
    <ProductContext.Provider value={valueToShare}>
      {children}
    </ProductContext.Provider>
  );
}
//Provider exported
export { Provider };
//ProductContext exported
export default ProductContext;
