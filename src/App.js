import AddProduct from "./components/AddProduct/AddProduct";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import "./styles.css";
export default function App() {
  return (
    <div>
      <Header />
      <ProductList />
      <AddProduct />
    </div>
  );
}
