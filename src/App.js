import AddProduct from "./components/AddProduct/AddProduct";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import "./styles.css";
import ProductContext from "./context/products";
import { useContext, useEffect } from "react";

export default function App() {
  const { fetchProducts } = useContext(ProductContext);
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <Header />
      <ProductList />
      <AddProduct />
    </div>
  );
}
