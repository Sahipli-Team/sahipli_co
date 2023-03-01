import AddProduct from "./components/AddProduct/AddProduct";
import Header from "./components/Header/Header";
import ShowProduct from "./components/ShowProduct/ShowProduct";
import "./styles.css";
export default function App() {
  return (
    <div>
      <Header />
      <ShowProduct />
      <AddProduct />
    </div>
  );
}
