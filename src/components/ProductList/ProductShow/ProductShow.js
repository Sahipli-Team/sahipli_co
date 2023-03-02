import { useContext, useState } from "react";
import ProductEdit from "./ProductEdit/ProductEdit";
import ProductContext from "../../../context/products";

const ProductShow = ({ product }) => {
  const { title, category, price, image, description, date } = product;
  const [showEdit, setShowEdit] = useState(false);
  const { deleteProductById } = useContext(ProductContext);
  return (
    <>
      <div>
        <ProductEdit />
      </div>
      <div></div>
    </>
  );
};
export default ProductShow;
