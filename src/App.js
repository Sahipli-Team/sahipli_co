import AddProduct from "./components/AddProduct/AddProduct";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import "./styles.css";
import ProductContext from "./context/products";
import { useContext, useEffect } from "react";

export default function App() {
  //all the datas will be fetched from DB at the first load of screen
  const { fetchProducts } = useContext(ProductContext);
  useEffect(() => {
    fetchProducts();
  }, []);
  //component types which will form the webpage is introduced under the App.js
  return (
    <div>
      <Header />
      <ProductList />
      <AddProduct />
    </div>
  );
}
