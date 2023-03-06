import Image from "../../Image/Slogo.png";
import ProductContext from "../../context/products";
import { useContext } from "react";
const Header = () => {
  const { setSearch } = useContext(ProductContext);

  return (
    <div className="header">
      <img src={Image} alt="S title" />
      <input
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </div>
  );
};
export default Header;
