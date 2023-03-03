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
    <div className="wrapper">
      <p>Category: {category}</p>
      <p>Title: {title}</p>
      <img className="banner-image" src={image} alt={title} />
      <div>
        <p>Price: ${price}</p>
        <p>Advert Date: {date}</p>
      </div>
      <p className="desc">Description: {description}</p>
    </div>
  );
  if (showEdit) {
    content = <ProductEdit onSubmit={handleSubmit} product={product} />;
  }
  return (
    <div className="container">
      <div className="button-wrapper">
        <button className="btn fill">
          <img
            className="buttonImg"
            src={EditImageButton}
            alt="Edit Image Button"
            onClick={handleEditClick}
          />
        </button>
        <button className="btn outline" onClick={handleDeleteClick}>
          <img
            className="buttonImg"
            src={DeleteImageButton}
            alt="Delete Image Button"
          />
        </button>
      </div>
      {content}
    </div>
  );
};
export default ProductShow;
