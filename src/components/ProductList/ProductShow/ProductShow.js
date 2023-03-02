import { useContext, useState } from "react";
import ProductEdit from "./ProductEdit/ProductEdit";
import ProductContext from "../../../context/products";
import DeleteImageButton from "../../../Image/deleteImage.png";
import EditImageButton from "../../../Image/EditImage.png";

const ProductShow = ({ product }) => {
  const { title, category, price, image, description, date } = product;
  const [showEdit, setShowEdit] = useState(false);
  const { deleteProductById } = useContext(ProductContext);

  const handleEditClick = () => {
    setShowEdit((p) => !p);
  };

  return (
    <>
      <div>
        <button>
          <img src={DeleteImageButton} alt="Delete Image Button" />
        </button>
        <button>
          <img
            src={EditImageButton}
            alt="Edit Image Button"
            onClick={handleEditClick}
          />
        </button>
      </div>
    </>
  );
};
export default ProductShow;
