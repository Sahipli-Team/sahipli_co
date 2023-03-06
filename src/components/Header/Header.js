import Image from "../../Image/Slogo.png";
import ProductContext from "../../context/products";
import { useContext } from "react";
const Header = () => {
  const { setSearch } = useContext(ProductContext);

  return (
    <div className="header">
      <img src={Image} alt="S title" />
      <form action="" autocomplete="on">
        <input
          className="search"
          placeholder="Search product..."
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <input type="submit" className="search_submit" />
      </form>
    </div>
  );
};
export default Header;
