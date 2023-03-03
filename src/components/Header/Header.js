import Image from "../../Image/Slogo.png";

const Header = () => {
  return (
    <div className="header">
      <img
        style={{ width: "200px", height: "100px" }}
        src={Image}
        alt="S title"
      />
    </div>
  );
};
export default Header;
