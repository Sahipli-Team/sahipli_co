import Image from "../../Image/Slogo.png";
import ProductContext from "../../context/products";
import { useContext } from "react";
import search from "../../Image/search.png";
const Header = () => {
  const { setSearch } = useContext(ProductContext);

  return (
    <div className="header">
      <img src={Image} alt="S title" />
      <div className="search-box">
        <button className="btn-search">
          <img src={search} alt="search image" />
        </button>
        <input
          className="input-search"
          placeholder="Search product..."
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </div>
    </div>
  );
};
export default Header;
