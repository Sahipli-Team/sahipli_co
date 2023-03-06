import Image from "../../Image/Slogo.png";
import ProductContext from "../../context/products";
import { useContext } from "react";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
  integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>;
const Header = () => {
  const { setSearch } = useContext(ProductContext);

  return (
    <div className="header">
      <img src={Image} alt="S title" />
      <div className="search-box">
        <button className="btn-search">
          <i class="fas fa-search"></i>
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
