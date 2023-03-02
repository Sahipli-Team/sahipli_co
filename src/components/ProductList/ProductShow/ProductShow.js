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
  const handleSubmit = () => {
    setShowEdit(false);
  };
  const handleDeleteClick = () => {
    deleteProductById(product.id);
  };

  let content = (
    <div>
      <p>Category: {category}</p>
      <p>Title: {title}</p>
      <img src={image} alt={title} />
      <div>
        <p>Price: ${price}</p>
        <p>Advert Date: {date}</p>
      </div>
      <p>Description: {description}</p>
    </div>
  );
  if (showEdit) {
    content = <ProductEdit onSubmit={handleSubmit} product={product} />;
  }
  return (
    <>
      <div>
        <butto onClick={handleDeleteClick}>
          <img src={DeleteImageButton} alt="Delete Image Button" />
        </butto>
        <button>
          <img
            src={EditImageButton}
            alt="Edit Image Button"
            onClick={handleEditClick}
          />
        </button>
      </div>
      {content}
    </>
  );
};
export default ProductShow;
